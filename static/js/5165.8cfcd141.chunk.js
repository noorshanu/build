/*! For license information please see 5165.8cfcd141.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5165],{19969:function(e,t,n){n.d(t,{SS:function(){return m},sq:function(){return l},MN:function(){return d},RF:function(){return p},uO:function(){return u},I8:function(){return c}});var r=n(87253),o=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",i=n.p+"static/media/noise.3c7efafc83614205bd1a.png",s=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",a=n(60476);const c=(0,r.default)(a.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__DataCard",componentId:"sc-1a2037c7-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=r.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-1a2037c7-1"})`
  background: url(${o});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,d=r.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-1a2037c7-2"})`
  background: url(${s});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,p=r.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardNoise",componentId:"sc-1a2037c7-3"})`
  background: url(${i});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,u=(0,r.default)(a.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardSection",componentId:"sc-1a2037c7-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=r.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__Break",componentId:"sc-1a2037c7-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},55999:function(e,t,n){n.r(t),n.d(t,{default:function(){return Hr}});var r=n(42893),o=n(12204),i=n(80815),s=n(2304),a=n(68040),c=n(63362),l=n(80657);var d=n(62069),p=n(1579),u=n(13712);var m=e=>{const[t,n]=(0,u.useState)(Date.now());return(0,p.Z)((0,u.useCallback)((()=>{n(Date.now())}),[]),e),t},h=n(92796),g=n(55831),f=n.n(g),x=n(87253),w=n(39839),C=n(34120),b=n(65647),y=n(15387),j=n(34578),v=n(1990);const z=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\ChainConnectivityWarning__BodyRow",componentId:"sc-8d465999-0"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,D=(0,x.default)(j.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\ChainConnectivityWarning__CautionTriangle",componentId:"sc-8d465999-1"})`
  color: ${({theme:e})=>e.deprecated_accentWarning};
`,k=(0,x.default)(w.dL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\ChainConnectivityWarning__Link",componentId:"sc-8d465999-2"})`
  color: ${({theme:e})=>e.black};
  text-decoration: underline;
`,N=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\ChainConnectivityWarning__TitleRow",componentId:"sc-8d465999-3"})`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,A=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\ChainConnectivityWarning__TitleText",componentId:"sc-8d465999-4"})`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,E=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\ChainConnectivityWarning__Wrapper",componentId:"sc-8d465999-5"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  bottom: 60px;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  @media screen and (min-width: ${v.e.deprecated_upToMedium}px) {
    display: block;
  }
`;function T(){const{chainId:e}=(0,i.useWeb3React)(),t=(0,a.o7)(e),n=t?.label;return(0,r.jsxs)(E,{children:[(0,r.jsxs)(N,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(A,{children:(0,r.jsx)(o.cC,{id:"3xf/uJ"})})]}),(0,r.jsxs)(z,{children:[e===y.ChainId.MAINNET?(0,r.jsx)(o.cC,{id:"iXzD8t"}):(0,r.jsx)(o.cC,{id:"3Fxw1j",values:{label:n}})," ",void 0!==t.statusPage&&(0,r.jsxs)("span",{children:[(0,r.jsx)(o.cC,{id:"IHlLC8"})," ",(0,r.jsx)(k,{href:t.statusPage||"",children:(0,r.jsx)(o.cC,{id:"jqVo/k"})})]})]})]})}const S=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\index__StyledPolling",componentId:"sc-230ca671-0"})`
  align-items: center;
  bottom: 0;
  color: ${({theme:e})=>e.neutral3};
  display: none;
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: 250ms ease color;

  a {
    color: unset;
  }
  a:hover {
    color: unset;
    text-decoration: none;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: flex;
  }
`,I=(0,x.default)(w.Tv.DeprecatedSmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\index__StyledPollingBlockNumber",componentId:"sc-230ca671-1"})`
  color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: opacity 0.25s ease;
  opacity: ${({breathe:e,hovering:t})=>t?.7:e?1:.5};
  :hover {
    opacity: 1;
  }

  a {
    color: unset;
  }
  a:hover {
    text-decoration: none;
    color: unset;
  }
`,O=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\index__StyledPollingDot",componentId:"sc-230ca671-2"})`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: 250ms ease background-color;
`,R=x.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Polling\\index__Spinner",componentId:"sc-230ca671-3"})`
  animation: ${R} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  transition: 250ms ease border-color;

  left: -3px;
  top: -3px;
`,U=f()("10m"),_=f()("10s");function H(){const{chainId:e}=(0,i.useWeb3React)(),t=(0,h.ZP)(),[n,p]=(0,u.useState)(!1),[g,f]=(0,u.useState)(!1),x=m(_),y=(0,c.Z)(),j=(0,d.GZ)(),v=function(){const{pathname:e}=(0,l.TH)();return e.endsWith("/")}(),z=(e?(0,a.bt)(e)?.blockWaitMsBeforeWarning:U)??U,D=Boolean(!!y&&x-y.mul(1e3).toNumber()>z);(0,u.useEffect)((()=>{if(!t)return;p(!0);const e=setTimeout((()=>p(!1)),1e3);return()=>{clearTimeout(e)}}),[t]);const k=(0,u.useMemo)((()=>e&&t?(0,C.E)(e,t.toString(),C.r.BLOCK):""),[t,e]);return j||v?null:(0,r.jsxs)(s.DA,{children:[(0,r.jsxs)(S,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,r.jsx)(I,{breathe:n,hovering:g,warning:D,children:(0,r.jsx)(w.dL,{href:k,children:(0,r.jsxs)(b.ud,{text:(0,r.jsx)(o.cC,{id:"MCr7bN"}),children:[t,"\u2002"]})})}),(0,r.jsx)(O,{warning:D,children:n&&(0,r.jsx)(M,{warning:D})})," "]}),D&&(0,r.jsx)(T,{})]})}var P=n(56564),B=n(437),L=n(18646),F=n(60476),W=n(50595),G=n(41432),q=n.n(G);function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var J=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,s=Q(e,["color","size"]);return u.createElement("svg",V({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))}));J.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},J.displayName="Heart";var Z=J,Y="data:image/png;base64,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",X=n(13120),K=n(44996),$=n(60198),ee=n(19969);const te=(0,x.default)(F.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\ClaimPopup__StyledClaimPopup",componentId:"sc-d8324749-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
  border-radius: 20px;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  max-width: 360px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`,ne=(0,x.default)(W.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\ClaimPopup__StyledClose",componentId:"sc-d8324749-1"})`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`,re=x.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`,oe=x.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\ClaimPopup__UniToken",componentId:"sc-d8324749-2"})`
  animation: ${re} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
`;function ie(){const{account:e}=(0,i.useWeb3React)(),t=(0,P.uL)(),n=(0,P.Lb)(),s=(0,P.Wt)(X.Lk.SELF_CLAIM),a=(0,P.G_)(),c=(0,u.useCallback)((()=>{a()}),[a]),l=(0,K.ot)(e),d=(0,K.jX)(e);return(0,u.useEffect)((()=>{l&&n()}),[l]),(0,r.jsx)(r.Fragment,{children:t&&!s&&(0,r.jsxs)(te,{gap:"md",children:[(0,r.jsx)(ee.sq,{}),(0,r.jsx)(ee.RF,{}),(0,r.jsx)(ne,{stroke:"white",onClick:n}),(0,r.jsxs)(F.Tz,{style:{padding:"2rem 0",zIndex:10},justify:"center",children:[(0,r.jsx)(oe,{width:"48px",src:Y})," ",(0,r.jsxs)(w.Tv.DeprecatedWhite,{style:{marginTop:"1rem"},fontSize:36,fontWeight:535,children:[d?.toFixed(0,{groupSeparator:","}??"-")," UNI"]}),(0,r.jsxs)(w.Tv.DeprecatedWhite,{style:{paddingTop:"1.25rem",textAlign:"center"},fontWeight:535,color:"white",children:[(0,r.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})," ",(0,r.jsx)(o.cC,{id:"ayzlbD"})," ",(0,r.jsx)("span",{role:"img","aria-label":"party",children:"\ud83c\udf89"})]}),(0,r.jsx)(w.Tv.DeprecatedSubHeader,{style:{paddingTop:"0.5rem",textAlign:"center"},color:"white",children:(0,r.jsx)(o.cC,{id:"sPI8ot",components:{0:(0,r.jsx)(Z,{size:12})}})})]}),(0,r.jsx)(F.Tz,{style:{zIndex:10},justify:"center",children:(0,r.jsx)($.DF,{padding:"8px",$borderRadius:"8px",width:"fit-content",onClick:c,children:(0,r.jsx)(o.cC,{id:"Hn7ais"})})})]})})}var se=n(31502),ae=n(83379),ce=n(90315),le=n(2158),de=n(38526),pe=n(79954),ue=n(15627),me=n(55680),he=n(28051),ge=n(97905),fe=n(57482);const xe=(0,x.default)(W.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\PopupContent__StyledClose",componentId:"sc-d27dab51-0"})`
  position: absolute;
  right: ${({$padding:e})=>`${e}px`};
  top: ${({$padding:e})=>`${e}px`};
  color: ${({theme:e})=>e.neutral2};

  :hover {
    cursor: pointer;
  }
`,we=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\PopupContent__PopupContainer",componentId:"sc-d27dab51-1"})`
  display: inline-block;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  position: relative;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  transition: ${({theme:e})=>`visibility ${e.transition.duration.fast} ease-in-out`};

  padding: ${({padded:e})=>e?"20px 35px 20px 20px":"2px 0px"};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
  min-width: 290px;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`}
`,Ce=(0,x.default)(s.BA).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\PopupContent__RowNoFlex",componentId:"sc-d27dab51-2"})`
  flex-wrap: nowrap;
`,be=(0,x.default)(F.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\PopupContent__ColumnContainer",componentId:"sc-d27dab51-3"})`
  margin: 0 12px;
`,ye=(0,x.default)(de.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\PopupContent__PopupAlertTriangle",componentId:"sc-d27dab51-4"})`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;function je({chainId:e,onClose:t}){const n=(0,a.bt)(e);return(0,r.jsxs)(we,{padded:!0,children:[(0,r.jsx)(xe,{$padding:20,onClick:t}),(0,r.jsxs)(Ce,{gap:"12px",children:[(0,r.jsx)(ye,{}),(0,r.jsxs)(be,{gap:"sm",children:[(0,r.jsx)(w.Tv.SubHeader,{color:"neutral2",children:(0,r.jsx)(o.cC,{id:"HV8AwX"})}),(0,r.jsx)(w.Tv.BodySmall,{color:"neutral2",children:(0,r.jsx)(o.cC,{id:"qwMRCz",values:{0:n.label}})})]})]})]})}const ve=(0,x.default)(w.Tv.BodySmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\PopupContent__Descriptor",componentId:"sc-d27dab51-5"})`
  ${w.cw}
`;function ze({activity:e,onClick:t,onClose:n}){const o=e.status===pe.LN.Confirmed&&!e.cancelled,{ENSName:i}=(0,me.Z)(e?.otherAccount);return(0,r.jsxs)(we,{children:[(0,r.jsx)(xe,{$padding:16,onClick:n}),(0,r.jsx)(le.ZP,{left:o?(0,r.jsx)(F.ZP,{children:(0,r.jsx)(ce.V,{chainId:e.chainId,currencies:e.currencies,images:e.logos,accountAddress:e.otherAccount})}):(0,r.jsx)(ye,{}),title:(0,r.jsx)(w.Tv.SubHeader,{children:e.title}),descriptor:(0,r.jsxs)(ve,{color:"neutral2",children:[e.descriptor,i??e.otherAccount]}),onClick:t})]})}function De({chainId:e,hash:t,onClose:n}){const o=(0,ge.kF)(t),i=(0,ue.UF)(),{formatNumber:s}=(0,fe.Gb)();if(!o)return null;const a=(0,ae.tI)(o,e,i,s);if(!a)return null;return(0,r.jsx)(ze,{activity:a,onClose:n,onClick:()=>window.open((0,C.E)(a.chainId,a.hash,C.r.TRANSACTION),"_blank")})}function ke({orderHash:e,onClose:t}){const n=(0,he.Aj)(e),o=(0,ue.UF)(),i=(0,se.y2)(),{formatNumber:s}=(0,fe.Gb)();if(!n)return null;const a=(0,ae.h1)(n,o,s);if(!a)return null;return(0,r.jsx)(ze,{activity:a,onClose:t,onClick:()=>i({orderHash:e,status:n.status})})}function Ne({removeAfterMs:e,content:t,popKey:n}){const o=(0,P.J3)(),s=()=>o(n);(0,u.useEffect)((()=>{if(null===e)return;const t=setTimeout((()=>{o(n)}),e);return()=>{clearTimeout(t)}}),[n,e,o]);const{chainId:a}=(0,i.useWeb3React)();switch(t.type){case X.kQ.Transaction:return a?(0,r.jsx)(De,{hash:t.hash,chainId:a,onClose:s}):null;case X.kQ.Order:return(0,r.jsx)(ke,{orderHash:t.orderHash,onClose:s});case X.kQ.FailedSwitchNetwork:return(0,r.jsx)(je,{chainId:t.failedSwitchNetwork,onClose:s})}}const Ae=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\index__MobilePopupWrapper",componentId:"sc-60116fd4-0"})`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: none;
  padding-left: 20px;
  padding-right: 20px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: block;
    padding-top: 20px;
  `};
`,Ee=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\index__MobilePopupInner",componentId:"sc-60116fd4-1"})`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,Te=(0,x.default)(F.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Popups\\index__FixedPopupColumn",componentId:"sc-60116fd4-2"})`
  position: fixed;
  top: ${({drawerOpen:e})=>64+(e?-50:0)+"px"};
  right: 1rem;
  max-width: 348px !important;
  width: 100%;
  z-index: ${B.k.modal};
  transition: ${({theme:e})=>`top ${e.transition.timing.inOut} ${e.transition.duration.slow}`};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`;function Se(){const[e]=(0,L.Q5)(),t=(0,P.iT)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Te,{gap:"20px",drawerOpen:e,"data-testid":"popups",children:[(0,r.jsx)(ie,{}),t.map((e=>(0,r.jsx)(Ne,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))]}),t?.length>0&&(0,r.jsx)(Ae,{"data-testid":"popups",children:(0,r.jsx)(Ee,{children:t.slice(0).reverse().map((e=>(0,r.jsx)(Ne,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key)))})})]})}var Ie,Oe=n(19903),Re=n(66196),Me=n(79371),Ue=n(50786),_e=n(50091),He=n(8809),Pe=n(46920),Be=Object.defineProperty,Le=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,Ge=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qe=(e,t)=>{for(var n in t||(t={}))Fe.call(t,n)&&Ge(e,n,t[n]);if(Le)for(var n of Le(t))We.call(t,n)&&Ge(e,n,t[n]);return e},Ve=(e,t)=>{var n={};for(var r in e)Fe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&Le)for(var r of Le(e))t.indexOf(r)<0&&We.call(e,r)&&(n[r]=e[r]);return n};(e=>{const t=class{static encodeText(n,r){const o=e.QrSegment.makeSegments(n);return t.encodeSegments(o,r)}static encodeBinary(n,r){const o=e.QrSegment.makeBytes(n);return t.encodeSegments([o],r)}static encodeSegments(e,n,o=1,s=40,c=-1,l=!0){if(!(t.MIN_VERSION<=o&&o<=s&&s<=t.MAX_VERSION)||c<-1||c>7)throw new RangeError("Invalid value");let d,p;for(d=o;;d++){const r=8*t.getNumDataCodewords(d,n),o=a.getTotalBits(e,d);if(o<=r){p=o;break}if(d>=s)throw new RangeError("Data too long")}for(const r of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])l&&p<=8*t.getNumDataCodewords(d,r)&&(n=r);let u=[];for(const t of e){r(t.mode.modeBits,4,u),r(t.numChars,t.mode.numCharCountBits(d),u);for(const e of t.getData())u.push(e)}i(u.length==p);const m=8*t.getNumDataCodewords(d,n);i(u.length<=m),r(0,Math.min(4,m-u.length),u),r(0,(8-u.length%8)%8,u),i(u.length%8==0);for(let t=236;u.length<m;t^=253)r(t,8,u);let h=[];for(;8*h.length<u.length;)h.push(0);return u.forEach(((e,t)=>h[t>>>3]|=e<<7-(7&t))),new t(d,n,h,c)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)0==n&&0==r||0==n&&r==t-1||n==t-1&&0==r||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let o=0;o<10;o++)n=n<<1^1335*(n>>>9);const r=21522^(t<<10|n);i(r>>>15==0);for(let i=0;i<=5;i++)this.setFunctionModule(8,i,o(r,i));this.setFunctionModule(8,7,o(r,6)),this.setFunctionModule(8,8,o(r,7)),this.setFunctionModule(7,8,o(r,8));for(let i=9;i<15;i++)this.setFunctionModule(14-i,8,o(r,i));for(let i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,o(r,i));for(let i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,o(r,i));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;i(t>>>18==0);for(let n=0;n<18;n++){const e=o(t,n),r=this.size-11+n%3,i=Math.floor(n/3);this.setFunctionModule(r,i,e),this.setFunctionModule(i,r,e)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(n)),i=e+r,s=t+n;0<=i&&i<this.size&&0<=s&&s<this.size&&this.setFunctionModule(i,s,2!=o&&4!=o)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,1!=Math.max(Math.abs(r),Math.abs(n)))}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw new RangeError("Invalid argument");const o=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],s=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],a=Math.floor(t.getNumRawDataModules(n)/8),c=o-a%o,l=Math.floor(a/o);let d=[];const p=t.reedSolomonComputeDivisor(s);for(let i=0,m=0;i<o;i++){let n=e.slice(m,m+l-s+(i<c?0:1));m+=n.length;const r=t.reedSolomonComputeRemainder(n,p);i<c&&n.push(0),d.push(n.concat(r))}let u=[];for(let t=0;t<d[0].length;t++)d.forEach(((e,n)=>{(t!=l-s||n>=c)&&u.push(e[t])}));return i(u.length==a),u}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){const s=t-i,a=0==(t+1&2)?this.size-1-r:r;!this.isFunction[a][s]&&n<8*e.length&&(this.modules[a][s]=o(e[n>>>3],7-(7&n)),n++)}}i(n==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let i=0;i<this.size;i++){let n=!1,r=0,o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[i][s]==n?(r++,5==r?e+=t.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,o),n||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),n=this.modules[i][s],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,o)*t.PENALTY_N3}for(let i=0;i<this.size;i++){let n=!1,r=0,o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][i]==n?(r++,5==r?e+=t.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,o),n||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),n=this.modules[s][i],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,o)*t.PENALTY_N3}for(let i=0;i<this.size-1;i++)for(let n=0;n<this.size-1;n++){const r=this.modules[i][n];r==this.modules[i][n+1]&&r==this.modules[i+1][n]&&r==this.modules[i+1][n+1]&&(e+=t.PENALTY_N2)}let n=0;for(const t of this.modules)n=t.reduce(((e,t)=>e+(t?1:0)),n);const r=this.size*this.size,o=Math.ceil(Math.abs(20*n-10*r)/r)-1;return i(0<=o&&o<=9),e+=o*t.PENALTY_N4,i(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return i(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let r=1;for(let o=0;o<e;o++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1]);r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map((e=>0));for(const o of e){const e=o^r.shift();r.push(0),n.forEach(((n,o)=>r[o]^=t.reedSolomonMultiply(n,e)))}return r}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(t>>>r&1)*e;return i(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];i(t<=3*this.size);const n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}constructor(e,n,r,o){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let s=[];for(let t=0;t<this.size;t++)s.push(!1);for(let t=0;t<this.size;t++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(r);if(this.drawCodewords(a),-1==o){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const n=this.getPenaltyScore();n<e&&(o=t,e=n),this.applyMask(t)}}i(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}};let n=t;function r(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function o(e,t){return 0!=(e>>>t&1)}function i(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;const s=class{static makeBytes(e){let t=[];for(const n of e)r(n,8,t);return new s(s.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!s.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const o=Math.min(e.length-n,3);r(parseInt(e.substr(n,o),10),3*o+1,t),n+=o}return new s(s.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!s.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t,n=[];for(t=0;t+2<=e.length;t+=2){let o=45*s.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));o+=s.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),r(o,11,n)}return t<e.length&&r(s.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new s(s.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:s.isNumeric(e)?[s.makeNumeric(e)]:s.isAlphanumeric(e)?[s.makeAlphanumeric(e)]:[s.makeBytes(s.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)r(e,8,t);else if(e<16384)r(2,2,t),r(e,14,t);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,t),r(e,21,t)}return new s(s.Mode.ECI,0,t)}static isNumeric(e){return s.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return s.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const r of e){const e=r.mode.numCharCountBits(t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}};let a=s;a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=a})(Ie||(Ie={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};let n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n})(t=e.QrCode||(e.QrCode={}))})(Ie||(Ie={})),(e=>{let t;(e=>{const t=class{numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}};let n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n})(t=e.QrSegment||(e.QrSegment={}))})(Ie||(Ie={}));var Qe=Ie,Je={L:Qe.QrCode.Ecc.LOW,M:Qe.QrCode.Ecc.MEDIUM,Q:Qe.QrCode.Ecc.QUARTILE,H:Qe.QrCode.Ecc.HIGH},Ze=128,Ye="L",Xe="#FFFFFF",Ke="#000000",$e=!1,et=4,tt=.1;function nt(e,t=0){const n=[];return e.forEach((function(e,r){let o=null;e.forEach((function(i,s){if(!i&&null!==o)return n.push(`M${o+t} ${r+t}h${s-o}v1H${o+t}z`),void(o=null);if(s!==e.length-1)i&&null===o&&(o=s);else{if(!i)return;null===o?n.push(`M${s+t},${r+t} h1v1H${s+t}z`):n.push(`M${o+t},${r+t} h${s+1-o}v1H${o+t}z`)}}))})),n.join("")}function rt(e,t){return e.slice().map(((e,n)=>n<t.y||n>=t.y+t.h?e:e.map(((e,n)=>(n<t.x||n>=t.x+t.w)&&e))))}function ot(e,t,n,r){if(null==r)return null;const o=n?et:0,i=e.length+2*o,s=Math.floor(t*tt),a=i/t,c=(r.width||s)*a,l=(r.height||s)*a,d=null==r.x?e.length/2-c/2:r.x*a,p=null==r.y?e.length/2-l/2:r.y*a;let u=null;if(r.excavate){let e=Math.floor(d),t=Math.floor(p);u={x:e,y:t,w:Math.ceil(c+d-e),h:Math.ceil(l+p-t)}}return{x:d,y:p,h:l,w:c,excavation:u}}!function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}}();function it(e){const t=e,{value:n,size:r=Ze,level:o=Ye,bgColor:i=Xe,fgColor:s=Ke,includeMargin:a=$e,imageSettings:c}=t,l=Ve(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let d=Qe.QrCode.encodeText(n,Je[o]).getModules();const p=a?et:0,m=d.length+2*p,h=ot(d,r,a,c);let g=null;null!=c&&null!=h&&(null!=h.excavation&&(d=rt(d,h.excavation)),g=u.createElement("image",{xlinkHref:c.src,height:h.h,width:h.w,x:h.x+p,y:h.y+p,preserveAspectRatio:"none"}));const f=nt(d,p);return u.createElement("svg",qe({height:r,width:r,viewBox:`0 0 ${m} ${m}`},l),u.createElement("path",{fill:i,d:`M0,0 h${m}v${m}H0z`,shapeRendering:"crispEdges"}),u.createElement("path",{fill:s,d:f,shapeRendering:"crispEdges"}),g)}var st=n(36633),at=n.p+"static/media/uniwallet_modal_icon.e17cdec93dd86d3fe3b7.png",ct=n(27936);const lt=x.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AccountDrawer\\DownloadButton__StyledButton",componentId:"sc-fd3b1401-0"})`
  ${w.iV}
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  padding: 8px 24px;
  border: none;
  white-space: nowrap;
  background: ${({theme:e,branded:t})=>t?e.accent1:e.surface3};
  border-radius: 12px;

  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme:e,branded:t})=>t?e.deprecated_accentTextLightPrimary:e.neutral1};
`;function dt({onClick:e,branded:t,children:n}){return(0,r.jsx)(lt,{branded:t,onClick:e,children:n})}function pt({onClick:e,text:t="Download",element:n}){const o=(0,u.useCallback)((()=>{e?.(),(0,ct.J8)({element:n})}),[n,e]);return(0,r.jsx)(dt,{branded:!0,onClick:o,children:t})}const ut=(0,x.default)(s.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AccountDrawer\\UniwalletModal__UniwalletConnectWrapper",componentId:"sc-8d2bba31-0"})`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
`,mt=(0,x.default)(s.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AccountDrawer\\UniwalletModal__HeaderRow",componentId:"sc-8d2bba31-1"})`
  display: flex;
`,ht=(0,x.default)(s.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AccountDrawer\\UniwalletModal__QRCodeWrapper",componentId:"sc-8d2bba31-2"})`
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.white};
  margin: 24px 32px 20px;
  padding: 10px;
`,gt=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AccountDrawer\\UniwalletModal__Divider",componentId:"sc-8d2bba31-3"})`
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
`;function ft(){const{activationState:e,cancelActivation:t}=(0,_e.Y)(),[n,i]=(0,u.useState)(),s=!st.gn&&e.status===_e.o.PENDING&&e.connection.type===He.R.UNISWAP_WALLET_V2&&!!n;(0,u.useEffect)((()=>{Ue.uq.connector.events.addListener(Pe.Z.UNI_URI_AVAILABLE,(e=>{e&&i(e)}))}),[]),(0,u.useEffect)((()=>{s&&(0,Re._P)("Mikawa Inu wallet modal opened")}),[s]);const a=(0,x.useTheme)();return(0,r.jsx)(Me.Z,{isOpen:s,onDismiss:t,children:(0,r.jsxs)(ut,{children:[(0,r.jsxs)(mt,{children:[(0,r.jsx)(w.Tv.SubHeader,{children:(0,r.jsx)(o.cC,{id:"D+k66C"})}),(0,r.jsx)(w.Tw,{onClick:t})]}),(0,r.jsx)(ht,{children:n&&(0,r.jsx)(it,{value:n,width:"100%",height:"100%",level:"M",fgColor:a.darkMode?a.surface1:a.black,imageSettings:{src:at,height:33,width:33,excavate:!1}})}),(0,r.jsx)(gt,{}),(0,r.jsx)(wt,{})]})})}const xt=(0,x.default)(s.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AccountDrawer\\UniwalletModal__InfoSectionWrapper",componentId:"sc-8d2bba31-4"})`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 20px;
`;function wt(){return(0,r.jsxs)(xt,{children:[(0,r.jsxs)(F.Tz,{gap:"4px",children:[(0,r.jsx)(w.Tv.SubHeaderSmall,{color:"neutral1",children:(0,r.jsx)(o.cC,{id:"Wnd7xn"})}),(0,r.jsx)(w.Tv.BodySmall,{color:"neutral2",children:(0,r.jsx)(o.cC,{id:"Hmd9BI"})})]}),(0,r.jsx)(F.ZP,{children:(0,r.jsx)(pt,{element:Oe.xo.UNISWAP_WALLET_MODAL_DOWNLOAD_BUTTON})})]})}var Ct=n(86003),bt=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"uint256","name":"endTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"ClaimWindowFinished","type":"error"},{"inputs":[],"name":"EndTimeInPast","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[],"name":"NoWithdrawDuringClaim","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),yt=n.p+"static/media/airdopBackground.7f54f314ceca6a012b57.png",jt=n(62329),vt=n(25575),zt=n(36665),Dt=n(26030),kt=n(634);var Nt;!function(e){e.LOOKS_RARE_NFT_COMMERCE_REWARDS="LOOKS_RARE_NFT_COMMERCE_REWARDS",e.GENIE_UNISWAP_USDC_AIRDROP="GENIE_UNISWAP_USDC_AIRDROP"}(Nt||(Nt={}));const At=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__ModalWrap",componentId:"sc-1e4844aa-0"})`
  display: flex;
  flex-direction: column;
`,Et=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__Body",componentId:"sc-1e4844aa-1"})`
  padding: 28px 20px 20px 20px;
`,Tt=(0,x.default)($.UH).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__ClaimButton",componentId:"sc-1e4844aa-2"})`
  width: 100%;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 12px;
  color: ${({theme:e})=>e.white};
`,St=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__Line",componentId:"sc-1e4844aa-3"})`
  height: 1px;
  width: 100%;
  background-color: ${({theme:e})=>e.white};
  opacity: 0.24;
  margin-top: 12px;
  margin-bottom: 12px;
`,It=x.default.a.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__LinkWrap",componentId:"sc-1e4844aa-4"})`
  text-decoration: none;
  ${jt.c}
`,Ot=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__ImageContainer",componentId:"sc-1e4844aa-5"})`
  position: relative;
  width: 100%;
`,Rt=x.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__StyledImage",componentId:"sc-1e4844aa-6"})`
  width: 100%;
  height: 170px;
`,Mt=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__USDCLabel",componentId:"sc-1e4844aa-7"})`
  font-weight: 535;
  font-size: 36px;
  line-height: 44px;
  margin-top: 8px;
  color: white;
`,Ut=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__TextContainer",componentId:"sc-1e4844aa-8"})`
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
`,_t=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__RewardsDetailsContainer",componentId:"sc-1e4844aa-9"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Ht=x.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__CurrencyText",componentId:"sc-1e4844aa-10"})`
  color: white;
  font-weight: 535;
  font-size: 12px;
  line-height: 14.5px;
`,Pt=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__ClaimContainer",componentId:"sc-1e4844aa-11"})`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 380px;
  padding: 60px 28px;
  padding-bottom: 20px;
`,Bt=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__SuccessText",componentId:"sc-1e4844aa-12"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
`,Lt=x.default.a.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__EtherscanLink",componentId:"sc-1e4844aa-13"})`
  text-decoration: none;

  ${jt.c}
`,Ft=(0,x.default)($.UH).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__CloseButton",componentId:"sc-1e4844aa-14"})`
  max-width: 68px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`,Wt=(0,x.default)(w.Tw).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__SyledCloseIcon",componentId:"sc-1e4844aa-15"})`
  float: right;
  height: 24px;

  ${jt.c}
`,Gt=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__Error",componentId:"sc-1e4844aa-16"})`
  display: flex;
  color: ${({theme:e})=>e.critical};
  font-weight: 535;
  line-height: 24px;
  border-radius: 16px;
  padding: 12px 20px;
  font-size: 14px;
  align-items: center;
  gap: 12px;
`,qt=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__ReactLinkWrap",componentId:"sc-1e4844aa-17"})`
  margin-bottom: 40px;
`,Vt=x.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__RewardsText",componentId:"sc-1e4844aa-18"})`
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.white};

  &:first-child {
    margin-bottom: 8px;
  }
`,Qt=x.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__RewardsInformationText",componentId:"sc-1e4844aa-19"})`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral1};
  margin-bottom: 28px;
`,Jt=x.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__MainHeader",componentId:"sc-1e4844aa-20"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.white};
`,Zt=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\AirdropModal\\index__EtherscanLinkWrap",componentId:"sc-1e4844aa-21"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;var Yt;!function(e){e[e.tradingRewardAmount=300]="tradingRewardAmount",e[e.holderRewardAmount=1e3]="holderRewardAmount",e[e.combinedAmount=1300]="combinedAmount"}(Yt||(Yt={}));var Xt,Kt,$t,en,tn,nn,rn,on,sn,an,cn,ln,dn,pn,un,mn,hn=()=>{const{account:e,provider:t}=(0,i.useWeb3React)(),[n,o]=(0,u.useState)(),[s,a]=(0,u.useState)(!1),[c,l]=(0,u.useState)(""),[d,p]=(0,u.useState)(!1),m=(0,kt.k)((e=>e.setIsClaimAvailable)),[h,g]=(0,u.useState)(!1),[f,x]=(0,u.useState)(0),C=(0,P.Wt)(X.Lk.UNISWAP_NFT_AIRDROP_CLAIM),b=(0,P.xk)(X.Lk.UNISWAP_NFT_AIRDROP_CLAIM),v=(0,zt.cq)(y.UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS,bt),z=()=>{g(!1),p(!0),setTimeout((()=>{p(!1)}),5e3)};(0,u.useEffect)((()=>{e&&t&&v&&(async()=>{try{const{data:n}=await(async e=>{const t=`https://temp.api.uniswap.org/v1/nft/rewards/${e}?category=GENIE_UNISWAP_USDC_AIRDROP`,n=new AbortController,r=setTimeout((()=>n.abort()),3e3),o=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});return clearInterval(r),await o.json()})(e),r=n.find((e=>e?.rewardType===Nt.GENIE_UNISWAP_USDC_AIRDROP));if(!r)return;const[i]=await v.connect(t).functions.isClaimed(r?.index);if(r&&!1===i){const e=Ct.O$.from(r.amount).div(10**6);o(r),x(e.toNumber()),m(!0)}}catch(n){z()}})()}),[e,v,t,m]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Me.Z,{hideBorder:!0,isOpen:C,onDismiss:b,maxHeight:90,maxWidth:400,children:(0,r.jsx)(At,{children:s?(0,r.jsxs)(Pt,{children:[(0,r.jsx)(w.Tv.HeadlineSmall,{children:"Congratulations!"}),(0,r.jsxs)(Bt,{children:["You have successfully claimed ",f," USDC. Thank you for supporting Genie.xyz."]}),(0,r.jsx)(Lt,{href:`https://etherscan.io/tx/${c}`,target:"_blank",children:(0,r.jsx)(w.Tv.Link,{children:(0,r.jsxs)(Zt,{children:[(0,r.jsx)("span",{children:"Etherscan"}),(0,r.jsx)(Dt.XC,{})]})})}),(0,r.jsx)(Ft,{size:$.qE.medium,emphasis:$.eI.medium,onClick:b,children:"Close"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Ot,{children:[(0,r.jsxs)(Ut,{children:[(0,r.jsx)(Wt,{onClick:b,stroke:"white"}),(0,r.jsx)(Jt,{children:"Uniswap NFT Airdrop"}),(0,r.jsxs)(Mt,{children:[f," USDC"]}),(0,r.jsx)(St,{}),(0,r.jsxs)(_t,{children:[(0,r.jsx)(Vt,{children:"Trading rewards"})," ",(0,r.jsx)(Ht,{children:f===Yt.tradingRewardAmount||f===Yt.combinedAmount?`${Yt.tradingRewardAmount} USDC`:"0"})]}),(0,r.jsxs)(_t,{children:[(0,r.jsx)(Vt,{children:"Genie NFT holder rewards"})," ",(0,r.jsx)(Ht,{children:f!==Yt.tradingRewardAmount?`${Yt.holderRewardAmount} USDC`:"0"})]})]}),(0,r.jsx)(Rt,{src:yt})]}),(0,r.jsxs)(Et,{children:[(0,r.jsxs)(Qt,{children:["As a long time supporter of Genie, you\u2019ve been awarded ",f," USDC tokens."]}),(0,r.jsx)(qt,{children:(0,r.jsx)(It,{href:"https://uniswap.org/blog/uniswap-nft-aggregator-announcement",target:"_blank",children:(0,r.jsx)(w.Tv.Link,{children:"Read more about Uniswap NFT."})})}),d&&(0,r.jsxs)(Gt,{children:[(0,r.jsx)(j.Z,{}),"Claim USDC failed. Please try again later"]}),(0,r.jsxs)(Tt,{onClick:async()=>{try{if(v&&n&&n.amount&&n.merkleProof&&t){g(!0);const r=await v.connect(t?.getSigner()).functions.claim(n.index,e,n?.amount,n?.merkleProof);await r.wait(),l(r.hash),g(!1),a(!0),m(!1)}}catch(r){g(!1),z()}},size:$.qE.medium,emphasis:$.eI.medium,disabled:h,children:[h&&(0,r.jsx)(vt.ZP,{stroke:"white"}),(0,r.jsxs)("span",{children:["Claim",h&&"ing"," USDC"]})]})]})]})})})})};function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gn.apply(this,arguments)}function fn(e,t){let{title:n,titleId:r,...o}=e;return u.createElement("svg",gn({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 22.773 22.773",style:{enableBackground:"new 0 0 22.773 22.773"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},o),n?u.createElement("title",{id:r},n):null,Xt||(Xt=u.createElement("g",null,u.createElement("g",null,u.createElement("path",{d:"M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"}),u.createElement("path",{d:"M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"})),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null),u.createElement("g",null))),Kt||(Kt=u.createElement("g",null)),$t||($t=u.createElement("g",null)),en||(en=u.createElement("g",null)),tn||(tn=u.createElement("g",null)),nn||(nn=u.createElement("g",null)),rn||(rn=u.createElement("g",null)),on||(on=u.createElement("g",null)),sn||(sn=u.createElement("g",null)),an||(an=u.createElement("g",null)),cn||(cn=u.createElement("g",null)),ln||(ln=u.createElement("g",null)),dn||(dn=u.createElement("g",null)),pn||(pn=u.createElement("g",null)),un||(un=u.createElement("g",null)),mn||(mn=u.createElement("g",null)))}const xn=u.forwardRef(fn);n.p;var wn=n.p+"static/media/base_background_icon.fe80602f4839d08d3ea5bcfaeeddafe4.svg",Cn=n(94903),bn=n(89243),yn=n(49912),jn=n(64614),vn=n.p+"static/media/wallet_banner_phone_image.7458b169d90ac9039783.png";const zn=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Banner\\BaseAnnouncementBanner\\styled__PopupContainer",componentId:"sc-ab959d24-0"})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({show:e})=>!e&&"display: none"};

  background: url(${vn});
  background-repeat: no-repeat;
  background-position: top 18px right 15px;
  background-size: 166px;

  :hover {
    background-size: 170px;
  }
  transition: background-size ${({theme:e})=>e.transition.duration.medium}
    ${({theme:e})=>e.transition.timing.inOut};

  background-color: ${({theme:e})=>e.chain_84531};
  color: ${({theme:e})=>e.neutral1};
  position: fixed;
  z-index: ${B.k.sticky};

  padding: 24px 16px 16px;

  border-radius: 20px;
  bottom: 20px;
  right: 20px;
  width: 390px;
  height: 164px;

  border: 1px solid ${({theme:e})=>e.surface3};

  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    bottom: 62px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    background-position: top 32px right -10px;
    width: unset;
    right: 10px;
    left: 10px;
    height: 144px;
  }

  user-select: none;
`,Dn=x.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Banner\\BaseAnnouncementBanner\\styled__BaseBackgroundImage",componentId:"sc-ab959d24-1"})`
  position: absolute;
  top: 0;
  left: 0;
  height: 138px;
  width: 138px;
`,kn=(0,x.default)(s.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Banner\\BaseAnnouncementBanner\\styled__ButtonRow",componentId:"sc-ab959d24-2"})`
  gap: 16px;
`,Nn=(0,x.default)(W.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Banner\\BaseAnnouncementBanner\\styled__StyledXButton",componentId:"sc-ab959d24-3"})`
  cursor: pointer;
  position: absolute;
  top: 21px;
  right: 17px;

  color: ${({theme:e})=>e.white};
  ${jt.c};
`,An=(0,x.default)($.Yd).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Banner\\BaseAnnouncementBanner\\styled__BannerButton",componentId:"sc-ab959d24-4"})`
  height: 40px;
  border-radius: 16px;
  padding: 10px;
  ${jt.c};
`;function En(){const{chainId:e}=(0,i.useWeb3React)(),[t,n]=(0,jn.tD)(),s=(0,l.TH)(),a="?intro=true"===s.search||"/"===s.pathname,c=Boolean(!t&&!a&&e===y.ChainId.BASE),d=(0,yn.e)(),p=(0,bn.W)();return st.TL?null:(0,r.jsxs)(zn,{show:c,children:[(0,r.jsx)(Nn,{"data-testid":"uniswap-wallet-banner",size:20,onClick:e=>{e.preventDefault(),e.stopPropagation(),n()}}),(0,r.jsx)(Dn,{src:wn,alt:"transparent base background logo"}),(0,r.jsx)(w.Tv.HeadlineMedium,{fontSize:"24px",lineHeight:"28px",color:"white",maxWidth:"224px",children:(0,r.jsx)(o.cC,{id:"+XqHT+",components:{0:(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),1:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.5689 10C19.5689 15.4038 15.1806 19.7845 9.76737 19.7845C4.63163 19.7845 0.418433 15.8414 0 10.8225H12.9554V9.17755H0C0.418433 4.15863 4.63163 0.215576 9.76737 0.215576C15.1806 0.215576 19.5689 4.59621 19.5689 10Z",fill:"white"})}})}),(0,r.jsx)(kn,{children:st.gn?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(An,{backgroundColor:"white",onClick:()=>(0,ct.J8)({element:Oe.xo.UNISWAP_WALLET_BANNER_DOWNLOAD_BUTTON,appStoreParams:"pt=123625782&ct=base-app-banner&mt=8"}),children:[p?(0,r.jsx)(Cn.r,{width:14,height:14}):(0,r.jsx)(xn,{width:14,height:14}),(0,r.jsx)(w.Tv.LabelSmall,{color:"black",marginLeft:"5px",children:d.xs?(0,r.jsx)(o.cC,{id:"n4vt3Q"}):(0,r.jsx)(o.cC,{id:"mzI/c+"})})]}),(0,r.jsx)(An,{backgroundColor:"black",onClick:()=>(0,ct.Rb)(),children:(0,r.jsx)(w.Tv.LabelSmall,{color:"white",children:(0,r.jsx)(o.cC,{id:"zwWKhA"})})})]}):(0,r.jsx)(An,{backgroundColor:"white",width:"125px",onClick:()=>(0,ct.Rb)(),children:(0,r.jsx)(w.Tv.LabelSmall,{color:"black",children:(0,r.jsx)(o.cC,{id:"zwWKhA"})})})})]})}var Tn=n(23586),Sn=n(47096),In=n(83777),On=n(68456),Rn=n(48662),Mn=n(73440);const Un=(0,x.default)(F.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\claim\\AddressClaimModal__ContentWrapper",componentId:"sc-d0a05266-0"})`
  width: 100%;
`,_n=(0,x.default)(ee.I8).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\claim\\AddressClaimModal__ModalUpper",componentId:"sc-d0a05266-1"})`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);
`,Hn=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\claim\\AddressClaimModal__ConfirmOrLoadingWrapper",componentId:"sc-d0a05266-2"})`
  width: 100%;
  padding: 24px;
  position: relative;
  background: ${({activeBG:e})=>e&&"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"};
`,Pn=(0,x.default)(F.lg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\claim\\AddressClaimModal__ConfirmedIcon",componentId:"sc-d0a05266-3"})`
  padding: 60px 0;
`;function Bn({isOpen:e,onDismiss:t}){const{chainId:n}=(0,i.useWeb3React)(),[a,c]=(0,u.useState)("");const{address:l}=(0,Rn.Z)(a),[d,p]=(0,u.useState)(!1),{claimCallback:m}=(0,K.NH)(l),h=(0,K.jX)(l),g=(0,K.ot)(l),[f,x]=(0,u.useState)(),b=(0,ge.ub)(f??""),y=f&&!b;function j(){p(!1),x(void 0),c(""),t()}return(0,r.jsxs)(Me.Z,{isOpen:e,onDismiss:j,maxHeight:90,children:[!d&&(0,r.jsxs)(Un,{gap:"lg",children:[(0,r.jsxs)(_n,{children:[(0,r.jsx)(ee.sq,{}),(0,r.jsx)(ee.RF,{}),(0,r.jsxs)(ee.uO,{gap:"md",children:[(0,r.jsxs)(s.m0,{children:[(0,r.jsx)(w.Tv.DeprecatedWhite,{fontWeight:535,children:(0,r.jsx)(o.cC,{id:"OT2U3c"})}),(0,r.jsx)(w.Tw,{onClick:j,style:{zIndex:99},stroke:"white"})]}),(0,r.jsx)(w.Tv.DeprecatedWhite,{fontWeight:535,fontSize:36,children:(0,r.jsx)(o.cC,{id:"191ekK",values:{0:h?.toFixed(0,{groupSeparator:","}??"-")}})})]}),(0,r.jsx)(ee.SS,{})]}),(0,r.jsxs)(F.Tz,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,r.jsx)(w.Tv.DeprecatedSubHeader,{fontWeight:535,children:(0,r.jsx)(o.cC,{id:"8Utjse"})}),(0,r.jsx)(Mn.Z,{value:a,onChange:function(e){c(e)}}),l&&!g&&(0,r.jsx)(w.Tv.DeprecatedError,{error:!0,children:(0,r.jsx)(o.cC,{id:"YRWR01"})}),(0,r.jsx)($.DF,{disabled:!(0,Tn.isAddress)(l??"")||!g,padding:"16px 16px",width:"100%",$borderRadius:"12px",mt:"1rem",onClick:function(){p(!0),m().then((e=>{x(e)})).catch((e=>{p(!1),console.log(e)}))},children:(0,r.jsx)(o.cC,{id:"Vv5NYl"})})]})]}),(d||y)&&(0,r.jsxs)(Hn,{activeBG:!0,children:[(0,r.jsx)(ee.RF,{}),(0,r.jsx)(ee.MN,{desaturate:!0}),(0,r.jsxs)(s.m0,{children:[(0,r.jsx)("div",{}),(0,r.jsx)(w.Tw,{onClick:j,style:{zIndex:99},stroke:"black"})]}),(0,r.jsx)(Pn,{children:y?(0,r.jsx)(w.M3,{width:"72px",src:Y,alt:"UNI logo"}):(0,r.jsx)(w._1,{src:On.Z,alt:"loader",size:"90px"})}),(0,r.jsxs)(F.Tz,{gap:"100px",justify:"center",children:[(0,r.jsxs)(F.Tz,{gap:"md",justify:"center",children:[(0,r.jsx)(w.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:y?(0,r.jsx)(o.cC,{id:"hRWvpI"}):(0,r.jsx)(o.cC,{id:"KvG1xW"})}),!y&&(0,r.jsx)(Sn.xv,{fontSize:36,color:"#ff007a",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"191ekK",values:{0:h?.toFixed(0,{groupSeparator:","}??"-")}})}),l&&(0,r.jsx)(w.Tv.DeprecatedLargeHeader,{fontWeight:535,color:"black",children:(0,r.jsx)(o.cC,{id:"PqfYW9",values:{0:(0,In.Xn)(l)}})})]}),y&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(w.Tv.DeprecatedSubHeader,{fontWeight:535,color:"black",children:[(0,r.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),(0,r.jsx)(o.cC,{id:"zArj19"}),(0,r.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),d&&!f&&(0,r.jsx)(w.Tv.DeprecatedSubHeader,{color:"black",children:(0,r.jsx)(o.cC,{id:"oG26Rt"})}),d&&f&&!y&&n&&f&&(0,r.jsx)(w.dL,{href:(0,C.E)(n,f,C.r.TRANSACTION),style:{zIndex:99},children:(0,r.jsx)(o.cC,{id:"yVxaEc"})})]})]})]})}var Ln=n(22261);const Fn=(0,x.default)(F.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\ConnectedAccountBlocked\\index__ContentWrapper",componentId:"sc-dff1aa1f-0"})`
  align-items: center;
  margin: 32px;
  text-align: center;
  font-size: 12px;
`;function Wn(e){const t=(0,x.useTheme)();return(0,r.jsx)(Me.Z,{isOpen:e.isOpen,onDismiss:Function.prototype(),children:(0,r.jsxs)(Fn,{children:[(0,r.jsx)(Ln.$,{size:"22px"}),(0,r.jsx)(w.Tv.DeprecatedLargeHeader,{lineHeight:2,marginBottom:1,marginTop:1,children:(0,r.jsx)(o.cC,{id:"c2y/7S"})}),(0,r.jsx)(w.Tv.DeprecatedDarkGray,{fontSize:12,marginBottom:12,children:e.account}),(0,r.jsxs)(w.Tv.DeprecatedMain,{fontSize:14,marginBottom:12,children:[(0,r.jsx)(o.cC,{id:"f1F2ep"})," ",(0,r.jsx)(w.dL,{href:"https://help.uniswap.org/en/articles/6149816",children:(0,r.jsx)(o.cC,{id:"Tz0GSZ"})}),"."]}),(0,r.jsxs)(w.Tv.DeprecatedMain,{fontSize:12,children:[(0,r.jsx)(o.cC,{id:"WpREeE"})," "]}),(0,r.jsx)(w.WD,{toCopy:"compliance@uniswap.org",fontSize:14,iconSize:16,color:t.accent1,iconPosition:"right",children:"compliance@uniswap.org"})]})})}var Gn=n(78174);const qn=["eth","eth_arbitrum","eth_optimism","eth_polygon","weth","wbtc","matic_polygon","polygon","usdc_arbitrum","usdc_optimism","usdc_polygon","usdc","usdt"];var Vn=n(58025),Qn=n(17487);const Jn=[pe.qo.Ethereum,pe.qo.Polygon,pe.qo.Arbitrum,pe.qo.Optimism],Zn={[pe.qo.Ethereum]:{[y.WETH9[y.ChainId.MAINNET]?.address.toLowerCase()]:"weth",[Vn.Hz.address.toLowerCase()]:"usdc",[Vn.AA.address.toLowerCase()]:"usdt",[Vn.ML.address.toLowerCase()]:"wbtc",[Vn.Al.address.toLowerCase()]:"polygon",native:"eth"},[pe.qo.Arbitrum]:{[Vn.pj.address.toLowerCase()]:"usdc_arbitrum",native:"eth_arbitrum"},[pe.qo.Optimism]:{[Vn.SP.address.toLowerCase()]:"usdc_optimism",native:"eth_optimism"},[pe.qo.Polygon]:{[Vn.QF.address.toLowerCase()]:"usdc_polygon",[Vn.H8.address.toLowerCase()]:"eth_polygon",native:"matic_polygon"}};function Yn(e,t){const n=(0,Qn.Qj)(t);if(!e||!n)return"eth";if(Jn.includes(n)){const t=Zn[n]?.[e.toLowerCase()];return t??"eth"}return"eth"}const Xn="#1c1c1e",Kn=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\FiatOnrampModal\\index__Wrapper",componentId:"sc-ff093105-0"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?Xn:t.white};
  border-radius: 20px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  flex: 1 1;
  min-width: 375px;
  position: relative;
  width: 100%;
`,$n=(0,x.default)(w.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\FiatOnrampModal\\index__ErrorText",componentId:"sc-ff093105-1"})`
  color: ${({theme:e})=>e.critical};
  margin: auto !important;
  text-align: center;
  width: 90%;
`,er=x.default.iframe.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\FiatOnrampModal\\index__StyledIframe",componentId:"sc-ff093105-2"})`
  // #1c1c1e is the background color for the darkmode moonpay iframe as of 2/16/2023
  background-color: ${({isDarkMode:e,theme:t})=>e?Xn:t.white};
  border-radius: 12px;
  bottom: 0;
  left: 0;
  height: calc(100% - 16px);
  margin: 8px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 16px);
`,tr=(0,x.default)(w._1).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\FiatOnrampModal\\index__StyledSpinner",componentId:"sc-ff093105-3"})`
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
`;function nr(){const{account:e}=(0,i.useWeb3React)(),t=(0,x.useTheme)(),n=(0,Gn.Gv)(),s=(0,P._x)(),a=(0,P.Wt)(X.Lk.FIAT_ONRAMP),{network:c,tokenAddress:d}=function(e){const t=e.split("/");return{network:t.length>2?t[t.length-2]:void 0,tokenAddress:t.length>2?t[t.length-1]:void 0}}(location.pathname),[p,m]=(0,u.useState)(null),[h,g]=(0,u.useState)(null),[f,C]=(0,u.useState)(!1),b=(0,l.oQ)("/swap"),y=(0,u.useCallback)((async()=>{if(e){C(!0),g(null);try{const r="https://us-central1-uniswap-mobile.cloudfunctions.net/signMoonpayLinkV2?platform=web&env=production",o=await fetch(r,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({theme:n?"dark":"light",colorCode:t.accent1,defaultCurrencyCode:Yn(d,c),redirectUrl:b,walletAddresses:JSON.stringify(qn.reduce(((t,n)=>({...t,[n]:e})),{}))})}),{url:i}=await o.json();m(i)}catch(r){console.log("there was an error fetching the link",r),g(r.toString())}finally{C(!1)}}else g("Please connect an account before making a purchase.")}),[e,n,c,b,t.accent1,d]);return(0,u.useEffect)((()=>{y()}),[y]),(0,r.jsx)(Me.Z,{isOpen:a,onDismiss:()=>s(),height:80,children:(0,r.jsx)(Kn,{"data-testid":"fiat-onramp-modal",isDarkMode:n,children:h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.Tv.MediumHeader,{children:(0,r.jsx)(o.cC,{id:"hn5VGM"})}),(0,r.jsxs)($n,{children:[(0,r.jsx)(o.cC,{id:"ywDBfs"}),(0,r.jsx)("br",{}),h]})]}):f?(0,r.jsx)(tr,{src:On.Z,alt:"loading spinner",size:"90px"}):(0,r.jsx)(er,{src:p??"",frameBorder:"0",title:"fiat-onramp-iframe",isDarkMode:n})})})}var rr=n(57878);const or=(0,x.default)(F.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavBar\\UkDisclaimerModal__Wrapper",componentId:"sc-4f7eabd7-0"})`
  padding: 8px;
`,ir=(0,x.default)(F.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavBar\\UkDisclaimerModal__ButtonContainer",componentId:"sc-4f7eabd7-1"})`
  padding: 8px 12px 4px;
`,sr=(0,x.default)(w.oD).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavBar\\UkDisclaimerModal__CloseIconWrapper",componentId:"sc-4f7eabd7-2"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  justify-content: flex-end;
  padding: 8px 0px 4px;

  :focus {
    text-decoration: none;
  }
`,ar=(0,x.default)($.UH).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavBar\\UkDisclaimerModal__StyledThemeButton",componentId:"sc-4f7eabd7-3"})`
  width: 100%;
`;function cr(){const e=(0,P.Wt)(X.Lk.UK_DISCLAIMER),t=(0,P._x)();return(0,r.jsx)(Me.Z,{isOpen:e,onDismiss:t,children:(0,r.jsxs)(or,{gap:"md",children:[(0,r.jsx)(sr,{onClick:()=>t(),children:(0,r.jsx)(W.Z,{size:24})}),(0,r.jsxs)(F.ZP,{gap:"sm",children:[(0,r.jsx)(w.Tv.HeadlineLarge,{padding:"0px 8px",fontSize:"24px",lineHeight:"32px",children:(0,r.jsx)(o.cC,{id:"mCcDO+"})}),(0,r.jsx)(w.Tv.BodyPrimary,{padding:"8px 8px 12px",lineHeight:"24px",children:rr.Fb})]}),(0,r.jsx)(ir,{gap:"md",children:(0,r.jsx)(ar,{size:$.qE.large,emphasis:$.eI.medium,onClick:()=>t(),children:(0,r.jsx)(o.cC,{id:"1QfxQT"})})})]})})}var lr=n(46839),dr=n(5967),pr=n(67621),ur=n(86333),mr=n(34063);const hr=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\dev\\DevFlagsBox__Box",componentId:"sc-5c44c038-0"})`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: ${({theme:e})=>e.surface1};
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.accent1};
  z-index: 1000;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    bottom: 70px;
  }
`,gr=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\dev\\DevFlagsBox__TopBar",componentId:"sc-5c44c038-1"})`
  display: flex;
  justify-content: space-between;
`,fr=(e,t)=>{const n=(0,ur.useGate)(e);if(n){const{value:o}=n,i=t[e],s=i===lr.Wn.Enabled;if(i&&o!==s)return(0,r.jsxs)(w.Tv.LabelSmall,{children:[e,": ",i]},e)}return null},xr=(e,t)=>{const n=(0,dr.A)(e);if(n){const o=n.getValue(),i=t[e];if(i&&o!==i)return(0,r.jsxs)(w.Tv.LabelSmall,{children:[e,": ",JSON.stringify(i[e])]},e)}return null};function wr(){const e=(0,pr.Dv)(lr.Kd),t=(0,u.useMemo)((()=>Object.values(lr.TT)),[]),n=(0,pr.Dv)(lr.zp),o=(0,u.useMemo)((()=>Object.values(dr.X)),[]),i=t.map((t=>fr(t,e)));o.forEach((e=>i.push(xr(e,n))));const s=i.some((e=>null!==e)),[a,c]=(0,u.useState)(!0);return(0,r.jsxs)(hr,{children:[(0,r.jsxs)(gr,{onClick:()=>c((e=>!e)),children:[a?"\ud83d\ude3a\ud83d\udc47":"\ud83d\ude3f\u261d\ufe0f",a&&(0,r.jsxs)(w.Tv.SubHeader,{children:[(0,mr.mb)()&&"Staging build overrides",(0,mr.aD)()&&"Development build overrides"]})]}),a&&(s?i:(0,r.jsx)(w.Tv.LabelSmall,{children:"No overrides"}))]})}var Cr=n(63498);var br=n(17790),yr=n(69867),jr=n(56878),vr=n(98424),zr=n(55867),Dr=n(2994),kr=n(54212),Nr=n(17669),Ar=n(5658),Er=n(1004),Tr=n(12113),Sr=n(43922),Ir=(n(56605),"hwks9j7 rgw6ezd9 rgw6ez4b9 rgw6ezbl rgw6ezpr rgw6ezv9 rgw6ezvl rgw6ezfx rgw6ezfm"),Or="hwks9jm rgw6ezb9 rgw6ez4bf rgw6ezvr rgw6ezf3",Rr="hwks9jy rgw6ez4bf rgw6ezb3 rgw6ezl3";const Mr=x.default.a.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\TransactionCompleteModal__UploadLink",componentId:"sc-b171e964-0"})`
  position: absolute;
  right: 32px;
  top: 32px;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${jt.c}

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 12px;
    top: 28px;
  }
`;var Ur=()=>{const e=(0,Ar.$N)(),{formatEther:t,formatNumberOrString:n}=(0,fe.Gb)(),[i,s]=(0,u.useState)(!1),a=(0,Ar.pQ)((e=>e.txHash)),c=(0,Ar.pQ)((e=>e.purchasedWithErc20)),l=(0,Ar.pQ)((e=>e.setState)),d=(0,Ar.pQ)((e=>e.state)),p=(0,u.useRef)(d),m=(0,Ar.JC)((e=>e.transactionResponse)),h=(0,Ar.JC)((e=>e.setTransactionResponse)),g=(0,Ar.dD)(),f=(0,C.E)(1,a,C.r.TRANSACTION),x=(d===Er.c$.Success||d===Er.c$.Failed)&&d,w=(0,Re.oO)({modal:Oe.KO.NFT_TX_COMPLETE}),{nftsPurchased:b,nftsNotPurchased:y,showPurchasedModal:j,showRefundModal:v,totalPurchaseValue:z,totalRefundValue:D,totalUSDRefund:k,txFeeFiat:N}=(0,u.useMemo)((()=>(0,Tr.lb)(m,e)),[m,e]);function A(){h({}),l(Er.c$.New)}(0,u.useEffect)((()=>{Ar.pQ.subscribe((e=>p.current=e.state))}),[]);return(0,r.jsx)(r.Fragment,{children:x&&(0,r.jsxs)(zr.h,{children:[(0,r.jsx)(kr.a,{onClick:A}),(0,r.jsxs)(vr.n,{className:"hwks9j1 rgw6ez2dr rgw6ez2j9 rgw6ez2rf rgw6ez2ax rgw6ez44r rgw6ez48r rgw6ez1dr rgw6ez16r rgw6ez16y rgw6ez343 rgw6ez394 rgw6ez3f3 rgw6ez3rl rgw6ez8bp",onClick:A,children:[j&&(0,r.jsx)(Re.fM,{name:Oe.Yz.NFT_BUY_BAG_SUCCEEDED,properties:{buy_quantity:b.length,usd_value:parseFloat((0,yr.formatEther)(z))*e,transaction_hash:a,using_erc20:c,...(0,Sr.H)(b),...w},shouldLogImpression:!0,children:(0,r.jsxs)(vr.n,{className:"hwks9j3 rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ez1dx rgw6ez48x rgw6ez16r rgw6ez16y rgw6ez2pr rgw6ez2ps rgw6ez299 rgw6ez29a",onClick:kr.U,children:[(0,r.jsx)(Dt.jS,{color:Nr.gR.color.pink400,width:"36",height:"36",className:"rgw6ez48l rgw6ez359 rgw6ez36g rgw6ez3gl rgw6ez3gy"}),(0,r.jsxs)(vr.n,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[(0,r.jsx)("h1",{className:Ir,children:(0,r.jsx)(o.cC,{id:"6Mjzfq"})}),(0,r.jsx)("p",{className:"hwks9jd rgw6ez4b9 rgw6ezb9 rgw6ez16r rgw6ez469 rgw6ezpr rgw6ezv9 rgw6ezvl rgw6ezgx",children:(0,r.jsx)(o.cC,{id:"utdv8e"})})]}),(0,r.jsx)(Mr,{onClick:()=>{window.open((0,Tr.fj)(b,f),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,r.jsx)(Dt.Zm,{width:32,height:32,color:Nr.Z4.colors.neutral2})}),(0,r.jsx)(vr.n,{className:"hwks9jf rgw6ez44r rgw6ez443 rgw6ez16r rgw6ez8bp rgw6ez47l",style:{maxHeight:b.length>32?g?"172px":"292px":"min-content"},children:[...b].map(((e,t)=>(0,r.jsx)("img",{className:(0,jr.default)("hwks9jh rgw6ez80x rgw6ez3xr",b.length>1&&"rgw6ezql rgw6ezqy rgw6ezfl rgw6ezfy"),style:{maxHeight:`${(0,Tr.QP)(b.length,g)}px`,maxWidth:`${(0,Tr.QP)(b.length,g)}px`},src:e.imageUrl,alt:e.name},t)))}),b.length>32&&(0,r.jsx)(vr.n,{className:"hwks9jk"}),(0,r.jsxs)(vr.n,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"rgw6ez4b9 rgw6ezb9",justifyContent:"space-between",children:[(0,r.jsxs)(Dr.X2,{children:[(0,r.jsxs)(vr.n,{marginRight:"16",children:[b.length," NFT",1===b.length?"":"s"]}),(0,r.jsxs)(vr.n,{children:[t({input:z.toString(),type:fe.sw.NFTToken})," ","ETH"]})]}),(0,r.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,r.jsx)(vr.n,{color:"neutral2",fontWeight:"book",children:(0,r.jsx)(o.cC,{id:"rd4eHq"})})})]})]})}),v&&(j?(0,r.jsx)(Re.fM,{name:Oe.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:b.length,fail_quantity:y.length,refund_amount_usd:k,transaction_hash:a,...w},shouldLogImpression:!0,children:(0,r.jsxs)(vr.n,{className:"hwks9js rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ez2pl rgw6ez2py rgw6ez2jl rgw6ez2k4 rgw6ez2el rgw6ez2ey rgw6ez1dx rgw6ez16r rgw6ez16y rgw6ez48x rgw6ezwf",onClick:kr.U,children:[(0,r.jsxs)(vr.n,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[(0,r.jsx)(Dt.YG,{color:"pink"}),(0,r.jsx)("p",{className:"hwks9ju rgw6ez4b9 rgw6ezd9 rgw6ezbf rgw6ezl3 rgw6ezv9 rgw6ezf3 rgw6ezka",children:"Instant Refund"}),(0,r.jsxs)("p",{className:"hwks9jw rgw6ez4b9 rgw6ezb9 rgw6ezpr rgw6ezv9 rgw6ezwl rgw6ezgl rgw6ez16r",children:["Uniswap returned"," ",(0,r.jsxs)("span",{style:{fontWeight:"535"},children:[t({input:D.toString(),type:fe.sw.NFTToken})," ","ETH"]})," ","back to your wallet for unavailable items."]}),(0,r.jsxs)(vr.n,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[(0,r.jsxs)("p",{className:Or,style:{marginBottom:"2px"},children:[t({input:D.toString(),type:fe.sw.NFTToken})," ","ETH"]}),(0,r.jsx)("p",{className:Rr,children:n({input:k,type:fe.sw.FiatNFTToken})}),(0,r.jsxs)("p",{className:Or,style:{width:"100%"},children:["for ",y.length," unavailable item",1===y.length?"":"s","."]}),(0,r.jsx)(vr.n,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:(0,r.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,r.jsx)(vr.n,{fontWeight:"book",marginTop:"16",color:"neutral2",className:Or,children:"View on Etherscan"})})})]})]}),(0,r.jsx)(vr.n,{className:"hwks9j10 rgw6ez1dx rgw6ez1ds rgw6ez16r rgw6ez16m rgw6ez443 rgw6ez8bp rgw6ez46x rgw6ez44x rgw6ez2e4",children:y.map(((e,t)=>(0,r.jsx)(vr.n,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:(0,r.jsx)("img",{className:"hwks9j12 rgw6ez1ax rgw6ez13x rgw6ez80p rgw6ezql rgw6ezf9",src:e.imageUrl,alt:e.name},t)},t)))}),(0,r.jsx)(vr.n,{className:"hwks9j14 rgw6ez16r rgw6ez16m rgw6ezpr rgw6ez3q3"})]})}):(0,r.jsx)(Re.fM,{name:Oe.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:0,fail_quantity:y.length,refund_amount_usd:k,...w},shouldLogImpression:!0,children:(0,r.jsxs)(vr.n,{className:"hwks9j16 rgw6ez4qf rgw6ez819 rgw6ez44r rgw6ez443 rgw6ezv9 rgw6ez469 rgw6ezpr rgw6ezoy rgw6ez2vf rgw6ez1dx",onClick:kr.U,children:[(0,r.jsx)(vr.n,{marginLeft:"auto",marginRight:"auto",display:"flex",children:d===Er.c$.Success?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Dt.YG,{}),(0,r.jsx)("h1",{className:Ir,children:"Instant Refund"})]}):(0,r.jsx)("h1",{className:Ir,children:"Failed Transaction"})}),(0,r.jsxs)("p",{className:"hwks9j1c rgw6ez4b9 rgw6ezb9 rgw6ezpr rgw6ezv9 rgw6ezw3",children:[d===Er.c$.Success&&`Selected item${1===b.length?" is":"s are"} no longer available. Uniswap instantly refunded you for this incomplete transaction. `,n({input:N,type:fe.sw.FiatNFTToken})," was used for gas in attempt to complete this transaction. For support, please visit our"," ",(0,r.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),(0,r.jsxs)(vr.n,{className:"hwks9j1e rgw6ez16r",children:[y.length>=3&&(0,r.jsxs)(vr.n,{className:"rgw6ez6rr rgw6ez80p rgw6ez44r rgw6ez443 rgw6ezvr rgw6ezf9 rgw6ez1ax rgw6ez7zd",onClick:()=>{s(!i)},children:[!i&&(0,r.jsx)(vr.n,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:y.slice(0,3).map(((e,t)=>(0,r.jsx)("img",{style:{zIndex:2-t},className:"hwks9j1j rgw6ez80l rgw6ez1a3 rgw6ez133 rgw6ez48x",src:e.imageUrl,alt:e.name},t)))}),(0,r.jsxs)(vr.n,{color:i?"neutral1":"neutral2",className:"hwks9j1l rgw6ez4bf rgw6ezd3 rgw6ezb9 rgw6ez2of rgw6ez27x rgw6ez2dr",children:["Unavailable",(0,r.jsxs)(vr.n,{className:"hwks9j1n rgw6ezd3 rgw6ezb3 rgw6ez44r",children:[y.length," item",1===y.length?"":"s"]})]}),(0,r.jsx)(Dt.g8,{className:`${!i&&"hwks9j1t"} hwks9j1s rgw6ezk9 rgw6ezkl rgw6ezv9 rgw6ez199 rgw6ez129`})]}),(i||y.length<3)&&y.map(((e,n)=>(0,r.jsxs)(vr.n,{backgroundColor:"surface1",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[(0,r.jsx)(vr.n,{className:"hwks9j1o",children:(0,r.jsx)("img",{className:"hwks9j1q rgw6ez80l rgw6ez1er rgw6ez1v3 rgw6ez17r rgw6ez1h3 rgw6ez49f",src:e.imageUrl,alt:e.name})}),(0,r.jsxs)(vr.n,{flexWrap:"wrap",marginTop:"4",children:[(0,r.jsx)(vr.n,{marginLeft:"4",width:"full",display:"flex",children:(0,r.jsxs)("p",{className:Or,style:{marginBottom:"2px"},children:[t({input:e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,type:fe.sw.NFTToken})," ","ETH"]})}),(0,r.jsx)(vr.n,{color:"neutral1",className:Rr,children:d===Er.c$.Success?"Refunded":e.name})]})]},n)))]}),i&&(0,r.jsx)(vr.n,{className:"hwks9j1f"}),(0,r.jsxs)("p",{className:Or,style:{marginBottom:"2px"},children:[t({input:D.toString(),type:fe.sw.NFTToken})," ","ETH"]}),(0,r.jsx)("p",{className:Rr,children:n({input:k,type:fe.sw.FiatNFTToken})}),(0,r.jsx)(vr.n,{className:"hwks9j9 rgw6ez4bf rgw6ezax rgw6ez44r rgw6ez3x rgw6ez1dx rgw6ez3b3",marginLeft:"auto",marginRight:"0",children:(0,r.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(vr.n,{className:"hwks9jb rgw6ez4bf rgw6ezax rgw6ezd3 rgw6ezw3",children:"View on Etherscan"})})}),(0,r.jsxs)("p",{className:Or,children:["for ",y.length," unavailable item",1===y.length?"":"s","."]}),(0,r.jsxs)(vr.n,{as:"button",border:"none",backgroundColor:"accent1",cursor:"pointer",className:"hwks9j18 rgw6ez1a9 rgw6ez469 rgw6ezd9 rgw6ezb9 rgw6ez4df rgw6ez6sl rgw6ez44r rgw6ez3x rgw6ezpr rgw6ezv9 rgw6ezwl",type:"button",onClick:()=>A(),children:[(0,r.jsx)(Dt.pf,{className:"rgw6ez7mr rgw6ezlr rgw6ezs9"}),"Return to Marketplace"]})]})}))]})]})})};function _r(){const e=(0,P.Wt)(X.Lk.ADDRESS_CLAIM),t=(0,P.xk)(X.Lk.ADDRESS_CLAIM),n=(0,P.Wt)(X.Lk.BLOCKED_ACCOUNT),{account:o}=(0,i.useWeb3React)();!function(e){const t=(0,Cr.T)();(0,u.useEffect)((()=>{if(e){const n=`risk-check-${e}`,r=Date.now();try{const o=localStorage.getItem(n);if((o?parseInt(o):r-1)<Date.now()){const n=new Headers({"Content-Type":"application/json"});fetch("https://api.uniswap.org/v1/screen",{method:"POST",headers:n,body:JSON.stringify({address:e})}).then((e=>e.json())).then((e=>{e.block&&t((0,X.i3)(X.Lk.BLOCKED_ACCOUNT))})).catch((()=>{t((0,X.i3)(null))}))}}finally{localStorage.setItem(n,(r+f()("1d")).toString())}}}),[e,t])}(o);const s=Boolean(n&&o),a=(0,mr.aD)()||(0,mr.mb)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Bn,{isOpen:e,onDismiss:t}),(0,r.jsx)(Wn,{account:o,isOpen:s}),(0,r.jsx)(br.ZP,{}),(0,r.jsx)(ft,{}),(0,r.jsx)(En,{}),(0,r.jsx)(se.Cl,{}),(0,r.jsx)(Ur,{}),(0,r.jsx)(hn,{}),(0,r.jsx)(nr,{}),(0,r.jsx)(cr,{}),a&&(0,r.jsx)(wr,{})]})}function Hr(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Se,{}),(0,r.jsx)(H,{}),(0,r.jsx)(_r,{})]})}}}]);
//# sourceMappingURL=5165.8cfcd141.chunk.js.map