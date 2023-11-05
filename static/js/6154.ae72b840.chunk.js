"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6154],{63548:function(e,t,n){n.d(t,{Z:function(){return H}});var s=n(42893),i=n(12204),a=n(19903),o=n(80815),r=n(66196),c=n(13119),d=n(92483),l=n(48141),p=n(40508),u=n(13712),m=n(87253),h=n(39839),f=n(47371),g=n(57482),x=n(44326),y=n(42881),b=n(60198),C=n(45533),v=n(56823),j=n(48972),w=n(2304),D=n(20437),T=n(925);const I=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-d932b2bb-0"})`
  ${f.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:t})=>t?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,E=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-d932b2bb-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:t,disabled:n})=>!n&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":e.surface2};\n    }\n  `}
`,N=(0,m.default)(b.Ux).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-d932b2bb-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:t})=>e?t.surface1:t.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
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
    background-color: ${({selected:e,theme:t})=>e?t.surface2:(0,p._j)(.05,t.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,_=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-d932b2bb-3"})`
  ${f.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,S=m.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-d932b2bb-4"})`
  ${f.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,p._j)(.2,e.neutral2)};
  }
`,k=(0,m.default)(S).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-d932b2bb-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,A=m.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-d932b2bb-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,P=(0,m.default)(x.r).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-d932b2bb-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
    stroke-width: 1.5px;
  }
`,O=m.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-d932b2bb-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,U=m.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-d932b2bb-9"})`
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
`,M=(0,m.default)(j.I).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-d932b2bb-10"})`
  ${c._Q};
  text-align: left;
