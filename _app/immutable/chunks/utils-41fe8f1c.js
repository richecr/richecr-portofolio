function l(){}function a(t,n){for(const r in n)t[r]=n[r];return t}function _(t){return t()}function y(){return Object.create(null)}function h(t){t.forEach(_)}function d(t){return typeof t=="function"}function g(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let s;function x(t,n){return t===n?!0:(s||(s=document.createElement("a")),s.href=n,t===s.href)}function m(t){return Object.keys(t).length===0}function b(t,...n){if(t==null){for(const e of n)e(void 0);return l}const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function p(t,n,r){t.$$.on_destroy.push(b(n,r))}function j(t,n,r,e){if(t){const u=i(t,n,r,e);return t[0](u)}}function i(t,n,r,e){return t[1]&&e?a(r.ctx.slice(),t[1](e(n))):r.ctx}function k(t,n,r,e){if(t[2]&&e){const u=t[2](e(r));if(n.dirty===void 0)return u;if(typeof u=="object"){const c=[],f=Math.max(n.dirty.length,u.length);for(let o=0;o<f;o+=1)c[o]=n.dirty[o]|u[o];return c}return n.dirty|u}return n.dirty}function q(t,n,r,e,u,c){if(u){const f=i(n,r,e,c);t.p(f,u)}}function E(t){if(t.ctx.length>32){const n=[],r=t.ctx.length/32;for(let e=0;e<r;e++)n[e]=-1;return n}return-1}function O(t){const n={};for(const r in t)n[r]=!0;return n}function M(t){return t??""}export{m as a,y as b,_ as c,M as d,p as e,j as f,E as g,k as h,d as i,x as j,a as k,O as l,l as n,h as r,g as s,q as u};
