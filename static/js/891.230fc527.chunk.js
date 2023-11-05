"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[891],{30891:function(e,n,t){t.r(n),t.d(n,{default:function(){return nn}});var o=t(42893),r=t(19903),i=t(66196),s=t(79954),a=t(65364),l=t(12113),d=t(13712),c=t(80657),p=t(87253),m=t(26030),u=t(68830);const x=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Carousel__CarouselContainer",componentId:"sc-433e7397-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,h=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Carousel__CarouselCardContainer",componentId:"sc-433e7397-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,f=(0,p.default)(u.a.div).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Carousel__CarouselItemCard",componentId:"sc-433e7397-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,g=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Carousel__CarouselItemIcon",componentId:"sc-433e7397-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,C=800,b=({children:e,activeIndex:n,toggleNextSlide:t})=>{const r=(0,d.useCallback)(((n,t=e.length)=>(0,l.ef)(n,t)),[e]),i=(0,d.useCallback)(((e,n,t)=>(0,l.E)(e,n,t,r)),[r]),[s,a]=(0,u.useSprings)(e.length,(n=>({x:(n<e.length-1?n:-1)*C}))),c=(0,d.useRef)([0,1]),p=(0,d.useCallback)(((n,t)=>{const o=r(Math.floor(n/C)%e.length),s=t<0?e.length-2:1;a((r=>{const a=i(r,o,s),d=i(r,c.current[0],c.current[1]),p=(0,l.Z1)(o,s,a,e.length,n);return{x:-n%(C*e.length)+C*p,immediate:t<0?d>a:d<a,config:{tension:250,friction:30}}})),c.current=[o,s]}),[r,i,a,e.length]),b=(0,d.useRef)(0);(0,d.useEffect)((()=>{p(n*C,b.current)}),[n,p]);const v=(0,d.useCallback)((e=>{b.current=e,t(e)}),[t]);return(0,d.useEffect)((()=>{const e=setInterval((async()=>{v(1)}),7e3);return()=>{clearInterval(e)}}),[v,n]),(0,o.jsxs)(x,{children:[(0,o.jsx)(g,{onClick:()=>v(-1),children:(0,o.jsx)(m.wy,{width:"16px",height:"16px"})}),(0,o.jsx)(h,{children:s.map((({x:n},t)=>(0,o.jsx)(f,{style:{x:n},children:e[t]},t)))}),(0,o.jsx)(g,{onClick:()=>v(1),children:(0,o.jsx)(m.XC,{width:"16px",height:"16px"})})]})},v=({children:e})=>(0,o.jsx)(b,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var w=t(13119),y=t(80343),j=t(20555),_=t(1004),D=t(85325),H=t(57482);const T=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__CarouselCardBorder",componentId:"sc-3794e070-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,k=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__CardHeaderContainer",componentId:"sc-3794e070-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,N=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__LoadingCardHeaderContainer",componentId:"sc-3794e070-2"})`
  position: relative;
  animation: ${w.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,$=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__CardHeaderColumn",componentId:"sc-3794e070-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,S=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__IconContainer",componentId:"sc-3794e070-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,I=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__CollectionNameContainer",componentId:"sc-3794e070-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,O=(0,p.default)(y.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionNameContainer",componentId:"sc-3794e070-6"})`
  width: 50%;
`,G=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__HeaderOverlay",componentId:"sc-3794e070-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,z=p.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__CollectionImage",componentId:"sc-3794e070-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,U=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionImage",componentId:"sc-3794e070-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${w.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,F=(0,p.default)(y.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__LoadingTableElement",componentId:"sc-3794e070-10"})`
  width: 50px;
`,E=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__TableElement",componentId:"sc-3794e070-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,P=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__FirstColumnTextWrapper",componentId:"sc-3794e070-12"})``,B=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__CardBottomContainer",componentId:"sc-3794e070-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,X=p.default.img.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__MarketplaceIcon",componentId:"sc-3794e070-14"})`
  width: 20px;
  height: 20px;
