/*! For license information please see 3374.d5f24363.chunk.js.LICENSE.txt */
(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3374],{13352:function(e,n,t){"use strict";const o=t(87253).default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\FilterOption__FilterOption",componentId:"sc-b6023b11-0"})`
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
`;n.Z=o},1670:function(e,n,t){"use strict";t.d(n,{W9:function(){return y},ZP:function(){return C},rD:function(){return v}});var o=t(42893),r=t(12204),i=t(11569),a=t(17487),s=t(55338),c=t(30719),l=t(13712),d=t(96315),u=t(83931),p=t(29304),f=t(56564),h=t(13120),x=t(87253),m=t(35458),b=t(86403),g=t(13352);const v={[a.XH.HOUR]:"1H",[a.XH.DAY]:"1D",[a.XH.WEEK]:"1W",[a.XH.MONTH]:"1M",[a.XH.YEAR]:"1Y"},y=[a.XH.HOUR,a.XH.DAY,a.XH.WEEK,a.XH.MONTH,a.XH.YEAR],k=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__InternalMenuItem",componentId:"sc-674d3c9b-0"})`
  flex: 1;
  padding: 8px;
  color: ${({theme:e})=>e.neutral1};
  border-radius: 8px;

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,T=(0,x.default)(k).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__InternalLinkMenuItem",componentId:"sc-674d3c9b-1"})`
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
`,w=x.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__MenuTimeFlyout",componentId:"sc-674d3c9b-2"})`
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

  ${({isInfoExplorePageEnabled:e})=>!e&&x.css`
      @media only screen and (max-width: ${m.T1}) {
        left: unset;
        right: 0px;
      }
    `}
`,_=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__StyledMenu",componentId:"sc-674d3c9b-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;

  ${({isInfoExplorePageEnabled:e})=>!e&&x.css`
      @media only screen and (max-width: ${m.QD}) {
        width: 72px;
      }
    `}
`,E=x.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__StyledMenuContent",componentId:"sc-674d3c9b-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  width: 100%;
  vertical-align: middle;
  ${({isInfoExplorePageEnabled:e})=>e&&"white-space: nowrap;"}
`,j=x.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TimeSelector__Chevron",componentId:"sc-674d3c9b-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:n})=>e?n.neutral1:n.neutral2};
`;function C(){const e=(0,x.useTheme)(),n=(0,l.useRef)(null),t=(0,f.Wt)(h.Lk.TIME_SELECTOR),a=(0,f.xk)(h.Lk.TIME_SELECTOR);(0,s.t)(n,t?a:void 0);const[m,k]=(0,c.KO)(b.X3),C=(0,i.C)();return(0,o.jsxs)(_,{ref:n,isInfoExplorePageEnabled:C,children:[(0,o.jsx)(g.Z,{onClick:a,"aria-label":"timeSelector",active:t,"data-testid":"time-selector",children:(0,o.jsxs)(E,{isInfoExplorePageEnabled:C,children:[C?(0,o.jsxs)(o.Fragment,{children:[v[m]," ",(0,o.jsx)(r.cC,{id:"94M5XH"})]}):v[m],(0,o.jsx)(j,{open:t,children:t?(0,o.jsx)(d.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,o.jsx)(u.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),t&&(0,o.jsx)(w,{isInfoExplorePageEnabled:C,children:y.map((n=>(0,o.jsxs)(T,{"data-testid":v[n],onClick:()=>{k(n),a()},children:[C?(0,o.jsxs)("div",{children:[v[n]," ",(0,o.jsx)(r.cC,{id:"94M5XH"})]}):(0,o.jsx)("div",{children:v[n]}),n===m&&(0,o.jsx)(p.Z,{color:e.accent1,size:16})]},v[n])))})]})}},2380:function(e,n,t){"use strict";t.r(n),t.d(n,{ExploreTab:function(){return xe},default:function(){return be}});var o=t(42893),r=t(12204),i=t(19903),a=t(66196),s=t(2304),c=t(35458),l=t(86403),d=t(80485),u=t(42528),p=t(68040),f=t(11569),h=t(17487),x=t(55338),m=t(19468),b=t(13712),g=t(96315),v=t(83931),y=t(29304),k=t(80657),T=t(56564),w=t(13120),_=t(87253),E=t(39839),j=t(13352);const C=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__InternalMenuItem",componentId:"sc-2a26be2-0"})`
  flex: 1;
  padding: 12px 8px;
  color: ${({theme:e})=>e.neutral1};

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,$=(0,_.default)(C).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__InternalLinkMenuItem",componentId:"sc-2a26be2-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    background-color: ${({theme:e})=>e.surface3};
    text-decoration: none;
  }

  ${({disabled:e})=>e&&_.css`
      opacity: 60%;
      pointer-events: none;
    `}
`,O=_.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__MenuTimeFlyout",componentId:"sc-2a26be2-2"})`
  min-width: ${({isInfoExplorePageEnabled:e})=>e?"150px":"240px"};
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  border-radius: 12px 0px 0px 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 48px;
  z-index: 100;

  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>`${e.surface3} transparent`};

  // safari and chrome scrollbar styling
  ::-webkit-scrollbar {
    background: transparent;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.surface3};
    border-radius: 8px;
  }

  ${({isInfoExplorePageEnabled:e})=>e?_.css`
          right: 0px;
          @media screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
            left: 0px;
          }
        `:_.css`
          left: 0px;
        `}
`,I=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__StyledMenu",componentId:"sc-2a26be2-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,D=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__StyledMenuContent",componentId:"sc-2a26be2-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  font-weight: 535;
  vertical-align: middle;
`,N=_.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__Chevron",componentId:"sc-2a26be2-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:n})=>e?n.neutral1:n.neutral2};
`,P=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__NetworkLabel",componentId:"sc-2a26be2-6"})`
  ${E.cw}
  display: flex;
  gap: 8px;
  align-items: center;
`,S=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__CheckContainer",componentId:"sc-2a26be2-7"})`
  display: flex;
  flex-direction: flex-end;
`,H=(0,_.default)(j.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__NetworkFilterOption",componentId:"sc-2a26be2-8"})`
  ${({isInfoExplorePageEnabled:e})=>!e&&"min-width: 156px;"}
`,M=(0,_.default)(d.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\NetworkFilter__Tag",componentId:"sc-2a26be2-9"})`
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 10px;
  opacity: 1;
  padding: 4px 6px;
`;function U(){const e=(0,_.useTheme)(),n=(0,b.useRef)(null),t=(0,T.Wt)(w.Lk.NETWORK_FILTER),r=(0,T.xk)(w.Lk.NETWORK_FILTER);(0,x.t)(n,t?r:void 0);const i=(0,k.s0)(),{tab:a}=(0,m.useExploreParams)(),s=(0,f.C)(),c=(0,h.Qj)((0,k.UO)().chainName),l=(0,h.Tz)(c),d=(0,p.bt)(l);return(0,o.jsxs)(I,{ref:n,children:[(0,o.jsx)(H,{isInfoExplorePageEnabled:s,onClick:r,"aria-label":"networkFilter",active:t,"data-testid":"tokens-network-filter-selected",children:(0,o.jsxs)(D,{children:[(0,o.jsxs)(P,{children:[(0,o.jsx)(u.Ej,{chainId:l,size:20})," ",!s&&d.label]}),(0,o.jsx)(N,{open:t,children:t?(0,o.jsx)(g.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,o.jsx)(v.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),t&&(0,o.jsxs)(O,{isInfoExplorePageEnabled:s,children:[h.b5.map((n=>{const t=(0,h.Tz)(n),l=(0,p.bt)(t);return(0,o.jsxs)($,{"data-testid":`tokens-network-filter-option-${n.toLowerCase()}`,onClick:()=>{i(s?`/explore/${a}/${n.toLowerCase()}`:`/tokens/${n.toLowerCase()}`),r()},children:[(0,o.jsxs)(P,{children:[(0,o.jsx)(u.Ej,{chainId:t,size:20})," ",l.label]}),n===c&&(0,o.jsx)(S,{children:(0,o.jsx)(y.Z,{size:16,color:e.accent1})})]},n)})),h.Qr.map((e=>{const n=(0,p.bt)(e);return(0,o.jsxs)($,{"data-testid":`tokens-network-filter-option-${e}-chain`,disabled:!0,children:[(0,o.jsxs)(P,{children:[(0,o.jsx)(u.Ej,{chainId:e,size:20})," ",n.label]}),(0,o.jsx)(M,{children:"Coming soon"})]},e)}))]})]})}var L=t(65252);var R=t.p+"static/media/x.877744cf27cf1f68ab2b798a39fba441.svg",A=t(14526),F=t(67621);const G="20px",Z=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\SearchBar__SearchBarContainer",componentId:"sc-e54856f7-0"})`
  display: flex;
  flex: 1;
  ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: flex-end;"}
`,z=_.default.input.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\SearchBar__SearchInput",componentId:"sc-e54856f7-1"})`
  background: no-repeat scroll 7px 7px;
  background-image: url(${L.Z});
  background-size: 20px 20px;
  background-position: 12px center;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  height: 100%;
  width: ${({isInfoExplorePageEnabled:e,isOpen:n})=>e?n?"200px":"0":"min(200px, 100%)"};
  font-size: 16px;
  font-weight: 485;
  padding-left: 40px;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  ${e=>e&&"text-overflow: ellipsis;"}

  :hover {
    background-color: ${({theme:e})=>e.surface1};
  }

  :focus {
    outline: none;
    background-color: ${({theme:e})=>e.surface1};
    border-color: ${({theme:e})=>e.accent1};
    color: ${({theme:e})=>e.neutral1};
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    height: ${G};
    width: ${G};
    background-image: url(${R});
    margin-right: 10px;
    background-size: ${G} ${G};
    cursor: pointer;
  }

  @media only screen and (max-width: ${c.Uw}) {
    width: ${({isInfoExplorePageEnabled:e,isOpen:n})=>e?n?"min(100%, 200px)":"0":"100%"};
  }
`;function X({tab:e}){const n=(0,F.Dv)(l.fO),[t,s]=(0,b.useState)(n),c=(0,F.yW)(l.fO),d=(0,A.Z)(t,300),u=(0,f.C)(),[p,h]=(0,b.useState)(!1);(0,b.useEffect)((()=>{s(n)}),[n]),(0,b.useEffect)((()=>{c(d)}),[d,c]);const x=()=>h(!0),m=()=>{""===t&&h(!1)};return(0,o.jsx)(Z,{isInfoExplorePageEnabled:u,children:(0,o.jsx)(r.cC,{id:"J/hVSQ",values:{0:u?"tokens"===e?"Search tokens":"Search pools":"Filter tokens"},render:({translation:e})=>(0,o.jsx)(a.M8,{events:[i.TM.onFocus],name:i.Je.EXPLORE_SEARCH_SELECTED,element:i.xo.EXPLORE_SEARCH_INPUT,children:(0,o.jsx)(z,{isInfoExplorePageEnabled:u,"data-cy":"explore-tokens-search-input",type:"search",placeholder:`${e}`,id:"searchBar",autoComplete:"off",value:t,onChange:({target:{value:e}})=>s(e),isOpen:p,onFocus:u?x:void 0,onBlur:u?m:void 0})})})})}var B=t(1670),V=t(1152),W=t(79954);V.ZP`
  query TopTokens100($duration: HistoryDuration!, $chain: Chain!) {
    topTokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
      id
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
        pricePercentChange(duration: $duration) {
          id
          currency
          value
        }
        volume(duration: $duration) {
          id
          value
          currency
        }
      }
      project {
        id
        logoUrl
      }
    }
  }
`,V.ZP`
  query TopTokensSparkline($duration: HistoryDuration!, $chain: Chain!) {
    topTokens(pageSize: 100, page: 1, chain: $chain, orderBy: VOLUME) {
      id
      address
      chain
      market(currency: USD) {
        id
        priceHistory(duration: $duration) {
          id
          timestamp
          value
        }
      }
    }
  }
`;const K=20;function J(e){const n=(0,h.Tz)(e),t=(0,h.uw)((0,F.Dv)(l.X3)),{data:o}=(0,h.eE)((0,W.FL)({variables:{duration:t,chain:e}}),h.u8.Slow),r=(0,b.useMemo)((()=>{const e=n&&o?.topTokens?.map((e=>(0,h.vR)(n,e))),t={};return e?.forEach((e=>e?.address&&(t[e.address]=e?.market?.priceHistory?.filter(h.yL)))),t}),[n,o?.topTokens]),{data:i,loading:a}=(0,h.eE)((0,W.le)({variables:{duration:t,chain:e}}),h.u8.Fast),s=function(e){const n=(0,F.Dv)(l.AY),t=(0,F.Dv)(l.$E);return(0,b.useMemo)((()=>{if(!e)return;let o=Array.from(e);switch(n){case l.PU.PRICE:o=o.sort(((e,n)=>(n?.market?.price?.value??0)-(e?.market?.price?.value??0)));break;case l.PU.PERCENT_CHANGE:o=o.sort(((e,n)=>(n?.market?.pricePercentChange?.value??0)-(e?.market?.pricePercentChange?.value??0)));break;case l.PU.TOTAL_VALUE_LOCKED:o=o.sort(((e,n)=>(n?.market?.totalValueLocked?.value??0)-(e?.market?.totalValueLocked?.value??0)));break;case l.PU.VOLUME:o=o.sort(((e,n)=>(n?.market?.volume?.value??0)-(e?.market?.volume?.value??0)))}return t?o.reverse():o}),[e,n,t])}((0,b.useMemo)((()=>n&&i?.topTokens?.map((e=>(0,h.vR)(n,e)))),[n,i])),c=(0,b.useMemo)((()=>s?.reduce(((e,n,t)=>n.address?{...e,[n.address]:t+1}:e),{})??{}),[s]),d=function(e){const n=(0,F.Dv)(l.fO),t=(0,b.useMemo)((()=>n.toLowerCase()),[n]);return(0,b.useMemo)((()=>{if(!e)return;let n=e;return t&&(n=n?.filter((e=>{const n=e?.address?.toLowerCase().includes(t),o=e?.name?.toLowerCase().includes(t),r=e?.symbol?.toLowerCase().includes(t);return o||r||n}))),n}),[e,t])}(s);return(0,b.useMemo)((()=>({tokens:d,tokenSortRank:c,loadingTokens:a,sparklines:r})),[d,c,a,r])}var Q=t(34578),q=t(57284);const Y=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenTable__GridContainer",componentId:"sc-2beecc40-0"})`
  display: flex;
  flex-direction: column;
  max-width: ${c.y5};
  background-color: ${({theme:e})=>e.surface1};

  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.surface3};
