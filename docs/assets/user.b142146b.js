import{_ as v}from"./nuxt-layout.bdcb008c.js";import{a1 as x,v as b,z as t,A as s,t as p,a2 as y,a3 as V,x as n,Y as u,H as l,$ as f,F as r,B as m,U as _,Q as g,R as B}from"./entry.1ce149c4.js";import{u as k}from"./useFireAuth.5239ad97.js";import"./index.esm.db934170.js";import"./index-61e5ac61.bc68faee.js";const C={class:"d-flex align-center"},U={class:"d-flex align-center"},P={__name:"user",async setup(N){let d,i;const a=([d,i]=x(()=>k()),d=await d,i(),d);return(S,e)=>{const w=v;return p(),b("div",null,[t(w,{name:"admin"},{main:s(()=>[t(y,null,{default:s(()=>[t(V,{cols:"6"},{default:s(()=>[n("form",{onSubmit:e[2]||(e[2]=_(o=>l(a).save(),["prevent"]))},[t(u,{modelValue:l(a).data.email,"onUpdate:modelValue":e[0]||(e[0]=o=>l(a).data.email=o),label:"E-mail"},null,8,["modelValue"]),t(u,{modelValue:l(a).data.password,"onUpdate:modelValue":e[1]||(e[1]=o=>l(a).data.password=o),label:"Password",type:"password"},null,8,["modelValue"]),n("div",C,[t(f),t(r,{type:"submit"},{default:s(()=>[m("Salvar")]),_:1})])],32)]),_:1}),t(V,null,{default:s(()=>[n("form",{onSubmit:e[6]||(e[6]=_(o=>l(a).login(),["prevent"]))},[t(u,{modelValue:l(a).data.email,"onUpdate:modelValue":e[3]||(e[3]=o=>l(a).data.email=o),label:"E-mail"},null,8,["modelValue"]),t(u,{modelValue:l(a).data.password,"onUpdate:modelValue":e[4]||(e[4]=o=>l(a).data.password=o),label:"Password",type:"password"},null,8,["modelValue"]),n("div",U,[l(a).user?(p(),g(r,{key:0,type:"button",onClick:e[5]||(e[5]=o=>l(a).logout())},{default:s(()=>[m("Logout")]),_:1})):B("",!0),t(f),t(r,{type:"submit"},{default:s(()=>[m("Login")]),_:1})])],32)]),_:1})]),_:1})]),_:1})])}}};export{P as default};
