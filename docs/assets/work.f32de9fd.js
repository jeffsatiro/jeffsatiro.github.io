import{u as i}from"./useHelper.00913e96.js";import{Q as u,A as c,a6 as m,t as a,x as t,v as s,P as d,O as p,y as r,H as l,R as _}from"./entry.2e838e42.js";const f=t("h2",null,"Experiência",-1),h=t("div",{class:"border-t my-6"},null,-1),k=["innerHTML"],H={__name:"work",props:{resume:{type:Object,default:()=>({})}},setup(o){const n=i();return(y,v)=>(a(),u(m,{class:"page-index-markdown"},{default:c(()=>[t("div",null,[f,(a(!0),s(p,null,d(o.resume.data.work.filter(e=>e.show),(e,w)=>(a(),s("div",null,[h,t("h3",null,r(e.position)+" | "+r(e.name),1),t("div",null,r(l(n).formatLocation(e.location)),1),t("div",null,r(l(n).formatDateBetween(e.date)),1),e.summary?(a(),s("small",{key:0,innerHTML:e.summary,class:"d-block mt-2"},null,8,k)):_("",!0)]))),256))])]),_:1}))}};export{H as default};
