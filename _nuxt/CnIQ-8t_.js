import{u as m}from"./Bqut-kyD.js";import{M as c,I as p,d as i,aa as l,r as u,N as e,l as d}from"./C53O8g63.js";import f from"./CMlJK-1M.js";import y from"./DDjNb8mU.js";import"./Q_cb80Pd.js";import"./C7H69Ope.js";import"./BC_tU38p.js";import"./9e1WD5J3.js";import"./BDPGfsol.js";import"./EI-w30gK.js";import"./DbXky3nt.js";import"./B6nhDyIf.js";import"./Ch2hsFP-.js";import"./Ch_48vc5.js";import"./BSzyzqdb.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-3d4d3b53"]]);export{V as default};
