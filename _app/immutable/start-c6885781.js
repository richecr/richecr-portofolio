import{S as rt,i as at,s as ot,e as B,c as it,a as z,g as de,t as F,b as pe,d as G,f as J,h as st,o as Ie,j as lt,k as ct,l as ft,m as ve,n as C,p as ut,q as dt,r as pt,u as W,v as Y,w as Te,x as X,y as Z,z as ce}from"./chunks/index-c15dc07e.js";import{S as tt,I as q,g as ze,f as He,a as Ee,b as fe,s as M,i as We,c as ue,P as Ye,d as ht,e as mt}from"./chunks/singletons-847e91e5.js";import{s as _t}from"./chunks/utils-41fe8f1c.js";import{s as gt}from"./chunks/paths-111ee3a1.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(r,e){const n=new URL(r);for(const i of vt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return kt(n),n}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function St(r){return r.replace(/\/$/,"")+Rt}function Lt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ue(r)),he(r,e));const te=new Map;function It(r,e){const n=Ue(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...f}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&te.set(n,{body:s,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,f))}return he(r,e)}function At(r,e,n){if(te.size>0){const i=Ue(r,n),s=te.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);te.delete(i)}}return he(e,n)}function Ue(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Ut(r).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((d,g)=>{if(g%2){if(d.startsWith("x+"))return ke(String.fromCharCode(parseInt(d.slice(2),16)));if(d.startsWith("u+"))return ke(String.fromCharCode(...d.slice(2).split("-").map(T=>parseInt(T,16))));const _=Ot.exec(d);if(!_)throw new Error(`Invalid param: ${d}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,k,L,j]=_;return e.push({name:L,matcher:j,optional:!!E,rest:!!k,chained:k?g===1&&t[0]==="":!1}),k?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return ke(d)}).join("")}).join("")}/?$`),params:e}}function Tt(r){return!/^\([^)]+\)$/.test(r)}function Ut(r){return r.slice(1).split("/").filter(Tt)}function $t(r,e,n){const i={},s=r.slice(1);let f="";for(let t=0;t<e.length;t+=1){const l=e[t];let d=s[t];if(l.chained&&l.rest&&f&&(d=d?f+"/"+d:f),f="",d===void 0)l.rest&&(i[l.name]="");else{if(l.matcher&&!n[l.matcher](d)){if(l.optional&&l.chained){let g=s.indexOf(void 0,t);if(g===-1){const _=e[t+1];if(_!=null&&_.rest&&_.chained)f=d;else return}for(;g>=t;)s[g]=s[g-1],g-=1;continue}return}i[l.name]=d}}if(!f)return i}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([l,[d,g,_]])=>{const{pattern:E,params:k}=Pt(l),L={id:l,exec:j=>{const T=E.exec(j);if(T)return $t(T,k,i)},errors:[1,..._||[]].map(j=>r[j]),layouts:[0,...g||[]].map(t),leaf:f(d)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function f(l){const d=l<0;return d&&(l=~l),[d,r[l]]}function t(l){return l===void 0?l:[s.has(l),r[l]]}}function Nt(r){let e,n,i;var s=r[0][0];function f(t,l){return{props:{data:t[2],form:t[1]}}}return s&&(e=W(s,f(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Te(e.$$.fragment,t),n=B()},m(t,l){e&&X(e,t,l),z(t,n,l),i=!0},p(t,l){if(l&1&&s!==(s=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}s?(e=W(s,f(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else if(s){const d={};l&4&&(d.data=t[2]),l&2&&(d.form=t[1]),e.$set(d)}},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function jt(r){let e,n,i;var s=r[0][0];function f(t,l){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return s&&(e=W(s,f(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Te(e.$$.fragment,t),n=B()},m(t,l){e&&X(e,t,l),z(t,n,l),i=!0},p(t,l){if(l&1&&s!==(s=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}s?(e=W(s,f(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else if(s){const d={};l&4&&(d.data=t[2]),l&523&&(d.$$scope={dirty:l,ctx:t}),e.$set(d)}},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Vt(r){let e,n,i;var s=r[0][1];function f(t,l){return{props:{data:t[3],form:t[1]}}}return s&&(e=W(s,f(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Te(e.$$.fragment,t),n=B()},m(t,l){e&&X(e,t,l),z(t,n,l),i=!0},p(t,l){if(l&1&&s!==(s=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}s?(e=W(s,f(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else if(s){const d={};l&8&&(d.data=t[3]),l&2&&(d.form=t[1]),e.$set(d)}},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Xe(r){let e,n=r[5]&&Ze(r);return{c(){e=lt("div"),n&&n.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ft(e);n&&n.l(s),s.forEach(J),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(i,s){z(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=Ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&J(e),n&&n.d()}}}function Ze(r){let e;return{c(){e=ut(r[6])},l(n){e=dt(n,r[6])},m(n,i){z(n,e,i)},p(n,i){i&64&&pt(e,n[6])},d(n){n&&J(e)}}}function Ct(r){let e,n,i,s,f;const t=[jt,Nt],l=[];function d(_,E){return _[0][1]?0:1}e=d(r),n=l[e]=t[e](r);let g=r[4]&&Xe(r);return{c(){n.c(),i=ot(),g&&g.c(),s=B()},l(_){n.l(_),i=it(_),g&&g.l(_),s=B()},m(_,E){l[e].m(_,E),z(_,i,E),g&&g.m(_,E),z(_,s,E),f=!0},p(_,[E]){let k=e;e=d(_),e===k?l[e].p(_,E):(de(),F(l[k],1,1,()=>{l[k]=null}),pe(),n=l[e],n?n.p(_,E):(n=l[e]=t[e](_),n.c()),G(n,1),n.m(i.parentNode,i)),_[4]?g?g.p(_,E):(g=Xe(_),g.c(),g.m(s.parentNode,s)):g&&(g.d(1),g=null)},i(_){f||(G(n),f=!0)},o(_){F(n),f=!1},d(_){_&&(J(i),J(s)),l[e].d(_),g&&g.d(_)}}}function qt(r,e,n){let{stores:i}=e,{page:s}=e,{components:f}=e,{form:t}=e,{data_0:l=null}=e,{data_1:d=null}=e;st(i.page.notify);let g=!1,_=!1,E=null;return Ie(()=>{const k=i.page.subscribe(()=>{g&&(n(5,_=!0),n(6,E=document.title||"untitled page"))});return n(4,g=!0),k}),r.$$set=k=>{"stores"in k&&n(7,i=k.stores),"page"in k&&n(8,s=k.page),"components"in k&&n(0,f=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,l=k.data_0),"data_1"in k&&n(3,d=k.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[f,t,l,d,g,_,E,i,s]}class Bt extends rt{constructor(e){super(),at(this,e,qt,Ct,_t,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Gt=function(r,e){return new URL(r,e).href},Qe={},N=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Gt(f,i),f in Qe)return;Qe[f]=!0;const t=f.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!i)for(let _=s.length-1;_>=0;_--){const E=s[_];if(E.href===f&&(!t||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${l}`))return;const g=document.createElement("link");if(g.rel=t?"stylesheet":Ft,t||(g.as="script",g.crossOrigin=""),g.href=f,document.head.appendChild(g),t)return new Promise((_,E)=>{g.addEventListener("load",_),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Jt={},me=[()=>N(()=>import("./chunks/0-f9b0d8bc.js"),["./chunks/0-f9b0d8bc.js","./components/pages/_layout.svelte-9bad416b.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/stores-a53dc0c3.js","./chunks/singletons-847e91e5.js","./chunks/paths-111ee3a1.js","./chunks/index-8bd290b4.js","./chunks/home-80e911c1.js","./chunks/types-1ebf2f37.js","./chunks/skills-c7b4be87.js","./assets/_layout-0eddca59.css"],import.meta.url),()=>N(()=>import("./chunks/1-11fa6e33.js"),["./chunks/1-11fa6e33.js","./components/error.svelte-2d167ed8.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/stores-a53dc0c3.js","./chunks/singletons-847e91e5.js","./chunks/paths-111ee3a1.js"],import.meta.url),()=>N(()=>import("./chunks/2-8c7ebd39.js"),["./chunks/2-8c7ebd39.js","./components/pages/_page.svelte-c8813a2b.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/index-8bd290b4.js","./chunks/paths-111ee3a1.js","./chunks/types-1ebf2f37.js","./chunks/app-9f3b4f80.js","./chunks/home-80e911c1.js","./chunks/skills-c7b4be87.js","./chunks/index-ab380ad2.js"],import.meta.url),()=>N(()=>import("./chunks/3-f79527a3.js"),["./chunks/3-f79527a3.js","./components/pages/education/_page.svelte-85992190.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/Card-c2b730a8.js","./chunks/TabTitle-71e91a00.js","./chunks/app-9f3b4f80.js","./chunks/index-8bd290b4.js","./chunks/paths-111ee3a1.js","./chunks/index-ab380ad2.js","./assets/Card-7a6abfc5.css","./chunks/Chip-06d05bca.js","./chunks/SearchPage-9d873d8f.js","./chunks/CommonPage-b47d1fd0.js","./chunks/stores-a53dc0c3.js","./chunks/singletons-847e91e5.js","./assets/SearchPage-d63b558a.css"],import.meta.url),()=>N(()=>import("./chunks/4-28c51eab.js"),["./chunks/4-28c51eab.js","./components/pages/experience/_page.svelte-c1516a12.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/app-9f3b4f80.js","./chunks/Card-c2b730a8.js","./chunks/TabTitle-71e91a00.js","./chunks/index-8bd290b4.js","./chunks/paths-111ee3a1.js","./chunks/index-ab380ad2.js","./assets/Card-7a6abfc5.css","./chunks/CardLogo-117bebad.js","./chunks/ChipIcon-298dfeff.js","./assets/ChipIcon-b03ae438.css","./chunks/Chip-06d05bca.js","./chunks/SearchPage-9d873d8f.js","./chunks/CommonPage-b47d1fd0.js","./chunks/stores-a53dc0c3.js","./chunks/singletons-847e91e5.js","./assets/SearchPage-d63b558a.css","./chunks/experience-e939e087.js","./chunks/skills-c7b4be87.js","./chunks/types-1ebf2f37.js"],import.meta.url),()=>N(()=>import("./chunks/5-4363712f.js"),["./chunks/5-4363712f.js","./chunks/_page-8b4a10f0.js","./chunks/experience-e939e087.js","./chunks/index-8bd290b4.js","./chunks/paths-111ee3a1.js","./chunks/utils-41fe8f1c.js","./chunks/skills-c7b4be87.js","./chunks/types-1ebf2f37.js","./components/pages/experience/_slug_/_page.svelte-8ad7aa92.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/app-9f3b4f80.js","./chunks/CardLogo-117bebad.js","./chunks/Banner-06d45120.js","./assets/Banner-79dec521.css","./chunks/TabTitle-71e91a00.js","./chunks/Chip-06d05bca.js","./chunks/CardDivider-dc8753bb.js"],import.meta.url),()=>N(()=>import("./chunks/6-646d92be.js"),["./chunks/6-646d92be.js","./components/pages/posts/_page.svelte-98532a98.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/Chip-06d05bca.js","./chunks/TabTitle-71e91a00.js","./chunks/app-9f3b4f80.js","./chunks/CommonPage-b47d1fd0.js","./assets/_page-3c0973b4.css"],import.meta.url),()=>N(()=>import("./chunks/7-5fd7de23.js"),["./chunks/7-5fd7de23.js","./components/pages/projects/_page.svelte-4f537a2e.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/projects-bc29f199.js","./chunks/index-8bd290b4.js","./chunks/paths-111ee3a1.js","./chunks/skills-c7b4be87.js","./chunks/Chip-06d05bca.js","./chunks/TabTitle-71e91a00.js","./chunks/app-9f3b4f80.js","./chunks/Card-c2b730a8.js","./chunks/index-ab380ad2.js","./assets/Card-7a6abfc5.css","./chunks/ChipIcon-298dfeff.js","./assets/ChipIcon-b03ae438.css","./chunks/CardDivider-dc8753bb.js","./chunks/CardLogo-117bebad.js","./chunks/SearchPage-9d873d8f.js","./chunks/CommonPage-b47d1fd0.js","./chunks/stores-a53dc0c3.js","./chunks/singletons-847e91e5.js","./assets/SearchPage-d63b558a.css","./assets/_page-1b281c99.css"],import.meta.url),()=>N(()=>import("./chunks/8-28f792a6.js"),["./chunks/8-28f792a6.js","./chunks/_page-a63f51b6.js","./chunks/projects-bc29f199.js","./chunks/index-8bd290b4.js","./chunks/paths-111ee3a1.js","./chunks/utils-41fe8f1c.js","./chunks/skills-c7b4be87.js","./components/pages/projects/_slug_/_page.svelte-d32075d8.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/CardLogo-117bebad.js","./chunks/app-9f3b4f80.js","./chunks/Banner-06d45120.js","./assets/Banner-79dec521.css","./chunks/TabTitle-71e91a00.js","./chunks/Chip-06d05bca.js","./chunks/CardDivider-dc8753bb.js","./assets/_page-23422aa7.css"],import.meta.url),()=>N(()=>import("./chunks/9-d8b818cc.js"),["./chunks/9-d8b818cc.js","./components/pages/search/_page.svelte-ae6dceed.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/app-9f3b4f80.js","./chunks/paths-111ee3a1.js","./chunks/experience-e939e087.js","./chunks/index-8bd290b4.js","./chunks/skills-c7b4be87.js","./chunks/types-1ebf2f37.js","./chunks/projects-bc29f199.js","./chunks/SearchPage-9d873d8f.js","./chunks/CommonPage-b47d1fd0.js","./chunks/TabTitle-71e91a00.js","./chunks/stores-a53dc0c3.js","./chunks/singletons-847e91e5.js","./assets/SearchPage-d63b558a.css","./chunks/Chip-06d05bca.js"],import.meta.url),()=>N(()=>import("./chunks/10-2a05a407.js"),["./chunks/10-2a05a407.js","./components/pages/skills/_page.svelte-83e2826c.js","./chunks/utils-41fe8f1c.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/paths-111ee3a1.js","./chunks/skills-c7b4be87.js","./chunks/index-8bd290b4.js","./chunks/SearchPage-9d873d8f.js","./chunks/CommonPage-b47d1fd0.js","./chunks/app-9f3b4f80.js","./chunks/TabTitle-71e91a00.js","./chunks/stores-a53dc0c3.js","./chunks/singletons-847e91e5.js","./assets/SearchPage-d63b558a.css","./chunks/Card-c2b730a8.js","./chunks/index-ab380ad2.js","./assets/Card-7a6abfc5.css"],import.meta.url),()=>N(()=>import("./chunks/11-cae6535b.js"),["./chunks/11-cae6535b.js","./chunks/_page-e475f43f.js","./chunks/skills-c7b4be87.js","./chunks/index-8bd290b4.js","./chunks/paths-111ee3a1.js","./chunks/utils-41fe8f1c.js","./components/pages/skills/_slug_/_page.svelte-a0680e5a.js","./chunks/index-c15dc07e.js","./chunks/UIcon-1140dbed.js","./chunks/projects-bc29f199.js","./chunks/experience-e939e087.js","./chunks/types-1ebf2f37.js","./chunks/app-9f3b4f80.js","./chunks/CardDivider-dc8753bb.js","./chunks/CardLogo-117bebad.js","./chunks/Banner-06d45120.js","./assets/Banner-79dec521.css","./chunks/TabTitle-71e91a00.js","./chunks/Chip-06d05bca.js"],import.meta.url)],Kt=[0],Mt={"/":[2],"/education":[3],"/experience":[4],"/experience/[slug]":[5],"/posts":[6],"/projects":[7],"/projects/[slug]":[8],"/search":[9],"/skills":[10],"/skills/[slug]":[11]},zt={handleError:({error:r})=>{console.error(r)}};class Ae{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Ht(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(r,e){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const n=r,i=Array(n.length);function s(f,t=!1){if(f===Wt)return;if(f===Xt)return NaN;if(f===Zt)return 1/0;if(f===Qt)return-1/0;if(f===xt)return-0;if(t)throw new Error("Invalid input");if(f in i)return i[f];const l=n[f];if(!l||typeof l!="object")i[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const d=l[0],g=e==null?void 0:e[d];if(g)return i[f]=g(s(l[1]));switch(d){case"Date":i[f]=new Date(l[1]);break;case"Set":const _=new Set;i[f]=_;for(let L=1;L<l.length;L+=1)_.add(s(l[L]));break;case"Map":const E=new Map;i[f]=E;for(let L=1;L<l.length;L+=2)E.set(s(l[L]),s(l[L+1]));break;case"RegExp":i[f]=new RegExp(l[1],l[2]);break;case"Object":i[f]=Object(l[1]);break;case"BigInt":i[f]=BigInt(l[1]);break;case"null":const k=Object.create(null);i[f]=k;for(let L=1;L<l.length;L+=2)k[l[L]]=s(l[L+1]);break;default:throw new Error(`Unknown type ${d}`)}}else{const d=new Array(l.length);i[f]=d;for(let g=0;g<l.length;g+=1){const _=l[g];_!==Yt&&(d[g]=s(_))}}else{const d={};i[f]=d;for(const g in l){const _=l[g];d[g]=s(_)}}return i[f]}return s(0)}const Re=Dt(me,Kt,Mt,Jt),Oe=me[0],Pe=me[1];Oe();Pe();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Se(r){ne[r]=ue()}function tn({target:r,base:e}){var Je;const n=document.documentElement,i=[];let s=null;const f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,d=!1,g=!0,_=!1,E=!1,k=!1,L=!1,j,T=(Je=history.state)==null?void 0:Je[q];T||(T=Date.now(),history.replaceState({...history.state,[q]:T},"",location.href));const _e=ne[T];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let K,$e,re;async function De(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),o=ie(a,!0);s=null,await je(o,a,[])}async function ge(a,{noScroll:o=!1,replaceState:u=!1,keepFocus:c=!1,state:p={},invalidateAll:h=!1},m,b){return typeof a=="string"&&(a=new URL(a,ze(document))),se({url:a,scroll:o?ue():null,keepfocus:c,redirect_chain:m,details:{state:p,replaceState:u},nav_token:b,accepted:()=>{h&&(L=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const o=ie(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:o.id,promise:qe(o).then(u=>(u.type==="loaded"&&u.state.error&&(s=null),u))},s.promise}async function ae(...a){const u=Re.filter(c=>a.some(p=>c.exec(p))).map(c=>Promise.all([...c.layouts,c.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(u)}async function je(a,o,u,c,p={},h){var b,w;$e=p;let m=a&&await qe(a);if(m||(m=await Ge(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,$e!==p)return!1;if(m.type==="redirect")if(u.length>10||u.includes(o.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(m.location,o).href,{},[...u,o.pathname],p),!1;else((w=(b=m.props)==null?void 0:b.page)==null?void 0:w.status)>=400&&await M.updated.check()&&await le(o);if(i.length=0,L=!1,_=!0,c&&c.details){const{details:y}=c,S=y.replaceState?0:1;y.state[q]=T+=S,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(s=null,d?(t=m.state,m.props.page&&(m.props.page.url=o),j.$set(m.props)):Ve(m),c){const{scroll:y,keepfocus:S}=c;if(S||Le(),await ce(),g){const I=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ce();g=!0,m.props.page&&(K=m.props.page),h&&h(),_=!1}function Ve(a){var c;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),K=a.props.page,j=new Bt({target:r,props:{...a.props,stores:M},hydrate:!0});const u={from:null,to:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};f.after_navigate.forEach(p=>p(u)),d=!0}async function Q({url:a,params:o,branch:u,status:c,error:p,route:h,form:m}){const b=u.filter(Boolean);let w="never";for(const A of u)(A==null?void 0:A.slash)!==void 0&&(w=A.slash);a.pathname=yt(a.pathname,w),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:u,error:p,route:h},props:{components:b.map(A=>A.node.component)}};m!==void 0&&(y.props.form=m);let S={},I=!K;for(let A=0;A<b.length;A+=1){const v=b[A];S={...S,...v.data},(I||!t.branch.some($=>$===v))&&(y.props[`data_${A}`]=S,I=I||Object.keys(v.data??{}).length>0)}return I||(I=Object.keys(K.data).length!==Object.keys(S).length),(!t.url||a.href!==t.url.href||t.error!==p||m!==void 0||I)&&(y.props.page={error:p,params:o,route:h,status:c,url:new URL(a),form:m??null,data:I?S:K.data}),y}async function ye({loader:a,parent:o,url:u,params:c,route:p,server_data_node:h}){var y,S,I;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},w=await a();if((y=w.universal)!=null&&y.load){let V=function(...v){for(const $ of v){const{href:D}=new URL($,u);b.dependencies.add(D)}};const A={route:{get id(){return b.route=!0,p.id}},params:new Proxy(c,{get:(v,$)=>(b.params.add($),v[$])}),data:(h==null?void 0:h.data)??null,url:Et(u,()=>{b.url=!0}),async fetch(v,$){let D;v instanceof Request?(D=v.url,$={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...$}):D=v;const R=new URL(D,u).href;return V(R),d?At(D,R,$):It(D,$)},setHeaders:()=>{},depends:V,parent(){return b.parent=!0,o()}};m=await w.universal.load.call(null,A)??null,m=m?await Ht(m):null}return{node:w,loader:a,server:h,universal:(S=w.universal)!=null&&S.load?{type:"data",data:m,uses:b}:null,data:m??(h==null?void 0:h.data)??null,slash:((I=w.universal)==null?void 0:I.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(a,o,u,c,p){if(L)return!0;if(!c)return!1;if(c.parent&&a||c.route&&o||c.url&&u)return!0;for(const h of c.params)if(p[h]!==t.params[h])return!0;for(const h of c.dependencies)if(i.some(m=>m(new URL(h))))return!0;return!1}function we(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function qe({id:a,invalidating:o,url:u,params:c,route:p}){if((s==null?void 0:s.id)===a)return s.promise;const{errors:h,layouts:m,leaf:b}=p,w=[...m,b];h.forEach(R=>R==null?void 0:R().catch(()=>{})),w.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let y=null;const S=t.url?a!==t.url.pathname+t.url.search:!1,I=t.route?a!==t.route.id:!1,V=w.reduce((R,P,U)=>{var x;const O=t.branch[U],H=!!(P!=null&&P[0])&&((O==null?void 0:O.loader)!==P[1]||Ce(R.some(Boolean),I,S,(x=O.server)==null?void 0:x.uses,c));return R.push(H),R},[]);if(V.some(Boolean)){try{y=await et(u,V)}catch(R){return oe({status:500,error:await ee(R,{url:u,params:c,route:{id:p.id}}),url:u,route:p})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let v=!1;const $=w.map(async(R,P)=>{var x;if(!R)return;const U=t.branch[P],O=A==null?void 0:A[P];if((!O||O.type==="skip")&&R[1]===(U==null?void 0:U.loader)&&!Ce(v,I,S,(x=U.universal)==null?void 0:x.uses,c))return U;if(v=!0,(O==null?void 0:O.type)==="error")throw O;return ye({loader:R[1],url:u,params:c,route:p,parent:async()=>{var Me;const Ke={};for(let be=0;be<P;be+=1)Object.assign(Ke,(Me=await $[be])==null?void 0:Me.data);return Ke},server_data_node:we(O===void 0&&R[0]?{type:"skip"}:O??null,U==null?void 0:U.server)})});for(const R of $)R.catch(()=>{});const D=[];for(let R=0;R<w.length;R+=1)if(w[R])try{D.push(await $[R])}catch(P){if(P instanceof xe)return{type:"redirect",location:P.location};let U=500,O;A!=null&&A.includes(P)?(U=P.status??U,O=P.error):P instanceof Ae?(U=P.status,O=P.body):O=await ee(P,{params:c,url:u,route:{id:p.id}});const H=await Be(R,D,h);return H?await Q({url:u,params:c,branch:D.slice(0,H.idx).concat(H.node),status:U,error:O,route:p}):await Ge(u,{id:p.id},O,U)}else D.push(void 0);return await Q({url:u,params:c,branch:D,status:200,error:null,route:p,form:o?void 0:null})}async function Be(a,o,u){for(;a--;)if(u[a]){let c=a;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await u[a](),loader:u[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:o,url:u,route:c}){const p={},h=await Oe();let m=null;if(h.server)try{const y=await et(u,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||l)&&await le(u)}const b=await ye({loader:Oe,url:u,params:p,route:c,parent:()=>Promise.resolve({}),server_data_node:we(m)}),w={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:u,params:p,branch:[b,w],status:a,error:o,route:null})}function ie(a,o){if(We(a,e))return;const u=wt(a.pathname.slice(e.length)||"/");for(const c of Re){const p=c.exec(u);if(p)return{id:a.pathname+a.search,invalidating:o,route:c,params:bt(p),url:a}}}function Fe({url:a,type:o,intent:u,delta:c}){var b,w;let p=!1;const h={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((w=u==null?void 0:u.route)==null?void 0:w.id)??null},url:a},willUnload:!u,type:o};c!==void 0&&(h.delta=c);const m={...h,cancel:()=>{p=!0}};return E||f.before_navigate.forEach(y=>y(m)),p?null:h}async function se({url:a,scroll:o,keepfocus:u,redirect_chain:c,details:p,type:h,delta:m,nav_token:b,accepted:w,blocked:y}){const S=ie(a,!1),I=Fe({url:a,type:h,delta:m,intent:S});if(!I){y();return}Se(T),w(),E=!0,d&&M.navigating.set(I),await je(S,a,c,{scroll:o,keepfocus:u,details:p},b,()=>{E=!1,f.after_navigate.forEach(V=>V(I)),M.navigating.set(null)})}async function Ge(a,o,u,c){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await oe({status:c,error:u,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function nt(){let a;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(a),a=setTimeout(()=>{c(m,2)},20)});function o(h){c(h.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const u=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(ae(new URL(m.target.href).pathname),u.unobserve(m.target))},{threshold:0});function c(h,m){const b=He(h,n);if(!b)return;const{url:w,external:y}=Ee(b,e);if(y)return;const S=fe(b);S.reload||(m<=S.preload_data?Ne(w):m<=S.preload_code&&ae(w.pathname))}function p(){u.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:b}=Ee(h,e);if(b)continue;const w=fe(h);w.reload||(w.preload_code===Ye.viewport&&u.observe(h),w.preload_code===Ye.eager&&ae(m.pathname))}}f.after_navigate.push(p),p()}return{after_navigate:a=>{Ie(()=>(f.after_navigate.push(a),()=>{const o=f.after_navigate.indexOf(a);f.after_navigate.splice(o,1)}))},before_navigate:a=>{Ie(()=>(f.before_navigate.push(a),()=>{const o=f.before_navigate.indexOf(a);f.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!d)&&(g=!1)},goto:(a,o={})=>ge(a,o,[]),invalidate:a=>{if(typeof a=="function")i.push(a);else{const{href:o}=new URL(a,location.href);i.push(u=>u.href===o)}return De()},invalidateAll:()=>(L=!0,De()),preload_data:async a=>{const o=new URL(a,ze(document));await Ne(o)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:u,route:c}=t;if(!c)return;const p=await Be(t.branch.length,u,c.errors);if(p){const h=await Q({url:o,params:t.params,branch:u.slice(0,p.idx).concat(p.node),status:a.status??500,error:a.error,route:c});t=h.state,j.$set(h.props),ce().then(Le)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...K,form:a.data,status:a.status}};j.$set(o),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c;let u=!1;if(!E){const p={from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};f.before_navigate.forEach(h=>h(p))}u?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(T);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const u=He(o.composedPath()[0],n);if(!u)return;const{url:c,external:p,has:h}=Ee(u,e),m=fe(u);if(!c||!(u instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||h.download)return;if(p||m.reload){Fe({url:c,type:"link"})||o.preventDefault(),E=!0;return}const[w,y]=c.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){k=!0,Se(T),t.url=c,M.page.set({...K,url:c}),M.page.notify();return}se({url:c,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var w;if(o.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||u.method)!=="get")return;const h=new URL(((w=o.submitter)==null?void 0:w.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||u.action);if(We(h,e))return;const{noscroll:m,reload:b}=fe(o.target);b||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:h,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var u;if((u=o.state)!=null&&u[q]){if(o.state[q]===T)return;const c=o.state[q]-T;se({url:new URL(location.href),scroll:ne[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[q]:++T},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&M.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:u,params:c,route:p,data:h,form:m})=>{l=!0;const b=new URL(location.href);({params:c={},route:p={id:null}}=ie(b,!1)||{});let w;try{const y=u.map(async(S,I)=>{const V=h[I];return ye({loader:me[S],url:b,params:c,route:p,parent:async()=>{const A={};for(let v=0;v<I;v+=1)Object.assign(A,(await y[v]).data);return A},server_data_node:we(V)})});w=await Q({url:b,params:c,branch:await Promise.all(y),status:a,error:o,form:m,route:Re.find(({id:S})=>S===p.id)??null})}catch(y){if(y instanceof xe){await le(new URL(y.location,location.href));return}w=await oe({status:y instanceof Ae?y.status:500,error:await ee(y,{url:b,params:c,route:p}),url:b,route:p})}Ve(w)}}}async function et(r,e){var f;const n=new URL(r);n.pathname=St(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await he(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(f=s.nodes)==null||f.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ee(r,e){return r instanceof Ae?r.body:zt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function sn({env:r,hydrate:e,paths:n,target:i,version:s}){gt(n),mt(s);const f=tn({target:i,base:n.base});ht({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{sn as start};
