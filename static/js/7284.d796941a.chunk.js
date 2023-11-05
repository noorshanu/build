"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7284],{91443:function(e,n,t){t.d(n,{Bz:function(){return r},HM:function(){return a},VC:function(){return s},fj:function(){return d}});var o=t(11275),i=t(17487);function s(e){if(!e.length)return{min:0,max:0};let n=e[0].value,t=e[0].value;for(const o of e)o.value<n&&(n=o.value),o.value>t&&(t=o.value);return{min:n,max:t}}function r(e){const n=[],t=[];let o;if(e.forEach(((i,s)=>{if(0!==i.value){if(0===n.length&&0!==s){const n={timestamp:e[0].timestamp,value:i.value};t.push([n,i])}o=i,n.push(i)}})),o){if(o!==e[e.length-1]){const n={timestamp:e[e.length-1].timestamp,value:o.value};t.push([o,n])}}return{prices:n,blanks:t,lastValidPrice:o}}function a(e,n,t){const i=t.invert(e),s=(0,(0,o.YFb)((e=>e.timestamp)).left)(n,i,1),r=n[s-1],a=n[s];if(!a)return r;return Math.abs(i.valueOf()-r.timestamp.valueOf())<Math.abs(a.timestamp.valueOf()-i.valueOf())?r:a}const c=o.Z_i.every(5),l={[i.XH.HOUR]:c?{interval:c,step:2}:{interval:o.Z_i,step:10},[i.XH.DAY]:{interval:o.WQD,step:4},[i.XH.WEEK]:{interval:o.rr1,step:1},[i.XH.MONTH]:{interval:o.rr1,step:7},[i.XH.YEAR]:{interval:o.F0B,step:2}};function d(e,n,t,o){if(0===o||n<=e)return[];const i=(n-e)/24,s=new Date(1e3*(e+i)),r=new Date(1e3*(n-i)),{interval:a,step:c}=l[t],d=a.range(s,r,c).map((e=>e.valueOf()/1e3));if(d.length<=o)return d;const p=[],m=Math.floor(d.length/o);for(let l=1;l<d.length;l+=m)p.push(d[l]);return p}},57284:function(e,n,t){t.d(n,{h8:function(){return le},VJ:function(){return me},pS:function(){return fe},PI:function(){return ue},_j:function(){return ae}});var o=t(42893),i=t(12204),s=t(19903),r=t(4271),a=t(66196),c=t(11275),l=t(13712),d=t(87253),p=t(47244),m=t(14045);function u({data:e,getX:n,getY:t,marginTop:i,curve:s,color:r,strokeWidth:a,width:c,height:l,children:u}){const f=(0,d.useTheme)();return(0,o.jsxs)("svg",{width:c,height:l,children:[(0,o.jsx)(p.Z,{top:i,children:(0,o.jsx)(m.Z,{curve:s,stroke:r??f.accent1,strokeWidth:a,data:e,x:n,y:t})}),u]})}var f=l.memo(u),h=t(91443);const x=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Charts\\SparklineChart__LoadingContainer",componentId:"sc-6357d2d2-0"})`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function g({width:e,height:n,tokenData:t,pricePercentChange:i,sparklineMap:s}){const r=(0,d.useTheme)(),a=t?.address?s[t.address]:null;if(!a||a.length<=1)return(0,o.jsx)(x,{children:(0,o.jsx)(ae,{})});const l=a[0],p=a[a.length-1],m=(0,c.BYU)().domain([l.timestamp,p.timestamp]).range([0,110]),{min:u,max:g}=(0,h.VC)(a),k=(0,c.BYU)().domain([u,g]).range([30,0]);return(0,o.jsx)(f,{data:a,getX:e=>m(e.timestamp),getY:e=>k(e.value),curve:c.YY7.tension(.9),marginTop:5,color:i&&i<0?r.critical:r.success,strokeWidth:1.5,width:e,height:n})}var k=(0,l.memo)(g),T=t(83246),w=t(37636);const C=e=>(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.75 16.5C12.75 16.914 12.414 17.25 12 17.25C11.586 17.25 11.25 16.914 11.25 16.5V11.929C11.25 11.515 11.586 11.179 12 11.179C12.414 11.179 12.75 11.515 12.75 11.929V16.5ZM12.02 9.5C11.468 9.5 11.0149 9.052 11.0149 8.5C11.0149 7.948 11.458 7.5 12.01 7.5H12.02C12.573 7.5 13.02 7.948 13.02 8.5C13.02 9.052 12.572 9.5 12.02 9.5Z",fill:"#9B9B9B"})});var b=t(3077),v=t(65647),_=t(11569),y=t(17487),j=t(67621),D=t(41440),O=t(80657),U=t(1990),$=t(39839),N=t(57482),I=t(35458),H=t(80343),R=t(86403),L=t(86682);const E=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__Cell",componentId:"sc-6783a7e7-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
`,G=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__StyledTokenRow",componentId:"sc-6783a7e7-1"})`
  background-color: transparent;
  display: grid;
  font-size: 16px;
  grid-template-columns: 1fr 7fr 4fr 4fr 4fr 4fr 5fr;
  line-height: 24px;
  max-width: ${I.y5};
  min-width: 390px;
  ${({first:e,last:n})=>d.css`
    height: ${e||n?"72px":"64px"};
    padding-top: ${e?"8px":"0px"};
    padding-bottom: ${n?"8px":"0px"};
  `}
  padding-left: 12px;
  padding-right: 12px;
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>d.css`background-color ${e.medium} ${n.ease}`};
  width: 100%;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};

  &:hover {
    ${({$loading:e,theme:n})=>!e&&d.css`
        background-color: ${n.deprecated_hoverDefault};
      `}
    ${({last:e})=>e&&d.css`
        border-radius: 0px 0px 8px 8px;
      `}
  }

  @media only screen and (max-width: ${I.y5}) {
    grid-template-columns: 1fr 6.5fr 4.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${I.$l}) {
    grid-template-columns: 1fr 7.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${I.Uw}) {
    grid-template-columns: 1fr 10fr 5fr 5fr 1.2fr;
  }

  @media only screen and (max-width: ${I.T1}) {
    grid-template-columns: 2fr 3fr;
    min-width: unset;
    border-bottom: 0.5px solid ${({theme:e})=>e.surface2};

    :last-of-type {
      border-bottom: none;
    }
  }
