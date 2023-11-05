"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4958],{64850:function(e,n,t){t.d(n,{m:function(){return o}});var i=t(42893);const o=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:"#9B9B9B"})})},13352:function(e,n,t){const i=t(87253).default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\FilterOption__FilterOption",componentId:"sc-b6023b11-0"})`
  height: 100%;
  color: ${({theme:e,active:n})=>e.neutral1};
  background-color: ${({theme:e,active:n})=>e.surface1};
  margin: 0;
  padding: 6px 6px 6px 14px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 535;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  border: 1px solid ${({theme:e})=>e.surface3};
  outline: ${({theme:e,active:n,highlight:t})=>n&&t?`1px solid ${e.accent1}`:"none"};

  :hover {
    cursor: pointer;
    background-color: ${({theme:e,active:n})=>n?e.accent2:e.surface2};
    opacity: ${({theme:e,active:n})=>n?e.opacity.hover:1};
  }
  :focus {
    background-color: ${({theme:e,active:n})=>n?e.surface2:e.surface3};
  }
`;n.Z=i},1670:function(e,n,t){t.d(n,{W9:function(){return T},ZP:function(){return I},rD:function(){return k}});var i=t(42893),o=t(12204),s=t(11569),r=t(17487),a=t(55338),c=t(30719),d=t(13712),l=t(96315),u=t(83931),p=t(29304),h=t(56564),m=t(13120),f=t(87253),x=t(35458),g=t(86403),C=t(13352);const k={[r.XH.HOUR]:"1H",[r.XH.DAY]:"1D",[r.XH.WEEK]:"1W",[r.XH.MONTH]:"1M",[r.XH.YEAR]:"1Y"},T=[r.XH.HOUR,r.XH.DAY,r.XH.WEEK,r.XH.MONTH,r.XH.YEAR],v=f.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__InternalMenuItem",componentId:"sc-674d3c9b-0"})`
  flex: 1;
  padding: 8px;
  color: ${({theme:e})=>e.neutral1};
  border-radius: 8px;

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,y=(0,f.default)(v).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__InternalLinkMenuItem",componentId:"sc-674d3c9b-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: ${({theme:e})=>e.surface3};
    text-decoration: none;
  }
`,j=f.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__MenuTimeFlyout",componentId:"sc-674d3c9b-2"})`
  min-width: ${({isInfoExplorePageEnabled:e})=>e?"150px":"240px"};
  max-height: 300px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 48px;
  z-index: 100;
  left: 0px;

  ${({isInfoExplorePageEnabled:e})=>!e&&f.css`
      @media only screen and (max-width: ${x.T1}) {
        left: unset;
        right: 0px;
      }
    `}
`,w=f.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__StyledMenu",componentId:"sc-674d3c9b-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;

  ${({isInfoExplorePageEnabled:e})=>!e&&f.css`
      @media only screen and (max-width: ${x.QD}) {
        width: 72px;
      }
    `}
`,b=f.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__StyledMenuContent",componentId:"sc-674d3c9b-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  width: 100%;
  vertical-align: middle;
  ${({isInfoExplorePageEnabled:e})=>e&&"white-space: nowrap;"}
