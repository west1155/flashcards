import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Typography } from '../typography';
export const Checkbox = ({ checked, label, disabled, id, onChange, className }) => {
    const classes = {
        root: `Label ${disabled ? 'disabled' : ''} ${className}`,
        checkbox: 'Checkbox',
    };
    return (_jsxs(Typography, { as: "label", className: classes.root, children: [_jsx(CheckboxRadix.Root, { id: id, className: classes.checkbox, onCheckedChange: (checked) => onChange(checked === true), disabled: disabled, children: _jsx(CheckboxRadix.Indicator, { className: "Indicator", forceMount: true, children: (checked && _jsx(CheckIcon, {})) || _jsx(CheckIcon, { color: 'transparent' }) }) }), label && _jsx(Typography, { children: label })] }));
};
