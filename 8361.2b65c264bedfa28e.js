"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[8361],{8361:(q,p,y)=>{y.r(p),y.d(p,{startInputShims:()=>Z});var g=y(10467),l=y(28476),T=y(20909),m=y(84920),R=y(94379);y(78438);const I=new WeakMap,M=(e,t,s,r=0,o=!1)=>{I.has(e)!==s&&(s?k(e,t,r,o):G(e,t))},k=(e,t,s,r=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),I.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=I.get(e);s&&(I.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",B=(e,t,s)=>{const r=e[N];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},W=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let A=0;const x="data-ionic-skip-scroll-assist",V=(e,t,s,r,o,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let L=!1;const c=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?j(e,t,s,r,S.detail.keyboardHeight,_,a,c,!1):L=!0},u=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)},h=function(){var S=(0,g.A)(function*(){t.hasAttribute(x)?t.removeAttribute(x):(j(e,t,s,r,o,_,a,c),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",u))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)}},K=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},j=function(){var e=(0,g.A)(function*(t,s,r,o,n,i,a=!1,_=0,L=!0){if(!r&&!o)return;const c=((e,t,s,r)=>{var o;return((e,t,s,r)=>{const o=e.top,n=e.bottom,i=t.top,_=i+15,c=Math.min(t.bottom,r-s)-50-n,f=_-o,u=Math.round(c<0?-c:f>0?-f:0),h=Math.min(u,o-i),w=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,w)),scrollPadding:s,inputSafeY:4-(o-_)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,r)})(t,r||o,n,_);if(r&&Math.abs(c.scrollAmount)<4)return K(s),void(i&&null!==r&&(B(r,A),W(s,r,()=>A=0)));if(M(t,s,!0,c.inputSafeY,a),K(s),(0,m.r)(()=>t.click()),i&&r&&(A=c.scrollPadding,B(r,A)),typeof window<"u"){let f;const u=function(){var S=(0,g.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",u),r&&(yield(0,T.c)(r,0,c.scrollAmount,c.scrollDuration)),M(t,s,!1,c.inputSafeY),K(s),i&&W(s,r,()=>A=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",u)};if(r){const S=yield(0,T.g)(r);if(L&&c.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",u),void(f=setTimeout(u,1e3))}u()}});return function(s,r,o,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,g.A)(function*(t,s){if(void 0===l.d)return;const r="ios"===s,o="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",r),_=t.getBoolean("inputBlurring",!1),L=t.getBoolean("scrollPadding",!0),c=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,u=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,g.A)(function*(d){yield new Promise(P=>(0,m.c)(d,P));const O=d.shadowRoot||d,b=O.querySelector("input")||O.querySelector("textarea"),D=(0,T.f)(d),F=D?null:d.closest("ion-footer");if(b){if(D&&a&&!f.has(d)){const P=((e,t,s)=>{if(!s||!t)return()=>{};const r=a=>{(e=>e===e.getRootNode().activeElement)(t)&&M(e,t,a)},o=()=>M(e,t,!1),n=()=>r(!0),i=()=>r(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,b,D);f.set(d,P)}if("date"!==b.type&&"datetime-local"!==b.type&&(D||F)&&i&&!u.has(d)){const P=V(d,b,D,F,n,L,h,o);u.set(d,P)}}});return function(O){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of c)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=u.get(v);d&&d(),u.delete(v)}})(v.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);