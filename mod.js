// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}function r(r,t,e){return e?function(r,t){var e,u,f,o,i,l,a;if(0===(f=r.length))return r;for(i=!1,n(u=r[0])&&(i=!0),e=1,o=1,a=1;a<f;a++)(l=r[a])===u||i&&n(l)?(e+=1)<=t&&(r[o]=u,o+=1):(u=l,e=1,r[o]=u,o+=1,i=!1,n(u)&&(i=!0));return r.length=o,r}(r,t):function(n,r){var t,e,u,f,o,i;if(0===(u=n.length))return n;for(e=n[0],t=1,f=1,i=1;i<u;i++)(o=n[i])===e?(t+=1)<=r&&(n[f]=e,f+=1):(e=o,t=1,n[f]=e,f+=1);return n.length=f,n}(r,t)}export{r as default};
//# sourceMappingURL=mod.js.map