`,G=(0,m.default)(d.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-d932b2bb-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function H({value:e,onUserInput:t,onMax:n,showMaxButton:d,onCurrencySelect:p,currency:f,otherCurrency:x,id:b,showCommonBases:j,showCurrencyAmount:S,disableNonToken:H,renderBalance:R,fiatValue:$,hideBalance:W=!1,pair:V=null,hideInput:L=!1,locked:z=!1,loading:B=!1,...F}){const[Z,q]=(0,u.useState)(!1),{account:Y,chainId:Q}=(0,o.useWeb3React)(),K=(0,y._h)(Y??void 0,f??void 0),X=(0,m.useTheme)(),{formatCurrencyAmount:J}=(0,g.Gb)(),ee=(0,u.useCallback)((()=>{q(!1)}),[q]),te=(0,l.EC)(Q);return(0,s.jsxs)(I,{id:b,hideInput:L,...F,children:[!z&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(E,{hideInput:L,disabled:!te,children:[(0,s.jsxs)(_,{style:L?{padding:"0",borderRadius:"8px"}:{},selected:!p,children:[!L&&(0,s.jsx)(M,{className:"token-amount-input",value:e,onUserInput:t,disabled:!te,$loading:B}),(0,s.jsx)(G,{shouldFetchOnAccountUpdate:Z,$fullWidth:L,children:(0,s.jsx)(N,{disabled:!te,visible:void 0!==f,selected:!!f,hideInput:L,className:"open-currency-select-button",onClick:()=>{p&&q(!0)},pointerEvents:p?void 0:"none",children:(0,s.jsxs)(A,{children:[(0,s.jsxs)(w.DA,{children:[V?(0,s.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,s.jsx)(C.Z,{currency0:V.token0,currency1:V.token1,size:24,margin:!0})}):f&&(0,s.jsx)(v.Z,{style:{marginRight:"0.5rem"},currency:f,size:"24px"}),V?(0,s.jsxs)(O,{className:"pair-name-container",children:[V?.token0.symbol,":",V?.token1.symbol]}):(0,s.jsx)(O,{className:"token-symbol-container",active:Boolean(f&&f.symbol),children:(f&&f.symbol&&f.symbol.length>20?f.symbol.slice(0,4)+"..."+f.symbol.slice(f.symbol.length-5,f.symbol.length):f?.symbol)||(0,s.jsx)(i.cC,{id:"T0Y2+3"})})]}),p&&(0,s.jsx)(P,{selected:!!f})]})})})]}),Boolean(!L&&!W&&f)&&(0,s.jsx)(k,{children:(0,s.jsxs)(w.m0,{children:[(0,s.jsx)(c.EG,{$loading:B,children:$&&(0,s.jsx)(T.x,{fiatValue:$})}),Y&&(0,s.jsxs)(w.DA,{style:{height:"17px"},children:[(0,s.jsx)(h.Tv.DeprecatedBody,{onClick:n,color:X.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!W&&f&&K)&&(R?.(K)||(0,s.jsx)(i.cC,{id:"VuFd5C",values:{0:J({amount:K,type:g.sw.TokenNonTx})}}))}),Boolean(d&&K)&&(0,s.jsx)(r.M8,{events:[a.TM.onClick],name:a.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:a.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,s.jsx)(U,{onClick:n,children:(0,s.jsx)(i.cC,{id:"4HtGBb"})})})]})]})})]})}),p&&(0,s.jsx)(D.Z,{isOpen:Z,onDismiss:ee,onCurrencySelect:p,selectedCurrency:f,otherSelectedCurrency:x,showCommonBases:j,showCurrencyAmount:S,disableNonToken:H})]})}},86299:function(e,t,n){n.d(t,{Z:function(){return c}});var s=n(42893),i=n(15387),a=n(44998),o=n.n(a);const r=new i.Fraction(o().BigInt(1),o().BigInt(1e6));function c({currencyAmount:e,significantDigits:t=4}){return(0,s.jsx)(s.Fragment,{children:e.equalTo(o().BigInt(0))?"0":e.greaterThan(r)?e.toSignificant(t):`<${r.toSignificant(1)}`})}},19969:function(e,t,n){n.d(t,{SS:function(){return m},sq:function(){return d},MN:function(){return l},RF:function(){return p},uO:function(){return u},I8:function(){return c}});var s=n(87253),i=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",a=n.p+"static/media/noise.3c7efafc83614205bd1a.png",o=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png",r=n(60476);const c=(0,s.default)(r.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__DataCard",componentId:"sc-1a2037c7-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=s.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-1a2037c7-1"})`
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
`,l=s.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-1a2037c7-2"})`
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
`,p=s.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardNoise",componentId:"sc-1a2037c7-3"})`
  background: url(${a});
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
`,u=(0,s.default)(r.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__CardSection",componentId:"sc-1a2037c7-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=s.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\earn\\styled__Break",componentId:"sc-1a2037c7-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},72714:function(e,t,n){n.d(t,{Z:function(){return r},e:function(){return o}});var s=n(42893),i=n(87253),a=n(437);const o=i.default.main.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
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
  z-index: ${a.k.default};
`;function r(e){return(0,s.jsx)(o,{...e})}},55494:function(e,t,n){n.d(t,{DC:function(){return r},ER:function(){return c},bb:function(){return d},im:function(){return o},pr:function(){return l}});var s=n(13119),i=n(47096),a=n(87253);const o=a.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-e4e1fcd6-0"})`
  position: relative;
  padding: 20px;
`,r=(0,a.default)(i.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-e4e1fcd6-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,c=a.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-e4e1fcd6-2"})`
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
`,d=a.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__Dots",componentId:"sc-e4e1fcd6-3"})`
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
`,l=(0,a.default)(s.pr).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-e4e1fcd6-4"})`
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
`},6942:function(e,t,n){n.r(t),n.d(t,{default:function(){return vn}});var s=n(42893),i=n(7571),a=n(23586),o=n(12204),r=n(19903),c=n(80815),d=n(66196),l=n(60198),p=n(42246),u=n(60476),m=n(44998),h=n.n(m),f=n(4572),g=n(55494),x=n(13712),y=n(46591),b=n(41440),C=n(45433),v=n(57246),j=n(30476),w=n(14014),D=n(80638),T=n(15387),I=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldProposalThreshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"ProposalThresholdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"support","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"VoteCast","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingDelay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"VotingDelaySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"VotingPeriodSet","type":"event"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalCount","type":"uint256"}],"name":"_initiate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"_setProposalThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"_setVotingDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"_setVotingPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"string","name":"reason","type":"string"}],"name":"castVoteWithReason","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorBravoDelegateStorageV1.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"uni_","type":"address"},{"internalType":"uint256","name":"votingPeriod_","type":"uint256"},{"internalType":"uint256","name":"votingDelay_","type":"uint256"},{"internalType":"uint256","name":"proposalThreshold_","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"uint256","name":"abstainVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorBravoDelegateStorageV1.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"uni","outputs":[{"internalType":"contract UniInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');const E={[T.ChainId.MAINNET]:{[T.UNI_ADDRESSES[T.ChainId.MAINNET]]:"UNI",[T.TIMELOCK_ADDRESSES[T.ChainId.MAINNET]]:"Timelock",[T.GOVERNANCE_ALPHA_V0_ADDRESSES[T.ChainId.MAINNET]]:"Governance (V0)",[T.GOVERNANCE_ALPHA_V1_ADDRESSES[T.ChainId.MAINNET]]:"Governance (V1)",[T.GOVERNANCE_BRAVO_ADDRESSES[T.ChainId.MAINNET]]:"Governance","0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e":"ENS Registry","0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41":"ENS Public Resolver","0xf754A7E347F81cFdc70AF9FbCCe9Df3D826360FA":"Franchiser Factory"}},N=12,_={1:N},S=2,k="Should Uniswap v3 be deployed to Polygon?",A="# Uniswap Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on Ethereum.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Uniswap (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n";var P=n(36665),O=n(61646),U=n(54479);const M=11473815,G=13059344,H=13551293,R=13786993,$=14732457;var W,V=n(58025),L=n(92796),z=n(63498),B=n(71768),F=n(4894);!function(e){e[e.INVALID=0]="INVALID",e[e.LOADING=1]="LOADING",e[e.SYNCING=2]="SYNCING",e[e.ERROR=3]="ERROR",e[e.SYNCED=4]="SYNCED"}(W||(W={}));var Z=n(97905),q=n(843),Y=n(50614);function Q(){return(0,P.cq)(T.GOVERNANCE_BRAVO_ADDRESSES,I,!0)}const K=Q;function X(){const{chainId:e}=(0,c.useWeb3React)(),t=(0,x.useMemo)((()=>e?V.yg[e]?.address:void 0),[e]);return(0,P.cq)(t,D.Mt,!0)}var J;!function(e){e[e.UNDETERMINED=-1]="UNDETERMINED",e[e.PENDING=0]="PENDING",e[e.ACTIVE=1]="ACTIVE",e[e.CANCELED=2]="CANCELED",e[e.DEFEATED=3]="DEFEATED",e[e.SUCCEEDED=4]="SUCCEEDED",e[e.QUEUED=5]="QUEUED",e[e.EXPIRED=6]="EXPIRED",e[e.EXECUTED=7]="EXECUTED"}(J||(J={}));const ee=new C.vU(w.Mt);function te(e){const{result:t}=(0,O.Wk)(e,"proposalCount");return t?.[0]?.toNumber()}const ne={"0x5ef2c7f0":"setSubnodeRecord(bytes32,bytes32,address,address,uint64)","0x10f13a8c":"setText(bytes32,string,string)","0xb4720477":"sendMessageToChild(address,bytes)","0xa9059cbb":"transfer(address,uint256)","0x095ea7b3":"approve(address,uint256)","0x7b1837de":"fund(address,uint256)"};function se(e,t,n,s){const a=function(e){const{chainId:t}=(0,c.useWeb3React)(),n=(0,L.ZP)(),s=(0,z.C)((e=>e.logs)),i=(0,z.T)();return(0,x.useEffect)((()=>{if(e&&t)return i((0,B.NH)({chainId:t,filter:e})),()=>{i((0,B.ys)({chainId:t,filter:e}))}}),[t,i,e]),(0,x.useMemo)((()=>{if(!t||!e||!n)return{logs:void 0,state:W.INVALID};const i=s[t]?.[(0,F.QM)(e)],a=i?.results;return a?a.error?{state:W.ERROR,logs:void 0}:{state:(0,F.x5)(e,n)||a.blockNumber>=n?W.SYNCED:W.SYNCING,logs:a.logs}:{state:W.LOADING,logs:void 0}}),[n,t,e,s])}((0,x.useMemo)((()=>{const t=e?.filters?.ProposalCreated();if(t)return{...t,fromBlock:n,toBlock:s}}),[e,n,s]));return(0,x.useMemo)((()=>a?.logs?.map((e=>ee.parseLog(e).args))?.filter((e=>t.flat().some((t=>t===e.id.toNumber()))))?.map((e=>{let t;const n=parseInt(e.startBlock?.toString());try{t=e.description}catch(s){let e=v.te.replace;if(n===G){const t=[226,128,152].toString(),n=[226,128,166].toString();e=(e,s,i,a)=>{if(e===v.Uw.UNEXPECTED_CONTINUE){const e=[i[s],i[s+1],i[s+2]].reverse().toString();if(e===t)return a.push(8216),2;if(e===n)return a.push(8230),2}return v.te.replace(e,s,i,a)}}t=JSON.parse((0,v.ZN)(s.error.value,e))||""}return n!==G&&n!==H&&n!==$||(t=t.replace(/ {2}/g,"\n").replace(/\d\. /g,"\n$&")),{description:t,details:e.targets.map(((t,n)=>{const s=e.signatures[n];let a,o,r=e.calldatas[n];if(""===s){const e=r.slice(0,10),t=ne[e]??"UNKNOWN()";if(!t)throw new Error("Missing four byte sig");[a,o]=t.substring(0,t.length-1).split("("),r=`0x${r.slice(10)}`}else[a,o]=s.substring(0,s.length-1).split("(");return{target:t,functionSig:a,callData:i.$.decode(o.split(","),r).join(", ")}}))}}))),[t,a])}const ie=[[1],[2],[3],[4]],ae=[[1],[2],[3]];function oe(e,t=0){return"number"===typeof e?new Array(e-t).fill(0).map(((e,n)=>[n+1+t])):[]}function re(){const{chainId:e}=(0,c.useWeb3React)(),t=(0,P.cq)(T.GOVERNANCE_ALPHA_V0_ADDRESSES,w.Mt,!1),n=(0,P.cq)(T.GOVERNANCE_ALPHA_V1_ADDRESSES,w.Mt,!1),s=Q(),i=te(t),a=te(n),o=te(s),r=(0,x.useMemo)((()=>e===T.ChainId.MAINNET?ie:oe(i)),[e,i]),d=(0,x.useMemo)((()=>e===T.ChainId.MAINNET?ae:oe(a)),[e,a]),l=(0,x.useMemo)((()=>oe(o,8)),[o]),p=(0,O.es)(t,"proposals",r),u=(0,O.es)(n,"proposals",d),m=(0,O.es)(s,"proposals",l),h=(0,O.es)(t,"state",r),f=(0,O.es)(n,"state",d),g=(0,O.es)(s,"state",l),y=se(t,r,11042287,12563484),b=se(n,d,12686656,13059343),C=se(s,l,13538153),v=(0,x.useMemo)((()=>e?V.yg[e]:void 0),[e]);return(0,x.useMemo)((()=>{const e=[...p,...u,...m],i=[...h,...f,...g],a=[...y??[],...b??[],...C??[]];return!v||e.some((e=>e.loading))||i.some((e=>e.loading))||t&&!y||n&&!b||s&&!C?{data:[],loading:!0}:{data:e.map(((e,t)=>{const n=parseInt(e?.result?.startBlock?.toString());let s=a[t]?.description??"";n===M&&(s=A);let o=s?.split(/#+\s|\n/g)[1];return n===R&&(o=k),{id:e?.result?.id.toString(),title:o??j.ag._({id:"wja8aL"}),description:s??j.ag._({id:"ry0RbG"}),proposer:e?.result?.proposer,status:i[t]?.result?.[0]??J.UNDETERMINED,forCount:T.CurrencyAmount.fromRawAmount(v,e?.result?.forVotes),againstCount:T.CurrencyAmount.fromRawAmount(v,e?.result?.againstVotes),startBlock:n,endBlock:parseInt(e?.result?.endBlock?.toString()),eta:e?.result?.eta,details:a[t]?.details,governorIndex:t>=p.length+u.length?2:t>=p.length?1:0}})),loading:!1}}),[y,b,C,t,n,s,h,f,g,p,u,m,v])}function ce(e,t){const{data:n}=re();return n.filter((t=>t.governorIndex===e))?.find((e=>e.id===t))}function de(){const{account:e}=(0,c.useWeb3React)(),t=X(),{result:n}=(0,O.Wk)(t,"delegates",[e??void 0]);return n?.[0]??void 0}function le(){const{account:e,chainId:t}=(0,c.useWeb3React)(),n=X(),{result:s,loading:i}=(0,O.Wk)(n,"getCurrentVotes",[e??void 0]);return(0,x.useMemo)((()=>{const e=t?V.yg[t]:void 0;return{loading:i,votes:e&&s?T.CurrencyAmount.fromRawAmount(e,s?.[0]):void 0}}),[t,i,s])}var pe,ue=n(87253),me=n(39839),he=n(72714),fe=n(73440),ge=n(63548),xe=n(79371),ye=n(2304),be=n(77856),Ce=n(47096);!function(e){e.TRANSFER_TOKEN="Transfer Token",e.APPROVE_TOKEN="Approve Token"}(pe||(pe={}));const ve=(0,ue.default)(u.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalActionSelector__ContentWrapper",componentId:"sc-18aa6f24-0"})`
  width: 100%;
  flex: 1 1;
  position: relative;
`,je=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalActionSelector__ActionSelectorHeader",componentId:"sc-18aa6f24-1"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
  margin-bottom: 10px;
`,we=(0,ue.default)(l.Kb).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalActionSelector__ActionDropdown",componentId:"sc-18aa6f24-2"})`
  padding: 0px;
  background-color: transparent;
  color: ${({theme:e})=>e.neutral1};
  font-size: 1.25rem;

  :hover,
  :active,
  :focus {
    outline: 0px;
    box-shadow: none;
    background-color: transparent;
  }
`,De=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalActionSelector__ProposalActionSelectorFlex",componentId:"sc-18aa6f24-3"})`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Te=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalActionSelector__ProposalActionSelectorContainer",componentId:"sc-18aa6f24-4"})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1em;
`,Ie=({className:e,onClick:t,proposalAction:n})=>(0,s.jsx)(De,{children:(0,s.jsxs)(Te,{className:e,children:[(0,s.jsx)(je,{children:(0,s.jsx)(o.cC,{id:"ZjOawn"})}),(0,s.jsx)(we,{onClick:t,children:n})]})});function Ee({isOpen:e,onDismiss:t,onProposalActionSelect:n}){const i=(0,x.useCallback)((e=>{n(e),t()}),[t,n]);return(0,s.jsx)(xe.Z,{isOpen:e,onDismiss:t,children:(0,s.jsxs)(ve,{children:[(0,s.jsx)(be.AC,{gap:"16px",children:(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(Ce.xv,{fontWeight:535,fontSize:16,children:(0,s.jsx)(o.cC,{id:"pnOrm4"})}),(0,s.jsx)(me.Tw,{onClick:t})]})}),(0,s.jsx)(be.Z0,{}),(0,s.jsx)(be.sN,{onClick:()=>i(pe.TRANSFER_TOKEN),children:(0,s.jsx)(u.ZP,{children:(0,s.jsx)(Ce.xv,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"PmH8DD"})})})}),(0,s.jsx)(be.sN,{onClick:()=>i(pe.APPROVE_TOKEN),children:(0,s.jsx)(u.ZP,{children:(0,s.jsx)(Ce.xv,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"TXcuVO"})})})})]})})}var Ne;!function(e){e[e.ADDRESS=0]="ADDRESS",e[e.CURRENCY=1]="CURRENCY"}(Ne||(Ne={}));const _e=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalActionDetail__ProposalActionDetailContainer",componentId:"sc-4eba8327-0"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > * {
    width: 100%;
  }
  > :not(:last-child) {
    margin-bottom: 10px;
  }
`,Se=({className:e,proposalAction:t,currency:n,amount:i,toAddress:a,onCurrencySelect:r,onAmountInput:c,onToAddressInput:d})=>{const l={[pe.TRANSFER_TOKEN]:[{type:Ne.ADDRESS,label:(0,s.jsx)(o.cC,{id:"/jQctM"})},{type:Ne.CURRENCY}],[pe.APPROVE_TOKEN]:[{type:Ne.ADDRESS,label:(0,s.jsx)(o.cC,{id:"/jQctM"})},{type:Ne.CURRENCY}]};return(0,s.jsx)(_e,{className:e,children:l[t].map(((e,t)=>e.type===Ne.ADDRESS?(0,s.jsx)(fe.Z,{label:e.label,value:a,onChange:d},t):e.type===Ne.CURRENCY?(0,s.jsx)(ge.Z,{value:i,currency:n,onUserInput:e=>c(e),onCurrencySelect:e=>r(e),showMaxButton:!1,showCommonBases:!1,showCurrencyAmount:!1,disableNonToken:!0,hideBalance:!0,id:"currency-input"},t):null))})},ke=ue.default.input.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\TextInput\\index__Input",componentId:"sc-e5da05dc-0"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`,Ae=ue.default.textarea.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\TextInput\\index__TextAreaInput",componentId:"sc-e5da05dc-1"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  resize: none;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  line-height: 1.2;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral2};
  }
