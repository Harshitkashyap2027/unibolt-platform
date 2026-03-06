import"./modulepreload-polyfill-B5Qt9EMX.js";import{t as k,d as L,e as E}from"./toast-notifications-CWImcEL7.js";import{subscribeLeaderboard as R}from"./firestore-api-Bjc7ncI5.js";import{g as h}from"./elo-ranking-pvmFMD_6.js";import{i as N}from"./intersection-observer-Pp1k-Em2.js";import"./firebase-core-BFqPDSUV.js";import"./firebase-firestore-CA9QAA0e.js";import"./firebase-storage-CQ6stn4o.js";import"./firebase-functions-CoG5UIvc.js";import"./firebase-app-check-Dqre4jnS.js";function o(a){return String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function y(a){return String(a||"U").split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join("")}let d=null,c=null,v=[],b="all";async function C(){d=await L("/src/pages/auth/auth.html"),d&&(I(),U(),N(),B(),S(),window.addEventListener("beforeunload",()=>c==null?void 0:c()))}function I(){var a;(a=document.getElementById("logout-btn"))==null||a.addEventListener("click",async()=>{try{c==null||c(),await E(),window.location.href="/src/pages/auth/auth.html"}catch{k.error("Failed to log out. Please try again.")}})}function U(){const a=document.getElementById("user-avatar"),t=document.getElementById("avatar-fallback"),s=d.displayName||d.email||"U",r=y(s);d.photoURL&&a&&(a.src=d.photoURL),t&&(t.textContent=r)}function B(){var a;(a=document.getElementById("category-tabs"))==null||a.querySelectorAll(".filter-tab").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll("#category-tabs .filter-tab").forEach(s=>{s.classList.remove("active"),s.setAttribute("aria-selected","false")}),t.classList.add("active"),t.setAttribute("aria-selected","true"),b=t.dataset.category,w(v)})})}function S(){c=R(a=>{v=a||[],w(v);const t=document.getElementById("realtime-indicator");t&&(t.style.opacity="0",setTimeout(()=>{t.style.opacity="1"},100))})}function A(a){return b==="all"?a:a.filter(t=>t.category===b||!t.category)}function w(a){const s=[...A(a)].sort((l,n)=>(n.elo??1e3)-(l.elo??1e3));T(s.slice(0,3)),q(s);const r=document.getElementById("entry-count");r&&(r.textContent=`${s.length} player${s.length!==1?"s":""}`)}function T(a){const t=document.getElementById("podium-container");if(!t)return;const s=[a[1],a[0],a[2]],r=["rank-2","rank-1","rank-3"],l=["🥈","🥇","🥉"],n=[2,1,3];t.innerHTML=s.map((e,p)=>{if(!e)return"";const i=h(e.elo??1e3),m=r[p],g=l[p],u=n[p],f=e.photoURL?`<img src="${o(e.photoURL)}" alt="${o(e.displayName)}" loading="lazy" />`:`<div class="podium-avatar-fallback">${o(y(e.displayName))}</div>`;return`
        <div class="podium-card ${m}" aria-label="Rank ${u}: ${o(e.displayName)}">
          <span class="podium-medal" aria-hidden="true">${g}</span>
          <div class="podium-avatar">${f}</div>
          <span class="podium-rank-num">#${u}</span>
          <span class="podium-name" title="${o(e.displayName)}">${o(e.displayName||"Anonymous")}</span>
          <span class="podium-elo">${e.elo??1e3}</span>
          <span class="podium-rank-title" style="background:${i.color}22;color:${i.color};border-color:${i.color}44">
            ${o(i.icon)} ${o(i.title)}
          </span>
        </div>
      `}).join("")}const $=new Map;function q(a){const t=document.getElementById("leaderboard-body");if(!t)return;const s=a.map((r,l)=>M(r,l+1));t.innerHTML=s.join(""),a.forEach((r,l)=>{const n=l+1;if($.has(r.uid)&&$.get(r.uid)!==n){const e=t.querySelector(`tr[data-uid="${CSS.escape(r.uid)}"]`);e&&(e.classList.remove("row-updated"),e.offsetWidth,e.classList.add("row-updated"))}$.set(r.uid,n)})}function M(a,t){const s=h(a.elo??1e3),r=a.wins??0,l=a.losses??0,n=a.draws??0,e=a.streak??0,p=e>0?"win":e<0?"loss":"none",i=e>0?`🔥 ${e}W`:e<0?`❄️ ${Math.abs(e)}L`:"—",m=t<=3?`rank-${t}-row`:"",g=t===1?"rank-badge-1":t===2?"rank-badge-2":t===3?"rank-badge-3":"rank-badge-n",u=t===1?"🥇":t===2?"🥈":t===3?"🥉":t,f=a.photoURL?`<img src="${o(a.photoURL)}" alt="${o(a.displayName)}" loading="lazy" />`:`<div class="player-avatar-fallback">${o(y(a.displayName))}</div>`;return`
    <tr class="${m}" data-uid="${o(a.uid)}">
      <td class="td-rank">
        <span class="rank-badge ${g}" aria-label="Rank ${t}">${u}</span>
      </td>
      <td>
        <div class="player-cell">
          <div class="player-avatar">${f}</div>
          <div class="player-info">
            <span class="player-name" title="${o(a.displayName)}">${o(a.displayName||"Anonymous")}</span>
            ${a.university?`<span class="player-university">${o(a.university)}</span>`:""}
          </div>
        </div>
      </td>
      <td class="td-elo">${a.elo??1e3}</td>
      <td class="td-record">
        <span class="record-wins">${r}</span>
        <span class="record-sep">/</span>
        <span class="record-losses">${l}</span>
        <span class="record-sep">/</span>
        <span class="record-draws">${n}</span>
      </td>
      <td class="td-streak">
        <span class="streak-badge streak-${p}">${i}</span>
      </td>
      <td>
        <span class="rank-title-badge"
          style="background:${s.color}1a;color:${s.color};border-color:${s.color}33">
          ${o(s.icon)} ${o(s.title)}
        </span>
      </td>
    </tr>
  `}C().catch(a=>{console.error("Leaderboard init failed:",a),k.error("Failed to load leaderboard. Please refresh.")});
//# sourceMappingURL=leaderboard-CrKjE7Qx.js.map
