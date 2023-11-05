"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6234],{51745:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(42893),r=t(12204),s=t(87253);const o=s.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Toggle\\MultiToggle__ToggleWrapper",componentId:"sc-2a73ca35-0"})`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,c=s.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Toggle\\MultiToggle__ToggleElement",componentId:"sc-2a73ca35-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:n})=>n?e.surface1:"none"};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:n})=>n?e.neutral2:e.neutral3};
  }
`;function a({currencyA:e,currencyB:n,handleRateToggle:t}){const s=e?.wrapped,a=n?.wrapped,d=s&&a&&s.sortsBefore(a);return s&&a?(0,i.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:t,children:(0,i.jsxs)(o,{width:"fit-content",children:[(0,i.jsx)(c,{isActive:d,fontSize:"12px",children:(0,i.jsx)(r.cC,{id:"J/hVSQ",values:{0:d?e.symbol:n.symbol}})}),(0,i.jsx)(c,{isActive:!d,fontSize:"12px",children:(0,i.jsx)(r.cC,{id:"J/hVSQ",values:{0:d?n.symbol:e.symbol}})})]})}):null}},46443:function(e,n,t){t.d(n,{t:function(){return u}});var i=t(86003),r=t(15387),s=t(61646),o=t(92796),c=t(13712),a=t(49111),d=t(36665);const l=i.O$.from(2).pow(128).sub(1);function u(e,n,t=!1){const i=(0,d.GL)(!1),u=(0,s.Wk)(n?i:null,"ownerOf",[n]).result?.[0],x=n?.toHexString(),p=(0,o.ZP)(),[h,m]=(0,c.useState)();return(0,c.useEffect)((()=>{!async function(){if(i&&x&&u)try{const e=await i.callStatic.collect({tokenId:x,recipient:u,amount0Max:l,amount1Max:l},{from:u});m([e.amount0,e.amount1])}catch{}}()}),[i,x,u,p]),e&&h?[r.CurrencyAmount.fromRawAmount(t?e.token0:(0,a.B)(e.token0),h[0].toString()),r.CurrencyAmount.fromRawAmount(t?e.token1:(0,a.B)(e.token1),h[1].toString())]:[void 0,void 0]}},96234:function(e,n,t){t.r(n),t.d(n,{PositionPageUnsupportedContent:function(){return ye},default:function(){return ve}});var i=t(42893),r=t(86003),s=t(12204),o=t(19903),c=t(15387),a=t(35206),d=t(80815),l=t(66196),u=t(80485),x=t(60198),p=t(42246),h=t(60476),m=t(45533),g=t(13119),j=t(56823),f=t(2304),y=t(20095),v=t(36772),w=t(36727),b=t(48141),C=t(17487),T=t(15627),D=t(36665),P=t(58127),k=t(46109),S=t(95202),I=t(46443),M=t(59991),R=t(61646),A=t(46217),_=t(13712),z=t(41440),O=t(80657),L=t(4292),$=t(97905),U=t(87253),H=t(39839),N=t(21103),G=t(75808),E=t(57482),W=t(49111),B=t(56588),Z=t(22230),q=t(51745),F=t(85729);const J="data:application/json;base64,";var Q=t(843),V=t(54479),K=t(34120),Y=t(55494);const X=(0,U.default)(x.DF).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__PositionPageButtonPrimary",componentId:"sc-457cd039-0"})`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,ee=U.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__PageWrapper",componentId:"sc-457cd039-1"})`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,ne=U.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__BadgeText",componentId:"sc-457cd039-2"})`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,te=(0,U.default)((({end:e,...n})=>(0,i.jsx)(H.Tv.DeprecatedLabel,{...n}))).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__Label",componentId:"sc-457cd039-3"})`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,ie=U.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__ExtentsText",componentId:"sc-457cd039-4"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,re=(0,U.default)(H.Tv.DeprecatedMain).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__HoverText",componentId:"sc-457cd039-5"})`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,se=U.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__DoubleArrow",componentId:"sc-457cd039-6"})`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,oe=(0,U.default)(f.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__ResponsiveRow",componentId:"sc-457cd039-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,ce=(0,U.default)(oe).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__ActionButtonResponsiveRow",componentId:"sc-457cd039-8"})`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,ae=(0,U.default)(x.gn).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__ResponsiveButtonConfirmed",componentId:"sc-457cd039-9"})`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,de=U.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__NFTGrid",componentId:"sc-457cd039-10"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,le=U.default.canvas.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__NFTCanvas",componentId:"sc-457cd039-11"})`
  grid-area: overlap;