`,Pe=(0,x.memo)((({className:e,value:t,onUserInput:n,placeholder:i,fontSize:a})=>{const o=(0,x.useRef)(document.createElement("textarea")),r=(0,x.useCallback)((e=>{o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px",n(e.target.value)}),[n]);return(0,s.jsx)(Ae,{style:{height:"auto",minHeight:"535px"},className:e,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:i||"",onChange:r,value:t,fontSize:a,ref:o})}));Pe.displayName="ResizingTextArea";const Oe=(0,ue.default)(Ce.xv).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalEditor__ProposalEditorHeader",componentId:"sc-9507b5e0-0"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
`,Ue=(0,x.memo)((0,ue.default)((({className:e,value:t,onUserInput:n,placeholder:i,fontSize:a})=>{const o=(0,x.useCallback)((e=>{n(e.target.value)}),[n]);return(0,s.jsx)("div",{className:e,children:(0,s.jsx)(ke,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:i||"",onChange:o,value:t,fontSize:a})})})).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalEditor__ProposalTitle",componentId:"sc-9507b5e0-1"})`
  margin-top: 10.5px;
  margin-bottom: 7.5px;
`),Me=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\ProposalEditor__ProposalEditorContainer",componentId:"sc-9507b5e0-2"})`
  margin-top: 10px;
  padding: 0.75rem 1rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Ge=({className:e,title:t,body:n,onTitleInput:i,onBodyInput:a})=>(0,s.jsxs)(Me,{className:e,children:[(0,s.jsx)(Oe,{children:(0,s.jsx)(o.cC,{id:"qcybNQ"})}),(0,s.jsx)(Ue,{value:t,onUserInput:i,placeholder:j.ag._({id:"ypPAJ2"}),fontSize:"1.25rem"}),(0,s.jsx)("hr",{}),(0,s.jsx)(Pe,{value:n,onUserInput:a,placeholder:"## Summary\n\nInsert your summary here\n\n## Methodology\n  \nInsert your methodology here\n\n## Conclusion\n  \nInsert your conclusion here\n  \n  ",fontSize:"1rem"})]});var He=n(30889),Re=n(68456),$e=n(34120);const We=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\ModalViews\\index__ConfirmOrLoadingWrapper",componentId:"sc-4eb336df-0"})`
  width: 100%;
  padding: 24px;
`,Ve=(0,ue.default)(u.lg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\ModalViews\\index__ConfirmedIcon",componentId:"sc-4eb336df-1"})`
  padding: 60px 0;
