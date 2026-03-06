import"./modulepreload-polyfill-B5Qt9EMX.js";import{t as h,d as k,e as C}from"./toast-notifications-CWImcEL7.js";import{getUserConversations as D,getUser as N,getOrCreateConversation as T,subscribeMessages as A,sendMessage as x}from"./firestore-api-Bjc7ncI5.js";import"./firebase-core-BFqPDSUV.js";import"./firebase-firestore-CA9QAA0e.js";import"./firebase-storage-CQ6stn4o.js";import"./firebase-functions-CoG5UIvc.js";import"./firebase-app-check-Dqre4jnS.js";function c(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function E(t){return String(t||"U").split(" ").filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")}function M(t){if(!t)return"";const e=t!=null&&t.toDate?t.toDate():new Date(t),n=new Date-e;return n<6e4?"Just now":n<36e5?`${Math.floor(n/6e4)} min ago`:n<864e5?e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}):n<1728e5?"Yesterday":e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function H(t){return t?(t!=null&&t.toDate?t.toDate():new Date(t)).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}):""}let r=null,u=[],g=null,m=null,d=null,y="";async function U(){if(r=await k("/src/pages/auth/auth.html"),!r)return;_(),R(),z(),await F();const e=new URLSearchParams(window.location.search).get("with");e&&e!==r.uid&&await P(e),Y(),window.addEventListener("beforeunload",b)}function _(){var t;(t=document.getElementById("logout-btn"))==null||t.addEventListener("click",async()=>{try{b(),await C(),window.location.href="/src/pages/auth/auth.html"}catch{h.error("Failed to log out. Please try again.")}})}function R(){const t=document.getElementById("user-avatar"),e=document.getElementById("avatar-fallback"),a=r.displayName||r.email||"U",n=E(a);r.photoURL&&t&&(t.src=r.photoURL),e&&(e.textContent=n)}async function F(){try{u=await D(r.uid)??[],f(u)}catch{f([])}}function f(t){const e=document.getElementById("conversations-list");if(!e)return;const a=y?t.filter(n=>{var o;return(((o=n.otherUser)==null?void 0:o.displayName)||"").toLowerCase().includes(y.toLowerCase())}):t;if(a.length===0){e.innerHTML=`
      <div class="conv-empty">
        <div class="conv-empty-icon">💬</div>
        <p class="conv-empty-text">${y?"No conversations match your search.":"No conversations yet. Start chatting!"}</p>
      </div>
    `;return}e.innerHTML=a.map(n=>q(n)).join(""),e.querySelectorAll(".conv-item").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.convId,o=n.dataset.otherUid,s=a.find(l=>l.id===i);s&&B(i,s.otherUser||{uid:o})})})}function q(t){var v,p;const e=t.otherUser||{},a=t.id===g,n=e.online??!1,i=t.unread??0,o=((v=t.lastMessage)==null?void 0:v.text)||"",s=M((p=t.lastMessage)==null?void 0:p.createdAt),l=e.photoURL?`<img src="${c(e.photoURL)}" alt="${c(e.displayName)}" loading="lazy" />`:`<div class="conv-avatar-fallback">${c(E(e.displayName))}</div>`;return`
    <div class="conv-item${a?" active":""}" role="listitem" tabindex="0"
         data-conv-id="${c(t.id)}" data-other-uid="${c(e.uid||"")}"
         aria-label="${c(e.displayName||"Unknown")}: ${c(o)}">
      <div class="conv-avatar">
        ${l}
        <span class="online-status-dot ${n?"online":"offline"}" aria-hidden="true"></span>
      </div>
      <div class="conv-body">
        <div class="conv-top">
          <span class="conv-name">${c(e.displayName||"Unknown")}</span>
          ${s?`<span class="conv-time">${c(s)}</span>`:""}
        </div>
        <div class="conv-bottom">
          <span class="conv-last-msg">${c(o)}</span>
          ${i>0?`<span class="conv-unread-badge" aria-label="${i} unread">${i}</span>`:""}
        </div>
      </div>
    </div>
  `}async function P(t){try{const e=await N(t),a=await T(r.uid,t),n={id:a};u.find(i=>i.id===a)||(u.unshift({id:a,otherUser:e}),f(u)),B(a,e)}catch{h.error("Could not open conversation.")}}function B(t,e){var a;g!==t&&(d==null||d(),d=null,g=t,m=e,document.querySelectorAll(".conv-item").forEach(n=>{n.classList.toggle("active",n.dataset.convId===t)}),j(e),d=A(t,n=>{W(n??[]),w()}),(a=document.getElementById("conversations-panel"))==null||a.classList.add("hidden"))}function j(t){const e=document.getElementById("chat-empty-state"),a=document.getElementById("chat-header"),n=document.getElementById("messages-container"),i=document.getElementById("message-input-area");e&&(e.style.display="none"),a&&(a.style.display="flex"),n&&(n.style.display="flex"),i&&(i.style.display="flex");const o=document.getElementById("chat-header-name"),s=document.getElementById("chat-header-avatar-fallback"),l=document.getElementById("chat-header-avatar");o&&(o.textContent=(t==null?void 0:t.displayName)||"Unknown"),s&&(s.textContent=E(t==null?void 0:t.displayName)),t!=null&&t.photoURL&&l&&(l.innerHTML=`<img src="${c(t.photoURL)}" alt="${c(t.displayName)}" style="width:100%;height:100%;object-fit:cover;" />`),K()}function W(t){const e=document.getElementById("messages-container");if(!e)return;const a=e.scrollHeight-e.scrollTop<=e.clientHeight+60;let n="",i=null;t.forEach(o=>{const s=o.senderId===r.uid,l=o.createdAt,v=l!=null&&l.toDate?l.toDate():new Date(l??Date.now()),p=v.toDateString();p!==i&&(n+=`
        <div class="msg-date-divider" role="separator">
          <span class="msg-date-label">${H(l)}</span>
        </div>
      `,i=p);const L=E(s?r.displayName:m==null?void 0:m.displayName),S=v.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});n+=`
      <div class="msg-row ${s?"sent":"received"}" aria-label="${s?"You":c((m==null?void 0:m.displayName)||"Other")}: ${c(o.text)}">
        ${s?"":`<div class="msg-avatar-wrap"><div class="msg-avatar-fallback">${c(L)}</div></div>`}
        <div class="msg-body">
          <div class="msg-bubble">${c(o.text)}</div>
          <div class="msg-meta">
            <span class="msg-time">${c(S)}</span>
          </div>
        </div>
        ${s?`<div class="msg-avatar-wrap"><div class="msg-avatar-fallback">${c(L)}</div></div>`:""}
      </div>
    `}),e.innerHTML=n,a&&w(!1)}function w(t=!0){const e=document.getElementById("messages-container");e&&e.scrollTo({top:e.scrollHeight,behavior:t?"smooth":"instant"})}function K(){const t=document.getElementById("send-btn"),e=document.getElementById("message-input"),a=t==null?void 0:t.cloneNode(!0),n=e==null?void 0:e.cloneNode(!0);t==null||t.replaceWith(a),e==null||e.replaceWith(n);const i=document.getElementById("send-btn"),o=document.getElementById("message-input");!i||!o||(i.addEventListener("click",()=>I()),o.addEventListener("keydown",s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),I())}),o.addEventListener("input",()=>{o.style.height="auto",o.style.height=`${Math.min(o.scrollHeight,160)}px`}))}async function I(){const t=document.getElementById("message-input"),e=t==null?void 0:t.value.trim();if(!(!e||!g)){t.value="",t.style.height="auto";try{await x(g,r.uid,e),w()}catch{h.error("Failed to send message. Please try again."),t&&(t.value=e)}}}function Y(){const t=document.getElementById("conversation-search");t==null||t.addEventListener("input",()=>{y=t.value,f(u)})}function z(){var t;(t=document.getElementById("back-btn"))==null||t.addEventListener("click",()=>{var e;(e=document.getElementById("conversations-panel"))==null||e.classList.remove("hidden"),g=null,m=null,d==null||d(),d=null,document.getElementById("chat-empty-state").style.display="",document.getElementById("chat-header").style.display="none",document.getElementById("messages-container").style.display="none",document.getElementById("message-input-area").style.display="none",document.querySelectorAll(".conv-item").forEach(a=>a.classList.remove("active"))})}var $;($=document.getElementById("sidebar-toggle"))==null||$.addEventListener("click",()=>{const t=document.getElementById("sidebar");t==null||t.classList.toggle("open")});function b(){d==null||d()}U().catch(t=>{console.error("Chat init failed:",t),h.error("Failed to load chat. Please refresh.")});
//# sourceMappingURL=chat-T9A5cK48.js.map
