import{aN as F,aO as ae,aB as ie}from"./index-b5cfefbb.js";import{b as le}from"./index-cc134824.js";const Y=e=>typeof e=="object"&&e!==null,P=new WeakMap,B=new WeakSet,ce=(e=Object.is,t=(o,m)=>new Proxy(o,m),s=o=>Y(o)&&!B.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,m,_=r)=>{const g=l.get(o);if((g==null?void 0:g[0])===m)return g[1];const h=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return F(h,!0),l.set(o,[m,h]),Reflect.ownKeys(o).forEach(U=>{if(Object.getOwnPropertyDescriptor(h,U))return;const O=Reflect.get(o,U),D={value:O,enumerable:!0,configurable:!0};if(B.has(O))F(O,!1);else if(O instanceof Promise)delete D.value,D.get=()=>_(O);else if(P.has(O)){const[b,x]=P.get(O);D.value=c(b,x(),_)}Object.defineProperty(h,U,D)}),h},I=new WeakMap,f=[1,1],L=o=>{if(!Y(o))throw new Error("object required");const m=I.get(o);if(m)return m;let _=f[0];const g=new Set,h=(i,a=++f[0])=>{_!==a&&(_=a,g.forEach(n=>n(i,a)))};let U=f[1];const O=(i=++f[1])=>(U!==i&&!g.size&&(U=i,b.forEach(([a])=>{const n=a[1](i);n>_&&(_=n)})),_),D=i=>(a,n)=>{const E=[...a];E[1]=[i,...E[1]],h(E,n)},b=new Map,x=(i,a)=>{if(g.size){const n=a[3](D(i));b.set(i,[a,n])}else b.set(i,[a])},q=i=>{var a;const n=b.get(i);n&&(b.delete(i),(a=n[1])==null||a.call(n))},ne=i=>(g.add(i),g.size===1&&b.forEach(([n,E],S)=>{const j=n[3](D(S));b.set(S,[n,j])}),()=>{g.delete(i),g.size===0&&b.forEach(([n,E],S)=>{E&&(E(),b.set(S,[n]))})}),Q=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),k=t(Q,{deleteProperty(i,a){const n=Reflect.get(i,a);q(a);const E=Reflect.deleteProperty(i,a);return E&&h(["delete",[a],n]),E},set(i,a,n,E){const S=Reflect.has(i,a),j=Reflect.get(i,a,E);if(S&&(e(j,n)||I.has(n)&&e(j,I.get(n))))return!0;q(a),Y(n)&&(n=ae(n)||n);let H=n;if(n instanceof Promise)n.then(C=>{n.status="fulfilled",n.value=C,h(["resolve",[a],C])}).catch(C=>{n.status="rejected",n.reason=C,h(["reject",[a],C])});else{!P.has(n)&&s(n)&&(H=L(n));const C=!B.has(H)&&P.get(H);C&&x(a,C)}return Reflect.set(i,a,H,E),h(["set",[a],n,j]),!0}});I.set(o,k);const re=[Q,O,c,ne];return P.set(k,re),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(k[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(Q,i,a)}),k})=>[L,P,B,e,t,s,r,l,c,I,f],[de]=ce();function R(e={}){return de(e)}function W(e,t,s){const r=P.get(e);let l;const c=[],I=r[3];let f=!1;const o=I(m=>{if(c.push(m),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function ue(e,t){const s=P.get(e),[r,l,c]=s;return c(r,l(),t)}const d=R({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),oe={state:d,subscribe(e){return W(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=oe.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},fe=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=R({enabled:fe,userSessionId:"",events:[],connectedWalletId:void 0}),pe={state:u,subscribe(e){return W(u.events,()=>e(ue(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},y=R({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:y,subscribe(e){return W(y,()=>e(y))},setChains(e){y.chains=e},setWalletConnectUri(e){y.walletConnectUri=e},setIsCustomDesktop(e){y.isCustomDesktop=e},setIsCustomMobile(e){y.isCustomMobile=e},setIsDataLoaded(e){y.isDataLoaded=e},setIsUiLoaded(e){y.isUiLoaded=e},setIsAuth(e){y.isAuth=e}},K=R({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),V={state:K,subscribe(e){return W(K,()=>e(K))},setConfig(e){var t,s;pe.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),w.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(K,e)}},J="https://explorer-api.walletconnect.com";async function $(e,t){const s=new URL(e,J);return s.searchParams.append("projectId",V.state.projectId),Object.entries(t).forEach(([r,l])=>{l&&s.searchParams.append(r,String(l))}),(await fetch(s)).json()}const A={async getDesktopListings(e){return $("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return $("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return $("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return $("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${J}/w3m/v1/getWalletImage/${e}?projectId=${V.state.projectId}`},getAssetImageUrl(e){return`${J}/w3m/v1/getAssetImage/${e}?projectId=${V.state.projectId}`}};var Ie=Object.defineProperty,G=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,X=(e,t,s)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ge=(e,t)=>{for(var s in t||(t={}))Ee.call(t,s)&&X(e,s,t[s]);if(G)for(var s of G(t))me.call(t,s)&&X(e,s,t[s]);return e};const Z=p.isMobile(),v=R({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Pe={state:v,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=V.state;if(e==="NONE"||t==="ALL"&&!e)return v.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await A.getAllListings(s),l=Object.values(r);l.sort((c,I)=>{const f=e.indexOf(c.id),L=e.indexOf(I.id);return f-L}),v.recomendedWallets=l}else{const{chains:s,isAuth:r}=w.state,l=s==null?void 0:s.join(","),c=p.isArray(t),I={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=Z?await A.getMobileListings(I):await A.getDesktopListings(I);v.recomendedWallets=Object.values(f)}return v.recomendedWallets},async getWallets(e){const t=ge({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=V.state,{recomendedWallets:l}=v;if(r==="ALL")return v.wallets;l.length?t.excludedIds=l.map(_=>_.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:I}=e,{listings:f,total:L}=Z?await A.getMobileListings(t):await A.getDesktopListings(t),o=Object.values(f),m=I?"search":"wallets";return v[m]={listings:[...v[m].listings,...o],total:L,page:c??1},{listings:o,total:L}},getWalletImageUrl(e){return A.getWalletImageUrl(e)},getAssetImageUrl(e){return A.getAssetImageUrl(e)},resetSearch(){v.search={listings:[],total:0,page:1}}},M=R({open:!1}),z={state:M,subscribe(e){return W(M,()=>e(M))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=w.state;if(w.setWalletConnectUri(e==null?void 0:e.uri),w.setChains(e==null?void 0:e.chains),oe.reset("ConnectWallet"),s&&r)M.open=!0,t();else{const l=setInterval(()=>{const c=w.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),M.open=!0,t())},200)}})},close(){M.open=!1}};var he=Object.defineProperty,ee=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,te=(e,t,s)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_e=(e,t)=>{for(var s in t||(t={}))be.call(t,s)&&te(e,s,t[s]);if(ee)for(var s of ee(t))we.call(t,s)&&te(e,s,t[s]);return e};function ye(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const N=R({themeMode:ye()?"dark":"light"}),se={state:N,subscribe(e){return W(N,()=>e(N))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(N.themeMode=t),s&&(N.themeVariables=_e({},s))}},T=R({open:!1,message:"",variant:"success"}),Re={state:T,subscribe(e){return W(T,()=>e(T))},openToast(e,t){T.open=!0,T.message=e,T.variant=t},closeToast(){T.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=le.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));class ve{constructor(t){this.openModal=z.open,this.closeModal=z.close,this.subscribeModal=z.subscribe,this.setTheme=se.setThemeConfig,se.setThemeConfig(t),V.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await ie(()=>import("./index-56665399.js"),["assets/index-56665399.js","assets/if-defined-028f16f6.js","assets/index-b5cfefbb.js","assets/index-7f8cb5e7.css","assets/index-cc134824.js"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),w.setIsUiLoaded(!0)}}}const De=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:ve},Symbol.toStringTag,{value:"Module"}));export{pe as $,V as C,Pe as G,oe as N,z as Q,se as X,Re as Y,De as a,w as c,p as i};