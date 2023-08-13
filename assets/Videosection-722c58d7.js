import{R as i,r as n,j as t}from"./index-70167db2.js";const d=(e,s)=>{const[r,a]=i.useState(!1);return i.useEffect(()=>{const o=new IntersectionObserver(([l])=>{a(l.isIntersecting)},s);return e!=null&&e.current&&o.observe(e==null?void 0:e.current),()=>{e!=null&&e.current&&o.unobserve(e==null?void 0:e.current)}},[]),r};function u(){const e=n.useRef(),s=d(e,{threshold:.5});return n.useEffect(()=>{if(e!=null&&e.current){const r=e.current.currentTime>0&&!e.current.paused&&!e.current.ended&&e.current.readyState>e.current.HAVE_CURRENT_DATA;s?r||e.current.play():r&&e.current.pause()}},[s]),t.jsxs("section",{className:" mt-20 mb-16",children:[t.jsx("h1",{className:"genty-demo text-5xl md:text-7xl py-8 text-center",children:"Join the Drama Community"}),t.jsx("a",{href:"https://t.me/BOLLYWOODPEPE",className:"bg-[#037014] rounded-3xl border-white border-4 text-xl  sm:text-2xl font-rubik-mono-one px-16 py-4 flex justify-center w-max mx-auto",target:"_blank",rel:"noreference noreferrer noreferrer",children:"Join now"}),t.jsx("div",{className:"container-wrapper mt-20",children:t.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[t.jsx("div",{className:"max-w-[400px] w-full video-bg-border ",children:t.jsx("div",{id:"about_video",className:"",dangerouslySetInnerHTML:{__html:`
                <video
                id="about_video"
                
                autoplay
                muted
              
                loop
                  playsinline
                  preload="auto"
                >
              
                <source src="images/video2.mp4" type="video/mp4" />
                
                </video>`}})}),t.jsx("div",{className:"max-w-[400px] w-full video-bg-border",children:t.jsx("div",{id:"about_video",className:"",dangerouslySetInnerHTML:{__html:`
                <video
                id="about_video"
           
                autoplay
                muted
                loop
                  playsinline
                  preload="auto"
                >
              
                <source src="images/video1.mp4" type="video/mp4" />
                
                </video>`}})}),t.jsx("div",{className:"max-w-[400px] w-full video-bg-border",children:t.jsx("div",{id:"about_video",className:"",dangerouslySetInnerHTML:{__html:`
                <video
                id="about_video"
                
                autoplay
                muted
                loop
                  playsinline
                  preload="auto"
                >
              
                <source src="images/video3.mp4" type="video/mp4" />
                
                </video>`}})})]})}),t.jsxs("div",{className:"text-center my-16 max-w-[1000px] mx-auto gap-8 flex flex-col",children:[t.jsx("p",{children:"Lights! Camera! Action"}),t.jsx("p",{className:"px-4 sm:px-0",children:"JOIN THE THEATRE OF MEMES DRAMA WITH BOLLYWOOD PEPE AND GRAB SOME POPCORN. CONNECT WITH THE BEST MEME-TIME MOVIES EVER. JOIN US IN AN EPIC BOLLYWOOD -MEMES JOURNEY. AND WE'LL PRODUCE A BLOCKBUSTER EXPERIENCE THAT WILL LEAVE YOU WANTING MORE PROFITS..."})]})]})}export{u as default};
