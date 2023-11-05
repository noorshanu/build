"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2374],{4987:function(e,n,t){t.d(n,{q:function(){return C},w:function(){return k}});var r=t(42893),i=t(12204),s=t(80815),o=t(24364),c=t(46591),a=t(41440),d=t(80657),u=t(47096),l=t(63498),p=t(40740),x=t(4292),m=t(87253),h=t(39839),f=t(47371),g=t(2304);const y=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-9b3b504e-0"})`
  ${f.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,m.default)(a.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-9b3b504e-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,j=(0,m.default)(h.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-9b3b504e-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,v=(0,m.default)(c.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-9b3b504e-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,r.jsx)(y,{children:(0,r.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(a.rU,{to:e,children:(0,r.jsx)(v,{})}),(0,r.jsx)(j,{children:(0,r.jsx)(i.cC,{id:"LCFvJr"})})]})})}const w=(0,m.default)(h.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-9b3b504e-4"})`
  flex: 1;
  margin: auto;
`;function k({adding:e,creating:n,autoSlippage:t,positionID:c,children:a}){const{chainId:h}=(0,s.useWeb3React)(),f=(0,m.useTheme)(),j=(0,l.T)(),C=(0,d.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(c?`/${c.toString()}`:"");return(0,r.jsx)(y,{children:(0,r.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(b,{to:C,onClick:()=>{e&&(j((0,p.dA)()),j((0,x.dA)()))},flex:a?"1":void 0,children:(0,r.jsx)(v,{stroke:f.neutral2})}),(0,r.jsx)(w,{textAlign:a?"start":"center",children:n?(0,r.jsx)(i.cC,{id:"ma87bD"}):e?(0,r.jsx)(i.cC,{id:"E6MqGy"}):(0,r.jsx)(i.cC,{id:"cJtosk"})}),a&&(0,r.jsx)(u.xu,{style:{marginRight:".5rem"},children:a}),(0,r.jsx)(o.Z,{autoSlippage:t,chainId:h,hideRoutingSettings:!0})]})})}},22827:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(42893),i=t(13712);const s=t(87253).default.input.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Slider\\index__StyledRangeInput",componentId:"sc-dce001c3-0"})`
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
`;function o({value:e,onChange:n,min:t=0,step:o=1,max:c=100,size:a=28,...d}){const u=(0,i.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,r.jsx)(s,{size:a,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:u,"aria-labelledby":"input slider",step:o,min:t,max:c})}},19969:function(e,n,t){t.d(n,{SS:function(){return x},sq:function(){return d},MN:function(){return u},RF:function(){return l},uO:function(){return p},I8:function(){return a}});var r=t(87253),i=t.p+"static/media/big_unicorn.595c49962d708abbaaec.png",s=t.p+"static/media/noise.3c7efafc83614205bd1a.png",o=t.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",c=t(60476);const a=(0,r.default)(c.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__DataCard",componentId:"sc-1a2037c7-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=r.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-1a2037c7-1"})`
  background: url(${i});
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
`,u=r.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-1a2037c7-2"})`
  background: url(${o});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,l=r.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardNoise",componentId:"sc-1a2037c7-3"})`
  background: url(${s});
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
`,p=(0,r.default)(c.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardSection",componentId:"sc-1a2037c7-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,x=r.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__Break",componentId:"sc-1a2037c7-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},80558:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(13712);function i(e,n,t=100){const[i,s]=(0,r.useState)((()=>e)),o=(0,r.useRef)(),c=(0,r.useCallback)((e=>{s(e),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{n(e),o.current=void 0}),t)}),[t,n]);return(0,r.useEffect)((()=>{o.current&&(clearTimeout(o.current),o.current=void 0),s(e)}),[e]),[i,c]}},72714:function(e,n,t){t.d(n,{Z:function(){return c},e:function(){return o}});var r=t(42893),i=t(87253),s=t(437);const o=i.default.main.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
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
  z-index: ${s.k.default};
`;function c(e){return(0,r.jsx)(o,{...e})}},62247:function(e,n,t){t.r(n),t.d(n,{default:function(){return re}});var r=t(42893),i=t(86003),s=t(12204),o=t(19903),c=t(15387),a=t(35206),d=t(80815),u=t(66196),l=t(56588),p=t(60198),x=t(42246),m=t(60476),h=t(45533),f=t(19969),g=t(25575),y=t(56823),b=t(4987),j=t(2304),v=t(22827),C=t(36772),w=t(48141),k=t(36665),S=t(80558),z=t(57282),D=t(59991),T=t(46217),I=t(96234),_=t(13712),$=t(80657),L=t(47096),q=t(15627),A=t(46109),O=t(46443),W=t(63498),N=t(49111),R=t(19918);function U(){return(0,W.C)((e=>e.burnV3))}var G=t(97905),H=t(64614),Z=t(87253),V=t(39839),M=t(75808),P=t(57482),F=t(36727),B=t(58025),E=t(843),J=t(54479),Q=t(21103),Y=t(72714),K=t(55494);const X=Z.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\RemoveLiquidity\\styled__Wrapper",componentId:"sc-4a09531d-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,ee=(0,Z.default)(K.ER).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\RemoveLiquidity\\styled__SmallMaxButton",componentId:"sc-4a09531d-1"})`
  font-size: 12px;
`,ne=(0,Z.default)(L.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\RemoveLiquidity\\styled__ResponsiveHeaderText",componentId:"sc-4a09531d-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`,te=new c.Percent(5,100);function re(){const{chainId:e}=(0,d.useWeb3React)(),{tokenId:n}=(0,$.UO)(),t=(0,$.TH)(),s=(0,_.useMemo)((()=>{try{return i.O$.from(n)}catch{return null}}),[n]),{position:o,loading:c}=(0,D.n)(s??void 0);return null===s||s.eq(0)?(0,r.jsx)($.Fg,{to:{...t,pathname:"/pools"},replace:!0}):(0,w.EC)(e)&&(c||o)?(0,r.jsx)(ie,{tokenId:s}):(0,r.jsx)(I.PositionPageUnsupportedContent,{})}function ie({tokenId:e}){const{position:n}=(0,D.n)(e),t=(0,Z.useTheme)(),{account:i,chainId:w,provider:I}=(0,d.useWeb3React)(),$=(0,u.oO)(),{formatCurrencyAmount:K}=(0,P.Gb)(),[re,ie]=(0,_.useState)(!1),se=(0,T.Z)(w).wrapped.symbol,{percent:oe}=U(),{position:ce,liquidityPercentage:ae,liquidityValue0:de,liquidityValue1:ue,feeValue0:le,feeValue1:pe,outOfRange:xe,error:me}=function(e,n=!1){const{account:t}=(0,d.useWeb3React)(),{percent:i}=U(),o=(0,q.dQ)(e?.token0),u=(0,q.dQ)(e?.token1),[,l]=(0,A.AI)(o??void 0,u??void 0,e?.fee),p=(0,_.useMemo)((()=>l&&e?.liquidity&&"number"===typeof e?.tickLower&&"number"===typeof e?.tickUpper?new a.Position({pool:l,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0),[l,e]),x=new c.Percent(i,100),m=p?x.multiply(p.amount0.quotient).quotient:void 0,h=p?x.multiply(p.amount1.quotient).quotient:void 0,f=o&&m?c.CurrencyAmount.fromRawAmount(n?o:(0,N.B)(o),m):void 0,g=u&&h?c.CurrencyAmount.fromRawAmount(n?u:(0,N.B)(u),h):void 0,[y,b]=(0,O.t)(l??void 0,e?.tokenId,n),j=!(!l||!e)&&(l.tickCurrent<e.tickLower||l.tickCurrent>e.tickUpper);let v;return t||(v=(0,r.jsx)(s.cC,{id:"VHOVEJ"})),0===i&&(v=v??(0,r.jsx)(s.cC,{id:"Sta9CR"})),{position:p,liquidityPercentage:x,liquidityValue0:f,liquidityValue1:g,feeValue0:y,feeValue1:b,outOfRange:j,error:v}}(n,re),{onPercentSelect:he}=function(){const e=(0,W.T)();return{onPercentSelect:(0,_.useCallback)((n=>{e((0,R.o)({percent:n}))}),[e])}}(),fe=n?.liquidity?.eq(0),[ge,ye]=(0,S.Z)(oe,he),be=(0,z.Z)(),je=(0,H.eq)(te),[ve,Ce]=(0,_.useState)(!1),[we,ke]=(0,_.useState)(!1),[Se,ze]=(0,_.useState)(),De=(0,G.h7)(),Te=(0,k.GL)(),Ie=(0,_.useCallback)((async()=>{if(ke(!0),!Te||!de||!ue||!be||!i||!w||!ce||!ae||!I)return;const{calldata:n,value:t}=a.NonfungiblePositionManager.removeCallParameters(ce,{tokenId:e.toString(),liquidityPercentage:ae,slippageTolerance:je,deadline:be.toString(),collectOptions:{expectedCurrencyOwed0:le??c.CurrencyAmount.fromRawAmount(de.currency,0),expectedCurrencyOwed1:pe??c.CurrencyAmount.fromRawAmount(ue.currency,0),recipient:i}}),r={to:Te.address,data:n,value:t},s=await I.getSigner().getChainId();if(w!==s)throw new M.CJ;I.getSigner().estimateGas(r).then((e=>{const n={...r,gasLimit:(0,J.y)(e)};return I.getSigner().sendTransaction(n).then((e=>{(0,u._P)(o.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[de.currency.symbol,ue.currency.symbol].join("/"),...$}),ze(e.hash),ke(!1),De(e,{type:E.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,Q.H)(de.currency),quoteCurrencyId:(0,Q.H)(ue.currency),expectedAmountBaseRaw:de.quotient.toString(),expectedAmountQuoteRaw:ue.quotient.toString()})}))})).catch((e=>{ke(!1),console.error(e)}))}),[Te,de,ue,be,i,w,ce,ae,I,e,je,le,pe,$,De]),_e=(0,_.useCallback)((()=>{Ce(!1),Se&&ye(0),ke(!1),ze("")}),[ye,Se]),$e=(0,r.jsx)(s.cC,{id:"F8SmOj",values:{0:de?.toSignificant(6),1:de?.currency?.symbol,2:ue?.toSignificant(6),3:ue?.currency?.symbol}});function Le(){return(0,r.jsxs)(m.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,r.jsxs)(j.m0,{align:"flex-end",children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(s.cC,{id:"I4bzgz",values:{0:de?.currency?.symbol}})}),(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:de&&K({amount:de})}),(0,r.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:de?.currency})]})]}),(0,r.jsxs)(j.m0,{align:"flex-end",children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(s.cC,{id:"I4bzgz",values:{0:ue?.currency?.symbol}})}),(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ue&&K({amount:ue})}),(0,r.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:ue?.currency})]})]}),le?.greaterThan(0)||pe?.greaterThan(0)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V.Tv.DeprecatedItalic,{fontSize:12,color:t.neutral2,textAlign:"left",padding:"8px 0 0 0",children:(0,r.jsx)(s.cC,{id:"QwTcLK"})}),(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(s.cC,{id:"Vn8uJL",values:{0:le?.currency?.symbol}})}),(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:le&&K({amount:le})}),(0,r.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:le?.currency})]})]}),(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(s.cC,{id:"Vn8uJL",values:{0:pe?.currency?.symbol}})}),(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:pe&&K({amount:pe})}),(0,r.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:pe?.currency})]})]})]}):null,(0,r.jsx)(p.DF,{mt:"16px",onClick:Ie,children:(0,r.jsx)(s.cC,{id:"t/YqKh"})})]})}const qe=Boolean(de?.currency&&ue?.currency&&(de.currency.isNative||ue.currency.isNative||B.Fl[de.currency.chainId]?.equals(de.currency.wrapped)||B.Fl[ue.currency.chainId]?.equals(ue.currency.wrapped)));return(0,r.jsxs)(m.Tz,{children:[(0,r.jsx)(F.Z,{isOpen:ve,onDismiss:_e,attemptingTxn:we,hash:Se??"",reviewContent:()=>(0,r.jsx)(F.p,{title:(0,r.jsx)(s.cC,{id:"cJtosk"}),onDismiss:_e,topContent:Le}),pendingText:$e}),(0,r.jsxs)(Y.Z,{$maxWidth:"unset",children:[(0,r.jsx)(b.w,{creating:!1,adding:!1,positionID:e.toString(),autoSlippage:te}),(0,r.jsx)(X,{children:n?(0,r.jsxs)(m.Tz,{gap:"lg",children:[(0,r.jsxs)(j.m0,{children:[(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(h.Z,{currency0:de?.currency,currency1:ue?.currency,size:20,margin:!0}),(0,r.jsx)(V.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${de?.currency?.symbol}/${ue?.currency?.symbol}`})]}),(0,r.jsx)(l.Z,{removed:fe,inRange:!xe})]}),(0,r.jsx)(x.hl,{children:(0,r.jsxs)(m.Tz,{gap:"md",children:[(0,r.jsx)(V.Tv.DeprecatedMain,{fontWeight:485,children:(0,r.jsx)(s.cC,{id:"hehnjM"})}),(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(ne,{children:(0,r.jsx)(s.cC,{id:"AGSFTV",values:{percentForSlider:ge}})}),(0,r.jsxs)(j.BA,{gap:"4px",justify:"flex-end",children:[(0,r.jsx)(ee,{onClick:()=>he(25),width:"20%",children:(0,r.jsx)(s.cC,{id:"Xeb0wM"})}),(0,r.jsx)(ee,{onClick:()=>he(50),width:"20%",children:(0,r.jsx)(s.cC,{id:"wW+u6Y"})}),(0,r.jsx)(ee,{onClick:()=>he(75),width:"20%",children:(0,r.jsx)(s.cC,{id:"N+aNR1"})}),(0,r.jsx)(ee,{onClick:()=>he(100),width:"20%",children:(0,r.jsx)(s.cC,{id:"CK1KXz"})})]})]}),(0,r.jsx)(v.Z,{value:ge,onChange:ye})]})}),(0,r.jsx)(x.hl,{children:(0,r.jsxs)(m.Tz,{gap:"md",children:[(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokena-symbol",children:(0,r.jsx)(s.cC,{id:"I4bzgz",values:{0:de?.currency?.symbol}})}),(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:de&&K({amount:de})}),(0,r.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:de?.currency})]})]}),(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokenb-symbol",children:(0,r.jsx)(s.cC,{id:"I4bzgz",values:{0:ue?.currency?.symbol}})}),(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ue&&K({amount:ue})}),(0,r.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:ue?.currency})]})]}),le?.greaterThan(0)||pe?.greaterThan(0)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.SS,{}),(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(s.cC,{id:"Vn8uJL",values:{0:le?.currency?.symbol}})}),(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:le&&K({amount:le})}),(0,r.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:le?.currency})]})]}),(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(s.cC,{id:"Vn8uJL",values:{0:pe?.currency?.symbol}})}),(0,r.jsxs)(j.DA,{children:[(0,r.jsx)(L.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:pe&&K({amount:pe})}),(0,r.jsx)(y.Z,{size:"20px",style:{marginLeft:"8px"},currency:pe?.currency})]})]})]}):null]})}),qe&&(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(V.Tv.DeprecatedMain,{children:(0,r.jsx)(s.cC,{id:"oCijuv",values:{nativeWrappedSymbol:se}})}),(0,r.jsx)(C.Z,{id:"receive-as-weth",isActive:re,toggle:()=>ie((e=>!e))})]}),(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(m.Tz,{gap:"md",style:{flex:"1"},children:(0,r.jsx)(p.gn,{confirmed:!1,disabled:fe||0===oe||!de,onClick:()=>Ce(!0),children:fe?(0,r.jsx)(s.cC,{id:"D87pha"}):me??(0,r.jsx)(s.cC,{id:"t/YqKh"})})})})]}):(0,r.jsx)(g.ZP,{})})]})]})}}}]);
//# sourceMappingURL=2374.9616c0bd.chunk.js.map