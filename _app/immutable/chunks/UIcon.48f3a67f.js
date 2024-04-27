import{t as U,a as q,S as D,i as E}from"./index.28409b7f.js";import{u as P,s as Q,f as B,g as G,h as H,d as N,j as F,i as K,n as T}from"./scheduler.7a274a43.js";import{w as O,b as V}from"./paths.1363a602.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,t){U(e,1,1,()=>{t.delete(e.key)})}function ts(e,t,a,n,c,o,r,S,m,h,g,v){let u=e.length,f=o.length,d=u;const b={};for(;d--;)b[e[d].key]=d;const y=[],k=new Map,j=new Map,C=[];for(d=f;d--;){const i=v(c,o,d),l=a(i);let p=r.get(l);p?n&&C.push(()=>p.p(i,t)):(p=h(l,i),p.c()),k.set(l,y[d]=p),l in b&&j.set(l,Math.abs(d-b[l]))}const M=new Set,_=new Set;function J(i){q(i,1),i.m(S,g),r.set(i.key,i),g=i.first,f--}for(;u&&f;){const i=y[f-1],l=e[u-1],p=i.key,w=l.key;i===l?(g=i.first,u--,f--):k.has(w)?!r.has(p)||M.has(p)?J(i):_.has(w)?u--:j.get(p)>j.get(w)?(_.add(p),J(i)):(M.add(w),u--):(m(l,r),u--)}for(;u--;){const i=e[u];k.has(i.key)||m(i,r)}for(;f;)J(y[f-1]);return P(C),y}const I="@riadh-adrani-theme",X=e=>{localStorage.setItem(I,JSON.stringify(e))},L=O(!1),A=e=>L.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return X(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),ns=()=>{const e=localStorage.getItem(I);e?A(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?A(!0):A(!1)},x=e=>`${V}/logos/${e}`,s=(e,t)=>t?{dark:x(t),light:x(e)}:x(e),as={OLX:s("olx.jpeg"),LSI:s("lsi.jpeg"),UFCG:s("ufcg.jpeg"),FullCycle:s("fullcycle.jpeg"),PyElit:s("pyelit.png"),BarbeariaSaraiva:s("barbearia-saraiva.png"),QuemGastaMais:s("quem-gasta-mais.png"),AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi.svg"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.png"),Sklearn:s("sklearn.png"),Spacy:s("spacy.png"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Spring:s("spring.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),Clojure:s("clojure.png"),SapHana:s("saphana.jpeg"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg")};let R;L.subscribe(e=>R=e);const is=e=>typeof e=="string"?e:R?e.dark:e.light;globalThis&&globalThis.__awaiter;function W(e){let t,a;return{c(){t=B("i"),this.h()},l(n){t=G(n,"I",{class:!0}),H(t).forEach(N),this.h()},h(){F(t,"class",a=`${e[0]} ${e[1]}`)},m(n,c){K(n,t,c)},p(n,[c]){c&3&&a!==(a=`${n[0]} ${n[1]}`)&&F(t,"class",a)},i:T,o:T,d(n){n&&N(t)}}}function z(e,t,a){let{icon:n=void 0}=t,{classes:c=""}=t;return e.$$set=o=>{"icon"in o&&a(0,n=o.icon),"classes"in o&&a(1,c=o.classes)},[n,c]}class os extends D{constructor(t){super(),E(this,t,z,W,Q,{icon:0,classes:1})}}export{as as A,os as U,A as a,es as b,ss as e,is as g,ns as o,L as t,ts as u};
