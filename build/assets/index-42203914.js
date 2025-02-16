import{s as v,g as q,T as z,F as r,r as f,am as $,j as e,aW as J,aX as K,bb as X,B as E,bc as U,k as Z,bd as Q,a2 as D,l as N,aV as O,aZ as ee,n as te,bu as ne,bz as re}from"./index-49051643.js";import{p as V}from"./index-348f31a0.js";import{C as W}from"./ClipLoader-c3a5554b.js";import{f as G}from"./index-286d6210.js";import{A as Y}from"./index-57e524ed.js";import{c as oe}from"./index-64f1c910.js";import"./three.module-1c1ec8b9.js";import"./index-7651ed4e.js";import"./Stack-563197eb.js";import"./createSvgIcon-840a6f85.js";import"./TextareaAutosize-5b5abb2a.js";const B=a=>a.charAt(0).toUpperCase()+a.slice(1).replace(/_/g," "),k=a=>a?[...a].sort((l,x)=>Number(x.required)-Number(l.required)):[],H=a=>a?a.filter(l=>l.key!=="node_key"):[],ae=({handleSelectType:a,skipToStep:l,nodeType:x,selectedValues:n})=>{const[m,w]=f.useState(!1),[h,C]=f.useState(),{watch:j,formState:{isValid:t}}=$();f.useEffect(()=>{(async()=>{w(!0);const o=await U(x),T=V(o),A=H(T);C(A),w(!1)})()},[x,j]);const s=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),p=(h?[...h].sort((c,o)=>c.required&&!o.required?-1:!c.required&&o.required?1:0):[]).filter(c=>!!(c.required&&!Object.values(n).includes(c.key))),S=()=>{a(""),l("sourceType")},b=!t||m||p.some(c=>{var o;return c.required&&!((o=j(c.key))!=null&&o.trim())});return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(se,{children:"Required Properties"})})}),e.jsx(ie,{children:m?e.jsx(r,{style:{margin:"auto"},children:e.jsx(W,{color:q.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:p==null?void 0:p.map(({key:c,required:o})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(z,{children:s(c)}),e.jsx(J,{id:"item-name",maxLength:50,name:c,placeholder:o?"Required":"Optional",rules:{...o?{...K,pattern:{message:"No leading whitespace allowed",value:X}}:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:b,onClick:()=>l("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},se=v(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=v(r)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,ce=v(r)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,le=({nodeType:a,onclose:l,selectedNodeType:x})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(R,{children:"Confirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(R,{children:["From: ",x]})}),e.jsx(r,{mb:25,children:e.jsxs(R,{children:["To: ",a]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=v(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=({handleSelectType:a,skipToStep:l,selectedNodeType:x,nodeType:n,selectedValues:m,setSelectedValues:w})=>{const[h,C]=f.useState(!1),[j,t]=f.useState(),[s,i]=f.useState(),{watch:p}=$();f.useEffect(()=>{const d=async(u,y)=>{C(!0);const g=await U(u),F=V(g),_=H(F);y(_),C(!1)};n&&d(n,t),x&&d(x,i)},[n,x,p]);const S=f.useMemo(()=>k(j),[j]),b=f.useMemo(()=>k(s),[s]),c=()=>{a(""),l("sourceType")};f.useEffect(()=>{if(j&&s){const d=s.reduce((u,y)=>{const g=j.find(F=>F.key===y.key);return u[y.key]=g?y.key:"none",u},{});w(d)}},[j,s,w]);const o=(d,u)=>{w(y=>({...y,[d]:u}))},T=()=>{const d=S.every(({key:u,required:y})=>!y||y&&m[u]&&m[u]!=="none");l(d?"createConfirmation":"requiredProperties")},A=f.useMemo(()=>b.map(({key:d})=>{const u=m[d]||"none",y=S.filter(g=>!Object.values(m).includes(g.key)||g.key===u).map(g=>({label:B(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:d,autoCompleteOptions:y,selectedValue:u}}),[b,S,m]);return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(de,{children:"Map Properties"})})}),e.jsx(ue,{children:h?e.jsx(r,{style:{margin:"auto"},children:e.jsx(W,{color:q.lightGray})}):e.jsxs(xe,{children:[e.jsxs(fe,{children:[e.jsx(I,{children:B(x)}),b.map(({key:d})=>e.jsx(me,{children:e.jsx(z,{children:B(d)})},d))]}),e.jsxs(he,{children:[e.jsx(I,{children:B(n)}),A.map(({key:d,autoCompleteOptions:u,selectedValue:y})=>e.jsx(r,{children:e.jsx(Y,{isLoading:h,onSelect:g=>o(d,g?g.value:"none"),options:u,selectedValue:u.find(g=>g.value===y)})},d))]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:h,onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},de=v(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ue=v(r)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,xe=v.div`
  display: flex;
  justify-content: space-between;
`,fe=v.div`
  flex: 1;
  margin-right: 16px;
`,me=v.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,he=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,I=v.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,ye={label:"Not Selected",value:"Not Selected"},ge=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],je=({skipToStep:a,allowNextStep:l,onSelectType:x,selectedType:n})=>{const[m]=Z(i=>[i.customSchemaFeatureFlag]),[w,h]=f.useState(null),[C,j]=f.useState(!1),t=G();f.useEffect(()=>{(async()=>{var p;if(m){j(!0);try{const S=await Q(),b=["about","schema",(p=t==null?void 0:t.node_type)==null?void 0:p.toLowerCase()],c=S.schemas.filter(o=>o.ref_id&&!b.includes(o.type.toLowerCase())&&!o.is_deleted).map(o=>({label:oe(o.type),value:o.type,action:()=>a("mapProperties")}));h(c)}catch(S){console.warn(S)}finally{j(!1)}}else h([...ge,ye])})()},[t==null?void 0:t.node_type,n,m,a]);const s=i=>{x((i==null?void 0:i.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(Y,{autoFocus:!0,isLoading:C,onSelect:s,options:w})}),e.jsx(r,{children:e.jsx(E,{color:"secondary",disabled:!l,onClick:()=>a("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=v(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=async(a,l,x,n)=>{const m={},w=[];Object.entries(x).forEach(([t,s])=>{s!=="none"&&(m[s]=t),t!==s&&w.push(t)});const h={};Object.keys(n||{}).forEach(t=>{const s=n==null?void 0:n[t];Object.entries(m).forEach(([i,p])=>{p===t&&(h[m[i]]=s)})}),Object.keys(a).forEach(t=>{t!=="nodeType"&&(h[t]=a[t])});const C=n?n.node_type.charAt(0).toUpperCase()+n.node_type.slice(1):void 0,j={node_type:l,node_data:h,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=n==null?void 0:n.ref_id;if((n==null?void 0:n.type)==="topic"){const{data:i}=await ne({search:n==null?void 0:n.name}),p=i.find(S=>S.name===n.name);t=p==null?void 0:p.ref_id}const s=t||(n==null?void 0:n.ref_id);s&&await re(s,j)}catch(t){console.error(t);let s=O;if(t.status===400)try{const i=await t.json();s=i.message||i.errorCode||(i==null?void 0:i.status)||O}catch{s=O}else t instanceof Error&&(s=t.message);throw new Error(s)}},Me=()=>{const[a,l]=f.useState("sourceType"),{close:x,visible:n}=D("changeNodeType"),{open:m}=D("editNodeName"),{open:w}=D("addType"),h=N({mode:"onChange"}),{watch:C,setValue:j,reset:t}=h,[s,i]=f.useState(""),[p,S]=f.useState({});f.useEffect(()=>()=>{l("sourceType"),t()},[n,t]);const b=G(),c=b!=null&&b.node_type?b.node_type.charAt(0).toUpperCase()+b.node_type.slice(1):"",o=C("nodeType");C("title");const T=()=>{x()},A=_=>{l(_)},d=h.handleSubmit(async _=>{try{await we(_,o,p,b),T()}catch(P){let L=O;if(T(),(P==null?void 0:P.status)===400){const M=await P.json();L=M.errorCode||(M==null?void 0:M.status)||O}else P instanceof Error&&(L=P.message);i(String(L))}}),u=_=>{_==="Create custom type"?w():j("nodeType",_)},y={sourceType:e.jsx(je,{allowNextStep:!!o,onSelectType:u,selectedType:o,skipToStep:A}),requiredProperties:e.jsx(ae,{handleSelectType:u,nodeType:o,selectedValues:p,skipToStep:A}),createConfirmation:e.jsx(le,{nodeType:o,onclose:T,selectedNodeType:c}),mapProperties:e.jsx(pe,{handleSelectType:u,nodeType:o,selectedNodeType:c,selectedValues:p,setSelectedValues:S,skipToStep:A})},g=a==="mapProperties"?"regular":"small",F=()=>{x(),m()};return e.jsx(ee,{id:"changeNodeType",kind:g,onClose:F,preventOutsideClose:!0,children:e.jsx(te,{...h,children:e.jsx("form",{id:"add-node-form",onSubmit:d,children:y[a]})})})};export{Me as ChangeNodeTypeModal};