`,D=f.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__Chevron",componentId:"sc-674d3c9b-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:n})=>e?n.neutral1:n.neutral2};
`;function I(){const e=(0,f.useTheme)(),n=(0,d.useRef)(null),t=(0,h.Wt)(m.Lk.TIME_SELECTOR),r=(0,h.xk)(m.Lk.TIME_SELECTOR);(0,a.t)(n,t?r:void 0);const[x,v]=(0,c.KO)(g.X3),I=(0,s.C)();return(0,i.jsxs)(w,{ref:n,isInfoExplorePageEnabled:I,children:[(0,i.jsx)(C.Z,{onClick:r,"aria-label":"timeSelector",active:t,"data-testid":"time-selector",children:(0,i.jsxs)(b,{isInfoExplorePageEnabled:I,children:[I?(0,i.jsxs)(i.Fragment,{children:[k[x]," ",(0,i.jsx)(o.cC,{id:"94M5XH"})]}):k[x],(0,i.jsx)(D,{open:t,children:t?(0,i.jsx)(l.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,i.jsx)(u.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),t&&(0,i.jsx)(j,{isInfoExplorePageEnabled:I,children:T.map((n=>(0,i.jsxs)(y,{"data-testid":k[n],onClick:()=>{v(n),r()},children:[I?(0,i.jsxs)("div",{children:[k[n]," ",(0,i.jsx)(o.cC,{id:"94M5XH"})]}):(0,i.jsx)("div",{children:k[n]}),n===x&&(0,i.jsx)(p.Z,{color:e.accent1,size:16})]},k[n])))})]})}},44958:function(e,n,t){t.r(n),t.d(n,{default:function(){return ut},pageTimePeriodAtom:function(){return lt}});var i=t(42893),o=t(12204),s=t(19903),r=t(80815),a=t(66196),c=t(90315),d=t(81223),l=t(87253),u=t(39839);const p=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\AddressSection__ContractAddressSection",componentId:"sc-75497748-0"})`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
  font-size: 0.9em;
  gap: 4px;
  padding: 4px 0px;
`,h=l.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\AddressSection__ContractAddress",componentId:"sc-75497748-1"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  gap: 10px;
  align-items: center;
  background: transparent;
  border: none;
  min-height: 38px;
  padding: 0px;
`;function m({address:e}){return(0,i.jsxs)(p,{children:[(0,i.jsx)(u.Tv.SubHeaderSmall,{children:(0,i.jsx)(o.cC,{id:"TPQ9LW"})}),(0,i.jsx)(h,{children:(0,i.jsx)(u.Qv,{address:e})})]})}var f=t(15387),x=t(68040),g=t(48141),C=t(95202),k=t(79847),T=t(13712),v=t(57482);const y=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalancesCard",componentId:"sc-fc5a9a61-0"})`
  border-radius: 16px;
  color: ${({theme:e})=>e.neutral1};
  display: none;
  height: fit-content;
  padding: 16px;
  width: 100%;

  // 768 hardcoded to match NFT-redesign navbar breakpoints
  // src/nft/css/sprinkles.css.ts
  // change to match theme breakpoints when this navbar is updated
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,j=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceSection",componentId:"sc-fc5a9a61-1"})`
  height: fit-content;
  width: 100%;
`,w=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceRow",componentId:"sc-fc5a9a61-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`,b=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceItem",componentId:"sc-fc5a9a61-3"})`
  display: flex;
  align-items: center;
`,D=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceContainer",componentId:"sc-fc5a9a61-4"})`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  flex: 1;
`,I=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__BalanceAmountsContainer",componentId:"sc-fc5a9a61-5"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,H=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\BalanceSummary__StyledNetworkLabel",componentId:"sc-fc5a9a61-6"})`
  color: ${({color:e})=>e};
  font-size: 12px;
  line-height: 16px;
`;function _({token:e}){const{account:n,chainId:t}=(0,r.useWeb3React)(),s=(0,l.useTheme)(),{label:a,color:d}=(0,x.bt)((0,g.oG)(t)??f.ChainId.MAINNET),p=(0,k.ZP)(n,e),{formatCurrencyAmount:h}=(0,v.Gb)(),m=h({amount:p,type:v.sw.TokenNonTx}),_=h({amount:(0,C.sq)(p),type:v.sw.FiatTokenStats}),S=(0,T.useMemo)((()=>[e]),[e]);return n&&p?(0,i.jsx)(y,{children:(0,i.jsxs)(j,{children:[(0,i.jsx)(u.Tv.SubHeaderSmall,{color:s.neutral1,children:(0,i.jsx)(o.cC,{id:"n3wXA/",values:{label:a}})}),(0,i.jsxs)(w,{children:[(0,i.jsx)(c.V,{currencies:S,chainId:e.chainId,size:"2rem"}),(0,i.jsxs)(D,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(b,{children:(0,i.jsxs)(u.Tv.SubHeader,{children:[m," ",e.symbol]})}),(0,i.jsx)(b,{children:(0,i.jsx)(u.Tv.BodyPrimary,{children:_})})]}),(0,i.jsx)(H,{color:d,children:a})]})]})]})}):null}var S=t(63148),N=t(4271),O=t(35225),$=t(17487),P=t(67621),A=t(56584),E=t(54236),U=t(45921),L=t(64521),B=t(47244),M=t(14045),G=t(11275),R=t(55831),Z=t.n(R),W=t(68830);const F={duration:Z()("0.8s"),easing:G.p4T};function z({data:e,getX:n,getY:t,marginTop:o,curve:s,color:r,strokeWidth:a}){const c=(0,T.useRef)(null),[d,u]=(0,T.useState)(0),[p,h]=(0,T.useState)(!1),[m,f]=(0,T.useState)(!1),x=(0,W.useSpring)({frame:p?0:1,config:F,onRest:()=>{h(!1),f(!0)}});(0,T.useEffect)((()=>{if(c.current){const e=c.current.getTotalLength();e!==d&&u(e),e>0&&!p&&!m&&h(!0)}}));const g=(0,l.useTheme)(),C=r??g.accent1;return(0,i.jsx)(B.Z,{top:o,children:(0,i.jsx)(M.Z,{curve:s,x:n,y:t,children:({path:n})=>{const t=n(e)||"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W.animated.path,{d:t,ref:c,strokeWidth:a,strokeOpacity:m?1:0,fill:"none",stroke:C}),p&&0!==d&&(0,i.jsx)(W.animated.path,{d:t,strokeWidth:a,fill:"none",stroke:C,strokeDashoffset:x.frame.to((e=>e*d)),strokeDasharray:d})]})}})})}var V=T.memo(z);const X={duration:3e3,easing:G.cCj};function Y({data:e,getX:n,getY:t,marginTop:o,curve:s,color:r,strokeWidth:a,dashed:c}){const d=(0,T.useRef)(null),[u,p]=(0,T.useState)(0),[h,m]=(0,T.useState)(!1),[f,x]=(0,T.useState)(!1),g=(0,W.useSpring)({frame:h?0:1,config:X,onRest:()=>{m(!1),x(!0)}});(0,T.useEffect)((()=>{if(d.current){const e=d.current.getTotalLength();e!==u&&p(e),e>0&&!h&&!f&&m(!0)}}));const C=(0,l.useTheme)(),k=r??C.accent1;return(0,i.jsx)(B.Z,{top:o,children:(0,i.jsx)(M.Z,{curve:s,x:n,y:t,children:({path:n})=>{const t=n(e)||"";return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(W.animated.path,{d:t,ref:d,strokeWidth:a,strokeOpacity:f?1:g.frame.to((e=>1-e)),fill:"none",stroke:k,strokeDasharray:c?"4,4":void 0})})}})})}var K,Q=T.memo(Y),q=t(91443);!function(e){e[e.NO_DATA_AVAILABLE=0]="NO_DATA_AVAILABLE",e[e.NO_RECENT_VOLUME=1]="NO_RECENT_VOLUME",e[e.INVALID_CHART=2]="INVALID_CHART"}(K||(K={}));const J={hour:"numeric",minute:"numeric",hour12:!0},ee={month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};var ne;!function(e){e.TICK="tick",e.CROSSHAIR="crosshair"}(ne||(ne={}));const te={[$.XH.HOUR]:{[ne.TICK]:J,[ne.CROSSHAIR]:ee},[$.XH.DAY]:{[ne.TICK]:J,[ne.CROSSHAIR]:ee},[$.XH.WEEK]:{[ne.TICK]:{weekday:"long"},[ne.CROSSHAIR]:ee},[$.XH.MONTH]:{[ne.TICK]:{month:"long",day:"numeric"},[ne.CROSSHAIR]:ee},[$.XH.YEAR]:{[ne.TICK]:{month:"long"},[ne.CROSSHAIR]:{month:"short",year:"numeric",day:"numeric"}}};function ie(e,n,t){const i=te[e][t],o=new Intl.DateTimeFormat(n,i);return e=>{const n=1e3*e.valueOf();return o.format(n)}}var oe=t(65647),se=t(44455),re=t(7178),ae=t(47371),ce=t(86682);const de={top:100,bottom:48,crosshair:72},le=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Charts\\PriceChart\\index__ChartHeaderWrapper",componentId:"sc-5894f720-0"})`
  position: absolute;
  ${ae.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
  ${({theme:e,stale:n})=>n&&`color: ${e.neutral2}`};
`,ue=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Charts\\PriceChart\\index__PriceContainer",componentId:"sc-5894f720-1"})`
  display: flex;
  gap: 6px;
  font-size: 24px;
  line-height: 44px;
`,pe=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Charts\\PriceChart\\index__DeltaContainer",componentId:"sc-5894f720-2"})`
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: ${({theme:e})=>e.neutral2};
`;function he({startingPrice:e,endingPrice:n,noColor:t}){const o=(0,ce.YD)(e.value,n.value),{formatDelta:s}=(0,v.Gb)();return(0,i.jsxs)(pe,{children:[s(o),(0,i.jsx)(ce.Kx,{delta:o,noColor:t})]})}function me({crosshairPrice:e,chart:n}){const{formatFiatPrice:t}=(0,v.Gb)(),{startingPrice:s,endingPrice:r,lastValidPrice:a}=n,c=a!==r,d=e??(c?a:r),l=c&&!e;return(0,i.jsxs)(le,{"data-cy":"chart-header",stale:l,children:[(0,i.jsxs)(ue,{children:[(0,i.jsx)(u.Tv.HeadlineLarge,{color:"inherit",children:t({price:d.value})}),l&&(0,i.jsx)(oe.ud,{text:(0,i.jsx)(o.cC,{id:"y9L4V6"}),children:(0,i.jsx)(re.Z,{size:16,"data-testid":"chart-stale-icon"})})]}),(0,i.jsx)(he,{startingPrice:s,endingPrice:d,noColor:c})]})}function fe({chart:e,timePeriod:n}){const t=(0,se.eQ)(),{prices:o,blanks:s,timeScale:r,priceScale:a,dimensions:c}=e,{ticks:d,tickTimestampFormatter:u,crosshairTimestampFormatter:p}=(0,T.useMemo)((()=>{const i=Math.floor(c.width/100);return{ticks:(0,q.fj)(e.startingPrice.timestamp,e.endingPrice.timestamp,n,i),tickTimestampFormatter:ie(n,t,ne.TICK),crosshairTimestampFormatter:ie(n,t,ne.CROSSHAIR)}}),[c.width,e.startingPrice.timestamp,e.endingPrice.timestamp,n,t]),h=(0,l.useTheme)(),[m,f]=(0,T.useState)(),x=(0,T.useCallback)((()=>f(void 0)),[f]),g=(0,T.useCallback)((e=>{const{x:n}=(0,E.Z)(e)||{x:0},t=(0,q.HM)(n,o,r);if(t){const e=r(t.timestamp),n=a(t.value);f({x:e,y:n,price:t})}}),[a,r,o]);(0,T.useEffect)((()=>x()),[x,n]);const C=.85*c.width,k=!!m&&m.x>C,v=n===$.XH.HOUR?1:.9,y=(0,T.useCallback)((e=>r(e.timestamp)),[r]),j=(0,T.useCallback)((e=>a(e.value)),[a]),w=(0,T.useMemo)((()=>G.YY7.tension(v)),[v]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(me,{chart:e,crosshairPrice:m?.price}),(0,i.jsxs)("svg",{"data-cy":"price-chart",width:c.width,height:c.height,style:{minWidth:"100%"},children:[(0,i.jsx)(V,{data:o,getX:y,getY:j,marginTop:c.marginTop,curve:w,strokeWidth:2}),s.map(((e,n)=>(0,i.jsx)(Q,{data:e,getX:y,getY:j,marginTop:c.marginTop,curve:w,strokeWidth:2,color:h.neutral3,dashed:!0},n))),void 0!==m?(0,i.jsxs)("g",{children:[(0,i.jsx)(A.Z,{top:c.height-1,scale:r,stroke:h.surface3,hideTicks:!0,tickValues:d,tickFormat:u,tickLabelProps:()=>({fill:h.neutral2,fontSize:12,textAnchor:"middle",transform:"translate(0 -29)"})}),(0,i.jsx)("text",{x:m.x+(k?-4:4),y:de.crosshair+10,textAnchor:k?"end":"start",fontSize:12,fill:h.neutral2,children:p(m.price.timestamp)}),(0,i.jsx)(L.Z,{from:{x:m.x,y:de.crosshair},to:{x:m.x,y:c.height},stroke:h.surface3,strokeWidth:1,pointerEvents:"none",strokeDasharray:"4,4"}),(0,i.jsx)(U.Z,{left:m.x,top:m.y+c.marginTop,size:50,fill:h.accent1,stroke:h.surface3,strokeWidth:.5})]}):(0,i.jsx)(A.Z,{hideAxisLine:!0,scale:r,stroke:h.surface3,top:c.height-1,hideTicks:!0}),!c.width&&(0,i.jsx)("line",{x1:0,y1:c.height-1,x2:"100%",y2:c.height-1,fill:"transparent",shapeRendering:"crispEdges",stroke:h.surface3,strokeWidth:1}),(0,i.jsx)("rect",{x:0,y:0,width:c.width,height:c.height,fill:"transparent",onTouchStart:g,onTouchMove:g,onMouseMove:g,onMouseLeave:x})]})]})}const xe={[K.NO_DATA_AVAILABLE]:(0,i.jsx)(o.cC,{id:"g0qrI3"}),[K.NO_RECENT_VOLUME]:(0,i.jsx)(o.cC,{id:"7OwMjb"}),[K.INVALID_CHART]:(0,i.jsx)(o.cC,{id:"0WBcSC"})};function ge({chart:e}){const n=(0,l.useTheme)(),t=e.dimensions.height/2+45;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(le,{"data-cy":"chart-header",children:[(0,i.jsx)(u.Tv.HeadlineLarge,{fontSize:24,color:"neutral3",children:"Price unavailable"}),(0,i.jsx)(u.Tv.BodySmall,{color:"neutral3",children:xe[e.error]})]}),(0,i.jsx)("svg",{"data-cy":"missing-chart",width:e.dimensions.width,height:e.dimensions.height,style:{minWidth:"100%"},children:(0,i.jsx)("path",{d:`M 0 ${t} Q 104 ${t-70}, 208 ${t} T 416 ${t}\n          M 416 ${t} Q 520 ${t-70}, 624 ${t} T 832 ${t}`,stroke:n.surface3,fill:"transparent",strokeWidth:"2"})})]})}function Ce({width:e,height:n,prices:t,timePeriod:o}){const s=(0,T.useMemo)((()=>function({dimensions:e,prices:n}){if(!n)return{error:K.NO_DATA_AVAILABLE,dimensions:e};const t=e.height-e.marginTop-e.marginBottom;if(t<0)return{error:K.INVALID_CHART,dimensions:e};const{prices:i,blanks:o,lastValidPrice:s}=(0,q.Bz)(n);if(i.length<2||!s)return{error:K.NO_RECENT_VOLUME,dimensions:e};const r=n[0],a=n[n.length-1],{min:c,max:d}=(0,q.VC)(n);return{prices:i,startingPrice:r,endingPrice:a,lastValidPrice:s,blanks:o,timeScale:(0,G.BYU)().domain([r.timestamp,a.timestamp]).range([0,e.width]),priceScale:(0,G.BYU)().domain([c,d]).range([t,0]),dimensions:e,error:void 0}}({dimensions:{width:e,height:n,marginBottom:de.bottom,marginTop:de.top},prices:t})),[e,n,t]);return void 0!==s.error?(0,i.jsx)(ge,{chart:s}):(0,i.jsx)(fe,{chart:s,timePeriod:o})}var ke=t(35458),Te=t(1670);const ve=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TimeSelector__TimeOptionsWrapper",componentId:"sc-940ae88c-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,ye=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TimeSelector__TimeOptionsContainer",componentId:"sc-940ae88c-1"})`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  gap: 4px;
  border-radius: 16px;
  height: 40px;
  padding: 4px;
  width: fit-content;

  @media only screen and (max-width: ${ke.Uw}) {
    width: 100%;
    justify-content: space-between;
    border: none;
  }
`,je=l.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TimeSelector__TimeButton",componentId:"sc-940ae88c-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:n})=>n?e.surface3:"transparent"};
  font-weight: 535;
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 12px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  :hover {
    ${({active:e,theme:n})=>!e&&`opacity: ${n.opacity.hover};`}
  }
`;function we({currentTimePeriod:e,onTimeChange:n}){const[t,o]=(0,T.useState)(e);return(0,i.jsx)(ve,{children:(0,i.jsx)(ye,{children:Te.W9.map((e=>(0,i.jsx)(je,{active:t===e,onClick:()=>{(0,T.startTransition)((()=>n(e))),o(e)},children:Te.rD[e]},Te.rD[e])))})})}function be({tokenPriceQuery:e,onChangeTimePeriod:n}){return e?(0,i.jsx)(T.Suspense,{fallback:(0,i.jsx)(O.sT,{}),children:(0,i.jsx)(O.BO,{children:(0,i.jsx)(De,{tokenPriceQuery:e,onChangeTimePeriod:n})})}):(0,i.jsx)(O.sT,{})}function De({tokenPriceQuery:e,onChangeTimePeriod:n}){const t=(o=e,(0,T.useMemo)((()=>{const e=o.token?.market,n=e?.priceHistory?.filter($.yL),t=e?.price?.value;if(Array.isArray(n)&&void 0!==t){const e=Date.now()/1e3;return[...n,{timestamp:e,value:t}]}return n}),[o]));var o;const s=(0,P.Dv)(lt);return(0,i.jsxs)(O.BO,{"data-testid":"chart-container",children:[(0,i.jsx)(N.Z,{children:({width:e})=>(0,i.jsx)(Ce,{prices:t,width:e,height:392,timePeriod:s})}),(0,i.jsx)(we,{currentTimePeriod:s,onTimeChange:e=>{(0,T.startTransition)((()=>n(e)))}})]})}var Ie=t(58025);const He=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__Wrapper",componentId:"sc-85545c6f-0"})`
  align-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-bottom: none;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px 20px 0px 0px;
  bottom: 52px;
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: row;
  font-weight: 535;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  padding: 12px 16px;
  position: fixed;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: none;
  }
`,_e=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-85545c6f-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 20px;
  line-height: 28px;
  display: flex;
  gap: 8px;
`,Se=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__Balance",componentId:"sc-85545c6f-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,Ne=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-85545c6f-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
`,Oe=l.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__FiatValue",componentId:"sc-85545c6f-4"})`
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,$e=(0,l.default)(u.m_).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\MobileBalanceSummaryFooter__SwapButton",componentId:"sc-85545c6f-5"})`
  background-color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: 1em;
  font-weight: 535;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function Pe({token:e}){const{account:n}=(0,r.useWeb3React)(),t=(0,k.ZP)(n,e),{formatCurrencyAmount:s}=(0,v.Gb)(),a=s({amount:t,type:v.sw.TokenNonTx}),c=s({amount:(0,C.sq)(t),type:v.sw.FiatTokenStats}),d=$.yC[e.chainId].toLowerCase();return(0,i.jsxs)(He,{children:[Boolean(n&&t)&&(0,i.jsxs)(Ne,{children:[(0,i.jsx)(o.cC,{id:"xn9ewN",values:{0:e.symbol}}),(0,i.jsxs)(Se,{children:[(0,i.jsxs)(_e,{children:[a," ",e.symbol]}),(0,i.jsx)(Oe,{children:c})]})]}),(0,i.jsx)($e,{to:`/swap?chainName=${d}&outputCurrency=${e.isNative?Ie.dt:e.address}`,children:(0,i.jsx)(o.cC,{id:"vH2C/2"})})]})}var Ae=t(64850),Ee=t(28156),Ue=t(55338),Le=t(13678),Be=t(77300),Me=t(56564),Ge=t(13120),Re=t(62878),Ze=t(18030),We=t(437);const Fe=560,ze=480,Ve=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\ShareButton__ShareButtonDisplay",componentId:"sc-ea48c450-0"})`
  display: flex;
  position: relative;
`,Xe=(0,l.default)(Ae.m).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\ShareButton__Share",componentId:"sc-ea48c450-1"})`
  height: 24px;
  width: 24px;
  ${u.iV}
  ${({open:e,theme:n})=>e&&`opacity: ${n.opacity.click} !important`};
`,Ye=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\ShareButton__ShareActions",componentId:"sc-ea48c450-2"})`
  position: absolute;
  z-index: ${We.k.dropdown};
  width: 240px;
  top: 36px;
  right: 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 8px;
  background-color: ${({theme:e})=>e.surface1};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border-radius: 12px;
`,Ke=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\ShareButton__ShareAction",componentId:"sc-ea48c450-3"})`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 485;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,Ze.j)(10,e.darkMode?Re.O9.gray200:Re.O9.gray300)};
  }
`;function Qe({currency:e}){const n=(0,l.useTheme)(),t=(0,T.useRef)(null),s=(0,Me.Wt)(Ge.Lk.SHARE),r=(0,Me.xk)(Ge.Lk.SHARE);(0,Ue.t)(t,s?r:void 0);const a=(window.screen.width-Fe)/2,c=(window.screen.height-ze)/2,d=e.isNative?Ie.dt:e.wrapped.address;(0,Ee.Z)(s);const p=(0,T.useRef)(null);return(0,i.jsxs)(Ve,{ref:t,children:[(0,i.jsx)(Xe,{onClick:r,"aria-label":"ShareOptions",open:s}),s&&(0,i.jsxs)(Ye,{children:[(0,i.jsx)(Ke,{onClick:()=>p.current?.forceCopy(),children:(0,i.jsx)(u.WD,{InitialIcon:Le.Z,color:n.neutral1,iconPosition:"left",gap:12,toCopy:window.location.href,ref:p,children:(0,i.jsx)(o.cC,{id:"ENCIQz"})})}),(0,i.jsxs)(Ke,{onClick:()=>{r(),window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e.name}%20(${e.symbol})%20https://app.uniswap.org/%23/tokens/${(0,$.Ld)(e.chainId).toLowerCase()}/${d}%20via%20@uniswap`,"newwindow",`left=${a}, top=${c}, width=${Fe}, height=${ze}`)},children:[(0,i.jsx)(Be.Z,{color:n.neutral1,size:20,strokeWidth:1.5}),(0,i.jsx)(o.cC,{id:"uvt91Z"})]})]})]})}var qe=t(94556),Je=t(94220),en=t(77669),nn=t(34578),tn=t(84071),on=t(47096);const sn=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\TokenSafety\\TokenSafetyMessage__Label",componentId:"sc-dad7891a-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,rn=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\TokenSafety\\TokenSafetyMessage__TitleRow",componentId:"sc-dad7891a-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,an=(0,l.default)(on.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\TokenSafety\\TokenSafetyMessage__Title",componentId:"sc-dad7891a-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,cn=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\TokenSafety\\TokenSafetyMessage__DetailsRow",componentId:"sc-dad7891a-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,dn=(0,l.default)(u.dL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\TokenSafety\\TokenSafetyMessage__StyledLink",componentId:"sc-dad7891a-4"})`
  color: ${({theme:e})=>e.accent1};

  font-weight: 535;
`;function ln({warning:e,tokenAddress:n}){const t=(0,en.g)(e.level),s=(0,en.A)(e.level),{heading:r,description:a}=(0,Je.N6)(e);return(0,i.jsxs)(sn,{"data-cy":"token-safety-message",color:s,backgroundColor:t,children:[(0,Je._x)(e)&&(0,i.jsxs)(rn,{children:[e.canProceed?(0,i.jsx)(nn.Z,{size:"16px"}):(0,i.jsx)(tn.Z,{size:"16px"}),(0,i.jsx)(an,{marginLeft:"7px",children:e.message})]}),(0,i.jsxs)(cn,{children:[r,Boolean(r)&&" ",a,Boolean(a)&&" ",n&&(0,i.jsx)(dn,{href:Je.W3,children:(0,i.jsx)(o.cC,{id:"zwWKhA"})})]})]})}var un=t(8356),pn=t(11569),hn=t(73633),mn=t(1152),fn=t(86545);mn.ZP`
  query Token($chain: Chain!, $address: String = null) {
    token(chain: $chain, address: $address) {
      id
      decimals
      name
      chain
      address
      symbol
      standard
      market(currency: USD) {
        id
        totalValueLocked {
          id
          value
          currency
        }
        price {
          id
          value
          currency
        }
        volume24H: volume(duration: DAY) {
          id
          value
          currency
        }
        priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
          id
          value
        }
        priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
          id
          value
        }
      }
      project {
        id
        description
        homepageUrl
        twitterName
        logoUrl
        tokens {
          id
          chain
          address
        }
      }
    }
  }
