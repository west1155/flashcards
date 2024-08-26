import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Checkbox } from '../checkbox';
const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};
export default meta;
export const Unchecked = {
    args: {
        checked: false,
        label: 'Click me',
        onChange: () => { },
    },
};
export const Checked = {
    args: {
        checked: true,
        label: 'Click me',
        onChange: () => { },
    },
};
export const DisabledChecked = {
    args: {
        checked: true,
        label: 'Click me',
        disabled: true,
        onChange: () => { },
    },
};
export const DisabledUnchecked = {
    args: {
        checked: false,
        label: 'Click me',
        disabled: true,
        onChange: () => { },
    },
};
export const Controlled = {
    args: {
        checked: false,
        label: 'Click here',
        onChange: () => { },
    },
    render: args => {
        const [checked, setChecked] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Checkbox, { ...args, checked: checked, onChange: () => setChecked(!checked) }), "Current value: ", checked.toString()] }));
    },
};
