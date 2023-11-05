"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2186],{77113:function(e,t,n){n.r(t),n.d(t,{BannerWrapper:function(){return wn},CollectionBannerLoading:function(){return hn},default:function(){return kn}});var i=n(42893),r=n(19903),s=n(80815),o=n(66196),a=n(60476),l=n(62329),c=n(2304),d=n(80343),p=n(20555),g=n(49912),h=n(17790),u=n(98424),m=n(2994),f=n(15655),x=n(5658),w=n(50026),b=n(12113),y=n(57482);n(56605),n(41966);const C=()=>{const e=(0,x.cP)((e=>e.itemsInBag)),t=(0,x.cP)((e=>e.toggleBag)),n=(0,w.P)(),r=(0,w.B)(),{formatEther:s,formatNumberOrString:o}=(0,y.Gb)(),a=e.length>0;return(0,i.jsxs)(m.X2,{display:{sm:a?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,i.jsxs)(m.X2,{gap:"8",children:[(0,i.jsx)(u.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,i.jsx)(u.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,i.jsxs)(m.sg,{children:[(0,i.jsx)(u.n,{className:f.d1,fontWeight:"medium",children:(0,b.t)(e.length,"NFT")}),(0,i.jsxs)(m.X2,{gap:"8",children:[(0,i.jsxs)(u.n,{className:f.d1,children:[`${s({input:n.toString(),type:y.sw.NFTToken})}`," ETH"]}),(0,i.jsx)(u.n,{color:"neutral2",className:f.Km,children:o({input:r,type:y.sw.FiatNFTToken})})]})]})]}),(0,i.jsx)(u.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var v=n(17749),j=n(87253),_=(n(36199),"_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf"),k="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9";const T=(0,j.default)(m.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\ActivitySwitcher__BaseActivityContainer",componentId:"sc-59f230d8-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,N=new Array(2).fill(null).map(((e,t)=>(0,i.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),I=({showActivity:e,toggleActivity:t})=>{const n=(0,x.Iv)((e=>e.isCollectionStatsLoading));return(0,i.jsx)(T,{gap:"24",marginBottom:"16",children:n?N:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.n,{as:"button",className:e?_:k,onClick:()=>e&&t(),children:"Items"}),(0,i.jsx)(o.M8,{events:[r.TM.onClick],element:r.xo.NFT_ACTIVITY_TAB,name:r.Yz.NFT_ACTIVITY_SELECTED,children:(0,i.jsx)(u.n,{as:"button",className:e?k:_,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var S=n(86003),z=n(69867),P=n(56878),D=n(79954),$=n(82627),E=n(14526),H=n(12204),R=n(14327),O=n(83164),M=n(13712);const F=({asset:e,isMobile:t,mediaShouldBePlaying:n,setCurrentTokenPlayingMedia:s,uniformAspectRatio:a,setUniformAspectRatio:l,renderedHeight:c,setRenderedHeight:d})=>{const{formatEther:p}=(0,y.Gb)(),g=(0,x.cP)((e=>e.bagManuallyClosed)),h=(0,x.cP)((e=>e.addAssetsToBag)),u=(0,x.cP)((e=>e.removeAssetsFromBag)),m=(0,x.cP)((e=>e.itemsInBag)),f=(0,x.cP)((e=>e.bagExpanded)),w=(0,x.cP)((e=>e.setBagExpanded)),b=(0,o.oO)({page:r.yJ.NFT_COLLECTION_PAGE}),{isSelected:C}=(0,M.useMemo)((()=>({isSelected:m.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,m]),v=e.notForSale||S.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),j=e?.rarity?.providers?e.rarity.providers[0]:void 0,_=(0,M.useCallback)((()=>{S.O$.from(e.priceInfo?.ETHPrice??0).gt(0)&&(h([e]),f||t||g||w({bagExpanded:!0}),(0,o._P)(r.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...b}))}),[h,e,f,g,t,w,b]),k=(0,M.useCallback)((()=>{u([e])}),[e,u]),T=(0,M.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,i.jsx)(O.yT,{}):null,primaryInfoRight:e.rarity&&j?(0,i.jsx)(O.SD,{provider:j}):null,secondaryInfo:v?"":`${p({input:e.priceInfo.ETHPrice,type:y.sw.NFTToken})} ETH`,selectedInfo:(0,i.jsx)(H.cC,{id:"77UrnP"}),notSelectedInfo:(0,i.jsx)(H.cC,{id:"2RtVHm"}),disabledInfo:(0,i.jsx)(H.cC,{id:"i/2ImT"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,p,v,j]);return(0,i.jsx)(R.y,{asset:e,display:T,isSelected:C,isDisabled:Boolean(e.notForSale),selectAsset:_,unselectAsset:k,mediaShouldBePlaying:n,uniformAspectRatio:a,setUniformAspectRatio:l,renderedHeight:c,setRenderedHeight:d,setCurrentTokenPlayingMedia:s,testId:"nft-collection-asset"})};var B,U=n(42223),A=n(55338),L=n(26030),G=n(17669),Y="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",W="_10b1b4vc",X="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",Z="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",V="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",K="_10b1b4v2",q=n(50413),J=n(2761),Q=n(9170);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(B||(B={}));const ee=(0,J.Ue)()((0,Q.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,n)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:n}})))}})),{name:"useTraitsOpen"}));var te=n(39839),ne=n(71814);const ie=(0,j.default)(m.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\MarketplaceSelect__FilterItemWrapper",componentId:"sc-7452482a-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,re=(0,j.default)(m.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\MarketplaceSelect__MarketNameWrapper",componentId:"sc-7452482a-1"})`
  gap: 10px;
`,se={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},oe=({title:e,element:t,onClick:n})=>(0,i.jsxs)(ie,{onClick:n,children:[(0,i.jsx)(te.Tv.BodyPrimary,{children:e}),(0,i.jsx)(te.Tv.SubHeaderSmall,{children:t})]}),ae=({title:e,value:t,addMarket:n,removeMarket:s,isMarketSelected:a,count:l})=>{const[c,d]=(0,M.useState)(!1),[p,g]=(0,M.useReducer)((e=>!e),!1);(0,M.useEffect)((()=>{d(a)}),[a]);const h=e=>{e.preventDefault(),c?(s(t),d(!1)):(n(t),d(!0)),(0,o._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.MARKETPLACE})},m=(0,i.jsx)(ne.X,{checked:c,hovered:p,onChange:h,children:(0,i.jsx)(u.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),f=(0,i.jsxs)(re,{children:[(0,b.Dp)(e,"16"),e]});return(0,i.jsx)("div",{onMouseEnter:g,onMouseLeave:g,children:(0,i.jsx)(oe,{title:f,element:m,onClick:h})},t)},le=({title:e,items:t,onClick:n,isOpen:r})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.n,{className:X,opacity:r?"1":"0"}),(0,i.jsxs)(u.n,{as:"details",className:(0,P.default)(f.Nf,!r&&K),open:r,borderRadius:r?"0":"12",children:[(0,i.jsxs)(u.n,{as:"summary",className:`${V} ${K}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:n,children:[e,(0,i.jsx)(u.n,{display:"flex",alignItems:"center",children:(0,i.jsx)(u.n,{className:Y,style:{transform:`rotate(${r?0:180}deg)`},children:(0,i.jsx)(L.g8,{className:W})})})]}),(0,i.jsx)(m.sg,{className:Z,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),ce=()=>{const{addMarket:e,removeMarket:t,markets:n,marketCount:r}=(0,q.PY)((({markets:e,marketCount:t,removeMarket:n,addMarket:i})=>({markets:e,marketCount:t,removeMarket:n,addMarket:i}))),[s,o]=(0,M.useState)(!!n.length),a=ee((e=>e.setTraitsOpen)),l=(0,M.useMemo)((()=>Object.entries(se).map((([s,o])=>(0,i.jsx)(ae,{title:o,value:s,count:r?.[s]||0,addMarket:e,removeMarket:t,isMarketSelected:n.includes(s)},s)))),[e,r,t,n]);return(0,i.jsx)(le,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),o(!s),a(B.MARKPLACE_INDEX,!s)},isOpen:s})};var de=n(29304);const pe=(0,j.default)(de.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\common\\SortDropdown\\FilterSortDropdown__CheckIcon",componentId:"sc-80786191-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,ge=({sortDropDownOptions:e})=>{const[t,n]=(0,M.useState)(!1),r=e=>{e.preventDefault(),n(!t)},s=e.map((e=>(0,i.jsx)(he,{dropDownOption:e,parentOnClick:r},e.displayText)));return(0,i.jsx)(le,{title:"Sort by",items:s,onClick:r,isOpen:t})},he=({dropDownOption:e,parentOnClick:t})=>{const n=(0,x.PY)((e=>e.sortBy)),r=void 0!==e.sortBy&&n===e.sortBy?(0,i.jsx)(pe,{}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)(oe,{title:e.displayText,element:r,onClick:n=>{n.preventDefault(),t(n),e.onClick()}})},ue=({dropDownOptions:e,inFilters:t,mini:n,miniPrompt:r,top:s,left:o})=>{const a=(0,x.PY)((e=>e.sortBy)),[l,c]=(0,M.useReducer)((e=>!e),!1),[d,p]=(0,M.useReducer)((e=>!e),!1),[g,h]=(0,M.useState)(a),w=(0,x.Iv)((e=>e.isCollectionStatsLoading)),[b,y]=(0,M.useState)(0);(0,M.useEffect)((()=>{h(a)}),[a]);const C=(0,M.useRef)(null);(0,A.t)(C,(()=>l&&c())),(0,M.useEffect)((()=>y(0)),[e]);const v=(0,M.useMemo)((()=>e[g].reverseOnClick||e[g].reverseIndex),[g,e]),j=w?220:t?"full":n?"min":b||"300px";return(0,i.jsxs)(u.n,{ref:C,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:j},children:[(0,i.jsx)(u.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:n?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":n?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:c,cursor:"pointer",className:w?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,P.default)(l&&!n&&"_12q7kth0"),children:!w&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&v&&(0,i.jsxs)(m.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick)e[g].reverseOnClick?.(),p();else{const t=e[g].reverseIndex??1;e[t-1].onClick(),h(t-1)}},children:[e[g].reverseOnClick&&(d?(0,i.jsx)(L.iB,{}):(0,i.jsx)(L.L7,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,i.jsx)(L.iB,{}):(0,i.jsx)(L.L7,{}))]}),(0,i.jsx)(u.n,{marginLeft:v?"4":"0",marginRight:n?"2":"0",color:"neutral1",className:f.km,children:n?r:l?"Sort by":e[g].displayText})]}),(0,i.jsx)(L.g8,{secondaryColor:n?G.Z4.colors.neutral1:void 0,secondaryWidth:n?"20":void 0,secondaryHeight:n?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,i.jsx)(u.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:n?void 0:"0",borderTopRightRadius:n?void 0:"0",overflowY:"hidden",transition:"250",display:l||!b?"block":"none",visibility:b?"visible":"hidden",marginTop:n?"12":"0",className:(0,P.default)(!n&&"_12q7kth1"),style:{top:s?`${s}px`:"inherit",left:t?"16px":o?`${o}px`:"inherit"},children:b?l&&e.map(((t,r)=>(0,i.jsx)(me,{option:t,index:r,mini:n,onClick:()=>{e[r].onClick(),h(r),c(),d&&p()}},r))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,i.jsx)(fe,{option:e,index:t,setMaxWidth:y},t)))})]})},me=({option:e,index:t,onClick:n,mini:r})=>(0,i.jsx)(u.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:r?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:n,cursor:"pointer",children:(0,i.jsx)(u.n,{marginLeft:"8",className:f.km,children:e.displayText})},t),fe=({option:e,index:t,setMaxWidth:n})=>{const r=(0,M.useRef)(null);return(0,M.useLayoutEffect)((()=>{r&&r.current&&n(Math.ceil(r.current.getBoundingClientRect().width)+52)})),(0,i.jsx)(u.n,{position:"absolute",ref:r,children:(0,i.jsx)(me,{option:e,index:t})},t)};var xe=n(70453),we=n(37506);const be=(0,J.Ue)()((0,Q.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var ye=n(1004);const Ce="undefined"!==typeof window;const ve=()=>{const e=!!Ce&&window.innerWidth<G.AV.sm?"nft-anchor-mobile":"nft-anchor";window.document.getElementById(e)?.scrollIntoView({behavior:"smooth"})};var je=n(37515);const _e=e=>{const t={...e};for(const i in t){const e=t[i],n=x.initialCollectionFilterState[i];JSON.stringify(e)===JSON.stringify(n)&&delete t[i]}t.all!==x.initialCollectionFilterState.buyNow&&delete t.all;const n=x.i9[x.initialCollectionFilterState.sortBy];return t.sort===n&&delete t.sort,t},ke=(e,t)=>{const n={...e};["traits","markets"].forEach((e=>{n[e]||(n[e]=[]),n[e]&&"string"===typeof n[e]&&(n[e]=[n[e]])}));try{const{buyNow:e,search:i}=x.initialCollectionFilterState;if(Object.entries(x.i9).forEach((([e,t])=>{t===n.sort&&(n.sortBy=Number(e))})),n.buyNow=!(void 0===n.all?!e:n.all),n.search=void 0===n.search?i:String(n.search),2===n.traits.length){const[e,t]=n.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(n.traits=[`${e},${t}`])}n.traits=n.traits.map((e=>{const n=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[i,r]=n.split(","),s=t.traits&&t.traits[i].find((e=>e.trait_value===r));return s??{trait_type:i,trait_value:r,trait_count:0}}))}catch(i){n.traits=[]}return n};var Te=n(46642),Ne=n(80657),Ie=n(35837),Se=n(21849),ze=(n(43704),n(263));const Pe=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__SweepContainer",componentId:"sc-e594c87f-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,De=(0,j.default)(ze.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__StyledSlider",componentId:"sc-e594c87f-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,$e=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__SweepLeftmostContainer",componentId:"sc-e594c87f-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Ee=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__SweepRightmostContainer",componentId:"sc-e594c87f-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,He=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__SweepHeaderContainer",componentId:"sc-e594c87f-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Re=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__SweepSubContainer",componentId:"sc-e594c87f-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,Oe=j.default.input.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__InputContainer",componentId:"sc-e594c87f-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,Me=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__ToggleContainer",componentId:"sc-e594c87f-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,Fe=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__ToggleSwitch",componentId:"sc-e594c87f-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,Be=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__NftDisplayContainer",componentId:"sc-e594c87f-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,Ue=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\Sweep__NftHolder",componentId:"sc-e594c87f-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,Ae=RegExp("^(0|[1-9][0-9]*)$"),Le=RegExp("^\\d*\\.?\\d{0,2}$"),Ge=({nfts:e})=>(0,i.jsx)(Be,{children:[...Array(3)].map(((t,n)=>(0,i.jsx)(Ue,{index:n,src:e.length-1>=n?e[e.length-1-n].smallImageUrl:void 0},n)))}),Ye=({contractAddress:e,minPrice:t,maxPrice:n})=>{const r=(0,j.useTheme)(),{formatEther:s}=(0,y.Gb)(),[o,a]=(0,M.useReducer)((e=>!e),!0),[l,c]=(0,M.useState)(""),d=(0,x.cP)((e=>e.addAssetsToBag)),p=(0,x.cP)((e=>e.removeAssetsFromBag)),g=(0,x.cP)((e=>e.itemsInBag)),h=(0,x.cP)((e=>e.lockSweepItems)),u=(0,x.cP)((e=>e.setBagExpanded)),m=(0,x.PY)((e=>e.traits)),f=(0,x.PY)((e=>e.markets)),w=Xe(e,"others",t,n),C=Xe(e,ye.Fz.Sudoswap,t,n),v=Xe(e,ye.Fz.NFTX,t,n),_=Xe(e,ye.Fz.NFT20,t,n),{data:k}=(0,$.he)(w),{data:T}=(0,$.he)(C),{data:N}=(0,$.he)(v),{data:I}=(0,$.he)(_),{sortedAssets:P,sortedAssetsTotalEth:D}=(0,M.useMemo)((()=>{if(!k&&!T&&!N&&!I)return{sortedAssets:void 0,sortedAssetsTotalEth:S.O$.from(0)};let e=0,t=0,n=[];T&&(n=[...n,...T]),N&&(n=[...n,...N]),I&&(n=[...n,...I]);const i=n.filter((e=>e.marketplace===ye.Fz.Sudoswap&&!e.susFlag));n.forEach((n=>{if(!n.susFlag)if(n.marketplace===ye.Fz.Sudoswap){const e=(0,b.Pu)(n,i.filter((e=>(0,b.zA)(n,e))).findIndex((e=>e.tokenId===n.tokenId)));n.priceInfo.ETHPrice=e??"0"}else{const i=n.marketplace===ye.Fz.NFTX,r=(0,b.Pu)(n,i?e:t);S.O$.from(r).gt(0)&&(i?e++:t++),n.priceInfo.ETHPrice=r}})),n=k?k.concat(n):n,n.sort(((e,t)=>S.O$.from(e.priceInfo.ETHPrice).gt(S.O$.from(t.priceInfo.ETHPrice))?1:-1));let r=n.filter((e=>S.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return r=r.slice(0,Math.max(k?.length??0,T?.length??0,N?.length??0,I?.length??0)),{sortedAssets:r,sortedAssetsTotalEth:r.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0))}}),[k,T,N,I]),{sweepItemsInBag:E,sweepEthPrice:R}=(0,M.useMemo)((()=>{const t=g.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),n=t.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:n}}),[g,e]);(0,M.useEffect)((()=>{0===E.length&&c("")}),[E]),(0,M.useEffect)((()=>{h(e)}),[e,m,f,t,n,h]);const O=e=>{if(P)if(o)0===E.length&&e>0&&u({bagExpanded:!0}),E.length<e?d(P.slice(E.length,e),!0):p(E.slice(e,E.length),!0),c(e<1?"":e.toString());else{const t=(0,z.parseEther)(e.toString());if(R.lte(t)){let e=E.length,n=R;const i=[];for(;e<P.length&&n.add(S.O$.from(P[e].priceInfo.ETHPrice)).lte(t);)i.push(P[e]),n=n.add(S.O$.from(P[e].priceInfo.ETHPrice)),e++;i.length>0&&(0===E.length&&u({bagExpanded:!0}),d(i,!0))}else{let e=E.length-1,n=R;const i=[];for(;e>=0&&n.gt(t);)i.push(E[e]),n=n.sub(S.O$.from(E[e].priceInfo.ETHPrice)),e--;i.length>0&&p(i,!0)}c(0===e?"":e.toFixed(2))}};return(0,i.jsxs)(Pe,{"data-testid":"nft-sweep-slider",children:[(0,i.jsxs)($e,{children:[(0,i.jsx)(He,{children:(0,i.jsx)(te.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,i.jsx)(H.cC,{id:"ZC4hNh"})})}),(0,i.jsxs)(Re,{children:[(0,i.jsx)(De,{defaultValue:0,min:0,max:o?P?.length??0:parseFloat((0,z.formatEther)(D).toString()),value:o?E.length:parseFloat((0,z.formatEther)(R.toString())),step:o?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${r.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${r.surface3}`},onChange:e=>{"number"===typeof e&&P&&(o?(Math.floor(e)!==Math.floor(""!==l?parseFloat(l):0)&&O(Math.floor(e)),c(e<1?"":e.toString())):(O(e),c(0===e?"":e.toFixed(2))))}}),(0,i.jsx)(Oe,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:o&&""!==l?Math.floor(parseFloat(l)):l,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(O(0),c("")):(o&&Ae.test(t)||!o&&Le.test(t))&&(O(parseFloat(t)),c(t))}}),(0,i.jsxs)(Me,{onClick:()=>{c(""),p(E),a()},children:[(0,i.jsx)(Fe,{active:o,children:"Items"}),(0,i.jsx)(Fe,{active:!o,children:"ETH"})]})]})]}),(0,i.jsxs)(Ee,{children:[(0,i.jsx)(te.Tv.SubHeader,{"font-size":"14px",children:`${s({input:R.toString(),type:y.sw.NFTToken})} ETH`}),(0,i.jsx)(Ge,{nfts:E})]})]})},We=[ye.Fz.Opensea,ye.Fz.X2Y2,ye.Fz.LooksRare];function Xe(e,t,n,i){const r=(0,x.PY)((e=>e.traits)),s=(0,x.PY)((e=>e.markets)),o=!!s.length;return(0,M.useMemo)((()=>{if(o){if("others"===t){const t=s.filter((e=>!(0,ye.g7)(e)));return t.length>0?{contractAddress:e,traits:r,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!s.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case ye.Fz.Sudoswap:case ye.Fz.NFTX:case ye.Fz.NFT20:return{contractAddress:e,traits:r,markets:[t],price:{low:n,high:i,symbol:"ETH"}};case"others":return{contractAddress:e,traits:r,markets:We,price:{low:n,high:i,symbol:"ETH"}}}}),[e,o,t,s,i,n,r])}const Ze=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\TraitChip__TraitChipWrap",componentId:"sc-f115b851-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ve=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\TraitChip__CrossIconWrap",componentId:"sc-f115b851-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,Ke=({onClick:e,value:t})=>(0,i.jsxs)(Ze,{children:[(0,i.jsx)("span",{children:t}),(0,i.jsx)(Ve,{onClick:e,children:(0,i.jsx)(L.aM,{cursor:"pointer"})})]}),qe=new Map,Je=j.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,Qe=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__ActionsContainer",componentId:"sc-b168257c-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Je}
`,et=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__ActionsSubContainer",componentId:"sc-b168257c-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,tt=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__SortDropdownContainer",componentId:"sc-b168257c-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,nt=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__EmptyCollectionWrapper",componentId:"sc-b168257c-3"})`
  display: block;
  text-align: center;
`,it=j.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__ViewFullCollection",componentId:"sc-b168257c-4"})`
  ${l.c}
`,rt=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__InfiniteScrollWrapper",componentId:"sc-b168257c-5"})`
  ${Je}
`,st=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__SweepButton",componentId:"sc-b168257c-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:n})=>e&&!t?n.deprecated_accentTextLightPrimary:n.neutral1};
  background: ${({theme:e,toggled:t,disabled:n})=>!n&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,ot=(0,j.default)(te.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__SweepText",componentId:"sc-b168257c-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,at=(0,j.default)(m.X2).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionNfts__MarketNameWrapper",componentId:"sc-b168257c-8"})`
  gap: 8px;
`,lt=({height:e})=>(0,i.jsx)(u.n,{width:"full",className:U.P,children:(0,i.jsx)(Ie.p,{height:e})}),ct=()=>(0,i.jsx)(rt,{children:(0,i.jsxs)(m.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,i.jsxs)(m.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,i.jsx)(u.n,{className:xe.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,i.jsx)(u.n,{className:xe.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,i.jsx)(u.n,{className:xe.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,i.jsx)(lt,{})]})}),dt=(e,t)=>{const n=[{displayText:"Price: Low to High",onClick:()=>e(x.hn.LowToHigh),reverseIndex:2,sortBy:x.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(x.hn.HighToLow),reverseIndex:1,sortBy:x.hn.HighToLow}];return t?n.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(x.hn.RareToCommon),reverseIndex:4,sortBy:x.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(x.hn.CommonToRare),reverseIndex:3,sortBy:x.hn.CommonToRare}]):n},pt=({contractAddress:e,collectionStats:t,rarityVerified:n})=>{const{chainId:a}=(0,s.useWeb3React)(),l=(0,x.PY)((e=>e.traits)),c=(0,x.PY)((e=>e.minPrice)),d=(0,x.PY)((e=>e.maxPrice)),p=(0,x.PY)((e=>e.markets)),h=(0,x.PY)((e=>e.sortBy)),w=(0,x.PY)((e=>e.search)),y=(0,x.PY)((e=>e.setMarketCount)),C=(0,x.PY)((e=>e.setSortBy)),v=(0,x.PY)((e=>e.buyNow)),j=be((e=>e.setPriceRangeLow)),_=be((e=>e.priceRangeLow)),k=be((e=>e.priceRangeHigh)),T=be((e=>e.setPriceRangeHigh)),N=be((e=>e.setPrevMinMax)),I=(0,we.I)((e=>e.setIsCollectionNftsLoading)),H=(0,x.PY)((e=>e.removeTrait)),R=(0,x.PY)((e=>e.removeMarket)),O=(0,x.PY)((e=>e.reset)),B=(0,x.PY)((e=>e.setMinPrice)),A=(0,x.PY)((e=>e.setMaxPrice)),G=(0,x.PY)((e=>e.setHasRarity)),Y=(0,x.cP)((e=>e.toggleBag)),W=(0,x.cP)((e=>e.bagExpanded)),X=(0,x.cP)((e=>e.itemsInBag)),Z=(0,E.Z)(c,500),V=(0,E.Z)(d,500),K=(0,E.Z)(w,500),[q,J]=(0,M.useState)(ye.Yp.unset),[Q,ee]=(0,M.useState)(),[te,ne]=(0,M.useState)(!1),ie={address:e,orderBy:x.AZ[h].field,asc:x.AZ[h].asc,filter:{listed:v,marketplaces:p.length>0?p.map((e=>e.toUpperCase())):void 0,maxPrice:V?(0,z.parseEther)(V.toString()).toString():void 0,minPrice:Z?(0,z.parseEther)(Z.toString()).toString():void 0,tokenSearchQuery:K,traits:l.length>0?l.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:$.iQ},{data:re,loading:oe,hasNext:ae,loadMore:le}=(0,$.gP)(ie),ce=(0,M.useCallback)((e=>{const t=X.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===ye.Fz.Sudoswap){const n=X.filter((t=>(0,b.zA)(e,t.asset)));return t?n.findIndex((t=>t.asset.tokenId===e.tokenId)):n.length}return t?X.filter((t=>(0,b.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):X.filter((t=>(0,b.H8)(e,t.asset))).length}),[X]),de=(0,M.useCallback)((e=>(0,b.Pu)(e,ce(e))),[ce]),pe=(0,M.useMemo)((()=>{if(!re||!re.some((e=>e.marketplace&&(0,ye.g7)(e.marketplace))))return re;const e=[...re];return e.forEach((e=>e.marketplace&&(0,ye.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=de(e)??"0"))),h!==x.hn.HighToLow&&h!==x.hn.LowToHigh||e.sort(((e,t)=>{const n=S.O$.from(e.priceInfo?.ETHPrice??0),i=S.O$.from(t.priceInfo?.ETHPrice??0);if(n.gt(0)&&i.lte(0))return-1;if(i.gt(0)&&n.lte(0))return 1;const r=n.sub(i);return r.gt(0)?h===x.hn.LowToHigh?1:-1:r.lt(0)?h===x.hn.LowToHigh?-1:1:0})),e}),[re,h,de]),[ge,he]=(0,M.useState)(),[me,fe]=(0,x.wx)(),xe=(0,M.useRef)(null),Ce=(0,x.dD)(),ze=(0,g.e)();(0,M.useEffect)((()=>{I(oe)}),[oe,I]);const Pe=(0,M.useMemo)((()=>{const e=(0,b.oY)(qe,t?.address,pe)??!1;return G(e),e}),[t.address,pe,G]),De=(0,M.useMemo)((()=>dt(C,Pe)),[Pe,C]);(0,M.useEffect)((()=>(ne(!1),()=>{x.PY.setState(x.initialCollectionFilterState)})),[e]);const $e=(0,M.useMemo)((()=>pe?pe.map((e=>(0,i.jsx)(F,{asset:e,isMobile:Ce,mediaShouldBePlaying:e.tokenId===ge,setCurrentTokenPlayingMedia:he,rarityVerified:n,uniformAspectRatio:q,setUniformAspectRatio:J,renderedHeight:Q,setRenderedHeight:ee},e.address+e.tokenId))):null),[pe,Ce,ge,n,q,Q]),Ee=pe&&pe.length>0,He=Ee&&pe[0]&&pe[0]?.tokenType===D.hg.Erc1155,Re=(0,M.useMemo)((()=>Z&&V?`Price: ${Z} - ${V} ETH`:Z?`Min. Price: ${Z} ETH`:V?`Max Price: ${V} ETH`:void 0),[Z,V]);(0,M.useEffect)((()=>{const e={};t?.marketplaceCount?.forEach((({marketplace:t,count:n})=>{e[t]=n})),y(e),xe.current=x.PY.getState()}),[t?.marketplaceCount,y]);const Oe=(0,Ne.TH)();(0,M.useEffect)((()=>{if(t?.traits){const e=((e,t)=>{if(!e.search)return;const n=je.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return ke(n,t)})(Oe,t);requestAnimationFrame((()=>{e&&x.PY.setState(e)})),x.PY.subscribe((e=>{JSON.stringify(xe.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((n=>{switch(n){case"traits":{const n=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=n;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=x.i9[e.sortBy];break;default:t[n]=e[n]}}));const n=_e(t),i=window.location.href.split("?")[0],r=je.stringify(n,{arrayFormat:"comma"});window.history.replaceState({},"",`${i}${r&&`?${r}`}`)})(e),xe.current=e)}))}}),[Oe]),(0,M.useEffect)((()=>{J(ye.Yp.unset),ee(void 0)}),[e]),(0,M.useEffect)((()=>{if(t&&t.stats?.floor_price){const e=t.stats?.floor_price,n=10*t.stats?.floor_price;""===_&&j(e?.toFixed(2)),""===k&&T(n.toFixed(2))}}),[t,_,k,T,j]);const Me=(0,M.useCallback)((()=>{He||(te||(ve(),W||Ce||Y()),ne(!te))}),[W,He,Ce,te,Y]),Fe=(0,M.useCallback)((()=>{O(),N([0,100]),ve()}),[O,N]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,i.jsxs)(Qe,{children:[(0,i.jsxs)(et,{children:[(0,i.jsx)(o.M8,{events:[r.TM.onClick],element:r.xo.NFT_FILTER_BUTTON,name:r.Yz.NFT_FILTER_OPENED,shouldLogImpression:!me,properties:{collection_address:e,chain_id:a},children:(0,i.jsx)(Ot.L,{isMobile:Ce,isFiltersExpanded:me,collectionCount:pe?.[0]?.totalCount??0,onClick:()=>{W&&!ze.xl&&Y(),fe(!me)}})}),(0,i.jsx)(tt,{isFiltersExpanded:me,children:(0,i.jsx)(ue,{dropDownOptions:De})}),(0,i.jsx)(gt,{})]}),!He&&(0,i.jsxs)(st,{toggled:te,disabled:He,className:f.km,onClick:Me,"data-testid":"nft-sweep-button",children:[(0,i.jsx)(L.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,i.jsx)(ot,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,i.jsxs)(rt,{children:[te&&(0,i.jsx)(Ye,{contractAddress:e,minPrice:Z,maxPrice:V}),(0,i.jsxs)(m.X2,{paddingTop:p.length||l.length||Re?"12":"0",gap:"8",flexWrap:"wrap",children:[p.map((e=>(0,i.jsx)(Ke,{value:(0,i.jsxs)(at,{children:[(0,b.Dp)(e,"16"),se[e]]}),onClick:()=>{ve(),R(e)}},e))),l.map((e=>(0,i.jsx)(Ke,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,b._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{ve(),H(e)}},e.trait_value))),Re&&(0,i.jsx)(Ke,{value:Re,onClick:()=>{ve(),B(""),A(""),N([0,100])}}),Boolean(l.length||p.length||Re)&&(0,i.jsx)(Se.v,{onClick:Fe,children:"Clear All"})]})]})]}),(0,i.jsx)(rt,{children:oe?(0,i.jsx)(lt,{height:Q}):(0,i.jsx)(Te.Z,{next:le,hasMore:ae??!1,loader:Boolean(ae&&Ee)&&(0,i.jsx)(Ie.p,{}),dataLength:pe?.length??0,style:{overflow:"unset"},className:Ee?U.P:void 0,children:Ee?$e:(0,i.jsx)(m.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,i.jsxs)(nt,{children:[(0,i.jsx)("p",{className:f.Es,children:"No NFTS found"}),(0,i.jsx)(u.n,{onClick:O,type:"button",className:(0,P.default)(f.Km,f.km),color:"accent1",cursor:"pointer",children:(0,i.jsx)(it,{children:"View full collection"})})]})})})})]})};const gt=()=>{const e=(0,q.PY)((e=>e.setSearch)),t=(0,q.PY)((e=>e.search)),n=(0,x.Iv)((e=>e.isCollectionStatsLoading));return(0,i.jsx)(u.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:n?"":"Search by name",className:(0,P.default)(n&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var ht=n(86682);const ut=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var mt=n(51871),ft=n.n(mt),xt="_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf",wt="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",bt="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha";const yt=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionStats__PercentChange",componentId:"sc-bd4c8b67-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,Ct=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionStats__CollectionNameText",componentId:"sc-bd4c8b67-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,vt=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionStats__CollectionNameTextLoading",componentId:"sc-bd4c8b67-2"})`
  ${xe.S}
  height: 32px;
  width: 236px;
`,jt=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-bd4c8b67-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,_t=({children:e,href:t})=>(0,i.jsx)(u.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),kt=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:n})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(jt,{onClick:n,children:t?(0,i.jsx)(L.DX,{width:"28",height:"28",fill:G.Z4.colors.neutral2}):(0,i.jsx)(L.ws,{width:"28",height:"20",fill:G.Z4.colors.neutral2})}),t&&(0,i.jsxs)(m.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,i.jsx)(_t,{href:e.discordUrl,children:(0,i.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(L.D7,{width:28,height:28,color:G.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,i.jsx)(_t,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(u.n,{margin:"auto",paddingTop:"6",children:(0,i.jsx)(L.Zm,{fill:G.Z4.colors.neutral2,color:G.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,i.jsx)(_t,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(u.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,i.jsx)(L.yu,{fill:G.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,i.jsx)(_t,{href:e.externalUrl,children:(0,i.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(L.O1,{fill:G.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),Tt=({children:e,href:t})=>(0,i.jsx)(m.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),Nt=({collectionStats:e,name:t,isVerified:n,isMobile:r,collectionSocialsIsOpen:s,toggleCollectionSocials:o})=>{const a=(0,we.I)((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(m.X2,{justifyContent:"space-between",children:[(0,i.jsxs)(m.X2,{minWidth:"0",children:[a?(0,i.jsx)(vt,{}):(0,i.jsx)(Ct,{isVerified:n,className:r?f.td:f.Es,children:t}),n&&(0,i.jsx)(L.SA,{style:{width:"32px",height:"32px"}}),(0,i.jsxs)(m.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,i.jsx)(Tt,{href:e.discordUrl??"",children:(0,i.jsx)(L.D7,{fill:G.Z4.colors.neutral2,color:G.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,i.jsx)(Tt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(L.Zm,{fill:G.Z4.colors.neutral2,color:G.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,i.jsx)(Tt,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(L.yu,{fill:G.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,i.jsx)(Tt,{href:e.externalUrl??"",children:(0,i.jsx)(L.O1,{fill:G.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),r&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,i.jsx)(kt,{collectionStats:e,collectionSocialsIsOpen:s,toggleCollectionSocials:o})]})},It=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionStats__CollectionDescriptionText",componentId:"sc-bd4c8b67-4"})`
  vertical-align: top;
  text-overflow: ellipsis;

  ${({readMore:e})=>e?j.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:j.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,St=j.default.span.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionStats__ReadMore",componentId:"sc-bd4c8b67-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,zt=()=>(0,i.jsx)(u.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),Pt=({description:e})=>{const[t,n]=(0,M.useState)(!1),[r,s]=(0,M.useReducer)((e=>!e),!1),o=(0,M.useRef)(null),a=(0,M.useRef)(null),l=(0,we.I)((e=>e.isCollectionStatsLoading)),c=(0,x.dD)();return(0,M.useEffect)((()=>{o&&a&&o.current&&a.current&&(a.current.getBoundingClientRect().width>=o.current?.getBoundingClientRect().width-112||a.current.getBoundingClientRect().width>=590)?n(!0):n(!1)}),[a,o,l,e]),l?(0,i.jsx)(zt,{}):(0,i.jsxs)(u.n,{ref:o,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,i.jsx)(It,{readMore:r,ref:a,className:c?f.Km:f.d1,children:(0,i.jsx)(ft(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,i.jsxs)(St,{className:c?f.Km:f.d1,onClick:s,children:["show ",r?"less":"more"]})]})},Dt=({children:e,label:t,shouldHide:n})=>(0,i.jsxs)(u.n,{display:n?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,i.jsx)(te.Tv.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,i.jsx)(u.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),$t=e=>new Array(e?3:5).fill(null).map(((t,n)=>(0,i.jsxs)(u.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,i.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,i.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${n}`))),Et=({stats:e,isMobile:t,...n})=>{const{formatNumberOrString:r,formatDelta:s}=(0,y.Gb)(),o=e?.stats?.total_supply?ut((e.stats.num_owners??0)/e.stats.total_supply*100):0,a=e.stats?r({input:e.stats.total_supply??0,type:y.sw.NFTCollectionStats}):0,l=e?.stats?.total_supply?ut((e.stats.total_listings??0)/e.stats.total_supply*100):0,c=(0,we.I)((e=>e.isCollectionStatsLoading)),d=r({input:Number(e.stats?.total_volume)??0,type:y.sw.NFTCollectionStats}),p=r({input:e.stats?.floor_price??0,type:y.sw.NFTTokenFloorPrice}),h=s(Math.round(Math.abs(e?.stats?.one_day_floor_change??0))),u=(0,x.cP)((e=>e.bagExpanded)),f=(0,g.e)(),w=t||!f.lg&&u;return(0,i.jsx)(m.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...n,children:c?$t(t??!1):(0,i.jsxs)(i.Fragment,{children:[e.stats?.floor_price?(0,i.jsxs)(Dt,{label:"Global floor",shouldHide:!1,children:[p," ETH"]}):null,void 0!==e.stats?.one_day_floor_change?(0,i.jsx)(Dt,{label:"Floor 24H",shouldHide:!1,children:(0,i.jsxs)(yt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,i.jsx)(ht.Kx,{delta:e?.stats?.one_day_floor_change}),h]})}):null,e.stats?.total_volume?(0,i.jsxs)(Dt,{label:"Total volume",shouldHide:!1,children:[d," ETH"]}):null,a?(0,i.jsx)(Dt,{label:"Items",shouldHide:t??!1,children:a}):null,o&&e.standard!==ye.iv.ERC1155?(0,i.jsxs)(Dt,{label:"Unique owners",shouldHide:w??!1,children:[o,"%"]}):null,e.stats?.total_listings&&e.standard!==ye.iv.ERC1155?(0,i.jsxs)(Dt,{label:"Listed",shouldHide:w??!1,children:[l,"%"]}):null]})})},Ht=({isMobile:e})=>(0,i.jsxs)(m.sg,{position:"relative",width:"full",children:[(0,i.jsx)(u.n,{className:wt}),(0,i.jsx)(u.n,{className:xt}),(0,i.jsxs)(u.n,{className:bt,children:[(0,i.jsx)(u.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zt,{}),(0,i.jsx)(m.X2,{gap:"60",marginTop:"20",children:$t(!1)})]})]}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zt,{}),(0,i.jsx)(m.X2,{gap:"20",marginTop:"20",children:$t(!0)})]})]}),Rt=({stats:e,isMobile:t})=>{const[n,r]=(0,M.useReducer)((e=>!e),!1),s=(0,we.I)((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(u.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?n?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[s&&(0,i.jsx)(u.n,{as:"div",borderRadius:"round",position:"absolute",className:wt}),(0,i.jsx)(u.n,{as:s?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:s?xt:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,i.jsxs)(u.n,{className:bt,children:[(0,i.jsx)(Nt,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:n,toggleCollectionSocials:r}),(e.description||s)&&!t&&(0,i.jsx)(Pt,{description:e.description??""}),(0,i.jsx)(Et,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||s)&&t&&(0,i.jsx)(Pt,{description:e.description??""}),(0,i.jsx)("div",{id:"nft-anchor-mobile"}),(0,i.jsx)(Et,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var Ot=n(71170),Mt=n(74090),Ft=n(97297),Bt="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Ut=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\TraitsHeader__ChildreMobileWrapper",componentId:"sc-c99e30a3-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,At=e=>{const{children:t,index:n,title:r}=e,[s,o]=(0,M.useState)(!1),a=ee((e=>e.traitsOpen)),l=ee((e=>e.setTraitsOpen)),c=(0,x.dD)(),d=void 0!==n&&a[n-1],p=n!==B.TRAIT_START_INDEX;return(0,M.useEffect)((()=>{void 0!==n&&l(n,s)}),[s,n,l]),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(u.n,{className:(0,P.default)(f.Nf,!s&&K,X),opacity:!d&&s&&0!==n?"1":"0",marginTop:d?"0":"8"}),(0,i.jsxs)(u.n,{as:"details",className:(0,P.default)(f.Nf,!s&&K),open:s,children:[(0,i.jsxs)(u.n,{as:"summary",className:`${V} ${K}`,onClick:e=>{e.preventDefault(),o(!s)},children:[r,(0,i.jsxs)(u.n,{display:"flex",alignItems:"center",children:[(0,i.jsx)(u.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,i.jsx)(u.n,{className:Y,style:{transform:`rotate(${s?0:180}deg)`},children:(0,i.jsx)(L.g8,{className:W})})]})]}),(0,i.jsx)(Ut,{isMobile:c,children:t})]})]})},Lt=(0,j.default)(ze.Z).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\PriceRange__StyledSlider",componentId:"sc-e02d4d0-0"})`
  cursor: pointer;
`,Gt=()=>{const[e,t]=(0,M.useState)(""),n=(0,q.PY)((e=>e.setMinPrice)),s=(0,q.PY)((e=>e.setMaxPrice)),a=(0,q.PY)((e=>e.minPrice)),l=(0,q.PY)((e=>e.maxPrice)),c=be((e=>e.priceRangeLow)),d=be((e=>e.priceRangeHigh)),p=be((e=>e.setPriceRangeLow)),g=be((e=>e.setPriceRangeHigh)),h=be((e=>e.prevMinMax)),x=be((e=>e.setPrevMinMax)),w=(0,j.useTheme)(),b=(0,Ne.TH)();(0,M.useEffect)((()=>{n(""),s(""),p(""),g("")}),[b.pathname,n,s,p,g]);const y=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},C=n=>{n.currentTarget.placeholder=e,t(""),(a||l)&&(0,o._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.PRICE_RANGE})};return(0,i.jsxs)(At,{title:"Price range",index:B.PRICE_RANGE_INDEX,children:[(0,i.jsxs)(m.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,i.jsx)(m.X2,{position:"relative",children:(0,i.jsx)(Mt.A,{style:{width:"126px"},className:Bt,placeholder:c,onChange:e=>{const[,t]=h;if(e.currentTarget.value){const n=parseInt(e.currentTarget.value)-parseInt(c),i=Math.floor(n/(parseInt(d)-parseInt(c))*100);parseInt(e.currentTarget.value)>=parseInt(l)?x([t,t]):x([i,t])}else x([0,t]);n(e.currentTarget.value.toString()),ve()},onFocus:y,value:a,onBlur:C})}),(0,i.jsx)(u.n,{className:f.d1,children:"to"}),(0,i.jsx)(m.X2,{position:"relative",children:(0,i.jsx)(Mt.A,{style:{width:"126px"},className:Bt,placeholder:d,value:l,onChange:e=>{const[t]=h;if(e.currentTarget.value){const n=parseInt(d)-parseInt(e.currentTarget.value),i=Math.floor(100-n/(parseInt(d)-parseInt(c))*100);parseInt(e.currentTarget.value)<=parseInt(a)?x([t,t]):x([t,i])}else x([t,100]);s(e.currentTarget.value),ve()},onFocus:y,onBlur:C})})]}),(0,i.jsx)(m.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,i.jsx)(Lt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:h,trackStyle:{top:"3px",height:"8px",background:`${w.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Ft.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${w.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,i]=e,r=parseFloat(d.replace(/,/g,"")),o=parseFloat(c.replace(/,/g,"")),a=r-o,l=r-(100-i)/100*a;n((t/100*a+o).toFixed(2).toString()),s(l.toFixed(2).toString()),0===t&&n(""),100===i&&s(""),x(e)}})})]})};var Yt=n(36633),Wt=n(36450),Xt=n(94231),Zt=n(90739);const Vt=({trait:e,addTrait:t,removeTrait:n,isTraitSelected:s,style:a})=>{const[l,c]=(0,M.useState)(!1),[d,p]=(0,M.useState)(!1),g=()=>p(!d),h=(0,q.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:x,trait_value:w,trait_type:b}=(0,q.PY)((e=>e.showFullTraitName));(0,M.useEffect)((()=>{c(s)}),[s]);const y=i=>{i.preventDefault(),ve(),l?(n(e),c(!1)):(t(e),c(!0)),(0,o._P)(r.Yz.NFT_FILTER_SELECTED,{filter_type:r.fm.TRAIT})},C=x&&b===e.trait_type&&w===e.trait_value;return(0,i.jsxs)(m.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${f.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...a},maxHeight:"44",onMouseEnter:g,onMouseLeave:g,onClick:y,children:[(0,i.jsx)(u.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:C?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&h({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>h({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Wt._)(Number(e.trait_value))}`:e.trait_value}),(0,i.jsx)(ne.X,{checked:l,hovered:d,onChange:y,children:(0,i.jsx)(u.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!C&&e.trait_count})})]},e.trait_value)},Kt=({traits:e,type:t,index:n})=>{const r=(0,q.PY)((e=>e.addTrait)),s=(0,q.PY)((e=>e.removeTrait)),o=(0,q.PY)((e=>e.traits)),[a,l]=(0,M.useState)(""),c=(0,E.Z)(a,300),d=(0,M.useMemo)((()=>e.filter((e=>e.trait_value?.toString().toLowerCase().includes(c.toLowerCase())))),[c,e]),p=(0,M.useCallback)((function({data:e,index:t,style:n}){const a=e[t],l=o.find((({trait_type:e,trait_value:t})=>e===a.trait_type&&String(t)===String(a.trait_value)));return(0,i.jsx)(Vt,{style:n,isTraitSelected:!!l,trait:a,addTrait:r,removeTrait:s})}),[o,r,s]),g=(0,M.useCallback)(((e,t)=>{const n=t[e];return`${n.trait_type}_${n.trait_value}_${e}`}),[]);return e.length?(0,i.jsxs)(At,{index:n,numTraits:e.length,title:t,children:[(0,i.jsx)(Mt.I,{value:a,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,i.jsx)(m.sg,{className:Z,style:{height:`${Math.min(44*d.length,302)}px`},children:(0,i.jsx)(Xt.Z,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(Zt.t7,{height:e,width:"100%",itemData:d,itemCount:d.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:n})=>(0,i.jsx)(p,{style:t,data:n,index:e},g(e,n))})})})]}):null},qt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:n}=(0,x.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),r=(0,x.PY)((e=>e.setSortBy)),s=(0,x.PY)((e=>e.hasRarity)),[o,a]=(0,M.useReducer)((e=>!e),!1),l=()=>{n(!t)},c=(0,M.useMemo)((()=>dt(r,s??!1)),[s,r]);return(0,i.jsxs)(u.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,i.jsx)(m.X2,{width:"full",justifyContent:"space-between"}),(0,i.jsxs)(m.sg,{marginTop:"8",children:[(0,i.jsxs)(m.X2,{justifyContent:"space-between",className:`${V} ${K}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:a,onMouseLeave:a,children:[(0,i.jsx)(u.n,{"data-testid":"nft-collection-filter-buy-now",className:f.v4,children:"Buy now"}),(0,i.jsx)(ne.X,{hovered:o,checked:t,onClick:l,children:(0,i.jsx)("span",{})})]}),Yt.tq&&(0,i.jsx)(ge,{sortDropDownOptions:c}),(0,i.jsx)(ce,{}),(0,i.jsx)(Gt,{}),Object.entries(e).length>0&&(0,i.jsx)(u.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,i.jsx)(m.sg,{children:Object.entries(e).map((([e,t],n)=>(0,i.jsx)(Kt,{type:e,traits:t,index:n+B.TRAIT_START_INDEX},e)))})]})]})};var Jt=n(18683);const Qt=(0,j.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-164026c9-0"})`
  ${Jt.bc}
`,en=(0,j.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionPageSkeleton__StyledColumn",componentId:"sc-164026c9-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.zD+16}px)`:"100%"};
  }