`,P=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__ClickableContent",componentId:"sc-6783a7e7-2"})`
  display: flex;
  ${({gap:e})=>e&&`gap: ${e}px`};
  text-decoration: none;
  color: ${({theme:e})=>e.neutral1};
  align-items: center;
  cursor: pointer;
`,X=(0,d.default)(P).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__ClickableName",componentId:"sc-6783a7e7-3"})`
  gap: 12px;
  max-width: 100%;
`,V=(0,d.default)(G).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__StyledHeaderRow",componentId:"sc-6783a7e7-4"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  border-radius: 8px 8px 0px 0px;
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  height: 48px;
  line-height: 16px;
  padding: 0px 12px;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (max-width: ${I.T1}) {
    justify-content: space-between;
  }
`,M=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__ListNumberCell",componentId:"sc-6783a7e7-5"})`
  color: ${({theme:e})=>e.neutral2};
  min-width: 32px;
  font-size: 14px;

  @media only screen and (max-width: ${I.T1}) {
    display: none;
  }
`,A=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__DataCell",componentId:"sc-6783a7e7-6"})`
  justify-content: flex-end;
  min-width: 80px;
  user-select: ${({sortable:e})=>e?"none":"unset"};
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>d.css`background-color ${e.medium} ${n.ease}`};
`,B=(0,d.default)(A).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__TvlCell",componentId:"sc-6783a7e7-7"})`
  padding-right: 8px;
  @media only screen and (max-width: ${I.Uw}) {
    display: none;
  }
`,S=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__NameCell",componentId:"sc-6783a7e7-8"})`
  justify-content: flex-start;
  padding: 0px 8px;
  min-width: 240px;
  gap: 8px;

  @media only screen and (max-width: ${U.j$.xs}px) {
    min-width: 200px;
  }
`,Y=(0,d.default)(A).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__PriceCell",componentId:"sc-6783a7e7-9"})`
  padding-right: 8px;
`,K=(0,d.default)(A).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__PercentChangeCell",componentId:"sc-6783a7e7-10"})`
  padding-right: 8px;
  @media only screen and (max-width: ${I.T1}) {
    display: none;
  }
`,z=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__PercentChangeInfoCell",componentId:"sc-6783a7e7-11"})`
  display: none;

  @media only screen and (max-width: ${I.T1}) {
    display: flex;
    gap: 3px;
    justify-content: flex-end;
    color: ${({theme:e})=>e.neutral2};
    font-size: 12px;
    line-height: 16px;
  }
`,Z=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__PriceInfoCell",componentId:"sc-6783a7e7-12"})`
  justify-content: flex-end;
  flex: 1;

  @media only screen and (max-width: ${I.T1}) {
    flex-direction: column;
    align-items: flex-end;
  }
