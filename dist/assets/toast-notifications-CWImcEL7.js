import{l as S,m as $,G as q,o as P,s as N,n as U,u as F,p as D,q as M,t as B}from"./firebase-core-BFqPDSUV.js";import{p as O,r as W,a as x,d as f,j as A,h as b}from"./firebase-firestore-CA9QAA0e.js";import{a as X}from"./firebase-storage-CQ6stn4o.js";import{g as H}from"./firebase-functions-CoG5UIvc.js";import"./firebase-app-check-Dqre4jnS.js";const G={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},g=S(G),l=$(g),c=O(g),se=X(g);H(g,"us-central1");W(c).catch(e=>{e.code==="failed-precondition"?console.warn("[Firestore] Persistence failed: multiple tabs open."):e.code==="unimplemented"&&console.warn("[Firestore] Persistence not supported in this browser.")});const w=new q;w.addScope("email");w.addScope("profile");async function ne({email:e,password:t,displayName:s,role:o}){const i=await U(l,e,t);return await F(i.user,{displayName:s}),await C(i.user,{role:o,displayName:s}),i.user}async function oe({email:e,password:t}){return(await N(l,e,t)).user}async function ie(e="student"){var o;const t=await D(l,w);return((o=t._tokenResponse)==null?void 0:o.isNewUser)&&await C(t.user,{role:e,displayName:t.user.displayName||""}),t.user}async function ae(){await B(l)}async function re(e){await M(l,e)}async function _(e){const t=await x(f(c,"users",e));return t.exists()?t.data().role:null}async function j(e){const t=await x(f(c,"users",e));return t.exists()?{id:t.id,...t.data()}:null}function le(e){return P(l,async t=>{if(t){const s=await j(t.uid).catch(()=>null);e({user:t,profile:s})}else e({user:null,profile:null})})}function K(e="/src/pages/auth/auth.html"){return new Promise(t=>{const s=P(l,o=>{s(),o?t(o):window.location.href=e})})}async function de(e,t="/"){const s=await K();return await _(s.uid)!==e?(window.location.href=t,null):s}async function C(e,{role:t,displayName:s}){const o=f(c,"users",e.uid);(await x(o)).exists()||(await A(o,{uid:e.uid,email:e.email,displayName:s||e.displayName||"",photoURL:e.photoURL||"",role:t||"student",bio:"",university:"",skills:[],linkedIn:"",eloRating:1200,gamesPlayed:0,wins:0,losses:0,streak:0,achievementIds:[],createdAt:b(),updatedAt:b()}),await A(f(c,"publicProfiles",e.uid),{uid:e.uid,displayName:s||e.displayName||"",photoURL:e.photoURL||"",eloRating:1200,wins:0,losses:0,streak:0,skills:[],updatedAt:b()}))}const z="toast-container",V=4e3;let r=null;function J(){return r||(r=document.getElementById(z),r||(r=document.createElement("div"),r.id=z,r.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
        max-width: 380px;
        width: calc(100vw - 40px);
      `,document.body.appendChild(r))),r}const E={success:'<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>',error:'<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>',warning:'<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>',info:'<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>'},I={success:{bg:"rgba(34,197,94,0.1)",border:"rgba(34,197,94,0.4)",icon:"#22c55e",bar:"#22c55e"},error:{bg:"rgba(239,68,68,0.1)",border:"rgba(239,68,68,0.4)",icon:"#ef4444",bar:"#ef4444"},warning:{bg:"rgba(245,158,11,0.1)",border:"rgba(245,158,11,0.4)",icon:"#f59e0b",bar:"#f59e0b"},info:{bg:"rgba(56,189,248,0.1)",border:"rgba(56,189,248,0.4)",icon:"#38bdf8",bar:"#38bdf8"}};function p({type:e="info",message:t,title:s,duration:o=V,action:i,actionLabel:y}={}){var L,k;const R=J(),d=I[e]||I.info,T=E[e]||E.info,n=document.createElement("div");n.style.cssText=`
    background: rgba(15,15,30,0.95);
    border: 1px solid ${d.border};
    border-radius: 12px;
    padding: 14px 16px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    pointer-events: all;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transform: translateX(calc(100% + 40px));
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
    opacity: 0;
    backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    flex-shrink: 0;
  `,n.innerHTML=`
    <div style="width:20px;height:20px;flex-shrink:0;color:${d.icon};margin-top:1px">${T}</div>
    <div style="flex:1;min-width:0">
      ${s?`<div style="font-size:0.875rem;font-weight:600;color:#f0f0ff;margin-bottom:3px">${v(s)}</div>`:""}
      <div style="font-size:0.875rem;color:#a5b4fc;line-height:1.4">${v(t||"")}</div>
      ${i&&y?`<button class="toast-action" style="margin-top:8px;background:none;border:1px solid ${d.border};color:${d.icon};padding:4px 12px;border-radius:6px;font-size:0.75rem;cursor:pointer;font-family:inherit">${v(y)}</button>`:""}
    </div>
    <button class="toast-close" style="background:none;border:none;color:#6b7280;cursor:pointer;padding:2px;display:flex;align-items:center;flex-shrink:0;margin-top:1px">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
    </button>
    <div class="toast-progress" style="position:absolute;bottom:0;left:0;height:3px;width:100%;background:${d.bar};transform-origin:left;transform:scaleX(1);transition:transform ${o}ms linear;border-radius:0 0 12px 12px"></div>
  `,R.appendChild(n),requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.style.transform="translateX(0)",n.style.opacity="1";const a=n.querySelector(".toast-progress");a&&requestAnimationFrame(()=>{a.style.transform="scaleX(0)"})})});let m=setTimeout(()=>h(n),o);const u=()=>{clearTimeout(m),h(n)};return(L=n.querySelector(".toast-close"))==null||L.addEventListener("click",u),(k=n.querySelector(".toast-action"))==null||k.addEventListener("click",()=>{i==null||i(),u()}),n.addEventListener("click",a=>{!a.target.closest(".toast-action")&&!a.target.closest(".toast-close")&&u()}),n.addEventListener("mouseenter",()=>{clearTimeout(m);const a=n.querySelector(".toast-progress");a&&(a.style.transition="none")}),n.addEventListener("mouseleave",()=>{m=setTimeout(()=>h(n),1500)}),{dismiss:u}}function h(e){e.style.transform="translateX(calc(100% + 40px))",e.style.opacity="0",setTimeout(()=>e.remove(),350)}function v(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const ce={success:(e,t={})=>p({type:"success",message:e,...t}),error:(e,t={})=>p({type:"error",message:e,...t}),warning:(e,t={})=>p({type:"warning",message:e,...t}),info:(e,t={})=>p({type:"info",message:e,...t})};export{l as a,ie as b,re as c,K as d,ae as e,j as f,_ as g,de as h,c as i,oe as l,le as o,ne as r,se as s,ce as t};
//# sourceMappingURL=toast-notifications-CWImcEL7.js.map