`,ue=U.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__NFTImage",componentId:"sc-457cd039-12"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`;function xe({inverted:e,pool:n,currencyQuote:t,currencyBase:r}){const{formatPrice:o}=(0,E.Gb)();return n&&t&&r?(0,i.jsx)(p.hl,{padding:"12px",children:(0,i.jsxs)(h.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(ie,{children:(0,i.jsx)(s.cC,{id:"DWd30U"})}),(0,i.jsx)(H.Tv.DeprecatedMediumHeader,{textAlign:"center",children:o({price:e?n.token1Price:n.token0Price,type:E.sw.TokenTx})}),(0,i.jsx)(ie,{children:(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:t?.symbol,1:r?.symbol}})})]})}):null}const pe=({children:e,chainId:n,address:t})=>{const r=b.Iy[n];return(0,i.jsx)(H.bm,{to:`/tokens/${r}/${t}`,children:e})},he=({children:e,chainId:n,address:t})=>(0,i.jsx)(H.dL,{href:(0,K.E)(n,t,K.r.TOKEN),children:e});function me({chainId:e,currency:n}){const t=n?.address;if("number"===typeof e&&t){const r=(0,C.bx)(e)?pe:he;return(0,i.jsx)(r,{chainId:e,address:t,children:(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:n,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsxs)(H.Tv.DeprecatedMain,{children:[n?.symbol," \u2197"]})]})})}return(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:n,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(H.Tv.DeprecatedMain,{children:n?.symbol})]})}function ge(e,n,t){const i=n.getContext("2d");if(i){let{width:r,height:s}=e;const o=r/s;s=t,r=Math.round(o*t),n.width=r*devicePixelRatio,n.height=s*devicePixelRatio,n.style.width=r+"px",n.style.height=s+"px",i.scale(devicePixelRatio,devicePixelRatio),i.clearRect(0,0,r,s),i.drawImage(e,0,0,r,s)}}function je({image:e,height:n}){const[t,r]=(0,_.useState)(!1),s=(0,_.useRef)(null),o=(0,_.useRef)(null);return(0,i.jsxs)(de,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{o.current&&s.current&&ge(o.current,s.current,n),r(!1)},children:[(0,i.jsx)(le,{ref:s}),(0,i.jsx)(ue,{ref:o,src:e,hidden:!t,onLoad:()=>{o.current&&s.current&&ge(o.current,s.current,n)}})]})}const fe=({priceLower:e,priceUpper:n,quote:t,base:i,invert:r})=>({priceUpper:r?e?.invert():n,priceLower:r?n?.invert():e,quote:r?i:t,base:r?t:i});function ye(){return(0,i.jsx)(ee,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,i.jsx)(H.Tv.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,i.jsx)(s.cC,{id:"Ij/sE3"})}),(0,i.jsx)(H.Tv.BodyPrimary,{style:{marginBottom:"32px"},children:(0,i.jsx)(s.cC,{id:"Jbim1e"})}),(0,i.jsx)(X,{as:z.rU,to:"/pools",width:"fit-content",children:(0,i.jsx)(s.cC,{id:"7IwSeQ"})})]})})}function ve(){const{chainId:e}=(0,d.useWeb3React)();return(0,b.EC)(e)?(0,i.jsx)(be,{}):(0,i.jsx)(ye,{})}const we=(0,U.default)(f.DA).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\PositionPage__PositionLabelRow",componentId:"sc-457cd039-13"})({flexWrap:"wrap",gap:8});function be(){const{tokenId:e}=(0,O.UO)(),{chainId:n,account:t,provider:b}=(0,d.useWeb3React)(),C=(0,U.useTheme)(),{formatCurrencyAmount:X,formatDelta:de,formatTickPrice:le}=(0,E.Gb)(),ue=function(e){if(e)try{return r.O$.from(e)}catch(n){return}}(e),{loading:pe,position:he}=(0,M.n)(ue),{token0:ge,token1:ve,fee:be,liquidity:Ce,tickLower:Te,tickUpper:De,tokenId:Pe}=he||{},ke=Ce?.eq(0),Se=function(e){const n=(0,D.GL)(),t=(0,_.useMemo)((()=>[e instanceof r.O$?e.toHexString():e?.toString(16)]),[e]),{result:i,error:s,loading:o,valid:c}=(0,R.Wk)(n,"tokenURI",t,{...R.DB,gasRequired:3e6});return(0,_.useMemo)((()=>{if(s||!c||!e)return{valid:!1,loading:!1};if(o)return{valid:!0,loading:!0};if(!i)return{valid:!1,loading:!1};const[n]=i;if(!n||!n.startsWith(J))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(n.slice(J.length)))}}catch(s){return{valid:!1,loading:!1}}}),[s,o,i,e,c])}(ue),Ie=(0,T.dQ)(ge),Me=(0,T.dQ)(ve),Re=Ie?(0,W.B)(Ie):void 0,Ae=Me?(0,W.B)(Me):void 0,[_e,ze]=(0,_.useState)(!1),Oe=(0,A.Z)(n).wrapped.symbol,[Le,$e]=(0,k.AI)(Ie??void 0,Me??void 0,be),Ue=(0,_.useMemo)((()=>{if($e&&Ce&&"number"===typeof Te&&"number"===typeof De)return new a.Position({pool:$e,liquidity:Ce.toString(),tickLower:Te,tickUpper:De})}),[Ce,$e,Te,De]),He=(0,P.Z)(be,Te,De),Ne=(0,Z.N)(Ue),[Ge,Ee]=(0,_.useState)(!1),{priceLower:We,priceUpper:Be,base:Ze}=fe({priceLower:Ne.priceLower,priceUpper:Ne.priceUpper,quote:Ne.quote,base:Ne.base,invert:Ge}),qe=Me?Ze?.equals(Me):void 0,Fe=qe?Re:Ae,Je=qe?Ae:Re,Qe=(0,_.useMemo)((()=>We&&$e&&Be?function(e,n,t){try{if(!n.greaterThan(e))return 100;if(!n.lessThan(t))return 0;const i=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(t.toSignificant(15)),s=Number.parseFloat(n.toSignificant(15)),o=Math.floor(1/((Math.sqrt(i*r)-Math.sqrt(r*s))/(s-Math.sqrt(r*s))+1)*100);if(o<0||o>100)throw Error("Out of range");return o}catch{return}}(qe?Be.invert():We,$e.token0Price,qe?We.invert():Be):void 0),[qe,$e,We,Be]),[Ve,Ke]=(0,I.t)($e??void 0,he?.tokenId,_e),Ye=$e?_e?$e.token0:(0,W.B)($e.token0):void 0,Xe=$e?_e?$e.token1:(0,W.B)($e.token1):void 0,[en,nn]=(0,_.useState)(!1),[tn,rn]=(0,_.useState)(null),sn=(0,$.ub)(tn??void 0),[on,cn]=(0,_.useState)(!1),an=(0,S.ZP)(Ie??void 0),dn=(0,S.ZP)(Me??void 0),ln=(0,_.useMemo)((()=>{if(!an||!dn||!Ve||!Ke)return null;const e=Ve?.wrapped,n=Ke?.wrapped;if(!e||!n)return null;const t=an.quote(e),i=dn.quote(n);return t.add(i)}),[an,dn,Ve,Ke]),un=(0,_.useMemo)((()=>{if(!an||!dn||!Ue)return null;const e=an.quote(Ue.amount0),n=dn.quote(Ue.amount1);return e.add(n)}),[an,dn,Ue]),xn=(0,$.h7)(),pn=(0,D.GL)(),hn=(0,_.useCallback)((async()=>{if(!Ye||!Xe||!n||!pn||!t||!Pe||!b)return;nn(!0);const{calldata:e,value:i}=a.NonfungiblePositionManager.collectCallParameters({tokenId:Pe.toString(),expectedCurrencyOwed0:Ve??c.CurrencyAmount.fromRawAmount(Ye,0),expectedCurrencyOwed1:Ke??c.CurrencyAmount.fromRawAmount(Xe,0),recipient:t}),r={to:pn.address,data:e,value:i},s=await b.getSigner().getChainId();if(n!==s)throw new G.CJ;b.getSigner().estimateGas(r).then((e=>{const n={...r,gasLimit:(0,V.y)(e)};return b.getSigner().sendTransaction(n).then((e=>{rn(e.hash),nn(!1),(0,l._P)(o.vp.COLLECT_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[Ye.symbol,Xe.symbol].join("/")}),xn(e,{type:Q.i.COLLECT_FEES,currencyId0:(0,N.H)(Ye),currencyId1:(0,N.H)(Xe),expectedCurrencyOwed0:Ve?.quotient.toString()??c.CurrencyAmount.fromRawAmount(Ye,0).toExact(),expectedCurrencyOwed1:Ke?.quotient.toString()??c.CurrencyAmount.fromRawAmount(Xe,0).toExact()})}))})).catch((e=>{nn(!1),console.error(e)}))}),[n,Ve,Ke,Ye,Xe,pn,t,Pe,xn,b]),mn=(0,R.Wk)(Pe?pn:null,"ownerOf",[Pe]).result?.[0],gn=mn===t||he?.operator===t,jn=qe?Ve:Ke,fn=qe?Ke:Ve,yn=$e&&"number"===typeof Te?$e.tickCurrent<Te:void 0,vn=$e&&"number"===typeof De?$e.tickCurrent>=De:void 0,wn="boolean"===typeof yn&&"boolean"===typeof vn&&(!yn&&!vn);function bn(){return(0,i.jsxs)(h.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,i.jsx)(p.hl,{padding:"12px 16px",children:(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:jn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(H.Tv.DeprecatedMain,{children:jn?X({amount:jn}):"-"})]}),(0,i.jsx)(H.Tv.DeprecatedMain,{children:jn?.currency?.symbol})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:fn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(H.Tv.DeprecatedMain,{children:fn?X({amount:fn}):"-"})]}),(0,i.jsx)(H.Tv.DeprecatedMain,{children:fn?.currency?.symbol})]})]})}),(0,i.jsx)(H.Tv.DeprecatedItalic,{children:(0,i.jsx)(s.cC,{id:"R8aNfS"})}),(0,i.jsx)(x.DF,{"data-testid":"modal-collect-fees-button",onClick:hn,children:(0,i.jsx)(s.cC,{id:"vR1m9d"})})]})}const Cn=Boolean(gn&&(Ve?.greaterThan(0)||Ke?.greaterThan(0))&&Re&&Ae&&(Re.isNative||Ae.isNative)&&!tn);return he||pe?pe||Le===k.tK.LOADING||!be?(0,i.jsxs)(Y.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}):(0,i.jsx)(l.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ee,{children:[(0,i.jsx)(w.Z,{isOpen:on,onDismiss:()=>cn(!1),attemptingTxn:en,hash:tn??"",reviewContent:()=>(0,i.jsx)(w.p,{title:(0,i.jsx)(s.cC,{id:"tu/fxg"}),onDismiss:()=>cn(!1),topContent:bn}),pendingText:(0,i.jsx)(s.cC,{id:"SGG5Oz"})}),(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsxs)(h.Tz,{gap:"sm",children:[(0,i.jsx)(z.rU,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pools",children:(0,i.jsx)(re,{children:(0,i.jsx)(s.cC,{id:"sYYMH3"})})}),(0,i.jsxs)(oe,{children:[(0,i.jsxs)(we,{children:[(0,i.jsx)(m.Z,{currency0:Je,currency1:Fe,size:24,margin:!0}),(0,i.jsxs)(H.Tv.DeprecatedLabel,{fontSize:"24px",mr:"10px",children:["\xa0",Fe?.symbol,"\xa0/\xa0",Je?.symbol]}),(0,i.jsx)(u.Z,{style:{marginRight:"8px"},children:(0,i.jsx)(ne,{children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:de(parseFloat(new c.Percent(be,1e6).toSignificant()))}})})}),(0,i.jsx)(B.Z,{removed:ke,inRange:wn})]}),gn&&(0,i.jsxs)(ce,{children:[Re&&Ae&&be&&Pe?(0,i.jsx)(x.Ux,{as:z.rU,to:`/increase/${(0,N.H)(Re)}/${(0,N.H)(Ae)}/${be}/${Pe}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,i.jsx)(s.cC,{id:"3pgmAj"})}):null,Pe&&!ke?(0,i.jsx)(x.Hm,{as:z.rU,to:`/remove/${Pe}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,i.jsx)(s.cC,{id:"cJtosk"})}):null]})]})]}),(0,i.jsxs)(oe,{align:"flex-start",children:[(0,i.jsx)(H.Pw,{style:{height:"100%",marginRight:12},children:"result"in Se?(0,i.jsxs)(p.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,i.jsx)(je,{image:Se.result.image,height:400}),"number"===typeof n&&mn&&!gn?(0,i.jsx)(H.dL,{href:(0,K.E)(n,mn,K.r.ADDRESS),children:(0,i.jsx)(s.cC,{id:"LtI9AS"})}):null]}):(0,i.jsx)(p.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,i.jsx)(g.tG,{})})}),(0,i.jsxs)(h.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,i.jsx)(p.Wm,{children:(0,i.jsxs)(h.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsx)(te,{children:(0,i.jsx)(s.cC,{id:"6y2TB3"})}),un?.greaterThan(new c.Fraction(1,100))?(0,i.jsx)(H.Tv.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:X({amount:un,type:E.sw.FiatTokenPrice})}})}):(0,i.jsx)(H.Tv.DeprecatedLargeHeader,{color:C.neutral1,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"eKC+EC"})})]}),(0,i.jsx)(p.hl,{padding:"12px 16px",children:(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(me,{chainId:n,currency:Fe}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(H.Tv.DeprecatedMain,{children:X({amount:qe?Ue?.amount0:Ue?.amount1})}),"number"!==typeof Qe||ke?null:(0,i.jsx)(u.Z,{style:{marginLeft:"10px"},children:(0,i.jsx)(ne,{children:(0,i.jsx)(s.cC,{id:"hbO8db",values:{0:qe?Qe:100-Qe}})})})]})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(me,{chainId:n,currency:Je}),(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(H.Tv.DeprecatedMain,{children:X({amount:qe?Ue?.amount1:Ue?.amount0})}),"number"!==typeof Qe||ke?null:(0,i.jsx)(u.Z,{style:{marginLeft:"10px"},children:(0,i.jsx)(ne,{children:(0,i.jsx)(s.cC,{id:"hbO8db",values:{0:qe?100-Qe:Qe}})})})]})]})]})})]})}),(0,i.jsx)(p.Wm,{children:(0,i.jsxs)(h.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsx)(h.Tz,{gap:"md",children:(0,i.jsxs)(f.m0,{style:{alignItems:"flex-start"},children:[(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsx)(te,{children:(0,i.jsx)(s.cC,{id:"XCqY8/"})}),ln?.greaterThan(new c.Fraction(1,100))?(0,i.jsx)(H.Tv.DeprecatedLargeHeader,{color:C.success,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"J/hVSQ",values:{0:X({amount:ln,type:E.sw.FiatTokenPrice})}})}):(0,i.jsx)(H.Tv.DeprecatedLargeHeader,{color:C.neutral1,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.cC,{id:"eKC+EC"})})]}),gn&&(Ve?.greaterThan(0)||Ke?.greaterThan(0)||tn)?(0,i.jsx)(ae,{"data-testid":"collect-fees-button",disabled:en||!!tn,confirmed:!!tn&&!sn,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>cn(!0),children:tn&&!sn?(0,i.jsx)(H.Tv.DeprecatedMain,{color:C.neutral1,children:(0,i.jsx)(s.cC,{id:"Jpq3gO"})}):sn||en?(0,i.jsxs)(H.Tv.DeprecatedMain,{color:C.neutral1,children:[" ",(0,i.jsx)(y.bb,{children:(0,i.jsx)(s.cC,{id:"1RB9kv"})})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(H.Tv.DeprecatedMain,{color:C.white,children:(0,i.jsx)(s.cC,{id:"h5pjuM"})})})}):null]})}),(0,i.jsx)(p.hl,{padding:"12px 16px",children:(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:jn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(H.Tv.DeprecatedMain,{children:jn?.currency?.symbol})]}),(0,i.jsx)(f.DA,{children:(0,i.jsx)(H.Tv.DeprecatedMain,{children:jn?X({amount:jn}):"-"})})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(j.Z,{currency:fn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(H.Tv.DeprecatedMain,{children:fn?.currency?.symbol})]}),(0,i.jsx)(f.DA,{children:(0,i.jsx)(H.Tv.DeprecatedMain,{children:fn?X({amount:fn}):"-"})})]})]})}),Cn&&(0,i.jsx)(h.Tz,{gap:"md",children:(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(H.Tv.DeprecatedMain,{children:(0,i.jsx)(s.cC,{id:"oCijuv",values:{nativeWrappedSymbol:Oe}})}),(0,i.jsx)(v.Z,{id:"receive-as-weth",isActive:_e,toggle:()=>ze((e=>!e))})]})})]})})]})]}),(0,i.jsx)(p.Wm,{children:(0,i.jsxs)(h.Tz,{gap:"md",children:[(0,i.jsxs)(f.m0,{children:[(0,i.jsxs)(f.DA,{children:[(0,i.jsx)(te,{display:"flex",style:{marginRight:"12px"},children:(0,i.jsx)(s.cC,{id:"7Bu2+f"})}),(0,i.jsx)(H.v_,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B.Z,{removed:ke,inRange:wn}),(0,i.jsx)("span",{style:{width:"8px"}})]})})]}),(0,i.jsx)(f.DA,{children:Je&&Fe&&(0,i.jsx)(q.Z,{currencyA:Je,currencyB:Fe,handleRateToggle:()=>Ee(!Ge)})})]}),(0,i.jsxs)(f.m0,{children:[(0,i.jsx)(p.hl,{padding:"12px",width:"100%",children:(0,i.jsxs)(h.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(ie,{children:(0,i.jsx)(s.cC,{id:"EQs1sJ"})}),(0,i.jsx)(H.Tv.DeprecatedMediumHeader,{textAlign:"center",children:le({price:We,atLimit:He,direction:L.Mb.LOWER,numberType:E.sw.TokenTx})}),(0,i.jsxs)(ie,{children:[" ",(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:Fe?.symbol,1:Je?.symbol}})]}),wn&&(0,i.jsx)(H.Tv.DeprecatedSmall,{color:C.neutral3,children:(0,i.jsx)(s.cC,{id:"NxMldE",values:{0:Je?.symbol}})})]})}),(0,i.jsx)(se,{children:"\u27f7"}),(0,i.jsx)(p.hl,{padding:"12px",width:"100%",children:(0,i.jsxs)(h.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(ie,{children:(0,i.jsx)(s.cC,{id:"5etEUX"})}),(0,i.jsx)(H.Tv.DeprecatedMediumHeader,{textAlign:"center",children:le({price:Be,atLimit:He,direction:L.Mb.UPPER,numberType:E.sw.TokenTx})}),(0,i.jsxs)(ie,{children:[" ",(0,i.jsx)(s.cC,{id:"7Z4WfS",values:{0:Fe?.symbol,1:Je?.symbol}})]}),wn&&(0,i.jsx)(H.Tv.DeprecatedSmall,{color:C.neutral3,children:(0,i.jsx)(s.cC,{id:"NxMldE",values:{0:Fe?.symbol}})})]})})]}),(0,i.jsx)(xe,{inverted:qe,pool:$e,currencyQuote:Fe,currencyBase:Je})]})})]})]}),(0,i.jsx)(F.c,{})]})}):(0,i.jsx)(ye,{})}}}]);
//# sourceMappingURL=6234.abd3906e.chunk.js.map