`,V=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__CarouselCardContainer",componentId:"sc-3794e070-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${E}:nth-child(3n-1), ${F}:nth-child(3n-1) {
    justify-self: center;
  }

  ${E}:nth-child(3n), ${F}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${P} {
      display: none;
    }
    ${E} {
      justify-self: left !important;
    }
    ${$} {
      padding: 0 20px;
    }
  }
`,L=({marketplace:e,floorInEth:n,listings:t})=>{const{formatNumberOrString:r}=(0,H.Gb)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(E,{children:[(0,o.jsx)(X,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,o.jsx)(P,{children:(0,o.jsx)(D.T.BodySmall,{color:"neutral2",children:e})})]}),(0,o.jsx)(E,{children:(0,o.jsx)(D.T.BodySmall,{color:"neutral2",children:Number(n)>0?`${r({input:n,type:H.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,o.jsx)(E,{children:(0,o.jsx)(D.T.BodySmall,{color:"neutral2",children:Number(t)>0?t:"None"})})]})},M=[_.Fz.Opensea,_.Fz.X2Y2,_.Fz.LooksRare],R={[_.Fz.Opensea]:"OpenSea",[_.Fz.X2Y2]:"X2Y2",[_.Fz.LooksRare]:"LooksRare"},A=({collection:e,onClick:n})=>{const{data:t,loading:r}=(0,j.K)(e.address??""),{formatNumber:i}=(0,H.Gb)();return r?(0,o.jsx)(Z,{}):(0,o.jsx)(T,{children:(0,o.jsxs)(V,{onClick:n,children:[(0,o.jsx)(K,{collection:e}),(0,o.jsx)(B,{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(E,{children:[(0,o.jsx)(m.pD,{width:"20",height:"20"}),(0,o.jsx)(P,{children:(0,o.jsx)(D.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,o.jsx)(E,{children:e.floor&&(0,o.jsxs)(D.T.SubHeaderSmall,{color:"userThemeColor",children:[i({input:e.floor,type:H.sw.NFTToken})," ETH Floor"]})}),(0,o.jsx)(E,{children:(0,o.jsxs)(D.T.SubHeaderSmall,{color:"userThemeColor",children:[t.marketplaceCount?.reduce(((e,n)=>e+n.count),0)," Listings"]})}),M.map((n=>{const r=t.marketplaceCount?.find((e=>e.marketplace===n));return r?(0,o.jsx)(L,{marketplace:R[n],listings:r.count,floorInEth:r.floorPrice},`CarouselCard-key-${e.address}-${r.marketplace}`):null}))]})})]})})},W=()=>(0,o.jsx)(o.Fragment,{children:[...Array(12)].map((e=>(0,o.jsx)(F,{},e)))}),Y=(0,p.default)(D.T.MediumHeader).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\CarouselCard__CollectionName",componentId:"sc-3794e070-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,K=({collection:e})=>(0,o.jsxs)(k,{src:e.bannerImageUrl??"",children:[(0,o.jsxs)($,{children:[(0,o.jsx)(z,{src:e.imageUrl}),(0,o.jsxs)(I,{children:[(0,o.jsx)(Y,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,o.jsx)(S,{children:(0,o.jsx)(m.SA,{width:"24px",height:"24px"})})]})]}),(0,o.jsx)(G,{})]}),Z=({collection:e})=>(0,o.jsx)(T,{children:(0,o.jsxs)(V,{children:[e?(0,o.jsx)(K,{collection:e}):(0,o.jsxs)(N,{children:[(0,o.jsxs)($,{children:[(0,o.jsx)(U,{}),(0,o.jsx)(O,{})]}),(0,o.jsx)(G,{})]}),(0,o.jsx)(B,{children:(0,o.jsx)(W,{})})]})}),q=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Banner__BannerContainer",componentId:"sc-422b0ee0-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,J=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Banner__BannerMainArea",componentId:"sc-422b0ee0-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,Q=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Banner__HeaderContainer",componentId:"sc-422b0ee0-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ee=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"];var ne=()=>{const e=(0,c.s0)(),{data:n}=(0,a.S)(5+ee.length,s._u.Day),t=(0,d.useMemo)((()=>n?.filter((e=>e.address&&!ee.includes(e.address))).slice(0,5)),[n]),[r,i]=(0,d.useState)(0),p=(0,d.useCallback)((e=>{t&&i((n=>(0,l.ef)(n+e,t.length)))}),[t]);return(0,o.jsx)(q,{children:(0,o.jsxs)(J,{children:[(0,o.jsxs)(Q,{children:["Better prices. ",(0,o.jsx)("br",{}),"More listings."]}),t?(0,o.jsx)(b,{activeIndex:r,toggleNextSlide:p,children:t.map((n=>(0,o.jsx)(A,{collection:n,onClick:()=>e(`/nfts/collection/${n.address}`)},n.address)))}):(0,o.jsx)(v,{children:(0,o.jsx)(Z,{})})]})})},te=t(62329),oe=t(5658),re=t(39839),ie=t(69867),se=t(86682);t(56605),t(41966);const ae=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedText",componentId:"sc-abbd867d-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,le=(0,p.default)(ae).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Cells\\Cells__CollectionNameContainer",componentId:"sc-abbd867d-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,de=(0,p.default)(ae).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Cells\\Cells__CollectionName",componentId:"sc-abbd867d-2"})`
  margin-left: 8px;
`,ce=(0,p.default)(re.Tv.SubHeader).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeader",componentId:"sc-abbd867d-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,pe=(0,p.default)(re.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeaderSmall",componentId:"sc-abbd867d-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,me=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Cells\\Cells__RoundedImage",componentId:"sc-abbd867d-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:n})=>e?`url(${e})`:n.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,ue=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Cells\\Cells__ChangeCellContainer",componentId:"sc-abbd867d-6"})`
  display: flex;
  color: ${({theme:e,change:n})=>n>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,xe=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Cells\\Cells__EthContainer",componentId:"sc-abbd867d-7"})`
  display: flex;
  justify-content: flex-end;
`,he=({value:e})=>{const n=(0,oe.dD)();return(0,o.jsxs)(le,{children:[(0,o.jsx)(me,{src:e.logo}),(0,o.jsx)(de,{children:n?(0,o.jsx)(pe,{children:e.name}):(0,o.jsx)(ce,{children:e.name})}),e.isVerified&&(0,o.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,o.jsx)(m.SA,{})})]})},fe=({value:e})=>{const{formatNumberOrString:n}=(0,H.Gb)();return(0,o.jsx)("span",{children:e.value?n({input:e.value,type:H.sw.NFTCollectionStats}):"-"})},ge=(e,n,t,o)=>e===_.VG.ETH?t:o&&t?o*(n?parseFloat((0,ie.formatEther)(t)):t):void 0,Ce=({value:e,denomination:n,usdPrice:t})=>{const{formatNumberOrString:r}=(0,H.Gb)(),i=ge(n,!1,e,t),s=n===_.VG.ETH,a=r({input:i,type:s?H.sw.NFTToken:H.sw.FiatTokenStats})+(s?" ETH":""),l=(0,oe.dD)()?re.Tv.BodySmall:re.Tv.BodyPrimary;return(0,o.jsx)(xe,{children:(0,o.jsx)(l,{children:e?a:"-"})})},be=({value:e})=>(0,o.jsx)(re.Tv.BodyPrimary,{children:e}),ve=({value:e,denomination:n,usdPrice:t})=>{const{formatNumberOrString:r}=(0,H.Gb)(),i=ge(n,!1,e,t),s=n===_.VG.ETH,a=r({input:i,type:s?H.sw.WholeNumber:H.sw.FiatTokenStats})+(s?" ETH":"");return(0,o.jsx)(xe,{children:(0,o.jsx)(re.Tv.BodyPrimary,{children:a})})},we=({change:e,children:n})=>{const t=(0,oe.dD)()?re.Tv.BodySmall:re.Tv.BodyPrimary;return(0,o.jsxs)(ue,{change:e??0,children:[(0,o.jsx)(se.Kx,{delta:e}),(0,o.jsx)(t,{color:"currentColor",children:n||`${e?Math.abs(Math.round(e)):0}%`})]})};var ye=t(80815),je=t(83246),_e=t(37636),De=t(82118),He=t(83029),Te=t(98424),ke="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",Ne="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",$e="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",Se="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const Ie=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Table__RankCellContainer",componentId:"sc-3614719b-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Oe=p.default.tr.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Table__StyledRow",componentId:"sc-3614719b-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ge=p.default.tr.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Table__StyledLoadingRow",componentId:"sc-3614719b-2"})`
  height: 80px;
`,ze=p.default.th.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Table__StyledHeader",componentId:"sc-3614719b-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.click};`}
  }
`,Ue=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Table__StyledLoadingHolder",componentId:"sc-3614719b-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Fe=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Table__StyledCollectionNameHolder",componentId:"sc-3614719b-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Ee=(0,p.default)(y.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Table__StyledImageHolder",componentId:"sc-3614719b-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Pe=(0,p.default)(y.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\Table__StyledRankHolder",componentId:"sc-3614719b-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Be=10;function Xe({columns:e,data:n,smallHiddenColumns:t,mediumHiddenColumns:s,largeHiddenColumns:a,...l}){const m=(0,p.useTheme)(),{chainId:u}=(0,ye.useWeb3React)(),{width:x}=(0,De.i)(),h=(0,oe.dD)(),{getTableProps:f,getTableBodyProps:g,headerGroups:C,rows:b,prepareRow:v,setHiddenColumns:w,visibleColumns:y}=(0,He.useTable)({columns:e,data:n,initialState:{sortBy:[{desc:!0,id:Le.Volume}]},...l},He.useSortBy),j=(0,c.s0)();return(0,d.useEffect)((()=>{x&&(x<=m.breakpoint.sm?w(t):x<=m.breakpoint.md?w(s):x<=m.breakpoint.lg?w(a):w([]))}),[x,w,e,t,s,a,m.breakpoint]),0===n.length?(0,o.jsx)(Ve,{headerGroups:C,visibleColumns:y,...f()}):(0,o.jsxs)("table",{...f(),className:Ne,children:[(0,o.jsx)("thead",{className:Se,children:C.map((e=>(0,d.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,d.createElement)(ze,{className:$e,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?h?"16px":"52px":0},disabled:e.disableSortBy,key:n,children:[(0,o.jsx)(Te.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,o.jsx)(_e.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,o.jsx)(je.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,o.jsx)(Te.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,o.jsx)("tbody",{...g(),children:b.map(((e,n)=>(v(e),(0,o.jsx)(i.M8,{events:[r.TM.onClick],name:r.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:r.xo.NFT_TRENDING_ROW,children:(0,d.createElement)(Oe,{...e.getRowProps(),key:e.id,onClick:()=>j(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,t)=>(0,d.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:t,style:{maxWidth:0===t?h?"240px":"360px":"160px"}},0===t?(0,o.jsxs)(Ie,{children:[!h&&(0,o.jsx)(re.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell")))))},n))))})]})}function Ve({headerGroups:e,visibleColumns:n,...t}){return(0,o.jsxs)("table",{...t,className:Ne,children:[(0,o.jsx)("thead",{className:Se,children:e.map((e=>(0,d.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,d.createElement)(ze,{className:$e,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n,children:[(0,o.jsx)(Te.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,o.jsx)(_e.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,o.jsx)(je.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,o.jsx)(Te.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,o.jsx)("tbody",{...t,children:[...Array(Be)].map(((e,t)=>(0,o.jsx)(Ge,{children:[...Array(n.length)].map(((e,n)=>(0,o.jsx)("td",{className:ke,children:0===n?(0,o.jsxs)(Fe,{children:[(0,o.jsx)(Pe,{}),(0,o.jsx)(Ee,{}),(0,o.jsx)(y.X,{})]}):(0,o.jsx)(Ue,{children:(0,o.jsx)(y.X,{})})},n)))},t)))})]})}var Le;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Le||(Le={}));const Me=(e,n)=>e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1;var Re=({data:e,timePeriod:n})=>{const t=(0,d.useMemo)((()=>(e,n)=>Me(e.original.floor.value,n.original.floor.value)),[]),r=(0,d.useMemo)((()=>(e,n)=>Me(e.original.floor.change,n.original.floor.change)),[]),i=(0,d.useMemo)((()=>(e,n)=>Me(e.original.volume.value,n.original.volume.value)),[]),s=(0,d.useMemo)((()=>(e,n)=>Me(e.original.volume.change,n.original.volume.change)),[]),a=(0,d.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:he,disableSortBy:!0},{id:Le.Floor,Header:Le.Floor,accessor:({floor:e})=>e.value,sortType:t,Cell:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ce,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==_.XH.AllTime&&(0,o.jsx)(re.SF,{children:(0,o.jsx)(we,{change:e.row.original.floor.change})})]})}},{id:Le.FloorChange,Header:Le.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:n===_.XH.AllTime,sortType:r,Cell:function(e){return n===_.XH.AllTime?(0,o.jsx)(be,{value:"-"}):(0,o.jsx)(we,{change:e.row.original.floor.change})}},{id:Le.Volume,Header:Le.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:i,Cell:function(e){return(0,o.jsx)(ve,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Le.VolumeChange,Header:Le.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:n===_.XH.AllTime,sortType:s,Cell:function(e){const{change:t}=e.row.original.volume;return n===_.XH.AllTime?(0,o.jsx)(be,{value:"-"}):t&&t>=9999?(0,o.jsxs)(we,{change:t,children:[">9999","%"]}):(0,o.jsx)(we,{change:t})}},{id:Le.Items,Header:Le.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,o.jsx)(fe,{value:{value:e.row.original.totalSupply}})}},{Header:Le.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,o.jsx)(fe,{value:e.row.original.owners})}}]),[r,t,s,i,n]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(Xe,{smallHiddenColumns:[Le.Items,Le.FloorChange,Le.Volume,Le.VolumeChange,Le.Owners],mediumHiddenColumns:[Le.Items,Le.FloorChange,Le.VolumeChange,Le.Owners],largeHiddenColumns:[Le.Items,Le.Owners],data:e,columns:a})})};const Ae=[{label:"1D",value:_.XH.OneDay},{label:"1W",value:_.XH.SevenDays},{label:"1M",value:_.XH.ThirtyDays},{label:"All",value:_.XH.AllTime}],We=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\TrendingCollections__ExploreContainer",componentId:"sc-43719baf-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ye=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\TrendingCollections__StyledHeader",componentId:"sc-43719baf-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,Ke=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\TrendingCollections__FiltersRow",componentId:"sc-43719baf-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Ze=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\TrendingCollections__Filter",componentId:"sc-43719baf-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,qe=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\TrendingCollections__Selector",componentId:"sc-43719baf-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:n})=>e?n.surface3:"none"};
  cursor: pointer;

  ${te.c}
`,Je=(0,p.default)(re.Tv.SubHeader).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\explore\\TrendingCollections__StyledSelectorText",componentId:"sc-43719baf-5"})`
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
`;var Qe=()=>{const{formatterLocalCurrency:e}=(0,H.h2)(),[n,t]=(0,d.useState)(_.XH.OneDay),[r,i]=(0,d.useState)(!0),{data:l,loading:c}=(0,a.S)(100,function(e){switch(e){case _.XH.OneDay:return s._u.Day;case _.XH.SevenDays:return s._u.Week;case _.XH.ThirtyDays:return s._u.Month;case _.XH.AllTime:return s._u.Max;default:return s._u.Day}}(n)),p=(0,oe.$N)(),m=(0,d.useMemo)((()=>!c&&l?l.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:r?_.VG.ETH:_.VG.USD,usdPrice:p}))):[]),[l,c,r,p]);return(0,o.jsxs)(We,{children:[(0,o.jsx)(Ye,{children:"Trending NFT collections"}),(0,o.jsxs)(Ke,{children:[(0,o.jsx)(Ze,{children:Ae.map((e=>(0,o.jsx)(qe,{active:e.value===n,onClick:()=>t(e.value),children:(0,o.jsx)(Je,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)))}),(0,o.jsxs)(Ze,{onClick:()=>i(!r),children:[(0,o.jsx)(qe,{active:r,children:(0,o.jsx)(Je,{lineHeight:"20px",active:r,children:"ETH"})}),(0,o.jsx)(qe,{active:!r,children:(0,o.jsx)(Je,{lineHeight:"20px",active:!r,children:e})})]})]}),(0,o.jsx)(Re,{data:m,timePeriod:n})]})};const en=p.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\explore\\index__ExploreContainer",componentId:"sc-63c48b70-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`;var nn=()=>{const e=(0,oe.cP)((e=>e.setBagExpanded));return(0,d.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.fM,{page:r.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,o.jsxs)(en,{children:[(0,o.jsx)(ne,{}),(0,o.jsx)(Qe,{})]})})})}}}]);
//# sourceMappingURL=891.230fc527.chunk.js.map