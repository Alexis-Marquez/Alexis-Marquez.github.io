(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const St=!1;var Je=Array.isArray,we=Array.from,Tt=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,At=Object.getOwnPropertyDescriptors,Ct=Object.getPrototypeOf;function It(e){return e()}function pe(e){for(var t=0;t<e.length;t++)e[t]()}const N=2,ze=4,K=8,be=16,C=32,se=64,B=128,re=256,w=512,L=1024,Q=2048,D=4096,X=8192,Mt=16384,Ye=32768,Ot=1<<18,$e=1<<19,je=Symbol("$state");function Ge(e){return e===this.v}function Ke(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Dt(e){return!Ke(e,this.v)}function Nt(e){throw new Error("effect_in_teardown")}function Pt(){throw new Error("effect_in_unowned_derived")}function jt(e){throw new Error("effect_orphan")}function Ft(){throw new Error("effect_update_depth_exceeded")}function Lt(){throw new Error("state_unsafe_local_read")}function Rt(){throw new Error("state_unsafe_mutation")}function le(e){return{f:0,v:e,reactions:null,equals:Ge,version:0}}function Qe(e,t=!1){var r;const n=le(e);return t||(n.equals=Dt),g!==null&&g.l!==null&&((r=g.l).s??(r.s=[])).push(n),n}function qt(e,t=!1){return Bt(Qe(e,t))}function Bt(e){return h!==null&&h.f&N&&(T===null?sn([e]):T.push(e)),e}function Ht(e,t){return h!==null&&Ie()&&h.f&(N|be)&&(T===null||!T.includes(e))&&Rt(),Xe(e,t)}function Xe(e,t){return e.equals(t)||(e.v=t,e.version=mt(),Ze(e,L),Ie()&&_!==null&&_.f&w&&!(_.f&C)&&(k!==null&&k.includes(e)?(I(_,L),ae(_)):F===null?on([e]):F.push(e))),t}function Ze(e,t){var n=e.reactions;if(n!==null)for(var r=Ie(),i=n.length,l=0;l<i;l++){var s=n[l],u=s.f;u&L||!r&&s===_||(I(s,t),u&(w|B)&&(u&N?Ze(s,Q):ae(s)))}}const Vt=1,Ut=2,Wt=16,Jt=2;let zt=!1;var Fe,et,tt;function Yt(){if(Fe===void 0){Fe=window;var e=Element.prototype,t=Node.prototype;et=Pe(t,"firstChild").get,tt=Pe(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function nt(e=""){return document.createTextNode(e)}function rt(e){return et.call(e)}function Ee(e){return tt.call(e)}function m(e,t){return rt(e)}function x(e,t=1,n=!1){let r=e;for(;t--;)r=Ee(r);return r}function $t(e){e.textContent=""}function Gt(e){var t=N|L;_===null?t|=B:_.f|=$e;const n={children:null,ctx:g,deps:null,equals:Ge,f:t,fn:e,reactions:null,v:null,version:0,parent:_};if(h!==null&&h.f&N){var r=h;(r.children??(r.children=[])).push(n)}return n}function lt(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&N?xe(r):H(r)}}}function it(e){var t,n=_;q(e.parent);try{lt(e),t=yt(e)}finally{q(n)}return t}function st(e){var t=it(e),n=(U||e.f&B)&&e.deps!==null?Q:w;I(e,n),e.equals(t)||(e.v=t,e.version=mt())}function xe(e){lt(e),G(e,0),I(e,X),e.v=e.children=e.deps=e.ctx=e.reactions=null}function ot(e){_===null&&h===null&&jt(),h!==null&&h.f&B&&Pt(),Ce&&Nt()}function Kt(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function z(e,t,n,r=!0){var i=(e&se)!==0,l=_,s={ctx:g,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|L,first:null,fn:t,last:null,next:null,parent:i?null:l,prev:null,teardown:null,transitions:null,version:0};if(n){var u=W;try{Le(!0),oe(s),s.f|=Mt}catch(c){throw H(s),c}finally{Le(u)}}else t!==null&&ae(s);var f=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&$e)===0;if(!f&&!i&&r&&(l!==null&&Kt(s,l),h!==null&&h.f&N)){var o=h;(o.children??(o.children=[])).push(s)}return s}function Qt(e){const t=z(K,null,!1);return I(t,w),t.teardown=e,t}function he(e){ot();var t=_!==null&&(_.f&C)!==0&&g!==null&&!g.m;if(t){var n=g;(n.e??(n.e=[])).push({fn:e,effect:_,reaction:h})}else{var r=Se(e);return r}}function Xt(e){return ot(),at(e)}function Zt(e){const t=z(se,e,!0);return()=>{H(t)}}function Se(e){return z(ze,e,!1)}function at(e){return z(K,e,!0)}function te(e){return ut(e)}function ut(e,t=0){return z(K|be|t,e,!0)}function Te(e,t=!0){return z(K|C,e,!0,t)}function ct(e){var t=e.teardown;if(t!==null){const n=Ce,r=h;Re(!0),R(null);try{t.call(null)}finally{Re(n),R(r)}}}function ft(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)xe(t[n])}}function vt(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;H(n,t),n=r}}function en(e){for(var t=e.first;t!==null;){var n=t.next;t.f&C||H(t),t=n}}function H(e,t=!0){var n=!1;if((t||e.f&Ot)&&e.nodes_start!==null){for(var r=e.nodes_start,i=e.nodes_end;r!==null;){var l=r===i?null:Ee(r);r.remove(),r=l}n=!0}ft(e),vt(e,t&&!n),G(e,0),I(e,X);var s=e.transitions;if(s!==null)for(const f of s)f.stop();ct(e);var u=e.parent;u!==null&&u.first!==null&&dt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function dt(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function tn(e,t){var n=[];Ae(e,n,!0),_t(n,()=>{H(e),t&&t()})}function _t(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function Ae(e,t,n){if(!(e.f&D)){if(e.f^=D,e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&t.push(s);for(var r=e.first;r!==null;){var i=r.next,l=(r.f&Ye)!==0||(r.f&C)!==0;Ae(r,t,l?n:!1),r=i}}}function pt(e){ht(e,!0)}function ht(e,t){if(e.f&D){e.f^=D,Z(e)&&oe(e);for(var n=e.first;n!==null;){var r=n.next,i=(n.f&Ye)!==0||(n.f&C)!==0;ht(n,i?t:!1),n=r}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&l.in()}}let ge=!1,me=[];function nn(){ge=!1;const e=me.slice();me=[],pe(e)}function rn(e){ge||(ge=!0,queueMicrotask(nn)),me.push(e)}function ln(e){throw new Error("lifecycle_outside_component")}let ie=!1,W=!1,Ce=!1;function Le(e){W=e}function Re(e){Ce=e}let ye=[],$=0;let h=null;function R(e){h=e}let _=null;function q(e){_=e}let T=null;function sn(e){T=e}let k=null,E=0,F=null;function on(e){F=e}let gt=0,U=!1,g=null;function mt(){return++gt}function Ie(){return g!==null&&g.l===null}function Z(e){var s,u;var t=e.f;if(t&L)return!0;if(t&Q){var n=e.deps,r=(t&B)!==0;if(n!==null){var i;if(t&re){for(i=0;i<n.length;i++)((s=n[i]).reactions??(s.reactions=[])).push(e);e.f^=re}for(i=0;i<n.length;i++){var l=n[i];if(Z(l)&&st(l),r&&_!==null&&!U&&!((u=l==null?void 0:l.reactions)!=null&&u.includes(e))&&(l.reactions??(l.reactions=[])).push(e),l.version>e.version)return!0}}r||I(e,w)}return!1}function an(e,t,n){throw e}function yt(e){var v;var t=k,n=E,r=F,i=h,l=U,s=T,u=g,f=e.f;k=null,E=0,F=null,h=f&(C|se)?null:e,U=!W&&(f&B)!==0,T=null,g=e.ctx;try{var o=(0,e.fn)(),c=e.deps;if(k!==null){var a;if(G(e,E),c!==null&&E>0)for(c.length=E+k.length,a=0;a<k.length;a++)c[E+a]=k[a];else e.deps=c=k;if(!U)for(a=E;a<c.length;a++)((v=c[a]).reactions??(v.reactions=[])).push(e)}else c!==null&&E<c.length&&(G(e,E),c.length=E);return o}finally{k=t,E=n,F=r,h=i,U=l,T=s,g=u}}function un(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&t.f&N&&(k===null||!k.includes(t))&&(I(t,Q),t.f&(B|re)||(t.f^=re),G(t,0))}function G(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)un(e,n[r])}function oe(e){var t=e.f;if(!(t&X)){I(e,w);var n=_;_=e;try{ft(e),t&be?en(e):vt(e),ct(e);var r=yt(e);e.teardown=typeof r=="function"?r:null,e.version=gt}catch(i){an(i)}finally{_=n}}}function cn(){$>1e3&&($=0,Ft()),$++}function fn(e){var t=e.length;if(t!==0){cn();var n=W;W=!0;try{for(var r=0;r<t;r++){var i=e[r];i.f&w||(i.f^=w);var l=[];kt(i,l),vn(l)}}finally{W=n}}}function vn(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];!(r.f&(X|D))&&Z(r)&&(oe(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?dt(r):r.fn=null))}}function dn(){if(ie=!1,$>1001)return;const e=ye;ye=[],fn(e),ie||($=0)}function ae(e){ie||(ie=!0,queueMicrotask(dn));for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(se|C)){if(!(n&w))return;t.f^=w}}ye.push(t)}function kt(e,t){var n=e.first,r=[];e:for(;n!==null;){var i=n.f,l=(i&C)!==0,s=l&&(i&w)!==0;if(!s&&!(i&D))if(i&K){l?n.f^=w:Z(n)&&oe(n);var u=n.first;if(u!==null){n=u;continue}}else i&ze&&r.push(n);var f=n.next;if(f===null){let a=n.parent;for(;a!==null;){if(e===a)break e;var o=a.next;if(o!==null){n=o;continue e}a=a.parent}}n=f}for(var c=0;c<r.length;c++)u=r[c],t.push(u),kt(u,t)}function J(e){var u;var t=e.f,n=(t&N)!==0;if(n&&t&X){var r=it(e);return xe(e),r}if(h!==null){T!==null&&T.includes(e)&&Lt();var i=h.deps;k===null&&i!==null&&i[E]===e?E++:k===null?k=[e]:k.push(e),F!==null&&_!==null&&_.f&w&&!(_.f&C)&&F.includes(e)&&(I(_,L),ae(_))}else if(n&&e.deps===null){var l=e,s=l.parent;s!==null&&!((u=s.deriveds)!=null&&u.includes(l))&&(s.deriveds??(s.deriveds=[])).push(l)}return n&&(l=e,Z(l)&&st(l)),e.v}function Me(e){const t=h;try{return h=null,e()}finally{h=t}}const _n=~(L|Q|w);function I(e,t){e.f=e.f&_n|t}function ue(e,t=!1,n){g={p:g,c:null,e:null,m:!1,s:e,x:null,l:null},t||(g.l={s:null,u:null,r1:[],r2:le(!1)})}function ce(e){const t=g;if(t!==null){const s=t.e;if(s!==null){var n=_,r=h;t.e=null;try{for(var i=0;i<s.length;i++){var l=s[i];q(l.effect),R(l.reaction),Se(l.fn)}}finally{q(n),R(r)}}g=t.p,t.m=!0}return{}}function wt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(je in e)ke(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&je in n&&ke(n)}}}function ke(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ke(e[r],t)}catch{}const n=Ct(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=At(n);for(let i in r){const l=r[i].get;if(l)try{l.call(e)}catch{}}}}}const pn=new Set,qe=new Set;function hn(e,t,n,r){function i(l){if(r.capture||Y.call(t,l),!l.cancelBubble){var s=h,u=_;R(null),q(null);try{return n.call(this,l)}finally{R(s),q(u)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?rn(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function gn(e,t,n,r,i){var l={capture:r,passive:i},s=hn(e,t,n,l);(t===document.body||t===window||t===document)&&Qt(()=>{t.removeEventListener(e,s,l)})}function Y(e){var ee;var t=this,n=t.ownerDocument,r=e.type,i=((ee=e.composedPath)==null?void 0:ee.call(e))||[],l=i[0]||e.target,s=0,u=e.__root;if(u){var f=i.indexOf(u);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var o=i.indexOf(t);if(o===-1)return;f<=o&&(s=f)}if(l=i[s]||e.target,l!==t){Tt(e,"currentTarget",{configurable:!0,get(){return l||n}});var c=h,a=_;R(null),q(null);try{for(var v,d=[];l!==null;){var p=l.assignedSlot||l.parentNode||l.host||null;try{var b=l["__"+r];if(b!==void 0&&!l.disabled)if(Je(b)){var[y,...S]=b;y.apply(l,[e,...S])}else b.call(l,e)}catch(O){v?d.push(O):v=O}if(e.cancelBubble||p===t||p===null)break;l=p}if(v){for(let O of d)queueMicrotask(()=>{throw O});throw v}}finally{e.__root=t,delete e.currentTarget,R(c),q(a)}}}function mn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function yn(e,t){var n=_;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function M(e,t){var n=(t&Jt)!==0,r,i=!e.startsWith("<!>");return()=>{r===void 0&&(r=mn(i?e:"<!>"+e),r=rt(r));var l=n?document.importNode(r,!0):r.cloneNode(!0);return yn(l,l),l}}function A(e,t){e!==null&&e.before(t)}const kn=["touchstart","touchmove"];function wn(e){return kn.includes(e)}function ne(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function bn(e,t){return En(e,t)}const V=new Map;function En(e,{target:t,anchor:n,props:r={},events:i,context:l,intro:s=!0}){Yt();var u=new Set,f=a=>{for(var v=0;v<a.length;v++){var d=a[v];if(!u.has(d)){u.add(d);var p=wn(d);t.addEventListener(d,Y,{passive:p});var b=V.get(d);b===void 0?(document.addEventListener(d,Y,{passive:p}),V.set(d,1)):V.set(d,b+1)}}};f(we(pn)),qe.add(f);var o=void 0,c=Zt(()=>{var a=n??t.appendChild(nt());return Te(()=>{if(l){ue({});var v=g;v.c=l}i&&(r.$$events=i),o=e(a,r)||{},l&&ce()}),()=>{var p;for(var v of u){t.removeEventListener(v,Y);var d=V.get(v);--d===0?(document.removeEventListener(v,Y),V.delete(v)):V.set(v,d)}qe.delete(f),Be.delete(o),a!==n&&((p=a.parentNode)==null||p.removeChild(a))}});return Be.set(o,c),o}let Be=new WeakMap,de=null;function He(e,t){return t}function xn(e,t,n,r){for(var i=[],l=t.length,s=0;s<l;s++)Ae(t[s].e,i,!0);var u=l>0&&i.length===0&&n!==null;if(u){var f=n.parentNode;$t(f),f.append(n),r.clear(),j(e,t[0].prev,t[l-1].next)}_t(i,()=>{for(var o=0;o<l;o++){var c=t[o];u||(r.delete(c.k),j(e,c.prev,c.next)),H(c.e,!u)}})}function Ve(e,t,n,r,i,l=null){var s=e,u={flags:t,items:new Map,first:null};{var f=e;s=f.appendChild(nt())}var o=null,c=!1;ut(()=>{var a=n(),v=Je(a)?a:a==null?[]:we(a),d=v.length;c&&d===0||(c=d===0,Sn(v,u,s,i,t,r),l!==null&&(d===0?o?pt(o):o=Te(()=>l(s)):o!==null&&tn(o,()=>{o=null})),n())})}function Sn(e,t,n,r,i,l){var s=e.length,u=t.items,f=t.first,o=f,c,a=null,v=[],d=[],p,b,y,S;for(S=0;S<s;S+=1){if(p=e[S],b=l(p,S),y=u.get(b),y===void 0){var ee=o?o.e.nodes_start:n;a=An(ee,t,a,a===null?t.first:a.next,p,b,S,r,i),u.set(b,a),v=[],d=[],o=a.next;continue}if(Tn(y,p,S),y.e.f&D&&pt(y.e),y!==o){if(c!==void 0&&c.has(y)){if(v.length<d.length){var O=d[0],P;a=O.prev;var Ne=v[0],fe=v[v.length-1];for(P=0;P<v.length;P+=1)Ue(v[P],O,n);for(P=0;P<d.length;P+=1)c.delete(d[P]);j(t,Ne.prev,fe.next),j(t,a,Ne),j(t,fe,O),o=O,a=fe,S-=1,v=[],d=[]}else c.delete(y),Ue(y,o,n),j(t,y.prev,y.next),j(t,y,a===null?t.first:a.next),j(t,a,y),a=y;continue}for(v=[],d=[];o!==null&&o.k!==b;)o.e.f&D||(c??(c=new Set)).add(o),d.push(o),o=o.next;if(o===null)continue;y=o}v.push(y),a=y,o=y.next}if(o!==null||c!==void 0){for(var ve=c===void 0?[]:we(c);o!==null;)o.e.f&D||ve.push(o),o=o.next;var Et=ve.length;if(Et>0){var xt=s===0?n:null;xn(t,ve,xt,u)}}_.first=t.first&&t.first.e,_.last=a&&a.e}function Tn(e,t,n,r){Xe(e.v,t),e.i=n}function An(e,t,n,r,i,l,s,u,f){var o=de;try{var c=(f&Vt)!==0,a=(f&Wt)===0,v=c?a?Qe(i):le(i):i,d=f&Ut?le(s):s,p={i:d,v,k:l,a:null,e:null,prev:n,next:r};return de=p,p.e=Te(()=>u(e,v,d),zt),p.e.prev=n&&n.e,p.e.next=r&&r.e,n===null?t.first=p:(n.next=p,n.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{de=o}}function Ue(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,l=e.e.nodes_start;l!==r;){var s=Ee(l);i.before(l),l=s}}function j(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Oe(e,t,n){Se(()=>{var r=Me(()=>t(e,n==null?void 0:n())||{});if(n&&(r!=null&&r.update)){var i=!1,l={};at(()=>{var s=n();wt(s),i&&Ke(l,s)&&(l=s,r.update(s))}),i=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function bt(e=!1){const t=g,n=t.l.u;if(!n)return;let r=()=>wt(t.s);if(e){let i=0,l={};const s=Gt(()=>{let u=!1;const f=t.s;for(const o in f)f[o]!==l[o]&&(l[o]=f[o],u=!0);return u&&i++,i});r=()=>J(s)}n.b.length&&Xt(()=>{We(t,r),pe(n.b)}),he(()=>{const i=Me(()=>n.m.map(It));return()=>{for(const l of i)typeof l=="function"&&l()}}),n.a.length&&he(()=>{We(t,r),pe(n.a)})}function We(e,t){if(e.l.s)for(const n of e.l.s)J(n);t()}function Cn(e){g===null&&ln(),g.l!==null?In(g).m.push(e):he(()=>{const t=Me(e);if(typeof t=="function")return t})}function In(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Mn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Mn);var On=M(`<div class="skills-section svelte-d8vnkg"><h1 class="skills-title svelte-d8vnkg">My skills</h1> <div class="skills-lists svelte-d8vnkg"><div class="skills-listing svelte-d8vnkg"><h2 class="skills-subtitle svelte-d8vnkg">I'm proficient in:</h2> <ul class="skills-list svelte-d8vnkg"><li class="skills-list-item svelte-d8vnkg">Java</li> <li class="skills-list-item svelte-d8vnkg">JavaScript</li> <li class="skills-list-item svelte-d8vnkg">Python</li> <li class="skills-list-item svelte-d8vnkg">C</li> <li class="skills-list-item svelte-d8vnkg">MySQL</li></ul></div> <div class="skills-listing svelte-d8vnkg"><h2 class="skills-subtitle svelte-d8vnkg">I've built stuff using:</h2> <ul class="skills-list svelte-d8vnkg"><li class="skills-list-item svelte-d8vnkg">Svelte</li> <li class="skills-list-item svelte-d8vnkg">React</li> <li class="skills-list-item svelte-d8vnkg">Node.js</li> <li class="skills-list-item svelte-d8vnkg">Express</li> <li class="skills-list-item svelte-d8vnkg">JUnit</li></ul></div></div></div>`);function Dn(e){var t=On();A(e,t)}function De(e,t={scrollFactor:1,scrollOffset:0}){let n=0;const r=()=>{const i=window.scrollY,l=window.innerHeight;n=Math.max(0,1-(i-t.scrollOffset)/(l*t.scrollFactor)),e.style.opacity=n};return window.addEventListener("scroll",r),{destroy(){window.removeEventListener("scroll",r)}}}var Nn=M('<div id="about-me-section" class="svelte-djieca"><hr class="sep-line svelte-djieca"> <div class="about-me-section-header svelte-djieca"><h1 class="about-me-title svelte-djieca">About Me</h1></div> <div class="about-me-section-body"><div class="about-me-section-text svelte-djieca">I’m a computer science student at the University of Texas at El Paso graduating in May 2025.<br> <br> I love tackling challenges, exploring new technologies, and turning ideas into reality through code. With every project, I strive to grow, improve, and make a difference. Let’s build something amazing together!</div> <!></div></div>');function Pn(e){var t=Nn(),n=x(m(t),4),r=x(m(n),2);Dn(r),Oe(t,(i,l)=>De(i,l),()=>({scrollFactor:.7,scrollOffset:window.innerHeight})),A(e,t)}var jn=M('<nav><div class="navbar svelte-fddyb7"><ul class="navbar-nav svelte-fddyb7"><li class="nav-item svelte-fddyb7"><a class="nav-link active" href="#about-me-section"><span class="nav-text svelte-fddyb7">About Me</span></a></li> <li class="nav-item svelte-fddyb7"><a class="nav-link active" href="#experience_section"><span class="nav-text svelte-fddyb7">Experience</span></a></li> <li class="nav-item  svelte-fddyb7"><a class="nav-link active" href="#projects_section"><span class="nav-text svelte-fddyb7">Projects</span></a></li></ul></div></nav>');function Fn(e,t){ue(t,!1);function n(f,o){f.preventDefault(),document.querySelector(o).scrollIntoView({behavior:"smooth"})}bt();var r=jn(),i=m(r),l=m(i),s=m(l),u=m(s);gn("click",u,f=>n(f,"#about-me-section")),A(e,r),ce()}var Ln=M('<li class="tech-text svelte-170ahkx"> </li>'),Rn=M('<li class="description-text svelte-170ahkx"> </li>'),qn=M('<div id="project_section"><h1 class="project-title svelte-170ahkx"> </h1> <hr class="sep-line svelte-170ahkx"> <ul class="project-tech svelte-170ahkx"></ul> <ul class="project-description svelte-170ahkx"></ul></div>');function _e(e,t){ue(t,!0);let n=t.description,r=t.tech;var i=qn(),l=m(i),s=m(l),u=x(l,4);Ve(u,21,()=>r,He,(o,c)=>{var a=Ln(),v=m(a);te(()=>ne(v,J(c))),A(o,a)});var f=x(u,2);Ve(f,21,()=>n,He,(o,c)=>{var a=Rn(),v=m(a);te(()=>ne(v,J(c))),A(o,a)}),te(()=>ne(s,t.title)),A(e,i),ce()}var Bn=M('<div class="contact-info svelte-1c2ym9f"><h3 class="svelte-1c2ym9f">Contact me at:</h3> <div class="image-links svelte-1c2ym9f"><a href="https://github.com/Alexis-Marquez" class="svelte-1c2ym9f"><img src="/github-mark-white.png" alt="Github Mark White logo" class="svelte-1c2ym9f"></a> <a href="https://linkedin.com/in/alexis-marquez2" class="svelte-1c2ym9f"><img src="/In-White-72@2x.png" alt="Linkedin logo white" class="svelte-1c2ym9f"></a></div></div>');function Hn(e){var t=Bn();A(e,t)}var Vn=M('<div class="intro-main svelte-455ncb"><div class="text-part svelte-455ncb"><div class="intro-text svelte-455ncb"><span id="container" class="svelte-455ncb"> </span></div></div> <div class="image-part svelte-455ncb"><img src="/logo.png" alt="Alexis Marquez logo, an icon of a mountain forming an A and an M" class="svelte-455ncb"> <!></div></div>');function Un(e,t){ue(t,!1);const n=`Hi! 
 My name is 
 Alexis Marquez,
 a Computer Science Student and Aspiring Developer`;let r=qt(""),i=0;function l(){i<n.length&&(Ht(r,J(r)+n[i]),i+=1,setTimeout(l,100))}Cn(()=>{l()}),bt();var s=Vn(),u=m(s),f=m(u),o=m(f),c=m(o),a=x(u,2),v=x(m(a),2);Hn(v),te(()=>ne(c,J(r))),Oe(s,(d,p)=>De(d,p),()=>({scrollFactor:.7,scrollOffset:0})),A(e,s),ce()}var Wn=M('<div id="projects_section" class="svelte-4mgklt"><div class="projects-section-header svelte-4mgklt"><h1 class="projects-title svelte-4mgklt">Projects</h1></div> <div class="projects-section-content"><!></div> <div class="projects-section-content"><!></div> <div class="projects-section-content"><!></div></div>');function Jn(e){var t=Wn(),n=x(m(t),2),r=m(n);_e(r,{title:"Budget tracker app - Fullstack web development",description:["Developed a full-stack web application using Springboot serving a REST API with React as the frontend","Built and optimized CRUD functionality, creating an intuitive interface for seamless budgeting operations. ","Visualized budgeting data with React Vis, improving user experience by providing clear financial insights.","Created a sleek and responsive UI with vanilla CSS, ensuring cross-platform compatibility and improved user interaction."],tech:["Java","Springboot","React","MongoDB"]});var i=x(n,2),l=m(i);_e(l,{title:"Omok Multiplayer Game - Desktop app development",description:["Developed a complete Omok game including single player and multiplayer game modes","Developed an AI opponent with adaptive strategies to enhance gameplay difficulty, offering a competitive experience for users.","Built local and wireless multiplayer functionality with Java TCP/IP sockets, enabling seamless cross-network gameplay.","Designed an engaging GUI using Java’s swing library."],tech:["Java","Swing","TCP/IP Sockets","Git"]});var s=x(i,2),u=m(s);_e(u,{title:"Places Review Website - Full Stack Web development",description:["Created a scalable full-stack web application with Node.js backend and a responsive vanilla HTML/CSS frontend, providing users with an intuitive review platform.","Delivered complete CRUD functionality, enabling users to post reviews, upload images, and manage business listings efficiently.","Implemented a modern UI and integrated MapBox API to enhance the user experience by allowing interactive business location mapping."],tech:["JavaScript","Node","Express","MongoDB"]}),Oe(t,(f,o)=>De(f,o),()=>({scrollFactor:.7,scrollOffset:window.innerHeight*2.5})),A(e,t)}var zn=M('<main><div class="container"><!> <!> <!> <!></div></main>');function Yn(e){var t=zn(),n=m(t),r=m(n);Fn(r,{});var i=x(r,2);Un(i,{});var l=x(i,2);Pn(l);var s=x(l,2);Jn(s),A(e,t)}bn(Yn,{target:document.getElementById("app")});