`,W=d.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__HeaderCellWrapper",componentId:"sc-6783a7e7-13"})`
  align-items: center;
  cursor: ${({onClick:e})=>e?"pointer":"unset"};
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  width: 100%;

  &:hover {
    ${$.iV}
  }
`,F=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__SparkLineCell",componentId:"sc-6783a7e7-14"})`
  padding: 0px 24px;
  min-width: 120px;

  @media only screen and (max-width: ${I.y5}) {
    display: none;
  }
`,J=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__SparkLine",componentId:"sc-6783a7e7-15"})`
  width: 124px;
  height: 42px;
`,Q=(0,d.default)(D.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__StyledLink",componentId:"sc-6783a7e7-16"})`
  text-decoration: none;
`,q=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__TokenInfoCell",componentId:"sc-6783a7e7-17"})`
  gap: 8px;
  line-height: 24px;
  font-size: 16px;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media only screen and (max-width: ${I.T1}) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 0px;
    width: max-content;
    font-weight: 535;
  }
`,ee=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__TokenName",componentId:"sc-6783a7e7-18"})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,ne=(0,d.default)(E).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__TokenSymbol",componentId:"sc-6783a7e7-19"})`
  color: ${({theme:e})=>e.neutral2};
  text-transform: uppercase;

  @media only screen and (max-width: ${I.T1}) {
    font-size: 12px;
    height: 16px;
    justify-content: flex-start;
    width: 100%;
  }
`,te=(0,d.default)(A).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__VolumeCell",componentId:"sc-6783a7e7-20"})`
  padding-right: 8px;
  @media only screen and (max-width: ${I.$l}) {
    display: none;
  }
`,oe=(0,d.default)(H.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__SmallLoadingBubble",componentId:"sc-6783a7e7-21"})`
  width: 25%;
`,ie=(0,d.default)(H.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__MediumLoadingBubble",componentId:"sc-6783a7e7-22"})`
  width: 65%;
`,se=(0,d.default)(H.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__LongLoadingBubble",componentId:"sc-6783a7e7-23"})`
  width: 90%;
`,re=(0,d.default)(H.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__IconLoadingBubble",componentId:"sc-6783a7e7-24"})`
  border-radius: 50%;
  width: 24px;
`,ae=(0,d.default)(se).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__SparkLineLoadingBubble",componentId:"sc-6783a7e7-25"})`
  height: 4px;
`,ce=d.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\Tokens\\TokenTable\\TokenRow__InfoIconContainer",componentId:"sc-6783a7e7-26"})`
  width: 16px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  cursor: help;
