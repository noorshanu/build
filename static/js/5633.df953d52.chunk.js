"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5633],{63548:function(e,n,t){t.d(n,{Z:function(){return z}});var i=t(42893),s=t(12204),r=t(19903),o=t(80815),c=t(66196),a=t(13119),d=t(92483),l=t(48141),u=t(40508),p=t(13712),m=t(87253),h=t(39839),b=t(47371),x=t(57482),f=t(44326),g=t(42881),y=t(60198),C=t(45533),j=t(56823),v=t(48972),w=t(2304),_=t(20437),D=t(925);const I=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-d932b2bb-0"})`
  ${b.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,$=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-d932b2bb-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,T=(0,m.default)(y.Ux).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-d932b2bb-2"})`
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
`,N=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-d932b2bb-3"})`
  ${b.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,k=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-d932b2bb-4"})`
  ${b.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,U=(0,m.default)(k).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-d932b2bb-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,O=m.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-d932b2bb-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,S=(0,m.default)(f.r).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-d932b2bb-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,G=m.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-d932b2bb-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,H=m.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-d932b2bb-9"})`
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
`,A=(0,m.default)(v.I).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-d932b2bb-10"})`
  ${a._Q};
  text-align: left;
`,B=(0,m.default)(d.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-d932b2bb-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function z({value:e,onUserInput:n,onMax:t,showMaxButton:d,onCurrencySelect:u,currency:b,otherCurrency:f,id:y,showCommonBases:v,showCurrencyAmount:k,disableNonToken:z,renderBalance:P,fiatValue:M,hideBalance:E=!1,pair:R=null,hideInput:W=!1,locked:Z=!1,loading:F=!1,...L}){const[Y,q]=(0,p.useState)(!1),{account:X,chainId:V}=(0,o.useWeb3React)(),J=(0,g._h)(X??void 0,b??void 0),K=(0,m.useTheme)(),{formatCurrencyAmount:Q}=(0,x.Gb)(),ee=(0,p.useCallback)((()=>{q(!1)}),[q]),ne=(0,l.EC)(V);return(0,i.jsxs)(I,{id:y,hideInput:W,...L,children:[!Z&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)($,{hideInput:W,disabled:!ne,children:[(0,i.jsxs)(N,{style:W?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!W&&(0,i.jsx)(A,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:F}),(0,i.jsx)(B,{shouldFetchOnAccountUpdate:Y,$fullWidth:W,children:(0,i.jsx)(T,{disabled:!ne,visible:void 0!==b,selected:!!b,hideInput:W,className:"open-currency-select-button",onClick:()=>{u&&q(!0)},pointerEvents:u?void 0:"none",children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(w.DA,{children:[R?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(C.Z,{currency0:R.token0,currency1:R.token1,size:24,margin:!0})}):b&&(0,i.jsx)(j.Z,{style:{marginRight:"0.5rem"},currency:b,size:"24px"}),R?(0,i.jsxs)(G,{className:"pair-name-container",children:[R?.token0.symbol,":",R?.token1.symbol]}):(0,i.jsx)(G,{className:"token-symbol-container",active:Boolean(b&&b.symbol),children:(b&&b.symbol&&b.symbol.length>20?b.symbol.slice(0,4)+"..."+b.symbol.slice(b.symbol.length-5,b.symbol.length):b?.symbol)||(0,i.jsx)(s.cC,{id:"T0Y2+3"})})]}),u&&(0,i.jsx)(S,{selected:!!b})]})})})]}),Boolean(!W&&!E&&b)&&(0,i.jsx)(U,{children:(0,i.jsxs)(w.m0,{children:[(0,i.jsx)(a.EG,{$loading:F,children:M&&(0,i.jsx)(D.x,{fiatValue:M})}),X&&(0,i.jsxs)(w.DA,{style:{height:"17px"},children:[(0,i.jsx)(h.Tv.DeprecatedBody,{onClick:t,color:K.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!E&&b&&J)&&(P?.(J)||(0,i.jsx)(s.cC,{id:"VuFd5C",values:{0:Q({amount:J,type:x.sw.TokenNonTx})}}))}),Boolean(d&&J)&&(0,i.jsx)(c.M8,{events:[r.TM.onClick],name:r.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:r.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(H,{onClick:t,children:(0,i.jsx)(s.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,i.jsx)(_.Z,{isOpen:Y,onDismiss:ee,onCurrencySelect:u,selectedCurrency:b,otherSelectedCurrency:f,showCommonBases:v,showCurrencyAmount:k,disableNonToken:z})]})}},4987:function(e,n,t){t.d(n,{q:function(){return v},w:function(){return _}});var i=t(42893),s=t(12204),r=t(80815),o=t(24364),c=t(46591),a=t(41440),d=t(80657),l=t(47096),u=t(63498),p=t(40740),m=t(4292),h=t(87253),b=t(39839),x=t(47371),f=t(2304);const g=h.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-9b3b504e-0"})`
  ${x.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,h.default)(a.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-9b3b504e-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,C=(0,h.default)(b.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-9b3b504e-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,h.default)(c.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-9b3b504e-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function v({origin:e}){return(0,i.jsx)(g,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(a.rU,{to:e,children:(0,i.jsx)(j,{})}),(0,i.jsx)(C,{children:(0,i.jsx)(s.cC,{id:"LCFvJr"})})]})})}const w=(0,h.default)(b.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-9b3b504e-4"})`
  flex: 1;
  margin: auto;
`;function _({adding:e,creating:n,autoSlippage:t,positionID:c,children:a}){const{chainId:b}=(0,r.useWeb3React)(),x=(0,h.useTheme)(),C=(0,u.T)(),v=(0,d.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(c?`/${c.toString()}`:"");return(0,i.jsx)(g,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(y,{to:v,onClick:()=>{e&&(C((0,p.dA)()),C((0,m.dA)()))},flex:a?"1":void 0,children:(0,i.jsx)(j,{stroke:x.neutral2})}),(0,i.jsx)(w,{textAlign:a?"start":"center",children:n?(0,i.jsx)(s.cC,{id:"ma87bD"}):e?(0,i.jsx)(s.cC,{id:"E6MqGy"}):(0,i.jsx)(s.cC,{id:"cJtosk"})}),a&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:a}),(0,i.jsx)(o.Z,{autoSlippage:t,chainId:b,hideRoutingSettings:!0})]})})}},71607:function(e,n,t){t.d(n,{Z:function(){return j}});var i=t(42893),s=t(12204),r=t(80815),o=t(60198),c=t(42246),a=t(60476),d=t(56823),l=t(79371),u=t(2304),p=t(13712),m=t(87253),h=t(39839),b=t(437),x=t(15627),f=t(34120);const g=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\swap\\UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-c2e8cd5b-0"})`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${b.k.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,y=(0,m.default)(o.qL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\swap\\UnsupportedCurrencyFooter__StyledButtonEmpty",componentId:"sc-c2e8cd5b-1"})`
  text-decoration: none;
`,C=(0,m.default)(h.Tv.DeprecatedBlue).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\swap\\UnsupportedCurrencyFooter__AddressText",componentId:"sc-c2e8cd5b-2"})`
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function j({show:e,currencies:n}){const{chainId:t}=(0,r.useWeb3React)(),[o,m]=(0,p.useState)(!1),b=t&&n?n.map((e=>e?.wrapped)):[],j=(0,x.l6)();return(0,i.jsxs)(g,{show:e,children:[(0,i.jsx)(l.Z,{isOpen:o,onDismiss:()=>m(!1),children:(0,i.jsx)(c.ZP,{padding:"2rem",children:(0,i.jsxs)(a.Tz,{gap:"lg",children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsx)(h.Tv.DeprecatedMediumHeader,{children:(0,i.jsx)(s.cC,{id:"7Osz32"})}),(0,i.jsx)(h.Tw,{onClick:()=>m(!1),"data-testid":"close-icon"})]}),b.map((e=>e&&j&&Object.keys(j).includes(e.address)&&(0,i.jsx)(c.nq,{"data-testid":"unsupported-token-card",children:(0,i.jsxs)(a.Tz,{gap:"10px",children:[(0,i.jsxs)(u.BA,{gap:"5px",align:"center",children:[(0,i.jsx)(d.Z,{currency:e,size:"24px"}),(0,i.jsx)(h.Tv.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),t&&(0,i.jsx)(h.dL,{href:(0,f.E)(t,e.address,f.r.ADDRESS),children:(0,i.jsx)(C,{children:e.address})})]})},e.address?.concat("not-supported")))),(0,i.jsx)(a.Tz,{gap:"lg",children:(0,i.jsx)(h.Tv.DeprecatedBody,{fontWeight:535,children:(0,i.jsx)(s.cC,{id:"l7X7DE"})})})]})})}),(0,i.jsx)(y,{padding:"0",onClick:()=>m(!0),"data-testid":"read-more-button",children:(0,i.jsx)(h.Tv.DeprecatedBlue,{children:(0,i.jsx)(s.cC,{id:"bIjYSY"})})})]})}}}]);
//# sourceMappingURL=5633.df953d52.chunk.js.map