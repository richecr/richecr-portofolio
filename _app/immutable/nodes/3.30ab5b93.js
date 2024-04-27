import{s as fe,f as C,g as D,h as w,d as v,j as _,i as L,a as A,e as Z,c as S,I as de,K as g,n as me,l as z,m as F,T as ee,p as q,M as he}from"../chunks/scheduler.7a274a43.js";import{S as pe,i as ge,b as B,d as U,m as J,a as x,t as E,e as K,g as H,c as X}from"../chunks/index.28409b7f.js";import{A as te,e as Q,u as _e,U as ce,b as ve,g as re}from"../chunks/UIcon.48f3a67f.js";import{C as $e}from"../chunks/Card.107a1891.js";import{C as be}from"../chunks/Chip.52ead758.js";import{S as Ce}from"../chunks/SearchPage.f7c43069.js";import{g as le}from"../chunks/app.950c8fad.js";const ae=[{degree:"MBA of Full Cycle Architecture",description:"O MBA em Arquitetura Full Cycle é uma formação completa, reconhecida pelo MEC, que trabalhará as principais habilidades que um desenvolvedor precisa para ser capaz de liderar, arquitetar e entregar projetos de grande porte para grandes empresas e ter um dos perfis mais bem pagos e desejados do mercado.",location:"Online",logo:te.FullCycle,name:"",organization:"FullCycle",period:{from:new Date(2023,6,1)},shortDescription:"",slug:"dummy-education-item-2",subjects:["Java","Golang","Docker","Kubernetes","AWS","Microservices","DDD","TDD","Hexagonal Architecture","Clean Code","Clean Architecture","SOLID","Design Patterns","CI/CD","Git","Linux","PostgreSQL","MySQL","MongoDB","Redis","RabbitMQ","Kafka","Nginx","Jenkins"]},{degree:"Bachelor degree of Computer Science",description:"",location:"Campina Grande - PB",logo:te.UFCG,name:"",organization:"Universidade Federal de Campina Grande - UFCG",period:{from:new Date(2017,8,1),to:new Date(2022,8,1)},shortDescription:"",slug:"dummy-education-item",subjects:["C","Algorithm","Data Structure","Machine Learning","Artificial Intelligence","Software Engineering","Networks","Web development","Algebra","Python","C++","Java","English"]}],De="Education";function oe(c,t,r){const e=c.slice();return e[2]=t[r],e[4]=r,e}function se(c,t,r){const e=c.slice();return e[5]=t[r],e}function we(c){let t,r,e=[],s=new Map,u,a,i=Q(c[0]);const n=l=>l[2].slug;for(let l=0;l<i.length;l+=1){let o=oe(c,i,l),$=n(o);s.set($,e[l]=ie($,o))}return{c(){t=C("div"),r=A();for(let l=0;l<e.length;l+=1)e[l].c();u=Z(),this.h()},l(l){t=D(l,"DIV",{class:!0}),w(t).forEach(v),r=S(l);for(let o=0;o<e.length;o+=1)e[o].l(l);u=Z(),this.h()},h(){_(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,o){L(l,t,o),L(l,r,o);for(let $=0;$<e.length;$+=1)e[$]&&e[$].m(l,o);L(l,u,o),a=!0},p(l,o){o&1&&(i=Q(l[0]),H(),e=_e(e,o,n,1,l,i,s,u.parentNode,ve,ie,u,oe),X())},i(l){if(!a){for(let o=0;o<i.length;o+=1)x(e[o]);a=!0}},o(l){for(let o=0;o<e.length;o+=1)E(e[o]);a=!1},d(l){l&&(v(t),v(r),v(u));for(let o=0;o<e.length;o+=1)e[o].d(l)}}}function ke(c){let t,r,e,s,u="Could not find anything...",a;return r=new ce({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),B(r.$$.fragment),e=A(),s=C("p"),s.textContent=u,this.h()},l(i){t=D(i,"DIV",{class:!0});var n=w(t);U(r.$$.fragment,n),e=S(n),s=D(n,"P",{class:!0,["data-svelte-h"]:!0}),de(s)!=="svelte-1jyyf6v"&&(s.textContent=u),n.forEach(v),this.h()},h(){_(s,"class","font-300"),_(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(i,n){L(i,t,n),J(r,t,null),g(t,e),g(t,s),a=!0},p:me,i(i){a||(x(r.$$.fragment,i),a=!0)},o(i){E(r.$$.fragment,i),a=!1},d(i){i&&v(t),K(r)}}}function xe(c){let t=c[5]+"",r;return{c(){r=z(t)},l(e){r=F(e,t)},m(e,s){L(e,r,s)},p(e,s){s&1&&t!==(t=e[5]+"")&&q(r,t)},d(e){e&&v(r)}}}function ne(c){let t,r;return t=new be({props:{$$slots:{default:[xe]},$$scope:{ctx:c}}}),{c(){B(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,s){J(t,e,s),r=!0},p(e,s){const u={};s&257&&(u.$$scope={dirty:s,ctx:e}),t.$set(u)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function Ie(c){let t,r,e,s,u,a,i=c[2].degree+"",n,l,o,$=c[2].organization+"",I,b,p,k=c[2].location+"",V,R,G=le(c[2].period.from,c[2].period.to)+"",N,T,M,y,j=Q(c[2].subjects),m=[];for(let f=0;f<j.length;f+=1)m[f]=ne(se(c,j,f));const ue=f=>E(m[f],1,1,()=>{m[f]=null});return{c(){t=C("div"),r=C("img"),u=A(),a=C("div"),n=z(i),l=A(),o=C("div"),I=z($),b=A(),p=C("div"),V=z(k),R=z(" · "),N=z(G),T=A(),M=C("div");for(let f=0;f<m.length;f+=1)m[f].c();this.h()},l(f){t=D(f,"DIV",{class:!0});var d=w(t);r=D(d,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),u=S(d),a=D(d,"DIV",{class:!0});var h=w(a);n=F(h,i),h.forEach(v),l=S(d),o=D(d,"DIV",{});var P=w(o);I=F(P,$),P.forEach(v),b=S(d),p=D(d,"DIV",{class:!0});var O=w(p);V=F(O,k),R=F(O," · "),N=F(O,G),O.forEach(v),T=S(d),M=D(d,"DIV",{class:!0});var Y=w(M);for(let W=0;W<m.length;W+=1)m[W].l(Y);Y.forEach(v),d.forEach(v),this.h()},h(){ee(r.src,e=re(c[2].logo))||_(r,"src",e),_(r,"alt",s=c[2].organization),_(r,"height","50"),_(r,"width","50"),_(r,"class","mb-5"),_(a,"class","text-[1.3em]"),_(p,"class","text-[var(--accent-text)] text-[0.9em] font-200 mb-2"),_(M,"class","row flex-wrap gap-1"),_(t,"class","flex-1 col gap-2 items-stretch")},m(f,d){L(f,t,d),g(t,r),g(t,u),g(t,a),g(a,n),g(t,l),g(t,o),g(o,I),g(t,b),g(t,p),g(p,V),g(p,R),g(p,N),g(t,T),g(t,M);for(let h=0;h<m.length;h+=1)m[h]&&m[h].m(M,null);y=!0},p(f,d){if((!y||d&1&&!ee(r.src,e=re(f[2].logo)))&&_(r,"src",e),(!y||d&1&&s!==(s=f[2].organization))&&_(r,"alt",s),(!y||d&1)&&i!==(i=f[2].degree+"")&&q(n,i),(!y||d&1)&&$!==($=f[2].organization+"")&&q(I,$),(!y||d&1)&&k!==(k=f[2].location+"")&&q(V,k),(!y||d&1)&&G!==(G=le(f[2].period.from,f[2].period.to)+"")&&q(N,G),d&1){j=Q(f[2].subjects);let h;for(h=0;h<j.length;h+=1){const P=se(f,j,h);m[h]?(m[h].p(P,d),x(m[h],1)):(m[h]=ne(P),m[h].c(),x(m[h],1),m[h].m(M,null))}for(H(),h=j.length;h<m.length;h+=1)ue(h);X()}},i(f){if(!y){for(let d=0;d<j.length;d+=1)x(m[d]);y=!0}},o(f){m=m.filter(Boolean);for(let d=0;d<m.length;d+=1)E(m[d]);y=!1},d(f){f&&v(t),he(m,f)}}}function ie(c,t){let r,e,s,u,a,i,n,l,o,$,I;return a=new ce({props:{icon:"i-carbon-condition-point"}}),l=new $e({props:{$$slots:{default:[Ie]},$$scope:{ctx:t}}}),{key:c,first:null,c(){r=C("div"),e=C("div"),s=A(),u=C("div"),B(a.$$.fragment),i=A(),n=C("div"),B(l.$$.fragment),o=A(),this.h()},l(b){r=D(b,"DIV",{class:!0});var p=w(r);e=D(p,"DIV",{class:!0}),w(e).forEach(v),s=S(p),u=D(p,"DIV",{class:!0});var k=w(u);U(a.$$.fragment,k),k.forEach(v),i=S(p),n=D(p,"DIV",{class:!0});var V=w(n);U(l.$$.fragment,V),V.forEach(v),o=S(p),p.forEach(v),this.h()},h(){_(e,"class","flex-1 hidden lg:flex"),_(u,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),_(n,"class","col flex-1 items-stretch"),_(r,"class",$=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(b,p){L(b,r,p),g(r,e),g(r,s),g(r,u),J(a,u,null),g(r,i),g(r,n),J(l,n,null),g(r,o),I=!0},p(b,p){t=b;const k={};p&257&&(k.$$scope={dirty:p,ctx:t}),l.$set(k),(!I||p&1&&$!==($=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&_(r,"class",$)},i(b){I||(x(a.$$.fragment,b),x(l.$$.fragment,b),I=!0)},o(b){E(a.$$.fragment,b),E(l.$$.fragment,b),I=!1},d(b){b&&v(r),K(a),K(l)}}}function ye(c){let t,r,e,s;const u=[ke,we],a=[];function i(n,l){return n[0].length===0?0:1}return r=i(c),e=a[r]=u[r](c),{c(){t=C("div"),e.c(),this.h()},l(n){t=D(n,"DIV",{class:!0});var l=w(t);e.l(l),l.forEach(v),this.h()},h(){_(t,"class","col items-center relative mt-10 flex-1")},m(n,l){L(n,t,l),a[r].m(t,null),s=!0},p(n,l){let o=r;r=i(n),r===o?a[r].p(n,l):(H(),E(a[o],1,1,()=>{a[o]=null}),X(),e=a[r],e?e.p(n,l):(e=a[r]=u[r](n),e.c()),x(e,1),e.m(t,null))},i(n){s||(x(e),s=!0)},o(n){E(e),s=!1},d(n){n&&v(t),a[r].d()}}}function Ee(c){let t,r;return t=new Ce({props:{title:De,search:Ae,$$slots:{default:[ye]},$$scope:{ctx:c}}}),t.$on("search",c[1]),{c(){B(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,s){J(t,e,s),r=!0},p(e,[s]){const u={};s&257&&(u.$$scope={dirty:s,ctx:e}),t.$set(u)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}let Ae="";function Se(c,t,r){let e=ae;return[e,u=>{const a=u.detail.search;r(0,e=ae.filter(i=>i.degree.toLowerCase().includes(a)||i.description.toLowerCase().includes(a)||i.location.toLowerCase().includes(a)||i.name.toLowerCase().includes(a)||i.organization.toLowerCase().includes(a)||i.subjects.some(n=>n.toLowerCase().includes(a))))}]}class Pe extends pe{constructor(t){super(),ge(this,t,Se,Ee,fe,{})}}export{Pe as component};