`,mn.ZP`
  query TokenProject($chain: Chain!, $address: String = null) {
    token(chain: $chain, address: $address) {
      id
      decimals
      name
      chain
      address
      symbol
      standard
      project {
        id
        description
        homepageUrl
        twitterName
        logoUrl
        tokens {
          id
          chain
          address
        }
      }
    }
  }
`;class xn extends fn.D{constructor(e,n,t){const i=(0,$.Tz)(n.chain);i&&super({chainId:i,address:e,decimals:n.decimals??Ie.GW,symbol:n.symbol??"",name:n.name??"",logoURI:t??n.project?.logoUrl??void 0})}}const gn=e=>{const{chainId:n}=(0,r.useWeb3React)(),t=(0,$.Ld)(n),i=(0,T.useRef)(t);(0,T.useEffect)((()=>{i.current!==t&&e(t),i.current=t}),[t])};var Cn,kn=t(97337),Tn=t(52774),vn=t(46591),yn=t(80657),jn=t(92883),wn=t(83777),bn=t(80608),Dn=t(60198),In=t(89882);function Hn(){return Hn=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Hn.apply(this,arguments)}function _n(e,n){let{title:t,titleId:i,...o}=e;return T.createElement("svg",Hn({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":i},o),t?T.createElement("title",{id:i},t):null,Cn||(Cn=T.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const Sn=T.forwardRef(_n);t.p;const Nn=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-29220fb6-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,On=l.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\InvalidTokenDetails__InvalidDetailsText",componentId:"sc-29220fb6-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,$n=(0,l.default)(Dn.DF).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\InvalidTokenDetails__TokenExploreButton",componentId:"sc-29220fb6-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function Pn({pageChainId:e,isInvalidAddress:n}){const{chainId:t}=(0,r.useWeb3React)(),s=(0,yn.s0)(),a=(0,In.Z)(),c=!n&&e===t,d=t?(0,x.bt)(t)?.label:void 0;return(0,i.jsxs)(Nn,{children:[(0,i.jsx)(Sn,{}),n||c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(On,{children:(0,i.jsx)(o.cC,{id:"5pThdE"})}),(0,i.jsx)($n,{onClick:()=>s("/tokens"),children:(0,i.jsx)(u.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"1ru2CS"})})})]}):(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsx)(On,{children:(0,i.jsx)(o.cC,{id:"xNuZYG",values:{connectedChainLabel:d}})}),(0,i.jsx)($n,{onClick:()=>a(e),children:(0,i.jsx)(u.Tv.SubHeader,{children:(0,i.jsx)(o.cC,{id:"1+P9RR",values:{0:(0,x.bt)(e).label}})})})]})]})}var An=t(60476),En=t(14307);const Un=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})}),Ln=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})});var Bn=t(2304),Mn=t(63811),Gn=t(15067),Rn=t(79954),Zn=t(38641),Wn=t(28251),Fn=t(26),zn=t(1990),Vn=t(34120),Xn=t(41054);const Yn=(0,l.default)(An.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenInfoSection",componentId:"sc-56fafa74-0"})`
  gap: 16px;
  width: 100%;

  @media (max-width: ${zn.j$.lg-1}px) and (min-width: ${zn.j$.sm}px) {
    max-width: 45%;
  }
