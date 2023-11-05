"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2635],{4987:function(e,n,t){t.d(n,{q:function(){return C},w:function(){return O}});var i=t(42893),r=t(12204),o=t(80815),s=t(24364),c=t(46591),d=t(41440),a=t(80657),l=t(47096),u=t(63498),x=t(40740),p=t(4292),m=t(87253),f=t(39839),g=t(47371),h=t(2304);const j=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-9b3b504e-0"})`
  ${g.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,v=(0,m.default)(d.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-9b3b504e-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,m.default)(f.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-9b3b504e-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,m.default)(c.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-9b3b504e-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(h.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(d.rU,{to:e,children:(0,i.jsx)(y,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const T=(0,m.default)(f.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-9b3b504e-4"})`
  flex: 1;
  margin: auto;
`;function O({adding:e,creating:n,autoSlippage:t,positionID:c,children:d}){const{chainId:f}=(0,o.useWeb3React)(),g=(0,m.useTheme)(),b=(0,u.T)(),C=(0,a.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(c?`/${c.toString()}`:"");return(0,i.jsx)(j,{children:(0,i.jsxs)(h.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(v,{to:C,onClick:()=>{e&&(b((0,x.dA)()),b((0,p.dA)()))},flex:d?"1":void 0,children:(0,i.jsx)(y,{stroke:g.neutral2})}),(0,i.jsx)(T,{textAlign:d?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),d&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:d}),(0,i.jsx)(s.Z,{autoSlippage:t,chainId:f,hideRoutingSettings:!0})]})})}},72714:function(e,n,t){t.d(n,{Z:function(){return c},e:function(){return s}});var i=t(42893),r=t(87253),o=t(437);const s=r.default.main.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
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
`;function c(e){return(0,i.jsx)(s,{...e})}},90958:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var i,r=t(42893),o=t(12204),s=t(19903),c=t(80815),d=t(66196),a=t(22875),l=t(6053),u=t(44998),x=t.n(u),p=t(13712),m=t(49287),f=t(80657),g=t(47096),h=t(39839),j=t(60198),v=t(42246),b=t(60476),y=t(56823),C=t(4987),T=t(16403),O=t(2304),_=t(20437),w=t(85729),D=t(58025),I=t(97761),N=t(42881),S=t(64614),k=t(21103),E=t(72714),G=t(55494);function $(){const e=new URLSearchParams((0,f.TH)().search),{account:n,chainId:t}=(0,c.useWeb3React)(),[u,$]=(0,p.useState)(!1),[A,H]=(0,p.useState)(i.TOKEN1),[L,z]=(0,p.useState)((()=>t?(0,D.gX)(t):null)),[P,W]=(0,p.useState)(null),[B,U]=(0,I.Oo)(L??void 0,P??void 0),K=(0,S.uB)();(0,p.useEffect)((()=>{U&&K(U)}),[U,K]);const q=B===I._G.NOT_EXISTS||Boolean(B===I._G.EXISTS&&U&&x().equal(U.reserve0.quotient,x().BigInt(0))&&x().equal(U.reserve1.quotient,x().BigInt(0))),R=(0,N.mM)(n??void 0,U?.liquidityToken),Z=Boolean(R&&x().greaterThan(R.quotient,x().BigInt(0))),F=(0,p.useCallback)((e=>{A===i.TOKEN0?z(e):W(e)}),[A]),M=(0,p.useCallback)((()=>{$(!1)}),[$]),X=(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(g.xv,{textAlign:"center",children:n?(0,r.jsx)(o.cC,{id:"pKO91W"}):(0,r.jsx)(o.cC,{id:"4YB3Bt"})})});return(0,l.G)()?(0,r.jsx)(d.fM,{page:s.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(C.q,{origin:e.get("origin")??"/pools/v2"}),(0,r.jsxs)(b.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(v.Pj,{children:(0,r.jsx)(b.Tz,{gap:"10px",children:(0,r.jsx)(h.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(o.cC,{id:"qtO+b3",components:{0:(0,r.jsx)("b",{})}})})})}),(0,r.jsx)(j.KA,{onClick:()=>{$(!0),H(i.TOKEN0)},children:L?(0,r.jsxs)(O.ZP,{children:[(0,r.jsx)(y.Z,{currency:L}),(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:L.symbol})]}):(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(o.cC,{id:"T0Y2+3"})})}),(0,r.jsx)(b.lg,{children:(0,r.jsx)(m.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(j.KA,{onClick:()=>{$(!0),H(i.TOKEN1)},children:P?(0,r.jsxs)(O.ZP,{children:[(0,r.jsx)(y.Z,{currency:P}),(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:P.symbol})]}):(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(o.cC,{id:"T0Y2+3"})})}),Z&&(0,r.jsxs)(b.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(g.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"lYF0uv"})}),(0,r.jsx)(h.m_,{to:"pools/v2",children:(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"/4YRTg"})})})]}),L&&P?B===I._G.EXISTS?Z&&U?(0,r.jsx)(T.WP,{pair:U,border:"1px solid #CED0D9"}):(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsxs)(b.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"Lu0Uod"})}),(0,r.jsx)(h.m_,{to:`/add/${(0,k.H)(L)}/${(0,k.H)(P)}`,children:(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"xJEVlK"})})})]})}):q?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsxs)(b.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"+8rnEI"})}),(0,r.jsx)(h.m_,{to:`/add/${(0,k.H)(L)}/${(0,k.H)(P)}`,children:(0,r.jsx)(o.cC,{id:"I1gztT"})})]})}):B===I._G.INVALID?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(b.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(g.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"ovVGFw"})})})}):B===I._G.LOADING?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(b.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(g.xv,{textAlign:"center",children:[(0,r.jsx)(o.cC,{id:"yQE2r9"}),(0,r.jsx)(G.bb,{})]})})}):null:X]}),(0,r.jsx)(_.Z,{isOpen:u,onCurrencySelect:F,onDismiss:M,showCommonBases:!0,selectedCurrency:(A===i.TOKEN0?P:L)??void 0})]}),(0,r.jsx)(w.c,{})]})}):(0,r.jsx)(a.A,{})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}))},55494:function(e,n,t){t.d(n,{DC:function(){return c},ER:function(){return d},bb:function(){return a},im:function(){return s},pr:function(){return l}});var i=t(13119),r=t(47096),o=t(87253);const s=o.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-e4e1fcd6-0"})`
  position: relative;
  padding: 20px;
`,c=(0,o.default)(r.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-e4e1fcd6-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=o.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-e4e1fcd6-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,a=o.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__Dots",componentId:"sc-e4e1fcd6-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,o.default)(i.pr).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-e4e1fcd6-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},49111:function(e,n,t){t.d(n,{B:function(){return o}});var i=t(48141),r=t(58025);function o(e){if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&r.Fl[n]?.equals(e)?(0,r.gX)(e.chainId):e}},49287:function(e,n,t){var i=t(13712),r=t(41432),o=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,d=void 0===o?24:o,a=c(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Plus",n.Z=d}}]);
//# sourceMappingURL=2635.d6e8cba3.chunk.js.map