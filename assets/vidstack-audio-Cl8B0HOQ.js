var o=Object.defineProperty;var a=(i,e,t)=>e in i?o(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>a(i,typeof e!="symbol"?e+"":e,t);import{e as p}from"./app-C5AQztAm.js";import{H as d,a as u}from"./vidstack-Bq6c3Bam-xpZwXWjO.js";import"./vidstack-DqAw8m9J-Cy2whCl1.js";class y extends d{constructor(t,s){super(t,s);r(this,"$$PROVIDER_TYPE","AUDIO");r(this,"airPlay");p(()=>{this.airPlay=new u(this.media,s)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.ctx.notify("provider-setup",this)}get audio(){return this.media}}export{y as AudioProvider};
