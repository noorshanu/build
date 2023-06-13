import{h as Lr,z as qr,b as Ar,A as Ur,B as $r,C as Pr,c as Dr,D as jr,F as Hr,G as Wr,I as Br,K as Fr,e as zr,n as Qr,j as Vr,g as Jr,L as Gr,s as Yr,f as Kr,a as Zr,d as Xr,l as te,M as eo,E as Lt,o as ct,J as lt,H as to}from"./http-8a54cd97.js";import{h as Ae,g as qt,j as no}from"./index-f2644848.js";import{b as ro}from"./browser-e933942f.js";const Ee="Session currently connected",D="Session currently disconnected",oo="Session Rejected",io="Missing JSON RPC response",so='JSON-RPC success response must include "result" field',ao='JSON-RPC error response must include "error" field',co='JSON RPC request must have valid "method" value',lo='JSON RPC request must have valid "id" value',uo="Missing one of the required parameters: bridge / uri / session",ut="JSON RPC response format is invalid",_o="URI format is invalid",fo="QRCode Modal not provided",_t="User close QRCode Modal",ho=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],po=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Ue=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...po],Ie="WALLETCONNECT_DEEPLINK_CHOICE",mo={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var At=$e;$e.strict=Ut;$e.loose=$t;var go=Object.prototype.toString,vo={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function $e(t){return Ut(t)||$t(t)}function Ut(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function $t(t){return vo[go.call(t)]}const yo=Ae(At);var wo=At.strict,bo=function(e){if(wo(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const ko=Ae(bo),Pe="hex",De="utf8",Eo="binary",So="buffer",Co="array",xo="typed-array",Io="array-buffer",he="0";function z(t){return new Uint8Array(t)}function je(t,e=!1){const n=t.toString(Pe);return e?ne(n):n}function He(t){return t.toString(De)}function Pt(t){return t.readUIntBE(0,t.length)}function J(t){return ko(t)}function U(t,e=!1){return je(J(t),e)}function Dt(t){return He(J(t))}function jt(t){return Pt(J(t))}function We(t){return Buffer.from(Q(t),Pe)}function $(t){return z(We(t))}function Ro(t){return He(We(t))}function To(t){return jt($(t))}function Be(t){return Buffer.from(t,De)}function Ht(t){return z(Be(t))}function Oo(t,e=!1){return je(Be(t),e)}function No(t){const e=parseInt(t,10);return Go(Jo(e),"Number can only safely store up to 53 bits"),e}function Mo(t){return Uo(Fe(t))}function Lo(t){return ze(Fe(t))}function qo(t,e){return $o(Fe(t),e)}function Ao(t){return`${t}`}function Fe(t){const e=(t>>>0).toString(2);return Ve(e)}function Uo(t){return J(ze(t))}function ze(t){return new Uint8Array(Bo(t).map(e=>parseInt(e,2)))}function $o(t,e){return U(ze(t),e)}function Po(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function Wt(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function pe(t){return Buffer.isBuffer(t)}function Qe(t){return yo.strict(t)&&!pe(t)}function Bt(t){return!Qe(t)&&!pe(t)&&typeof t.byteLength<"u"}function Do(t){return pe(t)?So:Qe(t)?xo:Bt(t)?Io:Array.isArray(t)?Co:typeof t}function jo(t){return Po(t)?Eo:Wt(t)?Pe:De}function Ho(...t){return Buffer.concat(t)}function Ft(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function Wo(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function Bo(t,e=8){const n=Ve(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function Ve(t,e=8,n=he){return Fo(t,Wo(t.length,e),n)}function Fo(t,e,n=he){return Yo(t,e,!0,n)}function Q(t){return t.replace(/^0x/,"")}function ne(t){return t.startsWith("0x")?t:`0x${t}`}function zo(t){return t=Q(t),t=Ve(t,2),t&&(t=ne(t)),t}function Qo(t){const e=t.startsWith("0x");return t=Q(t),t=t.startsWith(he)?t.substring(1):t,e?ne(t):t}function Vo(t){return typeof t>"u"}function Jo(t){return!Vo(t)}function Go(t,e){if(!t)throw new Error(e)}function Yo(t,e,n,r=he){const o=e-t.length;let i=t;if(o>0){const c=r.repeat(o);i=n?c+t:t+c}return i}function le(t){return J(new Uint8Array(t))}function Ko(t){return Dt(new Uint8Array(t))}function zt(t,e){return U(new Uint8Array(t),!e)}function Zo(t){return jt(new Uint8Array(t))}function Xo(...t){return $(t.map(e=>U(new Uint8Array(e))).join("")).buffer}function Qt(t){return z(t).buffer}function ei(t){return He(t)}function ti(t,e){return je(t,!e)}function ni(t){return Pt(t)}function ri(...t){return Ho(...t)}function oi(t){return Ht(t).buffer}function ii(t){return Be(t)}function si(t,e){return Oo(t,!e)}function ai(t){return No(t)}function ci(t){return We(t)}function Vt(t){return $(t).buffer}function li(t){return Ro(t)}function ui(t){return To(t)}function _i(t){return Mo(t)}function di(t){return Lo(t).buffer}function fi(t){return Ao(t)}function Jt(t,e){return qo(Number(t),!e)}const hi=Ur,pi=$r,mi=Pr,gi=Dr,vi=jr,Gt=Ar,yi=Hr,Yt=Lr,wi=Wr,bi=Br,ki=Fr,me=qr;function ge(t){return zr(t)}function ve(){const t=ge();return t&&t.os?t.os:void 0}function Kt(){const t=ve();return t?t.toLowerCase().includes("android"):!1}function Zt(){const t=ve();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function Xt(){return ve()?Kt()||Zt():!1}function en(){const t=ge();return t&&t.name?t.name.toLowerCase()==="node":!1}function tn(){return!en()&&!!Gt()}const nn=Qr,rn=Vr;function Je(t,e){const n=rn(e),r=me();r&&r.setItem(t,n)}function Ge(t){let e=null,n=null;const r=me();return r&&(n=r.getItem(t)),e=n&&nn(n),e}function Ye(t){const e=me();e&&e.removeItem(t)}function Re(){return Jr()}function Ei(t){return zo(t)}function Si(t){return ne(t)}function Ci(t){return Q(t)}function xi(t){return Qo(ne(t))}const on=Gr;function se(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Ii(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function sn(t,e){let n;const r=mo[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function an(t,e){let n;const r=sn(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function Ri(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Ti(t){const e=t.href.split("?")[0];Je(Ie,Object.assign(Object.assign({},t),{href:e}))}function cn(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Oi(t,e){let n=t;return e&&(n=e.map(r=>cn(t,r)).filter(Boolean)),n}function Ni(t,e){return async(...r)=>new Promise((o,i)=>{const c=(_,d)=>{(_===null||typeof _>"u")&&i(_),o(d)};t.apply(e,[...r,c])})}function ln(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const un="https://registry.walletconnect.com";function Mi(){return un+"/api/v2/wallets"}function Li(){return un+"/api/v2/dapps"}function _n(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function qi(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>_n(n,e))}var Ke={};(function(t){const e=Zr,n=Xr,r=Yr,o=Kr,i=a=>a==null;function c(a){switch(a.arrayFormat){case"index":return l=>(h,u)=>{const v=h.length;return u===void 0||a.skipNull&&u===null||a.skipEmptyString&&u===""?h:u===null?[...h,[m(l,a),"[",v,"]"].join("")]:[...h,[m(l,a),"[",m(v,a),"]=",m(u,a)].join("")]};case"bracket":return l=>(h,u)=>u===void 0||a.skipNull&&u===null||a.skipEmptyString&&u===""?h:u===null?[...h,[m(l,a),"[]"].join("")]:[...h,[m(l,a),"[]=",m(u,a)].join("")];case"comma":case"separator":return l=>(h,u)=>u==null||u.length===0?h:h.length===0?[[m(l,a),"=",m(u,a)].join("")]:[[h,m(u,a)].join(a.arrayFormatSeparator)];default:return l=>(h,u)=>u===void 0||a.skipNull&&u===null||a.skipEmptyString&&u===""?h:u===null?[...h,m(l,a)]:[...h,[m(l,a),"=",m(u,a)].join("")]}}function _(a){let l;switch(a.arrayFormat){case"index":return(h,u,v)=>{if(l=/\[(\d*)\]$/.exec(h),h=h.replace(/\[\d*\]$/,""),!l){v[h]=u;return}v[h]===void 0&&(v[h]={}),v[h][l[1]]=u};case"bracket":return(h,u,v)=>{if(l=/(\[\])$/.exec(h),h=h.replace(/\[\]$/,""),!l){v[h]=u;return}if(v[h]===void 0){v[h]=[u];return}v[h]=[].concat(v[h],u)};case"comma":case"separator":return(h,u,v)=>{const E=typeof u=="string"&&u.includes(a.arrayFormatSeparator),w=typeof u=="string"&&!E&&s(u,a).includes(a.arrayFormatSeparator);u=w?s(u,a):u;const C=E||w?u.split(a.arrayFormatSeparator).map(T=>s(T,a)):u===null?u:s(u,a);v[h]=C};default:return(h,u,v)=>{if(v[h]===void 0){v[h]=u;return}v[h]=[].concat(v[h],u)}}}function d(a){if(typeof a!="string"||a.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function m(a,l){return l.encode?l.strict?e(a):encodeURIComponent(a):a}function s(a,l){return l.decode?n(a):a}function b(a){return Array.isArray(a)?a.sort():typeof a=="object"?b(Object.keys(a)).sort((l,h)=>Number(l)-Number(h)).map(l=>a[l]):a}function g(a){const l=a.indexOf("#");return l!==-1&&(a=a.slice(0,l)),a}function p(a){let l="";const h=a.indexOf("#");return h!==-1&&(l=a.slice(h)),l}function k(a){a=g(a);const l=a.indexOf("?");return l===-1?"":a.slice(l+1)}function I(a,l){return l.parseNumbers&&!Number.isNaN(Number(a))&&typeof a=="string"&&a.trim()!==""?a=Number(a):l.parseBooleans&&a!==null&&(a.toLowerCase()==="true"||a.toLowerCase()==="false")&&(a=a.toLowerCase()==="true"),a}function S(a,l){l=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},l),d(l.arrayFormatSeparator);const h=_(l),u=Object.create(null);if(typeof a!="string"||(a=a.trim().replace(/^[?#&]/,""),!a))return u;for(const v of a.split("&")){if(v==="")continue;let[E,w]=r(l.decode?v.replace(/\+/g," "):v,"=");w=w===void 0?null:["comma","separator"].includes(l.arrayFormat)?w:s(w,l),h(s(E,l),w,u)}for(const v of Object.keys(u)){const E=u[v];if(typeof E=="object"&&E!==null)for(const w of Object.keys(E))E[w]=I(E[w],l);else u[v]=I(E,l)}return l.sort===!1?u:(l.sort===!0?Object.keys(u).sort():Object.keys(u).sort(l.sort)).reduce((v,E)=>{const w=u[E];return w&&typeof w=="object"&&!Array.isArray(w)?v[E]=b(w):v[E]=w,v},Object.create(null))}t.extract=k,t.parse=S,t.stringify=(a,l)=>{if(!a)return"";l=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},l),d(l.arrayFormatSeparator);const h=w=>l.skipNull&&i(a[w])||l.skipEmptyString&&a[w]==="",u=c(l),v={};for(const w of Object.keys(a))h(w)||(v[w]=a[w]);const E=Object.keys(v);return l.sort!==!1&&E.sort(l.sort),E.map(w=>{const C=a[w];return C===void 0?"":C===null?m(w,l):Array.isArray(C)?C.reduce(u(w),[]).join("&"):m(w,l)+"="+m(C,l)}).filter(w=>w.length>0).join("&")},t.parseUrl=(a,l)=>{l=Object.assign({decode:!0},l);const[h,u]=r(a,"#");return Object.assign({url:h.split("?")[0]||"",query:S(k(a),l)},l&&l.parseFragmentIdentifier&&u?{fragmentIdentifier:s(u,l)}:{})},t.stringifyUrl=(a,l)=>{l=Object.assign({encode:!0,strict:!0},l);const h=g(a.url).split("?")[0]||"",u=t.extract(a.url),v=t.parse(u,{sort:!1}),E=Object.assign(v,a.query);let w=t.stringify(E,l);w&&(w=`?${w}`);let C=p(a.url);return a.fragmentIdentifier&&(C=`#${m(a.fragmentIdentifier,l)}`),`${h}${w}${C}`},t.pick=(a,l,h)=>{h=Object.assign({parseFragmentIdentifier:!0},h);const{url:u,query:v,fragmentIdentifier:E}=t.parseUrl(a,h);return t.stringifyUrl({url:u,query:o(v,l),fragmentIdentifier:E},h)},t.exclude=(a,l,h)=>{const u=Array.isArray(l)?v=>!l.includes(v):(v,E)=>!l(v,E);return t.pick(a,u,h)}})(Ke);function dn(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function fn(t,e){let n=Ze(t);return n=Object.assign(Object.assign({},n),e),t=hn(n),t}function Ze(t){return Ke.parse(t)}function hn(t){return Ke.stringify(t)}function pn(t){return typeof t.bridge<"u"}function mn(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(b){const g="@",p=b.split(g);return{handshakeTopic:p[0],version:parseInt(p[1],10)}}const c=i(o),_=typeof n<"u"?t.substr(n):"";function d(b){const g=Ze(b);return{key:g.key||"",bridge:g.bridge||""}}const m=d(_);return Object.assign(Object.assign({protocol:r},c),m)}function Ai(t){return t===""||typeof t=="string"&&t.trim()===""}function Ui(t){return!(t&&t.length)}function $i(t){return pe(t)}function Pi(t){return Qe(t)}function Di(t){return Bt(t)}function ji(t){return Do(t)}function Hi(t){return jo(t)}function Wi(t,e){return Wt(t,e)}function Bi(t){return typeof t.params=="object"}function gn(t){return typeof t.method<"u"}function B(t){return typeof t.result<"u"}function Z(t){return typeof t.error<"u"}function Te(t){return typeof t.event<"u"}function vn(t){return ho.includes(t)||t.startsWith("wc_")}function yn(t){return t.method.startsWith("wc_")?!0:!Ue.includes(t.method)}const Fi=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Si,appendToQueryString:fn,concatArrayBuffers:Xo,concatBuffers:ri,convertArrayBufferToBuffer:le,convertArrayBufferToHex:zt,convertArrayBufferToNumber:Zo,convertArrayBufferToUtf8:Ko,convertBufferToArrayBuffer:Qt,convertBufferToHex:ti,convertBufferToNumber:ni,convertBufferToUtf8:ei,convertHexToArrayBuffer:Vt,convertHexToBuffer:ci,convertHexToNumber:ui,convertHexToUtf8:li,convertNumberToArrayBuffer:di,convertNumberToBuffer:_i,convertNumberToHex:Jt,convertNumberToUtf8:fi,convertUtf8ToArrayBuffer:oi,convertUtf8ToBuffer:ii,convertUtf8ToHex:si,convertUtf8ToNumber:ai,detectEnv:ge,detectOS:ve,formatIOSMobile:Ri,formatMobileRegistry:qi,formatMobileRegistryEntry:_n,formatQueryString:hn,formatRpcError:ln,getClientMeta:Re,getCrypto:bi,getCryptoOrThrow:wi,getDappRegistryUrl:Li,getDocument:gi,getDocumentOrThrow:mi,getEncoding:Hi,getFromWindow:hi,getFromWindowOrThrow:pi,getInfuraRpcUrl:sn,getLocal:Ge,getLocalStorage:me,getLocalStorageOrThrow:ki,getLocation:Yt,getLocationOrThrow:yi,getMobileLinkRegistry:Oi,getMobileRegistryEntry:cn,getNavigator:Gt,getNavigatorOrThrow:vi,getQueryString:dn,getRpcUrl:an,getType:ji,getWalletRegistryUrl:Mi,isAndroid:Kt,isArrayBuffer:Di,isBrowser:tn,isBuffer:$i,isEmptyArray:Ui,isEmptyString:Ai,isHexString:Wi,isIOS:Zt,isInternalEvent:Te,isJsonRpcRequest:gn,isJsonRpcResponseError:Z,isJsonRpcResponseSuccess:B,isJsonRpcSubscription:Bi,isMobile:Xt,isNode:en,isReservedEvent:vn,isSilentPayload:yn,isTypedArray:Pi,isWalletConnectSession:pn,logDeprecationWarning:Ii,parseQueryString:Ze,parseWalletConnectUri:mn,payloadId:on,promisify:Ni,removeHexLeadingZeros:xi,removeHexPrefix:Ci,removeLocal:Ye,safeJsonParse:nn,safeJsonStringify:rn,sanitizeHex:Ei,saveMobileLinkInfo:Ti,setLocal:Je,uuid:se},Symbol.toStringTag,{value:"Module"}));class zi{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const Qi=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class Vi{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new zi,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=Ji(this._url,this._protocol,this._version);if(this._nextSocket=new Qi(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function Ji(t,e,n){var r,o;const c=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),_=tn()?{protocol:e,version:n,env:"browser",host:((r=Yt())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=ge())===null||o===void 0?void 0:o.name)||""},d=fn(dn(c[1]||""),_);return c[0]+"?"+d}class Gi{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;gn(e)?r=e.method:B(e)||Z(e)?r=`response:${e.id}`:Te(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!vn(r)&&!Te(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(Z(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class Yi{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=Ge(this.storageId);return n&&pn(n)&&(e=n),e}setSession(e){return Je(this.storageId,e),e}removeSession(){Ye(this.storageId)}}const Ki="walletconnect.org",Zi="abcdefghijklmnopqrstuvwxyz0123456789",wn=Zi.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function Xi(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function es(t){return Xi(t).split(".").slice(-2).join(".")}function ts(){return Math.floor(Math.random()*wn.length)}function ns(){return wn[ts()]}function rs(t){return es(t)===Ki}function os(t){return rs(t)?ns():t}class is{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new Gi,this._clientMeta=Re()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new Yi(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...Ue,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(uo);e.connectorOpts.bridge&&(this.bridge=os(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new Vi({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=Vt(e);this._key=n}get key(){return this._key?zt(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=se()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=Re()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=se(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(_t)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(fo);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(_t))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(Ee);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=se(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(Ee);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(Ee);const n=e&&e.message?e.message:oo,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(D);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(D);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(D);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(D);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(D);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(D);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,c)=>{if(i){o(i);return}if(!c)throw new Error(io);r(c)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(D);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return Jt(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(B(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(so)}rejectRequest(e){if(Z(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(ao)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,c=JSON.stringify(o),_=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:yn(r);this._transport.send(c,i,_)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),i=!0;this._transport.send(o,r,i)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(co);return{id:typeof e.id>"u"?on():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(lo);const n={id:e.id,jsonrpc:"2.0"};if(Z(e)){const r=ln(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(B(e))return Object.assign(Object.assign({},n),e);throw new Error(ut)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),Ye(Ie)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}B(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}B(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(ut))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(Xt()&&this._signingMethods.includes(r.method)){const o=Ge(Ie);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=mn(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(_o)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function ss(t){return te.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const bn=256,kn=bn,as=bn,P="AES-CBC",cs=`SHA-${kn}`,Oe="HMAC",ls="encrypt",us="decrypt",_s="sign",ds="verify";function fs(t){return t===P?{length:kn,name:P}:{hash:{name:cs},name:Oe}}function hs(t){return t===P?[ls,us]:[_s,ds]}async function Xe(t,e=P){return te.getSubtleCrypto().importKey("raw",t,fs(e),!0,hs(e))}async function ps(t,e,n){const r=te.getSubtleCrypto(),o=await Xe(e,P),i=await r.encrypt({iv:t,name:P},o,n);return new Uint8Array(i)}async function ms(t,e,n){const r=te.getSubtleCrypto(),o=await Xe(e,P),i=await r.decrypt({iv:t,name:P},o,n);return new Uint8Array(i)}async function gs(t,e){const n=te.getSubtleCrypto(),r=await Xe(t,Oe),o=await n.sign({length:as,name:Oe},r,e);return new Uint8Array(o)}function vs(t,e,n){return ps(t,e,n)}function ys(t,e,n){return ms(t,e,n)}async function En(t,e){return await gs(t,e)}async function Sn(t){const e=(t||256)/8,n=ss(e);return Qt(J(n))}async function Cn(t,e){const n=$(t.data),r=$(t.iv),o=$(t.hmac),i=U(o,!1),c=Ft(n,r),_=await En(e,c),d=U(_,!1);return Q(i)===Q(d)}async function ws(t,e,n){const r=z(le(e)),o=n||await Sn(128),i=z(le(o)),c=U(i,!1),_=JSON.stringify(t),d=Ht(_),m=await vs(i,r,d),s=U(m,!1),b=Ft(m,i),g=await En(r,b),p=U(g,!1);return{data:s,hmac:p,iv:c}}async function bs(t,e){const n=z(le(e));if(!n)throw new Error("Missing key: required for decryption");if(!await Cn(t,n))return null;const o=$(t.data),i=$(t.iv),c=await ys(i,n,o),_=Dt(c);let d;try{d=JSON.parse(_)}catch{return null}return d}const ks=Object.freeze(Object.defineProperty({__proto__:null,decrypt:bs,encrypt:ws,generateKey:Sn,verifyHmac:Cn},Symbol.toStringTag,{value:"Module"}));class Es extends is{constructor(e,n){super({cryptoLib:ks,connectorOpts:e,pushServerOpts:n})}}const Ss=qt(Fi);var re,y,xn,j,dt,In,Ne,Rn,ue={},Tn=[],Cs=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ye=Array.isArray;function M(t,e){for(var n in e)t[n]=e[n];return t}function On(t){var e=t.parentNode;e&&e.removeChild(t)}function N(t,e,n){var r,o,i,c={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?re.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return Y(t,c,r,o,null)}function Y(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++xn};return o==null&&y.vnode!=null&&y.vnode(i),i}function Nn(){return{current:null}}function q(t){return t.children}function O(t,e){this.props=t,this.context=e}function X(t,e){if(e==null)return t.__?X(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?X(t):null}function Mn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Mn(t)}}function Me(t){(!t.__d&&(t.__d=!0)&&j.push(t)&&!_e.__r++||dt!==y.debounceRendering)&&((dt=y.debounceRendering)||In)(_e)}function _e(){var t,e,n,r,o,i,c,_;for(j.sort(Ne);t=j.shift();)t.__d&&(e=j.length,r=void 0,o=void 0,c=(i=(n=t).__v).__e,(_=n.__P)&&(r=[],(o=M({},i)).__v=i.__v+1,et(_,i,o,n.__n,_.ownerSVGElement!==void 0,i.__h!=null?[c]:null,r,c??X(i),i.__h),$n(r,i),i.__e!=c&&Mn(i)),j.length>e&&j.sort(Ne));_e.__r=0}function Ln(t,e,n,r,o,i,c,_,d,m){var s,b,g,p,k,I,S,a=r&&r.__k||Tn,l=a.length;for(n.__k=[],s=0;s<e.length;s++)if((p=n.__k[s]=(p=e[s])==null||typeof p=="boolean"||typeof p=="function"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Y(null,p,null,null,p):ye(p)?Y(q,{children:p},null,null,null):p.__b>0?Y(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(g=a[s])===null||g&&p.key==g.key&&p.type===g.type)a[s]=void 0;else for(b=0;b<l;b++){if((g=a[b])&&p.key==g.key&&p.type===g.type){a[b]=void 0;break}g=null}et(t,p,g=g||ue,o,i,c,_,d,m),k=p.__e,(b=p.ref)&&g.ref!=b&&(S||(S=[]),g.ref&&S.push(g.ref,null,p),S.push(b,p.__c||k,p)),k!=null?(I==null&&(I=k),typeof p.type=="function"&&p.__k===g.__k?p.__d=d=qn(p,d,t):d=An(t,p,g,a,k,d),typeof n.type=="function"&&(n.__d=d)):d&&g.__e==d&&d.parentNode!=t&&(d=X(g))}for(n.__e=I,s=l;s--;)a[s]!=null&&(typeof n.type=="function"&&a[s].__e!=null&&a[s].__e==n.__d&&(n.__d=Un(r).nextSibling),Dn(a[s],a[s]));if(S)for(s=0;s<S.length;s++)Pn(S[s],S[++s],S[++s])}function qn(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e=typeof r.type=="function"?qn(r,e,n):An(n,r,r,o,r.__e,e));return e}function L(t,e){return e=e||[],t==null||typeof t=="boolean"||(ye(t)?t.some(function(n){L(n,e)}):e.push(t)),e}function An(t,e,n,r,o,i){var c,_,d;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==t)t.appendChild(o),c=null;else{for(_=i,d=0;(_=_.nextSibling)&&d<r.length;d+=1)if(_==o)break e;t.insertBefore(o,i),c=i}return c!==void 0?c:o.nextSibling}function Un(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=Un(n)))return r}return null}function xs(t,e,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in e||de(t,i,null,n[i],r);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||de(t,i,e[i],n[i],r)}function ft(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Cs.test(e)?n:n+"px"}function de(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ft(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ft(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?pt:ht,i):t.removeEventListener(e,i?pt:ht,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function ht(t){return this.l[t.type+!1](y.event?y.event(t):t)}function pt(t){return this.l[t.type+!0](y.event?y.event(t):t)}function et(t,e,n,r,o,i,c,_,d){var m,s,b,g,p,k,I,S,a,l,h,u,v,E,w,C=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,_=e.__e=n.__e,e.__h=null,i=[_]),(m=y.__b)&&m(e);try{e:if(typeof C=="function"){if(S=e.props,a=(m=C.contextType)&&r[m.__c],l=m?a?a.props.value:m.__:r,n.__c?I=(s=e.__c=n.__c).__=s.__E:("prototype"in C&&C.prototype.render?e.__c=s=new C(S,l):(e.__c=s=new O(S,l),s.constructor=C,s.render=Rs),a&&a.sub(s),s.props=S,s.state||(s.state={}),s.context=l,s.__n=r,b=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),C.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=M({},s.__s)),M(s.__s,C.getDerivedStateFromProps(S,s.__s))),g=s.props,p=s.state,s.__v=e,b)C.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(C.getDerivedStateFromProps==null&&S!==g&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(S,l),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(S,s.__s,l)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(s.props=S,s.state=s.__s,s.__d=!1),s.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),h=0;h<s._sb.length;h++)s.__h.push(s._sb[h]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(S,s.__s,l),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(g,p,k)})}if(s.context=l,s.props=S,s.__P=t,u=y.__r,v=0,"prototype"in C&&C.prototype.render){for(s.state=s.__s,s.__d=!1,u&&u(e),m=s.render(s.props,s.state,s.context),E=0;E<s._sb.length;E++)s.__h.push(s._sb[E]);s._sb=[]}else do s.__d=!1,u&&u(e),m=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++v<25);s.state=s.__s,s.getChildContext!=null&&(r=M(M({},r),s.getChildContext())),b||s.getSnapshotBeforeUpdate==null||(k=s.getSnapshotBeforeUpdate(g,p)),Ln(t,ye(w=m!=null&&m.type===q&&m.key==null?m.props.children:m)?w:[w],e,n,r,o,i,c,_,d),s.base=e.__e,e.__h=null,s.__h.length&&c.push(s),I&&(s.__E=s.__=null),s.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Is(n.__e,e,n,r,o,i,c,d);(m=y.diffed)&&m(e)}catch(T){e.__v=null,(d||i!=null)&&(e.__e=_,e.__h=!!d,i[i.indexOf(_)]=null),y.__e(T,e,n)}}function $n(t,e){y.__c&&y.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){y.__e(r,n.__v)}})}function Is(t,e,n,r,o,i,c,_){var d,m,s,b=n.props,g=e.props,p=e.type,k=0;if(p==="svg"&&(o=!0),i!=null){for(;k<i.length;k++)if((d=i[k])&&"setAttribute"in d==!!p&&(p?d.localName===p:d.nodeType===3)){t=d,i[k]=null;break}}if(t==null){if(p===null)return document.createTextNode(g);t=o?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,g.is&&g),i=null,_=!1}if(p===null)b===g||_&&t.data===g||(t.data=g);else{if(i=i&&re.call(t.childNodes),m=(b=n.props||ue).dangerouslySetInnerHTML,s=g.dangerouslySetInnerHTML,!_){if(i!=null)for(b={},k=0;k<t.attributes.length;k++)b[t.attributes[k].name]=t.attributes[k].value;(s||m)&&(s&&(m&&s.__html==m.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(xs(t,g,b,o,_),s)e.__k=[];else if(Ln(t,ye(k=e.props.children)?k:[k],e,n,r,o&&p!=="foreignObject",i,c,i?i[0]:n.__k&&X(n,0),_),i!=null)for(k=i.length;k--;)i[k]!=null&&On(i[k]);_||("value"in g&&(k=g.value)!==void 0&&(k!==t.value||p==="progress"&&!k||p==="option"&&k!==b.value)&&de(t,"value",k,b.value,!1),"checked"in g&&(k=g.checked)!==void 0&&k!==t.checked&&de(t,"checked",k,b.checked,!1))}return t}function Pn(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){y.__e(r,n)}}function Dn(t,e,n){var r,o;if(y.unmount&&y.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Pn(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){y.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Dn(r[o],e,n||typeof t.type!="function");n||t.__e==null||On(t.__e),t.__=t.__e=t.__d=void 0}function Rs(t,e,n){return this.constructor(t,n)}function ee(t,e,n){var r,o,i;y.__&&y.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],et(e,t=(!r&&n||e).__k=N(q,null,[t]),o||ue,ue,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?re.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r),$n(i,t)}function jn(t,e){ee(t,e,jn)}function Ts(t,e,n){var r,o,i,c,_=M({},t.props);for(i in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)i=="key"?r=e[i]:i=="ref"?o=e[i]:_[i]=e[i]===void 0&&c!==void 0?c[i]:e[i];return arguments.length>2&&(_.children=arguments.length>3?re.call(arguments,2):n),Y(t.type,_,r||t.key,o||t.ref,null)}function Hn(t,e){var n={__c:e="__cC"+Rn++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(_){_.__e=!0,Me(_)})},this.sub=function(c){o.push(c);var _=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),_&&_.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}re=Tn.slice,y={__e:function(t,e,n,r){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),c=o.__d),c)return o.__E=o}catch(_){t=_}throw t}},xn=0,O.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=M({},this.state),typeof t=="function"&&(t=t(M({},n),this.props)),t&&M(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Me(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Me(this))},O.prototype.render=q,j=[],In=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ne=function(t,e){return t.__v.__b-e.__v.__b},_e.__r=0,Rn=0;var A,x,Se,mt,V=0,Wn=[],ae=[],gt=y.__b,vt=y.__r,yt=y.diffed,wt=y.__c,bt=y.unmount;function H(t,e){y.__h&&y.__h(x,t,V||e),V=0;var n=x.__H||(x.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:ae}),n.__[t]}function we(t){return V=1,tt(Gn,t)}function tt(t,e,n){var r=H(A++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Gn(void 0,e),function(_){var d=r.__N?r.__N[0]:r.__[0],m=r.t(d,_);d!==m&&(r.__N=[m,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.u)){var o=function(_,d,m){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(g){return g.__c});if(s.every(function(g){return!g.__N}))return!i||i.call(this,_,d,m);var b=!1;return s.forEach(function(g){if(g.__N){var p=g.__[0];g.__=g.__N,g.__N=void 0,p!==g.__[0]&&(b=!0)}}),!(!b&&r.__c.props===_)&&(!i||i.call(this,_,d,m))};x.u=!0;var i=x.shouldComponentUpdate,c=x.componentWillUpdate;x.componentWillUpdate=function(_,d,m){if(this.__e){var s=i;i=void 0,o(_,d,m),i=s}c&&c.call(this,_,d,m)},x.shouldComponentUpdate=o}return r.__N||r.__}function nt(t,e){var n=H(A++,3);!y.__s&&rt(n.__H,e)&&(n.__=t,n.i=e,x.__H.__h.push(n))}function oe(t,e){var n=H(A++,4);!y.__s&&rt(n.__H,e)&&(n.__=t,n.i=e,x.__h.push(n))}function Bn(t){return V=5,be(function(){return{current:t}},[])}function Fn(t,e,n){V=6,oe(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function be(t,e){var n=H(A++,7);return rt(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function zn(t,e){return V=8,be(function(){return t},e)}function Qn(t){var e=x.context[t.__c],n=H(A++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(x)),e.props.value):t.__}function Vn(t,e){y.useDebugValue&&y.useDebugValue(e?e(t):t)}function Os(t){var e=H(A++,10),n=we();return e.__=t,x.componentDidCatch||(x.componentDidCatch=function(r,o){e.__&&e.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Jn(){var t=H(A++,11);if(!t.__){for(var e=x.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Ns(){for(var t;t=Wn.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ce),t.__H.__h.forEach(Le),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){x=null,gt&&gt(t)},y.__r=function(t){vt&&vt(t),A=0;var e=(x=t.__c).__H;e&&(Se===x?(e.__h=[],x.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ae,n.__N=n.i=void 0})):(e.__h.forEach(ce),e.__h.forEach(Le),e.__h=[],A=0)),Se=x},y.diffed=function(t){yt&&yt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Wn.push(e)!==1&&mt===y.requestAnimationFrame||((mt=y.requestAnimationFrame)||Ms)(Ns)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ae&&(n.__=n.__V),n.i=void 0,n.__V=ae})),Se=x=null},y.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ce),n.__h=n.__h.filter(function(r){return!r.__||Le(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],y.__e(r,n.__v)}}),wt&&wt(t,e)},y.unmount=function(t){bt&&bt(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ce(r)}catch(o){e=o}}),n.__H=void 0,e&&y.__e(e,n.__v))};var kt=typeof requestAnimationFrame=="function";function Ms(t){var e,n=function(){clearTimeout(r),kt&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);kt&&(e=requestAnimationFrame(n))}function ce(t){var e=x,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),x=e}function Le(t){var e=x;t.__c=t.__(),x=e}function rt(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Gn(t,e){return typeof e=="function"?e(t):e}function Yn(t,e){for(var n in e)t[n]=e[n];return t}function qe(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Ce(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function fe(t){this.props=t}function Kn(t,e){function n(o){var i=this.props.ref,c=i==o.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!c:qe(this.props,o)}function r(o){return this.shouldComponentUpdate=n,N(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(fe.prototype=new O).isPureReactComponent=!0,fe.prototype.shouldComponentUpdate=function(t,e){return qe(this.props,t)||qe(this.state,e)};var Et=y.__b;y.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Et&&Et(t)};var Ls=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Zn(t){function e(n){var r=Yn({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ls,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var St=function(t,e){return t==null?null:L(L(t).map(e))},Xn={map:St,forEach:St,count:function(t){return t?L(t).length:0},only:function(t){var e=L(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:L},qs=y.__e;y.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}qs(t,e,n,r)};var Ct=y.unmount;function er(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Yn({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return er(r,e,n)})),t}function tr(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return tr(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function K(){this.__u=0,this.t=null,this.__b=null}function nr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function rr(t){var e,n,r;function o(i){if(e||(e=t()).then(function(c){n=c.default||c},function(c){r=c}),r)throw r;if(!n)throw e;return N(n,i)}return o.displayName="Lazy",o.__f=!0,o}function F(){this.u=null,this.o=null}y.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Ct&&Ct(t)},(K.prototype=new O).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=nr(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(_):_())};n.__R=c;var _=function(){if(!--r.__u){if(r.state.__a){var m=r.state.__a;r.__v.__k[0]=tr(m,m.__c.__P,m.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}},d=e.__h===!0;r.__u++||d||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(c,c)},K.prototype.componentWillUnmount=function(){this.t=[]},K.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=er(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&N(q,null,t.fallback);return o&&(o.__h=null),[N(q,null,e.__a?null:t.children),o]};var xt=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function As(t){return this.getChildContext=function(){return t.context},t.children}function Us(t){var e=this,n=t.i;e.componentWillUnmount=function(){ee(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),ee(N(As,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function or(t,e){var n=N(Us,{__v:t,i:e});return n.containerInfo=e,n}(F.prototype=new O).__a=function(t){var e=this,n=nr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),xt(e,t,r)):o()};n?n(i):i()}},F.prototype.render=function(t){this.u=null,this.o=new Map;var e=L(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){xt(t,n,e)})};var ir=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,$s=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ps=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ds=/[A-Z0-9]/g,js=typeof document<"u",Hs=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function sr(t,e,n){return e.__k==null&&(e.textContent=""),ee(t,e),typeof n=="function"&&n(),t?t.__c:null}function ar(t,e,n){return jn(t,e),typeof n=="function"&&n(),t?t.__c:null}O.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(O.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var It=y.event;function Ws(){}function Bs(){return this.cancelBubble}function Fs(){return this.defaultPrevented}y.event=function(t){return It&&(t=It(t)),t.persist=Ws,t.isPropagationStopped=Bs,t.isDefaultPrevented=Fs,t.nativeEvent=t};var ot,zs={enumerable:!1,configurable:!0,get:function(){return this.class}},Rt=y.vnode;y.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var c=n[i];if(!(i==="value"&&"defaultValue"in n&&c==null||js&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var _=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&c===!0?c="":_==="ondoubleclick"?i="ondblclick":_!=="onchange"||r!=="input"&&r!=="textarea"||Hs(n.type)?_==="onfocus"?i="onfocusin":_==="onblur"?i="onfocusout":Ps.test(i)?i=_:r.indexOf("-")===-1&&$s.test(i)?i=i.replace(Ds,"-$&").toLowerCase():c===null&&(c=void 0):_=i="oninput",_==="oninput"&&o[i=_]&&(i="oninputCapture"),o[i]=c}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=L(n.children).forEach(function(d){d.props.selected=o.value.indexOf(d.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=L(n.children).forEach(function(d){d.props.selected=o.multiple?o.defaultValue.indexOf(d.props.value)!=-1:o.defaultValue==d.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",zs)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=ir,Rt&&Rt(t)};var Tt=y.__r;y.__r=function(t){Tt&&Tt(t),ot=t.__c};var Ot=y.diffed;y.diffed=function(t){Ot&&Ot(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),ot=null};var cr={ReactCurrentDispatcher:{current:{readContext:function(t){return ot.__n[t.__c].props.value}}}},Qs="17.0.2";function lr(t){return N.bind(null,t)}function it(t){return!!t&&t.$$typeof===ir}function ur(t){return it(t)?Ts.apply(null,arguments):t}function _r(t){return!!t.__k&&(ee(null,t),!0)}function dr(t){return t&&(t.base||t.nodeType===1&&t)||null}var fr=function(t,e){return t(e)},hr=function(t,e){return t(e)},pr=q;function st(t){t()}function mr(t){return t}function gr(){return[!1,st]}var vr=oe;function yr(t,e){var n=e(),r=we({h:{__:n,v:e}}),o=r[0].h,i=r[1];return oe(function(){o.__=n,o.v=e,Ce(o.__,e())||i({h:o})},[t,n,e]),nt(function(){return Ce(o.__,o.v())||i({h:o}),t(function(){Ce(o.__,o.v())||i({h:o})})},[t]),n}var Vs={useState:we,useId:Jn,useReducer:tt,useEffect:nt,useLayoutEffect:oe,useInsertionEffect:vr,useTransition:gr,useDeferredValue:mr,useSyncExternalStore:yr,startTransition:st,useRef:Bn,useImperativeHandle:Fn,useMemo:be,useCallback:zn,useContext:Qn,useDebugValue:Vn,version:"17.0.2",Children:Xn,render:sr,hydrate:ar,unmountComponentAtNode:_r,createPortal:or,createElement:N,createContext:Hn,createFactory:lr,cloneElement:ur,createRef:Nn,Fragment:q,isValidElement:it,findDOMNode:dr,Component:O,PureComponent:fe,memo:Kn,forwardRef:Zn,flushSync:hr,unstable_batchedUpdates:fr,StrictMode:pr,Suspense:K,SuspenseList:F,lazy:rr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:cr};const Js=Object.freeze(Object.defineProperty({__proto__:null,Children:Xn,Component:O,Fragment:q,PureComponent:fe,StrictMode:pr,Suspense:K,SuspenseList:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:cr,cloneElement:ur,createContext:Hn,createElement:N,createFactory:lr,createPortal:or,createRef:Nn,default:Vs,findDOMNode:dr,flushSync:hr,forwardRef:Zn,hydrate:ar,isValidElement:it,lazy:rr,memo:Kn,render:sr,startTransition:st,unmountComponentAtNode:_r,unstable_batchedUpdates:fr,useCallback:zn,useContext:Qn,useDebugValue:Vn,useDeferredValue:mr,useEffect:nt,useErrorBoundary:Os,useId:Jn,useImperativeHandle:Fn,useInsertionEffect:vr,useLayoutEffect:oe,useMemo:be,useReducer:tt,useRef:Bn,useState:we,useSyncExternalStore:yr,useTransition:gr,version:Qs},Symbol.toStringTag,{value:"Module"})),Gs=qt(Js);function wr(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var R=Ss,br=wr(ro),Ys=wr(no),f=Gs;function Ks(t){br.toString(t,{type:"terminal"}).then(console.log)}var Zs=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Xs(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var ea="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",ta="WalletConnect",na=300,ra="rgb(64, 153, 255)",kr="walletconnect-wrapper",Nt="walletconnect-style-sheet",Er="walletconnect-qrcode-modal",oa="walletconnect-qrcode-close",Sr="walletconnect-qrcode-text",ia="walletconnect-connect-button";function sa(t){return f.createElement("div",{className:"walletconnect-modal__header"},f.createElement("img",{src:ea,className:"walletconnect-modal__headerLogo"}),f.createElement("p",null,ta),f.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},f.createElement("div",{id:oa,className:"walletconnect-modal__close__icon"},f.createElement("div",{className:"walletconnect-modal__close__line1"}),f.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function aa(t){return f.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:ia+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var ca="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function la(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return f.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},f.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),f.createElement("div",{className:"walletconnect-modal__base__row__right"},f.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),f.createElement("img",{src:ca,className:"walletconnect-modal__base__row__right__caret"})))}function ua(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,c=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return f.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},f.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),f.createElement("div",{style:{fontSize:c},className:"walletconnect-connect__button__text"},r))}var _a=5,xe=12;function da(t){var e=R.isAndroid(),n=f.useState(""),r=n[0],o=n[1],i=f.useState(""),c=i[0],_=i[1],d=f.useState(1),m=d[0],s=d[1],b=c?t.links.filter(function(u){return u.name.toLowerCase().includes(c.toLowerCase())}):t.links,g=t.errorMessage,p=c||b.length>_a,k=Math.ceil(b.length/xe),I=[(m-1)*xe+1,m*xe],S=b.length?b.filter(function(u,v){return v+1>=I[0]&&v+1<=I[1]}):[],a=!e&&k>1,l=void 0;function h(u){o(u.target.value),clearTimeout(l),u.target.value?l=setTimeout(function(){_(u.target.value),s(1)},1e3):(o(""),_(""),s(1))}return f.createElement("div",null,f.createElement("p",{id:Sr,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&f.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:h}),f.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":p&&b.length?"__wrap":"")},e?f.createElement(aa,{name:t.text.connect,color:ra,href:t.uri,onClick:f.useCallback(function(){R.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):S.length?S.map(function(u){var v=u.color,E=u.name,w=u.shortName,C=u.logo,T=R.formatIOSMobile(t.uri,u),W=f.useCallback(function(){R.saveMobileLinkInfo({name:E,href:T})},[S]);return p?f.createElement(ua,{color:v,href:T,name:w||E,logo:C,onClick:W}):f.createElement(la,{color:v,href:T,name:E,logo:C,onClick:W})}):f.createElement(f.Fragment,null,f.createElement("p",null,g.length?t.errorMessage:t.links.length&&!b.length?t.text.no_wallets_found:t.text.loading))),a&&f.createElement("div",{className:"walletconnect-modal__footer"},Array(k).fill(0).map(function(u,v){var E=v+1,w=m===E;return f.createElement("a",{style:{margin:"auto 10px",fontWeight:w?"bold":"normal"},onClick:function(){return s(E)}},E)})))}function fa(t){var e=!!t.message.trim();return f.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var ha=function(t){try{var e="";return Promise.resolve(br.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function pa(t){var e=f.useState(""),n=e[0],r=e[1],o=f.useState(""),i=o[0],c=o[1];f.useEffect(function(){try{return Promise.resolve(ha(t.uri)).then(function(d){c(d)})}catch(d){Promise.reject(d)}},[]);var _=function(){var d=Ys(t.uri);d?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return f.createElement("div",null,f.createElement("p",{id:Sr,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),f.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),f.createElement("div",{className:"walletconnect-modal__footer"},f.createElement("a",{onClick:_},t.text.copy_to_clipboard)),f.createElement(fa,{message:n}))}function ma(t){var e=R.isAndroid(),n=R.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=f.useState(!1),i=o[0],c=o[1],_=f.useState(!1),d=_[0],m=_[1],s=f.useState(!n),b=s[0],g=s[1],p={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},k=f.useState(""),I=k[0],S=k[1],a=f.useState(!1),l=a[0],h=a[1],u=f.useState([]),v=u[0],E=u[1],w=f.useState(""),C=w[0],T=w[1],W=function(){d||i||r&&!r.length||v.length>0||f.useEffect(function(){var Rr=function(){try{if(e)return Promise.resolve();c(!0);var ke=Xs(function(){var G=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:R.getWalletRegistryUrl();return Promise.resolve(fetch(G)).then(function(Tr){return Promise.resolve(Tr.json()).then(function(Or){var Nr=Or.listings,Mr=n?"mobile":"desktop",ie=R.getMobileLinkRegistry(R.formatMobileRegistry(Nr,Mr),r);c(!1),m(!0),T(ie.length?"":t.text.no_supported_wallets),E(ie);var at=ie.length===1;at&&(S(R.formatIOSMobile(t.uri,ie[0])),g(!0)),h(at)})})},function(G){c(!1),m(!0),T(t.text.something_went_wrong),console.error(G)});return Promise.resolve(ke&&ke.then?ke.then(function(){}):void 0)}catch(G){return Promise.reject(G)}};Rr()})};W();var Ir=n?b:!b;return f.createElement("div",{id:Er,className:"walletconnect-qrcode__base animated fadeIn"},f.createElement("div",{className:"walletconnect-modal__base"},f.createElement(sa,{onClose:t.onClose}),l&&b?f.createElement("div",{className:"walletconnect-modal__single_wallet"},f.createElement("a",{onClick:function(){return R.saveMobileLinkInfo({name:v[0].name,href:I})},href:I,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(l?v[0].name:"")+" ›")):e||i||!i&&v.length?f.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(Ir?" right__selected":"")},f.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?f.createElement(f.Fragment,null,f.createElement("a",{onClick:function(){return g(!1),W()}},t.text.mobile),f.createElement("a",{onClick:function(){return g(!0)}},t.text.qrcode)):f.createElement(f.Fragment,null,f.createElement("a",{onClick:function(){return g(!0)}},t.text.qrcode),f.createElement("a",{onClick:function(){return g(!1),W()}},t.text.desktop))):null,f.createElement("div",null,b||!e&&!i&&!v.length?f.createElement(pa,Object.assign({},p)):f.createElement(da,Object.assign({},p,{links:v,errorMessage:C})))))}var ga={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},va={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},ya={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},wa={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},ba={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},ka={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},Ea={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Sa={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},Mt={de:ga,en:va,es:ya,fr:wa,ko:ba,pt:ka,zh:Ea,fa:Sa};function Ca(){var t=R.getDocumentOrThrow(),e=t.getElementById(Nt);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Nt),n.innerText=Zs,t.head.appendChild(n)}function xa(){var t=R.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",kr),t.body.appendChild(e),e}function Cr(){var t=R.getDocumentOrThrow(),e=t.getElementById(Er);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(kr);n&&t.body.removeChild(n)},na))}function Ia(t){return function(){Cr(),t&&t()}}function Ra(){var t=R.getNavigatorOrThrow().language.split("-")[0]||"en";return Mt[t]||Mt.en}function Ta(t,e,n){Ca();var r=xa();f.render(f.createElement(ma,{text:Ra(),uri:t,onClose:Ia(e),qrcodeModalOptions:n}),r)}function Oa(){Cr()}var xr=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Na(t,e,n){console.log(t),xr()?Ks(t):Ta(t,e,n)}function Ma(){xr()||Oa()}var La={open:Na,close:Ma},qa=La;const Aa=Ae(qa);class Ua extends eo{constructor(e){super(),this.events=new Lt,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",ct(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Aa:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new Es(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?ct(e.id,e.error.message,e.error.data):e}}class ja{constructor(e){this.events=new Lt,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new lt(new Ua(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(Ue.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=an(e,this.rpc);return typeof n>"u"?void 0:new lt(new to(n))}}export{ja as default};
