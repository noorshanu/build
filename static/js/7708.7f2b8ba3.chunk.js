"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7708],{63548:function(e,n,t){t.d(n,{Z:function(){return Y}});var i=t(42893),r=t(12204),o=t(19903),s=t(80815),a=t(66196),c=t(13119),d=t(92483),l=t(48141),u=t(40508),p=t(13712),m=t(87253),h=t(39839),g=t(47371),x=t(57482),f=t(44326),C=t(42881),y=t(60198),b=t(45533),I=t(56823),v=t(48972),T=t(2304),j=t(20437),N=t(925);const E=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-d932b2bb-0"})`
  ${g.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,R=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-d932b2bb-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,w=(0,m.default)(y.Ux).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-d932b2bb-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,u._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,_=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-d932b2bb-3"})`
  ${g.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,U=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-d932b2bb-4"})`
  ${g.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,D=(0,m.default)(U).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-d932b2bb-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,A=m.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-d932b2bb-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,O=(0,m.default)(f.r).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-d932b2bb-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,k=m.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-d932b2bb-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,P=m.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-d932b2bb-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,S=(0,m.default)(v.I).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-d932b2bb-10"})`
  ${c._Q};
  text-align: left;
`,L=(0,m.default)(d.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-d932b2bb-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function Y({value:e,onUserInput:n,onMax:t,showMaxButton:d,onCurrencySelect:u,currency:g,otherCurrency:f,id:y,showCommonBases:v,showCurrencyAmount:U,disableNonToken:Y,renderBalance:$,fiatValue:q,hideBalance:B=!1,pair:W=null,hideInput:z=!1,locked:G=!1,loading:H=!1,...M}){const[Q,Z]=(0,p.useState)(!1),{account:V,chainId:F}=(0,s.useWeb3React)(),K=(0,C._h)(V??void 0,g??void 0),J=(0,m.useTheme)(),{formatCurrencyAmount:X}=(0,x.Gb)(),ee=(0,p.useCallback)((()=>{Z(!1)}),[Z]),ne=(0,l.EC)(F);return(0,i.jsxs)(E,{id:y,hideInput:z,...M,children:[!G&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(R,{hideInput:z,disabled:!ne,children:[(0,i.jsxs)(_,{style:z?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!z&&(0,i.jsx)(S,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:H}),(0,i.jsx)(L,{shouldFetchOnAccountUpdate:Q,$fullWidth:z,children:(0,i.jsx)(w,{disabled:!ne,visible:void 0!==g,selected:!!g,hideInput:z,className:"open-currency-select-button",onClick:()=>{u&&Z(!0)},pointerEvents:u?void 0:"none",children:(0,i.jsxs)(A,{children:[(0,i.jsxs)(T.DA,{children:[W?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(b.Z,{currency0:W.token0,currency1:W.token1,size:24,margin:!0})}):g&&(0,i.jsx)(I.Z,{style:{marginRight:"0.5rem"},currency:g,size:"24px"}),W?(0,i.jsxs)(k,{className:"pair-name-container",children:[W?.token0.symbol,":",W?.token1.symbol]}):(0,i.jsx)(k,{className:"token-symbol-container",active:Boolean(g&&g.symbol),children:(g&&g.symbol&&g.symbol.length>20?g.symbol.slice(0,4)+"..."+g.symbol.slice(g.symbol.length-5,g.symbol.length):g?.symbol)||(0,i.jsx)(r.cC,{id:"T0Y2+3"})})]}),u&&(0,i.jsx)(O,{selected:!!g})]})})})]}),Boolean(!z&&!B&&g)&&(0,i.jsx)(D,{children:(0,i.jsxs)(T.m0,{children:[(0,i.jsx)(c.EG,{$loading:H,children:q&&(0,i.jsx)(N.x,{fiatValue:q})}),V&&(0,i.jsxs)(T.DA,{style:{height:"17px"},children:[(0,i.jsx)(h.Tv.DeprecatedBody,{onClick:t,color:J.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!B&&g&&K)&&($?.(K)||(0,i.jsx)(r.cC,{id:"VuFd5C",values:{0:X({amount:K,type:x.sw.TokenNonTx})}}))}),Boolean(d&&K)&&(0,i.jsx)(a.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(P,{onClick:t,children:(0,i.jsx)(r.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,i.jsx)(j.Z,{isOpen:Q,onDismiss:ee,onCurrencySelect:u,selectedCurrency:g,otherSelectedCurrency:f,showCommonBases:v,showCurrencyAmount:U,disableNonToken:Y})]})}},4987:function(e,n,t){t.d(n,{q:function(){return v},w:function(){return j}});var i=t(42893),r=t(12204),o=t(80815),s=t(24364),a=t(46591),c=t(41440),d=t(80657),l=t(47096),u=t(63498),p=t(40740),m=t(4292),h=t(87253),g=t(39839),x=t(47371),f=t(2304);const C=h.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-9b3b504e-0"})`
  ${x.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,h.default)(c.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-9b3b504e-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,h.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-9b3b504e-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,I=(0,h.default)(a.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-9b3b504e-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function v({origin:e}){return(0,i.jsx)(C,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(c.rU,{to:e,children:(0,i.jsx)(I,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const T=(0,h.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-9b3b504e-4"})`
  flex: 1;
  margin: auto;
`;function j({adding:e,creating:n,autoSlippage:t,positionID:a,children:c}){const{chainId:g}=(0,o.useWeb3React)(),x=(0,h.useTheme)(),b=(0,u.T)(),v=(0,d.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(a?`/${a.toString()}`:"");return(0,i.jsx)(C,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(y,{to:v,onClick:()=>{e&&(b((0,p.dA)()),b((0,m.dA)()))},flex:c?"1":void 0,children:(0,i.jsx)(I,{stroke:x.neutral2})}),(0,i.jsx)(T,{textAlign:c?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),c&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:c}),(0,i.jsx)(s.Z,{autoSlippage:t,chainId:g,hideRoutingSettings:!0})]})})}},22827:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(42893),r=t(13712);const o=t(87253).default.input.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Slider\\index__StyledRangeInput",componentId:"sc-dce001c3-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function s({value:e,onChange:n,min:t=0,step:s=1,max:a=100,size:c=28,...d}){const l=(0,r.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,i.jsx)(o,{size:c,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:l,"aria-labelledby":"input slider",step:s,min:t,max:a})}},48244:function(e,n,t){t.d(n,{U:function(){return i},q:function(){return f}});var i,r=t(75255),o=t(19903),s=t(80815),a=t(66196),c=t(36665),d=t(5976),l=t(15337),u=t(13712),p=t(54479);function m(e,n,t){const{chainId:m}=(0,s.useWeb3React)(),h=e?.currency?.isToken?e.currency:void 0,g=function(e,n,t){const{account:r}=(0,s.useWeb3React)(),o=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:a}=(0,d.Fx)(o,r??void 0,n),c=t(o,n);return(0,u.useMemo)((()=>e&&n?e.currency.isNative?i.APPROVED:a?a.lessThan(e)?c?i.PENDING:i.NOT_APPROVED:i.APPROVED:i.UNKNOWN:i.UNKNOWN),[e,c,n,a])}(e,n,t),x=(0,c.Ib)(h?.address),f=(0,u.useCallback)((async()=>{function t(e){console.warn(`${h?.symbol||"Token"} approval failed:`,e)}if(g!==i.NOT_APPROVED)return t("approve was called unnecessarily");if(!m)return t("no chainId");if(!h)return t("no token");if(!x)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let s=!1;const c=await x.estimateGas.approve(n,r.Bz).catch((()=>(s=!0,x.estimateGas.approve(n,e.quotient.toString()))));return x.approve(n,s?e.quotient.toString():r.Bz,{gasLimit:(0,p.y)(c)}).then((t=>{const i={chain_id:m,token_symbol:h?.symbol,token_address:(0,l.DT)(h)};return(0,a._P)(o.Je.APPROVE_TOKEN_TXN_SUBMITTED,i),{response:t,tokenAddress:h.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))}),[g,h,x,e,n,m]);return[g,f]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(i||(i={}));var h=t(97905),g=t(843);function x(e){const n=(0,h.h7)();return(0,u.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:i,spenderAddress:r,amount:o}=e;n(t,{type:g.i.APPROVAL,tokenAddress:i,spender:r,amount:o.quotient.toString()})}}))),[n,e])}function f(e,n){const[t,i]=m(e,n,h.wB);return[t,x(i)]}},80558:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(13712);function r(e,n,t=100){const[r,o]=(0,i.useState)((()=>e)),s=(0,i.useRef)(),a=(0,i.useCallback)((e=>{o(e),s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{n(e),s.current=void 0}),t)}),[t,n]);return(0,i.useEffect)((()=>{s.current&&(clearTimeout(s.current),s.current=void 0),o(e)}),[e]),[r,a]}},68434:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(80815),r=t(61646),o=t(13712),s=t(36665);function a(){const{account:e}=(0,i.useWeb3React)(),n=(0,s.c5)(),t=(0,o.useMemo)((()=>[e??void 0]),[e]),a=(0,r.Wk)(n,"isArgentWallet",t,r.DB);return Boolean(a?.result?.[0])}},34603:function(e,n,t){t.d(n,{p:function(){return T}});var i,r=t(39112),o=t(15387),s=t(80815),a=t(44998),c=t.n(a),d=t(61646),l=t(13712),u=t(58025),p=t(36665),m=t(68434);!function(e){e[e.AMOUNT=1]="AMOUNT",e[e.ALLOWED=2]="ALLOWED"}(i||(i={}));const h=1200,g={[o.ChainId.MAINNET]:{[u.Hz.address]:{type:i.AMOUNT,name:"USD Coin",version:"2"},[u.h1.address]:{type:i.ALLOWED,name:"Dai Stablecoin",version:"1"},[u.yg[o.ChainId.MAINNET].address]:{type:i.AMOUNT,name:"Uniswap"}},[o.ChainId.GOERLI]:{[u.yg[o.ChainId.GOERLI].address]:{type:i.AMOUNT,name:"Uniswap"}},[o.ChainId.SEPOLIA]:{[u.yg[o.ChainId.SEPOLIA].address]:{type:i.AMOUNT,name:"Uniswap"}}};var x;!function(e){e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.LOADING=1]="LOADING",e[e.NOT_SIGNED=2]="NOT_SIGNED",e[e.SIGNED=3]="SIGNED"}(x||(x={}));const f=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],C=[{name:"name",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],y=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],b=[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}];var I=t(57282);const v={version:"1",name:"Uniswap V2",type:i.AMOUNT};function T(e,n){return function(e,n,t,o){const{account:a,chainId:u,provider:I}=(0,s.useWeb3React)(),v=e?.currency?.isToken?e.currency.address:void 0,T=(0,p.N9)(v),j=(0,m.Z)(),N=(0,l.useMemo)((()=>[a??void 0]),[a]),E=(0,d.Wk)(T,"nonces",N),R=o??(u&&v?g[u]?.[v]:void 0),[w,_]=(0,l.useState)(null);return(0,l.useMemo)((()=>{if(j||!e||!T||!a||!u||!t||!I||!E.valid||!v||!n||!R)return{state:x.NOT_APPLICABLE,signatureData:null,gatherPermitSignature:null};const o=E.result?.[0]?.toNumber();if(E.loading||"number"!==typeof o)return{state:x.LOADING,signatureData:null,gatherPermitSignature:null};const s=w&&w.owner===a&&w.deadline>=t.toNumber()&&w.tokenAddress===v&&w.nonce===o&&w.spender===n&&("allowed"in w||c().greaterThanOrEqual(c().BigInt(w.amount),e.quotient));return{state:s?x.SIGNED:x.NOT_SIGNED,signatureData:s?w:null,gatherPermitSignature:async function(){const s=R.type===i.ALLOWED,c=t.toNumber()+h,d=e.quotient.toString(),l=s?{holder:a,spender:n,allowed:s,nonce:o,expiry:c}:{owner:a,spender:n,value:d,nonce:o,deadline:c},p=R.version?{name:R.name,version:R.version,verifyingContract:v,chainId:u}:{name:R.name,verifyingContract:v,chainId:u},m=JSON.stringify({types:{EIP712Domain:R.version?f:C,Permit:s?b:y},domain:p,primaryType:"Permit",message:l});return I.send("eth_signTypedData_v4",[a,m]).then(r.splitSignature).then((e=>{_({v:e.v,r:e.r,s:e.s,deadline:c,...s?{allowed:s}:{amount:d},nonce:o,chainId:u,owner:a,spender:n,tokenAddress:v,permitType:R.type})}))}}}),[e,T,a,u,j,t,I,E.loading,E.valid,E.result,v,n,R,w])}(e,n,(0,I.Z)(),v)}},72714:function(e,n,t){t.d(n,{Z:function(){return a},e:function(){return s}});var i=t(42893),r=t(87253),o=t(437);const s=r.default.main.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
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
  z-index: ${o.k.default};
`;function a(e){return(0,i.jsx)(s,{...e})}},67708:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});var i=t(42893),r=t(86003),o=t(12204),s=t(19903),a=t(15387),c=t(80815),d=t(66196),l=t(18646),u=t(22875),p=t(48141),m=t(6053),h=t(34603),g=t(96234),x=t(13712),f=t(49287),C=t(20837),y=t(80657),b=t(47096),I=t(87253),v=t(39839),T=t(60198),j=t(42246),N=t(60476),E=t(63548),R=t(45533),w=t(56823),_=t(4987),U=t(16403),D=t(2304),A=t(22827),O=t(20095),k=t(36727),P=t(58025),S=t(15627),L=t(48244),Y=t(36665),$=t(80558),q=t(57282),B=t(53931),W=t(44998),z=t.n(W),G=t(4572),H=t(63498),M=t(75712),Q=t(97761),Z=t(42881);function V(){return(0,H.C)((e=>e.burn))}var F=t(97905),K=t(843),J=t(64614),X=t(54479),ee=t(39515),ne=t(21103),te=t(72714),ie=t(55494);const re=new a.Percent(5,100);function oe(){const{chainId:e}=(0,c.useWeb3React)(),{currencyIdA:n,currencyIdB:t}=(0,y.UO)(),[r,o]=[(0,S.U8)(n)??void 0,(0,S.U8)(t)??void 0];return(0,p.EC)(e)&&r!==o?(0,i.jsx)(se,{}):(0,i.jsx)(g.PositionPageUnsupportedContent,{})}function se(){const e=(0,y.s0)(),{currencyIdA:n,currencyIdB:t}=(0,y.UO)(),[p,g]=[(0,S.U8)(n)??void 0,(0,S.U8)(t)??void 0],{account:W,chainId:oe,provider:se}=(0,c.useWeb3React)(),[ae,ce]=(0,x.useMemo)((()=>[p?.wrapped,g?.wrapped]),[p,g]),de=(0,I.useTheme)(),le=(0,d.oO)(),ue=(0,l.LK)(),{independentField:pe,typedValue:me}=V(),{pair:he,parsedAmounts:ge,error:xe}=function(e,n){const{account:t}=(0,c.useWeb3React)(),{independentField:r,typedValue:s}=V(),[,d]=(0,Q.Oo)(e,n),l=(0,Z.Z)(t??void 0,[d?.liquidityToken]),u=l?.[d?.liquidityToken?.address??""],[p,m]=[e?.wrapped,n?.wrapped],h={[B.g.CURRENCY_A]:p,[B.g.CURRENCY_B]:m,[B.g.LIQUIDITY]:d?.liquidityToken},g=(0,M.A)(d?.liquidityToken),x=d&&g&&u&&p&&z().greaterThanOrEqual(g.quotient,u.quotient)?a.CurrencyAmount.fromRawAmount(p,d.getLiquidityValue(p,g,u,!1).quotient):void 0,f=d&&g&&u&&m&&z().greaterThanOrEqual(g.quotient,u.quotient)?a.CurrencyAmount.fromRawAmount(m,d.getLiquidityValue(m,g,u,!1).quotient):void 0,C={[B.g.CURRENCY_A]:x,[B.g.CURRENCY_B]:f};let y=new a.Percent("0","100");if(r===B.g.LIQUIDITY_PERCENT)y=new a.Percent(s,"100");else if(r===B.g.LIQUIDITY){if(d?.liquidityToken){const e=(0,G.Z)(s,d.liquidityToken);e&&u&&!e.greaterThan(u)&&(y=new a.Percent(e.quotient,u.quotient))}}else if(h[r]){const e=(0,G.Z)(s,h[r]),n=C[r];e&&n&&!e.greaterThan(n)&&(y=new a.Percent(e.quotient,n.quotient))}const b={[B.g.LIQUIDITY_PERCENT]:y,[B.g.LIQUIDITY]:u&&y&&y.greaterThan("0")?a.CurrencyAmount.fromRawAmount(u.currency,y.multiply(u.quotient).quotient):void 0,[B.g.CURRENCY_A]:p&&y&&y.greaterThan("0")&&x?a.CurrencyAmount.fromRawAmount(p,y.multiply(x.quotient).quotient):void 0,[B.g.CURRENCY_B]:m&&y&&y.greaterThan("0")&&f?a.CurrencyAmount.fromRawAmount(m,y.multiply(f.quotient).quotient):void 0};let I;return t||(I=(0,i.jsx)(o.cC,{id:"VHOVEJ"})),b[B.g.LIQUIDITY]&&b[B.g.CURRENCY_A]&&b[B.g.CURRENCY_B]||(I=I??(0,i.jsx)(o.cC,{id:"iPMIoT"})),{pair:d,parsedAmounts:b,error:I}}(p??void 0,g??void 0),{onUserInput:fe}=function(){const e=(0,H.T)();return{onUserInput:(0,x.useCallback)(((n,t)=>{e((0,B.L)({field:n,typedValue:t}))}),[e])}}(),Ce=!xe,[ye,be]=(0,x.useState)(!1),[Ie,ve]=(0,x.useState)(!1),[Te,je]=(0,x.useState)(!1),[Ne,Ee]=(0,x.useState)(""),Re=(0,q.Z)(),we=(0,J.eq)(re),_e={[B.g.LIQUIDITY_PERCENT]:ge[B.g.LIQUIDITY_PERCENT].equalTo("0")?"0":ge[B.g.LIQUIDITY_PERCENT].lessThan(new a.Percent("1","100"))?"<1":ge[B.g.LIQUIDITY_PERCENT].toFixed(0),[B.g.LIQUIDITY]:pe===B.g.LIQUIDITY?me:ge[B.g.LIQUIDITY]?.toSignificant(6)??"",[B.g.CURRENCY_A]:pe===B.g.CURRENCY_A?me:ge[B.g.CURRENCY_A]?.toSignificant(6)??"",[B.g.CURRENCY_B]:pe===B.g.CURRENCY_B?me:ge[B.g.CURRENCY_B]?.toSignificant(6)??""},Ue=ge[B.g.LIQUIDITY_PERCENT]?.equalTo(new a.Percent("1")),De=(0,Y.t0)(he?.liquidityToken?.address),Ae=(0,Y.XF)(),{gatherPermitSignature:Oe,signatureData:ke}=(0,h.p)(ge[B.g.LIQUIDITY],Ae?.address),[Pe,Se]=(0,L.q)(ge[B.g.LIQUIDITY],Ae?.address);const Le=(0,x.useCallback)(((e,n)=>fe(e,n)),[fe]),Ye=(0,x.useCallback)((e=>Le(B.g.LIQUIDITY,e)),[Le]),$e=(0,x.useCallback)((e=>Le(B.g.CURRENCY_A,e)),[Le]),qe=(0,x.useCallback)((e=>Le(B.g.CURRENCY_B,e)),[Le]),Be=(0,F.h7)(),We=(0,m.G)();async function ze(){if(!oe||!se||!W||!Re||!Ae||!We)throw new Error("missing dependencies");const{[B.g.CURRENCY_A]:e,[B.g.CURRENCY_B]:n}=ge;if(!e||!n)throw new Error("missing currency amounts");const t={[B.g.CURRENCY_A]:(0,ee.u)(e,we)[0],[B.g.CURRENCY_B]:(0,ee.u)(n,we)[0]};if(!p||!g)throw new Error("missing tokens");const i=ge[B.g.LIQUIDITY];if(!i)throw new Error("missing liquidity amount");const o=g.isNative,a=p.isNative||o;if(!ae||!ce)throw new Error("could not wrap");let c,l;if(Pe===L.U.APPROVED)a?(c=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],l=[o?ae.address:ce.address,i.quotient.toString(),t[o?B.g.CURRENCY_A:B.g.CURRENCY_B].toString(),t[o?B.g.CURRENCY_B:B.g.CURRENCY_A].toString(),W,Re.toHexString()]):(c=["removeLiquidity"],l=[ae.address,ce.address,i.quotient.toString(),t[B.g.CURRENCY_A].toString(),t[B.g.CURRENCY_B].toString(),W,Re.toHexString()]);else{if(null===ke)throw new Error("Attempting to confirm without approval or a signature. Please contact support.");a?(c=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],l=[o?ae.address:ce.address,i.quotient.toString(),t[o?B.g.CURRENCY_A:B.g.CURRENCY_B].toString(),t[o?B.g.CURRENCY_B:B.g.CURRENCY_A].toString(),W,ke.deadline,!1,ke.v,ke.r,ke.s]):(c=["removeLiquidityWithPermit"],l=[ae.address,ce.address,i.quotient.toString(),t[B.g.CURRENCY_A].toString(),t[B.g.CURRENCY_B].toString(),W,ke.deadline,!1,ke.v,ke.r,ke.s])}const u=await Promise.all(c.map((e=>Ae.estimateGas[e](...l).then((e=>(0,X.y)(e))).catch((n=>{console.error("estimateGas failed",e,l,n)}))))),m=u.findIndex((e=>r.O$.isBigNumber(e)));if(-1===m)console.error("This transaction would fail. Please contact support.");else{const e=c[m],n=u[m];je(!0),await Ae[e](...l,{gasLimit:n}).then((e=>{je(!1),Be(e,{type:K.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,ne.H)(p),quoteCurrencyId:(0,ne.H)(g),expectedAmountBaseRaw:ge[B.g.CURRENCY_A]?.quotient.toString()??"0",expectedAmountQuoteRaw:ge[B.g.CURRENCY_B]?.quotient.toString()??"0"}),Ee(e.hash),(0,d._P)(s.vp.REMOVE_LIQUIDITY_SUBMITTED,{label:[p.symbol,g.symbol].join("/"),...le})})).catch((e=>{je(!1),console.error(e)}))}}function Ge(){return(0,i.jsxs)(N.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,i.jsxs)(D.m0,{align:"flex-end",children:[(0,i.jsx)(b.xv,{fontSize:24,fontWeight:535,children:ge[B.g.CURRENCY_A]?.toSignificant(6)}),(0,i.jsxs)(D.DA,{gap:"4px",children:[(0,i.jsx)(w.Z,{currency:p,size:"24px"}),(0,i.jsx)(b.xv,{fontSize:24,fontWeight:535,style:{marginLeft:"10px"},children:p?.symbol})]})]}),(0,i.jsx)(D.DA,{children:(0,i.jsx)(f.Z,{size:"16",color:de.neutral2})}),(0,i.jsxs)(D.m0,{align:"flex-end",children:[(0,i.jsx)(b.xv,{fontSize:24,fontWeight:535,children:ge[B.g.CURRENCY_B]?.toSignificant(6)}),(0,i.jsxs)(D.DA,{gap:"4px",children:[(0,i.jsx)(w.Z,{currency:g,size:"24px"}),(0,i.jsx)(b.xv,{fontSize:24,fontWeight:535,style:{marginLeft:"10px"},children:g?.symbol})]})]}),(0,i.jsx)(v.Tv.DeprecatedItalic,{fontSize:12,color:de.neutral2,textAlign:"left",padding:"12px 0 0 0",children:(0,i.jsx)(o.cC,{id:"4nBvG6",values:{0:we.toSignificant(4)}})})]})}function He(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D.m0,{children:[(0,i.jsx)(b.xv,{color:de.neutral2,fontWeight:535,fontSize:16,children:(0,i.jsx)(o.cC,{id:"pKfYXn",values:{0:p?.symbol,1:g?.symbol}})}),(0,i.jsxs)(D.DA,{children:[(0,i.jsx)(R.Z,{currency0:p,currency1:g,margin:!0}),(0,i.jsx)(b.xv,{fontWeight:535,fontSize:16,children:ge[B.g.LIQUIDITY]?.toSignificant(6)})]})]}),he&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D.m0,{children:[(0,i.jsx)(b.xv,{color:de.neutral2,fontWeight:535,fontSize:16,children:(0,i.jsx)(o.cC,{id:"a7u1N9"})}),(0,i.jsxs)(b.xv,{fontWeight:535,fontSize:16,color:de.neutral1,children:["1 ",p?.symbol," = ",ae?he.priceOf(ae).toSignificant(6):"-"," ",g?.symbol]})]}),(0,i.jsxs)(D.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsxs)(b.xv,{fontWeight:535,fontSize:16,color:de.neutral1,children:["1 ",g?.symbol," = ",ce?he.priceOf(ce).toSignificant(6):"-"," ",p?.symbol]})]})]}),(0,i.jsx)(T.DF,{disabled:!(Pe===L.U.APPROVED||null!==ke),onClick:ze,children:(0,i.jsx)(b.xv,{fontWeight:535,fontSize:20,children:(0,i.jsx)(o.cC,{id:"7VpPHA"})})})]})}const Me=(0,i.jsx)(o.cC,{id:"OqNe1s",values:{0:ge[B.g.CURRENCY_A]?.toSignificant(6),1:p?.symbol,2:ge[B.g.CURRENCY_B]?.toSignificant(6),3:g?.symbol}}),Qe=(0,x.useCallback)((e=>{Le(B.g.LIQUIDITY_PERCENT,e.toString())}),[Le]),Ze=p?.isNative||g?.isNative,Ve=Boolean(oe&&P.Fl[oe]&&(p&&P.Fl[oe]?.equals(p)||g&&P.Fl[oe]?.equals(g))),Fe=(0,x.useCallback)((i=>{t&&(0,ne.H)(i)===t?e(`/remove/v2/${(0,ne.H)(i)}/${n}`):e(`/remove/v2/${(0,ne.H)(i)}/${t}`)}),[n,t,e]),Ke=(0,x.useCallback)((i=>{n&&(0,ne.H)(i)===n?e(`/remove/v2/${t}/${(0,ne.H)(i)}`):e(`/remove/v2/${n}/${(0,ne.H)(i)}`)}),[n,t,e]),Je=(0,x.useCallback)((()=>{be(!1),Ne&&Le(B.g.LIQUIDITY_PERCENT,"0"),Ee("")}),[Le,Ne]),[Xe,en]=(0,$.Z)(Number.parseInt(ge[B.g.LIQUIDITY_PERCENT].toFixed(0)),Qe);return We?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(te.Z,{children:[(0,i.jsx)(_.w,{creating:!1,adding:!1,autoSlippage:re}),(0,i.jsxs)(ie.im,{children:[(0,i.jsx)(k.Z,{isOpen:ye,onDismiss:Je,attemptingTxn:Te,hash:Ne||"",reviewContent:()=>(0,i.jsx)(k.p,{title:(0,i.jsx)(o.cC,{id:"AeZIvT"}),onDismiss:Je,topContent:Ge,bottomContent:He}),pendingText:Me}),(0,i.jsxs)(N.Tz,{gap:"md",children:[(0,i.jsx)(j.Pj,{children:(0,i.jsx)(N.Tz,{gap:"10px",children:(0,i.jsx)(v.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,i.jsx)(o.cC,{id:"Vp58p0",components:{0:(0,i.jsx)("b",{})}})})})}),(0,i.jsx)(j.hl,{children:(0,i.jsxs)(N.Tz,{gap:"20px",children:[(0,i.jsxs)(D.m0,{children:[(0,i.jsx)(b.xv,{fontWeight:535,children:(0,i.jsx)(o.cC,{id:"nC4M5t"})}),(0,i.jsx)(ie.DC,{fontWeight:535,onClick:()=>{ve(!Ie)},children:Ie?(0,i.jsx)(o.cC,{id:"AQK14J"}):(0,i.jsx)(o.cC,{id:"tUVwfQ"})})]}),(0,i.jsx)(D.ZP,{style:{alignItems:"flex-end"},children:(0,i.jsxs)(b.xv,{fontSize:72,fontWeight:535,children:[_e[B.g.LIQUIDITY_PERCENT],"%"]})}),!Ie&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A.Z,{value:Xe,onChange:en}),(0,i.jsxs)(D.m0,{children:[(0,i.jsx)(ie.ER,{onClick:()=>Le(B.g.LIQUIDITY_PERCENT,"25"),width:"20%",children:"25%"}),(0,i.jsx)(ie.ER,{onClick:()=>Le(B.g.LIQUIDITY_PERCENT,"50"),width:"20%",children:"50%"}),(0,i.jsx)(ie.ER,{onClick:()=>Le(B.g.LIQUIDITY_PERCENT,"75"),width:"20%",children:"75%"}),(0,i.jsx)(ie.ER,{onClick:()=>Le(B.g.LIQUIDITY_PERCENT,"100"),width:"20%",children:"Max"})]})]})]})}),!Ie&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N.lg,{children:(0,i.jsx)(C.Z,{size:"16",color:de.neutral2})}),(0,i.jsx)(j.hl,{children:(0,i.jsxs)(N.Tz,{gap:"10px",children:[(0,i.jsxs)(D.m0,{children:[(0,i.jsx)(b.xv,{fontSize:24,fontWeight:535,children:_e[B.g.CURRENCY_A]||"-"}),(0,i.jsxs)(D.DA,{children:[(0,i.jsx)(w.Z,{currency:p,style:{marginRight:"12px"}}),(0,i.jsx)(b.xv,{fontSize:24,fontWeight:535,id:"remove-liquidity-tokena-symbol",children:p?.symbol})]})]}),(0,i.jsxs)(D.m0,{children:[(0,i.jsx)(b.xv,{fontSize:24,fontWeight:535,children:_e[B.g.CURRENCY_B]||"-"}),(0,i.jsxs)(D.DA,{children:[(0,i.jsx)(w.Z,{currency:g,style:{marginRight:"12px"}}),(0,i.jsx)(b.xv,{fontSize:24,fontWeight:535,id:"remove-liquidity-tokenb-symbol",children:g?.symbol})]})]}),oe&&(Ve||Ze)?(0,i.jsx)(D.m0,{style:{justifyContent:"flex-end"},children:Ze?(0,i.jsx)(v.m_,{to:`/remove/v2/${p?.isNative&&oe&&P.Fl[oe]?P.Fl[oe]?.address:n}/${g?.isNative&&oe&&P.Fl[oe]?P.Fl[oe]?.address:t}`,children:"Receive WETH"}):Ve?(0,i.jsx)(v.m_,{to:`/remove/v2/${p&&P.Fl[oe]?.equals(p)?"ETH":n}/${g&&P.Fl[oe]?.equals(g)?"ETH":t}`,children:"Receive ETH"}):null}):null]})})]}),Ie&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(E.Z,{value:_e[B.g.LIQUIDITY],onUserInput:Ye,onMax:()=>{Le(B.g.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ue,currency:he?.liquidityToken,pair:he,id:"liquidity-amount"}),(0,i.jsx)(N.lg,{children:(0,i.jsx)(C.Z,{size:"16",color:de.neutral2})}),(0,i.jsx)(E.Z,{hideBalance:!0,value:_e[B.g.CURRENCY_A],onUserInput:$e,onMax:()=>Le(B.g.LIQUIDITY_PERCENT,"100"),showMaxButton:!Ue,currency:p,label:"Output",onCurrencySelect:Fe,id:"remove-liquidity-tokena"}),(0,i.jsx)(N.lg,{children:(0,i.jsx)(f.Z,{size:"16",color:de.neutral2})}),(0,i.jsx)(E.Z,{hideBalance:!0,value:_e[B.g.CURRENCY_B],onUserInput:qe,onMax:()=>Le(B.g.LIQUIDITY_PERCENT,"100"),showMaxButton:!Ue,currency:g,label:"Output",onCurrencySelect:Ke,id:"remove-liquidity-tokenb"})]}),he&&(0,i.jsxs)("div",{style:{padding:"10px 20px"},children:[(0,i.jsxs)(D.m0,{children:[(0,i.jsx)(o.cC,{id:"rcNnsQ"}),(0,i.jsxs)("div",{children:["1 ",p?.symbol," = ",ae?he.priceOf(ae).toSignificant(6):"-"," ",g?.symbol]})]}),(0,i.jsxs)(D.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsxs)("div",{children:["1 ",g?.symbol," = ",ce?he.priceOf(ce).toSignificant(6):"-"," ",p?.symbol]})]})]}),(0,i.jsx)("div",{style:{position:"relative"},children:W?(0,i.jsxs)(D.m0,{children:[(0,i.jsx)(T.gn,{onClick:async function(){if(!De||!he||!se||!Re)throw new Error("missing dependencies");if(!ge[B.g.LIQUIDITY])throw new Error("missing liquidity amount");if(Oe)try{await Oe()}catch(xe){4001!==xe?.code&&await Se()}else await Se()},confirmed:Pe===L.U.APPROVED||null!==ke,disabled:Pe!==L.U.NOT_APPROVED||null!==ke,mr:"0.5rem",fontWeight:535,fontSize:16,children:Pe===L.U.PENDING?(0,i.jsx)(O.bb,{children:(0,i.jsx)(o.cC,{id:"j2Uisd"})}):Pe===L.U.APPROVED||null!==ke?(0,i.jsx)(o.cC,{id:"7kb4LU"}):(0,i.jsx)(o.cC,{id:"Z7ZXbT"})}),(0,i.jsx)(T.Kd,{onClick:()=>{be(!0)},disabled:!Ce||null===ke&&Pe!==L.U.APPROVED,error:!Ce&&!!ge[B.g.CURRENCY_A]&&!!ge[B.g.CURRENCY_B],children:(0,i.jsx)(b.xv,{fontSize:16,fontWeight:535,children:xe||(0,i.jsx)(o.cC,{id:"t/YqKh"})})})]}):(0,i.jsx)(d.M8,{events:[s.TM.onClick],name:s.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:s.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(T.Sy,{onClick:ue,children:(0,i.jsx)(o.cC,{id:"VHOVEJ"})})})})]})]})]}),he?(0,i.jsx)(N.Tz,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:(0,i.jsx)(U.WP,{showUnwrapped:Ve,pair:he})}):null]}):(0,i.jsx)(u.A,{})}},39515:function(e,n,t){t.d(n,{u:function(){return r}});const i=new(t(15387).Fraction)(1,1);function r(e,n){if(n.lessThan(0)||n.greaterThan(i))throw new Error("Unexpected slippage");return[e.multiply(i.subtract(n)).quotient,e.multiply(i.add(n)).quotient]}},49287:function(e,n,t){var i=t(13712),r=t(41432),o=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,d=a(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Plus",n.Z=c}}]);
//# sourceMappingURL=7708.7f2b8ba3.chunk.js.map