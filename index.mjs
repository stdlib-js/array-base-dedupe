// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";function n(n,r,e){return e?function(n,r){var e,s,i,f,u,a,o;if(0===(i=n.length))return n;for(u=!1,s=n[0],t(s)&&(u=!0),e=1,f=1,o=1;o<i;o++)(a=n[o])===s||u&&t(a)?(e+=1)<=r&&(n[f]=s,f+=1):(s=a,e=1,n[f]=s,f+=1,u=!1,t(s)&&(u=!0));return n.length=f,n}(n,r):function(t,n){var r,e,s,i,f,u;if(0===(s=t.length))return t;for(e=t[0],r=1,i=1,u=1;u<s;u++)(f=t[u])===e?(r+=1)<=n&&(t[i]=e,i+=1):(e=f,r=1,t[i]=e,i+=1);return t.length=i,t}(n,r)}export{n as default};
//# sourceMappingURL=index.mjs.map
