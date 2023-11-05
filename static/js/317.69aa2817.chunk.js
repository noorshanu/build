"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[317],{56588:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(42893),o=t(12204),r=t(84071),s=t(34578),c=t(87253),a=t(65647);const d=c.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Badge\\RangeBadge__BadgeWrapper",componentId:"sc-a16c3c9f-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,l=c.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Badge\\RangeBadge__BadgeText",componentId:"sc-a16c3c9f-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=c.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Badge\\RangeBadge__ActiveDot",componentId:"sc-a16c3c9f-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=c.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Badge\\RangeBadge__LabelText",componentId:"sc-a16c3c9f-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:n}){const t=(0,c.useTheme)();return(0,i.jsx)(d,{children:e?(0,i.jsx)(a.ud,{text:(0,i.jsx)(o.cC,{id:"MZPP7t"}),children:(0,i.jsxs)(p,{color:t.neutral2,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{id:"D87pha"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})}):n?(0,i.jsx)(a.ud,{text:(0,i.jsx)(o.cC,{id:"aIvv/z"}),children:(0,i.jsxs)(p,{color:t.success,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{id:"vOyUlD"})}),(0,i.jsx)(u,{})]})}):(0,i.jsx)(a.ud,{text:(0,i.jsx)(o.cC,{id:"IwiTcw"}),children:(0,i.jsxs)(p,{color:t.deprecated_accentWarning,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{id:"i3Z+/Z"})}),(0,i.jsx)(s.Z,{width:12,height:12})]})})})}},94160:function(e,n,t){var i=t(42893),o=t(65647),r=t(13712);const s=t(87253).default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\HoverInlineText\\index__TextWrapper",componentId:"sc-f58de02a-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`;n.Z=({text:e,maxCharacters:n=20,margin:t=!1,adjustSize:c=!1,fontSize:a,textColor:d,link:l,...u})=>{const[p,m]=(0,r.useState)(!1);return e?e.length>n?(0,i.jsx)(o.ZP,{text:e,show:p,children:(0,i.jsx)(s,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:t,adjustSize:c,textColor:d,link:l,fontSize:a,...u,children:" "+e.slice(0,n-1)+"..."})}):(0,i.jsx)(s,{margin:t,adjustSize:c,link:l,fontSize:a,textColor:d,...u,children:e}):(0,i.jsx)("span",{})}},22230:function(e,n,t){t.d(n,{N:function(){return N},Z:function(){return O}});var i=t(42893),o=t(12204),r=t(15387),s=t(35206),c=t(56588),a=t(45533),d=t(94160),l=t(25575),u=t(2304),p=t(15627),m=t(58127),f=t(46109),h=t(13712),x=t(41440),g=t(4292),w=t(87253),I=t(1990),v=t(39839),_=t(57482),b=t(49111),C=t(58025);const y=(0,w.default)(x.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\PositionListItem\\index__LinkRow",componentId:"sc-11a2fe97-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${I.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,k=w.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\PositionListItem\\index__DataLineItem",componentId:"sc-11a2fe97-1"})`
  font-size: 14px;
`,j=(0,w.default)(k).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\PositionListItem\\index__RangeLineItem",componentId:"sc-11a2fe97-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,D=w.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\PositionListItem\\index__DoubleArrow",componentId:"sc-11a2fe97-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,S=(0,w.default)(v.Tv.BodySmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\PositionListItem\\index__RangeText",componentId:"sc-11a2fe97-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,T=(0,w.default)(v.Tv.UtilityBadge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\PositionListItem\\index__FeeTierText",componentId:"sc-11a2fe97-5"})`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${({theme:e})=>e.neutral3};
`,P=(0,w.default)(v.Tv.BodySmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\PositionListItem\\index__ExtentsText",componentId:"sc-11a2fe97-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,L=w.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\PositionListItem\\index__PrimaryPositionIdData",componentId:"sc-11a2fe97-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function N(e){if(!e)return{};const n=e.amount0.currency,t=e.amount1.currency;if([C.h1,C.Hz,C.AA].some((e=>e.equals(n))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:n,base:t};return[...Object.values(C.Fl),C.ML].some((e=>e&&e.equals(t)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:n,base:t}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:t,base:n}}function O({token0:e,token1:n,tokenId:t,fee:x,liquidity:w,tickLower:I,tickUpper:C}){const{formatDelta:k,formatTickPrice:O}=(0,_.Gb)(),U=(0,p.dQ)(e),A=(0,p.dQ)(n),M=U?(0,b.B)(U):void 0,E=A?(0,b.B)(A):void 0,[,G]=(0,f.AI)(M??void 0,E??void 0,x),$=(0,h.useMemo)((()=>{if(G)return new s.Position({pool:G,liquidity:w.toString(),tickLower:I,tickUpper:C})}),[w,G,I,C]),R=(0,m.Z)(x,I,C),{priceLower:z,priceUpper:B,quote:X,base:H}=N($),q=X&&(0,b.B)(X),Z=H&&(0,b.B)(H),W=!!G&&(G.tickCurrent<I||G.tickCurrent>=C),V="/pools/"+t,Y=w?.eq(0);return(0,i.jsxs)(y,{to:V,children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsxs)(L,{children:[(0,i.jsx)(a.Z,{currency0:Z,currency1:q,size:18,margin:!0}),(0,i.jsxs)(v.Tv.SubHeader,{children:["\xa0",q?.symbol,"\xa0/\xa0",Z?.symbol]}),(0,i.jsx)(T,{children:(0,i.jsx)(o.cC,{id:"J/hVSQ",values:{0:k(parseFloat(new r.Percent(x,1e6).toSignificant()))}})})]}),(0,i.jsx)(c.Z,{removed:Y,inRange:!W})]}),z&&B?(0,i.jsxs)(j,{children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(o.cC,{id:"0uYsLP"})}),(0,i.jsx)(o.cC,{id:"YAzUzD",values:{0:O({price:z,atLimit:R,direction:g.Mb.LOWER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(d.Z,{text:q?.symbol}),2:(0,i.jsx)(d.Z,{text:Z?.symbol??""})}})]})," ",(0,i.jsxs)(v.Pw,{children:[(0,i.jsx)(D,{children:"\u2194"})," "]}),(0,i.jsxs)(v.Z,{children:[(0,i.jsx)(D,{children:"\u2194"})," "]}),(0,i.jsxs)(S,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(o.cC,{id:"BniuBY"})}),(0,i.jsx)(o.cC,{id:"YAzUzD",values:{0:O({price:B,atLimit:R,direction:g.Mb.UPPER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(d.Z,{text:q?.symbol}),2:(0,i.jsx)(d.Z,{maxCharacters:10,text:Z?.symbol})}})]})]}):(0,i.jsx)(l.ZP,{})]})}},58127:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(35206),o=t(13712),r=t(4292);function s(e,n,t){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,n,t])}},46109:function(e,n,t){t.d(n,{AI:function(){return g},Oh:function(){return x},tK:function(){return h}});var i=t(45433),o=t(15387),r=t(40409),s=t(35206),c=t(80815),a=t(44998),d=t.n(a),l=t(61646),u=t(13712);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const m=new i.vU(r.Mt);let f=class{static getPoolAddress(e,n,t,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=n,{address:r}=t,c=`${e}:${o}:${r}:${i.toString()}`,a=this.addresses.find((e=>e.key===c));if(a)return a.address;const d={key:c,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:n,tokenB:t,fee:i})};return this.addresses.unshift(d),d.address}static getPool(e,n,t,i,o,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const c=this.pools.find((s=>s.token0===e&&s.token1===n&&s.fee===t&&d().EQ(s.sqrtRatioX96,i)&&d().EQ(s.liquidity,o)&&s.tickCurrent===r));if(c)return c;const a=new s.Pool(e,n,t,i,o,r);return this.pools.unshift(a),a}};var h;function x(e){const{chainId:n}=(0,c.useWeb3React)(),t=(0,u.useMemo)((()=>n?e.map((([e,n,t])=>{if(e&&n&&t){const i=e.wrapped,o=n.wrapped;if(i.equals(o))return;return i.sortsBefore(o)?[i,o,t]:[o,i,t]}})):new Array(e.length)),[n,e]),i=(0,u.useMemo)((()=>{const e=n&&o.V3_CORE_FACTORY_ADDRESSES[n];return e?t.map((n=>n&&f.getPoolAddress(e,...n))):new Array(t.length)}),[n,t]),r=(0,l._Y)(i,m,"slot0"),s=(0,l._Y)(i,m,"liquidity");return(0,u.useMemo)((()=>e.map(((e,n)=>{const i=t[n];if(!i)return[h.INVALID,null];const[o,c,a]=i;if(!r[n])return[h.INVALID,null];const{result:d,loading:l,valid:u}=r[n];if(!s[n])return[h.INVALID,null];const{result:p,loading:m,valid:x}=s[n];if(!i||!u||!x)return[h.INVALID,null];if(l||m)return[h.LOADING,null];if(!d||!p)return[h.NOT_EXISTS,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[h.NOT_EXISTS,null];try{const e=f.getPool(o,c,a,d.sqrtPriceX96,p[0],d.tick);return[h.EXISTS,e]}catch(g){return console.error("Error when constructing the pool",g),[h.NOT_EXISTS,null]}}))),[s,e,r,t])}function g(e,n,t){return x((0,u.useMemo)((()=>[[e,n,t]]),[e,n,t]))[0]}p(f,"MAX_ENTRIES",128),p(f,"pools",[]),p(f,"addresses",[]),function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(h||(h={}))},59991:function(e,n,t){t.d(n,{W:function(){return d},n:function(){return a}});var i=t(86003),o=t(61646),r=t(13712),s=t(36665);function c(e){const n=(0,s.GL)(),t=(0,r.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),c=(0,o.es)(n,"positions",t),a=(0,r.useMemo)((()=>c.some((({loading:e})=>e))),[c]),d=(0,r.useMemo)((()=>c.some((({error:e})=>e))),[c]),l=(0,r.useMemo)((()=>{if(!a&&!d&&e)return c.map(((n,t)=>{const i=e[t],o=n.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[a,d,c,e]);return{loading:a,positions:l?.map(((e,n)=>({...e,tokenId:t[n][0]})))}}function a(e){const n=c(e?[e]:void 0);return{loading:n.loading,position:n.positions?.[0]}}function d(e){const n=(0,s.GL)(),{loading:t,result:a}=(0,o.Wk)(n,"balanceOf",[e??void 0]),d=a?.[0]?.toNumber(),l=(0,r.useMemo)((()=>{if(d&&e){const n=[];for(let t=0;t<d;t++)n.push([e,t]);return n}return[]}),[e,d]),u=(0,o.es)(n,"tokenOfOwnerByIndex",l),p=(0,r.useMemo)((()=>u.some((({loading:e})=>e))),[u]),m=(0,r.useMemo)((()=>e?u.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,u]),{positions:f,loading:h}=c(m);return{loading:p||t||h,positions:f}}},55494:function(e,n,t){t.d(n,{DC:function(){return c},ER:function(){return a},bb:function(){return d},im:function(){return s},pr:function(){return l}});var i=t(13119),o=t(47096),r=t(87253);const s=r.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-e4e1fcd6-0"})`
  position: relative;
  padding: 20px;
`,c=(0,r.default)(o.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-e4e1fcd6-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=r.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-e4e1fcd6-2"})`
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
`,d=r.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__Dots",componentId:"sc-e4e1fcd6-3"})`
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
`,l=(0,r.default)(i.pr).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-e4e1fcd6-4"})`
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
`},49111:function(e,n,t){t.d(n,{B:function(){return r}});var i=t(48141),o=t(58025);function r(e){if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&o.Fl[n]?.equals(e)?(0,o.gX)(e.chainId):e}}}]);
//# sourceMappingURL=317.69aa2817.chunk.js.map