import{s as i,a as t,F as c,j as e,e as j,r as l,u as $,B as w,bt as C,bu as R,aY as I}from"./index-eb89ecf2.js";import{aH as z,h as D,m as E}from"./index-b02e8777.js";import{S as L}from"./Skeleton-a1269c39.js";import{C as T}from"./ClipLoader-49e3d6ce.js";const G=({nodeName:p})=>e.jsx(c,{children:e.jsxs(c,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(A,{children:e.jsx(z,{})}),e.jsxs(M,{children:["Are you sure you want to delete ",p||"this item","?"]})]})}),M=i(c)`
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
`,A=i(c)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,W=()=>{const{close:p}=j("removeNode"),{close:h}=j("editNodeName"),[x,d]=l.useState(!1),[g]=D(s=>[s.setSelectedNode]),[v]=$(s=>[s.removeNode]),[N,y]=l.useState(!1),[n,b]=l.useState(),[a,S]=l.useState(),o=E(),u=()=>{p()};l.useEffect(()=>{(async()=>{if(o){y(!0);try{if(o.type==="topic"){const{data:r}=await C({search:o==null?void 0:o.name}),m=r.find(f=>f.name===o.name);S(m)}else b(o)}catch(r){console.error(r)}finally{y(!1)}}})()},[o]);const k=async()=>{d(!0);try{g(null),u(),h()}catch(s){console.warn(s)}finally{d(!1)}},B=async()=>{let s="";const r=n||a;if(!r)return;r!=null&&r.ref_id&&(s=r.ref_id),d(!0);const m=o==null?void 0:o.ref_id;try{await R(s),v(m),g(null),u(),h()}catch(f){console.warn(f)}finally{d(!1)}};return e.jsxs(_,{children:[e.jsx(G,{nodeName:(n==null?void 0:n.name)||(a==null?void 0:a.name)||""}),N?e.jsx(L,{}):e.jsxs(c,{direction:"row",mt:34,children:[e.jsx(F,{color:"secondary",onClick:u,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(H,{color:"secondary",disabled:x||!n&&!a,onClick:n||a?B:k,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(O,{children:e.jsx(T,{color:t.lightGray,size:12})})]})]})]})},_=i(c)`
  padding: 4px 12px 16px;
`,F=i(w)`
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
`,H=i(w)`
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
`,O=i.span`
  margin-top: 2px;
`,P=()=>e.jsx(I,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(W,{})});export{P as RemoveNodeModal};