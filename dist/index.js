"use strict";var p=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var o=p(function(N,l){
var s=require('@stdlib/math-base-assert-is-nan/dist');function c(r,a){var e,n,i,t,u,v;if(i=r.length,i===0)return r;for(n=r[0],e=1,t=1,v=1;v<i;v++)u=r[v],u===n?(e+=1,e<=a&&(r[t]=n,t+=1)):(n=u,e=1,r[t]=n,t+=1);return r.length=t,r}function d(r,a){var e,n,i,t,u,v,f;if(i=r.length,i===0)return r;for(u=!1,n=r[0],s(n)&&(u=!0),e=1,t=1,f=1;f<i;f++)v=r[f],v===n||u&&s(v)?(e+=1,e<=a&&(r[t]=n,t+=1)):(n=v,e=1,r[t]=n,t+=1,u=!1,s(n)&&(u=!0));return r.length=t,r}function g(r,a,e){return e?d(r,a):c(r,a)}l.exports=g
});var h=o();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
