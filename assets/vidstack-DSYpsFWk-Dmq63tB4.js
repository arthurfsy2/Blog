var u=i=>{throw TypeError(i)};var c=(i,t,s)=>t.has(i)||u("Cannot "+s);var o=(i,t,s)=>(c(i,t,"read from private field"),s?s.call(i):t.get(i)),a=(i,t,s)=>t.has(i)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,s),h=(i,t,s,f)=>(c(i,t,"write to private field"),f?f.call(i,s):t.set(i,s),s),d=(i,t,s)=>(c(i,t,"access private method"),s);import{i as l,b as p}from"./app-94l6yKyK.js";var n,r,e,m;class A{constructor(t){a(this,e);a(this,n);a(this,r);h(this,r,t)}start(){l(o(this,n))&&d(this,e,m).call(this)}stop(){p(o(this,n))&&window.cancelAnimationFrame(o(this,n)),h(this,n,void 0)}}n=new WeakMap,r=new WeakMap,e=new WeakSet,m=function(){h(this,n,window.requestAnimationFrame(()=>{l(o(this,n))||(o(this,r).call(this),d(this,e,m).call(this))}))};export{A as R};