`;function Le({children:e,onDismiss:t}){return(0,s.jsxs)(We,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(me.Tw,{onClick:t})]}),(0,s.jsx)(Ve,{children:(0,s.jsx)(me._1,{src:Re.Z,alt:"loader",size:"90px"})}),(0,s.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[e,(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(o.cC,{id:"oG26Rt"})})]})]})}function ze({children:e,onDismiss:t,hash:n}){const i=(0,ue.useTheme)(),{chainId:a}=(0,c.useWeb3React)();return(0,s.jsxs)(We,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(me.Tw,{onClick:t})]}),(0,s.jsx)(Ve,{children:(0,s.jsx)(He.Z,{strokeWidth:.5,size:90,color:i.accent1})}),(0,s.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[e,a&&n&&(0,s.jsx)(me.dL,{href:(0,$e.E)(a,n,$e.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(o.cC,{id:"yVxaEc"})})})]})]})}const Be=({isOpen:e,hash:t,onDismiss:n})=>{const i=(0,ue.useTheme)();return(0,s.jsx)(xe.Z,{isOpen:e,onDismiss:n,children:t?(0,s.jsx)(ze,{onDismiss:n,hash:t,children:(0,s.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,s.jsx)(Ce.xv,{fontWeight:535,fontSize:20,textAlign:"center",children:(0,s.jsx)(o.cC,{id:"zEu7SF"})}),t&&(0,s.jsx)(me.dL,{href:(0,$e.E)(1,t,$e.r.TRANSACTION),children:(0,s.jsx)(Ce.xv,{fontWeight:535,fontSize:14,color:i.accent1,children:(0,s.jsx)(o.cC,{id:"rd4eHq"})})}),(0,s.jsx)(l.DF,{as:b.rU,to:"/vote",onClick:n,style:{margin:"20px 0 0 0"},children:(0,s.jsx)(Ce.xv,{fontWeight:535,fontSize:20,children:(0,s.jsx)(o.cC,{id:"vUOn9d"})})})]})}):(0,s.jsx)(Le,{onDismiss:n,children:(0,s.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"jVqrMl"})})})})})},Fe=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\index__PageWrapper",componentId:"sc-43fd835e-0"})`
  padding: 68px 8px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,Ze=(0,ue.default)(y.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\index__BackArrow",componentId:"sc-43fd835e-1"})`
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
`,qe=(0,ue.default)(b.rU).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\index__Nav",componentId:"sc-43fd835e-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1em 0 0 1em;
  text-decoration: none;
`,Ye=(0,ue.default)(me.Tv.SubHeaderLarge).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\index__HeaderText",componentId:"sc-43fd835e-3"})`
  margin: auto !important;
`,Qe=({proposalThreshold:e,hasActiveOrPendingProposal:t,hasEnoughVote:n,isFormInvalid:i,handleCreateProposal:a})=>{const r=e?h().divide(e.quotient,h().exponentiate(h().BigInt(10),h().BigInt(e.currency.decimals))).toLocaleString():void 0;return(0,s.jsx)(l.Kd,{style:{marginTop:"18px"},error:t||!n,disabled:i||t||!n,onClick:a,children:t?(0,s.jsx)(o.cC,{id:"EaeCw4"}):n?(0,s.jsx)(o.cC,{id:"+2ovA+"}):(0,s.jsx)(s.Fragment,{children:r?(0,s.jsx)(o.cC,{id:"zeKvPC",values:{formattedProposalThreshold:r}}):(0,s.jsx)(o.cC,{id:"GujLUI"})})})},Ke=(0,ue.default)(g.im).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\index__CreateProposalWrapper",componentId:"sc-43fd835e-4"})`
  display: flex;
  flex-flow: column wrap;
`,Xe=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\CreateProposal\\index__AutonomousProposalCTA",componentId:"sc-43fd835e-5"})`
  text-align: center;
  margin-top: 10px;
`;function Je(){const{account:e,chainId:t}=(0,c.useWeb3React)(),n=function(e){const t=K(),n=(0,O.Wk)(t,"latestProposalIds",[e]);return n?.result?.[0]?.toString()}(e??void 0)??"0",l=ce(S,n),{votes:m}=le(),g=function(){const{chainId:e}=(0,c.useWeb3React)(),t=K(),n=(0,O.Wk)(t,"proposalThreshold"),s=(0,x.useMemo)((()=>e?V.yg[e]:void 0),[e]);if(n?.result?.[0]&&s)return T.CurrencyAmount.fromRawAmount(s,n.result[0])}(),[y,b]=(0,x.useState)(!1),[C,v]=(0,x.useState)(),[j,w]=(0,x.useState)(!1),[D,I]=(0,x.useState)(pe.TRANSFER_TOKEN),[E,N]=(0,x.useState)(""),[_,k]=(0,x.useState)(V.yg[t??1]),[A,P]=(0,x.useState)(""),[M,G]=(0,x.useState)(""),[H,R]=(0,x.useState)(""),$=(0,x.useCallback)((()=>{b(!0)}),[b]),W=(0,x.useCallback)((e=>{I(e)}),[I]),L=(0,x.useCallback)((()=>{b(!1)}),[b]),z=(0,x.useCallback)((()=>{v(void 0),w(!1)}),[v,w]),B=(0,x.useCallback)((e=>{N(e)}),[N]),F=(0,x.useCallback)((e=>{k(e)}),[k]),Y=(0,x.useCallback)((e=>{P(e)}),[P]),Q=(0,x.useCallback)((e=>{G(e)}),[G]),X=(0,x.useCallback)((e=>{R(e)}),[R]),ee=(0,x.useMemo)((()=>Boolean(!D||!(0,a.isAddress)(E)||!_?.isToken||""===A||""===M||""===H)),[D,E,_,A,M,H]),te=Boolean(m&&g&&h().greaterThanOrEqual(m.quotient,g.quotient)),ne=function(){const{account:e,chainId:t}=(0,c.useWeb3React)(),n=K(),s=(0,Z.h7)();return(0,x.useCallback)((i=>{if(!e||!n||!i||!t)return;const a=[i.targets,i.values,i.signatures,i.calldatas,i.description];return n.estimateGas.propose(...a).then((e=>n.propose(...a,{gasLimit:(0,U.y)(e)}).then((e=>(s(e,{type:q.i.SUBMIT_PROPOSAL}),e.hash)))))}),[e,s,n,t])}();return(0,s.jsx)(d.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,s.jsx)(Fe,{children:(0,s.jsxs)(he.Z,{$maxWidth:"800px",children:[(0,s.jsxs)(qe,{to:"/vote",children:[(0,s.jsx)(Ze,{}),(0,s.jsx)(Ye,{children:"Create Proposal"})]}),(0,s.jsxs)(Ke,{children:[(0,s.jsx)(p.Pj,{children:(0,s.jsx)(u.Tz,{gap:"10px",children:(0,s.jsx)(me.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,s.jsx)(o.cC,{id:"8kkwc5",components:{0:(0,s.jsx)("strong",{}),1:(0,s.jsx)(me.dL,{href:"https://docs.uniswap.org/protocol/reference/Governance/governance-reference#propose"})}})})})}),(0,s.jsx)(Ie,{onClick:$,proposalAction:D}),(0,s.jsx)(Se,{proposalAction:D,currency:_,amount:A,toAddress:E,onCurrencySelect:F,onAmountInput:Y,onToAddressInput:B}),(0,s.jsx)(Ge,{title:M,body:H,onTitleInput:Q,onBodyInput:X}),(0,s.jsx)(Qe,{proposalThreshold:g,hasActiveOrPendingProposal:l?.status===J.ACTIVE||l?.status===J.PENDING,hasEnoughVote:te,isFormInvalid:ee,handleCreateProposal:async()=>{w(!0);const e={};if(!ne||!D||!_.isToken)return;const t=(0,f.Z)(A,_);if(!t)return;let n,s;switch(e.targets=[_.address],e.values=["0"],e.description=`# ${M}\n\n${H}\n`,D){case pe.TRANSFER_TOKEN:n=[["address","uint256"]],s=[[(0,a.getAddress)(E),t.quotient.toString()]],e.signatures=[`transfer(${n[0].join(",")})`];break;case pe.APPROVE_TOKEN:n=[["address","uint256"]],s=[[(0,a.getAddress)(E),t.quotient.toString()]],e.signatures=[`approve(${n[0].join(",")})`]}e.calldatas=[];for(let a=0;a<e.signatures.length;a++)e.calldatas[a]=i.$.encode(n[a],s[a]);const o=await(ne(e??void 0)?.catch((()=>{w(!1)})));o&&v(o)}}),te?null:(0,s.jsxs)(Xe,{children:["Don\u2019t have 2.5M votes? Anyone can create an autonomous proposal using"," ",(0,s.jsx)(me.dL,{href:"https://fish.vote",children:"fish.vote"})]})]}),(0,s.jsx)(Ee,{isOpen:y,onDismiss:L,onProposalActionSelect:e=>W(e)}),(0,s.jsx)(Be,{isOpen:j,hash:C,onDismiss:z})]})})})}var et=n(80657),tt=n(19969),nt=n(86299),st=n(25575),it=n(85729),at=n(36772),ot=n(50595),rt=n(15993),ct=n(48662),dt=n(42881);const lt=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\DelegateModal__ContentWrapper",componentId:"sc-ff522f58-0"})`
  width: 100%;
  padding: 24px;
`,pt=(0,ue.default)(ot.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\DelegateModal__StyledClosed",componentId:"sc-ff522f58-1"})`
  :hover {
    cursor: pointer;
  }
`,ut=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\DelegateModal__TextButton",componentId:"sc-ff522f58-2"})`
  :hover {
    cursor: pointer;
  }
`;function mt({isOpen:e,onDismiss:t,title:n}){const{account:i,chainId:r}=(0,c.useWeb3React)(),[d,p]=(0,x.useState)(!1),[m,h]=(0,x.useState)("");const f=d?m:i,{address:g}=(0,ct.Z)(f),y=(0,dt.mM)(i??void 0,r?V.yg[r]:void 0),b=function(){const{account:e,chainId:t,provider:n}=(0,c.useWeb3React)(),s=(0,Z.h7)(),i=X();return(0,x.useCallback)((o=>{if(!n||!t||!e||!o||!(0,a.isAddress)(o??""))return;const r=[o];if(!i)throw new Error("No UNI Contract!");return i.estimateGas.delegate(...r,{}).then((e=>i.delegate(...r,{value:null,gasLimit:(0,U.y)(e)}).then((e=>(s(e,{type:q.i.DELEGATE,delegatee:o}),e.hash)))))}),[e,s,t,n,i])}(),[C,v]=(0,x.useState)(),[j,w]=(0,x.useState)(!1);function D(){v(void 0),w(!1),t()}return(0,s.jsxs)(xe.Z,{isOpen:e,onDismiss:D,maxHeight:90,children:[!j&&!C&&(0,s.jsx)(lt,{gap:"lg",children:(0,s.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:n}),(0,s.jsx)(pt,{stroke:"black",onClick:D})]}),(0,s.jsx)(me.Tv.DeprecatedBody,{children:(0,s.jsx)(o.cC,{id:"bax021"})}),(0,s.jsx)(me.Tv.DeprecatedBody,{children:(0,s.jsx)(o.cC,{id:"7AHe/w"})}),d&&(0,s.jsx)(fe.Z,{value:m,onChange:function(e){h(e)}}),(0,s.jsx)(l.DF,{disabled:!(0,a.isAddress)(g??""),onClick:async function(){if(w(!0),!b)return;const e=await(b(g??void 0)?.catch((e=>{w(!1),console.log(e)})));e&&v(e)},children:(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:d?(0,s.jsx)(o.cC,{id:"Ui1tti"}):(0,s.jsx)(o.cC,{id:"SqN37/"})})}),(0,s.jsx)(ut,{onClick:()=>p(!d),children:(0,s.jsx)(me.Tv.DeprecatedBlue,{children:d?(0,s.jsx)(o.cC,{id:"vXCSlR"}):(0,s.jsx)(o.cC,{id:"i3lR50"})})})]})}),j&&!C&&(0,s.jsx)(Le,{onDismiss:D,children:(0,s.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:d?(0,s.jsx)(o.cC,{id:"mYDX/5"}):(0,s.jsx)(o.cC,{id:"rO0m+d"})}),(0,s.jsxs)(me.Tv.DeprecatedMain,{fontSize:36,children:[" ",(0,rt.Z)(y,4)]})]})}),C&&(0,s.jsx)(ze,{onDismiss:D,hash:C,children:(0,s.jsxs)(u.Tz,{gap:"md",justify:"center",children:[(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"ExzCxg"})}),(0,s.jsx)(me.Tv.DeprecatedMain,{fontSize:36,children:(0,rt.Z)(y,4)})]})})]})}const ht=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\ProposalEmptyState__EmptyProposals",componentId:"sc-92251d19-0"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ft=ue.default.i.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\ProposalEmptyState__Sub",componentId:"sc-92251d19-1"})`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`,gt=({HeaderContent:e,SubHeaderContent:t})=>(0,s.jsxs)(ht,{children:[(0,s.jsx)(me.Tv.DeprecatedBody,{style:{marginBottom:"8px"},children:(0,s.jsx)(e,{})}),(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(ft,{children:(0,s.jsx)(t,{})})})]});function xt(){const{chainId:e}=(0,c.useWeb3React)();return e&&e!==T.ChainId.MAINNET?(0,s.jsx)(gt,{HeaderContent:()=>(0,s.jsx)(o.cC,{id:"ejl/89"}),SubHeaderContent:()=>(0,s.jsx)(o.cC,{id:"ekfCbW"})}):(0,s.jsx)(gt,{HeaderContent:()=>(0,s.jsx)(o.cC,{id:"wra16A"}),SubHeaderContent:()=>(0,s.jsx)(o.cC,{id:"LNOwr1"})})}var yt=n(40508),bt=n(53984),Ct=n(56564),vt=n(13120),jt=n(83777),wt=n(91101);const Dt=(e,t)=>{switch(e){case J.PENDING:case J.ACTIVE:return t.accent1;case J.SUCCEEDED:case J.EXECUTED:return t.success;case J.DEFEATED:return t.critical;case J.QUEUED:case J.CANCELED:case J.EXPIRED:default:return t.neutral3}};function Tt({status:e}){switch(e){case J.PENDING:return(0,s.jsx)(o.cC,{id:"UbRKMZ"});case J.ACTIVE:return(0,s.jsx)(o.cC,{id:"F6pfE9"});case J.SUCCEEDED:return(0,s.jsx)(o.cC,{id:"KAbcm2"});case J.EXECUTED:return(0,s.jsx)(o.cC,{id:"L4jnDP"});case J.DEFEATED:return(0,s.jsx)(o.cC,{id:"WRTJfs"});case J.QUEUED:return(0,s.jsx)(o.cC,{id:"8wu9lr"});case J.CANCELED:return(0,s.jsx)(o.cC,{id:"GGWsTU"});case J.EXPIRED:return(0,s.jsx)(o.cC,{id:"M1RnFv"});default:return(0,s.jsx)(o.cC,{id:"v2r3sT"})}}const It=ue.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\styled__StyledProposalContainer",componentId:"sc-5d4db0a7-0"})`
  font-size: 0.825rem;
  font-weight: 535;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({status:e,theme:t})=>Dt(e,t)};
  border: 1px solid ${({status:e,theme:t})=>Dt(e,t)};
  width: fit-content;
  justify-self: flex-end;
  text-transform: uppercase;
  flex: 0 0 100px;
  text-align: center;