`,tn=(0,j.default)(c.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\CollectionPageSkeleton__StyledRow",componentId:"sc-164026c9-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,nn=()=>{const e=(0,x.cP)((e=>e.bagExpanded)),t=(0,x.dD)();return(0,i.jsxs)(en,{isBagExpanded:e,children:[(0,i.jsx)(wn,{children:(0,i.jsx)(hn,{})}),(0,i.jsxs)(Qt,{children:[(0,i.jsx)(Ht,{isMobile:t}),(0,i.jsx)(tn,{children:N})]}),(0,i.jsx)(ct,{})]})};var rn;!function(e){e.UNSUPPORTED_TOKEN_AND_NFT_POLICY="https://support.uniswap.org/hc/en-us/articles/18783694078989-Unsupported-Token-Policy"}(rn||(rn={}));var sn=n(34578);const on=(0,j.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\UnavailableCollectionPage__Container",componentId:"sc-214cc308-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,an=(0,j.default)(te.dL).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\components\\collection\\UnavailableCollectionPage__StyledExternalLink",componentId:"sc-214cc308-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function ln({isBlocked:e}){const t=(0,j.useTheme)();return e?(0,i.jsxs)(on,{children:[(0,i.jsx)(sn.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,i.jsx)(te.Tv.HeadlineMedium,{children:(0,i.jsx)(H.cC,{id:"nSkGHi"})}),(0,i.jsx)(te.m_,{to:"/nfts",children:(0,i.jsx)(H.cC,{id:"WFlfJ1"})}),(0,i.jsx)(an,{href:rn.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,i.jsx)(H.cC,{id:"f6ybgN"})})]}):(0,i.jsxs)(on,{children:[(0,i.jsx)(te.Tv.HeadlineMedium,{children:(0,i.jsx)(H.cC,{id:"Ctk3ja"})}),(0,i.jsx)(te.m_,{to:"/nfts",children:(0,i.jsx)(H.cC,{id:"WFlfJ1"})})]})}var cn=n(68830),dn=n(47371),pn=n(437);const gn={},hn=(0,j.default)(d.X).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__CollectionBannerLoading",componentId:"sc-3b219c71-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,un=(0,j.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__CollectionContainer",componentId:"sc-3b219c71-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,mn=(0,cn.animated)(un),fn=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__CollectionAssetsContainer",componentId:"sc-3b219c71-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,xn=(0,cn.animated)(fn),wn=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__BannerWrapper",componentId:"sc-3b219c71-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,bn=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__Banner",componentId:"sc-3b219c71-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,yn=(0,j.default)(a.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__CollectionDescriptionSection",componentId:"sc-3b219c71-5"})`
  ${Jt.bc}
