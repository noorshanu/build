"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8164],{26900:function(e,t,n){n.d(t,{Z:function(){return j}});var o=n(42893),i=n(12204),r=n(19903),s=n(35206),a=n(80815),u=n(66196),c=n(60198),d=n(42246),l=n(60476),p=n(2304),m=n(92796),f=n(55831),C=n.n(f),g=n(13712),b=n(68187),I=n(1152),h=n(56762);const R=I.ZP`
  query FeeTierDistribution($token0: String!, $token1: String!) {
    _meta {
      block {
        number
      }
    }
    asToken0: pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: { token0: $token0, token1: $token1 }
    ) {
      feeTier
      totalValueLockedToken0
      totalValueLockedToken1
    }
    asToken1: pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: { token0: $token1, token1: $token0 }
    ) {
      feeTier
      totalValueLockedToken0
      totalValueLockedToken1
    }
  }
`;var A=n(46109);const T=20;function v(e,t){const{isLoading:n,error:o,distributions:i}=function(e,t){const n=(0,m.ZP)(),{isLoading:o,error:i,data:r}=function(e,t,n){const{data:o,loading:i,error:r}=(0,b.a)(R,{variables:{token0:e?.toLowerCase(),token1:t?.toLowerCase()},pollInterval:n,client:h.l8});return(0,g.useMemo)((()=>({error:r,isLoading:i,data:o})),[o,r,i])}(e?.address,t?.address,C()("30s")),{asToken0:a,asToken1:u,_meta:c}=r??{};return(0,g.useMemo)((()=>{if(!n||!c||!a||!u)return{isLoading:o,error:i};if(n-(c?.block?.number??0)>T)return console.log(`Graph stale (latest block: ${n})`),{isLoading:o,error:i};const e=a.concat(u).reduce(((e,t)=>(e[t.feeTier][0]=(e[t.feeTier][0]??0)+Number(t.totalValueLockedToken0),e[t.feeTier][1]=(e[t.feeTier][1]??0)+Number(t.totalValueLockedToken1),e)),{[s.FeeAmount.LOWEST]:[void 0,void 0],[s.FeeAmount.LOW]:[void 0,void 0],[s.FeeAmount.MEDIUM]:[void 0,void 0],[s.FeeAmount.HIGH]:[void 0,void 0]}),[t,r]=Object.values(e).reduce(((e,t)=>(e[0]+=t[0]??0,e[1]+=t[1]??0,e)),[0,0]),d=(e,t,n,o)=>void 0===e&&void 0===n?void 0:((e??0)+(n??0))/(t+o)||0,l={[s.FeeAmount.LOWEST]:d(e[s.FeeAmount.LOWEST][0],t,e[s.FeeAmount.LOWEST][1],r),[s.FeeAmount.LOW]:d(e[s.FeeAmount.LOW][0],t,e[s.FeeAmount.LOW][1],r),[s.FeeAmount.MEDIUM]:d(e[s.FeeAmount.MEDIUM][0],t,e[s.FeeAmount.MEDIUM][1],r),[s.FeeAmount.HIGH]:d(e[s.FeeAmount.HIGH][0],t,e[s.FeeAmount.HIGH][1],r)};return{isLoading:o,error:i,distributions:l}}),[c,a,u,o,i,n])}(e?.wrapped,t?.wrapped),[r]=(0,A.AI)(e,t,s.FeeAmount.LOWEST),[a]=(0,A.AI)(e,t,s.FeeAmount.LOW),[u]=(0,A.AI)(e,t,s.FeeAmount.MEDIUM),[c]=(0,A.AI)(e,t,s.FeeAmount.HIGH);return(0,g.useMemo)((()=>{if(n||o||!i)return{isLoading:n,isError:!!o,distributions:i};const e=Object.keys(i).map((e=>Number(e))).filter((e=>0!==i[e]&&void 0!==i[e])).reduce(((e,t)=>(i[e]??0)>(i[t]??0)?e:t),-1),t=n||o||!i||r===A.tK.LOADING||a===A.tK.LOADING||u===A.tK.LOADING||c===A.tK.LOADING?void 0:{[s.FeeAmount.LOWEST]:r===A.tK.EXISTS?100*(i[s.FeeAmount.LOWEST]??0):void 0,[s.FeeAmount.LOW]:a===A.tK.EXISTS?100*(i[s.FeeAmount.LOW]??0):void 0,[s.FeeAmount.MEDIUM]:u===A.tK.EXISTS?100*(i[s.FeeAmount.MEDIUM]??0):void 0,[s.FeeAmount.HIGH]:c===A.tK.EXISTS?100*(i[s.FeeAmount.HIGH]??0):void 0};return{isLoading:n,isError:!!o,distributions:t,largestUsageFeeTier:-1===e?void 0:e}}),[n,o,i,r,a,u,c])}var y=n(44922),N=n(28233),x=n(47096),E=n(87253),k=n(39839),O=n(57482),S=n(80485);function _({feeAmount:e,distributions:t,poolState:n}){return(0,o.jsx)(S.Z,{children:(0,o.jsx)(k.Tv.DeprecatedLabel,{fontSize:10,children:t&&n!==A.tK.NOT_EXISTS&&n!==A.tK.INVALID?void 0!==t[e]?(0,o.jsx)(i.cC,{id:"P1NNMy",values:{0:t[e]?.toFixed(0)}}):(0,o.jsx)(i.cC,{id:"plhHQt"}):(0,o.jsx)(i.cC,{id:"cKHbrZ"})})})}var P=n(15387);const U={[s.FeeAmount.LOWEST]:{label:"0.01",description:(0,o.jsx)(i.cC,{id:"6AHHoU"}),supportedChains:[P.ChainId.ARBITRUM_ONE,P.ChainId.BNB,P.ChainId.CELO,P.ChainId.CELO_ALFAJORES,P.ChainId.MAINNET,P.ChainId.OPTIMISM,P.ChainId.POLYGON,P.ChainId.POLYGON_MUMBAI,P.ChainId.AVALANCHE,P.ChainId.BASE]},[s.FeeAmount.LOW]:{label:"0.05",description:(0,o.jsx)(i.cC,{id:"ig/lul"}),supportedChains:P.SUPPORTED_CHAINS},[s.FeeAmount.MEDIUM]:{label:"0.3",description:(0,o.jsx)(i.cC,{id:"DlUgFZ"}),supportedChains:P.SUPPORTED_CHAINS},[s.FeeAmount.HIGH]:{label:"1",description:(0,o.jsx)(i.cC,{id:"fiGxJ/"}),supportedChains:P.SUPPORTED_CHAINS}},L=(0,E.default)(k.Tv.DeprecatedLabel).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\FeeSelector\\FeeOption__ResponsiveText",componentId:"sc-23e76025-0"})`
  line-height: 16px;
  font-size: 14px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 12px;
    line-height: 12px;
  `};
`;function D({feeAmount:e,active:t,poolState:n,distributions:r,onClick:s}){const{formatDelta:a}=(0,O.Gb)();return(0,o.jsx)(c.ro,{active:t,onClick:s,children:(0,o.jsxs)(l.Tz,{gap:"sm",justify:"flex-start",children:[(0,o.jsxs)(l.Tz,{justify:"flex-start",gap:"6px",children:[(0,o.jsx)(L,{children:(0,o.jsx)(i.cC,{id:"J/hVSQ",values:{0:a(parseFloat(U[e].label))}})}),(0,o.jsx)(k.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:U[e].description})]}),r&&(0,o.jsx)(_,{distributions:r,feeAmount:e,poolState:n})]})})}const M=(0,E.default)(d.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\FeeSelector\\index__FocusedOutlineCard",componentId:"sc-124e6df0-0"})`
  border: 1px solid ${({theme:e})=>e.surface3};
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,E.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.6s linear;
  align-self: center;
`,w=E.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\FeeSelector\\index__Select",componentId:"sc-124e6df0-1"})`
  align-items: flex-start;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
`;function j({disabled:e=!1,feeAmount:t,handleFeePoolSelect:n,currencyA:d,currencyB:m}){const{chainId:f}=(0,a.useWeb3React)(),C=(0,u.oO)(),{formatDelta:b}=(0,O.Gb)(),{isLoading:I,isError:h,largestUsageFeeTier:R,distributions:T}=v(d,m),E=(0,A.Oh)([[d,m,s.FeeAmount.LOWEST],[d,m,s.FeeAmount.LOW],[d,m,s.FeeAmount.MEDIUM],[d,m,s.FeeAmount.HIGH]]),S=(0,g.useMemo)((()=>E.reduce(((e,[t,n])=>e={...e,[n?.fee]:t}),{[s.FeeAmount.LOWEST]:A.tK.NOT_EXISTS,[s.FeeAmount.LOW]:A.tK.NOT_EXISTS,[s.FeeAmount.MEDIUM]:A.tK.NOT_EXISTS,[s.FeeAmount.HIGH]:A.tK.NOT_EXISTS})),[E]),[P,L]=(0,g.useState)(!1),[j,F]=(0,g.useState)(!1),W=(0,y.Z)(t),B=(0,g.useRef)(!1),G=(0,g.useCallback)((e=>{(0,u._P)(r.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:r.jI.MANUAL,...C}),n(e)}),[n,C]);return(0,g.useEffect)((()=>{t||I||h||(R?(L(!1),B.current=!0,(0,u._P)(r.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:r.jI.RECOMMENDED,...C}),n(R)):L(!0))}),[t,I,h,R,n,C]),(0,g.useEffect)((()=>{L(h)}),[h]),(0,g.useEffect)((()=>{t&&W!==t&&F(!0)}),[W,t]),(0,o.jsx)(l.Tz,{gap:"16px",children:(0,o.jsxs)(N.DD,{gap:"md",disabled:e,children:[(0,o.jsx)(M,{pulsing:j,onAnimationEnd:()=>F(!1),children:(0,o.jsxs)(p.m0,{children:[(0,o.jsx)(l.Tz,{id:"add-liquidity-selected-fee",children:t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k.Tv.DeprecatedLabel,{className:"selected-fee-label",children:(0,o.jsx)(i.cC,{id:"GczB8z",values:{0:b(parseFloat(U[t].label))}})}),(0,o.jsx)(x.xu,{style:{width:"fit-content",marginTop:"8px"},className:"selected-fee-percentage",children:T&&(0,o.jsx)(_,{distributions:T,feeAmount:t,poolState:S[t]})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k.Tv.DeprecatedLabel,{children:(0,o.jsx)(i.cC,{id:"EU3wU4"})}),(0,o.jsx)(k.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:(0,o.jsx)(i.cC,{id:"8ZKEXr"})})]})}),(0,o.jsx)(c.Ux,{onClick:()=>L(!P),width:"auto",padding:"4px",$borderRadius:"6px",children:P?(0,o.jsx)(i.cC,{id:"vLyv1R"}):(0,o.jsx)(i.cC,{id:"ePK91l"})})]})}),f&&P&&(0,o.jsx)(w,{children:[s.FeeAmount.LOWEST,s.FeeAmount.LOW,s.FeeAmount.MEDIUM,s.FeeAmount.HIGH].map(((e,n)=>{const{supportedChains:i}=U[e];return i.includes(f)?(0,o.jsx)(D,{feeAmount:e,active:t===e,onClick:()=>G(e),distributions:T,poolState:S[e]},n):null}))})]})})}},22614:function(e,t,n){n.d(t,{Z:function(){return O}});var o=n(42893),i=n(12204),r=n(60198),s=n(42246),a=n(60476),u=n(13712),c=n(49287),d=n(41432),l=n.n(d);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=(0,u.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,r=void 0===i?24:i,s=m(e,["color","size"]);return u.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));f.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},f.displayName="Minus";var C=f,g=n(87253),b=n(39839),I=n(48972);const h=g.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\InputStepCounter\\InputStepCounter__InputRow",componentId:"sc-61277ae6-0"})`
  display: flex;
`,R=(0,g.default)(r.Ux).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\InputStepCounter\\InputStepCounter__SmallButton",componentId:"sc-61277ae6-1"})`
  border-radius: 8px;
  padding: 4px;
`,A=(0,g.default)(s.nq).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\InputStepCounter\\InputStepCounter__FocusedOutlineCard",componentId:"sc-61277ae6-2"})`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,g.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.8s linear;
`,T=(0,g.default)(I.I).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\InputStepCounter\\InputStepCounter__StyledInput",componentId:"sc-61277ae6-3"})`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,v=(0,g.default)(a.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\InputStepCounter\\InputStepCounter__InputColumn",componentId:"sc-61277ae6-4"})`
  width: 100%;
`,y=(0,g.default)(b.Tv.DeprecatedSmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\InputStepCounter\\InputStepCounter__InputTitle",componentId:"sc-61277ae6-5"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 12px;
  font-weight: 535;
`,N=(0,g.default)(b.Tv.DeprecatedWhite).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\InputStepCounter\\InputStepCounter__ButtonLabel",componentId:"sc-61277ae6-6"})`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`;var x=({value:e,decrement:t,increment:n,decrementDisabled:r=!1,incrementDisabled:s=!1,width:d,locked:l,onUserInput:p,title:m,tokenA:f,tokenB:g})=>{const[b,I]=(0,u.useState)(!1),[x,E]=(0,u.useState)(""),[k,O]=(0,u.useState)(!1),[S,_]=(0,u.useState)(!1),P=(0,u.useCallback)((()=>{O(!1),I(!1),p(x)}),[x,p]),U=(0,u.useCallback)((()=>{O(!1),p(t())}),[t,p]),L=(0,u.useCallback)((()=>{O(!1),p(n())}),[n,p]);return(0,u.useEffect)((()=>{x===e||k||setTimeout((()=>{E(e),_(!0),setTimeout((function(){_(!1)}),1800)}),0)}),[x,k,e]),(0,o.jsx)(A,{pulsing:S,active:b,onFocus:()=>{O(!0),I(!0)},onBlur:P,width:d,children:(0,o.jsxs)(h,{children:[(0,o.jsxs)(v,{justify:"flex-start",children:[(0,o.jsx)(y,{fontSize:12,textAlign:"center",children:m}),(0,o.jsx)(T,{className:"rate-input-0",value:x,fontSize:"20px",disabled:l,onUserInput:e=>{E(e)}}),(0,o.jsx)(y,{fontSize:12,textAlign:"left",children:(0,o.jsx)(i.cC,{id:"1/LP4K",values:{tokenB:g,tokenA:f}})})]}),(0,o.jsxs)(a.Tz,{gap:"8px",children:[!l&&(0,o.jsx)(R,{"data-testid":"increment-price-range",onClick:L,disabled:s,children:(0,o.jsx)(N,{disabled:s,fontSize:"12px",children:(0,o.jsx)(c.Z,{size:18})})}),!l&&(0,o.jsx)(R,{"data-testid":"decrement-price-range",onClick:U,disabled:r,children:(0,o.jsx)(N,{disabled:r,fontSize:"12px",children:(0,o.jsx)(C,{size:18})})})]})]})})},E=n(2304),k=n(4292);function O({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:r,getDecrementLower:s,getIncrementLower:a,getDecrementUpper:u,getIncrementUpper:c,currencyA:d,currencyB:l,feeAmount:p,ticksAtLimit:m}){const f=(d??void 0)?.wrapped,C=(l??void 0)?.wrapped,g=f&&C&&f.sortsBefore(C),b=g?e:t?.invert(),I=g?t:e?.invert();return(0,o.jsxs)(E.BA,{gap:"md",children:[(0,o.jsx)(x,{value:m[g?k.Mb.LOWER:k.Mb.UPPER]?"0":b?.toSignificant(8)??"",onUserInput:n,decrement:g?s:c,increment:g?a:u,decrementDisabled:void 0===b||m[g?k.Mb.LOWER:k.Mb.UPPER],incrementDisabled:void 0===b||m[g?k.Mb.LOWER:k.Mb.UPPER],feeAmount:p,label:b?`${l?.symbol}`:"-",title:(0,o.jsx)(i.cC,{id:"uEoBVI"}),tokenA:d?.symbol,tokenB:l?.symbol}),(0,o.jsx)(x,{value:m[g?k.Mb.UPPER:k.Mb.LOWER]?"\u221e":I?.toSignificant(8)??"",onUserInput:r,decrement:g?u:a,increment:g?c:s,incrementDisabled:void 0===I||m[g?k.Mb.UPPER:k.Mb.LOWER],decrementDisabled:void 0===I||m[g?k.Mb.UPPER:k.Mb.LOWER],feeAmount:p,label:I?`${l?.symbol}`:"-",tokenA:d?.symbol,tokenB:l?.symbol,title:(0,o.jsx)(i.cC,{id:"kAC8rT"})})]})}},48244:function(e,t,n){n.d(t,{U:function(){return o},q:function(){return b}});var o,i=n(75255),r=n(19903),s=n(80815),a=n(66196),u=n(36665),c=n(5976),d=n(15337),l=n(13712),p=n(54479);function m(e,t,n){const{chainId:m}=(0,s.useWeb3React)(),f=e?.currency?.isToken?e.currency:void 0,C=function(e,t,n){const{account:i}=(0,s.useWeb3React)(),r=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:a}=(0,c.Fx)(r,i??void 0,t),u=n(r,t);return(0,l.useMemo)((()=>e&&t?e.currency.isNative?o.APPROVED:a?a.lessThan(e)?u?o.PENDING:o.NOT_APPROVED:o.APPROVED:o.UNKNOWN:o.UNKNOWN),[e,u,t,a])}(e,t,n),g=(0,u.Ib)(f?.address),b=(0,l.useCallback)((async()=>{function n(e){console.warn(`${f?.symbol||"Token"} approval failed:`,e)}if(C!==o.NOT_APPROVED)return n("approve was called unnecessarily");if(!m)return n("no chainId");if(!f)return n("no token");if(!g)return n("tokenContract is null");if(!e)return n("missing amount to approve");if(!t)return n("no spender");let s=!1;const u=await g.estimateGas.approve(t,i.Bz).catch((()=>(s=!0,g.estimateGas.approve(t,e.quotient.toString()))));return g.approve(t,s?e.quotient.toString():i.Bz,{gasLimit:(0,p.y)(u)}).then((n=>{const o={chain_id:m,token_symbol:f?.symbol,token_address:(0,d.DT)(f)};return(0,a._P)(r.Je.APPROVE_TOKEN_TXN_SUBMITTED,o),{response:n,tokenAddress:f.address,spenderAddress:t,amount:e}})).catch((e=>{throw n(e),e}))}),[C,f,g,e,t,m]);return[C,b]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(o||(o={}));var f=n(97905),C=n(843);function g(e){const t=(0,f.h7)();return(0,l.useCallback)((()=>e().then((e=>{if(e){const{response:n,tokenAddress:o,spenderAddress:i,amount:r}=e;t(n,{type:C.i.APPROVAL,tokenAddress:o,spender:i,amount:r.quotient.toString()})}}))),[t,e])}function b(e,t){const[n,o]=m(e,t,f.wB);return[n,g(o)]}},68434:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(80815),i=n(61646),r=n(13712),s=n(36665);function a(){const{account:e}=(0,o.useWeb3React)(),t=(0,s.c5)(),n=(0,r.useMemo)((()=>[e??void 0]),[e]),a=(0,i.Wk)(t,"isArgentWallet",n,i.DB);return Boolean(a?.result?.[0])}},28233:function(e,t,n){n.d(t,{DD:function(){return u},Fy:function(){return c},SF:function(){return l},Sx:function(){return d},im:function(){return s},zH:function(){return a}});var o=n(60476),i=n(48972),r=n(87253);const s=r.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AddLiquidity\\styled__Wrapper",componentId:"sc-aea7ef4-0"})`
  position: relative;
  padding: 26px 16px;
`,a=r.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AddLiquidity\\styled__ScrollablePage",componentId:"sc-aea7ef4-1"})`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,u=(0,r.default)(o.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AddLiquidity\\styled__DynamicSection",componentId:"sc-aea7ef4-2"})`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,c=(0,r.default)(i.I).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AddLiquidity\\styled__StyledInput",componentId:"sc-aea7ef4-3"})`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,d=r.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AddLiquidity\\styled__ResponsiveTwoColumns",componentId:"sc-aea7ef4-4"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,l=r.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AddLiquidity\\styled__MediumOnly",componentId:"sc-aea7ef4-5"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`},72714:function(e,t,n){n.d(t,{Z:function(){return a},e:function(){return s}});var o=n(42893),i=n(87253),r=n(437);const s=i.default.main.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${r.k.default};
`;function a(e){return(0,o.jsx)(s,{...e})}},33699:function(e,t,n){n.d(t,{a6:function(){return v},m2:function(){return T},EG:function(){return A},KS:function(){return R}});var o=n(42893),i=n(12204),r=n(15387),s=n(35206),a=n(80815),u=n(46109),c=n(44998),d=n.n(c),l=n(4572),p=n(13712),m=n(41440),f=n(63498);function C(e,t,n){if(e&&t&&"number"===typeof n)return(0,s.tickToPrice)(e,t,n)}var g=n(91101),b=n(42881),I=n(4292);function h(e,t,n,o){if(!e||!t||!n||!o)return;const i=function(e,t,n){if(!e||!t||!n)return;if(!n.match(/^\d*\.?\d+$/))return;const[o,i]=n.split("."),s=i?.length??0,a=d().BigInt((o??"")+(i??""));return new r.Price(e,t,d().multiply(d().BigInt(10**s),d().BigInt(10**e.decimals)),d().multiply(a,d().BigInt(10**t.decimals)))}(e,t,o);if(!i)return;let a;const u=(0,s.encodeSqrtRatioX96)(i.numerator,i.denominator);return a=d().greaterThanOrEqual(u,s.TickMath.MAX_SQRT_RATIO)?s.TickMath.MAX_TICK:d().lessThanOrEqual(u,s.TickMath.MIN_SQRT_RATIO)?s.TickMath.MIN_TICK:(0,s.priceToClosestTick)(i),(0,s.nearestUsableTick)(a,s.TICK_SPACINGS[n])}function R(){return(0,f.C)((e=>e.mintV3))}function A(e){const t=(0,f.T)(),n=(0,p.useCallback)((n=>{t((0,I.LC)({field:I.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),o=(0,p.useCallback)((n=>{t((0,I.LC)({field:I.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e]),[i,r]=(0,m.lr)();return{onFieldAInput:n,onFieldBInput:o,onLeftRangeInput:(0,p.useCallback)((e=>{t((0,I.yw)({typedValue:e}));const n=i.get("minPrice");(!n||n&&n!==e)&&(i.set("minPrice",e),r(i))}),[t,i,r]),onRightRangeInput:(0,p.useCallback)((e=>{t((0,I.ay)({typedValue:e}));const n=i.get("maxPrice");(!n||n&&n!==e)&&(i.set("maxPrice",e),r(i))}),[t,i,r]),onStartPriceInput:(0,p.useCallback)((e=>{t((0,I.A8)({typedValue:e}))}),[t])}}function T(e,t,n,c,m){const{account:f}=(0,a.useWeb3React)(),{independentField:A,typedValue:T,leftRangeTypedValue:v,rightRangeTypedValue:y,startPriceTypedValue:N}=R(),x=A===I.gN.CURRENCY_A?I.gN.CURRENCY_B:I.gN.CURRENCY_A,E=(0,p.useMemo)((()=>({[I.gN.CURRENCY_A]:e,[I.gN.CURRENCY_B]:t})),[e,t]),[k,O,S]=(0,p.useMemo)((()=>[e?.wrapped,t?.wrapped,c?.wrapped]),[e,t,c]),[_,P]=(0,p.useMemo)((()=>k&&O?k.sortsBefore(O)?[k,O]:[O,k]:[void 0,void 0]),[k,O]),U=(0,b.K5)(f??void 0,(0,p.useMemo)((()=>[E[I.gN.CURRENCY_A],E[I.gN.CURRENCY_B]]),[E])),L={[I.gN.CURRENCY_A]:U[0],[I.gN.CURRENCY_B]:U[1]},[D,M]=(0,u.AI)(E[I.gN.CURRENCY_A],E[I.gN.CURRENCY_B],n),w=D===u.tK.NOT_EXISTS,j=Boolean(S&&_&&!S.equals(_)),F=(0,p.useMemo)((()=>{if(!w)return M&&_?M.priceOf(_):void 0;{const e=(0,l.Z)(N,j?_:P);if(e&&_&&P){const t=(0,l.Z)("1",j?P:_),n=t&&e?new r.Price(t.currency,e.currency,t.quotient,e.quotient):void 0;return(j?n?.invert():n)??void 0}}}),[w,N,j,P,_,M]),W=(0,p.useMemo)((()=>{const e=F?(0,s.encodeSqrtRatioX96)(F.numerator,F.denominator):void 0;return F&&e&&!(d().greaterThanOrEqual(e,s.TickMath.MIN_SQRT_RATIO)&&d().lessThan(e,s.TickMath.MAX_SQRT_RATIO))}),[F]),B=(0,p.useMemo)((()=>{if(k&&O&&n&&F&&!W){const e=(0,s.priceToClosestTick)(F),t=s.TickMath.getSqrtRatioAtTick(e);return new s.Pool(k,O,n,t,d().BigInt(0),e,[])}}),[n,W,F,k,O]),G=M??B,H=(0,p.useMemo)((()=>({[I.Mb.LOWER]:n?(0,s.nearestUsableTick)(s.TickMath.MIN_TICK,s.TICK_SPACINGS[n]):void 0,[I.Mb.UPPER]:n?(0,s.nearestUsableTick)(s.TickMath.MAX_TICK,s.TICK_SPACINGS[n]):void 0})),[n]),$=(0,p.useMemo)((()=>({[I.Mb.LOWER]:"number"===typeof m?.tickLower?m.tickLower:j&&"boolean"===typeof y||!j&&"boolean"===typeof v?H[I.Mb.LOWER]:j?h(P,_,n,y.toString()):h(_,P,n,v.toString()),[I.Mb.UPPER]:"number"===typeof m?.tickUpper?m.tickUpper:!j&&"boolean"===typeof y||j&&"boolean"===typeof v?H[I.Mb.UPPER]:j?h(P,_,n,v.toString()):h(_,P,n,y.toString())})),[m,n,j,v,y,_,P,H]),{[I.Mb.LOWER]:K,[I.Mb.UPPER]:q}=$||{},V=(0,p.useMemo)((()=>({[I.Mb.LOWER]:n&&K===H.LOWER,[I.Mb.UPPER]:n&&q===H.UPPER})),[H,K,q,n]),z=Boolean("number"===typeof K&&"number"===typeof q&&K>=q),Y=(0,p.useMemo)((()=>({[I.Mb.LOWER]:C(_,P,H.LOWER),[I.Mb.UPPER]:C(_,P,H.UPPER)})),[_,P,H.LOWER,H.UPPER]),X=(0,p.useMemo)((()=>({[I.Mb.LOWER]:C(_,P,$[I.Mb.LOWER]),[I.Mb.UPPER]:C(_,P,$[I.Mb.UPPER])})),[_,P,$]),{[I.Mb.LOWER]:Z,[I.Mb.UPPER]:Q}=X,J=Boolean(!z&&F&&Z&&Q&&(F.lessThan(Z)||F.greaterThan(Q))),ee=(0,l.Z)(T,E[A]),te=(0,p.useMemo)((()=>{const n=ee?.wrapped,o=x===I.gN.CURRENCY_B?t:e;if(ee&&n&&"number"===typeof K&&"number"===typeof q&&G){if(J||z)return;const e=n.currency.equals(G.token0)?s.Position.fromAmount0({pool:G,tickLower:K,tickUpper:q,amount0:ee.quotient,useFullPrecision:!0}):s.Position.fromAmount1({pool:G,tickLower:K,tickUpper:q,amount1:ee.quotient}),t=n.currency.equals(G.token0)?e.amount1:e.amount0;return o&&r.CurrencyAmount.fromRawAmount(o,t.quotient)}}),[ee,J,x,t,e,K,q,G,z]),ne=(0,p.useMemo)((()=>({[I.gN.CURRENCY_A]:A===I.gN.CURRENCY_A?ee:te,[I.gN.CURRENCY_B]:A===I.gN.CURRENCY_A?te:ee})),[te,ee,A]),oe=Boolean("number"===typeof q&&G&&G.tickCurrent>=q),ie=Boolean("number"===typeof K&&G&&G.tickCurrent<=K),re=z||Boolean(oe&&G&&k&&G.token0.equals(k)||ie&&G&&k&&G.token1.equals(k)),se=z||Boolean(oe&&G&&O&&G.token0.equals(O)||ie&&G&&O&&G.token1.equals(O)),ae=(0,p.useMemo)((()=>{if(!G||!k||!O||"number"!==typeof K||"number"!==typeof q||z)return;const e=oe?g.iV:ne?.[k.equals(G.token0)?I.gN.CURRENCY_A:I.gN.CURRENCY_B]?.quotient,t=ie?g.iV:ne?.[k.equals(G.token0)?I.gN.CURRENCY_B:I.gN.CURRENCY_A]?.quotient;return void 0!==e&&void 0!==t?s.Position.fromAmounts({pool:G,tickLower:K,tickUpper:q,amount0:e,amount1:t,useFullPrecision:!0}):void 0}),[ne,G,k,O,oe,ie,z,K,q]);let ue;f||(ue=(0,o.jsx)(i.cC,{id:"VHOVEJ"})),D===u.tK.INVALID&&(ue=ue??(0,o.jsx)(i.cC,{id:"R7D79P"})),W&&(ue=ue??(0,o.jsx)(i.cC,{id:"HXBqgG"})),(ne[I.gN.CURRENCY_A]||re)&&(ne[I.gN.CURRENCY_B]||se)||(ue=ue??(0,o.jsx)(i.cC,{id:"iPMIoT"}));const{[I.gN.CURRENCY_A]:ce,[I.gN.CURRENCY_B]:de}=ne;ce&&L?.[I.gN.CURRENCY_A]?.lessThan(ce)&&(ue=(0,o.jsx)(i.cC,{id:"m6RmA/",values:{0:E[I.gN.CURRENCY_A]?.symbol}})),de&&L?.[I.gN.CURRENCY_B]?.lessThan(de)&&(ue=(0,o.jsx)(i.cC,{id:"m6RmA/",values:{0:E[I.gN.CURRENCY_B]?.symbol}}));const le=D===u.tK.INVALID;return{dependentField:x,currencies:E,pool:M,poolState:D,currencyBalances:L,parsedAmounts:ne,ticks:$,price:F,pricesAtTicks:X,pricesAtLimit:Y,position:ae,noLiquidity:w,errorMessage:ue,invalidPool:le,invalidRange:z,outOfRange:J,depositADisabled:re,depositBDisabled:se,invertPrice:j,ticksAtLimit:V}}function v(e,t,n,o,i,a){const u=(0,f.T)(),c=(0,p.useMemo)((()=>e?.wrapped),[e]),d=(0,p.useMemo)((()=>t?.wrapped),[t]);return{getDecrementLower:(0,p.useCallback)((()=>{if(c&&d&&"number"===typeof o&&n){return(0,s.tickToPrice)(c,d,o-s.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&c&&d&&n&&a){return(0,s.tickToPrice)(c,d,a.tickCurrent-s.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[c,d,o,n,a]),getIncrementLower:(0,p.useCallback)((()=>{if(c&&d&&"number"===typeof o&&n){return(0,s.tickToPrice)(c,d,o+s.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&c&&d&&n&&a){return(0,s.tickToPrice)(c,d,a.tickCurrent+s.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[c,d,o,n,a]),getDecrementUpper:(0,p.useCallback)((()=>{if(c&&d&&"number"===typeof i&&n){return(0,s.tickToPrice)(c,d,i-s.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&c&&d&&n&&a){return(0,s.tickToPrice)(c,d,a.tickCurrent-s.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[c,d,i,n,a]),getIncrementUpper:(0,p.useCallback)((()=>{if(c&&d&&"number"===typeof i&&n){return(0,s.tickToPrice)(c,d,i+s.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&c&&d&&n&&a){return(0,s.tickToPrice)(c,d,a.tickCurrent+s.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[c,d,i,n,a]),getSetFullRange:(0,p.useCallback)((()=>{u((0,I._h)())}),[u])}}},49287:function(e,t,n){var o=n(13712),i=n(41432),r=n.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=(0,o.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,u=void 0===r?24:r,c=a(e,["color","size"]);return o.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));u.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},u.displayName="Plus",t.Z=u}}]);
//# sourceMappingURL=8164.b9b1fcb4.chunk.js.map