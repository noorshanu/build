import{aM as G,aN as ne,aA as ie}from"./index-ff3754df.js";import{b as le}from"./index-cc134824.js";const X=e=>typeof e=="object"&&e!==null,W=new WeakMap,x=new WeakSet,ce=(e=Object.is,t=(o,g)=>new Proxy(o,g),s=o=>X(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),a=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,g,y=a)=>{const I=l.get(o);if((I==null?void 0:I[0])===g)return I[1];const h=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return G(h,!0),l.set(o,[g,h]),Reflect.ownKeys(o).forEach(U=>{if(Object.getOwnPropertyDescriptor(h,U))return;const L=Reflect.get(o,U),D={value:L,enumerable:!0,configurable:!0};if(x.has(L))G(L,!1);else if(L instanceof Promise)delete D.value,D.get=()=>y(L);else if(W.has(L)){const[w,z]=W.get(L);D.value=c(w,z(),y)}Object.defineProperty(h,U,D)}),h},b=new WeakMap,p=[1,1],A=o=>{if(!X(o))throw new Error("object required");const g=b.get(o);if(g)return g;let y=p[0];const I=new Set,h=(i,n=++p[0])=>{y!==n&&(y=n,I.forEach(r=>r(i,n)))};let U=p[1];const L=(i=++p[1])=>(U!==i&&!I.size&&(U=i,w.forEach(([n])=>{const r=n[1](i);r>y&&(y=r)})),y),D=i=>(n,r)=>{const m=[...n];m[1]=[i,...m[1]],h(m,r)},w=new Map,z=(i,n)=>{if(I.size){const r=n[3](D(i));w.set(i,[n,r])}else w.set(i,[n])},F=i=>{var n;const r=w.get(i);r&&(w.delete(i),(n=r[1])==null||n.call(r))},re=i=>(I.add(i),I.size===1&&w.forEach(([r,m],P)=>{const R=r[3](D(P));w.set(P,[r,R])}),()=>{I.delete(i),I.size===0&&w.forEach(([r,m],P)=>{m&&(m(),w.set(P,[r]))})}),H=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),k=t(H,{deleteProperty(i,n){const r=Reflect.get(i,n);F(n);const m=Reflect.deleteProperty(i,n);return m&&h(["delete",[n],r]),m},set(i,n,r,m){const P=Reflect.has(i,n),R=Reflect.get(i,n,m);if(P&&(e(R,r)||b.has(r)&&e(R,b.get(r))))return!0;F(n),X(r)&&(r=ne(r)||r);let B=r;if(r instanceof Promise)r.then(C=>{r.status="fulfilled",r.value=C,h(["resolve",[n],C])}).catch(C=>{r.status="rejected",r.reason=C,h(["reject",[n],C])});else{!W.has(r)&&s(r)&&(B=A(r));const C=!x.has(B)&&W.get(B);C&&z(n,C)}return Reflect.set(i,n,B,m),h(["set",[n],r,R]),!0}});b.set(o,k);const ae=[H,L,c,re];return W.set(k,ae),Reflect.ownKeys(o).forEach(i=>{const n=Object.getOwnPropertyDescriptor(o,i);"value"in n&&(k[i]=o[i],delete n.value,delete n.writable),Object.defineProperty(H,i,n)}),k})=>[A,W,x,e,t,s,a,l,c,b,p],[de]=ce();function O(e={}){return de(e)}function T(e,t,s){const a=W.get(e);let l;const c=[],b=a[3];let p=!1;const o=b(g=>{if(c.push(g),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,p&&t(c.splice(0))}))});return p=!0,()=>{p=!1,o()}}function fe(e,t){const s=W.get(e),[a,l,c]=s;return c(a,l(),t)}const d=O({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),oe={state:d,subscribe(e){return T(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},u={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return u.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return u.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(u.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const l=encodeURIComponent(t);return`${a}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!u.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const l=encodeURIComponent(t);return`${a}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(u.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(u.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=oe.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},pe=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),f=O({enabled:pe,userSessionId:"",events:[],connectedWalletId:void 0}),ue={state:f,subscribe(e){return T(f.events,()=>e(fe(f.events[f.events.length-1])))},initialize(){f.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(f.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){f.connectedWalletId=e},click(e){if(f.enabled){const t={type:"CLICK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},track(e){if(f.enabled){const t={type:"TRACK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},view(e){if(f.enabled){const t={type:"VIEW",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}}},_=O({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),E={state:_,subscribe(e){return T(_,()=>e(_))},setChains(e){_.chains=e},setWalletConnectUri(e){_.walletConnectUri=e},setIsCustomDesktop(e){_.isCustomDesktop=e},setIsCustomMobile(e){_.isCustomMobile=e},setIsDataLoaded(e){_.isDataLoaded=e},setIsUiLoaded(e){_.isUiLoaded=e},setIsAuth(e){_.isAuth=e}},K=O({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),M={state:K,subscribe(e){return T(K,()=>e(K))},setConfig(e){var t,s;ue.initialize(),E.setChains(e.chains),E.setIsAuth(!!e.enableAuthMode),E.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),E.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),u.setModalVersionInStorage(),Object.assign(K,e)}},q="https://explorer-api.walletconnect.com";async function $(e,t){const s=new URL(e,q);return s.searchParams.append("projectId",M.state.projectId),Object.entries(t).forEach(([a,l])=>{l&&s.searchParams.append(a,String(l))}),(await fetch(s)).json()}const S={async getDesktopListings(e){return $("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return $("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return $("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return $("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${q}/w3m/v1/getWalletImage/${e}?projectId=${M.state.projectId}`},getAssetImageUrl(e){return`${q}/w3m/v1/getAssetImage/${e}?projectId=${M.state.projectId}`}};var be=Object.defineProperty,Q=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,Y=(e,t,s)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ie=(e,t)=>{for(var s in t||(t={}))me.call(t,s)&&Y(e,s,t[s]);if(Q)for(var s of Q(t))ge.call(t,s)&&Y(e,s,t[s]);return e};const Z=u.isMobile(),v=O({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),We={state:v,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=M.state;if(e==="NONE"||t==="ALL"&&!e)return v.recomendedWallets;if(u.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await S.getAllListings(s),l=Object.values(a);l.sort((c,b)=>{const p=e.indexOf(c.id),A=e.indexOf(b.id);return p-A}),v.recomendedWallets=l}else{const{chains:s,isAuth:a}=E.state,l=s==null?void 0:s.join(","),c=u.isArray(t),b={page:1,sdks:a?"auth_v1":void 0,entries:u.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:p}=Z?await S.getMobileListings(b):await S.getDesktopListings(b);v.recomendedWallets=Object.values(p)}return v.recomendedWallets},async getWallets(e){const t=Ie({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=M.state,{recomendedWallets:l}=v;if(a==="ALL")return v.wallets;l.length?t.excludedIds=l.map(y=>y.id).join(","):u.isArray(s)&&(t.excludedIds=s.join(",")),u.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),E.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:b}=e,{listings:p,total:A}=Z?await S.getMobileListings(t):await S.getDesktopListings(t),o=Object.values(p),g=b?"search":"wallets";return v[g]={listings:[...v[g].listings,...o],total:A,page:c??1},{listings:o,total:A}},getWalletImageUrl(e){return S.getWalletImageUrl(e)},getAssetImageUrl(e){return S.getAssetImageUrl(e)},resetSearch(){v.search={listings:[],total:0,page:1}}},j=O({open:!1}),J={state:j,subscribe(e){return T(j,()=>e(j))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:a}=E.state;if(E.setWalletConnectUri(e==null?void 0:e.uri),E.setChains(e==null?void 0:e.chains),oe.reset("ConnectWallet"),s&&a)j.open=!0,t();else{const l=setInterval(()=>{const c=E.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),j.open=!0,t())},200)}})},close(){j.open=!1}};var he=Object.defineProperty,ee=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,te=(e,t,s)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ye=(e,t)=>{for(var s in t||(t={}))we.call(t,s)&&te(e,s,t[s]);if(ee)for(var s of ee(t))Ee.call(t,s)&&te(e,s,t[s]);return e};function _e(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const N=O({themeMode:_e()?"dark":"light"}),se={state:N,subscribe(e){return T(N,()=>e(N))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(N.themeMode=t),s&&(N.themeVariables=ye({},s))}},V=O({open:!1,message:"",variant:"success"}),Oe={state:V,subscribe(e){return T(V,()=>e(V))},openToast(e,t){V.open=!0,V.message=e,V.variant=t},closeToast(){V.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=le.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));class ve{constructor(t){this.openModal=J.open,this.closeModal=J.close,this.subscribeModal=J.subscribe,this.setTheme=se.setThemeConfig,se.setThemeConfig(t),M.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await ie(()=>import("./index-3c7934db.js"),["assets/index-3c7934db.js","assets/if-defined-67dc93e2.js","assets/index-ff3754df.js","assets/index-87ba66ea.css","assets/index-cc134824.js"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),E.setIsUiLoaded(!0)}}}const De=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:ve},Symbol.toStringTag,{value:"Module"}));export{ue as $,M as C,We as G,oe as N,J as Q,se as X,Oe as Y,De as a,E as c,u as i};