`,ee=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenTable__TokenDataContainer",componentId:"sc-2beecc40-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,ne=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenTable__NoTokenDisplay",componentId:"sc-2beecc40-2"})`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  font-weight: 535;
  align-items: center;
  padding: 0px 28px;
  gap: 8px;
`;function te({message:e}){return(0,o.jsxs)(Y,{children:[(0,o.jsx)(q.VJ,{}),(0,o.jsx)(ne,{children:e})]})}const oe=({rowCount:e})=>(0,o.jsx)(o.Fragment,{children:Array(e).fill(null).map(((n,t)=>(0,o.jsx)(q.PI,{first:0===t,last:t===e-1},t)))});function re({rowCount:e=K}){return(0,o.jsxs)(Y,{children:[(0,o.jsx)(q.VJ,{}),(0,o.jsx)(ee,{children:(0,o.jsx)(oe,{rowCount:e})})]})}function ie(){const e=(0,h.Qj)((0,k.UO)().chainName),{tokens:n,tokenSortRank:t,loadingTokens:i,sparklines:a}=J(e);return i&&!n?(0,o.jsx)(re,{rowCount:K}):n?0===n?.length?(0,o.jsx)(te,{message:(0,o.jsx)(r.cC,{id:"k4nIkP"})}):(0,o.jsxs)(Y,{children:[(0,o.jsx)(q.VJ,{}),(0,o.jsx)(ee,{children:n.map(((e,r)=>e?.address&&(0,o.jsx)(q.pS,{tokenListIndex:r,tokenListLength:n.length,token:e,sparklineMap:a,sortRank:t[e.address]},e.address)))})]}):(0,o.jsx)(te,{message:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Q.Z,{size:16}),(0,o.jsx)(r.cC,{id:"lR4CZT"})]})})}var ae=t(65647);const se=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Explore\\index__ExploreContainer",componentId:"sc-7d172404-0"})`
  width: 100%;
  min-width: 320px;
  padding: 68px 12px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding-top: 48px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,ce=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Explore\\index__TitleContainer",componentId:"sc-7d172404-1"})`
  margin-bottom: 32px;
  max-width: ${c.y5};
  margin-left: auto;
  margin-right: auto;
  display: flex;
