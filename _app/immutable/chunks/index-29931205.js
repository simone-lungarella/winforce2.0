function k(){}const K=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function et(){return Object.create(null)}function A(t){t.forEach(rt)}function O(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function xt(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Wt(t,e,n,r){if(t){const i=st(t,e,n,r);return t[0](i)}}function st(t,e,n,r){return t[1]&&r?gt(n.ctx.slice(),t[1](r(e))):n.ctx}function Gt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let c=0;c<s;c+=1)o[c]=e.dirty[c]|i[c];return o}return e.dirty|i}return e.dirty}function It(t,e,n,r,i,o){if(i){const s=st(e,n,r,o);t.p(s,i)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const ct=typeof window<"u";let Q=ct?()=>window.performance.now():()=>Date.now(),U=ct?t=>requestAnimationFrame(t):k;const S=new Set;function ot(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&U(ot)}function V(t){let e;return S.size===0&&U(ot),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let G=!1;function wt(){G=!0}function $t(){G=!1}function vt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:vt(1,i,h=>e[n[h]].claim_order,u))-1;r[l]=n[f]+1;const _=f+1;n[_]=l,i=Math.max(_,i)}const o=[],s=[];let c=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<o.length&&s[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[l],f)}}function kt(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=at("style");return At(lt(t),e),e.sheet}function At(t,e){return kt(t.head||t,e),e.sheet}function St(t,e){if(G){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){G&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function Ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function Ut(){return X(" ")}function Vt(){return X("")}function Xt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Yt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function Dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,r,i=!1){Dt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function _t(t,e,n,r){return ft(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function te(t,e,n){return _t(t,e,n,at)}function ee(t,e,n){return _t(t,e,n,Ct)}function jt(t,e){return ft(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>X(e),!0)}function ne(t){return jt(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e){t.value=e??""}function se(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function dt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function ce(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function oe(t,e){return new t(e)}const L=new Map;let q=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:Nt(e),rules:{}};return L.set(t,n),n}function F(t,e,n,r,i,o,s,c=0){const l=16.666/r;let u=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*o(m);u+=m*100+`%{${s(g,1-g)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Tt(f)}_${c}`,h=lt(t),{stylesheet:a,rules:d}=L.get(h)||Pt(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${r}ms linear ${i}ms 1 both`,q+=1,_}function W(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),q-=i,q||Ot())}function Ot(){U(()=>{q||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ut(e)}),L.clear())})}let P;function T(t){P=t}function Y(){if(!P)throw new Error("Function called outside component initialization");return P}function le(t){Y().$$.on_mount.push(t)}function ue(t){Y().$$.after_update.push(t)}function ae(){const t=Y();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=dt(e,n,{cancelable:r});return i.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const j=[],nt=[],B=[],it=[],ht=Promise.resolve();let J=!1;function mt(){J||(J=!0,ht.then(pt))}function fe(){return mt(),ht}function C(t){B.push(t)}const I=new Set;let z=0;function pt(){const t=P;do{for(;z<j.length;){const e=j[z];z++,T(e),Rt(e.$$)}for(T(null),j.length=0,z=0;nt.length;)nt.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];I.has(n)||(I.add(n),n())}B.length=0}while(j.length);for(;it.length;)it.pop()();J=!1,I.clear(),T(t)}function Rt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}let D;function Z(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function N(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const H=new Set;let v;function _e(){v={r:0,c:[],p:v}}function de(){v.r||A(v.c),v=v.p}function yt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function zt(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),v.c.push(()=>{H.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const tt={duration:0};function he(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,c,l=0;function u(){s&&W(t,s)}function f(){const{delay:h=0,duration:a=300,easing:d=K,tick:p=k,css:m}=i||tt;m&&(s=F(t,0,1,a,h,d,m,l++)),p(0,1);const g=Q()+h,E=g+a;c&&c.abort(),o=!0,C(()=>N(t,!0,"start")),c=V(x=>{if(o){if(x>=E)return p(1,0),N(t,!0,"end"),u(),o=!1;if(x>=g){const b=d((x-g)/a);p(b,1-b)}}return o})}let _=!1;return{start(){_||(_=!0,W(t),O(i)?(i=i(r),Z().then(f)):f())},invalidate(){_=!1},end(){o&&(u(),o=!1)}}}function me(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const c=v;c.r+=1;function l(){const{delay:u=0,duration:f=300,easing:_=K,tick:h=k,css:a}=i||tt;a&&(s=F(t,1,0,f,u,_,a));const d=Q()+u,p=d+f;C(()=>N(t,!1,"start")),V(m=>{if(o){if(m>=p)return h(0,1),N(t,!1,"end"),--c.r||A(c.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return o})}return O(i)?Z().then(()=>{i=i(r),l()}):l(),{end(u){u&&i.tick&&i.tick(1,0),o&&(s&&W(t,s),o=!1)}}}function pe(t,e,n,r){const i={direction:"both"};let o=e(t,n,i),s=r?0:1,c=null,l=null,u=null;function f(){u&&W(t,u)}function _(a,d){const p=a.b-s;return d*=Math.abs(p),{a:s,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:m=K,tick:g=k,css:E}=o||tt,x={start:Q()+d,b:a};a||(x.group=v,v.r+=1),c||l?l=x:(E&&(f(),u=F(t,s,a,p,d,m,E)),a&&g(0,1),c=_(x,p),C(()=>N(t,a,"start")),V(b=>{if(l&&b>l.start&&(c=_(l,p),l=null,N(t,c.b,"start"),E&&(f(),u=F(t,s,c.b,c.duration,0,m,o.css))),c){if(b>=c.end)g(s=c.b,1-s),N(t,c.b,"end"),l||(c.b?f():--c.group.r||A(c.group.c)),c=null;else if(b>=c.start){const M=b-c.start;s=c.a+c.d*m(M/c.duration),g(s,1-s)}}return!!(c||l)}))}return{run(a){O(o)?Z().then(()=>{o=o(i),h(a)}):h(a)},end(){f(),c=l=null}}}function ye(t,e){t.d(1),e.delete(t.key)}function ge(t,e){zt(t,1,1,()=>{e.delete(t.key)})}function xe(t,e,n,r,i,o,s,c,l,u,f,_){let h=t.length,a=o.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,E=new Map;for(d=a;d--;){const y=_(i,o,d),w=n(y);let $=s.get(w);$?r&&$.p(y,e):($=u(w,y),$.c()),g.set(w,m[d]=$),w in p&&E.set(w,Math.abs(d-p[w]))}const x=new Set,b=new Set;function M(y){yt(y,1),y.m(c,f),s.set(y.key,y),f=y.first,a--}for(;h&&a;){const y=m[a-1],w=t[h-1],$=y.key,R=w.key;y===w?(f=y.first,h--,a--):g.has(R)?!s.has($)||x.has($)?M(y):b.has(R)?h--:E.get($)>E.get(R)?(b.add($),M(y)):(x.add(R),h--):(l(w,s),h--)}for(;h--;){const y=t[h];g.has(y.key)||l(y,s)}for(;a;)M(m[a-1]);return m}function be(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Bt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||C(()=>{const s=t.$$.on_mount.map(rt).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),o.forEach(C)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(j.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,r,i,o,s,c=[-1]){const l=P;T(t);const u=t.$$={fragment:null,ctx:[],props:o,update:k,not_equal:i,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:et(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&i(u.ctx[_],u.ctx[_]=d)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](d),f&&Lt(t,_)),h}):[],u.update(),f=!0,A(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){wt();const _=Mt(e.target);u.fragment&&u.fragment.l(_),_.forEach(ut)}else u.fragment&&u.fragment.c();e.intro&&yt(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),$t(),pt()}T(l)}class ve{$destroy(){Ht(this,1),this.$destroy=k}$on(e,n){if(!O(n))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as A,k as B,St as C,ae as D,Ct as E,ee as F,Xt as G,A as H,Wt as I,ce as J,It as K,Jt as L,Gt as M,Ft as N,Yt as O,C as P,he as Q,Qt as R,ve as S,xe as T,ye as U,re as V,pe as W,ge as X,K as Y,me as Z,Ut as a,Kt as b,ne as c,de as d,Vt as e,yt as f,_e as g,ut as h,$e as i,ue as j,at as k,te as l,Mt as m,Zt as n,le as o,se as p,X as q,jt as r,qt as s,zt as t,ie as u,oe as v,be as w,we as x,Bt as y,Ht as z};