`,le={[R.PU.PRICE]:void 0,[R.PU.PERCENT_CHANGE]:void 0,[R.PU.TOTAL_VALUE_LOCKED]:(0,o.jsx)(i.cC,{id:"b2kIOW"}),[R.PU.VOLUME]:(0,o.jsx)(i.cC,{id:"UOqQih"})};function de({category:e}){const n=(0,d.useTheme)(),t=(0,j.Dv)(R.$E),i=(0,R.OX)(e),s=(0,j.Dv)(R.AY),r=le[e];return(0,o.jsxs)(W,{onClick:i,children:[s===e&&(0,o.jsx)(o.Fragment,{children:t?(0,o.jsx)(w.V,{width:16,height:16,color:n.neutral2}):(0,o.jsx)(T.c,{width:16,height:16,color:n.neutral2})}),e,r&&(0,o.jsx)(v.ud,{text:r,placement:"right",children:(0,o.jsx)(ce,{children:(0,o.jsx)(C,{width:"16px",height:"16px"})})})]})}function pe({header:e,listNumber:n,tokenInfo:t,price:i,percentChange:s,tvl:r,volume:a,sparkLine:c,...l}){const d=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M,{header:e,children:n}),(0,o.jsx)(S,{"data-testid":"name-cell",children:t}),(0,o.jsx)(Y,{"data-testid":"price-cell",sortable:e,children:i}),(0,o.jsx)(K,{"data-testid":"percent-change-cell",sortable:e,children:s}),(0,o.jsx)(B,{"data-testid":"tvl-cell",sortable:e,children:r}),(0,o.jsx)(te,{"data-testid":"volume-cell",sortable:e,children:a}),(0,o.jsx)(F,{children:c})]});return e?(0,o.jsx)(V,{"data-testid":"header-row",children:d}):(0,o.jsx)(G,{...l,children:d})}function me(){return(0,o.jsx)(pe,{header:!0,listNumber:"#",tokenInfo:(0,o.jsx)(i.cC,{id:"SKZhW9"}),price:(0,o.jsx)(de,{category:R.PU.PRICE}),percentChange:(0,o.jsx)(de,{category:R.PU.PERCENT_CHANGE}),tvl:(0,o.jsx)(de,{category:R.PU.TOTAL_VALUE_LOCKED}),volume:(0,o.jsx)(de,{category:R.PU.VOLUME}),sparkLine:null})}function ue(e){return(0,o.jsx)(pe,{header:!1,listNumber:(0,o.jsx)(oe,{}),$loading:!0,tokenInfo:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(re,{}),(0,o.jsx)(ie,{})]}),price:(0,o.jsx)(ie,{}),percentChange:(0,o.jsx)(H.X,{}),tvl:(0,o.jsx)(H.X,{}),volume:(0,o.jsx)(H.X,{}),sparkLine:(0,o.jsx)(ae,{}),...e})}const fe=(0,l.forwardRef)(((e,n)=>{const{formatFiatPrice:t,formatNumber:i,formatDelta:c}=(0,N.Gb)(),{tokenListIndex:l,tokenListLength:d,token:p,sortRank:m}=e,u=(0,j.Dv)(R.fO),f=(0,y.Qj)((0,O.UO)().chainName?.toUpperCase()),h=(0,y.Tz)(f),x=(0,j.Dv)(R.X3),g=p.market?.pricePercentChange?.value,T=c(g),w={chain_id:h,token_address:p.address,token_symbol:p.symbol,token_list_index:l,token_list_rank:m,token_list_length:d,time_frame:x,search_token_address_input:u},C=0===p.market?.price?.value?"-":t({price:p.market?.price?.value}),v=(0,_.C)();return(0,o.jsx)("div",{ref:n,"data-testid":`token-table-row-${p.address}`,children:(0,o.jsx)(Q,{to:(0,y.dG)({...p,isInfoExplorePageEnabled:v}),onClick:()=>(0,a._P)(s.Je.EXPLORE_TOKEN_ROW_CLICKED,w),children:(0,o.jsx)(pe,{header:!1,listNumber:m,tokenInfo:(0,o.jsxs)(X,{children:[(0,o.jsx)(b.Z,{token:p,size:"32px"}),(0,o.jsxs)(q,{children:[(0,o.jsx)(ee,{"data-cy":"token-name",children:p.name}),(0,o.jsx)(ne,{children:p.symbol})]})]}),price:(0,o.jsx)(P,{children:(0,o.jsxs)(Z,{children:[C,(0,o.jsxs)(z,{children:[(0,o.jsx)(L.Kx,{delta:g,size:14}),(0,o.jsx)(L.Jp,{delta:g,children:T})]})]})}),percentChange:(0,o.jsxs)(P,{gap:3,children:[(0,o.jsx)(L.Kx,{delta:g}),(0,o.jsx)(L.Jp,{delta:g,children:T})]}),tvl:(0,o.jsx)(P,{children:i({input:p.market?.totalValueLocked?.value,type:N.sw.FiatTokenStats})}),volume:(0,o.jsx)(P,{children:i({input:p.market?.volume?.value,type:N.sw.FiatTokenStats})}),sparkLine:(0,o.jsx)(J,{children:(0,o.jsx)(r.Z,{children:({width:n,height:t})=>e.sparklineMap&&(0,o.jsx)(k,{width:n,height:t,tokenData:p,pricePercentChange:p.market?.pricePercentChange?.value,sparklineMap:e.sparklineMap})})}),first:0===l,last:l===d-1})})})}));fe.displayName="LoadedRow"},86403:function(e,n,t){t.d(n,{$E:function(){return p},AY:function(){return d},OX:function(){return m},PU:function(){return o},X3:function(){return l},fO:function(){return c}});var o,i=t(17487),s=t(30719),r=t(67621),a=t(13712);!function(e){e.PRICE="Price",e.PERCENT_CHANGE="Change",e.TOTAL_VALUE_LOCKED="TVL",e.VOLUME="Volume"}(o||(o={}));const c=(0,r.rw)(""),l=(0,s.cn)(i.XH.DAY),d=(0,s.cn)(o.VOLUME),p=(0,s.cn)(!1);function m(e){const[n,t]=(0,s.KO)(d),[o,i]=(0,s.KO)(p);return(0,a.useCallback)((()=>{n===e?i(!o):(t(e),i(!1))}),[n,t,i,o,e])}}}]);
//# sourceMappingURL=7284.d796941a.chunk.js.map