`,le=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Explore\\index__NavWrapper",componentId:"sc-7d172404-2"})`
  display: flex;
  max-width: ${c.y5};
  margin: 0 auto;
  margin-bottom: ${({isInfoExplorePageEnabled:e})=>e?"16px":"20px"};
  color: ${({theme:e})=>e.neutral3};
  flex-direction: row;

  @media only screen and (max-width: ${c.Uw}) {
    flex-direction: column;
    gap: 8px;
  }

  ${({isInfoExplorePageEnabled:e})=>e&&_.css`
      @media screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
        flex-direction: column;
        gap: 16px;
      }
    `};
`,de=(0,_.default)(s.BA).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Explore\\index__TabBar",componentId:"sc-7d172404-3"})`
  gap: 24px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    gap: 16px;
  }
`,ue=(0,_.default)(E.Tv.HeadlineMedium).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Explore\\index__TabItem",componentId:"sc-7d172404-4"})`
  align-items: center;
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
  cursor: pointer;
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} color`};
`,pe=_.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Explore\\index__FiltersContainer",componentId:"sc-7d172404-5"})`
  display: flex;
  gap: 8px;
  height: 40px;

  @media only screen and (max-width: ${c.Uw}) {
    ${({isInfoExplorePageEnabled:e})=>!e&&"order: 2;"}
  }

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: space-between;"}
  }
