import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as U}from"./index-CTjT7uj6.js";import{C as j}from"./checkbox-EdrF3jN6.js";import"./index-OU0nE3BN.js";import"./index-D0cFg0-4.js";import"./typography-DVgGQaT3.js";import"./clsx-B-dksMZM.js";const y={title:"Components/Checkbox",component:j,tags:["autodocs"]},e={args:{checked:!1,label:"Click me",onChange:()=>{}}},r={args:{checked:!0,label:"Click me",onChange:()=>{}}},a={args:{checked:!0,label:"Click me",disabled:!0,onChange:()=>{}}},c={args:{checked:!1,label:"Click me",disabled:!0,onChange:()=>{}}},n={args:{checked:!1,label:"Click here",onChange:()=>{}},render:_=>{const[s,D]=U.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(j,{..._,checked:s,onChange:()=>D(!s)}),"Current value: ",s.toString()]})}};var t,d,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Click me',
    onChange: () => {}
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,m,i;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Click me',
    onChange: () => {}
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var k,C,g;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Click me',
    disabled: true,
    onChange: () => {}
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var u,p,b;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Click me',
    disabled: true,
    onChange: () => {}
  }
}`,...(b=(p=c.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,x,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Click here',
    onChange: () => {}
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return _jsxs(_Fragment, {
      children: [_jsx(Checkbox, {
        ...args,
        checked: checked,
        onChange: () => setChecked(!checked)
      }), "Current value: ", checked.toString()]
    });
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const z=["Unchecked","Checked","DisabledChecked","DisabledUnchecked","Controlled"];export{r as Checked,n as Controlled,a as DisabledChecked,c as DisabledUnchecked,e as Unchecked,z as __namedExportsOrder,y as default};
