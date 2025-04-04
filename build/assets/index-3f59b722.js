import{s as c,g as t,F as i,j as e,p as j,r as l,c as $,B as w,bC as S,bE as R,q as D}from"./index-fc642168.js";import{k as E,i as I}from"./index-7b72aa4d.js";import{D as T}from"./DeleteNodeIcon-d8692429.js";import{S as z}from"./Skeleton-7f7e6d21.js";import{C as L}from"./ClipLoader-f18caa88.js";const M=({nodeName:p})=>e.jsx(i,{children:e.jsxs(i,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(G,{children:e.jsx(T,{})}),e.jsxs(A,{children:["Are you sure you want to delete ",p||"this item","?"]})]})}),A=c(i)`
  color: ${t.white};
  font-family: 'Barlow';
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  word-wrap: break-word;
`,G=c(i)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,W=()=>{const{close:p}=j("removeNode"),{close:h}=j("editNodeName"),[x,d]=l.useState(!1),{navigateToNode:g}=E(),[v]=$(n=>[n.removeNode]),[N,y]=l.useState(!1),[r,b]=l.useState(),[a,k]=l.useState(),o=I(),m=()=>{p()};l.useEffect(()=>{(async()=>{if(o){y(!0);try{if(o.type==="topic"){const{data:s}=await S({search:o==null?void 0:o.name}),f=s.find(u=>u.name===o.name);k(f)}else b(o)}catch(s){console.error(s)}finally{y(!1)}}})()},[o]);const B=async()=>{d(!0);try{g(null),m(),h()}catch(n){console.warn(n)}finally{d(!1)}},C=async()=>{let n="";const s=r||a;if(!s)return;s!=null&&s.ref_id&&(n=s.ref_id),d(!0);const f=o==null?void 0:o.ref_id;try{await R(n),v(f),g(null),m(),h()}catch(u){console.warn(u)}finally{d(!1)}};return e.jsxs(_,{children:[e.jsx(M,{nodeName:(r==null?void 0:r.name)||(a==null?void 0:a.name)||""}),N?e.jsx(z,{}):e.jsxs(i,{direction:"row",mt:34,children:[e.jsx(F,{color:"secondary",onClick:m,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(q,{color:"secondary",disabled:x||!r&&!a,onClick:r||a?C:B,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(H,{children:e.jsx(L,{color:t.lightGray,size:12})})]})]})]})},_=c(i)`
  padding: 4px 12px 16px;
`,F=c(w)`
  && {
    background: ${t.white};
    color: ${t.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${t.white};
      color: ${t.BG2};
    }
  }
`,q=c(w)`
  && {
    color: ${t.white};
    background-color: ${t.primaryRed};

    &:hover,
    &:active,
    &:focus {
      color: ${t.white};
      background-color: ${t.primaryRed};
    }
  }
`,H=c.span`
  margin-top: 2px;
`,U=()=>e.jsx(D,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(W,{})});export{U as RemoveNodeModal};