`;function Et({status:e}){return(0,s.jsx)(It,{status:e,children:(0,s.jsx)(Tt,{status:e})})}const Nt=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__PageWrapper",componentId:"sc-169304fd-0"})`
  padding-top: 68px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,_t=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__TopSection",componentId:"sc-169304fd-1"})`
  max-width: 640px;
  width: 100%;
`,St=(0,ue.default)(bt.zx).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__Proposal",componentId:"sc-169304fd-2"})`
  padding: 0.75rem 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  background-color: ${({theme:e})=>e.surface1};
  &:focus {
    background-color: ${({theme:e})=>(0,yt._j)(.05,e.surface1)};
  }
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
`,kt=ue.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__ProposalNumber",componentId:"sc-169304fd-3"})`
  opacity: ${({theme:e})=>e.opacity.hover};
  flex: 0 0 40px;
`,At=ue.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__ProposalTitle",componentId:"sc-169304fd-4"})`
  font-weight: 535;
  flex: 1;
  max-width: 420px;
  white-space: initial;
  word-wrap: break-word;
  padding-right: 10px;
`,Pt=(0,ue.default)(tt.I8).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__VoteCard",componentId:"sc-169304fd-5"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  overflow: hidden;
`,Ot=(0,ue.default)(ye.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__WrapSmall",componentId:"sc-169304fd-6"})`
  margin-bottom: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
  `};
`,Ut=(0,ue.default)(me.Tv.DeprecatedMain).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__TextButton",componentId:"sc-169304fd-7"})`
  color: ${({theme:e})=>e.accent1};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,Mt=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__AddressButton",componentId:"sc-169304fd-8"})`
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.accent1};
`,Gt=(0,ue.default)(me.dL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\Landing__StyledExternalLink",componentId:"sc-169304fd-9"})`
  color: ${({theme:e})=>e.neutral1};
