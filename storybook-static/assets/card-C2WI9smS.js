import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as _}from"./index-CTjT7uj6.js";import{c as f}from"./clsx-B-dksMZM.js";const m=({backgroundColor:t="var(--color-neutral-light-50)",color:o,icon:s,size:e,...c})=>{const l=o||"currentColor",r=e?`${e}px`:"24px";return n.jsx("span",{"aria-hidden":"true",role:"img",style:{"--color-bg-icon":t,color:l,display:"inline-flex",fontSize:"inherit",height:r,width:r},...c,children:s})},N=t=>{const{svgProps:o,...s}=t;return n.jsx(m,{icon:n.jsxs("svg",{fill:"none",height:"100%",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",...o,children:[n.jsxs("g",{clipPath:"url(#prefix__clip0_124_23318)",children:[n.jsx("path",{d:"M10 6h4v12h-4z",fill:"var(--color-bg-icon)"}),n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",fill:"currentColor"})]}),n.jsx("defs",{children:n.jsx("clipPath",{id:"prefix__clip0_124_23318",children:n.jsx("path",{d:"M0 0h24v24H0z",fill:"#fff"})})})]}),...s})},v="_box_f53vn_1",j="_info_f53vn_7",g="_title_f53vn_12",u="_content_f53vn_29",i={box:v,info:j,title:g,content:u},C=_.forwardRef((t,o)=>{const{as:s="div",children:e,className:c,contentClassName:l,iconComponent:r,title:h,variant:x,...d}=t,p=x==="info",a={box:f(i.box,p&&i.info,c),content:f(i.content,l),icon:i.icon,title:i.title};return n.jsxs(s,{className:a.box,ref:o,...d,children:[h&&n.jsxs("h3",{className:a.title,children:[r,h]}),n.jsx("div",{className:a.content,children:e})]})});C.__docgenInfo={description:"",methods:[],displayName:"Card"};export{C,N as I};