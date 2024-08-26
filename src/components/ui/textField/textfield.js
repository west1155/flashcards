import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as Label from '@radix-ui/react-label';
import s from './textfield.module.scss';
export const TextField = React.forwardRef(({ label, isInvalid, isRequired, variant, error, ...props }, ref) => {
    return (_jsxs("div", { className: s['textfield-container'], children: [_jsx(Label.Root, { className: s['textfield-label'], children: label }), _jsx("input", { ref: ref, className: `${s['textfield-input']} ${variant} ${isInvalid ? 'invalid' : ''}`, required: isRequired, ...props }), isInvalid && error && _jsx("span", { className: s['textfield-error'], children: error })] }));
});
TextField.displayName = 'TextField'; // Add this line to avoid naming issues in development