`;function Ht(){const e=(0,ue.useTheme)(),{account:t,chainId:n}=(0,c.useWeb3React)(),[i,a]=(0,x.useState)(!0),p=(0,Ct.Wt)(vt.Lk.DELEGATE),m=(0,Ct.up)(),{data:f,loading:g}=re(),{loading:y,votes:C}=le(),v=(0,dt.mM)(t??void 0,n?V.yg[n]:void 0),j=de(),w=Boolean(v&&h().notEqual(v.quotient,h().BigInt(0))&&j===wt.r_);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,s.jsxs)(Nt,{gap:"lg",justify:"center",children:[(0,s.jsx)(mt,{isOpen:p,onDismiss:m,title:w?(0,s.jsx)(o.cC,{id:"MdYzHJ"}):(0,s.jsx)(o.cC,{id:"pyQcYT"})}),(0,s.jsx)(_t,{gap:"md",children:(0,s.jsxs)(Pt,{children:[(0,s.jsx)(tt.sq,{}),(0,s.jsx)(tt.RF,{}),(0,s.jsx)(tt.uO,{children:(0,s.jsxs)(u.Tz,{gap:"md",children:[(0,s.jsx)(ye.m0,{children:(0,s.jsx)(me.Tv.DeprecatedWhite,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"b/GPs3"})})}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(me.Tv.DeprecatedWhite,{fontSize:14,children:(0,s.jsx)(o.cC,{id:"UPoMvW"})})}),(0,s.jsx)(me.dL,{style:{color:e.white,textDecoration:"underline"},href:"https://uniswap.org/blog/uni",target:"_blank",children:(0,s.jsx)(me.Tv.DeprecatedWhite,{fontSize:14,children:(0,s.jsx)(o.cC,{id:"UP8B0b"})})})]})}),(0,s.jsx)(tt.sq,{}),(0,s.jsx)(tt.RF,{})]})}),(0,s.jsxs)(_t,{gap:"2px",children:[(0,s.jsxs)(Ot,{children:[(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{style:{margin:"0.5rem 0.5rem 0.5rem 0",flexShrink:0},children:(0,s.jsx)(o.cC,{id:"6g1gi0"})}),(0,s.jsxs)(ye.BA,{gap:"6px",justify:"flex-end",children:[g||y?(0,s.jsx)(st.ZP,{}):null,w?(0,s.jsx)(l.DF,{style:{width:"fit-content",height:"40px"},padding:"8px",$borderRadius:"8px",onClick:m,children:(0,s.jsx)(o.cC,{id:"1XEaEo"})}):C&&h().notEqual(h().BigInt(0),C?.quotient)?(0,s.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,s.jsx)(o.cC,{id:"YgWhFg",components:{0:(0,s.jsx)(nt.Z,{currencyAmount:C})}})}):v&&j&&j!==wt.r_&&h().notEqual(h().BigInt(0),v?.quotient)?(0,s.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,s.jsx)(o.cC,{id:"YgWhFg",components:{0:(0,s.jsx)(nt.Z,{currencyAmount:v})}})}):"",(0,s.jsx)(l.DF,{as:b.rU,to:"/create-proposal",style:{width:"fit-content",borderRadius:"8px",height:"40px"},padding:"8px",children:(0,s.jsx)(o.cC,{id:"+2ovA+"})})]})]}),!w&&(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),j&&j!==wt.r_?(0,s.jsxs)(ye.DA,{children:[(0,s.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"4px",children:(0,s.jsx)(o.cC,{id:"if4+2Q"})}),(0,s.jsxs)(Mt,{children:[(0,s.jsx)(Gt,{href:(0,$e.E)(1,j,$e.r.ADDRESS),style:{margin:"0 4px"},children:j===t?(0,s.jsx)(o.cC,{id:"QwCX4t"}):(0,jt.Xn)(j)}),(0,s.jsx)(Ut,{onClick:m,style:{marginLeft:"4px"},children:(0,s.jsx)(o.cC,{id:"zBlp20"})})]})]}):""]}),0===f?.length&&(0,s.jsx)(xt,{}),f?.length>0&&(0,s.jsxs)(u.Tz,{gap:"md",children:[(0,s.jsx)(ye.m0,{}),(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(me.Tv.DeprecatedMain,{children:(0,s.jsx)(o.cC,{id:"h3EttW"})}),(0,s.jsx)(at.Z,{isActive:!i,toggle:()=>a((e=>!e))})]})]}),f?.slice(0)?.reverse()?.filter((e=>!i||e.status!==J.CANCELED))?.map((e=>(0,s.jsxs)(St,{as:b.rU,to:`/vote/${e.governorIndex}/${e.id}`,children:[(0,s.jsxs)(kt,{children:[e.governorIndex,".",e.id]}),(0,s.jsx)(At,{children:e.title}),(0,s.jsx)(Et,{status:e.status})]},`${e.governorIndex}${e.id}`)))]}),(0,s.jsx)(me.Tv.DeprecatedSubHeader,{color:"text3",children:(0,s.jsx)(o.cC,{id:"3Mwm54"})})]})}),(0,s.jsx)(it.c,{})]})}var Rt=n(86003);const $t=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\ExecuteModal__ContentWrapper",componentId:"sc-b7d1c0f1-0"})`
  width: 100%;
  padding: 24px;
`,Wt=(0,ue.default)(ot.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\ExecuteModal__StyledClosed",componentId:"sc-b7d1c0f1-1"})`
  :hover {
    cursor: pointer;
  }
`,Vt=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\ExecuteModal__ConfirmOrLoadingWrapper",componentId:"sc-b7d1c0f1-2"})`
  width: 100%;
  padding: 24px;
`,Lt=(0,ue.default)(u.lg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\ExecuteModal__ConfirmedIcon",componentId:"sc-b7d1c0f1-3"})`
  padding: 60px 0;
`;function zt({isOpen:e,onDismiss:t,proposalId:n}){const{chainId:i}=(0,c.useWeb3React)(),a=function(){const{account:e,chainId:t}=(0,c.useWeb3React)(),n=K(),s=(0,Z.h7)();return(0,x.useCallback)((i=>{if(!e||!n||!i||!t)return;const a=[i];return n.estimateGas.execute(...a,{}).then((e=>n.execute(...a,{value:null,gasLimit:(0,U.y)(e)}).then((e=>(s(e,{type:q.i.EXECUTE,governorAddress:n.address,proposalId:parseInt(i)}),e.hash)))))}),[e,s,n,t])}(),[r,d]=(0,x.useState)(),[p,m]=(0,x.useState)(!1),h=(0,ue.useTheme)();function f(){d(void 0),m(!1),t()}return(0,s.jsxs)(xe.Z,{isOpen:e,onDismiss:f,maxHeight:90,children:[!p&&!r&&(0,s.jsx)($t,{gap:"lg",children:(0,s.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"/dt0VU",values:{proposalId:n}})}),(0,s.jsx)(Wt,{onClick:f})]}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(me.Tv.DeprecatedBody,{children:(0,s.jsx)(o.cC,{id:"VHfiai"})})}),(0,s.jsx)(l.DF,{onClick:async function(){if(m(!0),!a)return;const e=await(a(n)?.catch((e=>{m(!1),console.log(e)})));e&&d(e)},children:(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:(0,s.jsx)(o.cC,{id:"ZC2VJP"})})})]})}),p&&!r&&(0,s.jsxs)(Vt,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(Wt,{onClick:f})]}),(0,s.jsx)(Lt,{children:(0,s.jsx)(me._1,{src:Re.Z,alt:"loader",size:"90px"})}),(0,s.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"cS4teF"})})}),(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(o.cC,{id:"oG26Rt"})})]})]}),r&&(0,s.jsxs)(Vt,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(Wt,{onClick:f})]}),(0,s.jsx)(Lt,{children:(0,s.jsx)(He.Z,{strokeWidth:.5,size:90,color:h.accent1})}),(0,s.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"xthwq6"})})}),i&&(0,s.jsx)(me.dL,{href:(0,$e.E)(i,r,$e.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(o.cC,{id:"yVxaEc"})})})]})]})]})}const Bt=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\QueueModal__ContentWrapper",componentId:"sc-d505d5ad-0"})`
  width: 100%;
  padding: 24px;
`,Ft=(0,ue.default)(ot.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\QueueModal__StyledClosed",componentId:"sc-d505d5ad-1"})`
  :hover {
    cursor: pointer;
  }
`,Zt=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\QueueModal__ConfirmOrLoadingWrapper",componentId:"sc-d505d5ad-2"})`
  width: 100%;
  padding: 24px;
`,qt=(0,ue.default)(u.lg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\QueueModal__ConfirmedIcon",componentId:"sc-d505d5ad-3"})`
  padding: 60px 0;
