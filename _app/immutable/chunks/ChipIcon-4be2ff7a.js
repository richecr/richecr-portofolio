import{s as j,n as h,e as G,l as H,d as v,k as J,j as q,f as M,u as O,g as T,h as U}from"./utils-41fe8f1c.js";import{S as N,i as S,j as C,p as A,k as w,l as B,q as D,f as d,m as c,a as b,B as F,r as K,e as I,d as p,t as g,J as z,g as L,b as P,O as E}from"./index-c15dc07e.js";import{g as Q}from"./TabTitle-17f84192.js";import{t as R}from"./index-8bd290b4.js";function V(a){let t,r;return{c(){t=C("h3"),r=A(a[0]),this.h()},l(l){t=w(l,"H3",{class:!0});var e=B(t);r=D(e,a[0]),e.forEach(d),this.h()},h(){c(t,"class","font-[var(--title-f)] text-1.25em")},m(l,e){b(l,t,e),F(t,r)},p(l,[e]){e&1&&K(r,l[0])},i:h,o:h,d(l){l&&d(t)}}}function W(a,t,r){let{title:l}=t;return a.$$set=e=>{"title"in e&&r(0,l=e.title)},[l]}class re extends N{constructor(t){super(),S(this,t,W,V,j,{title:0})}}function X(a){let t,r,l;return{c(){t=C("img"),this.h()},l(e){t=w(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(t,"class",r=v(`w-15px h-15px ${a[2]?"invert-100":""}`)+" svelte-1m94jop"),q(t.src,l=a[1])||c(t,"src",l),c(t,"alt",a[0]),E(t,"chip-icon-logo-inverted",a[5]&&a[2])},m(e,s){b(e,t,s)},p(e,s){s&4&&r!==(r=v(`w-15px h-15px ${e[2]?"invert-100":""}`)+" svelte-1m94jop")&&c(t,"class",r),s&2&&!q(t.src,l=e[1])&&c(t,"src",l),s&1&&c(t,"alt",e[0]),s&36&&E(t,"chip-icon-logo-inverted",e[5]&&e[2])},i:h,o:h,d(e){e&&d(t)}}}function Y(a){let t;const r=a[8].default,l=M(r,a,a[7],null);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,s){l&&l.m(e,s),t=!0},p(e,s){l&&l.p&&(!t||s&128)&&O(l,r,e,e[7],t?U(r,e[7],s,null):T(e[7]),null)},i(e){t||(p(l,e),t=!0)},o(e){g(l,e),t=!1},d(e){l&&l.d(e)}}}function k(a){let t,r,l,e,s;const _=[Y,X],n=[];function m(o,i){return o[6].default?0:1}r=m(a),l=n[r]=_[r](a);let f=[{href:a[4]},{class:e=v(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${a[4]?"cursor-pointer":"cursor-help"} ${a[3]?"grayscale-65 hover:grayscale-0":""}`)+" svelte-1m94jop"},{"data-help":a[0]}],u={};for(let o=0;o<f.length;o+=1)u=J(u,f[o]);return{c(){t=C(a[4]?"a":"div"),l.c(),this.h()},l(o){t=w(o,((a[4]?"a":"div")||"null").toUpperCase(),{href:!0,class:!0,"data-help":!0});var i=B(t);l.l(i),i.forEach(d),this.h()},h(){z(a[4]?"a":"div")(t,u)},m(o,i){b(o,t,i),n[r].m(t,null),s=!0},p(o,i){let y=r;r=m(o),r===y?n[r].p(o,i):(L(),g(n[y],1,1,()=>{n[y]=null}),P(),l=n[r],l?l.p(o,i):(l=n[r]=_[r](o),l.c()),p(l,1),l.m(t,null)),z(o[4]?"a":"div")(t,u=Q(f,[(!s||i&16)&&{href:o[4]},(!s||i&24&&e!==(e=v(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${o[4]?"cursor-pointer":"cursor-help"} ${o[3]?"grayscale-65 hover:grayscale-0":""}`)+" svelte-1m94jop"))&&{class:e},(!s||i&1)&&{"data-help":o[0]}]))},i(o){s||(p(l),s=!0)},o(o){g(l),s=!1},d(o){o&&d(t),n[r].d()}}}function Z(a){let t=a[4]?"a":"div",r,l,e=(a[4]?"a":"div")&&k(a);return{c(){e&&e.c(),r=I()},l(s){e&&e.l(s),r=I()},m(s,_){e&&e.m(s,_),b(s,r,_),l=!0},p(s,[_]){s[4],t?j(t,s[4]?"a":"div")?(e.d(1),e=k(s),t=s[4]?"a":"div",e.c(),e.m(r.parentNode,r)):e.p(s,_):(e=k(s),t=s[4]?"a":"div",e.c(),e.m(r.parentNode,r))},i(s){l||(p(e,s),l=!0)},o(s){g(e,s),l=!1},d(s){s&&d(r),e&&e.d(s)}}}function x(a,t,r){let l;G(a,R,i=>r(5,l=i));let{$$slots:e={},$$scope:s}=t;const _=H(e);let{name:n=""}=t,{logo:m=""}=t,{inverted:f=!1}=t,{grayscale:u=!0}=t,{href:o=void 0}=t;return a.$$set=i=>{"name"in i&&r(0,n=i.name),"logo"in i&&r(1,m=i.logo),"inverted"in i&&r(2,f=i.inverted),"grayscale"in i&&r(3,u=i.grayscale),"href"in i&&r(4,o=i.href),"$$scope"in i&&r(7,s=i.$$scope)},[n,m,f,u,o,l,_,s,e]}class se extends N{constructor(t){super(),S(this,t,x,Z,j,{name:0,logo:1,inverted:2,grayscale:3,href:4})}}export{re as C,se as a};
