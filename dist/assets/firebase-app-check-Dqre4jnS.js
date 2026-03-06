import{L as _,_ as T,C as m,r as y,E as M,j as x,k as O,D as v}from"./firebase-core-BFqPDSUV.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new Map,L={activated:!1,tokenObservers:[]};function a(e){return C.get(e)||Object.assign({},L)}const w={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(r,t,n,o,i){if(this.operation=r,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=o,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=o,o>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(r){this.stop();try{this.pending=new v,this.pending.promise.catch(t=>{}),await S(this.getNextRun(r)),this.pending.resolve(),await this.pending.promise,this.pending=new v,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(r){if(r)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function S(e){return new Promise(r=>{setTimeout(r,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},u=new M("appCheck","AppCheck",D);function I(e){if(!a(e).activated)throw u.create("use-before-activation",{appName:e.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="firebase-app-check-database",W=1,f="firebase-app-check-store";let p=null;function B(){return p||(p=new Promise((e,r)=>{try{const t=indexedDB.open($,W);t.onsuccess=n=>{e(n.target.result)},t.onerror=n=>{var o;r(u.create("storage-open",{originalErrorMessage:(o=n.target.error)===null||o===void 0?void 0:o.message}))},t.onupgradeneeded=n=>{const o=n.target.result;switch(n.oldVersion){case 0:o.createObjectStore(f,{keyPath:"compositeKey"})}}}catch(t){r(u.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),p)}function F(e,r){return K(z(e),r)}async function K(e,r){const n=(await B()).transaction(f,"readwrite"),i=n.objectStore(f).put({compositeKey:e,value:r});return new Promise((l,c)=>{i.onsuccess=s=>{l()},n.onerror=s=>{var d;c(u.create("storage-set",{originalErrorMessage:(d=s.target.error)===null||d===void 0?void 0:d.message}))}})}function z(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=new _("@firebase/app-check");function E(e,r){return x()?F(e,r).catch(t=>{g.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={error:"UNKNOWN_ERROR"};function U(e){return O.encodeString(JSON.stringify(e),!1)}async function k(e,r=!1){const t=e.app;I(t);const n=a(t);let o=n.token,i;if(o&&!h(o)&&(n.token=void 0,o=void 0),!o){const s=await n.cachedTokenPromise;s&&(h(s)?o=s:await E(t,void 0))}if(!r&&o&&h(o))return{token:o.token};let l=!1;try{n.exchangeTokenPromise||(n.exchangeTokenPromise=n.provider.getToken().finally(()=>{n.exchangeTokenPromise=void 0}),l=!0),o=await a(t).exchangeTokenPromise}catch(s){s.code==="appCheck/throttled"?g.warn(s.message):g.error(s),i=s}let c;return o?i?h(o)?c={token:o.token,internalError:i}:c=A(i):(c={token:o.token},n.token=o,await E(t,o)):c=A(i),l&&q(t,c),c}async function X(e){const r=e.app;I(r);const{provider:t}=a(r);{const{token:n}=await t.getToken();return{token:n}}}function j(e,r,t,n){const{app:o}=e,i=a(o),l={next:t,error:n,type:r};if(i.tokenObservers=[...i.tokenObservers,l],i.token&&h(i.token)){const c=i.token;Promise.resolve().then(()=>{t({token:c.token}),R(e)}).catch(()=>{})}i.cachedTokenPromise.then(()=>R(e))}function P(e,r){const t=a(e),n=t.tokenObservers.filter(o=>o.next!==r);n.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=n}function R(e){const{app:r}=e,t=a(r);let n=t.tokenRefresher;n||(n=V(e),t.tokenRefresher=n),!n.isRunning()&&t.isTokenAutoRefreshEnabled&&n.start()}function V(e){const{app:r}=e;return new N(async()=>{const t=a(r);let n;if(t.token?n=await k(e,!0):n=await k(e),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const t=a(r);if(t.token){let n=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const o=t.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,o),Math.max(0,n-Date.now())}else return 0},w.RETRIAL_MIN_WAIT,w.RETRIAL_MAX_WAIT)}function q(e,r){const t=a(e).tokenObservers;for(const n of t)try{n.type==="EXTERNAL"&&r.error!=null?n.error(r.error):n.next(r)}catch{}}function h(e){return e.expireTimeMillis-Date.now()>0}function A(e){return{token:U(H),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(r,t){this.app=r,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:r}=a(this.app);for(const t of r)P(this.app,t.next);return Promise.resolve()}}function J(e,r){return new Y(e,r)}function G(e){return{getToken:r=>k(e,r),getLimitedUseToken:()=>X(e),addTokenListener:r=>j(e,"INTERNAL",r),removeTokenListener:r=>P(e.app,r)}}const Q="@firebase/app-check",Z="0.8.8",ee="app-check",b="app-check-internal";function te(){T(new m(ee,e=>{const r=e.getProvider("app").getImmediate(),t=e.getProvider("heartbeat");return J(r,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,t)=>{e.getProvider(b).initialize()})),T(new m(b,e=>{const r=e.getProvider("app-check").getImmediate();return G(r)},"PUBLIC").setInstantiationMode("EXPLICIT")),y(Q,Z)}te();
//# sourceMappingURL=firebase-app-check-Dqre4jnS.js.map