`;function Yt({isOpen:e,onDismiss:t,proposalId:n}){const{chainId:i}=(0,c.useWeb3React)(),a=function(){const{account:e,chainId:t}=(0,c.useWeb3React)(),n=K(),s=(0,Z.h7)();return(0,x.useCallback)((i=>{if(!e||!n||!i||!t)return;const a=[i];return n.estimateGas.queue(...a,{}).then((e=>n.queue(...a,{value:null,gasLimit:(0,U.y)(e)}).then((e=>(s(e,{type:q.i.QUEUE,governorAddress:n.address,proposalId:parseInt(i)}),e.hash)))))}),[e,s,n,t])}(),[r,d]=(0,x.useState)(),[p,m]=(0,x.useState)(!1),h=(0,ue.useTheme)();function f(){d(void 0),m(!1),t()}return(0,s.jsxs)(xe.Z,{isOpen:e,onDismiss:f,maxHeight:90,children:[!p&&!r&&(0,s.jsx)(Bt,{gap:"lg",children:(0,s.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"PCMS6I",values:{proposalId:n}})}),(0,s.jsx)(Ft,{onClick:f})]}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(me.Tv.DeprecatedBody,{children:(0,s.jsx)(o.cC,{id:"ZYe2DX"})})}),(0,s.jsx)(l.DF,{onClick:async function(){if(m(!0),!a)return;const e=await(a(n)?.catch((e=>{m(!1),console.log(e)})));e&&d(e)},children:(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:(0,s.jsx)(o.cC,{id:"b24kPi"})})})]})}),p&&!r&&(0,s.jsxs)(Zt,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(Ft,{onClick:f})]}),(0,s.jsx)(qt,{children:(0,s.jsx)(me._1,{src:Re.Z,alt:"loader",size:"90px"})}),(0,s.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"4iM1V1"})})}),(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(o.cC,{id:"oG26Rt"})})]})]}),r&&(0,s.jsxs)(Zt,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(Ft,{onClick:f})]}),(0,s.jsx)(qt,{children:(0,s.jsx)(He.Z,{strokeWidth:.5,size:90,color:h.accent1})}),(0,s.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"ExzCxg"})})}),i&&(0,s.jsx)(me.dL,{href:(0,$e.E)(i,r,$e.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(o.cC,{id:"yVxaEc"})})})]})]})]})}var Qt=n(44455),Kt=n(63362),Xt=n(55831),Jt=n.n(Xt),en=n(51871),tn=n.n(en);const nn=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\VoteModal__ContentWrapper",componentId:"sc-dfc8fc3d-0"})`
  width: 100%;
  padding: 24px;
`,sn=(0,ue.default)(ot.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\VoteModal__StyledClosed",componentId:"sc-dfc8fc3d-1"})`
  :hover {
    cursor: pointer;
  }
`,an=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\VoteModal__ConfirmOrLoadingWrapper",componentId:"sc-dfc8fc3d-2"})`
  width: 100%;
  padding: 24px;
`,on=(0,ue.default)(u.lg).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\components\\vote\\VoteModal__ConfirmedIcon",componentId:"sc-dfc8fc3d-3"})`
  padding: 60px 0;
`;function rn({isOpen:e,onDismiss:t,proposalId:n,voteOption:i}){const{chainId:a}=(0,c.useWeb3React)(),r=function(){const{account:e,chainId:t}=(0,c.useWeb3React)(),n=K(),s=(0,Z.h7)();return(0,x.useCallback)(((i,a)=>{if(!e||!n||!i||!t)return;const o=[i,a===Y.N.Against?0:a===Y.N.For?1:2];return n.estimateGas.castVote(...o,{}).then((e=>n.castVote(...o,{value:null,gasLimit:(0,U.y)(e)}).then((e=>(s(e,{type:q.i.VOTE,decision:a,governorAddress:n.address,proposalId:parseInt(i),reason:""}),e.hash)))))}),[e,s,n,t])}(),{votes:d}=le(),[p,m]=(0,x.useState)(),[h,f]=(0,x.useState)(!1),g=(0,ue.useTheme)();function y(){m(void 0),f(!1),t()}return(0,s.jsxs)(xe.Z,{isOpen:e,onDismiss:y,maxHeight:90,children:[!h&&!p&&(0,s.jsx)(nn,{gap:"lg",children:(0,s.jsxs)(u.Tz,{gap:"lg",justify:"center",children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:i===Y.N.Against?(0,s.jsx)(o.cC,{id:"aSX+fT",values:{proposalId:n}}):i===Y.N.For?(0,s.jsx)(o.cC,{id:"A7Ys4I",values:{proposalId:n}}):(0,s.jsx)(o.cC,{id:"eiIsQo",values:{proposalId:n}})}),(0,s.jsx)(sn,{onClick:y})]}),(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"WO4eRQ",values:{0:(0,rt.Z)(d,4)}})}),(0,s.jsx)(l.DF,{onClick:async function(){if(f(!0),!r||void 0===i)return;const e=await(r(n,i)?.catch((e=>{f(!1),console.log(e)})));e&&m(e)},children:(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:i===Y.N.Against?(0,s.jsx)(o.cC,{id:"aSX+fT",values:{proposalId:n}}):i===Y.N.For?(0,s.jsx)(o.cC,{id:"A7Ys4I",values:{proposalId:n}}):(0,s.jsx)(o.cC,{id:"eiIsQo",values:{proposalId:n}})})})]})}),h&&!p&&(0,s.jsxs)(an,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(sn,{onClick:y})]}),(0,s.jsx)(on,{children:(0,s.jsx)(me._1,{src:Re.Z,alt:"loader",size:"90px"})}),(0,s.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"b2nic5"})})}),(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(o.cC,{id:"oG26Rt"})})]})]}),p&&(0,s.jsxs)(an,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(sn,{onClick:y})]}),(0,s.jsx)(on,{children:(0,s.jsx)(He.Z,{strokeWidth:.5,size:90,color:g.accent1})}),(0,s.jsxs)(u.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(u.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(o.cC,{id:"RSb2E9"})})}),a&&(0,s.jsx)(me.dL,{href:(0,$e.E)(a,p,$e.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,s.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(o.cC,{id:"yVxaEc"})})})]})]})]})}const cn=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__PageWrapper",componentId:"sc-a9a9ef47-0"})`
  padding-top: 68px;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,dn=(0,ue.default)(u.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__ProposalInfo",componentId:"sc-a9a9ef47-1"})`
  background: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  max-width: 640px;
  width: 100%;
`,ln=(0,ue.default)(me.m_).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__ArrowWrapper",componentId:"sc-a9a9ef47-2"})`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  color: ${({theme:e})=>e.neutral1};

  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`,pn=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__CardWrapper",componentId:"sc-a9a9ef47-3"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
`,un=(0,ue.default)(tt.I8).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__StyledDataCard",componentId:"sc-a9a9ef47-4"})`
  width: 100%;
  background: none;
  background-color: ${({theme:e})=>e.surface1};
  height: fit-content;
  z-index: 2;
`,mn=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__ProgressWrapper",componentId:"sc-a9a9ef47-5"})`
  width: 100%;
  margin-top: 1rem;
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.surface2};
  position: relative;
`,hn=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__Progress",componentId:"sc-a9a9ef47-6"})`
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e,status:t})=>"for"===t?e.success:e.critical};
  width: ${({percentageString:e})=>e??"0%"};
`,fn=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__MarkDownWrapper",componentId:"sc-a9a9ef47-7"})`
  max-width: 640px;
  overflow: hidden;
`,gn=(0,ue.default)(ye.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__WrapSmall",componentId:"sc-a9a9ef47-8"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    align-items: flex-start;
    flex-direction: column;
  `};
`,xn=ue.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__DetailText",componentId:"sc-a9a9ef47-9"})`
  word-break: break-all;
`,yn=(0,ue.default)(me.dL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Vote\\VotePage__ProposerAddressLink",componentId:"sc-a9a9ef47-10"})`
  word-break: break-all;
