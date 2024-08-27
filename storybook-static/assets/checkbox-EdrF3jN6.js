import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{u as O,P as M}from"./index-OU0nE3BN.js";import{r as z}from"./index-D0cFg0-4.js";import{T as R}from"./typography-DVgGQaT3.js";function D(e,t=[]){let n=[];function r(s,d){const u=c.createContext(d),a=n.length;n=[...n,d];function i(f){const{scope:l,children:x,...C}=f,k=(l==null?void 0:l[e][a])||u,v=c.useMemo(()=>C,Object.values(C));return m.jsx(k.Provider,{value:v,children:x})}function h(f,l){const x=(l==null?void 0:l[e][a])||u,C=c.useContext(x);if(C)return C;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${s}\``)}return i.displayName=s+"Provider",[i,h]}const o=()=>{const s=n.map(d=>c.createContext(d));return function(u){const a=(u==null?void 0:u[e])||s;return c.useMemo(()=>({[`__scope${e}`]:{...u,[e]:a}}),[u,a])}};return o.scopeName=e,[r,$(o,...t)]}function $(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const d=r.reduce((u,{useScope:a,scopeName:i})=>{const f=a(s)[`__scope${i}`];return{...u,...f}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])}};return n.scopeName=t.scopeName,n}function E(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function w(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function B({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=W({defaultProp:t,onChange:n}),s=e!==void 0,d=s?e:r,u=w(n),a=c.useCallback(i=>{if(s){const f=typeof i=="function"?i(e):i;f!==e&&u(f)}else o(i)},[s,e,o,u]);return[d,a]}function W({defaultProp:e,onChange:t}){const n=c.useState(e),[r]=n,o=c.useRef(r),s=w(t);return c.useEffect(()=>{o.current!==r&&(s(r),o.current=r)},[r,o,s]),n}function K(e){const t=c.useRef({value:e,previous:e});return c.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var y=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};function q(e){const[t,n]=c.useState(void 0);return y(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const s=o[0];let d,u;if("borderBoxSize"in s){const a=s.borderBoxSize,i=Array.isArray(a)?a[0]:a;d=i.inlineSize,u=i.blockSize}else d=e.offsetWidth,u=e.offsetHeight;n({width:d,height:u})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function X(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var j=e=>{const{present:t,children:n}=e,r=F(t),o=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),s=O(r.ref,Z(o));return typeof n=="function"||r.isPresent?c.cloneElement(o,{ref:s}):null};j.displayName="Presence";function F(e){const[t,n]=c.useState(),r=c.useRef({}),o=c.useRef(e),s=c.useRef("none"),d=e?"mounted":"unmounted",[u,a]=X(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const i=g(r.current);s.current=u==="mounted"?i:"none"},[u]),y(()=>{const i=r.current,h=o.current;if(h!==e){const l=s.current,x=g(i);e?a("MOUNT"):x==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(h&&l!==x?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),y(()=>{if(t){const i=f=>{const x=g(r.current).includes(f.animationName);f.target===t&&x&&z.flushSync(()=>a("ANIMATION_END"))},h=f=>{f.target===t&&(s.current=g(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:c.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}function g(e){return(e==null?void 0:e.animationName)||"none"}function Z(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var P="Checkbox",[G,ie]=D(P),[J,Q]=G(P),I=c.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:s,required:d,disabled:u,value:a="on",onCheckedChange:i,...h}=e,[f,l]=c.useState(null),x=O(t,p=>l(p)),C=c.useRef(!1),k=f?!!f.closest("form"):!0,[v=!1,S]=B({prop:o,defaultProp:s,onChange:i}),U=c.useRef(v);return c.useEffect(()=>{const p=f==null?void 0:f.form;if(p){const N=()=>S(U.current);return p.addEventListener("reset",N),()=>p.removeEventListener("reset",N)}},[f,S]),m.jsxs(J,{scope:n,state:v,disabled:u,children:[m.jsx(M.button,{type:"button",role:"checkbox","aria-checked":b(v)?"mixed":v,"aria-required":d,"data-state":L(v),"data-disabled":u?"":void 0,disabled:u,value:a,...h,ref:x,onKeyDown:E(e.onKeyDown,p=>{p.key==="Enter"&&p.preventDefault()}),onClick:E(e.onClick,p=>{S(N=>b(N)?!0:!N),k&&(C.current=p.isPropagationStopped(),C.current||p.stopPropagation())})}),k&&m.jsx(Y,{control:f,bubbles:!C.current,name:r,value:a,checked:v,required:d,disabled:u,style:{transform:"translateX(-100%)"}})]})});I.displayName=P;var T="CheckboxIndicator",_=c.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,s=Q(T,n);return m.jsx(j,{present:r||b(s.state)||s.state===!0,children:m.jsx(M.span,{"data-state":L(s.state),"data-disabled":s.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});_.displayName=T;var Y=e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,s=c.useRef(null),d=K(n),u=q(t);return c.useEffect(()=>{const a=s.current,i=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(i,"checked").set;if(d!==n&&f){const l=new Event("click",{bubbles:r});a.indeterminate=b(n),f.call(a,b(n)?!1:n),a.dispatchEvent(l)}},[d,n,r]),m.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:b(n)?!1:n,...o,tabIndex:-1,ref:s,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function b(e){return e==="indeterminate"}function L(e){return b(e)?"indeterminate":e?"checked":"unchecked"}var V=I,H=_;function ee(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var te=["color"],A=c.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=ee(e,te);return c.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});const ue=({checked:e,label:t,disabled:n,id:r,onChange:o,className:s})=>{const d={root:`Label ${n?"disabled":""} ${s}`,checkbox:"Checkbox"};return m.jsxs(R,{as:"label",className:d.root,children:[m.jsx(V,{id:r,className:d.checkbox,onCheckedChange:u=>o(u===!0),disabled:n,children:m.jsx(H,{className:"Indicator",forceMount:!0,children:e&&m.jsx(A,{})||m.jsx(A,{color:"transparent"})})}),t&&m.jsx(R,{children:t})]})};export{ue as C};