`,Kn=(0,l.default)(Bn.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenNameRow",componentId:"sc-56fafa74-1"})`
  gap: 8px;
  width: 100%;
`,Qn=(0,l.default)(Kn).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenButtonRow",componentId:"sc-56fafa74-2"})`
  flex-wrap: wrap;
`,qn=(0,l.default)(Bn.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenInfoButton",componentId:"sc-56fafa74-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({tokenColor:e})=>e};
  background-color: ${({tokenColor:e})=>(0,Ze.j)(12,e)};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  ${u.iV}
`,Jn=(0,l.default)(u.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TokenDescription__TokenDescriptionContainer",componentId:"sc-56fafa74-4"})`
  ${u.cw}
  max-width: 100%;
  // max-height: fit-content;
  line-height: 24px;
  white-space: pre-wrap;
`,et=l.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\TokenDescription__DescriptionVisibilityWrapper",componentId:"sc-56fafa74-5"})`
  display: ${({$visible:e})=>e?"inline":"none"};
`,nt=75;function tt({tokenAddress:e,chainId:n=f.ChainId.MAINNET,isNative:t=!1,characterCount:s=nt}){const r=(0,l.useTheme)().neutral1,a=(0,$.Ld)(n),{data:c}=(0,Rn.wT)({variables:{address:t?(0,Xn.P)(a):e,chain:a},errorPolicy:"all"}),d=c?.token?.project,p=d?.description,h=(0,Vn.E)(n,e,t?Vn.r.NATIVE:Vn.r.TOKEN),[,m]=(0,Zn.Z)(),x=(0,T.useCallback)((()=>{m(e)}),[e,m]),[g,C]=(0,T.useReducer)((e=>!e),!0),k=(0,Gn.Nt)(p??"",s),y=!!p&&p.length>s,j=y&&g,{inputTax:w,outputTax:b}=(0,Wn.j)(e,e),{formatPercent:D}=(0,v.Gb)(),{sellFeeString:I,buyFeeString:H}={sellFeeString:D(w),buyFeeString:D(b)},_=Boolean(parseFloat(I))||Boolean(parseFloat(b.toFixed(2))),S=I===H;return(0,i.jsxs)(Yn,{children:[(0,i.jsx)(u.Tv.HeadlineSmall,{children:(0,i.jsx)(o.cC,{id:"CE+M2e"})}),(0,i.jsxs)(Qn,{children:[!t&&(0,i.jsxs)(qn,{tokenColor:r,onClick:x,children:[(0,i.jsx)(Fn.Z,{width:"18px",height:"18px",color:r}),(0,wn.Xn)(e)]}),(0,i.jsx)(u.dL,{href:h,children:(0,i.jsxs)(qn,{tokenColor:r,children:[(0,i.jsx)(En.P,{width:"18px",height:"18px",fill:r}),n===f.ChainId.MAINNET?(0,i.jsx)(o.cC,{id:"nS3bjC"}):(0,i.jsx)(o.cC,{id:"vtJ2yO"})]})}),!!d?.homepageUrl&&(0,i.jsx)(u.dL,{href:d.homepageUrl,children:(0,i.jsxs)(qn,{tokenColor:r,children:[(0,i.jsx)(Un,{width:"18px",height:"18px",fill:r}),(0,i.jsx)(o.cC,{id:"On0aF2"})]})}),!!d?.twitterName&&(0,i.jsx)(u.dL,{href:`https://x.com/${d.twitterName}`,children:(0,i.jsxs)(qn,{tokenColor:r,children:[(0,i.jsx)(Ln,{width:"18px",height:"18px",fill:r}),(0,i.jsx)(o.cC,{id:"0F2sI+"})]})})]}),(0,i.jsxs)(Jn,{children:[!p&&(0,i.jsx)(Gn.aZ,{children:(0,i.jsx)(o.cC,{id:"kXI9SA"})}),p&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(et,{"data-testid":"token-description-full",$visible:!j,children:p}),(0,i.jsx)(et,{"data-testid":"token-description-truncated",$visible:j,children:k})]}),y&&(0,i.jsx)(Gn.ou,{onClick:C,"data-testid":"token-description-show-more-button",children:g?(0,i.jsx)(o.cC,{id:"fMPkxb"}):(0,i.jsx)(o.cC,{id:"vLyv1R"})})]}),_&&(0,i.jsx)(oe.ud,{placement:"left",size:oe.Oz.Small,text:(0,i.jsx)(u.Tv.Caption,{color:"neutral2",children:(0,i.jsx)(Mn.gE,{})}),children:(0,i.jsx)(An.ZP,{gap:"sm",children:S?(0,i.jsxs)(u.Tv.BodyPrimary,{children:[c?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"oSCKSR"}),"\xa0",I]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.Tv.BodyPrimary,{children:[c?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"JzWZvv"}),"\xa0",H]})," ",(0,i.jsxs)(u.Tv.BodyPrimary,{children:[c?.token?.symbol,"\xa0",(0,i.jsx)(o.cC,{id:"sHAUpq"}),"\xa0",I]})," "]})})})]})}const it=l.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\index__TokenSymbol",componentId:"sc-2f60dee0-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.neutral2};
  margin-left: 8px;
`,ot=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\index__TokenActions",componentId:"sc-2f60dee0-1"})`
  display: flex;
  gap: 16px;
  color: ${({theme:e})=>e.neutral2};
`,st=l.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenDetails\\index__TokenTitle",componentId:"sc-2f60dee0-2"})`
  display: flex;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: inline;
  }