`;function bn(e,t,n,s){if(e&&t&&n&&s){const i=new Date;return i.setTime(s.add(Rt.O$.from(n).mul(Rt.O$.from(e-t))).toNumber()*Jt()("1s")),i}}function Cn(){const{governorIndex:e,id:t}=(0,et.UO)(),n=Number.parseInt(e),{chainId:i,account:a}=(0,c.useWeb3React)(),m=function(e){const t=K(),n=(0,O.Wk)(t,"quorumVotes")?.result?.[0],{chainId:s}=(0,c.useWeb3React)(),i=(0,x.useMemo)((()=>s?V.yg[s]:void 0),[s]);if(t&&n&&s===T.ChainId.MAINNET&&i&&e===S)return T.CurrencyAmount.fromRawAmount(i,n)}(n),f=ce(n,t),[g,b]=(0,x.useState)(void 0),C=(0,Ct.Wt)(vt.Lk.VOTE),v=(0,Ct.VE)(),j=(0,Ct.Wt)(vt.Lk.DELEGATE),w=(0,Ct.up)(),D=(0,Ct.Wt)(vt.Lk.QUEUE),I=(0,Ct.wG)(),k=(0,Ct.Wt)(vt.Lk.EXECUTE),A=(0,Ct.jC)(),P=(0,Kt.Z)(),U=(0,L.ZP)(),M=bn(f?.startBlock,U,(i&&_[i])??N,P),G=bn(f?.endBlock,U,(i&&_[i])??N,P),H=new Date,R=(0,Qt.eQ)(),$={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"},W=f?.eta?new Date(f.eta.mul(Jt()("1s")).toNumber()):void 0,z=f?.forCount?.add(f.againstCount),B=z?f?.forCount?.asFraction?.divide(z.asFraction)?.multiply(100):void 0,F=B?new T.Fraction(100).subtract(B):void 0,Z=function(e){const{account:t,chainId:n}=(0,c.useWeb3React)(),s=X(),i=(0,x.useMemo)((()=>n?V.yg[n]:void 0),[n]),a=(0,O.Wk)(s,"getPriorVotes",[t??void 0,e??void 0])?.result?.[0];return a&&i?T.CurrencyAmount.fromRawAmount(i,a):void 0}(f?.startBlock??void 0),q=Z&&h().greaterThan(Z.quotient,h().BigInt(0))&&f&&f.status===J.ACTIVE,Q=a&&f?.status===J.SUCCEEDED,ee=a&&f?.status===J.QUEUED,te=(0,dt.mM)(a??void 0,i?V.yg[i]:void 0),ne=de(),se=Boolean(te&&h().notEqual(te.quotient,h().BigInt(0))&&ne===wt.r_),ie=e=>{if((0,jt.UJ)(e)&&i){const t=E[i]?.[e]??e;return(0,s.jsx)(me.dL,{href:(0,$e.E)(i,e,$e.r.ADDRESS),children:t})}return(0,s.jsx)("span",{children:e})};return(0,s.jsx)(d.fM,{page:r.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(cn,{gap:"lg",justify:"center",children:[(0,s.jsx)(rn,{isOpen:C,onDismiss:v,proposalId:f?.id,voteOption:g}),(0,s.jsx)(mt,{isOpen:j,onDismiss:w,title:(0,s.jsx)(o.cC,{id:"MdYzHJ"})}),(0,s.jsx)(Yt,{isOpen:D,onDismiss:I,proposalId:f?.id}),(0,s.jsx)(zt,{isOpen:k,onDismiss:A,proposalId:f?.id}),(0,s.jsxs)(dn,{gap:"lg",justify:"start",children:[(0,s.jsxs)(ye.m0,{style:{width:"100%"},children:[(0,s.jsx)(ln,{to:"/vote",children:(0,s.jsx)(o.cC,{id:"HgT4Lv",components:{0:(0,s.jsx)(y.Z,{size:20})}})}),f&&(0,s.jsx)(Et,{status:f.status})]}),(0,s.jsxs)(u.Tz,{gap:"10px",style:{width:"100%"},children:[(0,s.jsx)(me.Tv.DeprecatedLargeHeader,{style:{marginBottom:".5rem"},children:f?.title}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(me.Tv.DeprecatedMain,{children:M&&M>H?(0,s.jsx)(o.cC,{id:"/lY+kD",values:{0:M.toLocaleString(R,$)}}):null})}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(me.Tv.DeprecatedMain,{children:G&&(G<H?(0,s.jsx)(o.cC,{id:"3X8B3E",values:{0:G.toLocaleString(R,$)}}):(0,s.jsx)(o.cC,{id:"IPCr3d",values:{0:G.toLocaleString(R,$)}}))})}),f&&f.status===J.ACTIVE&&!q&&(0,s.jsx)(p.rd,{children:(0,s.jsxs)(me.Tv.DeprecatedBlack,{children:[(0,s.jsx)(o.cC,{id:"7bxUAT",values:{0:f.startBlock}})," ",se&&(0,s.jsx)("span",{children:(0,s.jsx)(o.cC,{id:"LP6nKU",components:{0:(0,s.jsx)(me.m_,{to:"/vote"})}})})]})})]}),q&&(0,s.jsxs)(ye.DA,{style:{width:"100%",gap:"12px"},children:[(0,s.jsx)(l.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{b(Y.N.For),v()},children:(0,s.jsx)(o.cC,{id:"TW/9Cs"})}),(0,s.jsx)(l.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{b(Y.N.Against),v()},children:(0,s.jsx)(o.cC,{id:"taP3et"})})]}),Q&&(0,s.jsx)(ye.DA,{style:{width:"100%",gap:"12px"},children:(0,s.jsx)(l.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{I()},children:(0,s.jsx)(o.cC,{id:"b24kPi"})})}),ee&&(0,s.jsxs)(s.Fragment,{children:[W&&(0,s.jsx)(ye.m0,{children:(0,s.jsx)(me.Tv.DeprecatedBlack,{children:(0,s.jsx)(o.cC,{id:"bW/jOL",values:{0:W.toLocaleString(R,$)}})})}),(0,s.jsx)(ye.DA,{style:{width:"100%",gap:"12px"},children:(0,s.jsx)(l.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{A()},disabled:!P||!f?.eta||P.lt(f.eta),children:(0,s.jsx)(o.cC,{id:"ZC2VJP"})})})]}),(0,s.jsxs)(pn,{children:[(0,s.jsx)(un,{children:(0,s.jsxs)(tt.uO,{children:[(0,s.jsx)(u.Tz,{gap:"md",children:(0,s.jsxs)(gn,{children:[(0,s.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"YHpbe1"})}),f&&(0,s.jsxs)(me.Tv.DeprecatedBlack,{fontWeight:535,children:[f.forCount.toFixed(0,{groupSeparator:","}),m&&(0,s.jsx)("span",{style:{fontWeight:485},children:` / ${m.toExact({groupSeparator:","})}`})]})]})}),(0,s.jsx)(mn,{children:(0,s.jsx)(hn,{status:"for",percentageString:f?.forCount.greaterThan(0)?`${B?.toFixed(0)??0}%`:"0%"})})]})}),(0,s.jsx)(un,{children:(0,s.jsxs)(tt.uO,{children:[(0,s.jsx)(u.Tz,{gap:"md",children:(0,s.jsxs)(gn,{children:[(0,s.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"GFvPy6"})}),f&&(0,s.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:f.againstCount.toFixed(0,{groupSeparator:","})})]})}),(0,s.jsx)(mn,{children:(0,s.jsx)(hn,{status:"against",percentageString:f?.againstCount?.greaterThan(0)?`${F?.toFixed(0)??0}%`:"0%"})})]})})]}),(0,s.jsxs)(u.Tz,{gap:"md",children:[(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"URmyfc"})}),f?.details?.map(((e,t)=>(0,s.jsxs)(xn,{children:[t+1,": ",ie(e.target),".",e.functionSig,"(",e.callData.split(",").map(((t,n)=>(0,s.jsxs)("span",{children:[ie(t),e.callData.split(",").length-1===n?"":","]},n))),")"]},t)))]}),(0,s.jsxs)(u.Tz,{gap:"md",children:[(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"Nu4oKW"})}),(0,s.jsx)(fn,{children:(0,s.jsx)(tn(),{source:f?.description,renderers:{image:function({...e}){return(0,s.jsx)("img",{...e,style:{width:"100%",height:"100$",objectFit:"cover"},alt:""})}}})})]}),(0,s.jsxs)(u.Tz,{gap:"md",children:[(0,s.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsx)(o.cC,{id:"5nBkYU"})}),(0,s.jsx)(yn,{href:f?.proposer&&i?(0,$e.E)(i,f?.proposer,$e.r.ADDRESS):"",children:(0,s.jsx)(tn(),{source:f?.proposer})})]})]})]}),(0,s.jsx)(it.c,{})]})})}function vn(){return(0,s.jsxs)(et.Z5,{children:[(0,s.jsx)(et.AW,{path:"/",element:(0,s.jsx)(Ht,{})}),(0,s.jsx)(et.AW,{path:":governorIndex/:id",element:(0,s.jsx)(Cn,{})}),(0,s.jsx)(et.AW,{path:"create-proposal",element:(0,s.jsx)(Je,{})})]})}},15993:function(e,t,n){n.d(t,{Z:function(){return c}});var s=n(15387),i=n(29198),a=n(44998),o=n.n(a);function r({number:e,locale:t,sigFigs:n,fixedDecimals:s,options:a={}}){let o,r;if(o=!t||t&&!i.RF.includes(t)?i.ZW:[t,i.ZW],a.minimumFractionDigits=a.minimumFractionDigits||s,a.maximumFractionDigits=a.maximumFractionDigits||s,a.maximumSignificantDigits=a.maximumSignificantDigits||s?void 0:n,"number"===typeof e)r=s?parseFloat(e.toFixed(s)):e;else{const t=parseFloat(e.toSignificant(n));r=s?parseFloat(t.toFixed(s)):t}return r.toLocaleString(o,a)}function c(e,t,n=i.ZW,a){return e?o().equal(e.quotient,o().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new s.Fraction(1,1e5))?`<${r({number:1e-5,locale:n})}`:r({number:e,locale:n,sigFigs:t,fixedDecimals:a}):"-"}}}]);
//# sourceMappingURL=6154.ae72b840.chunk.js.map