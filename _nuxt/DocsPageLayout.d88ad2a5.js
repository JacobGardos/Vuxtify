import O from"./DocsAside.c2c8eed0.js";import R from"./ProseCodeInline.f3f7aa8e.js";import U from"./Alert.2f5ead4f.js";import Y from"./DocsPageBottom.68040bf0.js";import G from"./DocsPrevNext.73e4003e.js";import{a as J,$ as Q,Y as W,q as X,I as m,r as V,z as Z,f as ee,a1 as oe,o as u,c as A,w as h,u as t,i as g,m as r,l as y,k as p,K as te,S as x,t as se,F as ne,j as k,L as ae,a2 as ce,s as le,v as re,x as _e}from"./entry.c7ba8ae8.js";import ie from"./DocsToc.d4b3d951.js";import"./ContentSlot.a5e2d188.js";import"./ProseA.f0aed594.js";import"./EditOnLink.vue.c548b24e.js";import"./DocsTocLinks.45cf6cf9.js";const ue=d=>(le("data-v-73d798d2"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=J({__name:"DocsPageLayout",setup(d){const{page:n}=Q(),{config:f,tree:T}=W(),L=X(),j=(e,o=!0)=>{var s;return typeof((s=n.value)==null?void 0:s[e])<"u"?n.value[e]:o},S=m(()=>{var e,o,s;return!n.value||((s=(o=(e=n.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:s.length)>0}),P=m(()=>{var e,o,s,c,l;return((e=n.value)==null?void 0:e.toc)!==!1&&((l=(c=(s=(o=n.value)==null?void 0:o.body)==null?void 0:s.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),C=m(()=>{var e,o,s,c,l;return((e=n.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(s=T.value)==null?void 0:s[0])==null?void 0:c.children)==null?void 0:l.length))}),z=m(()=>j("bottom",!0)),_=V(!1),a=V(null),v=()=>L.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function b(){a.value&&(a.value.scrollHeight===0&&setTimeout(b,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):b()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,w,B,I,N,$;const s=O,c=R,l=U,F=Y,H=G,M=ae,q=ie,E=ce;return u(),A(E,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(I=(B=t(f))==null?void 0:B.main)==null?void 0:I.padded,class:k(["docs-page-content",{fluid:($=(N=t(f))==null?void 0:N.main)==null?void 0:$.fluid,"has-toc":t(P),"has-aside":t(C)}])},{default:h(()=>[t(C)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(s,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(S)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+se(t(n)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(S)&&t(n)&&t(z)?(u(),g(ne,{key:2},[r(F),r(H)],64)):y("",!0)]),t(P)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=K=>_.value=!t(_))},[fe,r(M,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(q,{onMove:o[1]||(o[1]=K=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const we=_e(ve,[["__scopeId","data-v-73d798d2"]]);export{we as default};
