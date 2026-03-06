import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as h,e as f,t as p,f as v}from"./toast-notifications-CWImcEL7.js";import{listInternships as b,getStudentApplications as $,getSkillTree as w}from"./firestore-api-Bjc7ncI5.js";import{i as u,b as I,s as g}from"./intersection-observer-Pp1k-Em2.js";import"./firebase-core-BFqPDSUV.js";import"./firebase-firestore-CA9QAA0e.js";import"./firebase-storage-CQ6stn4o.js";import"./firebase-functions-CoG5UIvc.js";import"./firebase-app-check-Dqre4jnS.js";function o(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function L(t){return t?(t!=null&&t.toDate?t.toDate():new Date(t)).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function C(t){return String(t).split(" ").filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")}const S={applied:"Applied",screening:"Screening",interview:"Interview",offer:"Offer",rejected:"Rejected"},E={applied:"badge-status-applied",screening:"badge-status-screening",interview:"badge-status-interview",offer:"badge-status-offer",rejected:"badge-status-rejected"};function k(t){var m;const e=Array.isArray(t.skills)?t.skills:[],a=t.matchScore??t.match_score??null,i=a!==null?Math.min(100,Math.max(0,Math.round(Number(a)))):null,n=o(((m=t.company)==null?void 0:m[0])??"?").toUpperCase(),s=t.location||"Remote",c=t.stipend?`₹${Number(t.stipend).toLocaleString("en-IN")}/mo`:"",l=e.slice(0,4).map(y=>`<span class="badge badge-outline">${o(y)}</span>`).join(""),r=e.length>4?`<span class="badge badge-secondary">+${e.length-4}</span>`:"",d=i!==null?`<div class="internship-match" title="${i}% skill match">
        <div class="internship-match-bar">
          <div class="internship-match-fill" style="width:${i}%"></div>
        </div>
        ${i}%
       </div>`:"";return`
    <article class="internship-card reveal" role="listitem">
      <div class="internship-card-header">
        <div class="internship-logo" aria-hidden="true">${n}</div>
        <div class="internship-meta">
          <p class="internship-title" title="${o(t.title)}">${o(t.title)}</p>
          <p class="internship-company">${o(t.company)}</p>
        </div>
        ${d}
      </div>

      ${e.length>0?`<div class="internship-skills">${l}${r}</div>`:""}

      <div class="internship-card-footer">
        <span class="internship-location">
          <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          ${o(s)}
        </span>
        ${c?`<span class="internship-stipend">${o(c)}</span>`:""}
        <button
          class="btn btn-primary"
          style="padding:6px 14px;font-size:0.8125rem"
          data-internship-id="${o(t.id??"")}"
          aria-label="Apply to ${o(t.title)} at ${o(t.company)}"
        >Apply</button>
      </div>
    </article>`}function A(t){var s,c,l,r;const e=(t.status||"applied").toLowerCase(),a=S[e]??o(e),i=E[e]??"badge-secondary";return`
    <div class="application-item reveal" role="listitem">
      <div class="application-company-logo" aria-hidden="true">${o(((s=t.companyName)==null?void 0:s[0])??((c=t.internshipTitle)==null?void 0:c[0])??"?").toUpperCase()}</div>
      <div class="application-info">
        <p class="application-title" title="${o(t.internshipTitle)}">${o(t.internshipTitle??"Untitled Role")}</p>
        <p class="application-company">${o(t.companyName??"")}</p>
      </div>
      <time class="application-date" datetime="${o(t.appliedAt?new Date(((r=(l=t.appliedAt)==null?void 0:l.toDate)==null?void 0:r.call(l))??t.appliedAt).toISOString():"")}">
        ${L(t.appliedAt)}
      </time>
      <span class="badge ${o(i)}" aria-label="Status: ${o(a)}">${o(a)}</span>
    </div>`}async function x(t){try{const e=await v(t.uid),a=(e==null?void 0:e.displayName)||t.displayName||"Student",i=document.getElementById("welcome-name");i&&(i.textContent=a);const n=document.getElementById("avatar-fallback");n&&(n.textContent=C(a));const s=document.getElementById("user-avatar");return s&&(e!=null&&e.photoURL||t.photoURL)&&(s.src=(e==null?void 0:e.photoURL)||t.photoURL,s.style.display="block",n&&(n.style.display="none")),e}catch(e){return console.error("[Dashboard] Failed to load user profile:",e),null}}async function B(t,e){const a=document.getElementById("stat-elo"),i=document.getElementById("stat-skills");try{if(a){const n=(e==null?void 0:e.eloRating)??1200;a.dataset.target=n,a.textContent=n}try{const n=await w(t.uid),s=Array.isArray(n==null?void 0:n.unlocked)?n.unlocked.length:Object.values(n??{}).filter(Boolean).length;i&&(i.dataset.target=s,i.textContent=s)}catch{i&&(i.textContent="0")}}catch(n){console.error("[Dashboard] Failed to load stats:",n)}}async function T(t){const e=document.getElementById("applications-skeleton"),a=document.getElementById("applications-container"),i=document.getElementById("applications-empty"),n=document.getElementById("applications-count"),s=document.getElementById("stat-applications"),c=document.getElementById("stat-interviews");if(a)try{const l=await $(t);if(e&&(e.style.display="none"),!l||l.length===0){a.innerHTML="",i&&(i.style.display="flex"),n&&(n.textContent="0"),s&&(s.textContent="0",s.dataset.target="0"),c&&(c.textContent="0",c.dataset.target="0");return}const r=l.filter(d=>["interview","offer"].includes((d.status||"").toLowerCase())).length;n&&(n.textContent=l.length),s&&(s.dataset.target=l.length,s.textContent=l.length),c&&(c.dataset.target=r,c.textContent=r),a.innerHTML=l.slice(0,8).map(A).join(""),g(a,".application-item",80)}catch(l){console.error("[Dashboard] Failed to load applications:",l),e&&(e.style.display="none"),a&&(a.innerHTML=`
      <div class="empty-state">
        <div class="empty-state-icon">⚠️</div>
        <p class="empty-state-title">Could not load applications</p>
        <p class="empty-state-text">${o((l==null?void 0:l.message)??"Please try again later.")}</p>
      </div>`),p.error("Failed to load your applications. Please refresh the page.")}}async function D(){const t=document.getElementById("recommendations-skeleton"),e=document.getElementById("recommendations-container");if(e)try{const a=await b({pageSize:6}),i=Array.isArray(a)?a:(a==null?void 0:a.internships)??[];if(t&&(t.style.display="none"),!i||i.length===0){e.innerHTML=`
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p class="empty-state-title">No internships available</p>
          <p class="empty-state-text">Check back soon for new opportunities.</p>
        </div>`;return}e.innerHTML=i.map(k).join(""),g(e,".internship-card",100),e.querySelectorAll("[data-internship-id]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.internshipId;s&&(window.location.href=`../internship/internship.html?id=${encodeURIComponent(s)}`)})})}catch(a){console.error("[Dashboard] Failed to load recommendations:",a),t&&(t.style.display="none"),e&&(e.innerHTML=`
      <div class="empty-state">
        <div class="empty-state-icon">⚠️</div>
        <p class="empty-state-title">Could not load recommendations</p>
        <p class="empty-state-text">${o((a==null?void 0:a.message)??"Please try again later.")}</p>
      </div>`),p.error("Failed to load internship recommendations.")}}function M(){const t=document.getElementById("sidebar-toggle"),e=document.getElementById("sidebar");!t||!e||(t.addEventListener("click",()=>{const a=e.classList.toggle("open");t.setAttribute("aria-expanded",String(a))}),document.addEventListener("click",a=>{e.classList.contains("open")&&!e.contains(a.target)&&!t.contains(a.target)&&(e.classList.remove("open"),t.setAttribute("aria-expanded","false"))}))}document.addEventListener("DOMContentLoaded",async()=>{var a;let t;try{t=await h()}catch{return}M(),u();const[e]=await Promise.all([x(t),D(),T(t.uid)]);await B(t,e),I(document),u(),(a=document.getElementById("logout-btn"))==null||a.addEventListener("click",async()=>{try{await f(),window.location.href="/src/pages/auth/auth.html"}catch(i){p.error("Logout failed. Please try again."),console.error("[Dashboard] Logout error:",i)}})});
//# sourceMappingURL=student-dashboard-_9ZBbD-1.js.map