`,Cn=j.default.div.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__FiltersContainer",componentId:"sc-3b219c71-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${pn.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,vn=(0,j.default)(c.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__MobileFilterHeader",componentId:"sc-3b219c71-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,jn=(0,j.default)(c.ZP).withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__CollectionDisplaySection",componentId:"sc-3b219c71-8"})`
  align-items: flex-start;
  position: relative;
`,_n=j.default.button.withConfig({displayName:"C:\\Users\\noors\\OneDrive\\Documents\\GitHub\\interface\\src\\nft\\pages\\collection\\index__IconWrapper",componentId:"sc-3b219c71-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${l.c}
`;var kn=()=>{const{contractAddress:e}=(0,Ne.UO)(),t=(0,x.dD)(),[n,a]=(0,x.wx)(),{pathname:l}=(0,Ne.TH)(),c=(0,Ne.s0)(),d=l.includes("/activity"),u=(0,x.PY)((e=>e.setMarketCount)),m=(0,x.cP)((e=>e.bagExpanded)),f=(0,x.cP)((e=>e.setBagExpanded)),{chainId:w}=(0,s.useWeb3React)(),y=(0,g.e)(),{data:j,loading:_}=(0,p.K)(e),{CollectionContainerWidthChange:k}=(0,cn.useSpring)({CollectionContainerWidthChange:m&&!t?(y.xxxl?h.zD:h.ZI)+16:0,config:{duration:dn.Kd.medium,easing:cn.easings.easeOutSine}}),{gridWidthOffset:T}=(0,cn.useSpring)({gridWidthOffset:n&&!t?332:0,config:{duration:dn.Kd.medium,easing:cn.easings.easeOutSine}});if((0,M.useEffect)((()=>{const e={};j?.marketplaceCount?.forEach((({marketplace:t,count:n})=>{e[t]=n})),u(e)}),[j?.marketplaceCount,u]),(0,M.useEffect)((()=>{m&&n&&!y.xl&&a(!1)}),[m,n,y,a]),(0,M.useEffect)((()=>{f({bagExpanded:!1,manualClose:!1})}),[]),_)return(0,i.jsx)(nn,{});if(!j.name)return(0,i.jsx)(ln,{});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.fM,{page:r.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:e,chain_id:w,is_activity_view:d},shouldLogImpression:!0,children:(0,i.jsx)(mn,{style:{width:k.to((e=>`calc(100% - ${e}px)`))},children:e&&!b._P.includes(e)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(wn,{children:(0,i.jsx)(bn,{src:j?.bannerImageUrl?`${j.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,i.jsxs)(yn,{children:[j&&(0,i.jsx)(Rt,{stats:j,isMobile:t}),(0,i.jsx)("div",{id:"nft-anchor"}),(0,i.jsx)(I,{showActivity:d,toggleActivity:()=>{n&&a(!1),c(d?`/nfts/collection/${e}`:`/nfts/collection/${e}/activity`)}})]}),(0,i.jsxs)(jn,{children:[(0,i.jsx)(Cn,{isMobile:t,isFiltersExpanded:n,children:n&&(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsxs)(vn,{children:[(0,i.jsx)(te.Tv.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(_n,{onClick:()=>a(!1),children:(0,i.jsx)(L.BW,{})})]}),(0,i.jsx)(qt,{traitsByGroup:j?.traits??gn})]})}),(0,i.jsx)(xn,{hideUnderneath:t&&(n||m),style:{transform:T.to((e=>`translate(${e}px)`)),width:T.to((e=>`calc(100% - ${e}px)`))},children:d?e&&(0,i.jsx)(v.cS,{contractAddress:e,rarityVerified:j?.rarityVerified??!1,collectionName:j?.name??"",chainId:w}):e&&j&&(0,i.jsx)(M.Suspense,{fallback:(0,i.jsx)(ct,{}),children:(0,i.jsx)(pt,{collectionStats:j,contractAddress:e,rarityVerified:j?.rarityVerified})})})]})]}):(0,i.jsx)(ln,{isBlocked:!0})})}),(0,i.jsx)(C,{})]})}}}]);
//# sourceMappingURL=2186.aae4e327.chunk.js.map