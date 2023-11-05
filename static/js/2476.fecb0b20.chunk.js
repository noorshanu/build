"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2476],{17015:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var i=n(42893),r=n(12204),s=n(19903),o=n(80815),d=n(66196),a=n(22875),c=n(6053),l=n(44998),u=n.n(l),p=n(13712),m=n(47212),h=n(41440),x=n(47096),g=n(87253),f=n(39839),j=n(60198),v=n(42246),w=n(60476),y=n(19969),A=n(16403),k=n(2304),C=n(20095),b=n(85729),T=n(91101),_=n(97761),R=n(42881),D=n(45433),I=n(57916),B=n(15387),P=n(30112),N=n(63362),F=n(61646),S=n(58025);const E=new D.vU(I.Mt),M={1:[{tokens:[S.Fl[B.ChainId.MAINNET],S.h1],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[S.Fl[B.ChainId.MAINNET],S.Hz],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[S.Fl[B.ChainId.MAINNET],S.AA],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[S.Fl[B.ChainId.MAINNET],S.ML],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var q=n(64614);const W=(0,g.default)(w.Tz).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\v2__PageWrapper",componentId:"sc-5b7c8506-0"})`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,U=(0,g.default)(y.I8).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\v2__LPFeeExplainer",componentId:"sc-5b7c8506-1"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,H=(0,g.default)(k.m0).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\v2__TitleRow",componentId:"sc-5b7c8506-2"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`,O=(0,g.default)(k.DA).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\v2__ButtonRow",componentId:"sc-5b7c8506-3"})`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,z=(0,g.default)(j.DF).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\v2__ResponsiveButtonPrimary",componentId:"sc-5b7c8506-4"})`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,G=(0,g.default)(j.PL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\v2__ResponsiveButtonSecondary",componentId:"sc-5b7c8506-5"})`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,L=g.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\pages\\Pool\\v2__EmptyProposals",componentId:"sc-5b7c8506-6"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function Y(){const e=(0,g.useTheme)(),{account:t}=(0,o.useWeb3React)(),n=(0,c.G)();let l=(0,q.B3)();n||(l=[]);const D=(0,p.useMemo)((()=>l.map((e=>({liquidityToken:(0,q.Ce)(e),tokens:e})))),[l]),I=(0,p.useMemo)((()=>D.map((e=>e.liquidityToken))),[D]),[Y,$]=(0,R.v2)(t??void 0,I),Z=(0,p.useMemo)((()=>D.filter((({liquidityToken:e})=>Y[e.address]?.greaterThan("0")))),[D,Y]),J=(0,_.OY)(Z.map((({tokens:e})=>e))),V=$||J?.length<Z.length||J?.some((e=>!e)),Q=J.map((([,e])=>e)).filter((e=>Boolean(e))),X=function(e){const{chainId:t,account:n}=(0,o.useWeb3React)(),i=(0,N.Z)(),r=(0,p.useMemo)((()=>t?M[t]?.filter((t=>void 0===e||null!==e&&e.involvesToken(t.tokens[0])&&e.involvesToken(t.tokens[1])))??[]:[]),[t,e]),s=t?S.yg[t]:void 0,d=(0,p.useMemo)((()=>r.map((({stakingRewardAddress:e})=>e))),[r]),a=(0,p.useMemo)((()=>[n??void 0]),[n]),c=(0,F._Y)(d,E,"balanceOf",a),l=(0,F._Y)(d,E,"earned",a),m=(0,F._Y)(d,E,"totalSupply"),h=(0,F._Y)(d,E,"rewardRate",void 0,F.DB),x=(0,F._Y)(d,E,"periodFinish",void 0,F.DB);return(0,p.useMemo)((()=>t&&s?d.reduce(((e,t,n)=>{const o=c[n],d=l[n],a=m[n],p=h[n],g=x[n];if(!o?.loading&&!d?.loading&&a&&!a.loading&&p&&!p.loading&&g&&!g.loading){if(o?.error||d?.error||a.error||p.error||g.error)return console.error("Failed to load staking rewards info"),e;const c=r[n].tokens,l=new P.Pair(B.CurrencyAmount.fromRawAmount(c[0],"0"),B.CurrencyAmount.fromRawAmount(c[1],"0")),m=B.CurrencyAmount.fromRawAmount(l.liquidityToken,u().BigInt(o?.result?.[0]??0)),h=B.CurrencyAmount.fromRawAmount(l.liquidityToken,u().BigInt(a.result?.[0])),x=B.CurrencyAmount.fromRawAmount(s,u().BigInt(p.result?.[0])),f=(e,t,n)=>B.CurrencyAmount.fromRawAmount(s,u().greaterThan(t.quotient,u().BigInt(0))?u().divide(u().multiply(n.quotient,e.quotient),t.quotient):u().BigInt(0)),j=f(m,h,x),v=g.result?.[0]?.toNumber(),w=1e3*v,y=!v||!i||v>i.toNumber();e.push({stakingRewardAddress:t,tokens:r[n].tokens,periodFinish:w>0?new Date(w):void 0,earnedAmount:B.CurrencyAmount.fromRawAmount(s,u().BigInt(d?.result?.[0]??0)),rewardRate:j,totalRewardRate:x,stakedAmount:m,totalStakedAmount:h,getHypotheticalRewardRate:f,active:y})}return e}),[]):[]),[c,t,i,l,r,x,h,d,m,s])}(),K=X?.filter((e=>u().greaterThan(e.stakedAmount.quotient,T.iV))),ee=(0,_.OY)(K?.map((e=>e.tokens))),te=Q.filter((e=>0===ee?.map((e=>e[1])).filter((t=>t?.liquidityToken.address===e.liquidityToken.address)).length));return(0,i.jsx)(d.fM,{page:s.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(W,{children:[(0,i.jsxs)(U,{children:[(0,i.jsx)(y.sq,{}),(0,i.jsx)(y.RF,{}),(0,i.jsx)(y.uO,{children:(0,i.jsxs)(w.Tz,{gap:"md",children:[(0,i.jsx)(k.m0,{children:(0,i.jsx)(f.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(r.cC,{id:"Vsr1yC"})})}),(0,i.jsx)(k.m0,{children:(0,i.jsx)(f.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(r.cC,{id:"vRS32S"})})}),(0,i.jsx)(f.dL,{style:{color:e.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,i.jsx)(f.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(r.cC,{id:"7bNFf2"})})})]})}),(0,i.jsx)(y.sq,{}),(0,i.jsx)(y.RF,{})]}),n?(0,i.jsx)(w.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(w.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(H,{style:{marginTop:"1rem"},padding:"0",children:[(0,i.jsx)(f.Pw,{children:(0,i.jsx)(f.Tv.DeprecatedMediumHeader,{style:{marginTop:"0.5rem",justifySelf:"flex-start"},children:(0,i.jsx)(r.cC,{id:"MbHgIE"})})}),(0,i.jsxs)(O,{children:[(0,i.jsx)(G,{as:h.rU,padding:"6px 8px",to:"/add/v2/ETH",children:(0,i.jsx)(r.cC,{id:"ma87bD"})}),(0,i.jsx)(z,{id:"find-pool-button",as:h.rU,to:"/pools/v2/find",padding:"6px 8px",children:(0,i.jsx)(x.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(r.cC,{id:"SkceS7"})})}),(0,i.jsx)(z,{id:"join-pool-button",as:h.rU,to:"/add/v2/ETH",padding:"6px 8px",children:(0,i.jsx)(x.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(r.cC,{id:"knGjuL"})})})]})]}),t?V?(0,i.jsx)(L,{children:(0,i.jsx)(f.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(C.bb,{children:(0,i.jsx)(r.cC,{id:"yQE2r9"})})})}):Q?.length>0||ee?.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.PL,{children:(0,i.jsx)(k.m0,{children:(0,i.jsx)(r.cC,{id:"vAuUUB",components:{0:(0,i.jsx)(f.dL,{href:"https://v2.info.uniswap.org/account/"+t}),1:(0,i.jsx)("span",{})}})})}),te.map((e=>(0,i.jsx)(A.ZP,{pair:e},e.liquidityToken.address))),ee.map(((e,t)=>e[1]&&(0,i.jsx)(A.ZP,{pair:e[1],stakedBalance:K[t].stakedAmount},K[t].stakingRewardAddress))),(0,i.jsx)(k.DA,{justify:"center",style:{width:"100%"},children:(0,i.jsxs)(j.JU,{as:h.rU,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,i.jsx)(m.Z,{size:16,style:{marginRight:"8px"}}),(0,i.jsx)(r.cC,{id:"kBAezW"})]})})]}):(0,i.jsx)(L,{children:(0,i.jsx)(f.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(r.cC,{id:"erwMRf"})})}):(0,i.jsx)(v.ZP,{padding:"40px",children:(0,i.jsx)(f.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(r.cC,{id:"jWRT4F"})})})]})}):(0,i.jsx)(a.A,{})]}),(0,i.jsx)(b.c,{})]})})}},49111:function(e,t,n){n.d(t,{B:function(){return s}});var i=n(48141),r=n(58025);function s(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&r.Fl[t]?.equals(e)?(0,r.gX)(e.chainId):e}}}]);
//# sourceMappingURL=2476.fecb0b20.chunk.js.map