`,fe=(0,_.default)(pe).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Explore\\index__DropdownFilterContainer",componentId:"sc-7d172404-6"})`
  ${({isInfoExplorePageEnabled:e})=>e?_.css`
          @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
            justify-content: flex-start;
          }
        `:_.css`
          @media only screen and (max-width: ${c.Uw}) {
            justify-content: flex-start;
          }
        `};
`,he=(0,_.default)(pe).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Explore\\index__SearchContainer",componentId:"sc-7d172404-7"})`
  ${({isInfoExplorePageEnabled:e})=>!e&&"margin-left: 8px;"}
  width: 100%;

  @media only screen and (max-width: ${c.Uw}) {
    ${({isInfoExplorePageEnabled:e})=>!e&&"order: 1; margin: 0px;"}
  }

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    ${({isInfoExplorePageEnabled:e})=>e&&"justify-content: flex-end;"}
  }
`;var xe;!function(e){e.Tokens="tokens",e.Pools="pools",e.Transactions="transactions"}(xe||(xe={}));const me=[{title:(0,o.jsx)(r.cC,{id:"6RDwJM"}),key:xe.Tokens,component:ie,loggingElementName:i.xo.EXPLORE_TOKENS_TAB},{title:(0,o.jsx)(r.cC,{id:"lQfOr9"}),key:xe.Pools,component:ie,loggingElementName:i.xo.EXPLORE_POOLS_TAB},{title:(0,o.jsx)(r.cC,{id:"4wyw8H"}),key:xe.Transactions,component:ie,loggingElementName:i.xo.EXPLORE_TRANSACTIONS_TAB}];var be=({initialTab:e})=>{const n=(0,F.oC)(l.fO),t=(0,k.TH)(),s=(0,k.s0)(),c=(0,b.useMemo)((()=>{const n=e&&me.findIndex((n=>n.key===e));return n&&-1!==n?n:0}),[e]),[d,u]=(0,b.useState)(c),p=(0,f.C)(),{tab:h}=(0,m.useExploreParams)();(0,b.useEffect)((()=>{const e=me.findIndex((e=>e.key===h));-1!==e&&u(e)}),[h]),(0,b.useEffect)((()=>{n()}),[t,n]);const{component:x,key:g}=me[d];return(0,o.jsx)(a.fM,{page:p?i.yJ.EXPLORE_PAGE:i.yJ.TOKENS_PAGE,shouldLogImpression:!0,children:(0,o.jsxs)(se,{children:[!p&&(0,o.jsx)(ce,{children:(0,o.jsx)(ae.ud,{text:(0,o.jsx)(r.cC,{id:"LkgPBQ"}),placement:"bottom",children:(0,o.jsx)(E.Tv.LargeHeader,{children:(0,o.jsx)(r.cC,{id:"Vzmu+R"})})})}),(0,o.jsxs)(le,{isInfoExplorePageEnabled:p,children:[p&&(0,o.jsx)(de,{"data-testid":"explore-navbar",children:me.map((({title:e,loggingElementName:n,key:t},r)=>(0,o.jsx)(a.M8,{events:[i.TM.onClick],name:i.Gz.NAVBAR_CLICKED,element:n,children:(0,o.jsx)(ue,{onClick:()=>{u(r),s(`/explore/${t}`)},active:d===r,children:e},t)},r)))}),p?(0,o.jsxs)(pe,{isInfoExplorePageEnabled:!0,children:[(0,o.jsxs)(fe,{isInfoExplorePageEnabled:!0,children:[(0,o.jsx)(U,{}),g===xe.Tokens&&(0,o.jsx)(B.ZP,{})]}),(0,o.jsx)(he,{isInfoExplorePageEnabled:!0,children:g!==xe.Transactions&&(0,o.jsx)(X,{tab:g})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(pe,{isInfoExplorePageEnabled:!1,children:[(0,o.jsx)(U,{}),(0,o.jsx)(B.ZP,{})]}),(0,o.jsx)(he,{isInfoExplorePageEnabled:!1,children:(0,o.jsx)(X,{})})]})]}),p?(0,o.jsx)(x,{}):(0,o.jsx)(ie,{})]})})}},19468:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s},useExploreParams:function(){return a}});var o=t(42893),r=t(80657),i=t(2380);function a(){const{tab:e,chainName:n,tokenAddress:t}=(0,r.UO)(),o=Object.values(i.ExploreTab);return e&&!n&&o.includes(e)?{tab:e,chainName:void 0,tokenAddress:t}:e&&!n?{tab:i.ExploreTab.Tokens,chainName:e,tokenAddress:t}:e||n?{tab:e,chainName:n,tokenAddress:t}:{tab:i.ExploreTab.Tokens,chainName:void 0,tokenAddress:void 0}}function s(){const{tab:e,chainName:n,tokenAddress:t}=a();return e&&n&&t?(0,o.jsx)(r.Fg,{to:`/explore/${e}/${n}/${t}`,replace:!0}):n&&t?(0,o.jsx)(r.Fg,{to:`/explore/tokens/${n}/${t}`,replace:!0}):e&&n?(0,o.jsx)(r.Fg,{to:`/explore/${e}/${n}`,replace:!0}):n?(0,o.jsx)(r.Fg,{to:`/explore/tokens/${n}`,replace:!0}):(0,o.jsx)(i.default,{initialTab:e})}},47244:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var o=t(41432),r=t.n(o),i=t(13712),a=t(61940),s=t.n(a),c=["top","left","transform","className","children","innerRef"];function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l.apply(this,arguments)}function d(e){var n=e.top,t=void 0===n?0:n,o=e.left,r=void 0===o?0:o,a=e.transform,d=e.className,u=e.children,p=e.innerRef,f=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,c);return i.createElement("g",l({ref:p,className:s()("visx-group",d),transform:a||"translate("+r+", "+t+")"},f),u)}d.propTypes={top:r().number,left:r().number,transform:r().string,className:r().string,children:r().node,innerRef:r().oneOfType([r().string,r().func,r().object])}},4271:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var o=t(41432),r=t.n(o),i=t(82751),a=t.n(i),s=t(13712),c=t(92695),l=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},d.apply(this,arguments)}var u=[];function p(e){var n=e.className,t=e.children,o=e.debounceTime,r=void 0===o?300:o,i=e.ignoreDimensions,p=void 0===i?u:i,f=e.parentSizeStyles,h=void 0===f?{width:"100%",height:"100%"}:f,x=e.enableDebounceLeadingCall,m=void 0===x||x,b=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l),g=(0,s.useRef)(null),v=(0,s.useRef)(0),y=(0,s.useState)({width:0,height:0,top:0,left:0}),k=y[0],T=y[1],w=(0,s.useMemo)((function(){var e=Array.isArray(p)?p:[p];return a()((function(n){T((function(t){return Object.keys(t).filter((function(e){return t[e]!==n[e]})).every((function(n){return e.includes(n)}))?t:n}))}),r,{leading:m})}),[r,m,p]);return(0,s.useEffect)((function(){var e=new c.do((function(e){void 0===e&&(e=[]),e.forEach((function(e){var n=e.contentRect,t=n.left,o=n.top,r=n.width,i=n.height;v.current=window.requestAnimationFrame((function(){w({width:r,height:i,top:o,left:t})}))}))}));return g.current&&e.observe(g.current),function(){window.cancelAnimationFrame(v.current),e.disconnect(),null!=w&&w.cancel&&w.cancel()}}),[w]),s.createElement("div",d({style:h,ref:g,className:n},b),t(d({},k,{ref:g.current,resize:w})))}p.propTypes={className:r().string,debounceTime:r().number,enableDebounceLeadingCall:r().bool,ignoreDimensions:r().oneOfType([r().any,r().arrayOf(r().any)]),children:r().func.isRequired}},14045:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var o=t(13712),r=t(61940),i=t.n(r),a=t(62972),s=t(30349);function c(e){this._context=e}function l(e){return new c(e)}function d(e){return e[0]}function u(e){return e[1]}function p(){var e=d,n=u,t=(0,s.Z)(!0),o=null,r=l,i=null;function c(s){var c,l,d,u=s.length,p=!1;for(null==o&&(i=r(d=(0,a.Z)())),c=0;c<=u;++c)!(c<u&&t(l=s[c],c,s))===p&&((p=!p)?i.lineStart():i.lineEnd()),p&&i.point(+e(l,c,s),+n(l,c,s));if(d)return i=null,d+""||null}return c.x=function(n){return arguments.length?(e="function"==typeof n?n:(0,s.Z)(+n),c):e},c.y=function(e){return arguments.length?(n="function"==typeof e?e:(0,s.Z)(+e),c):n},c.defined=function(e){return arguments.length?(t="function"==typeof e?e:(0,s.Z)(!!e),c):t},c.curve=function(e){return arguments.length?(r=e,null!=o&&(i=r(o)),c):r},c.context=function(e){return arguments.length?(null==e?o=i=null:i=r(o=e),c):o},c}function f(e,n){e(n)}c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n)}}};var h=["children","data","x","y","fill","className","curve","innerRef","defined"];function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},x.apply(this,arguments)}function m(e){var n=e.children,t=e.data,r=void 0===t?[]:t,a=e.x,s=e.y,c=e.fill,l=void 0===c?"transparent":c,d=e.className,u=e.curve,m=e.innerRef,b=e.defined,g=void 0===b?function(){return!0}:b,v=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,h),y=function(e){var n=void 0===e?{}:e,t=n.x,o=n.y,r=n.defined,i=n.curve,a=p();return t&&f(a.x,t),o&&f(a.y,o),r&&a.defined(r),i&&a.curve(i),a}({x:a,y:s,defined:g,curve:u});return n?o.createElement(o.Fragment,null,n({path:y})):o.createElement("path",x({ref:m,className:i()("visx-linepath",d),d:y(r)||"",fill:l,strokeLinecap:"round"},v))}},61940:function(e,n){var t;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=r.apply(null,t);a&&e.push(a)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)o.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},62972:function(e,n){"use strict";var t=Math.PI,o=2*t,r=1e-6,i=o-r;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new a}a.prototype=s.prototype={constructor:a,moveTo:function(e,n){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,n){this._+="L"+(this._x1=+e)+","+(this._y1=+n)},quadraticCurveTo:function(e,n,t,o){this._+="Q"+ +e+","+ +n+","+(this._x1=+t)+","+(this._y1=+o)},bezierCurveTo:function(e,n,t,o,r,i){this._+="C"+ +e+","+ +n+","+ +t+","+ +o+","+(this._x1=+r)+","+(this._y1=+i)},arcTo:function(e,n,o,i,a){e=+e,n=+n,o=+o,i=+i,a=+a;var s=this._x1,c=this._y1,l=o-e,d=i-n,u=s-e,p=c-n,f=u*u+p*p;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=n);else if(f>r)if(Math.abs(p*l-d*u)>r&&a){var h=o-s,x=i-c,m=l*l+d*d,b=h*h+x*x,g=Math.sqrt(m),v=Math.sqrt(f),y=a*Math.tan((t-Math.acos((m+f-b)/(2*g*v)))/2),k=y/v,T=y/g;Math.abs(k-1)>r&&(this._+="L"+(e+k*u)+","+(n+k*p)),this._+="A"+a+","+a+",0,0,"+ +(p*h>u*x)+","+(this._x1=e+T*l)+","+(this._y1=n+T*d)}else this._+="L"+(this._x1=e)+","+(this._y1=n)},arc:function(e,n,a,s,c,l){e=+e,n=+n,l=!!l;var d=(a=+a)*Math.cos(s),u=a*Math.sin(s),p=e+d,f=n+u,h=1^l,x=l?s-c:c-s;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+p+","+f:(Math.abs(this._x1-p)>r||Math.abs(this._y1-f)>r)&&(this._+="L"+p+","+f),a&&(x<0&&(x=x%o+o),x>i?this._+="A"+a+","+a+",0,1,"+h+","+(e-d)+","+(n-u)+"A"+a+","+a+",0,1,"+h+","+(this._x1=p)+","+(this._y1=f):x>r&&(this._+="A"+a+","+a+",0,"+ +(x>=t)+","+h+","+(this._x1=e+a*Math.cos(c))+","+(this._y1=n+a*Math.sin(c))))},rect:function(e,n,t,o){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+n)+"h"+ +t+"v"+ +o+"h"+-t+"Z"},toString:function(){return this._}},n.Z=s},30349:function(e,n,t){"use strict";function o(e){return function(){return e}}t.d(n,{Z:function(){return o}})},8328:function(e,n,t){var o=t(22160).Symbol;e.exports=o},5757:function(e,n,t){var o=t(8328),r=t(20040),i=t(48755),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},80050:function(e,n,t){var o=t(24427),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},50531:function(e,n,t){var o="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;e.exports=o},20040:function(e,n,t){var o=t(8328),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,s=o?o.toStringTag:void 0;e.exports=function(e){var n=i.call(e,s),t=e[s];try{e[s]=void 0;var o=!0}catch(c){}var r=a.call(e);return o&&(n?e[s]=t:delete e[s]),r}},48755:function(e){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},22160:function(e,n,t){var o=t(50531),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},24427:function(e){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},82751:function(e,n,t){var o=t(85886),r=t(90724),i=t(29727),a=Math.max,s=Math.min;e.exports=function(e,n,t){var c,l,d,u,p,f,h=0,x=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(n){var t=c,o=l;return c=l=void 0,h=n,u=e.apply(o,t)}function v(e){var t=e-f;return void 0===f||t>=n||t<0||m&&e-h>=d}function y(){var e=r();if(v(e))return k(e);p=setTimeout(y,function(e){var t=n-(e-f);return m?s(t,d-(e-h)):t}(e))}function k(e){return p=void 0,b&&c?g(e):(c=l=void 0,u)}function T(){var e=r(),t=v(e);if(c=arguments,l=this,f=e,t){if(void 0===p)return function(e){return h=e,p=setTimeout(y,n),x?g(e):u}(f);if(m)return clearTimeout(p),p=setTimeout(y,n),g(f)}return void 0===p&&(p=setTimeout(y,n)),u}return n=i(n)||0,o(t)&&(x=!!t.leading,d=(m="maxWait"in t)?a(i(t.maxWait)||0,n):d,b="trailing"in t?!!t.trailing:b),T.cancel=function(){void 0!==p&&clearTimeout(p),h=0,c=f=l=p=void 0},T.flush=function(){return void 0===p?u:k(r())},T}},85886:function(e){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},8164:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},83352:function(e,n,t){var o=t(5757),r=t(8164);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},90724:function(e,n,t){var o=t(22160);e.exports=function(){return o.Date.now()}},29727:function(e,n,t){var o=t(80050),r=t(85886),i=t(83352),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(r(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var t=s.test(e);return t||c.test(e)?l(e.slice(2),t?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=3374.d5f24363.chunk.js.map