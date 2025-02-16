import{W as K,u as W,r,a as H,b as I,c as T,d as U,f as X,e as Z,_ as d,j as t,s as u,g as i,F as g,I as ee,C as te,m as oe,h as Y,i as ne,T as S,B as re,Q as se,k as ie,l as ae,n as ce}from"./index-07edd55a.js";import{P as le,T as de,u as ue,O as he,A as fe}from"./index-a10d75c3.js";const ge=K`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  body {

    &.no-scroll {
      overflow: hidden;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`,pe=()=>{const[e]=W(),n=e.get("node"),a=r.useRef(!0),{setBudget:s}=H(p=>p),{setSidebarOpen:c,currentSearch:f}=I(p=>p),{fetchData:m,setAbortRequests:l,resetData:w,addNewNode:k,finishLoading:v}=T(p=>p);r.useEffect(()=>{if(a.current){const p=async()=>{f||w(),await m(s,l),c(!0),a.current=!1,f&&await U(s)},A=async()=>{const x=await X(n||"",0,5);v(),a.current=!1,x&&k({nodes:x.nodes,edges:x.edges})};if(n){A();return}p()}},[n,f,m,s,l,c,w,a,v,k]),r.useEffect(()=>{if(!a.current){const p=async()=>{await m(s,l),c(!0),f&&await U(s)};w(),p()}},[f,m,s,l,c,w,a])},me={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},xe=Z(e=>({...me,setAskedQuestion:n=>e(a=>({askedQuestions:[...a.askedQuestions||[],n],hasQuestionInProgress:!0})),setAskedQuestionAnswer:n=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],n],hasQuestionInProgress:!1})),setHasQuestionInProgress:n=>e({hasQuestionInProgress:n}),setHasTeachingInProgress:n=>e({hasTeachingInProgress:n}),setHasInstagraphInProgress:n=>e({hasInstagraphInProgress:n}),setTeachMeAnswer:n=>e({hasTeachingInProgress:!1,teachMeAnswer:n}),setInstagraphAnswer:n=>{var a,s,c,f;(a=n==null?void 0:n.instagraph)!=null&&a.edges&&((s=n==null?void 0:n.instagraph)!=null&&s.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=n==null?void 0:n.instagraph)==null?void 0:c.edges,nodes:(f=n==null?void 0:n.instagraph)==null?void 0:f.nodes}})}})),ye="0.1.106",_e=r.lazy(()=>d(()=>import("./index-26f90ffc.js"),["assets/index-26f90ffc.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-a10d75c3.js","assets/ClipLoader-36f91b24.js","assets/Tabs-675d7e60.js","assets/createSvgIcon-2b4b5a12.js"]).then(({SettingsModal:e})=>({default:e}))),be=r.lazy(()=>d(()=>import("./index-e552db6a.js"),["assets/index-e552db6a.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/CheckIcon-7472c0c7.js","assets/index-717b1eb9.js","assets/ClipLoader-36f91b24.js"]).then(({AddContentModal:e})=>({default:e}))),we=r.lazy(()=>d(()=>import("./index-5081e403.js"),["assets/index-5081e403.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-a10d75c3.js","assets/CheckIcon-7472c0c7.js","assets/index-717b1eb9.js","assets/ClipLoader-36f91b24.js","assets/index-348f31a0.js","assets/three.module-1c1ec8b9.js","assets/index-1e2765d2.js","assets/index-75328821.js","assets/Stack-226b5b1b.js","assets/createSvgIcon-2b4b5a12.js","assets/TextareaAutosize-ee2fc0dd.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),je=r.lazy(()=>d(()=>import("./index-ee4c1ed6.js"),["assets/index-ee4c1ed6.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/VisibilityOn-051c75f9.js","assets/SearchIcon-bf25d911.js","assets/constants-bf8b5c2c.js","assets/index-a10d75c3.js","assets/ClipLoader-36f91b24.js","assets/index-1e2765d2.js","assets/index-75328821.js","assets/Stack-226b5b1b.js","assets/createSvgIcon-2b4b5a12.js","assets/TextareaAutosize-ee2fc0dd.js","assets/index-292689a7.js","assets/NodeCircleIcon-a08e264d.js","assets/CheckIcon-7472c0c7.js","assets/Typography-e4847f7b.js","assets/Tabs-675d7e60.js"]).then(({SourcesTableModal:e})=>({default:e}))),ke=r.lazy(()=>d(()=>import("./index-8a2893d1.js"),["assets/index-8a2893d1.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-a10d75c3.js","assets/EditNodeIcon-eef8b0d2.js","assets/index-75328821.js","assets/Skeleton-61cce6b3.js","assets/ClipLoader-36f91b24.js"]).then(({EditNodeNameModal:e})=>({default:e}))),ve=r.lazy(()=>d(()=>import("./index-f6e47610.js"),["assets/index-f6e47610.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-a10d75c3.js","assets/DeleteNodeIcon-db67195d.js","assets/Skeleton-61cce6b3.js","assets/ClipLoader-36f91b24.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ee=r.lazy(()=>d(()=>import("./index-d879c5ff.js"),["assets/index-d879c5ff.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-a10d75c3.js","assets/NodeCircleIcon-a08e264d.js","assets/index-1e2765d2.js","assets/index-75328821.js","assets/Stack-226b5b1b.js","assets/createSvgIcon-2b4b5a12.js","assets/TextareaAutosize-ee2fc0dd.js","assets/constants-bf8b5c2c.js","assets/ClipLoader-36f91b24.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Te=r.lazy(()=>d(()=>import("./index-1b3793be.js"),["assets/index-1b3793be.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-a10d75c3.js","assets/index-292689a7.js","assets/constants-bf8b5c2c.js","assets/NodeCircleIcon-a08e264d.js","assets/index-1e2765d2.js","assets/index-75328821.js","assets/Stack-226b5b1b.js","assets/createSvgIcon-2b4b5a12.js","assets/TextareaAutosize-ee2fc0dd.js","assets/ClipLoader-36f91b24.js"]).then(({MergeNodeModal:e})=>({default:e}))),Ae=r.lazy(()=>d(()=>import("./index-2e63c3d8.js"),["assets/index-2e63c3d8.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-348f31a0.js","assets/three.module-1c1ec8b9.js","assets/ClipLoader-36f91b24.js","assets/index-a10d75c3.js","assets/index-1e2765d2.js","assets/index-75328821.js","assets/Stack-226b5b1b.js","assets/createSvgIcon-2b4b5a12.js","assets/TextareaAutosize-ee2fc0dd.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),ze=r.lazy(()=>d(()=>import("./index-f39e6910.js"),["assets/index-f39e6910.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-1e2765d2.js","assets/index-75328821.js","assets/Stack-226b5b1b.js","assets/index-a10d75c3.js","assets/createSvgIcon-2b4b5a12.js","assets/TextareaAutosize-ee2fc0dd.js","assets/ClipLoader-36f91b24.js","assets/index-71f616b4.js","assets/VisibilityOn-051c75f9.js","assets/SourcesTableIcon-435cc6c4.js","assets/VolumeIcon-221c352a.js","assets/NodeCircleIcon-a08e264d.js","assets/CheckIcon-7472c0c7.js","assets/DeleteNodeIcon-db67195d.js","assets/EditNodeIcon-eef8b0d2.js","assets/SearchIcon-bf25d911.js","assets/SoundIcon-8f8fbf99.js","assets/SucessFeedBackIcon-3e626251.js","assets/three.module-1c1ec8b9.js","assets/isPlainObject-5e1f5224.js","assets/Tabs-675d7e60.js","assets/index-348f31a0.js","assets/Switch-8be74290.js","assets/FormControlLabel-6f4e875a.js","assets/Typography-e4847f7b.js"]).then(({BlueprintModal:e})=>({default:e}))),Le=r.lazy(()=>d(()=>import("./index-38fe4b10.js"),["assets/index-38fe4b10.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-3e626251.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Se=r.lazy(()=>d(()=>import("./index-792fdbec.js"),["assets/index-792fdbec.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-dad2b109.js","assets/index-a10d75c3.js","assets/index-1e2765d2.js","assets/index-75328821.js","assets/Stack-226b5b1b.js","assets/createSvgIcon-2b4b5a12.js","assets/TextareaAutosize-ee2fc0dd.js","assets/FormControlLabel-6f4e875a.js","assets/Typography-e4847f7b.js","assets/Switch-8be74290.js","assets/ClipLoader-36f91b24.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ie=r.lazy(()=>d(()=>import("./index-07edd55a.js").then(e=>e.cd),["assets/index-07edd55a.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Pe=r.lazy(()=>d(()=>import("./index-c4b6cb3b.js").then(e=>e.i),["assets/index-c4b6cb3b.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-a10d75c3.js","assets/SoundIcon-8f8fbf99.js"]).then(({BriefDescription:e})=>({default:e}))),Re=r.lazy(()=>d(()=>import("./index-2ba943d3.js"),["assets/index-2ba943d3.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-4c540f72.js","assets/index-a10d75c3.js","assets/index-dad2b109.js","assets/index-1e2765d2.js","assets/index-75328821.js","assets/Stack-226b5b1b.js","assets/createSvgIcon-2b4b5a12.js","assets/TextareaAutosize-ee2fc0dd.js","assets/FormControlLabel-6f4e875a.js","assets/Typography-e4847f7b.js","assets/Switch-8be74290.js","assets/ClipLoader-36f91b24.js"]).then(({NodeActionModal:e})=>({default:e}))),Ne=()=>t.jsxs(t.Fragment,{children:[t.jsx(we,{}),t.jsx(be,{}),t.jsx(_e,{}),t.jsx(ke,{}),t.jsx(ve,{}),t.jsx(je,{}),t.jsx(Ee,{}),t.jsx(Ae,{}),t.jsx(ze,{}),t.jsx(Te,{}),t.jsx(Le,{}),t.jsx(Se,{}),t.jsx(Ie,{}),t.jsx(Pe,{}),t.jsx(Re,{})]}),Me=()=>{const[e,n]=r.useState(null),{runningProjectMessages:a}=T(l=>l),s=l=>{n(l.currentTarget)},c=()=>{n(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs(Oe,{ml:8,children:[t.jsx(Ce,{onClick:s,children:t.jsxs(de,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(ee,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs($e,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(J,{onClick:c,children:t.jsx(te,{})}),t.jsx(Be,{p:16,children:a.map(l=>t.jsx("p",{className:"item",children:l},l))})]})]}):null},Oe=u(g).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,Be=u(g)`
  max-height: 50vh;
  max-width: 30vw;
  background: transparent;
  padding-top: 1px !important;
  padding-bottom: 0 !important;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 9px;
    margin: 4px;
    overflow-y: hidden;
  }

  .item {
    padding: 8px 0;
    word-break: break-word;
    font-family: 'Barlow';
    font-size: 12px;
    font-weight: 400;
    text-align: right;
    color: ${i.GRAY6};
  }

  &:hover {
    background: ${i.MESSAGE_BG_HOVER};
  }
`,Ce=u(g).attrs({align:"center",direction:"row"})`
  display: flex;
  cursor: pointer;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${i.white};
  background: ${i.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
  }

  .budgetUnit {
    color: ${i.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,J=u.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  display: none;
  z-index: 1;
  width: 2em;
  height: 2em;
  background-color: ${i.BUTTON1};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${i.white} !important;
    width: 1.5em;
    height: 1.5em;
  }
`,$e=u(le)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${i.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${J} {
        display: flex;
      }
    }
  }
`;u(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})``;u(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-end"})``;u(g).attrs({align:"center",direction:"row",grow:1})`
  justify-content: between;
`;u(g).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${i.white};
  background: ${i.BG1};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 8px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
  }

  .text {
  }
`;u(g).attrs({align:"center",direction:"row"})`
  display: flex;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${i.white};
  background: ${i.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .budgetUnit {
    color: ${i.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;u(g).attrs({align:"center",direction:"row"})`
  margin-right: 10px;
  display: flex;
  height: 28px;
  padding: 0.75rem 0.6375rem 0.75rem 0.3187rem;
  align-items: center;
  gap: 4px;
  color: ${i.white};
  background: ${i.modalShield};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;const De=()=>{const e=I(l=>l.appMetaData),{resetAiSummaryAnswer:n,setNewLoading:a}=Y(),{abortFetchData:s,resetGraph:c}=T(l=>l),f=ne();if(!e)return null;const m=()=>{a(null),s(),c(),n(),f("/")};return t.jsxs(Ve,{children:[t.jsxs(Fe,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(S,{className:"title",color:"white",children:e.title})}),t.jsx(S,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Me,{})]})},Ve=u(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Fe=u.div`
  ${oe.smallOnly`
    display: none;
  `}

  width: 367px;

  .title {
    color: var(--Primary-Text, #fff);
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 72.727% */
    letter-spacing: 0.22px;
    cursor: pointer;
  }

  .subtitle {
    color: ${i.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
    margin-left: 8px;
    cursor: pointer;
  }
`,qe=620,Qe=()=>{const e=`(max-width: ${qe}px)`,[n,a]=r.useState(()=>window.matchMedia(e).matches);return r.useEffect(()=>{const s=window.matchMedia(e);a(s.matches);const c=()=>{a(s.matches)};return window.addEventListener("resize",c),()=>s.removeEventListener("change",c)},[e]),n},Ge=()=>{const[e,n]=r.useState(!0),a=Qe();r.useEffect(()=>{n(!0)},[a]);const s=()=>{n(!1)};return a&&e?t.jsxs(Ue,{align:"center",direction:"column",justify:"center",onClick:s,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(g,{align:"center",direction:"column",justify:"center",children:[t.jsx(L,{children:"Second Brain is currently"}),t.jsx(L,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(L,{children:"Mobile support coming soon."})]}),t.jsx(re,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Ue=u(g)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,L=u(S)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,We=u(se)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${i.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${i.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${i.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${i.primaryGreen};
  }
  &.Toastify__toast-container--top-right {
    width: fit-content;
    height: auto;
    top: 60px;
    right: 48px;
  }
`,He=u(g)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,Ye=u(g)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,Je=r.lazy(()=>d(()=>import("./index-36d20557.js"),["assets/index-36d20557.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-435cc6c4.js","assets/index-a10d75c3.js"]).then(({MainToolbar:e})=>({default:e}))),Ke=r.lazy(()=>d(()=>import("./index-c4a662ab.js"),["assets/index-c4a662ab.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/index-71f616b4.js","assets/VisibilityOn-051c75f9.js","assets/SourcesTableIcon-435cc6c4.js","assets/VolumeIcon-221c352a.js","assets/NodeCircleIcon-a08e264d.js","assets/index-a10d75c3.js","assets/CheckIcon-7472c0c7.js","assets/DeleteNodeIcon-db67195d.js","assets/EditNodeIcon-eef8b0d2.js","assets/SearchIcon-bf25d911.js","assets/SoundIcon-8f8fbf99.js","assets/SucessFeedBackIcon-3e626251.js","assets/three.module-1c1ec8b9.js","assets/TextareaAutosize-ee2fc0dd.js","assets/index-75328821.js","assets/index-3eb07796.js","assets/index-4c540f72.js","assets/ClipLoader-36f91b24.js"]).then(({Universe:e})=>({default:e}))),Xe=r.lazy(()=>d(()=>import("./index-e6bdba1f.js").then(e=>e.i),["assets/index-e6bdba1f.js","assets/index-07edd55a.js","assets/index-b4d03b7b.css","assets/VolumeIcon-221c352a.js","assets/index-a10d75c3.js","assets/SearchIcon-bf25d911.js","assets/ClipLoader-36f91b24.js","assets/Skeleton-61cce6b3.js","assets/Stack-226b5b1b.js","assets/index-c4b6cb3b.js","assets/SoundIcon-8f8fbf99.js","assets/index-75328821.js","assets/CheckIcon-7472c0c7.js","assets/FormControlLabel-6f4e875a.js","assets/Typography-e4847f7b.js","assets/createSvgIcon-2b4b5a12.js","assets/isPlainObject-5e1f5224.js","assets/index-3eb07796.js"]).then(({SideBar:e})=>({default:e}))),tt=()=>{const[e]=W(),n=e.get("q"),{setNodeCount:a}=H(o=>o),s=r.useRef(null),c=r.useRef(null);pe();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:l,universeQuestionIsOpen:w}=I(o=>o),k=xe(o=>o.setTeachMeAnswer),{setCategoryFilter:v,addNewNode:p,splashDataLoading:A,runningProjectId:x,setRunningProjectMessages:P,isFetching:R}=T(o=>o),{setAiSummaryAnswer:y,getKeyExist:N,aiRefId:z}=Y(o=>o),[M,j]=ie(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag]),h=ue(),O=ae({mode:"onChange"}),{setValue:B}=O;r.useEffect(()=>{B("search",n??""),l(!1),m(!1),f(n??""),k(""),v(null)},[n,v,f,m,k,l,B]);const C=r.useCallback(()=>{a("INCREMENT")},[a]),$=r.useCallback(o=>{R||(s.current||(s.current={nodes:[],edges:[]}),o.edges&&s.current.edges.push(...o.edges),o.nodes&&s.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const{nodes:_,edges:b}=s.current,E={nodes:_,edges:b};s.current={nodes:[],edges:[]},p(E)}},3e3))},[p,R]),D=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{answer:o.answer,answerLoading:!1})},[y]),V=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{audio_en:o.audio_EN})},[y]),F=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{questions:o.relevant_questions.map(_=>_.question),questionsLoading:!1})},[y]),q=r.useCallback(o=>{o.ref_id&&y(o.ref_id,{sources:o.sources.map(_=>_.ref_id),sourcesLoading:!1})},[y]),Q=r.useCallback(o=>{o.question&&N(z)&&y(z,{answerLoading:!1,entities:o.entities})},[y,N,z]);return r.useEffect(()=>(h&&(h.connect(),h.on("connect_error",o=>{console.error("Socket connection error:",o)}),h.on("newnode",C),j&&h.on("extractedentitieshook",Q),j&&h.on("askquestionhook",D),j&&h.on("relevantquestionshook",F),j&&h.on("answersourceshook",q),M&&h.on("new_node_created",$),j&&h.on("answeraudiohook",V)),()=>{h&&h.off()}),[h,C,$,M,D,j,F,q,Q,V]),r.useEffect(()=>{if(!x)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const b={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:x})};o.send(JSON.stringify(b))},o.onmessage=_=>{var G;const b=JSON.parse(_.data);if(console.log(b),b.type==="ping")return;const E=(G=b==null?void 0:b.message)==null?void 0:G.message;E&&P(E)},o.onerror=_=>{console.error("WebSocket error:",_)}},[x,P]),r.useEffect(()=>{if(x)try{h==null||h.emit("update_project_id",{id:x})}catch(o){console.error(o)}},[x,h]),t.jsxs(t.Fragment,{children:[t.jsx(ge,{}),t.jsx(Ge,{}),t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:A?null:t.jsxs(He,{direction:"row",children:[t.jsxs(ce,{...O,children:[t.jsx(Je,{}),!w&&t.jsx(Xe,{}),t.jsx(Ke,{}),t.jsx(he,{}),t.jsx(De,{}),t.jsxs(Ye,{children:["v",ye]}),t.jsx(fe,{})]}),t.jsx(Ne,{}),t.jsx(We,{})]})})]})};export{tt as App};