`;function rt(e,n,t){const{chainId:i}=(0,r.useWeb3React)(),o=(0,T.useMemo)((()=>{if(e)return e===Ie.dt?(0,Ie.gX)(n):t?new xn(e,t):void 0}),[n,e,t]),s=Boolean(o)||n!==i,a=function(e,n){const t=(0,kn.zA)(n||!e?void 0:e);return n||!e||t&&t?.symbol===kn.eu?void 0:t}(e,s);return(0,T.useMemo)((()=>({token:o??a,didFetchFromChain:!o})),[a,o])}function at({urlAddress:e,inputTokenAddress:n,chain:t,tokenQuery:l,tokenPriceQuery:u,onChangeTimePeriod:p}){if(!e)throw new Error("Invalid token details route: tokenAddress param is undefined");const h=(0,T.useMemo)((()=>e===Ie.dt?e:(0,wn.UJ)(e)||void 0),[e]),{chainId:f}=(0,r.useWeb3React)(),x=(0,$.Tz)(t),g=l.token,C=(0,T.useMemo)((()=>g?.project?.tokens.reduce(((e,n)=>(n&&(e[n.chain]=n.address),e)),{})??{}),[g]),k=(0,hn.e)(),{token:v,didFetchFromChain:y}=rt(h,x,g),j=h?(0,Je.y8)(h):null,w=!1===j?.canProceed,b=(0,yn.s0)(),D=(0,pn.C)(),[I,H]=(0,T.useTransition)(),N=(0,T.useCallback)((e=>{if(!h)return;const n=C[e];n?H((()=>b((0,$.dG)({address:n,chain:e,isInfoExplorePageEnabled:D})))):(y||v?.isNative)&&H((()=>b((0,$.dG)({address:h,chain:e,isInfoExplorePageEnabled:D}))))}),[h,C,y,v?.isNative,b,D]);gn(N);const P=(0,T.useCallback)((e=>{if((0,bn.K)(e[jn.gN.INPUT]?.currencyId,h)||(0,bn.K)(e[jn.gN.OUTPUT]?.currencyId,h))return;const n=e[jn.gN.OUTPUT]?.currencyId??e[jn.gN.INPUT]?.currencyId;H((()=>b((0,$.dG)({address:"ETH"===n?null:n,chain:t,inputAddress:e[jn.gN.INPUT]&&e[jn.gN.INPUT]?.currencyId!==n?e[jn.gN.INPUT]?.currencyId:null,isInfoExplorePageEnabled:D}))))}),[h,t,D,b]),[A,E]=(0,T.useState)(),[U,L]=(0,T.useState)(!1),B=(0,T.useCallback)((e=>{A?.resolve(e),E(void 0)}),[A,E]);return void 0!==v&&h?(0,i.jsx)(a.fM,{page:s.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:h,tokenName:v?.name},shouldLogImpression:!0,children:(0,i.jsxs)(O.Gy,{children:[v&&!I?(0,i.jsxs)(O.WQ,{children:[(0,i.jsxs)(S.y,{to:`${D?"/explore":""}/tokens/${t.toLowerCase()}`,children:[(0,i.jsx)(vn.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]}),(0,i.jsxs)(O.Pn,{"data-testid":"token-info-container",children:[(0,i.jsxs)(O.yn,{children:[(0,i.jsx)(c.V,{currencies:[v],chainId:v.chainId,size:"32px"}),(0,i.jsxs)(st,{children:[v.name??(0,i.jsx)(o.cC,{id:"zKpHYG"}),(0,i.jsx)(it,{children:v.symbol??(0,i.jsx)(o.cC,{id:"F2FJu3"})})]})]}),(0,i.jsx)(ot,{children:(0,i.jsx)(Qe,{currency:v})})]}),(0,i.jsx)(be,{tokenPriceQuery:u,onChangeTimePeriod:p}),(0,i.jsx)(qe.ZP,{chainId:x,address:h,TVL:g?.market?.totalValueLocked?.value,volume24H:g?.market?.volume24H?.value,priceHigh52W:g?.market?.priceHigh52W?.value,priceLow52W:g?.market?.priceLow52W?.value}),(0,i.jsx)(O.Hr,{}),(0,i.jsx)(d.ez,{address:h,chainId:x,description:g?.project?.description,homepageUrl:g?.project?.homepageUrl,twitterName:g?.project?.twitterName}),!v.isNative&&(0,i.jsx)(m,{address:h})]}):(0,i.jsx)(O.ZP,{}),(0,i.jsxs)(O.QN,{isInfoTDPEnabled:k,onClick:()=>w&&L(!0),children:[(0,i.jsx)("div",{style:{pointerEvents:w?"none":"auto"},children:(0,i.jsx)(Tn.HY,{chainId:x,initialInputCurrencyId:n,initialOutputCurrencyId:h===Ie.dt?"ETH":h,onCurrencyChange:P,disableTokenInputs:x!==f})}),j&&(0,i.jsx)(ln,{tokenAddress:h,warning:j}),!k&&v&&(0,i.jsx)(_,{token:v}),k&&(0,i.jsx)(tt,{tokenAddress:h,chainId:x,isNative:v?.isNative,characterCount:200})]}),!k&&v&&(0,i.jsx)(Pe,{token:v}),(0,i.jsx)(un.Z,{isOpen:U||!!A,tokenAddress:h,onContinue:()=>B(!0),onBlocked:()=>{L(!1)},onCancel:()=>B(!1),showCancel:!0})]})}):(0,i.jsx)(Pn,{pageChainId:x,isInvalidAddress:!h})}var ct=t(42713),dt=t(30719);const lt=(0,P.O4)("tokenDetailsTimePeriod",$.XH.DAY);function ut(){const{tokenAddress:e,chainName:n}=(0,yn.UO)(),t=(0,$.Qj)(n),o=e===Ie.dt,[s,r]=(0,dt.KO)(lt),[a,c]=(0,T.useMemo)((()=>[o?(0,Xn.P)(t):e??"",(0,$.uw)(s)]),[t,o,s,e]),d=(0,ct.Z)(),l=(0,T.useMemo)((()=>"string"===typeof d.inputCurrency?d.inputCurrency:void 0),[d]),{data:u}=(0,Rn.rS)({variables:{address:a,chain:t},errorPolicy:"all"}),{data:p}=(0,Rn.m)({variables:{address:a,chain:t,duration:c},errorPolicy:"all"}),[h,m]=(0,T.useState)(p);return(0,T.useEffect)((()=>{p&&m(p)}),[m,p]),u?(0,i.jsx)(at,{urlAddress:e,chain:t,tokenQuery:u,tokenPriceQuery:h,onChangeTimePeriod:r,inputTokenAddress:l}):(0,i.jsx)(O.lJ,{})}},80608:function(e,n,t){function i(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}t.d(n,{K:function(){return i}})}}]);
//# sourceMappingURL=4958.74bc1daf.chunk.js.map