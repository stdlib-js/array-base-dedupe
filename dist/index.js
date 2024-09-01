"use strict";var p=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var o=p(function(N,l){
var s=require('@stdlib/math-base-assert-is-nan/dist');function c(r,t){var a,e,i,n,u,v;if(i=r.length,i===0)return r;for(e=r[0],a=1,n=1,v=1;v<i;v++)u=r[v],u===e?(a+=1,a<=t&&(r[n]=e,n+=1)):(e=u,a=1,r[n]=e,n+=1);return r.length=n,r}function d(r,t){var a,e,i,n,u,v,f;if(i=r.length,i===0)return r;for(u=!1,e=r[0],s(e)&&(u=!0),a=1,n=1,f=1;f<i;f++)v=r[f],v===e||u&&s(v)?(a+=1,a<=t&&(r[n]=e,n+=1)):(e=v,a=1,r[n]=e,n+=1,u=!1,s(e)&&(u=!0));return r.length=n,r}function g(r,t,a){return a?d(r,t):c(r,t)}l.exports=g
});var h=o();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
