import b from"./TabsHeader.031d16a0.js";import x from"./ComponentPlaygroundProps.34c3c97a.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.19405794.js";import{_ as g}from"./ComponentPlaygroundTokens.vue.800211df.js";import{a as D}from"./index.35784224.js";import{a as V,r as k,o as a,i as C,m as P,u as o,c as m,ai as T,l,x as B}from"./entry.e9fe8c8c.js";import"./ProseH4.296c770e.js";import"./ProseCodeInline.edbaba80.js";import"./Badge.42221b73.js";import"./ContentSlot.391f2175.js";import"./ProseP.052d3a88.js";const I={class:"component-playground-data"},j=V({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const n=D(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=s=>e.value=s;return(s,c)=>{const u=b,_=x,i=v,f=g;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":c[0]||(c[0]=y=>T(n)?n.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):l("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):l("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):l("",!0)])}}});const z=B(j,[["__scopeId","data-v-ff75821c"]]);export{z as default};