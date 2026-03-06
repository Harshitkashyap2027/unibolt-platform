const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/firestore-api-Bjc7ncI5.js","assets/firebase-firestore-CA9QAA0e.js","assets/firebase-core-BFqPDSUV.js","assets/toast-notifications-CWImcEL7.js","assets/firebase-storage-CQ6stn4o.js","assets/firebase-functions-CoG5UIvc.js","assets/firebase-app-check-Dqre4jnS.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{h as q,e as T,t as L,f as H}from"./toast-notifications-CWImcEL7.js";import{getEmployerInternships as N,getInternshipApplications as _,createInternship as U}from"./firestore-api-Bjc7ncI5.js";import{i as B,b as R,s as $}from"./intersection-observer-Pp1k-Em2.js";import"./firebase-core-BFqPDSUV.js";import"./firebase-firestore-CA9QAA0e.js";import"./firebase-storage-CQ6stn4o.js";import"./firebase-functions-CoG5UIvc.js";import"./firebase-app-check-Dqre4jnS.js";const V="modulepreload",O=function(e){return"/"+e},M={},P=function(n,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(d=>{if(d=O(d),d in M)return;M[d]=!0;const f=d.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const r=document.createElement("link");if(r.rel=f?"stylesheet":V,f||(r.as="script"),r.crossOrigin="",r.href=d,s&&r.setAttribute("nonce",s),document.head.appendChild(r),f)return new Promise((g,y)=>{r.addEventListener("load",g),r.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&l(s.reason);return n().catch(l)})};function S({title:e,content:n,actions:t=[],size:i="md",closable:o=!0,onClose:l}={}){var r;const a=document.createElement("div");a.className="modal-overlay";const d={sm:"modal-sm",md:"",lg:"modal-lg",xl:"modal-xl"}[i]||"";a.innerHTML=`
    <div class="modal ${d}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-header">
        <h3 class="modal-title" id="modal-title">${z(e||"")}</h3>
        ${o?`<button class="modal-close" aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>`:""}
      </div>
      <div class="modal-body"></div>
      ${t.length?'<div class="modal-footer"></div>':""}
    </div>
  `;const f=a.querySelector(".modal-body");if(typeof n=="string"?f.innerHTML=n:n instanceof Element&&f.appendChild(n),t.length){const g=a.querySelector(".modal-footer");t.forEach(({label:y,type:E="secondary",onClick:v,closeOnClick:w=!0})=>{const b=document.createElement("button");b.className=`btn btn-${E}`,b.textContent=y,b.addEventListener("click",async()=>{v&&await v(),w&&h()}),g.appendChild(b)})}document.body.appendChild(a),document.body.style.overflow="hidden",requestAnimationFrame(()=>{requestAnimationFrame(()=>a.classList.add("open"))});const h=()=>{a.classList.remove("open"),l==null||l(),setTimeout(()=>{a.remove(),document.body.style.overflow=""},300)};return(r=a.querySelector(".modal-close"))==null||r.addEventListener("click",h),a.addEventListener("click",g=>{g.target===a&&h()}),document.addEventListener("keydown",function g(y){y.key==="Escape"&&(h(),document.removeEventListener("keydown",g))}),{close:h,overlay:a}}function F({title:e,message:n,variant:t="warning",confirmLabel:i="Confirm",cancelLabel:o="Cancel"}={}){return new Promise(l=>{const s=`
      <div style="text-align:center;padding:8px">
        <div style="font-size:3rem;margin-bottom:16px">${{warning:"⚠️",danger:"🗑️",success:"✅"}[t]||"⚠️"}</div>
        <p style="color:#a5b4fc;line-height:1.6">${z(n||"")}</p>
      </div>`,{close:d}=S({title:e,content:s,size:"sm",actions:[{label:o,type:"secondary",onClick:()=>l(!1),closeOnClick:!0},{label:i,type:t==="danger"?"danger":"primary",onClick:()=>l(!0),closeOnClick:!0}],onClose:()=>l(!1)})})}function z(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const j=Object.freeze(Object.defineProperty({__proto__:null,confirm:F,showModal:S},Symbol.toStringTag,{value:"Module"}));function u(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function D(e){return String(e||"E").split(" ").filter(Boolean).slice(0,2).map(n=>n[0].toUpperCase()).join("")}function J(e){return e?(e!=null&&e.toDate?e.toDate():new Date(e)).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function W(e,n=0){const t=e.deadline?J(e.deadline):"Open",i=e.location||"Remote",o=e.stipend?`₹${Number(e.stipend).toLocaleString("en-IN")}/mo`:"Unpaid";return`
    <div class="posting-item reveal" role="listitem" data-internship-id="${u(e.id??"")}">
      <div class="posting-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
          <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
        </svg>
      </div>
      <div class="posting-meta">
        <p class="posting-title" title="${u(e.title)}">${u(e.title)}</p>
        <div class="posting-details">
          <span class="posting-detail">
            <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            ${u(i)}
          </span>
          <span class="posting-detail">${u(o)}</span>
          <span class="posting-detail">Deadline: ${u(t)}</span>
        </div>
      </div>
      <span class="posting-applicants" aria-label="${n} applicants">
        <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm5 6v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1a5 5 0 0110 0 5 5 0 0110 0z"/>
        </svg>
        ${n}
      </span>
      <div class="posting-actions">
        <button
          class="btn-view"
          type="button"
          aria-label="View applicants for ${u(e.title)}"
          data-action="view"
          data-id="${u(e.id??"")}"
          title="View applicants"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        <button
          class="btn-delete"
          type="button"
          aria-label="Delete ${u(e.title)}"
          data-action="delete"
          data-id="${u(e.id??"")}"
          title="Delete posting"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zm-1 7a1 1 0 112 0v4a1 1 0 11-2 0V9zm4 0a1 1 0 112 0v4a1 1 0 11-2 0V9z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </div>`}function G(e,n){const t=u(e.studentName||e.displayName||"Candidate"),i=u(e.internshipTitle||e.university||""),o=e.eloRating??e.elo??"—",l=e.matchScore!=null?`${Math.min(100,Math.round(Number(e.matchScore)))}%`:null,a=D(e.studentName||e.displayName||"C"),s=e.photoURL||"";return`
    <div class="candidate-item reveal" role="listitem">
      <div class="candidate-avatar" aria-hidden="true">
        ${s?`<img src="${u(s)}" alt="" />`:a}
      </div>
      <div class="candidate-info">
        <p class="candidate-name" title="${t}">${t}</p>
        ${i?`<p class="candidate-role">${i}</p>`:""}
      </div>
      <span class="candidate-elo" title="ELO Rating">
        ⭐ ${u(String(o))}
      </span>
      ${l?`<span class="candidate-match-score" title="Match score">${u(l)}</span>`:""}
      <button
        class="candidate-chat-btn"
        type="button"
        aria-label="Chat with ${t}"
        data-student-id="${u(e.studentId??e.uid??"")}"
        title="Message candidate"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>`}function K(){return`
    <form class="internship-form" id="create-internship-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="ci-title">Job Title <span aria-hidden="true">*</span></label>
        <input
          type="text"
          id="ci-title"
          class="input"
          placeholder="e.g. Frontend Developer Intern"
          required
          autocomplete="off"
          maxlength="120"
        />
        <div class="form-error" id="ci-title-error" style="display:none"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="ci-description">Description <span aria-hidden="true">*</span></label>
        <textarea
          id="ci-description"
          class="input textarea"
          placeholder="Describe the role, responsibilities, and what you're looking for…"
          rows="4"
          required
          maxlength="2000"
        ></textarea>
        <div class="form-error" id="ci-description-error" style="display:none"></div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="ci-location">Location</label>
          <input
            type="text"
            id="ci-location"
            class="input"
            placeholder="e.g. Bangalore / Remote"
            autocomplete="off"
            maxlength="80"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="ci-stipend">Monthly Stipend (₹)</label>
          <input
            type="number"
            id="ci-stipend"
            class="input"
            placeholder="e.g. 15000"
            min="0"
            max="999999"
            step="500"
          />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="ci-skills">Required Skills</label>
        <input
          type="text"
          id="ci-skills"
          class="input"
          placeholder="e.g. React, Node.js, TypeScript (comma-separated)"
          autocomplete="off"
          maxlength="300"
        />
        <p class="form-hint">Separate multiple skills with commas.</p>
      </div>

      <div class="form-group">
        <label class="form-label" for="ci-deadline">Application Deadline</label>
        <input
          type="date"
          id="ci-deadline"
          class="input"
        />
      </div>

      <div class="form-error" id="ci-global-error" style="display:none"></div>
    </form>`}async function Q(e){try{const n=await H(e.uid),t=(n==null?void 0:n.displayName)||e.displayName||"Employer",i=document.getElementById("welcome-name");i&&(i.textContent=t);const o=document.getElementById("avatar-fallback");o&&(o.textContent=D(t));const l=document.getElementById("user-avatar");return l&&(n!=null&&n.photoURL||e.photoURL)&&(l.src=(n==null?void 0:n.photoURL)||e.photoURL,l.style.display="block",o&&(o.style.display="none")),n}catch(n){return console.error("[EmployerDashboard] Failed to load profile:",n),null}}async function A(e){const n=document.getElementById("internships-skeleton"),t=document.getElementById("internships-container"),i=document.getElementById("internships-empty"),o=document.getElementById("candidates-skeleton"),l=document.getElementById("candidates-container"),a=document.getElementById("candidates-empty"),s=document.getElementById("candidates-count"),d=document.getElementById("stat-postings"),f=document.getElementById("stat-applicants"),h=document.getElementById("stat-avg-match");try{const r=await N(e);if(n&&(n.style.display="none"),!r||r.length===0)t&&(t.innerHTML=""),i&&(i.style.display="flex"),d&&(d.textContent="0",d.dataset.target="0");else{i&&(i.style.display="none");const g=await Promise.allSettled(r.map(c=>_(c.id)));let y=0,E=0,v=0;const w=[],b=r.map((c,p)=>{const m=g[p],k=m.status==="fulfilled"?m.value??[]:[];return y+=k.length,k.forEach(x=>{x.matchScore!=null&&(E+=Number(x.matchScore),v++),w.push({...x,internshipId:c.id})}),W(c,k.length)}).join("");if(t&&(t.innerHTML=b,$(t,".posting-item",80),X(t,r)),d&&(d.dataset.target=r.length,d.textContent=r.length),f&&(f.dataset.target=y,f.textContent=y),h&&v>0){const c=Math.round(E/v);h.dataset.target=c,h.textContent=`${c}%`}const C=new Set,I=w.filter(c=>{const p=c.studentId||c.uid||c.id;return C.has(p)?!1:(C.add(p),!0)}).sort((c,p)=>{const m=c.matchScore??c.eloRating??0;return(p.matchScore??p.eloRating??0)-m}).slice(0,10);o&&(o.style.display="none"),I.length===0?(a&&(a.style.display="flex"),s&&(s.textContent="0")):(a&&(a.style.display="none"),s&&(s.textContent=I.length),l&&(l.innerHTML=I.map((c,p)=>G(c,p+1)).join(""),$(l,".candidate-item",80),l.querySelectorAll("[data-student-id]").forEach(c=>{c.addEventListener("click",()=>{const p=c.dataset.studentId;p&&(window.location.href=`../chat/chat.html?user=${encodeURIComponent(p)}`)})})))}}catch(r){console.error("[EmployerDashboard] Failed to load internships/candidates:",r),n&&(n.style.display="none"),o&&(o.style.display="none"),t&&(t.innerHTML=`
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <p class="empty-state-title">Could not load postings</p>
          <p class="empty-state-text">${u((r==null?void 0:r.message)??"Please try again later.")}</p>
        </div>`),L.error("Failed to load internship data. Please refresh the page.")}}function X(e,n){e.querySelectorAll('[data-action="view"]').forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.id;i&&(window.location.href=`../internship/internship.html?id=${encodeURIComponent(i)}&view=applicants`)})}),e.querySelectorAll('[data-action="delete"]').forEach(t=>{t.addEventListener("click",async()=>{const i=t.dataset.id,o=n.find(a=>a.id===i);if(!(!i||!o||!await P(()=>Promise.resolve().then(()=>j),void 0).then(a=>a.confirm({title:"Delete Posting",message:`Are you sure you want to delete "${o.title}"? This cannot be undone.`,variant:"danger",confirmLabel:"Delete"}))))try{const{deleteInternship:a}=await P(async()=>{const{deleteInternship:d}=await import("./firestore-api-Bjc7ncI5.js");return{deleteInternship:d}},__vite__mapDeps([0,1,2,3,4,5,6]));await a(i);const s=e.querySelector(`[data-internship-id="${i}"]`);s==null||s.remove(),L.success("Internship posting deleted.")}catch(a){L.error("Failed to delete posting. Please try again."),console.error("[EmployerDashboard] Delete error:",a)}})})}function Y(e){const n=K(),{close:t}=S({title:"Post New Internship",content:n,size:"lg",closable:!0,actions:[{label:"Cancel",type:"secondary",closeOnClick:!0},{label:"Post Internship",type:"primary",closeOnClick:!1,onClick:()=>Z(e,t)}]})}async function Z(e,n){const t=document.getElementById("ci-title"),i=document.getElementById("ci-description"),o=document.getElementById("ci-location"),l=document.getElementById("ci-stipend"),a=document.getElementById("ci-skills"),s=document.getElementById("ci-deadline"),d=document.getElementById("ci-title-error"),f=document.getElementById("ci-description-error"),h=document.getElementById("ci-global-error");[d,f,h].forEach(m=>{m&&(m.style.display="none",m.textContent="")}),[t,i].forEach(m=>m==null?void 0:m.classList.remove("input-error"));const r=(t==null?void 0:t.value.trim())??"",g=(i==null?void 0:i.value.trim())??"",y=(o==null?void 0:o.value.trim())||"Remote",E=l==null?void 0:l.value.trim(),v=E?Number(E):null,w=a==null?void 0:a.value.trim(),b=w?w.split(",").map(m=>m.trim()).filter(Boolean):[],C=s==null?void 0:s.value,I=C?new Date(C):null;let c=!1;if(r||(t&&t.classList.add("input-error"),d&&(d.textContent="Job title is required.",d.style.display="block"),c=!0),g||(i&&i.classList.add("input-error"),f&&(f.textContent="Description is required.",f.style.display="block"),c=!0),c)return;const p=document.querySelector(".modal-footer .btn-primary");p&&(p.disabled=!0,p.textContent="Posting…");try{await U({employerId:e,title:r,description:g,location:y,stipend:v,skills:b,deadline:I,status:"active"}),n(),L.success("Internship posted successfully! 🎉"),await A(e),B(),R(document)}catch(m){console.error("[EmployerDashboard] Create internship error:",m),h&&(h.textContent=(m==null?void 0:m.message)??"Failed to post internship. Please try again.",h.style.display="block"),L.error("Failed to create internship posting.")}finally{p&&(p.disabled=!1,p.textContent="Post Internship")}}function ee(){const e=document.getElementById("sidebar-toggle"),n=document.getElementById("sidebar");!e||!n||(e.addEventListener("click",()=>{const t=n.classList.toggle("open");e.setAttribute("aria-expanded",String(t))}),document.addEventListener("click",t=>{n.classList.contains("open")&&!n.contains(t.target)&&!e.contains(t.target)&&(n.classList.remove("open"),e.setAttribute("aria-expanded","false"))}))}document.addEventListener("DOMContentLoaded",async()=>{var t,i,o,l;let e;try{e=await q("employer")}catch{return}ee(),B(),await Promise.all([Q(e),A(e.uid)]),R(document),B();const n=()=>Y(e.uid);(t=document.getElementById("create-internship-btn"))==null||t.addEventListener("click",n),(i=document.getElementById("create-internship-btn-2"))==null||i.addEventListener("click",n),(o=document.getElementById("create-first-btn"))==null||o.addEventListener("click",n),(l=document.getElementById("logout-btn"))==null||l.addEventListener("click",async()=>{try{await T(),window.location.href="/src/pages/auth/auth.html"}catch(a){L.error("Logout failed. Please try again."),console.error("[EmployerDashboard] Logout error:",a)}})});
//# sourceMappingURL=employer-dashboard-keeP8Rqc.js.map
