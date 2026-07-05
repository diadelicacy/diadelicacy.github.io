var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=Array.isArray,r=Array.prototype.indexOf,i=Array.prototype.includes,a=Array.from,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyDescriptors,l=Object.prototype,u=Array.prototype,d=Object.getPrototypeOf,f=Object.isExtensible,p=()=>{};function m(e){return e()}function h(e){for(var t=0;t<e.length;t++)e[t]()}function g(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var _=1024,v=2048,y=4096,b=8192,x=16384,S=32768,ee=1<<25,C=65536,te=1<<18,ne=1<<19,re=1<<20,ie=1<<25,ae=65536,oe=1<<21,se=1<<22,ce=1<<23,le=Symbol(`$state`),ue=Symbol(`legacy props`),de=Symbol(``),fe=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},pe=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`);function me(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function he(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function ge(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function _e(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function ve(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function ye(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function be(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function xe(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function Se(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function Ce(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function we(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Te(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Ee={},w=Symbol(),De=`http://www.w3.org/1999/xhtml`,Oe=`http://www.w3.org/2000/svg`,ke=`http://www.w3.org/1998/Math/MathML`;function Ae(){console.warn(`https://svelte.dev/e/derived_inert`)}function je(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function Me(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function Ne(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var T=!1;function Pe(e){T=e}var E;function D(e){if(e===null)throw je(),Ee;return E=e}function Fe(){return D(mn(E))}function O(e){if(T){if(mn(E)!==null)throw je(),Ee;E=e}}function Ie(e=1){if(T){for(var t=e,n=E;t--;)n=mn(n);E=n}}function Le(e=!0){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=mn(n);e&&n.remove(),n=i}}function Re(e){if(!e||e.nodeType!==8)throw je(),Ee;return e.data}function ze(e){return e===this.v}function Be(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Ve(e){return!Be(e,this.v)}var He=!1,Ue=!1;function We(){Ue=!0}var k=null;function Ge(e){k=e}function A(e,t=!1,n){k={p:k,i:!1,c:null,e:null,s:e,x:null,r:U,l:Ue&&!t?{s:null,u:null,$:[]}:null}}function j(e){var t=k,n=t.e;if(n!==null){t.e=null;for(var r of n)jn(r)}return e!==void 0&&(t.x=e),t.i=!0,k=t.p,e??{}}function Ke(){return!Ue||k!==null&&k.l===null}var qe=[];function Je(){var e=qe;qe=[],h(e)}function Ye(e){if(qe.length===0&&!gt){var t=qe;queueMicrotask(()=>{t===qe&&Je()})}qe.push(e)}function Xe(){for(;qe.length>0;)Je()}function Ze(e){var t=U;if(t===null)return H.f|=ce,e;if(!(t.f&32768)&&!(t.f&4))throw e;Qe(e,t)}function Qe(e,t){for(;t!==null;){if(t.f&128){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}var $e=~(v|y|_);function M(e,t){e.f=e.f&$e|t}function et(e){e.f&512||e.deps===null?M(e,_):M(e,y)}function tt(e){if(e!==null)for(let t of e)!(t.f&2)||!(t.f&65536)||(t.f^=ae,tt(t.deps))}function nt(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),tt(e.deps),M(e,_)}function rt(e,t,n){if(e==null)return t(void 0),n&&n(void 0),p;let r=G(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var it=[];function at(e,t=p){let n=null,r=new Set;function i(t){if(Be(e,t)&&(e=t,n)){let t=!it.length;for(let t of r)t[1](),it.push(t,e);if(t){for(let e=0;e<it.length;e+=2)it[e][0](it[e+1]);it.length=0}}}function a(t){i(t(e))}function o(o,s=p){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||p),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function ot(e){let t;return rt(e,e=>t=e)(),t}var st=!1,ct=!1,lt=Symbol();function ut(e,t,n){let r=n[t]??={store:null,source:F(void 0),unsubscribe:p};if(r.store!==e&&!(lt in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=p;else{var i=!0;r.unsubscribe=rt(e,e=>{i?r.source.v=e:I(r.source,e)}),i=!1}return e&&lt in n?ot(e):W(r.source)}function dt(){let e={};function t(){kn(()=>{for(var t in e)e[t].unsubscribe();o(e,lt,{enumerable:!1,value:!0})})}return[e,t]}function ft(e){var t=ct;try{return ct=!1,[e(),ct]}finally{ct=t}}var pt=new Set,N=null,mt=null,P=null,ht=null,gt=!1,_t=!1,vt=null,yt=null,bt=0,xt=1,St=class e{id=xt++;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=new Set;#r=new Map;#i=new Map;#a=null;#o=[];#s=[];#c=new Set;#l=new Set;#u=new Map;#d=new Set;is_fork=!1;#f=!1;#p=new Set;#m(){return this.is_fork||this.#i.size>0}#h(){for(let n of this.#p)for(let r of n.#i.keys()){for(var e=!1,t=r;t.parent!==null;){if(this.#u.has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1}skip_effect(e){this.#u.has(e)||this.#u.set(e,{d:[],m:[]}),this.#d.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#u.get(e);if(n){this.#u.delete(e);for(var r of n.d)M(r,v),t(r);for(r of n.m)M(r,y),t(r)}this.#d.add(e)}#g(){if(bt++>1e3&&(pt.delete(this),wt()),!this.#m()){for(let e of this.#c)this.#l.delete(e),M(e,v),this.schedule(e);for(let e of this.#l)M(e,y),this.schedule(e)}let t=this.#o;this.#o=[],this.apply();var n=vt=[],r=[],i=yt=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw jt(e),t}if(N=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(vt=null,yt=null,this.#m()||this.#h()){this.#v(r),this.#v(n);for(let[e,t]of this.#u)At(e,t)}else{this.#r.size===0&&pt.delete(this),this.#c.clear(),this.#l.clear();for(let e of this.#e)e(this);this.#e.clear(),mt=this,Et(r),Et(n),mt=null,this.#a?.resolve()}var o=N;if(this.#o.length>0){let e=o??=this;e.#o.push(...this.#o.filter(t=>!e.#o.includes(t)))}o!==null&&(pt.add(o),o.#g()),He&&!pt.has(this)&&this.#y()}#_(e,t,n){e.f^=_;for(var r=e.first;r!==null;){var i=r.f,a=(i&96)!=0;if(!(a&&i&1024||i&8192||this.#u.has(r))&&r.fn!==null){a?r.f^=_:i&4?t.push(r):He&&i&16777224?n.push(r):hr(r)&&(i&16&&this.#l.add(r),br(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(e){for(var t=0;t<e.length;t+=1)nt(e[t],this.#c,this.#l)}capture(e,t,n=!1){e.v!==w&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),P?.set(e,t)),this.is_fork||(e.v=t)}activate(){N=this}deactivate(){N=null,P=null}flush(){try{_t=!0,N=this,this.#g()}finally{bt=0,ht=null,vt=null,yt=null,_t=!1,N=null,P=null,Yt.clear()}}discard(){for(let e of this.#t)e(this);this.#t.clear(),this.#n.clear(),pt.delete(this)}register_created_effect(e){this.#s.push(e)}#y(){for(let l of pt){var e=l.id<this.id,t=[];for(let[r,[i,a]]of this.current){if(l.current.has(r)){var n=l.current.get(r)[0];if(e&&i!==n)l.current.set(r,[i,a]);else continue}t.push(r)}var r=[...l.current.keys()].filter(e=>!this.current.has(e));if(r.length===0)e&&l.discard();else if(t.length>0){if(e)for(let e of this.#d)l.unskip_effect(e,e=>{e.f&4194320?l.schedule(e):l.#v([e])});l.activate();var i=new Set,a=new Map;for(var o of t)Dt(o,r,i,a);a=new Map;var s=[...l.current.keys()].filter(e=>this.current.has(e)?this.current.get(e)[0]!==e:!0);for(let e of this.#s)!(e.f&155648)&&Ot(e,s,a)&&(e.f&4194320?(M(e,v),l.schedule(e)):l.#c.add(e));if(l.#o.length>0){l.apply();for(var c of l.#o)l.#_(c,[],[]);l.#o=[]}l.deactivate()}}for(let e of pt)e.#p.has(this)&&(e.#p.delete(this),e.#p.size===0&&!e.#m()&&(e.activate(),e.#g()))}increment(e,t){let n=this.#r.get(t)??0;if(this.#r.set(t,n+1),e){let e=this.#i.get(t)??0;this.#i.set(t,e+1)}}decrement(e,t,n){let r=this.#r.get(t)??0;if(r===1?this.#r.delete(t):this.#r.set(t,r-1),e){let e=this.#i.get(t)??0;e===1?this.#i.delete(t):this.#i.set(t,e-1)}this.#f||n||(this.#f=!0,Ye(()=>{this.#f=!1,this.flush()}))}transfer_effects(e,t){for(let t of e)this.#c.add(t);for(let e of t)this.#l.add(e);e.clear(),t.clear()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}on_fork_commit(e){this.#n.add(e)}run_fork_commit_callbacks(){for(let e of this.#n)e(this);this.#n.clear()}settled(){return(this.#a??=g()).promise}static ensure(){if(N===null){let t=N=new e;_t||(pt.add(N),gt||Ye(()=>{N===t&&t.flush()}))}return N}apply(){if(!He||!this.is_fork&&pt.size===1){P=null;return}P=new Map;for(let[e,[t]]of this.current)P.set(e,t);for(let n of pt)if(!(n===this||n.is_fork)){var e=!1,t=!1;if(n.id<this.id)for(let[r,[,i]]of n.current)i||(e||=this.current.has(r),t||=!this.current.has(r));if(e&&t)this.#p.add(n);else for(let[e,t]of n.previous)P.has(e)||P.set(e,t)}}schedule(e){if(ht=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(vt!==null&&t===U&&(He||(H===null||!(H.f&2))&&!st))return;if(n&96){if(!(n&1024))return;t.f^=_}}this.#o.push(t)}};function Ct(e){var t=gt;gt=!0;try{var n;for(e&&(N!==null&&!N.is_fork&&N.flush(),n=e());;){if(Xe(),N===null)return n;N.flush()}}finally{gt=t}}function wt(){try{be()}catch(e){Qe(e,ht)}}var Tt=null;function Et(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&hr(r)&&(Tt=new Set,br(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Gn(r),Tt?.size>0)){Yt.clear();for(let e of Tt){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)Tt.has(n)&&(Tt.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||br(n)}}Tt.clear()}}Tt=null}}function Dt(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let e=i.f;e&2?Dt(i,t,n,r):e&4194320&&!(e&2048)&&Ot(i,t,r)&&(M(i,v),kt(i))}}function Ot(e,t,n){let r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(let r of e.deps){if(i.call(t,r))return!0;if(r.f&2&&Ot(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function kt(e){N.schedule(e)}function At(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),M(e,_);for(var n=e.first;n!==null;)At(n,t),n=n.next}}function jt(e){M(e,_);for(var t=e.first;t!==null;)jt(t),t=t.next}function Mt(e){let t=0,n=Zt(0),r;return()=>{On()&&(W(n),Rn(()=>(t===0&&(r=G(()=>e(()=>tn(n)))),t+=1,()=>{Ye(()=>{--t,t===0&&(r?.(),r=void 0,tn(n))})})))}}var Nt=C|ne;function Pt(e,t,n,r){new Ft(e,t,n,r)}var Ft=class{parent;is_pending=!1;transform_error;#e;#t=T?E:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=Mt(()=>(this.#m=Zt(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=U;t.b=this,t.f|=128,n(e)},this.parent=U.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=zn(()=>{if(T){let e=this.#t;Fe();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#v():this.#g()}else this.#y()},Nt),T&&(this.#e=E)}#g(){try{this.#a=Bn(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed;t&&(this.#s=Bn(()=>{t(this.#e,()=>e,()=>()=>{})}))}#v(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=Bn(()=>e(this.#e)),Ye(()=>{var e=this.#c=document.createDocumentFragment(),t=pn();e.append(t),this.#a=this.#x(()=>Bn(()=>this.#r(t))),this.#u===0&&(this.#e.before(e),this.#c=null,Kn(this.#o,()=>{this.#o=null}),this.#b(N))}))}#y(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=Bn(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Xn(this.#a,e);let t=this.#n.pending;this.#o=Bn(()=>t(this.#e))}else this.#b(N)}catch(e){this.error(e)}}#b(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){nt(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#x(e){var t=U,n=H,r=k;rr(this.#i),nr(this.#i),Ge(this.#i.ctx);try{return St.ensure(),e()}catch(e){return Ze(e),null}finally{rr(t),nr(n),Ge(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#u+=e,this.#u===0&&(this.#b(t),this.#o&&Kn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#S(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,Ye(()=>{this.#d=!1,this.#m&&$t(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),W(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;N?.is_fork?(this.#a&&N.skip_effect(this.#a),this.#o&&N.skip_effect(this.#o),this.#s&&N.skip_effect(this.#s),N.on_fork_commit(()=>{this.#C(e)})):this.#C(e)}#C(e){this.#a&&=(V(this.#a),null),this.#o&&=(V(this.#o),null),this.#s&&=(V(this.#s),null),T&&(D(this.#t),Ie(),D(Le()));var t=this.#n.onerror;let n=this.#n.failed;var r=!1,i=!1;let a=()=>{if(r){Ne();return}r=!0,i&&Te(),this.#s!==null&&Kn(this.#s,()=>{this.#s=null}),this.#x(()=>{this.#y()})},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){Qe(e,this.#i&&this.#i.parent)}n&&(this.#s=this.#x(()=>{try{return Bn(()=>{var t=U;t.b=this,t.f|=128,n(this.#e,()=>e,()=>a)})}catch(e){return Qe(e,this.#i.parent),null}}))};Ye(()=>{var t;try{t=this.transform_error(e)}catch(e){Qe(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>Qe(e,this.#i&&this.#i.parent)):o(t)})}};function It(e,t,n,r){let i=Ke()?Bt:Ht;var a=e.filter(e=>!e.settled);if(n.length===0&&a.length===0){r(t.map(i));return}var o=U,s=Lt(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function l(e){s();try{r(e)}catch(e){o.f&16384||Qe(e,o)}Rt()}if(n.length===0){c.then(()=>l(t.map(i)));return}var u=zt();function d(){Promise.all(n.map(e=>Vt(e))).then(e=>l([...t.map(i),...e])).catch(e=>Qe(e,o)).finally(()=>u())}c?c.then(()=>{s(),d(),Rt()}):d()}function Lt(){var e=U,t=H,n=k,r=N;return function(i=!0){rr(e),nr(t),Ge(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function Rt(e=!0){rr(null),nr(null),Ge(null),e&&N?.deactivate()}function zt(){var e=U,t=e.b,n=N,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),(i=!1)=>{t.update_pending_count(-1,n),n.decrement(r,e,i)}}function Bt(e){var t=2|v;return U!==null&&(U.f|=ne),{ctx:k,deps:null,effects:null,equals:ze,f:t,fn:e,reactions:null,rv:0,v:w,wv:0,parent:U,ac:null}}function Vt(e,t,n){let r=U;r===null&&he();var i=void 0,a=Zt(w),o=!H,s=new Map;return Ln(()=>{var t=U,n=g();i=n.promise;try{Promise.resolve(e()).then(n.resolve,n.reject).finally(Rt)}catch(e){n.reject(e),Rt()}var c=N;if(o){if(t.f&32768)var l=zt();if(r.b.is_rendered())s.get(c)?.reject(fe),s.delete(c);else{for(let e of s.values())e.reject(fe);s.clear()}s.set(c,n)}let u=(e,n=void 0)=>{if(l&&l(n===fe),!(n===fe||t.f&16384)){if(c.activate(),n)a.f|=ce,$t(a,n);else{a.f&8388608&&(a.f^=ce),$t(a,e);for(let[e,t]of s){if(s.delete(e),e===c)break;t.reject(fe)}}c.deactivate()}};n.promise.then(u,e=>u(null,e||`unknown`))}),kn(()=>{for(let e of s.values())e.reject(fe)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function Ht(e){let t=Bt(e);return t.equals=Ve,t}function Ut(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)V(t[n])}}function Wt(e){var t,n=U,r=e.parent;if(!$n&&r!==null&&r.f&24576)return Ae(),e.v;rr(r);try{e.f&=~ae,Ut(e),t=_r(e)}finally{rr(n)}return t}function Gt(e){var t=Wt(e);if(!e.equals(t)&&(e.wv=mr(),(!N?.is_fork||e.deps===null)&&(N===null?e.v=t:N.capture(e,t,!0),e.deps===null))){M(e,_);return}$n||(P===null?et(e):(On()||N?.is_fork)&&P.set(e,t))}function Kt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(fe),t.teardown=p,t.ac=null,yr(t,0),Hn(t))}function qt(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&br(t)}var Jt=new Set,Yt=new Map,Xt=!1;function Zt(e,t){return{f:0,v:e,reactions:null,equals:ze,rv:0,wv:0}}function Qt(e,t){let n=Zt(e,t);return ar(n),n}function F(e,t=!1,n=!0){let r=Zt(e);return t||(r.equals=Ve),Ue&&n&&k!==null&&k.l!==null&&(k.l.s??=[]).push(r),r}function I(e,t,n=!1){return H!==null&&(!tr||H.f&131072)&&Ke()&&H.f&4325394&&(ir===null||!i.call(ir,e))&&we(),$t(e,n?rn(t):t,yt)}function $t(e,t,n=null){if(!e.equals(t)){Yt.set(e,$n?t:e.v);var r=St.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&Wt(t),P===null&&et(t)}e.wv=mr(),nn(e,v,n),Ke()&&U!==null&&U.f&1024&&!(U.f&96)&&(cr===null?lr([e]):cr.push(e)),!r.is_fork&&Jt.size>0&&!Xt&&en()}return t}function en(){Xt=!1;for(let e of Jt)e.f&1024&&M(e,y),hr(e)&&br(e);Jt.clear()}function tn(e){I(e,e.v+1)}function nn(e,t,n){var r=e.reactions;if(r!==null)for(var i=Ke(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(!(!i&&s===U)){var l=(c&v)===0;if(l&&M(s,t),c&2){var u=s;P?.delete(u),c&65536||(c&512&&(U===null||!(U.f&2097152))&&(s.f|=ae),nn(u,y,n))}else if(l){var d=s;c&16&&Tt!==null&&Tt.add(d),n===null?kt(d):n.push(d)}}}}function rn(e){if(typeof e!=`object`||!e||le in e)return e;let t=d(e);if(t!==l&&t!==u)return e;var r=new Map,i=n(e),a=Qt(0),o=null,c=fr,f=e=>{if(fr===c)return e();var t=H,n=fr;nr(null),pr(c);var r=e();return nr(t),pr(n),r};return i&&r.set(`length`,Qt(e.length,o)),new Proxy(e,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Se();var i=r.get(t);return i===void 0?f(()=>{var e=Qt(n.value,o);return r.set(t,e),e}):I(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>Qt(w,o));r.set(t,e),tn(a)}}else I(n,w),tn(a);return!0},get(t,n,i){if(n===le)return e;var a=r.get(n),c=n in t;if(a===void 0&&(!c||s(t,n)?.writable)&&(a=f(()=>Qt(rn(c?t[n]:w),o)),r.set(n,a)),a!==void 0){var l=W(a);return l===w?void 0:l}return Reflect.get(t,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=W(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==w)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===le)return!0;var n=r.get(t),i=n!==void 0&&n.v!==w||Reflect.has(e,t);return(n!==void 0||U!==null&&(!i||s(e,t)?.writable))&&(n===void 0&&(n=f(()=>Qt(i?rn(e[t]):w,o)),r.set(t,n)),W(n)===w)?!1:i},set(e,t,n,c){var l=r.get(t),u=t in e;if(i&&t===`length`)for(var d=n;d<l.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>Qt(w,o)),r.set(d+``,p)):I(p,w)}if(l===void 0)(!u||s(e,t)?.writable)&&(l=f(()=>Qt(void 0,o)),I(l,rn(n)),r.set(t,l));else{u=l.v!==w;var m=f(()=>rn(n));I(l,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(c,n),!u){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&I(g,_+1)}tn(a)}return!0},ownKeys(e){W(a);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==w});for(var[n,i]of r)i.v!==w&&!(n in e)&&t.push(n);return t},setPrototypeOf(){Ce()}})}function an(e){try{if(typeof e==`object`&&e&&le in e)return e[le]}catch{}return e}function on(e,t){return Object.is(an(e),an(t))}var sn,cn,ln,un,dn;function fn(){if(sn===void 0){sn=window,cn=document,ln=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;un=s(t,`firstChild`).get,dn=s(t,`nextSibling`).get,f(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),f(n)&&(n.__t=void 0)}}function pn(e=``){return document.createTextNode(e)}function L(e){return un.call(e)}function mn(e){return dn.call(e)}function R(e,t){if(!T)return L(e);var n=L(E);if(n===null)n=E.appendChild(pn());else if(t&&n.nodeType!==3){var r=pn();return n?.before(r),D(r),r}return t&&yn(n),D(n),n}function hn(e,t=!1){if(!T){var n=L(e);return n instanceof Comment&&n.data===``?mn(n):n}if(t){if(E?.nodeType!==3){var r=pn();return E?.before(r),D(r),r}yn(E)}return E}function z(e,t=1,n=!1){let r=T?E:e;for(var i;t--;)i=r,r=mn(r);if(!T)return r;if(n){if(r?.nodeType!==3){var a=pn();return r===null?i?.after(a):r.before(a),D(a),a}yn(r)}return D(r),r}function gn(e){e.textContent=``}function _n(){return!He||Tt!==null?!1:(U.f&S)!==0}function vn(e,t,n){let r=n?{is:n}:void 0;return document.createElementNS(t??`http://www.w3.org/1999/xhtml`,e,r)}function yn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function bn(e){T&&L(e)!==null&&gn(e)}var xn=!1;function Sn(){xn||(xn=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Cn(e){var t=H,n=U;nr(null),rr(null);try{return e()}finally{nr(t),rr(n)}}function wn(e,t,n,r=n){e.addEventListener(t,()=>Cn(n));let i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),Sn()}function Tn(e){U===null&&(H===null&&ye(e),ve()),$n&&_e(e)}function En(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Dn(e,t){var n=U;n!==null&&n.f&8192&&(e|=b);var r={ctx:k,deps:null,nodes:null,f:e|v|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};N?.register_created_effect(r);var i=r;if(e&4)vt===null?St.ensure().schedule(r):vt.push(r);else if(t!==null){try{br(r)}catch(e){throw V(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=C))}if(i!==null&&(i.parent=n,n!==null&&En(i,n),H!==null&&H.f&2&&!(e&64))){var a=H;(a.effects??=[]).push(i)}return r}function On(){return H!==null&&!tr}function kn(e){let t=Dn(8,null);return M(t,_),t.teardown=e,t}function An(e){Tn(`$effect`);var t=U.f;if(!H&&t&32&&!(t&32768)){var n=k;(n.e??=[]).push(e)}else return jn(e)}function jn(e){return Dn(4|re,e)}function Mn(e){return Tn(`$effect.pre`),Dn(8|re,e)}function Nn(e){St.ensure();let t=Dn(64|ne,e);return(e={})=>new Promise(n=>{e.outro?Kn(t,()=>{V(t),n(void 0)}):(V(t),n(void 0))})}function Pn(e){return Dn(4,e)}function Fn(e,t){var n=k,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=Rn(()=>{if(e(),!r.ran){r.ran=!0;var n=U;try{rr(n.parent),G(t)}finally{rr(n)}}})}function In(){var e=k;Rn(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&1024&&n.deps!==null&&M(n,y),hr(n)&&br(n),t.ran=!1}})}function Ln(e){return Dn(se|ne,e)}function Rn(e,t=0){return Dn(8|t,e)}function B(e,t=[],n=[],r=[]){It(r,t,n,t=>{Dn(8,()=>e(...t.map(W)))})}function zn(e,t=0){return Dn(16|t,e)}function Bn(e){return Dn(32|ne,e)}function Vn(e){var t=e.teardown;if(t!==null){let e=$n,n=H;er(!0),nr(null);try{t.call(null)}finally{er(e),nr(n)}}}function Hn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Cn(()=>{e.abort(fe)});var r=n.next;n.f&64?n.parent=null:V(n,t),n=r}}function Un(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||V(t),t=n}}function V(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(Wn(e.nodes.start,e.nodes.end),n=!0),M(e,ee),Hn(e,t&&!n),yr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Vn(e),e.f^=ee,e.f|=x;var i=e.parent;i!==null&&i.first!==null&&Gn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Wn(e,t){for(;e!==null;){var n=e===t?null:mn(e);e.remove(),e=n}}function Gn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Kn(e,t,n=!0){var r=[];qn(e,r,!0);var i=()=>{n&&V(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function qn(e,t,n){if(!(e.f&8192)){e.f^=b;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=(i.f&65536)!=0||(i.f&32)!=0&&(e.f&16)!=0;qn(i,t,o?n:!1)}i=a}}}function Jn(e){Yn(e,!0)}function Yn(e,t){if(e.f&8192){e.f^=b,e.f&1024||(M(e,v),St.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;Yn(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Xn(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:mn(n);t.append(n),n=i}}var Zn=null,Qn=!1,$n=!1;function er(e){$n=e}var H=null,tr=!1;function nr(e){H=e}var U=null;function rr(e){U=e}var ir=null;function ar(e){H!==null&&(!He||H.f&2)&&(ir===null?ir=[e]:ir.push(e))}var or=null,sr=0,cr=null;function lr(e){cr=e}var ur=1,dr=0,fr=dr;function pr(e){fr=e}function mr(){return++ur}function hr(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~ae),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(hr(a)&&Gt(a),a.wv>e.wv)return!0}t&512&&P===null&&M(e,_)}return!1}function gr(e,t,n=!0){var r=e.reactions;if(r!==null&&!(!He&&ir!==null&&i.call(ir,e)))for(var a=0;a<r.length;a++){var o=r[a];o.f&2?gr(o,t,!1):t===o&&(n?M(o,v):o.f&1024&&M(o,y),kt(o))}}function _r(e){var t=or,n=sr,r=cr,i=H,a=ir,o=k,s=tr,c=fr,l=e.f;or=null,sr=0,cr=null,H=l&96?null:e,ir=null,Ge(e.ctx),tr=!1,fr=++dr,e.ac!==null&&(Cn(()=>{e.ac.abort(fe)}),e.ac=null);try{e.f|=oe;var u=e.fn,d=u();e.f|=S;var f=e.deps,p=N?.is_fork;if(or!==null){var m;if(p||yr(e,sr),f!==null&&sr>0)for(f.length=sr+or.length,m=0;m<or.length;m++)f[sr+m]=or[m];else e.deps=f=or;if(On()&&e.f&512)for(m=sr;m<f.length;m++)(f[m].reactions??=[]).push(e)}else !p&&f!==null&&sr<f.length&&(yr(e,sr),f.length=sr);if(Ke()&&cr!==null&&!tr&&f!==null&&!(e.f&6146))for(m=0;m<cr.length;m++)gr(cr[m],e);if(i!==null&&i!==e){if(dr++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=dr;if(t!==null)for(let e of t)e.rv=dr;cr!==null&&(r===null?r=cr:r.push(...cr))}return e.f&8388608&&(e.f^=ce),d}catch(e){return Ze(e)}finally{e.f^=oe,or=t,sr=n,cr=r,H=i,ir=a,Ge(o),tr=s,fr=c}}function vr(e,t){let n=t.reactions;if(n!==null){var a=r.call(n,e);if(a!==-1){var o=n.length-1;o===0?n=t.reactions=null:(n[a]=n[o],n.pop())}}if(n===null&&t.f&2&&(or===null||!i.call(or,t))){var s=t;s.f&512&&(s.f^=512,s.f&=~ae),s.v!==w&&et(s),Kt(s),yr(s,0)}}function yr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)vr(e,n[r])}function br(e){var t=e.f;if(!(t&16384)){M(e,_);var n=U,r=Qn;U=e,Qn=!0;try{t&16777232?Un(e):Hn(e),Vn(e);var i=_r(e);e.teardown=typeof i==`function`?i:null,e.wv=ur}finally{Qn=r,U=n}}}async function xr(){if(He)return new Promise(e=>{requestAnimationFrame(()=>e()),setTimeout(()=>e())});await Promise.resolve(),Ct()}function W(e){var t=(e.f&2)!=0;if(Zn?.add(e),H!==null&&!tr&&!(U!==null&&U.f&16384)&&(ir===null||!i.call(ir,e))){var n=H.deps;if(H.f&2097152)e.rv<dr&&(e.rv=dr,or===null&&n!==null&&n[sr]===e?sr++:or===null?or=[e]:or.push(e));else{(H.deps??=[]).push(e);var r=e.reactions;r===null?e.reactions=[H]:i.call(r,H)||r.push(H)}}if($n&&Yt.has(e))return Yt.get(e);if(t){var a=e;if($n){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||Cr(a))&&(o=Wt(a)),Yt.set(a,o),o}var s=(a.f&512)==0&&!tr&&H!==null&&(Qn||(H.f&512)!=0),c=(a.f&S)===0;hr(a)&&(s&&(a.f|=512),Gt(a)),s&&!c&&(qt(a),Sr(a))}if(P?.has(e))return P.get(e);if(e.f&8388608)throw e.v;return e.v}function Sr(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(qt(t),Sr(t))}function Cr(e){if(e.v===w)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Yt.has(t)||t.f&2&&Cr(t))return!0;return!1}function G(e){var t=tr;try{return tr=!0,e()}finally{tr=t}}function wr(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(le in e)Tr(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&le in n&&Tr(n)}}}function Tr(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Tr(e[n],t)}catch{}let n=d(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=c(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var Er=[`touchstart`,`touchmove`];function Dr(e){return Er.includes(e)}var Or=Symbol(`events`),kr=new Set,Ar=new Set;function jr(e,t,n,r={}){function i(e){if(r.capture||Ir.call(t,e),!e.cancelBubble)return Cn(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Ye(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function Mr(e,t,n,r,i){var a={capture:r,passive:i},o=jr(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&kn(()=>{t.removeEventListener(e,o,a)})}function Nr(e,t,n){(t[Or]??={})[e]=n}function Pr(e){for(var t=0;t<e.length;t++)kr.add(e[t]);for(var n of Ar)n(e)}var Fr=null;function Ir(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;Fr=e;var s=0,c=Fr===e&&e[Or];if(c){var l=i.indexOf(c);if(l!==-1&&(t===document||t===window)){e[Or]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(a=i[s]||e.target,a!==t){o(e,`currentTarget`,{configurable:!0,get(){return a||n}});var d=H,f=U;nr(null),rr(null);try{for(var p,m=[];a!==null;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var g=a[Or]?.[r];g!=null&&(!a.disabled||e.target===a)&&g.call(a,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble||h===t||h===null)break;a=h}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[Or]=t,delete e.currentTarget,nr(d),rr(f)}}}var Lr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function Rr(e){return Lr?.createHTML(e)??e}function zr(e){var t=vn(`template`);return t.innerHTML=Rr(e.replaceAll(`<!>`,`<!---->`)),t.content}function Br(e,t){var n=U;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function K(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(T)return Br(E,null),E;i===void 0&&(i=zr(a?e:`<!>`+e),n||(i=L(i)));var t=r||ln?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=L(t),s=t.lastChild;Br(o,s)}else Br(t,t);return t}}function Vr(e,t,n=`svg`){var r=!e.startsWith(`<!>`),i=(t&1)!=0,a=`<${n}>${r?e:`<!>`+e}</${n}>`,o;return()=>{if(T)return Br(E,null),E;if(!o){var e=L(zr(a));if(i)for(o=document.createDocumentFragment();L(e);)o.appendChild(L(e));else o=L(e)}var t=o.cloneNode(!0);if(i){var n=L(t),r=t.lastChild;Br(n,r)}else Br(t,t);return t}}function Hr(e,t){return Vr(e,t,`svg`)}function Ur(){if(T)return Br(E,null),E;var e=document.createDocumentFragment(),t=document.createComment(``),n=pn();return e.append(t,n),Br(t,n),e}function q(e,t){if(T){var n=U;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=E),Fe();return}e!==null&&e.before(t)}function Wr(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function Gr(e,t){return qr(e,t)}var Kr=new Map;function qr(e,{target:t,anchor:n,props:r={},events:i,context:o,intro:s=!0,transformError:c}){fn();var l=void 0,u=Nn(()=>{var s=n??t.appendChild(pn());Pt(s,{pending:()=>{}},t=>{A({});var n=k;if(o&&(n.c=o),i&&(r.$$events=i),T&&Br(t,null),l=e(t,r)||{},T&&(U.nodes.end=E,E===null||E.nodeType!==8||E.data!==`]`))throw je(),Ee;j()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=Dr(r);for(let e of[t,document]){var a=Kr.get(e);a===void 0&&(a=new Map,Kr.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,Ir,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(a(kr)),Ar.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=Kr.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,Ir),r.delete(e),r.size===0&&Kr.delete(n)):r.set(e,i)}Ar.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return Jr.set(l,u),l}var Jr=new WeakMap,Yr=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)Jn(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(V(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Xn(r,t),t.append(pn()),this.#n.set(e,{effect:r,fragment:t})}else V(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),Kn(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(V(n.effect),this.#n.delete(e))};ensure(e,t){var n=N,r=_n();if(t&&!this.#t.has(e)&&!this.#n.has(e))if(r){var i=document.createDocumentFragment(),a=pn();i.append(a),this.#n.set(e,{effect:Bn(()=>t(a)),fragment:i})}else this.#t.set(e,Bn(()=>t(this.anchor)));if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else T&&(this.anchor=E),this.#a(n)}};function J(e,t,n=!1){var r;T&&(r=E,Fe());var i=new Yr(e),a=n?C:0;function o(e,t){if(T){var n=Re(r);if(e!==parseInt(n.substring(1))){var a=Le();D(a),i.anchor=a,Pe(!1),i.ensure(e,t),Pe(!0);return}}i.ensure(e,t)}zn(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function Xr(e,t){return t}function Zr(e,t,n){for(var r=[],i=t.length,o,s=t.length,c=0;c<i;c++){let n=t[c];Kn(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;Qr(e,a(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else --s},!1)}if(s===0){var l=r.length===0&&n!==null;if(l){var u=n,d=u.parentNode;gn(d),d.append(u),e.items.clear()}Qr(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function Qr(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=ie,Xn(a,document.createDocumentFragment())):V(t[i],n)}}var $r;function ei(e,t,r,i,o,s=null){var c=e,l=new Map;if(t&4){var u=e;c=T?D(L(u)):u.appendChild(pn())}T&&Fe();var d=null,f=Ht(()=>{var e=r();return n(e)?e:e==null?[]:a(e)}),p,m=new Map,h=!0;function g(e){v.effect.f&16384||(v.pending.delete(e),v.fallback=d,ni(v,p,c,t,i),d!==null&&(p.length===0?d.f&33554432?(d.f^=ie,ii(d,null,c)):Jn(d):Kn(d,()=>{d=null})))}function _(e){v.pending.delete(e)}var v={effect:zn(()=>{p=W(f);var e=p.length;let n=!1;T&&Re(c)===`[!`!=(e===0)&&(c=Le(),D(c),Pe(!1),n=!0);for(var a=new Set,u=N,v=_n(),y=0;y<e;y+=1){T&&E.nodeType===8&&E.data===`]`&&(c=E,n=!0,Pe(!1));var b=p[y],x=i(b,y),S=h?null:l.get(x);S?(S.v&&$t(S.v,b),S.i&&$t(S.i,y),v&&u.unskip_effect(S.e)):(S=ri(l,h?c:$r??=pn(),b,x,y,o,t,r),h||(S.e.f|=ie),l.set(x,S)),a.add(x)}if(e===0&&s&&!d&&(h?d=Bn(()=>s(c)):(d=Bn(()=>s($r??=pn())),d.f|=ie)),e>a.size&&ge(``,``,``),T&&e>0&&D(Le()),!h)if(m.set(u,a),v){for(let[e,t]of l)a.has(e)||u.skip_effect(t.e);u.oncommit(g),u.ondiscard(_)}else g(u);n&&Pe(!0),W(f)}),flags:t,items:l,pending:m,outrogroups:null,fallback:d};h=!1,T&&(c=E)}function ti(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function ni(e,t,n,r,i){var o=(r&8)!=0,s=t.length,c=e.items,l=ti(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=i(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=i(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&(Jn(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_.f&33554432)if(_.f^=ie,_===l)ii(_,null,n);else{var y=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),ai(e,d,_),ai(e,_,y),ii(_,y,n),d=_,p=[],m=[],l=ti(d.next);continue}if(_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var b=m[0],x;d=b.prev;var S=p[0],ee=p[p.length-1];for(x=0;x<p.length;x+=1)ii(p[x],b,n);for(x=0;x<m.length;x+=1)u.delete(m[x]);ai(e,S.prev,ee.next),ai(e,d,S),ai(e,ee,b),l=b,d=ee,--v,p=[],m=[]}else u.delete(_),ii(_,l,n),ai(e,_.prev,_.next),ai(e,_,d===null?e.effect.first:d.next),ai(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=ti(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=ti(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(Qr(e,a(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var C=[];if(u!==void 0)for(_ of u)_.f&8192||C.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&C.push(l),l=ti(l.next);var te=C.length;if(te>0){var ne=r&4&&s===0?n:null;if(o){for(v=0;v<te;v+=1)C[v].nodes?.a?.measure();for(v=0;v<te;v+=1)C[v].nodes?.a?.fix()}Zr(e,C,ne)}}o&&Ye(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function ri(e,t,n,r,i,a,o,s){var c=o&1?o&16?Zt(n):F(n,!1,!1):null,l=o&2?Zt(i):null;return{v:c,i:l,e:Bn(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function ii(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=mn(r);if(a.before(r),r===i)return;r=o}}function ai(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function oi(e,t,n=!1,r=!1,i=!1,a=!1){var o=e,s=``;if(n){var c=e;T&&(o=D(L(c)))}B(()=>{var e=U;if(s===(s=t()??``)){T&&Fe();return}if(n&&!T){e.nodes=null,c.innerHTML=s,s!==``&&Br(L(c),c.lastChild);return}if(e.nodes!==null&&(Wn(e.nodes.start,e.nodes.end),e.nodes=null),s!==``){if(T){for(var a=E.data,l=Fe(),u=l;l!==null&&(l.nodeType!==8||l.data!==``);)u=l,l=mn(l);if(l===null)throw je(),Ee;Br(E,u),o=D(l);return}var d=vn(r?`svg`:i?`math`:`template`,r?Oe:i?ke:void 0);d.innerHTML=s;var f=r||i?d:d.content;if(Br(L(f),f.lastChild),r||i)for(;L(f);)o.before(L(f));else o.before(f)}})}function si(e,t,n){var r;T&&(r=E,Fe());var i=new Yr(e);zn(()=>{var e=t()??null;if(T&&Re(r)===`[`!=(e!==null)){var a=Le();D(a),i.anchor=a,Pe(!1),i.ensure(e,e&&(t=>n(t,e))),Pe(!0);return}i.ensure(e,e&&(t=>n(t,e)))},C)}function ci(e,t){let n=null,r=T;var i;if(T){n=E;for(var a=L(document.head);a!==null&&(a.nodeType!==8||a.data!==e);)a=mn(a);if(a===null)Pe(!1);else{var o=mn(a);a.remove(),D(o)}}T||(i=document.head.appendChild(pn()));try{zn(()=>t(i),te|ne)}finally{r&&(Pe(!0),D(n))}}function li(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=li(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function ui(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=li(e))&&(r&&(r+=` `),r+=t);return r}function di(e){return typeof e==`object`?ui(e):e??``}var fi=[...` 	
\r\f\xA0\v﻿`];function pi(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||fi.includes(r[o-1]))&&(s===r.length||fi.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function mi(e,t,n,r,i,a){var o=e.__className;if(T||o!==n||o===void 0){var s=pi(n,r,a);(!T||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function hi(e,t,r=!1){if(e.multiple){if(t==null)return;if(!n(t))return Me();for(var i of e.options)i.selected=t.includes(vi(i));return}for(i of e.options)if(on(vi(i),t)){i.selected=!0;return}(!r||t!==void 0)&&(e.selectedIndex=-1)}function gi(e){var t=new MutationObserver(()=>{hi(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),kn(()=>{t.disconnect()})}function _i(e,t,n=t){var r=new WeakSet,i=!0;wn(e,`change`,t=>{var i=t?`[selected]`:`:checked`,a;if(e.multiple)a=[].map.call(e.querySelectorAll(i),vi);else{var o=e.querySelector(i)??e.querySelector(`option:not([disabled])`);a=o&&vi(o)}n(a),e.__value=a,N!==null&&r.add(N)}),Pn(()=>{var a=t();if(e===document.activeElement){var o=He?mt:N;if(r.has(o))return}if(hi(e,a,i),i&&a===void 0){var s=e.querySelector(`:checked`);s!==null&&(a=vi(s),n(a))}e.__value=a,i=!1}),gi(e)}function vi(e){return`__value`in e?e.__value:e.value}var yi=Symbol(`is custom element`),bi=Symbol(`is html`),xi=pe?`link`:`LINK`;function Si(e){if(T){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;Ci(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;Ci(e,`checked`,null),e.checked=r}}};e.__on_r=n,Ye(n),Sn()}}function Ci(e,t,n,r){var i=wi(e);T&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===xi)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[de]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&Ei(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function wi(e){return e.__attributes??={[yi]:e.nodeName.includes(`-`),[bi]:e.namespaceURI===De}}var Ti=new Map;function Ei(e){var t=e.getAttribute(`is`)||e.nodeName,n=Ti.get(t);if(n)return n;Ti.set(t,n=[]);for(var r,i=e,a=Element.prototype;a!==i;){for(var o in r=c(i),r)r[o].set&&n.push(o);i=d(i)}return n}function Di(e,t,n=t){var r=new WeakSet;wn(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=Oi(e)?ki(a):a,n(a),N!==null&&r.add(N),await xr(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(T&&e.defaultValue!==e.value||G(t)==null&&e.value)&&(n(Oi(e)?ki(e.value):e.value),N!==null&&r.add(N)),Rn(()=>{var n=t();if(e===document.activeElement){var i=He?mt:N;if(r.has(i))return}Oi(e)&&n===ki(e.value)||e.type===`date`&&!n&&!e.value||n!==e.value&&(e.value=n??``)})}function Oi(e){var t=e.type;return t===`number`||t===`range`}function ki(e){return e===``?null:+e}function Ai(e,t){return e===t||e?.[le]===t}function ji(e={},t,n,r){var i=k.r,a=U;return Pn(()=>{var o,s;return Rn(()=>{o=s,s=r?.()||[],G(()=>{e!==n(...s)&&(t(e,...s),o&&Ai(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&Ai(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}function Mi(e){return function(...t){return t[0].preventDefault(),e?.apply(this,t)}}function Ni(e=!1){let t=k,n=t.l.u;if(!n)return;let r=()=>wr(t.s);if(e){let e=0,n={},i=Bt(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>W(i)}n.b.length&&Mn(()=>{Pi(t,r),h(n.b)}),An(()=>{let e=G(()=>n.m.map(m));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&An(()=>{Pi(t,r),h(n.a)})}function Pi(e,t){if(e.l.s)for(let t of e.l.s)W(t);t()}function Fi(e,t,n,r){var i=!Ue||(n&2)!=0,a=(n&8)!=0,o=(n&16)!=0,c=r,l=!0,u=()=>(l&&(l=!1,c=o?G(r):r),c);let d;if(a){var f=le in e||ue in e;d=s(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;a?[p,m]=ft(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(i&&xe(t),d(p)));var h=i?()=>{var n=e[t];return n===void 0?u():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(i&&!(n&4))return h;if(d){var g=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||g||m)&&d(t?h():e),e):h()})}var _=!1,v=(n&1?Bt:Ht)(()=>(_=!1,h()));a&&W(v);var y=U;return(function(e,t){if(arguments.length>0){let n=t?W(v):i&&a?rn(e):e;return I(v,n),_=!0,c!==void 0&&(c=n),e}return $n&&_||y.f&16384?v.v:W(v)})}function Ii(e){k===null&&me(`onMount`),Ue&&k.l!==null?Li(k).m.push(e):An(()=>{let t=G(e);if(typeof t==`function`)return t})}function Li(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`),We();var Y=at(typeof localStorage<`u`&&localStorage.getItem(`language`)||`fr`);typeof localStorage<`u`&&Y.subscribe(e=>{localStorage.setItem(`language`,e)});var Ri={en:{nav:{home:`Home`,menu:`Menu`,about:`About Us`,gallery:`Gallery`,contact:`Contact`,highlights:`Highlights`},menu:{today:`Today`,notAvailable:`Menu not available for this date.`,loading:`Loading menu...`},reservation:{title:`Make a Reservation`,name:`Your Name`,email:`Email`,phone:`Phone Number`,date:`Date`,time:`Time`,guests:`Number of Guests`,message:`Special Requests`,submit:`Reserve Table`,success:`Reservation confirmed!`},footer:{rights:`All rights reserved`},contact:{hours:`Opening Hours`,email:`Email`,phone:`Phone`,address:`Address`,location:`Location`,hoursDetails:`Monday - Sunday: 11:00 AM - 10:00 PM`,follow:`Follow Us`},gallery:{scrollHint:`Swipe to explore`}},fr:{nav:{home:`Accueil`,menu:`Menu`,about:`À Propos`,gallery:`Galerie`,contact:`Contact`,highlights:`Faits Saillants`},menu:{today:`Aujourd'hui`,notAvailable:`Menu non disponible pour cette date.`,loading:`Chargement du menu...`},reservation:{title:`Faire une Réservation`,name:`Votre Nom`,email:`Email`,phone:`Numéro de Téléphone`,date:`Date`,time:`Heure`,guests:`Nombre de Couverts`,message:`Demandes Spéciales`,submit:`Réserver`,success:`Réservation confirmée!`},footer:{rights:`Tous droits réservés`},contact:{hours:`Horaires d'ouverture`,email:`Email`,phone:`Téléphone`,address:`Adresse`,location:`Emplacement`,hoursDetails:`Lundi - Dimanche: 11h00 - 22h00`,follow:`Suivez-nous`},gallery:{scrollHint:`Glissez pour explorer`}}};function X(e,t){let n=e.split(`.`),r=Ri[t];for(let e of n)r=r?.[e];return r||e}var zi=`/favicon.svg`,Bi=K(`<a href="/" class="flex items-center text-xl px-2 gap-2"><img alt="Dia's Delicacy" class="h-8 md:h-10 w-auto"/> <h4 class="!text-primary font-bold !m-0">Dia's Delicacy</h4></a>`);function Vi(e){var t=Bi(),n=R(t);Ie(2),O(t),B(()=>Ci(n,`src`,zi)),q(e,t)}var Hi=K(`<li class="!mb-0"><a> </a></li>`);function Ui(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=[`home`,`about`,`highlights`,`contact`];a.splice(1,0,`menu`);{let e=a.indexOf(`highlights`);a.splice(e+1,0,`gallery`)}function o(){typeof document<`u`&&(document.querySelectorAll(`details[open]`).forEach(e=>{e.open=!1}),document.activeElement&&document.activeElement.blur())}Ni();var s=Ur();ei(hn(s),1,()=>a,Xr,(e,t)=>{var r=Hi(),i=R(r),a=R(i,!0);O(i),O(r),B(e=>{Ci(i,`href`,`#${W(t)??``}`),Wr(a,e)},[()=>X(`nav.${W(t)}`,n())]),Mr(`click`,i,o),q(e,r)}),q(e,s),j(),i()}var Wi=Hr(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 shrink-0 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path></svg>`),Gi=Hr(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 shrink-0 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path></svg>`),Ki=K(`<button class="btn btn-ghost btn-circle grid place-items-center p-0 h-10 w-10 min-h-0 border-none hover:bg-base-200 transition-all duration-300" aria-label="Toggle Theme"><!></button>`);function qi(e,t){A(t,!0);let n=Qt(`dark`);An(()=>{I(n,localStorage.getItem(`theme`)||(window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`),!0),document.documentElement.setAttribute(`data-theme`,W(n))});function r(){I(n,W(n)===`light`?`dark`:`light`,!0),document.documentElement.setAttribute(`data-theme`,W(n)),localStorage.setItem(`theme`,W(n))}var i=Ki(),a=R(i),o=e=>{q(e,Wi())},s=e=>{q(e,Gi())};J(a,e=>{W(n)===`light`?e(o):e(s,-1)}),O(i),Nr(`click`,i,r),q(e,i),j()}Pr([`click`]);var Ji=K(`<header class="navbar svelte-oiwvqb"><div class="navbar-start"><details class="dropdown lg:hidden"><summary class="btn btn-ghost p-2 list-none svelte-oiwvqb"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></summary> <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><!></ul></details> <!></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 font-semibold !m-0"><!></ul></div> <div class="navbar-end pr-2"><div class="flex items-center mr-1"><button class="btn btn-sm btn-ghost px-2 font-bold flex flex-col gap-0 h-auto min-h-0 leading-tight py-1" title="Switch Language"><span>FR</span> <div class="w-5 h-[1px] bg-base-content/20 my-[2px]"></div> <span>EN</span></button></div> <div><!></div></div></header>`);function Yi(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt();Ni();var a=Ji(),o=R(a),s=R(o),c=z(R(s),2);Ui(R(c),{}),O(c),O(s),Vi(z(s,2),{}),O(o);var l=z(o,2),u=R(l);Ui(R(u),{}),O(u),O(l);var d=z(l,2),f=R(d),p=R(f),m=R(p),h=z(m,4);O(p),O(f);var g=z(f,2);qi(R(g),{}),O(g),O(d),O(a),B(()=>{mi(m,1,`text-[12px] ${n()===`fr`?`text-primary`:`opacity-100`}`),mi(h,1,`text-[12px] ${n()===`en`?`text-primary`:`opacity-100`}`)}),Mr(`click`,p,()=>Y.set(n()===`en`?`fr`:`en`)),q(e,a),j(),i()}var Xi=`Dia's Delicacy was born from a woman’s heartfelt dream to revive the treasured flavors of her childhood. Today, that vision has flourished into a culinary destination — an homage to India’s rich and diverse food heritage.

Founded by Chef **Dia Patel**, our kitchen in the heart of Geneva brings you the very best of Indian cuisine. Inspired by the country’s vibrant street food culture and the slow-cooked comfort dishes of home kitchens, every creation at **Dia's Delicacy** is a blend of authentic spices, layered textures, and soulful flavors.

Here, each plate tells a story — a story of tradition, passion, and the joy of sharing food. We invite you to savor India’s culinary legacy with us, one unforgettable bite at a time.

Every ingredient is carefully selected, and every dish is crafted with precision and love, ensuring a memorable dining experience for every guest.   `,Zi=`<!-- show: false -->
### Holiday Notice
We will be closed from May 23 to May 25 for the Pentecôte long weekend.
`,Qi=`📍 Address: **Rue Schaub 11, 1202 Genève**

📞 Phone: **[+41 227 34 11 22](tel:+41227341122)**

📮 Email: **[dia.delicacy@gmail.com](mailto:dia.delicacy@gmail.com)**

---
`,$i=`## Welcome to Dia's Delicacy

Experience culinary excellence in an intimate, elegant setting.
`,ea=`<!-- tab: Party & Catering -->
<!--show: true-->

At **Dia’s Delicacy**, we pride ourselves on creating unforgettable experiences for life’s special moments. Whether you’re planning an intimate gathering or a grand celebration, our party and catering services are designed to suit your needs. Host your event at our venue or let us bring the flavors to you.

### Our Offerings

- **Traditional Treats**: Homemade Indian Cuisine  
- **Baked Delights**: Cakes, Pastries, Muffins & Other Oven Treats  
- **Decadent Desserts**: Ras Malai, Kulfi, Gulab Jamun & more

### Special Requests

We’re delighted to accommodate your preferences with **Vegan**, **Gluten-Free**, and **Lactose-Free** options — ensuring every bite is perfect.

Have any other special requests? Let’s discuss them with you to make your event truly unforgettable.   `,ta=`<!-- tab: Materials -->
<!--show: false-->

### Authentic Spices & Fresh Ingredients
We believe that the secret to great Indian food lies in the quality of the ingredients.

*   **Hand-picked Spices**: Imported directly from the best regions in India.
*   **Local Produce**: We partner with local farmers for fresh vegetables and meats.
*   **Traditional Methods**: We use traditional clay ovens (Tandoors) for that authentic smoky flavor.
`,na=`<!-- tab: Partners -->
<!--show: false-->

### Growing Together
We are proud to collaborate with brands that share our commitment to quality and excellence.

*   **Local Suppliers**: Fresh dairy and meats from Geneva's finest producers.
*   **Spice Importers**: Exclusive partnerships for rare and high-quality Indian spices.
*   **Event Organizers**: Working with the best planners to deliver seamless events.
`,ra=`<!-- tab: What We Do -->
<!--show: false-->

### Culinary Excellence
We bring the authentic taste of India to your doorstep. From intimate dinners to large corporate events, our catering service is tailored to your needs.

*   **Custom Menus**: Personalized to your preferences.
*   **Professional Staff**: Experienced servers and chefs.
*   **On-site Cooking**: Freshly prepared dishes at your venue.
`,ia=`# Today's Special - Saturday

### Appetizers
* **Samosa Chaat** - Crispy samosas topped with tangy chutneys and yogurt.
* **Paneer Tikka** - Marinated cottage cheese grilled to perfection.

### Main Course
* **Butter Chicken** - Tender chicken in a rich, creamy tomato gravy.
* **Dal Makhani** - Slow-cooked black lentils with butter and cream.

### Dessert
* **Gulab Jamun** - Warm milk dumplings in rose syrup.
`,aa=`# 10 May, Sunday

### Appetizers
* **Samosa Chaat** - Crispy samosas topped with tangy chutneys and yogurt.
* **Paneer Tikka** - Marinated cottage cheese grilled to perfection.

### Main Course
* **Butter Chicken** - Tender chicken in a rich, creamy tomato gravy.
* **Dal Makhani** - Slow-cooked black lentils with butter and cream.

### Dessert
* **Gulab Jamun** - Warm milk dumplings in rose syrup.
`,oa=`
# 11 May, Monday

* ### **Prawns in Green Curry:**
    Served with aromatic peas pulao and a fresh farm salad.

* ### **Fresh Farm Palak Curry:**
Farm-fresh spinach cooked with peanuts and Gram dal, served alongside a hearty peas pulao, and salad.
 
`,sa=`
# 12 May, Tuesday

* ### **Chicken Bhuna:**
    Served with two flaky parathas or rice, accompanied by a crisp Navet beetroot salad.

* ### **Whole Moong Curry:**
Nutritious whole moong beans simmered in a savory spice blend, served with fluffy rice and a refreshing Navet beetroot salad.
`,ca=`
# 13 May, Wednesday

* ### **Chicken Kheema:** 🍗
    Savory minced chicken sautéed with traditional spices, served with steamed rice and a side of seasonal fennel vegetables.

* ### **Rajma Curry:** 🌱Ⓥ
A comforting and hearty red kidney bean curry served alongside steamed rice and délicieux fennel legumes.
`,la=`## 18 May, Monday

* ### **Chicken Lababdar :** 🍗
    Tender chicken simmered in a rich and creamy tomato-based curry, served with steamed rice and sautéed zucchini.

* ### **Paneer Lababdar :** 🌱
    Soft paneer cooked in a smooth and flavourful tomato gravy with Indian spices, served with rice and sautéed zucchini.`,ua=`## 19 May, Tuesday

* ### **Chicken Lababdar :** 🍗
    Tender chicken simmered in a rich and creamy tomato-based curry, served with steamed rice and sautéed zucchini.

* ### **Vangi Bhat :** 🌱Ⓥ
    Maharashtrian-style spiced aubergine rice served with coconut Sol Kadhi and broad bean cabbage vegetables.`,da=`## 20 May, Wednesday

* ### **Chicken Kofta Curry :** 🍗
    Tender chicken koftas simmered in a creamy and aromatic Indian curry sauce.

* ### **Malai Kofta / Tofu Curry :** 🌱
    Soft vegetable and paneer dumplings in a rich creamy gravy, or tofu cooked in a fragrant Indian curry.`,fa=`## 21 May, Thursday

* ### **Achari Salmon :** 🐟
    Salmon cooked with tangy achari pickling spices, served with rice and legumes.

* ### **Mushroom Tofu Curry :** 🌱Ⓥ
    Mushrooms and tofu simmered in a flavourful Indian curry with aromatic spices.
`,pa=`## 22 May, Friday

* ### **Chicken Tandoori :** 🍗
    Tandoori-spiced grilled chicken served with spinach rice and refreshing beetroot raita.

* ### **Aloo Dosa & Mixed Vegetable Dosa:** 🌱
    Crispy South Indian crepes stuffed with spiced potatoes or assorted vegetables, served with traditional sambhar (lentil vegetable stew) and coconut chutney.`,ma=`## 25 May, Monday

* ### **Public Holiday :** 🏛️
    We are closed today for Whit Monday. See you tomorrow!
`,ha=`## 26 May, Tuesday

* ### **Chicken Achari :** 🍗
    Tender chicken cooked in a tangy and aromatic pickling-spiced gravy, served with steamed rice and a fresh salad.

* ### **Valachi Usal with Rice & Chapati :** 🌱Ⓥ
    Sprouted field beans (val) simmered in a spiced coconut-onion gravy, served with rice, seasonal veggies, and soft chapati.
`,ga=`## 27 May, Wednesday

* ### **Lamb Kheema Pao :** 🥩
    Spiced minced lamb curry served with soft bread rolls (pao), a side of crunchy onion & radish salad, and refreshing cucumber raita.

* ### **Dal Rice with Veggies & Chapati :** 🌱Ⓥ
    Comforting yellow lentil curry (dal) served with steamed rice, seasonal vegetables, and soft chapati.
`,_a=`## 28 May, Thursday

* ### **Lamb Kheema Pao :** 🥩
    Spiced minced lamb curry served with soft bread rolls (pao), a side of crunchy onion & radish salad, and refreshing cucumber raita.

* ### **Paneer Matar with Rice & Veggies :** 🌱
    Soft Indian cottage cheese (paneer) and green peas simmered in a spiced tomato-onion gravy, served with steamed rice and seasonal vegetables.
`,va=`## 29 May, Friday

* ### **Chicken Biryani :** 🍗
    Fragrant Basmati rice layered with juicy spiced chicken, saffron, and aromatic herbs, served with a cooling raita.

* ### **Dosa :** 🌱Ⓥ
    Crispy fermented rice and lentil crepe, served with a warm, flavorful lentil stew (sambar) and fresh coconut chutney.
`,ya=`## 01 June, Monday

* ### **Chicken Dhansak with Rice & Veggies :** 🍗
    Tender chicken cooked with a flavorful blend of lentils and vegetables in a spiced gravy, served with rice and seasonal veggies.

* ### **Whole Masoor Dal with Rice & Veggies :** 🌱Ⓥ
    Nourishing whole brown lentils simmered in aromatic spices, served with steamed rice and seasonal vegetables.
`,ba=`## 02 June, Tuesday

* ### **Boneless Chicken Karahi with Rice :** 🍗
    Tender boneless chicken stir-fried in a traditional wok with fresh tomatoes, ginger, garlic, and freshly ground spices, served with steamed rice.

* ### **Paneer Kadhai :** 🌱
    Cubes of cottage cheese cooked with bell peppers, onions, and tomatoes in a fragrant, freshly ground spice blend.
`,xa=`## 03 June, Wednesday

* ### **Boneless Chicken Karahi with Rice :** 🍗
    Tender boneless chicken stir-fried in a traditional wok with fresh tomatoes, ginger, garlic, and freshly ground spices, served with steamed rice.

* ### **Chole Bhatura with Salad & Raita :** 🌱
    Spiced chickpea curry (chole) served with fluffy fried bread (bhatura), a side of fresh onion salad, and cooling raita.
`,Sa=`## 04 June, Thursday

* ### **Kerala-Style Nadan Chicken Curry with Rice :** 🍗
    Traditional Kerala chicken curry prepared in coconut milk and aromatic spices, served with rice and seasonal vegetables.

* ### **Chole Bhatura with Salad & Raita :** 🌱
    Spiced chickpea curry (chole) served with fluffy fried bread (bhatura), a side of fresh onion salad, and cooling raita.
`,Ca=`## 05 June, Friday

* ### **Chicken Tandoori :** 🍗
    Tandoori-spiced grilled chicken served with aromatic seasoned rice and a fresh side salad.

* ### **Dosa with Aloo & Paneer Bhurji :** 🌱
    Crispy fermented rice and lentil crepe stuffed with spiced potatoes and scrambled paneer cottage cheese, served with sambar and coconut chutney.
`,wa=`### 08 June, Monday

* ### **Chicken Leek Curry with Rice :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken pieces simmered in a savory leek and spice sauce, served with rice.

* ### **Dal Rice with Aloo Gobi & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Comforting yellow lentils (dal) served with spiced potatoes and cauliflower (aloo gobi), rice, and a chapati.
`,Ta=`### 09 June, Tuesday

* ### **Dahi Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken marinated and cooked in a creamy yogurt-based sauce with aromatic spices, served with rice.

* ### **Methi Malai Mutter Paneer Curry :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Cubes of paneer and green peas in a rich, creamy sauce flavored with fenugreek leaves (methi), served with rice.
`,Ea=`### 10 June, Wednesday

* ### **Palak Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken pieces simmered in a smooth, spiced spinach gravy, served with rice.
    
* ### **Dahi Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken marinated and cooked in a creamy yogurt-based sauce with aromatic spices, served with rice.

* ### **Palak Paneer / Tofu :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Cubes of paneer cheese or tofu served in a velvety spinach and aromatic spice sauce, accompanied by rice.
`,Da=`### 11 June, Thursday

* ### **Palak Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken pieces simmered in a smooth, spiced spinach gravy, served with rice.

* ### **Chawlichi Usal with Rice, Salad & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    A flavorful black-eyed pea curry prepared with traditional spices, served with rice, a fresh salad, and a chapati.
`,Oa=`### 12 June, Friday

* ### **Chicken Biryani :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fragrant Basmati rice layered with juicy spiced chicken, saffron, and aromatic herbs, served with a cooling raita.

* ### **Dosa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crispy fermented rice and lentil crepe, served with a warm, flavorful lentil stew (sambar) and fresh coconut chutney.
`,ka=`### 15 June, Monday

* ### **Moong Dal Palak :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Green moong lentils cooked with fresh spinach, served with rice, seasonal vegetables, and a traditional chapati.

* ### **Palak Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken simmered in a creamy spiced spinach sauce, served with rice and a side salad.
`,Aa=`### 16 June, Tuesday

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.

* ### **Mughlai Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.
`,ja=`### 17 June, Wednesday

* ### **Lamb Curry :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Slow-cooked lamb in an aromatic spiced gravy, served with rice and a fresh cucumber salad.

* ### **Soya Chilli & Indo-Chinese Fried Rice :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Sautéed soy chunks in a spicy, tangy sauce, served with Indo-Chinese style fried rice.

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.

* ### **Mughlai Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.`,Ma=`### 18 June, Thursday 

* ### **Lamb Curry :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Slow-cooked lamb in an aromatic spiced gravy, served with rice and a fresh cucumber salad.

* ### **Soya Chilli & Indo-Chinese Fried Rice :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Sautéed soy chunks in a spicy, tangy sauce, served with Indo-Chinese style fried rice.

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.

* ### **Mughlai Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.
`,Na=`### 19 June, Friday

* ### **Tandoori Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Yogurt and tandoori-spiced marinated grilled chicken, served with carrot rice and a green salad with edamame beans.

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Thin fermented rice and lentil crepe, filled with spiced potato mash (Masala) or egg, served with warm sambar and chutney.
`,Pa=`### 22 June, Monday

* ### **Dal & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Traditional Indian dal served with fresh chapati, rice, and seasonal zucchini.

* ### **Methi Grilled Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fenugreek-marinated grilled chicken served with tomato rice and seasonal vegetables.
`,Fa=`### 23 June, Tuesday

* ### **Coconut Moong Poke Bowl (Tofu / Paneer) :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Coconut moong and carrot salad, quinoa with broad beans, and tofu or paneer tossed in garlic tomato sauce, served poke bowl style.

* ### **Methi Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender fenugreek chicken served with seasonal accompaniments.
`,Ia=`### 24 June, Wednesday

* ### **Kerala Style Tofu Coconut Curry :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tofu simmered in a Kerala-style coconut curry, served with rice and vegetables or fresh salad.

* ### **Chicken Mappas Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked in a mild South Indian coconut curry, served with rice.
`,La=`### 25 June, Thursday

* ### **Paneer Kadhai :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cooked with peppers, onions, and traditional kadhai spices, served with rice and vegetables.

* ### **Chicken Kadhai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked with peppers and onions in an aromatic kadhai sauce, served with rice and vegetables.
`,Ra=`### 26 June, Friday

* ### **Kadhai Chicken or Chicken Mappas Curry:** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Served with rice and vegetables.

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Thin fermented rice and lentil crepe filled with spiced potatoes or egg, served with sambar and chutney.
`,za=`### June 29, Monday

* ### **Sprouted Moong Curry :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Sprouted moong curry, served with colored quinoa or rice, and a cucumber salad with peanuts. / *Curry de haricots moong germés, servi avec du quinoa coloré ou du riz, et une salade de concombre aux cacahuètes.*

* ### **Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken curry served with rice and seasonal zucchini. / *Curry de poulet savoureux servi avec du riz et des courgettes de saison.*
`,Ba=`### June 30, Tuesday

* ### **Sprouted Moong Curry :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Sprouted moong curry, served with colored quinoa or rice, and a cucumber salad with peanuts. / *Curry de haricots moong germés, servi avec du quinoa coloré ou du riz, et une salade de concombre aux cacahuètes.*

* ### **Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Classic chicken curry served with rice and a fresh cucumber salad. / *Curry de poulet classique servi avec du riz et une salade de concombre fraîche.*
`,Va=`### July 01, Wednesday

* ### **Baingan Bharta & Dahi :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Smoked eggplant mash (Baingan Bharta) served with yogurt (dahi), veggies, and chapati. / *Caviar d'aubergines grillées (Baingan Bharta) servi avec du yaourt (dahi), des légumes et un chapati.*

* ### **Lamb Curry :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Tender slow-cooked lamb curry, served with rice and side vegetables. / *Curry d'agneau tendrement mijoté, servi avec du riz et des légumes d'accompagnement.*
    
* ### **Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Classic chicken curry served with rice and a fresh cucumber salad. / *Curry de poulet classique servi avec du riz et une salade de concombre fraîche.*`,Ha=`### July 02, Thursday

* ### **Maharashtrian Style Baingan Bharta :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Eggplant mash prepared in Maharashtrian style, served with chapati, rice, and veggies. / *Caviar d'aubergines préparé à la mode de Maharashtra, servi avec chapati, riz et légumes.*

* ### **Lamb Curry :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Flavorful lamb curry served with rice and seasonal vegetables. / *Curry d'agneau riche en saveurs, servi avec du riz et des légumes de saison.*
`,Ua=`### July 03, Friday

* ### **Chicken Biryani :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fragrant basmati rice layered with marinated chicken and traditional spices, served with raita. / *Plat de riz basmati parfumé et mijoté avec du poulet mariné et des épices traditionnelles, servi avec raïta.*

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Thin fermented rice and lentil crepe filled with spiced potatoes or egg, served with sambar and chutney.
`,Wa=`### July 06, Monday

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Traditional creamy black lentils served with rice and Swiss chard. Available for vegans with vegan cream upon request. 🌱Ⓥ / *Lentilles noires crémeuses traditionnelles servies avec du riz et des côtes de blettes. Disponible en version végétalienne avec de la crème végane sur demande.*

* ### **Thecha Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken sautéed with Thecha (green chili and peanut paste), served with jowar bhakri (sorghum flatbread) and salad. <br>⚠️ **Contains peanuts.** *Chicken: Origin Switzerland.* / *Poulet sautéed au Thecha (pâte de piment vert et cacahuètes), servi avec du pain jowar bhakri (sorgho) et une salade. ⚠️ **Contient des cacahuètes.** Poulet : Origine Suisse.*
`,Ga=`### July 07, Tuesday

* ### **Chawli Vangi Batata Rassa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Traditional curry with black-eyed beans, farm-fresh aubergines, and potatoes, served with rice, chapati, and salad. <br>⚠️ **Contains peanuts.** / *Curry traditionnel aux haricots à œil noir, aubergines fraîches du marché et pommes de terre, servi avec du riz, un chapati et une salade. ⚠️ **Contient des cacahuètes.***

* ### **Thecha Chicken with Ragi Bhakri :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Flavorful Thecha chicken served with ragi bhakri (finger millet flatbread) and salad. <br>⚠️ **Contains peanuts.** *Chicken: Origin Switzerland.* / *Poulet savoureux au Thecha servi avec du pain ragi bhakri (millet) et une salade. ⚠️ **Contient des cacahuètes.** Poulet : Origine Suisse.*
`,Ka=`### July 08, Wednesday

* ### **Closed :** 🗓️
    Public Holiday — The restaurant is closed today. / *Fermé : Jour férié — Le restaurant est fermé aujourd'hui.*
`,qa=`### July 09, Thursday

* ### **Kerala Style Fish Curry :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Kerala-style fish curry simmered with coconut and spices, served with mixed vegetables. / *Curry de poisson parfumé à la noix de coco et aux épices du Kerala, servi avec un assortiment de légumes.*
`,Ja=`### July 10, Friday

* ### **Chicken Tandoori & Spinach Rice :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Spiced marinated grilled chicken tandoori, served with aromatic spinach rice and a vibrant beetroot raita. *Chicken: Origin Switzerland.* / *Poulet mariné aux épices tandoori et grillé, servi avec un riz aux épinards et un raïta de betterave rouge. Poulet : Origine Suisse.*

* ### **Masala Dosa & Egg Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crispy fermented rice and lentil crepes: one filled with spiced potato mash (Masala) and one layered with egg, served with chutney and sambar. / *Crêpes de lentilles et riz fermentés croustillantes : une garnie de pommes de terre épicées (Masala) et une préparée avec un œuf, servies avec chutney et sambar.*
`,Ya=`| | | |
| :--- | :--- | :--- |
| **Drinks** | Mango Lassi <br/> Kombucha <br/> Super Bock | 5 CHF |
| | Cafe BIO <br/> Chai | 3.50 |
| | Indian Beer <br/> Gluten Free Beer | 7 CHF |
| **Dessert** | Millet Banana Shira <br/> Choc. Biscoff Cake | 5 CHF |
| **Extras** | Butter Naan <br/> Sev Puri <br/> Methi Paratha | 5 CHF |
| | Cheese Naan <br/> Garlic Naan | 6 CHF |
| | Amritsari Naan | 8 CHF |
`,Xa=`
### Appetizers

#### Bruschetta Trio
Fresh tomatoes, basil, garlic, and balsamic vinegar on crispy bread

#### Shrimp Saganaki
Succulent shrimp in a rich feta cheese sauce

### Main Courses

#### Pan-Seared Branzino
Mediterranean sea bass with seasonal vegetables and lemon beurre blanc

#### Beef Tenderloin
Prime cut with truffle jus and roasted potatoes

### Desserts

#### Tiramisu
Classic Italian dessert with mascarpone and espresso

#### Chocolate Flourless Cake
Rich, decadent chocolate with raspberry coulis
`,Za=`
####
Opening Hours:  <br/><b>Monday - Friday: 7:45 AM - 8:00 PM</b>`,Qa=`At **Dia’s Delicacy**, we pride ourselves on creating unforgettable experiences for life’s special moments. Whether you’re planning an intimate gathering or a grand celebration, our party and catering services are designed to suit your needs. Host your event at our venue or let us bring the flavors to you.

### Our Offerings

- **Traditional Treats**: Homemade Indian Cuisine  
- **Baked Delights**: Cakes, Pastries, Muffins & Other Oven Treats  
- **Decadent Desserts**: Ras Malai, Kulfi, Gulab Jamun & more

### Special Requests

We’re delighted to accommodate your preferences with **Vegan**, **Gluten-Free**, and **Lactose-Free** options — ensuring every bite is perfect.

Have any other special requests? Let’s discuss them with you to make your event truly unforgettable.   `,$a=`Dia's Delicacy est née du rêve sincère d’une femme de faire revivre les saveurs précieuses de son enfance. Aujourd’hui, cette vision s’est épanouie en une véritable destination culinaire — un hommage à la richesse et à la diversité du patrimoine gastronomique indien.

Fondée par la Cheffe **Dia Patel**, notre cuisine au cœur de Genève vous propose le meilleur de la cuisine indienne. Inspirée par la culture vibrante de la street food indienne ainsi que par les plats mijotés réconfortants des cuisines familiales, chaque création de **Dia's Delicacy** marie des épices authentiques, des textures raffinées et des saveurs pleines d’âme.

Ici, chaque assiette raconte une histoire — une histoire de tradition, de passion et du plaisir de partager un bon repas. Nous vous invitons à savourer avec nous l’héritage culinaire de l’Inde, une bouchée inoubliable à la fois.

Chaque ingrédient est soigneusement sélectionné, et chaque plat est préparé avec précision et amour, afin d’offrir à chaque convive une expérience gastronomique mémorable.`,eo=`<!-- show: false -->
### Avis de Fermeture
Nous serons fermés du 23 au 25 mai en raison du Pentecôte.

`,to=`📍 Adresse: **Rue Schaub 11, 1202 Genève**

📞 Téléphone: **[+41 227 34 11 22](tel:+41227341122)**

📮 Email: **[dia.delicacy@gmail.com](mailto:dia.delicacy@gmail.com)**

---
`,no=`## Bienvenue chez Dia's Delicacy

Découvrez l'excellence culinaire dans un cadre intime et élégant.
`,ro=`<!-- tab: Fêtes & Traiteur -->

Chez **Dia’s Delicacy**, nous mettons un point d’honneur à transformer chaque moment de votre vie en une expérience inoubliable. Que vous organisiez un rassemblement intime ou une grande célébration, nos services de traiteur sont pensés pour répondre à toutes vos attentes. Recevez vos invités dans notre salle ou laissez-nous apporter nos saveurs directement chez vous.

### Nos Spécialités

- **Cuisine Indienne Faite Maison**
- **Pâtisseries & Friandises** : Gâteaux, Pâtisseries, Muffins & autres douceurs    
- **Desserts**: Ras Malai, Kulfi, Gulab Jamun & more

### Requests Spéciaux

Nous sommes ravis de répondre à vos envies avec des options **véganes**, **sans gluten** et **sans lactose** — pour que chaque bouchée soit parfaite.

Une autre demande particulière ? Parlons-en ensemble pour rendre votre événement vraiment inoubliable.   `,io=`<!-- tab: Nos Matériaux -->
<!--show: false-->

### Épices Authentiques et Ingrédients Frais
Nous pensons que le secret d'une excellente cuisine indienne réside dans la qualité des ingrédients.

*   **Épices Sélectionnées à la Main**: Importées directement des meilleures régions d'Inde.
*   **Produits Locaux**: Nous travaillons avec des agriculteurs locaux pour des légumes et des viandes frais.
*   **Méthodes Traditionnelles**: Nous utilisons des fours à argile traditionnels (Tandoors) pour ce goût fumé authentique.
`,ao=`<!-- tab: Nos Partenaires -->
<!--show: false-->

### Grandir Ensemble
Nous sommes fiers de collaborer avec des marques qui partagent notre engagement envers la qualité et l'excellence.

*   **Fournisseurs Locaux**: Produits laitiers et viandes frais des meilleurs producteurs de Genève.
*   **Importateurs d'Épices**: Partenariats exclusifs pour des épices indiennes rares et de haute qualité.
*   **Organisateurs d'Événements**: Collaboration avec les meilleurs planificateurs pour des événements sans faille.
`,oo=`<!-- tab: Ce que nous faisons -->
<!--show: false-->

### Excellence Culinaire
Nous apportons le goût authentique de l'Inde à votre porte. Des dîners intimes aux grands événements d'entreprise, notre service traiteur est adapté à vos besoins.

*   **Menus Personnalisés**: Adaptés à vos préférences.
*   **Personnel Professionnel**: Serveurs et chefs expérimentés.
*   **Cuisine sur Place**: Plats fraîchement préparés sur votre lieu d'événement.
`,so=`# Spécial du Jour - Samedi

### Entrées
* **Samosa Chaat** - Samossas croustillants nappés de chutneys acidulés et de yaourt.
* **Paneer Tikka** - Fromage frais mariné et grillé à la perfection.

### Plats Principaux
* **Poulet au Beurre** - Poulet tendre dans une sauce crémeuse à la tomate.
* **Dal Makhani** - Lentilles noires mijotées avec du beurre et de la crème.

### Dessert
* **Gulab Jamun** - Boulettes de lait tièdes dans un sirop de rose.
`,co=`# 10 Mai, Dimanche

### Entrées
* **Samosa Chaat** - Crispy samosas topped with tangy chutneys and yogurt.
* **Paneer Tikka** - Marinated cottage cheese grilled to perfection.

### Plat Principal
* **Butter Chicken** - Tender chicken in a rich, creamy tomato gravy.
* **Dal Makhani** - Slow-cooked black lentils with butter and cream.

### Dessert
* **Gulab Jamun** - Warm milk dumplings in rose syrup.
`,lo=`# Lundi 11 mai

* ### **Crevettes au curry vert :**

  Servies avec un pulao aux petits pois parfumé et une salade fraîche du domaine.

* ### **Curry de palak frais du domaine :**

  Épinards frais du jardin cuisinés aux cacahuètes et au dal de pois chiches (Gram dal), accompagnés d'un savoureux pulao aux petits pois et d'une salade.`,uo=`
# 12 Mai, Mardi

* ### **Poulet Bhuna:**
    Servi avec deux parathas croustillants ou du riz, accompagné d’une salade de navets et betteraves croquante.

* ### **Curry de Mungo(Lentilles) Entier:**
Des haricots mungo entiers nutritifs mijotés dans un mélange d'épices savoureux, servis avec du riz léger et une salade de navets et betteraves rafraîchissante.
`,fo=`
# 13 Mai, Mercredi

* ### **Kheema de Poulet :** 🍗
    Du poulet haché savoureux sauté avec des épices traditionnelles, servi avec du riz à la vapeur et un accompagnement de fenouil de saison.

* ### **Curry de Rajma :** 🌱Ⓥ
Un curry de haricots rouges réconfortant et copieux, servi avec du riz à la vapeur et de délicieux légumes au fenouil.

`,po=`## 18 Mai, Lundi

* ### **Poulet Lababdar :** 🍗
    Un curry de poulet riche et crémeux à base de tomates et d’épices douces, servi avec du riz parfumé et des courgettes sautées.

* ### **Paneer Lababdar :** 🌱
    Du paneer fondant mijoté dans une sauce onctueuse aux tomates et aux épices indiennes, accompagné de riz et de courgettes sautées.
`,mo=`## 19 Mai, Mardi

* ### **Poulet Lababdar :** 🍗
    Un curry de poulet riche et crémeux à base de tomates et d’épices douces, servi avec du riz parfumé et des courgettes sautées.

* ### **Vangi Bhat :** 🌱Ⓥ
    Riz épicé aux aubergines à la façon du Maharashtra, accompagné de Sol Kadhi à la noix de coco et de légumes aux fèves et chou.
`,ho=`## 20 Mai, Mercredi

* ### **Curry de Kofta de Poulet :** 🍗
    De tendres boulettes de poulet mijotées dans une sauce indienne crémeuse et parfumée.

* ### **Malai Kofta / Curry de Tofu :** 🌱
    Boulettes de légumes et fromage frais dans une sauce douce et crémeuse, ou tofu mijoté dans un curry parfumé aux épices.`,go=`## 21 Mai, Jeudi

* ### **Saumon Achari :** 🐟
    Saumon cuisiné avec des épices marinées style achari, servi avec du riz parfumé et légumes.

* ### **Curry de Champignons et Tofu :** 🌱Ⓥ
    Champignons et tofu mijotés dans une sauce indienne savoureuse aux épices douces.
`,_o=`## 22 Mai, Vendredi

* ### **Poulet Tandoori :** 🍗
    Poulet mariné aux épices tandoori et grillé, servi avec du riz aux épinards et un raita de betterave rafraîchissant.

* ### **Dosa Aloo & Dosa Légumes Mixtes :** 🌱
    Crêpes croustillantes du sud de l’Inde garnies de pommes de terre épicées ou de légumes variés, servies avec du sambhar (ragoût de lentilles et légumes) et un chutney de noix de coco.`,vo=`## 25 Mai, Lundi

* ### **Jour férié :** 🏛️
    Nous sommes fermés aujourd'hui pour le Lundi de Pentecôte. À demain !
`,yo=`## 26 Mai, Mardi

* ### **Poulet Achari :** 🍗
    Poulet tendre mijoté dans une sauce acidulée et aromatique aux épices d'achari (cornichons indiens), servi avec du riz cuit à la vapeur et une salade fraîche.

* ### **Valachi Usal avec Riz & Chapati :** 🌱Ⓥ
    Haricots de Lima germés (val) mijotés dans une sauce épicée à la noix de coco et aux oignons, servis avec du riz, des légumes et un chapati moelleux.
`,bo=`## 27 Mai, Mercredi

* ### **Lamb Kheema Pao :** 🥩
    Curry d'agneau haché épicé servi avec des petits pains moelleux (pao), accompagné d'une salade d'oignons et radis, et d'une raïta de concombre rafraîchissante.

* ### **Dal Rice avec Légumes & Chapati :** 🌱Ⓥ
    Curry de lentilles jaunes (dal) réconfortant servi avec du riz cuit à la vapeur, des légumes de saison et un chapati moelleux.
`,xo=`## 28 Mai, Jeudi

* ### **Lamb Kheema Pao :** 🥩 <span class="prix">24 CHF</span>
    Curry d'agneau haché épicé servi avec des petits pains moelleux (pao), accompagné d'une salade d'oignons et radis, et d'une raïta de concombre rafraîchissante.

* ### **Paneer Matar avec Riz & Légumes :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Dés de fromage frais indien (paneer) et petits pois mijotés dans une sauce épicée aux oignons et tomates, servis avec du riz cuit à la vapeur et des légumes de saison.
  
* ### **Dal Rice avec Légumes & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de lentilles jaunes (dal) réconfortant servi avec du riz cuit à la vapeur, des légumes de saison et un chapati moelleux.
`,So=`## 29 Mai, Vendredi

* ### **Biryani au Poulet :** 🍗
    Riz Basmati parfumé disposé en couches avec du poulet tendre mariné aux épices, du safran et des herbes fraîches, servi avec une raïta fraîche.

* ### **Dosa :** 🌱Ⓥ
    Crêpe fine et croustillante à base de riz fermenté et de lentilles, servie avec un ragoût de lentilles et légumes (sambar) et un chutney de noix de coco frais.
`,Co=`## 01 Juin, Lundi

* ### **Poulet Dhansak avec Riz & Légumes :** 🍗
    Poulet tendre cuit lentement avec un mélange savoureux de lentilles et de légumes dans une sauce épicée, servi avec du riz et des légumes.

* ### **Dal de Masoor Entier avec Riz & Légumes :** 🌱Ⓥ
    Lentilles brunes entières et nutritives mijotées dans des épices aromatiques, servies avec du riz cuit à la vapeur et des légumes de saison.
`,wo=`## 02 Juin, Mardi

* ### **Poulet Karahi Désossé avec Riz :** 🍗
    Tendres morceaux de poulet désossés sautés dans un wok traditionnel avec des tomates fraîches, du gingembre, de l'ail et des épices moulues, servis avec du riz.

* ### **Paneer Kadhai :** 🌱
    Cubes de fromage paneer frais cuisinés avec des poivrons, des oignons et des tomates dans un mélange d'épices fraîches et parfumées.
`,To=`## 03 Juin, Mercredi

* ### **Poulet Karahi Désossé avec Riz :** 🍗
    Tendres morceaux de poulet désossés sautés dans un wok traditionnel avec des tomates fraîches, du gingembre, de l'ail et des épices moulues, servis avec du riz.

* ### **Chole Bhatura avec Salade & Raïta :** 🌱
    Curry de pois chiches épicé (chole) servi avec de grands pains frits et gonflés (bhatura), accompagné d'une salade d'oignons frais et d'une raïta.
`,Eo=`## 04 Juin, Jeudi

* ### **Curry de Poulet Nadan du Kerala avec Riz :** 🍗
    Curry de poulet traditionnel du Kerala cuisiné dans du lait de coco et des épices aromatiques, servi avec riz et des légumes.

* ### **Chole Bhatura avec Salade & Raïta :** 🌱
    Curry de pois chiches épicé (chole) servi avec de grands pains frits et gonflés (bhatura), accompagné d'une salade d'oignons frais et d'une raïta.
`,Do=`## 05 Juin, Vendredi

* ### **Poulet Tandoori :** 🍗
    Poulet grillé mariné aux épices tandoori, servi avec du riz aromatique assaisonné et une salade fraîche.

* ### **Dosa avec Aloo & Paneer Bhurji :** 🌱
    Crêpe de riz et lentilles croustillante farcie de pommes de terre épicées et de paneer râpé et sauté, servie avec du sambar et un chutney à la noix de coco.
`,Oo=`### 08 Juin, Lundi

* ### **Curry de Poulet aux Poireaux avec Riz :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tendres morceaux de poulet mijotés dans une sauce savoureuse aux poireaux et épices, servis avec du riz.

* ### **Dal Rice avec Aloo Gobi & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles jaunes (dal) réconfortantes accompagnées de pommes de terre et chou-fleur épicés (aloo gobi), servies avec du riz et un chapati.
`,ko=`### 09 Juin, Mardi

* ### **Curry de Poulet au Yaourt (Dahi Chicken) :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mariné et cuit dans une sauce onctueuse au yaourt et aux épices aromatiques, servi avec du riz.

* ### **Curry de Paneer au Fenugrec (Methi Malai Mutter Paneer) :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Dés de fromage paneer et petits pois dans une sauce crémeuse parfumée aux feuilles de fenugrec (methi), servi avec du riz.
`,Ao=`### 10 Juin, Mercredi

* ### **Poulet Palak :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tendres morceaux de poulet mijotés dans une sauce onctueuse aux épinards frais et aux épices, servis avec du riz.

* ### **Curry de Poulet au Yaourt (Dahi Chicken) :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mariné et cuit dans une sauce onctueuse au yaourt et aux épices aromatiques, servi avec du riz.

* ### **Palak Paneer / Tofu :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Cubes de fromage paneer ou de tofu servis dans une sauce veloutée aux épinards et épices aromatiques, accompagnés de riz.
`,jo=`### 11 Juin, Jeudi

* ### **Poulet Palak :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tendres morceaux de poulet mijotés dans une sauce onctueuse aux épinards frais et aux épices, servis avec du riz.

* ### **Chawlichi Usal avec Riz, Salade & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Un curry savoureux de haricots cornilles (black-eyed peas) préparé avec des épices traditionnelles, servi avec du riz, une salade fraîche et un chapati.
`,Mo=`### 12 Juin, Vendredi

* ### **Biryani au Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Riz Basmati parfumé disposé en couches avec du poulet tendre mariné aux épices, du safran et des herbes fraîches, servi avec une raïta fraîche.

* ### **Dosa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpe fine et croustillante à base de riz fermenté et de lentilles, servie avec un ragoût de lentilles et légumes (sambar) et un chutney de noix de coco frais.
`,No=`### 15 Juin, Lundi

* ### **Moong Dal Palak :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles moong vertes aux épinards frais, servies avec du riz, des légumes de saison et un pain chapati traditionnel. / *Grren moong lentils cooked with fresh spinach, served with rice, seasonal vegetables, and a traditional chapati.*

* ### **Poulet Palak :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mijoté dans une sauce onctueuse aux épinards et aux épices, servi avec du riz et une salade. / *Tender chicken simmered in a creamy spiced spinach sauce, served with rice and a side salad.*
`,Po=`### 16 Juin, Mardi

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles noires mijotées lentement avec du beurre et de la crème, servies avec un pain paratha croustillant, du riz et une salade fraîche. / *Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.*

* ### **Poulet Mughlai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet préparé dans une sauce royale riche et crémeuse aux noix, servie avec du riz et des légumes de saison. / *Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.*
`,Fo=`### 17 Juin, Mercredi

* ### **Curry d’Agneau :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Agneau mijoté lentement dans une sauce aux épices aromatiques, servi avec du riz et une salade de concombre fraîche. / *Slow-cooked lamb in an aromatic spiced gravy, served with rice and a fresh cucumber salad.*

* ### **Soya Chilli & Riz Frit Indo-Chinois :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Bouchées de soja sautées dans une sauce épicée et piquante, accompagnées de riz frit de style indo-chinois. / *Sautéed soy chunks in a spicy, tangy sauce, served with Indo-Chinese style fried rice.*

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles noires mijotées lentement avec du beurre et de la crème, servies avec un pain paratha croustillant, du riz et une salade fraîche. / *Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.*

* ### **Poulet Mughlai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet préparé dans une sauce royale riche et crémeuse aux noix, servie avec du riz et des légumes de saison. / *Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.*`,Io=`### 18 Juin, Jeudi 

* ### **Curry d’Agneau :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Agneau mijoté lentement dans une sauce aux épices aromatiques, servi avec du riz et une salade de concombre fraîche. / *Slow-cooked lamb in an aromatic spiced gravy, served with rice and a fresh cucumber salad.*

* ### **Soya Chilli & Riz Frit Indo-Chinois :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Bouchées de soja sautées dans une sauce épicée et piquante, accompagnées de riz frit de style indo-chinois. / *Sautéed soy chunks in a spicy, tangy sauce, served with Indo-Chinese style fried rice.*

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles noires mijotées lentement avec du beurre et de la crème, servies avec un pain paratha croustillant, du riz et une salade fraîche. / *Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.*

* ### **Poulet Mughlai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet préparé dans une sauce royale riche et crémeuse aux noix, servie avec du riz et des légumes de saison. / *Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.*
`,Lo=`### 19 Juin, Vendredi

* ### **Poulet Tandoori :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mariné au yaourt et aux épices tandoori traditionnelles puis grillé, servi avec du riz aux carottes et une salade verte aux fèves d'edamame. / *Yogurt and tandoori-spiced marinated grilled chicken, served with carrot rice and a green salad with edamame beans.*

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpe fine de riz et lentilles fermentées, garnie d'une farce de pommes de terre épicées (Masala) ou d'un œuf, servie avec sambar et chutney. / *Thin fermented rice and lentil crepe, filled with spiced potato mash (Masala) or egg, served with warm sambar and chutney.*
`,Ro=`### 22 Juin, Lundi

* ### **Dal & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Dal indien traditionnel servi avec un chapati frais, du riz et des courgettes de saison. / *Traditional Indian dal served with fresh chapati, rice, and seasonal zucchini.*

* ### **Poulet Grillé au Methi :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet grillé mariné au fenugrec (methi), servi avec du riz à la tomate et des légumes de saison. / *Fenugreek-marinated grilled chicken served with tomato rice and seasonal vegetables.*
`,zo=`### 23 Juin, Mardi

* ### **Bol Poké Tofu / Paneer à la Noix de Coco :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Salade de carottes et lentilles moong à la noix de coco, quinoa aux fèves, tofu ou paneer sauté dans une sauce tomate à l’ail, servi façon bol poké. / *Coconut moong and carrot salad, quinoa with broad beans, and tofu or paneer tossed in garlic tomato sauce, served poke bowl style.*

* ### **Poulet au Methi :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre au fenugrec (methi), accompagné de garnitures fraîches de saison. / *Tender fenugreek chicken served with seasonal accompaniments.*
`,Bo=`### 24 Juin, Mercredi

* ### **Curry de Tofu à la Kérala :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tofu mijoté dans une sauce crémeuse à la noix de coco façon Kerala, servi avec du riz et des légumes ou une salade fraîche. / *Tofu simmered in a Kerala-style coconut curry, served with rice and vegetables or fresh salad.*

* ### **Poulet Mappas Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mijoté dans une sauce douce à la noix de coco aux épices du sud de l’Inde, accompagné de riz. / *Chicken cooked in a mild South Indian coconut curry, served with rice.*
`,Vo=`### 25 Juin, Jeudi

* ### **Paneer Kadhai :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cuisiné avec poivrons, oignons et épices kadhai traditionnelles, servi avec du riz et des légumes. / *Paneer cooked with peppers, onions, and traditional kadhai spices, served with rice and vegetables.*

* ### **Poulet Kadhai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet sauté avec poivrons et oignons dans une sauce kadhai parfumée, servi avec du riz et des légumes. / *Chicken cooked with peppers and onions in an aromatic kadhai sauce, served with rice and vegetables.*
`,Ho=`### 26 Juin, Vendredi

*  ### **Poulet Kadhai ou Poulet Mappas Curry:** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Servi avec du riz et des légumes.

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpe fine de riz et lentilles fermentées, garnie d'une farce de pommes de terre épicées ou d'un œuf, servie avec sambar et chutney. / *Thin fermented rice and lentil crepe filled with spiced potatoes or egg, served with sambar and chutney.*
`,Uo=`### 29 Juin, Lundi

* ### **Curry de Moong Germé :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de haricots moong germés, servi avec du quinoa coloré ou du riz, et une salade de concombre aux cacahuètes. / *Sprouted moong curry, served with colored quinoa or rice, and a cucumber salad with peanuts.*

* ### **Curry de Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poulet savoureux servi avec du riz et des courgettes de saison. / *Chicken curry served with rice and seasonal zucchini.*
`,Wo=`### 30 Juin, Mardi

* ### **Curry de Moong Germé :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de haricots moong germés, servi avec du quinoa coloré ou du riz, et une salade de concombre aux cacahuètes. / *Sprouted moong curry, served with colored quinoa or rice, and a cucumber salad with peanuts.*

* ### **Curry de Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poulet classique servi avec du riz et une salade de concombre fraîche. / *Classic chicken curry served with rice and a fresh cucumber salad.*
`,Go=`### 01 Juillet, Mercredi

* ### **Baingan Bharta & Dahi :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Caviar d'aubergines grillées (Baingan Bharta) servi avec du yaourt (dahi), des légumes et un chapati. / *Smoked eggplant mash (Baingan Bharta) served with yogurt (dahi), veggies, and chapati.*

* ### **Curry d'Agneau :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Curry d'agneau tendrement mijoté, servi avec du riz et des légumes d'accompagnement. / *Tender slow-cooked lamb curry, served with rice and side vegetables.*
    
    * ### **Curry de Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poulet classique servi avec du riz et une salade de concombre fraîche. / *Classic chicken curry served with rice and a fresh cucumber salad.*
`,Ko=`### 02 Juillet, Jeudi

* ### **Baingan Bharta Style Maharashtrian :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Caviar d'aubergines préparé à la mode de Maharashtra, servi avec chapati, riz et légumes. / *Eggplant mash prepared in Maharashtrian style, served with chapati, rice, and veggies.*

* ### **Curry d'Agneau :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Curry d'agneau riche en saveurs, servi avec du riz et des légumes de saison. / *Flavorful lamb curry served with rice and seasonal vegetables.*
`,qo=`### 03 Juillet, Vendredi

* ### **Biryani au Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Plat de riz basmati parfumé et mijoté avec du poulet mariné et des épices traditionnelles, servi avec raïta. / *Fragrant basmati rice layered with marinated chicken and traditional spices, served with raita.*

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpe fine de riz et lentilles fermentées, garnie d'une farce de pommes de terre épicées ou d'un œuf, servie avec sambar et chutney. / *Thin fermented rice and lentil crepe filled with spiced potatoes or egg, served with sambar and chutney.*
`,Jo=`### 06 Juillet, Lundi

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles noires crémeuses traditionnelles servies avec du riz et des côtes de blettes. *Disponible en version végétalienne avec de la crème végane sur demande.* / *Traditional creamy black lentils served with rice and Swiss chard. Available for vegans with vegan cream upon request.* 🌱Ⓥ

* ### **Poulet au Thecha :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet sauté au Thecha (pâte de piment vert et cacahuètes), servi avec du pain jowar bhakri (sorgho) et une salade. <br>⚠️ **Contient des cacahuètes.** *Poulet : Origine Suisse.* / *Chicken sautéed with Thecha (green chili and peanut paste), served with jowar bhakri (sorghum flatbread) and salad. ⚠️ **Contains peanuts.** Chicken: Origin Switzerland.*
`,Yo=`### 07 Juillet, Mardi

* ### **Chawli Vangi Batata Rassa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry traditionnel aux haricots à œil noir, aubergines fraîches du marché et pommes de terre, servi avec du riz, un chapati et une salade. <br>⚠️ **Contient des cacahuètes.** / *Traditional curry with black-eyed beans, farm-fresh aubergines, and potatoes, served with rice, chapati, and salad. ⚠️ **Contains peanuts.***

* ### **Poulet au Thecha & Ragi Bhakri :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet savoureux au Thecha servi avec du pain ragi bhakri (millet) et une salade. <br>⚠️ **Contient des cacahuètes.** *Poulet : Origine Suisse.* / *Flavorful Thecha chicken served with ragi bhakri (finger millet flatbread) and salad. ⚠️ **Contains peanuts.** Chicken: Origin Switzerland.*
`,Xo=`### 08 Juillet, Mercredi

* ### **Fermé :** 🗓️
    Jour férié — Le restaurant est fermé aujourd'hui. / *Public Holiday — The restaurant is closed today.*
`,Zo=`### 09 Juillet, Jeudi

* ### **Curry de Poisson Style Kerala :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poisson parfumé à la noix de coco et aux épices du Kerala, servi avec un assortiment de légumes. / *Fragrant Kerala-style fish curry simmered with coconut and spices, served with mixed vegetables.*
`,Qo=`### 10 Juillet, Vendredi

* ### **Poulet Tandoori & Riz aux Épinards :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mariné aux épices tandoori et grillé, servi avec un riz aux épinards et un raïta de betterave rouge. *Poulet : Origine Suisse.* / *Spiced marinated grilled chicken tandoori, served with aromatic spinach rice and a vibrant beetroot raita. Chicken: Origin Switzerland.*

* ### **Masala Dosa & Egg Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpes de lentilles et riz fermentés croustillantes : une garnie de pommes de terre épicées (Masala) et une préparée avec un œuf, servies avec chutney et sambar. / *Crispy fermented rice and lentil crepes: one filled with spiced potato mash (Masala) and one layered with egg, served with chutney and sambar.*
`,$o=`| | | |
| :--- | :--- | :--- |
| **Boissons** | Mango Lassi <br/> Kombucha <br/> Super Bock | 5 CHF |
| | Café BIO <br/> Chai | 3.50 |
| | Bière Indienne <br/> Bière Sans Gluten | 7 CHF |
| **Dessert** | Millet Banana Shira <br/> Gâteau Choc. Biscoff | 5 CHF |
| **Suppléments** | Naan au Beurre <br/> Sev Puri <br/> Paratha Methi | 5 CHF |
| | Naan au Fromage <br/> Naan à l'Ail | 6 CHF |
| | Naan Amritsari | 8 CHF |
`,es=`### Entrées

#### Trio de Bruschetta
Tomates fraîches, basilic, ail et vinaigre balsamique sur pain croustillant

#### Crevettes Saganaki
Crevettes succulentes dans une riche sauce au fromage feta

### Plats Principaux

#### Branzino à la Poêle
Bar de mer méditerranéen avec légumes de saison et beurre blanc au citron

#### Filet de Boeuf
Morceau de premier choix avec jus de truffe et pommes de terre rôties

### Desserts

#### Tiramisu
Dessert italien classique avec mascarpone et espresso

#### Gâteau au Chocolat Sans Farine
Chocolat riche et décadent avec coulis de framboise
`,ts=`
####
Horaires d'ouverture: <br/><b>Lundi - Vendredi: 07h45 - 20h00</b>`;function ns(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rs=ns();function is(e){rs=e}var as={exec:()=>null};function Z(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Q.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var os=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Q={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},ss=/^(?:[ \t]*(?:\n|$))+/,cs=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ls=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,us=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ds=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fs=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ps=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ms=Z(ps).replace(/bull/g,fs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),hs=Z(ps).replace(/bull/g,fs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),gs=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_s=/^[^\n]+/,vs=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ys=Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,vs).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),bs=Z(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fs).getRegex(),xs=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Ss=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Cs=Z(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Ss).replace(`tag`,xs).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ws=Z(gs).replace(`hr`,us).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,xs).getRegex(),Ts={blockquote:Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,ws).getRegex(),code:cs,def:ys,fences:ls,heading:ds,hr:us,html:Cs,lheading:ms,list:bs,newline:ss,paragraph:ws,table:as,text:_s},Es=Z(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,us).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,xs).getRegex(),Ds={...Ts,lheading:hs,table:Es,paragraph:Z(gs).replace(`hr`,us).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Es).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,xs).getRegex()},Os={...Ts,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Ss).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:as,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(gs).replace(`hr`,us).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ms).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},ks=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,As=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,js=/^( {2,}|\\)\n(?!\s*$)/,Ms=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ns=/[\p{P}\p{S}]/u,Ps=/[\s\p{P}\p{S}]/u,Fs=/[^\s\p{P}\p{S}]/u,Is=Z(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Ps).getRegex(),Ls=/(?!~)[\p{P}\p{S}]/u,Rs=/(?!~)[\s\p{P}\p{S}]/u,zs=/(?:[^\s\p{P}\p{S}]|~)/u,Bs=Z(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,os?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Vs=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Hs=Z(Vs,`u`).replace(/punct/g,Ns).getRegex(),Us=Z(Vs,`u`).replace(/punct/g,Ls).getRegex(),Ws=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Gs=Z(Ws,`gu`).replace(/notPunctSpace/g,Fs).replace(/punctSpace/g,Ps).replace(/punct/g,Ns).getRegex(),Ks=Z(Ws,`gu`).replace(/notPunctSpace/g,zs).replace(/punctSpace/g,Rs).replace(/punct/g,Ls).getRegex(),qs=Z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Fs).replace(/punctSpace/g,Ps).replace(/punct/g,Ns).getRegex(),Js=Z(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,Ns).getRegex(),Ys=Z(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Fs).replace(/punctSpace/g,Ps).replace(/punct/g,Ns).getRegex(),Xs=Z(/\\(punct)/,`gu`).replace(/punct/g,Ns).getRegex(),Zs=Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Qs=Z(Ss).replace(`(?:-->|$)`,`-->`).getRegex(),$s=Z(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Qs).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ec=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,tc=Z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,ec).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),nc=Z(/^!?\[(label)\]\[(ref)\]/).replace(`label`,ec).replace(`ref`,vs).getRegex(),rc=Z(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,vs).getRegex(),ic=Z(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,nc).replace(`nolink`,rc).getRegex(),ac=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,oc={_backpedal:as,anyPunctuation:Xs,autolink:Zs,blockSkip:Bs,br:js,code:As,del:as,delLDelim:as,delRDelim:as,emStrongLDelim:Hs,emStrongRDelimAst:Gs,emStrongRDelimUnd:qs,escape:ks,link:tc,nolink:rc,punctuation:Is,reflink:nc,reflinkSearch:ic,tag:$s,text:Ms,url:as},sc={...oc,link:Z(/^!?\[(label)\]\((.*?)\)/).replace(`label`,ec).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,ec).getRegex()},cc={...oc,emStrongRDelimAst:Ks,emStrongLDelim:Us,delLDelim:Js,delRDelim:Ys,url:Z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,ac).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,ac).getRegex()},lc={...cc,br:Z(js).replace(`{2,}`,`*`).getRegex(),text:Z(cc.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},uc={normal:Ts,gfm:Ds,pedantic:Os},dc={normal:oc,gfm:cc,breaks:lc,pedantic:sc},fc={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},pc=e=>fc[e];function mc(e,t){if(t){if(Q.escapeTest.test(e))return e.replace(Q.escapeReplace,pc)}else if(Q.escapeTestNoEncode.test(e))return e.replace(Q.escapeReplaceNoEncode,pc);return e}function hc(e){try{e=encodeURI(e).replace(Q.percentDecode,`%`)}catch{return null}return e}function gc(e,t){let n=e.replace(Q.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Q.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(Q.slashPipe,`|`);return n}function _c(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function vc(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Q.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function yc(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function bc(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function xc(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Sc(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Cc=class{options;rules;lexer;constructor(e){this.options=e||rs}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:vc(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Sc(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=_c(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:_c(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:_c(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=_c(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=bc(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=vc(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:_c(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=gc(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:_c(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(gc(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:_c(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=_c(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=yc(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),xc(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return xc(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},wc=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||rs,this.options.tokenizer=this.options.tokenizer||new Cc,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Q,block:uc.normal,inline:dc.normal};this.options.pedantic?(t.block=uc.pedantic,t.inline=dc.pedantic):this.options.gfm&&(t.block=uc.gfm,this.options.breaks?t.inline=dc.breaks:t.inline=dc.gfm),this.tokenizer.rules=t}static get rules(){return{block:uc,inline:dc}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Q.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Q.tabCharGlobal,`    `).replace(Q.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Tc=class{options;parser;constructor(e){this.options=e||rs}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Q.notSpaceStart)?.[0],i=e.replace(Q.endingNewline,``)+`
`;return r?`<pre><code class="language-`+mc(r)+`">`+(n?i:mc(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:mc(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${mc(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=hc(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+mc(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=hc(e);if(i===null)return mc(n);e=i;let a=`<img src="${e}" alt="${mc(n)}"`;return t&&(a+=` title="${mc(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:mc(e.text)}},Ec=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Dc=class e{options;renderer;textRenderer;constructor(e){this.options=e||rs,this.options.renderer=this.options.renderer||new Tc,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ec}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Oc=class{options;block;constructor(e){this.options=e||rs}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?wc.lex:wc.lexInline}provideParser(e=this.block){return e?Dc.parse:Dc.parseInline}},kc=new class{defaults=ns();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Dc;Renderer=Tc;TextRenderer=Ec;Lexer=wc;Tokenizer=Cc;Hooks=Oc;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Tc(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Cc(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Oc;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Oc.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Oc.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return wc.lex(e,t??this.defaults)}parser(e,t){return Dc.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?wc.lex:wc.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Dc.parse:Dc.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?wc.lex:wc.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Dc.parse:Dc.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+mc(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return kc.parse(e,t)}$.options=$.setOptions=function(e){return kc.setOptions(e),$.defaults=kc.defaults,is($.defaults),$},$.getDefaults=ns,$.defaults=rs,$.use=function(...e){return kc.use(...e),$.defaults=kc.defaults,is($.defaults),$},$.walkTokens=function(e,t){return kc.walkTokens(e,t)},$.parseInline=kc.parseInline,$.Parser=Dc,$.parser=Dc.parse,$.Renderer=Tc,$.TextRenderer=Ec,$.Lexer=wc,$.lexer=wc.lex,$.Tokenizer=Cc,$.Hooks=Oc,$.parse=$,$.options,$.setOptions,$.use,$.walkTokens,$.parseInline,Dc.parse,wc.lex;var Ac=Object.assign({"/src/content/en/about.md":Xi,"/src/content/en/announcement.md":Zi,"/src/content/en/contact.md":Qi,"/src/content/en/hero.md":$i,"/src/content/en/highlights-PartyAndCatering.md":ea,"/src/content/en/highlights-materials.md":ta,"/src/content/en/highlights-partners.md":na,"/src/content/en/highlights-what-we-do.md":ra,"/src/content/en/menu-2026-05-09.md":ia,"/src/content/en/menu-2026-05-10.md":aa,"/src/content/en/menu-2026-05-11.md":oa,"/src/content/en/menu-2026-05-12.md":sa,"/src/content/en/menu-2026-05-13.md":ca,"/src/content/en/menu-2026-05-18.md":la,"/src/content/en/menu-2026-05-19.md":ua,"/src/content/en/menu-2026-05-20.md":da,"/src/content/en/menu-2026-05-21.md":fa,"/src/content/en/menu-2026-05-22.md":pa,"/src/content/en/menu-2026-05-25.md":ma,"/src/content/en/menu-2026-05-26.md":ha,"/src/content/en/menu-2026-05-27.md":ga,"/src/content/en/menu-2026-05-28.md":_a,"/src/content/en/menu-2026-05-29.md":va,"/src/content/en/menu-2026-06-01.md":ya,"/src/content/en/menu-2026-06-02.md":ba,"/src/content/en/menu-2026-06-03.md":xa,"/src/content/en/menu-2026-06-04.md":Sa,"/src/content/en/menu-2026-06-05.md":Ca,"/src/content/en/menu-2026-06-08.md":wa,"/src/content/en/menu-2026-06-09.md":Ta,"/src/content/en/menu-2026-06-10.md":Ea,"/src/content/en/menu-2026-06-11.md":Da,"/src/content/en/menu-2026-06-12.md":Oa,"/src/content/en/menu-2026-06-15.md":ka,"/src/content/en/menu-2026-06-16.md":Aa,"/src/content/en/menu-2026-06-17.md":ja,"/src/content/en/menu-2026-06-18.md":Ma,"/src/content/en/menu-2026-06-19.md":Na,"/src/content/en/menu-2026-06-22.md":Pa,"/src/content/en/menu-2026-06-23.md":Fa,"/src/content/en/menu-2026-06-24.md":Ia,"/src/content/en/menu-2026-06-25.md":La,"/src/content/en/menu-2026-06-26.md":Ra,"/src/content/en/menu-2026-06-29.md":za,"/src/content/en/menu-2026-06-30.md":Ba,"/src/content/en/menu-2026-07-01.md":Va,"/src/content/en/menu-2026-07-02.md":Ha,"/src/content/en/menu-2026-07-03.md":Ua,"/src/content/en/menu-2026-07-06.md":Wa,"/src/content/en/menu-2026-07-07.md":Ga,"/src/content/en/menu-2026-07-08.md":Ka,"/src/content/en/menu-2026-07-09.md":qa,"/src/content/en/menu-2026-07-10.md":Ja,"/src/content/en/menu-fixed.md":Ya,"/src/content/en/menu.md":Xa,"/src/content/en/openingHours.md":Za,"/src/content/en/ourServices.md":Qa,"/src/content/fr/about.md":$a,"/src/content/fr/announcement.md":eo,"/src/content/fr/contact.md":to,"/src/content/fr/hero.md":no,"/src/content/fr/highlights-PartyAndCatering.md":ro,"/src/content/fr/highlights-materials.md":io,"/src/content/fr/highlights-partners.md":ao,"/src/content/fr/highlights-what-we-do.md":oo,"/src/content/fr/menu-2026-05-09.md":so,"/src/content/fr/menu-2026-05-10.md":co,"/src/content/fr/menu-2026-05-11.md":lo,"/src/content/fr/menu-2026-05-12.md":uo,"/src/content/fr/menu-2026-05-13.md":fo,"/src/content/fr/menu-2026-05-18.md":po,"/src/content/fr/menu-2026-05-19.md":mo,"/src/content/fr/menu-2026-05-20.md":ho,"/src/content/fr/menu-2026-05-21.md":go,"/src/content/fr/menu-2026-05-22.md":_o,"/src/content/fr/menu-2026-05-25.md":vo,"/src/content/fr/menu-2026-05-26.md":yo,"/src/content/fr/menu-2026-05-27.md":bo,"/src/content/fr/menu-2026-05-28.md":xo,"/src/content/fr/menu-2026-05-29.md":So,"/src/content/fr/menu-2026-06-01.md":Co,"/src/content/fr/menu-2026-06-02.md":wo,"/src/content/fr/menu-2026-06-03.md":To,"/src/content/fr/menu-2026-06-04.md":Eo,"/src/content/fr/menu-2026-06-05.md":Do,"/src/content/fr/menu-2026-06-08.md":Oo,"/src/content/fr/menu-2026-06-09.md":ko,"/src/content/fr/menu-2026-06-10.md":Ao,"/src/content/fr/menu-2026-06-11.md":jo,"/src/content/fr/menu-2026-06-12.md":Mo,"/src/content/fr/menu-2026-06-15.md":No,"/src/content/fr/menu-2026-06-16.md":Po,"/src/content/fr/menu-2026-06-17.md":Fo,"/src/content/fr/menu-2026-06-18.md":Io,"/src/content/fr/menu-2026-06-19.md":Lo,"/src/content/fr/menu-2026-06-22.md":Ro,"/src/content/fr/menu-2026-06-23.md":zo,"/src/content/fr/menu-2026-06-24.md":Bo,"/src/content/fr/menu-2026-06-25.md":Vo,"/src/content/fr/menu-2026-06-26.md":Ho,"/src/content/fr/menu-2026-06-29.md":Uo,"/src/content/fr/menu-2026-06-30.md":Wo,"/src/content/fr/menu-2026-07-01.md":Go,"/src/content/fr/menu-2026-07-02.md":Ko,"/src/content/fr/menu-2026-07-03.md":qo,"/src/content/fr/menu-2026-07-06.md":Jo,"/src/content/fr/menu-2026-07-07.md":Yo,"/src/content/fr/menu-2026-07-08.md":Xo,"/src/content/fr/menu-2026-07-09.md":Zo,"/src/content/fr/menu-2026-07-10.md":Qo,"/src/content/fr/menu-fixed.md":$o,"/src/content/fr/menu.md":es,"/src/content/fr/openingHours.md":ts});async function jc(e,t){let n=Ac[`/src/content/${e}/${t}.md`];return n?$(n):`<p>Error loading content (404)</p>`}function Mc(e,t){let n=`/src/content/${e}/${t}`;return Object.keys(Ac).filter(e=>e.startsWith(n)).map(e=>e.replace(n,``).replace(`.md`,``))}var Nc=`/assets/cafe-photo-v5lvKbvt.webp`,Pc=K(`<div></div>`);function Fc(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=F(``);Ii(async()=>{I(a,await jc(n(),`openingHours`))}),Fn(()=>(n(),jc),()=>{n()&&jc(n(),`openingHours`).then(e=>I(a,e))}),In(),Ni();var o=Pc();oi(o,()=>W(a),!0),O(o),q(e,o),j(),i()}var Ic=K(`<section id="home" class="hero min-h-fit"><div class="hero-content flex-col lg:flex-row-reverse gap-8 px-4 w-full max-w-6xl"><img alt="Cafe background" class="max-w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl shadow-2xl object-cover transition-transform duration-700 hover:scale-[1.02]"/> <div class="text-left flex-1"><div class="prose prose-lg lg:prose-xl"></div> <!> <!></div></div></section>`);function Lc(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=F(``);Ii(async()=>{I(a,await jc(n(),`hero`))}),Fn(()=>(n(),jc),()=>{n()&&jc(n(),`hero`).then(e=>I(a,e))}),In(),Ni();var o=Ic(),s=R(o),c=R(s),l=z(c,2),u=R(l);oi(u,()=>W(a),!0),O(u);var d=z(u,2);Fc(d,{}),J(z(d,2),e=>{}),O(l),O(s),O(o),B(()=>Ci(c,`src`,Nc)),q(e,o),j(),i()}function Rc(e){let t=new Intl.DateTimeFormat(`en-US`,{timeZone:`Europe/Zurich`,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(e),n={};for(let e of t)n[e.type]=e.value;return`${n.year}-${n.month}-${n.day}`}async function zc(){try{let e=(await fetch(window.location.href,{method:`HEAD`,cache:`no-store`})).headers.get(`Date`);if(e)return new Date(e)}catch(e){console.warn(`Failed to fetch server date, falling back to local client time:`,e)}return new Date}var Bc=K(`<h2 class="text-4xl md:text-5xl font-bold text-center mb-12"> </h2>`);function Vc(e,t){let n=Fi(t,`title`,8,``);var r=Bc(),i=R(r,!0);O(r),B(()=>Wr(i,n())),q(e,r)}var Hc=K(`<button> </button>`),Uc=K(`<div class="flex flex-wrap justify-center gap-2 mb-2"></div>`),Wc=K(`<div class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-base-100/50 backdrop-blur-sm z-10 rounded-2xl"><span class="loading loading-spinner loading-lg text-primary"></span> <p class="text-primary font-medium animate-pulse"> </p></div>`),Gc=K(`<div class="alert alert-info shadow-lg border-primary/50 bg-base-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-primary shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span></div>`),Kc=K(`<div class="fixed-menu-container mt-6 pt-1 border-t border-primary/20"></div>`),qc=K(`<section id="menu" class="py-20 px-4"><div class="max-w-4xl mx-auto"><div class="menu-header"><!> <!></div> <div class="relative min-h-[300px] py-0 px-4"><!> <div><!> <!></div></div></div></section>`);function Jc(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=F(``),o=F(``),s=F(!0),c=F([]),l=Rc(new Date),u=F(l);function d(e){let[t,n,r]=Rc(e).split(`-`).map(Number);return Array.from({length:7},(e,i)=>{let a=new Date(Date.UTC(t,n-1,r+i,12,0,0));return{iso:Rc(a),raw:a}})}let f=F(d(new Date));async function p(){let e=await zc();l=Rc(e),I(u,l),I(f,d(e))}async function m(e){let t=Mc(e,`menu-`);I(c,W(f).filter(e=>t.includes(e.iso))),W(c).length===0&&Mc(e,`menu`).includes(``)&&(I(c,[{iso:`default`,raw:new Date}]),I(u,`default`)),!W(c).find(e=>e.iso===W(u))&&W(c).length>0&&I(u,W(c)[0].iso)}async function h(e,t){if(!e)return;I(s,!0);let n=await jc(t,`menu-${e}`);n.includes(`Error loading content (404)`)||n.includes(`<!DOCTYPE html>`)?I(a,`<div class="alert alert-info shadow-lg border-primary/50 bg-base-100">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-primary shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   <span>${X(`menu.notAvailable`,t)}</span>
                 </div>`):I(a,n),I(s,!1)}async function g(e){Mc(e,`menu-fixed`).includes(``)?I(o,await jc(e,`menu-fixed`)):I(o,``)}function _(e,t){if(Rc(e)===l)return X(`menu.today`,t);let n=t===`fr`?`fr-CH`:`en-US`;return new Intl.DateTimeFormat(n,{weekday:`short`,day:`numeric`,month:`short`,timeZone:`Europe/Zurich`}).format(e)}Ii(async()=>{await p(),await m(n()),await g(n())}),Fn(()=>(n(),W(f)),()=>{(n()||W(f))&&(m(n()),g(n()))}),Fn(()=>(W(u),n()),()=>{W(u)&&h(W(u),n())}),In(),Ni();var v=qc(),y=R(v),b=R(y),x=R(b);{let e=Ht(()=>(wr(X),n(),G(()=>X(`nav.menu`,n()))));Vc(x,{get title(){return W(e)}})}var S=z(x,2),ee=e=>{var t=Uc();ei(t,5,()=>W(c),Xr,(e,t)=>{var r=Hc(),i=R(r,!0);O(r),B(e=>{mi(r,1,`btn btn-sm md:btn-md transition-all duration-300 ${(W(u),W(t),G(()=>W(u)===W(t).iso?`btn-primary shadow-primary scale-105`:`btn-ghost border-primary/50 hover:border-primary`))??``}`),Wr(i,e)},[()=>(W(t),n(),G(()=>_(W(t).raw,n())))]),Mr(`click`,r,()=>I(u,W(t).iso)),q(e,r)}),O(t),q(e,t)};J(S,e=>{W(c),G(()=>W(c).length>0)&&e(ee)}),O(b);var C=z(b,2),te=R(C),ne=e=>{var t=Wc(),r=z(R(t),2),i=R(r,!0);O(r),O(t),B(e=>Wr(i,e),[()=>(wr(X),n(),G(()=>X(`menu.loading`,n())))]),q(e,t)};J(te,e=>{W(s)&&e(ne)});var re=z(te,2),ie=R(re),ae=e=>{var t=Gc(),r=z(R(t),2),i=R(r,!0);O(r),O(t),B(e=>Wr(i,e),[()=>(wr(X),n(),G(()=>X(`menu.notAvailable`,n())))]),q(e,t)},oe=e=>{var t=Ur();oi(hn(t),()=>W(a)),q(e,t)};J(ie,e=>{W(c),W(s),G(()=>W(c).length===0&&!W(s))?e(ae):e(oe,-1)});var se=z(ie,2),ce=e=>{var t=Kc();oi(t,()=>W(o),!0),O(t),q(e,t)};J(se,e=>{W(o)&&e(ce)}),O(re),O(C),O(y),O(v),B(()=>mi(re,1,`prose prose-lg max-w-none transition-opacity duration-300 ${W(s)?`opacity-20`:`opacity-100`}`)),q(e,v),j(),i()}var Yc=`/assets/dia-chef-pic-D6G6pAyG.webp`,Xc=K(`<section id="about" class="py-20 px-4"><div class="max-w-4xl mx-auto"><!> <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"><div class="flex-shrink-0"><img alt="Chef Dia Patel" class="w-full md:w-80 h-auto rounded-xl shadow-lg transition-transform hover:scale-105"/></div> <div class="prose prose-lg"></div></div></div></section>`);function Zc(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=F(``);Ii(async()=>{I(a,await jc(n(),`about`))}),Fn(()=>(n(),jc),()=>{n()&&jc(n(),`about`).then(e=>I(a,e))}),In(),Ni();var o=Xc(),s=R(o),c=R(s);{let e=Ht(()=>(wr(X),n(),G(()=>X(`nav.about`,n()))));Vc(c,{get title(){return W(e)}})}var l=z(c,2),u=R(l),d=R(u);O(u);var f=z(u,2);oi(f,()=>W(a),!0),O(f),O(l),O(s),O(o),B(()=>Ci(d,`src`,Yc)),q(e,o),j(),i()}var Qc=K(`<button> </button>`),$c=K(`<div class="flex flex-wrap justify-center gap-2 mb-12"></div>`),el=K(`<div class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-base-100/50 backdrop-blur-sm z-10 rounded-3xl"><span class="loading loading-spinner loading-lg text-primary"></span></div>`),tl=K(`<p class="text-center opacity-50 italic py-12"> </p>`),nl=K(`<section id="highlights" class="py-20 px-4"><div class="max-w-4xl mx-auto"><!> <!> <div class="relative min-h-[300px] bg-base-300 p-8 rounded-3xl shadow-inner border border-primary/50"><!> <div><!></div></div></div></section>`);function rl(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=F(!0),o=F(``),s=F([]),c=F(``),l=Object.assign({"/src/content/en/highlights-PartyAndCatering.md":ea,"/src/content/en/highlights-materials.md":ta,"/src/content/en/highlights-partners.md":na,"/src/content/en/highlights-what-we-do.md":ra,"/src/content/fr/highlights-PartyAndCatering.md":ro,"/src/content/fr/highlights-materials.md":io,"/src/content/fr/highlights-partners.md":ao,"/src/content/fr/highlights-what-we-do.md":oo});function u(e){I(a,!0);let t=[],n=`/src/content/${e}/highlights-`;Object.entries(l).forEach(([e,r])=>{if(e.startsWith(n)){let i=e.replace(n,``).replace(`.md`,``);if(!d(r))return;let a=r.match(/<!--\s*tab:\s*(.*?)\s*-->/),o=a?a[1]:i.replace(/-/g,` `);t.push({id:i,label:o,rawContent:r})}}),I(s,t.sort((e,t)=>e.id.localeCompare(t.id))),W(s).length>0?(!W(o)||!W(s).find(e=>e.id===W(o)))&&I(o,W(s)[0].id):I(o,``),f(),I(a,!1)}function d(e){let t=e.match(/<!--\s*show:\s*(true|false)\s*-->/i);return!t||t[1].toLowerCase()!==`false`}function f(){let e=W(s).find(e=>e.id===W(o));e?I(c,$(e.rawContent.replace(/<!--\s*tab:.*?\s*-->/,``))):I(c,``)}Ii(()=>{u(n())}),Fn(()=>n(),()=>{n()&&u(n())}),Fn(()=>W(o),()=>{W(o)&&f()}),In(),Ni();var p=nl(),m=R(p),h=R(m);{let e=Ht(()=>(wr(X),n(),G(()=>X(`nav.highlights`,n()))));Vc(h,{get title(){return W(e)}})}var g=z(h,2),_=e=>{var t=$c();ei(t,5,()=>W(s),Xr,(e,t)=>{var n=Qc(),r=R(n,!0);O(n),B(()=>{mi(n,1,`btn btn-sm md:btn-md transition-all duration-300 ${(W(o),W(t),G(()=>W(o)===W(t).id?`btn-primary shadow-primary scale-105`:`btn-ghost border-primary/50 hover:border-primary`))??``}`),Wr(r,(W(t),G(()=>W(t).label)))}),Mr(`click`,n,()=>I(o,W(t).id)),q(e,n)}),O(t),q(e,t)};J(g,e=>{W(s),G(()=>W(s).length>0)&&e(_)});var v=z(g,2),y=R(v),b=e=>{q(e,el())};J(y,e=>{W(a)&&e(b)});var x=z(y,2),S=R(x),ee=e=>{var t=Ur();oi(hn(t),()=>W(c)),q(e,t)},C=e=>{var t=tl(),r=R(t);O(t),B(()=>Wr(r,`No highlight files found in src/content/${n()??``}/highlights-*.md`)),q(e,t)};J(S,e=>{W(s),G(()=>W(s).length>0)?e(ee):e(C,-1)}),O(x),O(v),O(m),O(p),B(()=>mi(x,1,`prose prose-lg max-w-none transition-opacity duration-300 ${W(a)?`opacity-20`:`opacity-100`}`)),q(e,p),j(),i()}async function il(e){try{return(await fetch(`https://formspree.io/f/YOUR_FORM_ID`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)})).ok}catch(e){return console.error(`Reservation error:`,e),!1}}var al=K(`<div class="alert alert-success mb-4"><svg class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span></div>`),ol=K(`<div class="alert alert-error mb-4"><span> </span></div>`),sl=K(`<option> </option>`),cl=K(`<span class="loading loading-spinner"></span>`),ll=K(`<section id="reservation" class="py-20 px-4"><div class="max-w-md mx-auto"><!> <!> <!> <form class="space-y-4"><input type="text" class="input input-bordered w-full" required=""/> <input type="email" class="input input-bordered w-full" required=""/> <input type="tel" class="input input-bordered w-full" required=""/> <input type="date" class="input input-bordered w-full" required=""/> <input type="time" class="input input-bordered w-full" required=""/> <select class="select select-bordered w-full"></select> <textarea class="textarea textarea-bordered w-full"></textarea> <button type="submit" class="btn btn-primary w-full"><!> </button></form></div></section>`);function ul(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=F(``),o=F(``),s=F(``),c=F(``),l=F(``),u=F(`2`),d=F(``),f=F(!1),p=F(!1),m=F(``);async function h(){I(f,!0),I(m,``),I(p,!1),await il({name:W(a),email:W(o),phone:W(s),date:W(c),time:W(l),guests:W(u),message:W(d),language:n()})?(I(p,!0),I(a,I(o,I(s,I(c,I(l,I(d,``)))))),I(u,`2`),setTimeout(()=>I(p,!1),5e3)):I(m,`Failed to submit reservation. Please try again.`),I(f,!1)}Ni();var g=ll(),_=R(g),v=R(_);{let e=Ht(()=>X(`reservation.title`,n()));Vc(v,{get title(){return W(e)}})}var y=z(v,2),b=e=>{var t=al(),r=z(R(t),2),i=R(r,!0);O(r),O(t),B(e=>Wr(i,e),[()=>X(`reservation.success`,n())]),q(e,t)};J(y,e=>{W(p)&&e(b)});var x=z(y,2),S=e=>{var t=ol(),n=R(t),r=R(n,!0);O(n),O(t),B(()=>Wr(r,W(m))),q(e,t)};J(x,e=>{W(m)&&e(S)});var ee=z(x,2),C=R(ee);Si(C);var te=z(C,2);Si(te);var ne=z(te,2);Si(ne);var re=z(ne,2);Si(re);var ie=z(re,2);Si(ie);var ae=z(ie,2);ei(ae,4,()=>Array.from({length:10},(e,t)=>t+1),Xr,(e,t)=>{var r=sl(),i=R(r);O(r);var a={};B(e=>{Wr(i,`${t??``} ${e??``}`),a!==(a=t)&&(r.value=(r.__value=t)??``)},[()=>X(`reservation.guests`,n())]),q(e,r)}),O(ae);var oe=z(ae,2);bn(oe);var se=z(oe,2),ce=R(se),le=e=>{q(e,cl())};J(ce,e=>{W(f)&&e(le)});var ue=z(ce);O(se),O(ee),O(_),O(g),B((e,t,n,r,i)=>{Ci(C,`placeholder`,e),Ci(te,`placeholder`,t),Ci(ne,`placeholder`,n),Ci(oe,`placeholder`,r),se.disabled=W(f),Wr(ue,` ${i??``}`)},[()=>X(`reservation.name`,n()),()=>X(`reservation.email`,n()),()=>X(`reservation.phone`,n()),()=>X(`reservation.message`,n()),()=>X(`reservation.submit`,n())]),Di(C,()=>W(a),e=>I(a,e)),Di(te,()=>W(o),e=>I(o,e)),Di(ne,()=>W(s),e=>I(s,e)),Di(re,()=>W(c),e=>I(c,e)),Di(ie,()=>W(l),e=>I(l,e)),_i(ae,()=>W(u),e=>I(u,e)),Di(oe,()=>W(d),e=>I(d,e)),Mr(`submit`,ee,Mi(h)),q(e,g),j(),i()}var dl=K(`<footer id="contact" class="bg-base-100 py-2 px-4"><div class="py-10 mt-12"><div class="footer footer-center max-w-6xl mx-auto flex flex-col gap-6"><ul class="menu menu-horizontal px-1 font-semibold !m-0"><!></ul> <div class="text-sm opacity-80"> </div></div></div></footer>`);function fl(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt();Ni();var a=dl(),o=R(a),s=R(o),c=R(s);Ui(R(c),{}),O(c);var l=z(c,2),u=R(l);O(l),O(s),O(o),O(a),B(e=>Wr(u,`© 2026 Dia's Delicacy. ${e??``}`),[()=>X(`footer.rights`,n())]),q(e,a),j(),i()}var pl=K(`<section id="contact" class="py-20 px-4"><div class="max-w-6xl mx-auto px-4 pb-12"><!> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12"><div class="flex flex-col gap-y-6 items-center"><div class="prose prose-lg max-w-none bg-base-200 p-8 rounded-2xl shadow-lg border-l-4 border-primary"><!> <!> <hr/> <div class="flex items-center gap-6 mt-4"> <div class="flex gap-4"><a href="https://www.facebook.com/dia.delicacy/" target="_blank" rel="noopener" class="text-primary hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a> <a href="https://www.instagram.com/dia.delicacy/" target="_blank" rel="noopener" class="text-primary hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="!fill-none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></div></div></div></div> <div class="flex flex-col h-full rounded-2xl shadow-2xl overflow-hidden w-full aspect-video border-4 border-base-100"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.8951221416446!2d6.134216599999999!3d46.2125413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65c2f3568c37%3A0x48faab26e433a4c0!2sDia%E2%80%99s%20Delicacy!5e0!3m2!1sde!2sde!4v1755112344883!5m2!1sde!2sde" width="100%" height="100%" class="block" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps location for Dia's Delicacy"></iframe></div></div></div></section>`);function ml(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=F(``);Ii(async()=>{I(a,await jc(n(),`contact`))}),Fn(()=>(n(),jc),()=>{n()&&jc(n(),`contact`).then(e=>I(a,e))}),In(),Ni();var o=pl(),s=R(o),c=R(s);{let e=Ht(()=>(wr(X),n(),G(()=>X(`nav.contact`,n()))));Vc(c,{get title(){return W(e)}})}var l=z(c,2),u=R(l),d=R(u),f=R(d);oi(f,()=>W(a));var p=z(f,2);Fc(p,{});var m=z(p,4),h=R(m);Ie(),O(m),O(d),O(u),Ie(2),O(l),O(s),O(o),B(e=>Wr(h,`${e??``}: `),[()=>(wr(X),n(),G(()=>X(`contact.follow`,n())))]),q(e,o),j(),i()}var hl=t({default:()=>gl}),gl=`/assets/food_baking_cake1-DsXplmpc.webp`,_l=t({default:()=>vl}),vl=`/assets/food_baking_cake2-RBk0Evzd.webp`,yl=t({default:()=>bl}),bl=`/assets/food_baking_pastry1-DRYz8jji.webp`,xl=t({default:()=>Sl}),Sl=`/assets/food_biryani-BYo6W1CV.webp`,Cl=t({default:()=>wl}),wl=`/assets/food_butter_chicken-DPoJOzpD.webp`,Tl=t({default:()=>El}),El=`/assets/food_catering1-CKWoQZrI.webp`,Dl=t({default:()=>Ol}),Ol=`/assets/food_catering3-CQQ0qqJ4.webp`,kl=t({default:()=>Al}),Al=`/assets/food_kheemapav-BdJ4x7mM.webp`,jl=t({default:()=>Ml}),Ml=`/assets/food_naanwich-3YYvtfYD.webp`,Nl=t({default:()=>Pl}),Pl=`/assets/food_rasmalai-jziXLQkh.webp`,Fl=t({default:()=>Il}),Il=`/assets/food_sabudana_vada-QXZZpi2z.webp`,Ll=t({default:()=>Rl}),Rl=`/assets/food_samosa-ZRmpHNlu.webp`,zl=t({default:()=>Bl}),Bl=`/assets/food_thali-DXAcNTqN.webp`,Vl=t({default:()=>Hl}),Hl=`/assets/food_thali2-BhVhG-kb.webp`,Ul=t({default:()=>Wl}),Wl=`/assets/food_vadapav-C4wjXWG4.webp`,Gl=K(`<div class="flex-none w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-center relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group bg-base-100"><img class="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"/> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"><p class="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"> </p></div></div>`),Kl=K(`<section id="gallery" class="py-20 px-4 overflow-hidden"><div class="max-w-7xl mx-auto relative"><!> <div class="relative group"><button class="btn btn-circle btn-sm sm:btn-md bg-white/95 hover:bg-white border-none shadow-2xl absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-all text-gray-900" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="fill: none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--primary-content)" d="M15 19l-7-7 7-7"></path></svg></button> <button class="btn btn-circle btn-sm sm:btn-md bg-white/95 hover:bg-white border-none shadow-2xl absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-all text-gray-900" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="fill: none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg></button> <div class="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory no-scrollbar py-12 px-2 svelte-1ocen1q"></div></div></div></section>`);function ql(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=Object.entries(Object.assign({"../assets/images/gallery/food_baking_cake1.webp":hl,"../assets/images/gallery/food_baking_cake2.webp":_l,"../assets/images/gallery/food_baking_pastry1.webp":yl,"../assets/images/gallery/food_biryani.webp":xl,"../assets/images/gallery/food_butter_chicken.webp":Cl,"../assets/images/gallery/food_catering1.webp":Tl,"../assets/images/gallery/food_catering3.webp":Dl,"../assets/images/gallery/food_kheemapav.webp":kl,"../assets/images/gallery/food_naanwich.webp":jl,"../assets/images/gallery/food_rasmalai.webp":Nl,"../assets/images/gallery/food_sabudana_vada.webp":Fl,"../assets/images/gallery/food_samosa.webp":Ll,"../assets/images/gallery/food_thali.webp":zl,"../assets/images/gallery/food_thali2.webp":Vl,"../assets/images/gallery/food_vadapav.webp":Ul})).map(([e,t])=>{let n=e.split(`/`).pop().split(`.`)[0].split(`_`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `);return{src:t.default,alt:n}}),o=F();function s(e){if(W(o)){let t=W(o).clientWidth*.8;W(o).scrollBy({left:e*t,behavior:`smooth`})}}Ni();var c=Kl(),l=R(c),u=R(l);{let e=Ht(()=>X(`nav.gallery`,n()));Vc(u,{get title(){return W(e)}})}var d=z(u,2),f=R(d),p=z(f,2),m=z(p,2);ei(m,5,()=>a,Xr,(e,t)=>{var n=Gl(),r=R(n),i=z(r,2),a=R(i),o=R(a,!0);O(a),O(i),O(n),B(()=>{Ci(r,`src`,W(t).src),Ci(r,`alt`,W(t).alt),Wr(o,W(t).alt)}),q(e,n)}),O(m),ji(m,e=>I(o,e),()=>W(o)),O(d),O(l),O(c),Mr(`click`,f,()=>s(-1)),Mr(`click`,p,()=>s(1)),q(e,c),j(),i()}var Jl=K(`<div class="bg-primary text-white py-3 px-4 relative z-[100] shadow-lg animate-in slide-in-from-top duration-500"><div class="max-w-6xl mx-auto flex items-center justify-between gap-4"><div class="flex-1 flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div class="prose prose-sm prose-invert max-w-none banner-content"></div></div> <button class="btn btn-circle btn-ghost btn-xs text-white hover:bg-white/20" aria-label="Close announcement"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div>`);function Yl(e,t){A(t,!1);let n=()=>ut(Y,`$currentLanguage`,r),[r,i]=dt(),a=F(``),o=F(!1),s=F(!1),c=Object.assign({"/src/content/en/announcement.md":Zi,"/src/content/fr/announcement.md":eo});function l(e){let t=e.match(/<!--\s*show:\s*(true|false)\s*-->/i);return!t||t[1].toLowerCase()!==`false`}function u(e){let t=c[`/src/content/${e}/announcement.md`];t?(I(o,l(t)),W(o)&&I(a,$(t.replace(/<!--\s*show:.*?\s*-->/gi,``)))):I(o,!1)}Ii(()=>{u(n())}),Fn(()=>n(),()=>{n()&&u(n())}),In(),Ni();var d=Ur(),f=hn(d),p=e=>{var t=Jl(),n=R(t),r=R(n),i=z(R(r),2);oi(i,()=>W(a),!0),O(i),O(r);var o=z(r,2);O(n),O(t),Mr(`click`,o,()=>I(s,!0)),q(e,t)};J(f,e=>{W(o)&&!W(s)&&e(p)}),q(e,d),j(),i()}var Xl=K(`<meta name="viewport" content="width=1920, initial-scale=1.0"/>`),Zl=K(`<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`),Ql=K(`<meta name="description" content="A modern Dia's Delicacy website"/> <!>`,1),$l=K(`<div class="standalone-view svelte-1n46o8q"><header class="p-6 flex items-center gap-4 bg-base-100 shadow-sm"><!></header> <!></div>`),eu=K(`<div class="standalone-view svelte-1n46o8q"><header class="p-6 flex items-center gap-4 bg-base-100 shadow-sm"><!></header> <!></div>`),tu=K(`<div class="standalone-view svelte-1n46o8q"><header class="p-6 flex items-center gap-4 bg-base-100 shadow-sm"><!></header> <!></div>`),nu=K(`<div class="standalone-view tv-view svelte-1n46o8q"><header class="p-6 flex items-center gap-4 bg-base-100 shadow-sm"><!></header> <!></div>`),ru=K(`<div><!></div>`),iu=K(`<!> <!> <!> <!>`,1),au=K(`<main><!></main>`);function ou(e,t){A(t,!1);let n=F(),r=F(),i=F(`/`),a=F(!1);Ii(()=>{let e=Rc(new Date),t=async()=>{e=Rc(await zc())},n=async()=>{Rc(await zc())!==e&&window.location.reload()},r=()=>{let e=new URL(window.location.href),t=e.searchParams.get(`lang`);t&&[`en`,`fr`].includes(t)&&Y.set(t);let n=e.searchParams.get(`theme`);n&&(document.documentElement.setAttribute(`data-theme`,n),localStorage.setItem(`theme`,n));let r=e.pathname.replace(/\/$/,``)||`/`;e.hash.startsWith(`#/`)&&(r=e.hash.replace(`#`,``)),I(i,r),I(a,e.searchParams.get(`rt`)===`p`||r===`/tv`),W(a)?document.body.style.overflow=`hidden`:document.body.style.overflow=``};r(),window.addEventListener(`popstate`,r),window.addEventListener(`hashchange`,r),t();let o=setInterval(n,900*1e3),s=()=>{document.visibilityState===`visible`&&n()},c=()=>{n()};return document.addEventListener(`visibilitychange`,s),window.addEventListener(`focus`,c),()=>{window.removeEventListener(`popstate`,r),window.removeEventListener(`hashchange`,r),clearInterval(o),document.removeEventListener(`visibilitychange`,s),window.removeEventListener(`focus`,c)}});let o=[{id:`hero`,component:Lc,show:!0},{id:`menu`,component:Jc,show:!0},{id:`about`,component:Zc,show:!0},{id:`highlights`,component:rl,show:!0},{id:`gallery`,component:ql,show:!0},{id:`contact`,component:ml,show:!0},{id:`reservation`,component:ul,show:!1}];Fn(()=>{},()=>{I(n,o.filter(e=>e.show))}),Fn(()=>W(i),()=>{I(r,[`/menu`,`/gallery`,`/highlights`,`/tv`].includes(W(i)))}),In(),Ni();var s=au();ci(`1n46o8q`,e=>{var t=Ql(),n=z(hn(t),2),r=e=>{q(e,Xl())},i=e=>{q(e,Zl())};J(n,e=>{W(a)?e(r):e(i,-1)}),Pn(()=>{cn.title=`Dia's Delicacy`}),q(e,t)});var c=R(s),l=e=>{var t=$l(),n=R(t);Vi(R(n),{}),O(n),Jc(z(n,2),{}),O(t),q(e,t)},u=e=>{var t=eu(),n=R(t);Vi(R(n),{}),O(n),ql(z(n,2),{}),O(t),q(e,t)},d=e=>{var t=tu(),n=R(t);Vi(R(n),{}),O(n),rl(z(n,2),{}),O(t),q(e,t)},f=e=>{var t=nu(),n=R(t);Vi(R(n),{}),O(n),Jc(z(n,2),{}),O(t),q(e,t)},p=e=>{var t=iu(),r=hn(t);Yl(r,{});var i=z(r,2);Yi(i,{});var a=z(i,2);ei(a,1,()=>W(n),Xr,(e,t,n)=>{var r=ru();mi(r,1,di(n%2==0?`bg-base-200 jqSec`:`bg-base-100 jqSec`)),si(R(r),()=>W(t).component,(e,t)=>{t(e,{})}),O(r),q(e,r)}),fl(z(a,2),{}),q(e,t)};J(c,e=>{W(i)===`/menu`?e(l):W(i)===`/gallery`?e(u,1):W(i)===`/highlights`?e(d,2):W(i)===`/tv`?e(f,3):e(p,-1)}),O(s),B(()=>mi(s,1,di(W(a)?`rotate-portrait`:``))),q(e,s),j()}Gr(ou,{target:document.getElementById(`app`)});