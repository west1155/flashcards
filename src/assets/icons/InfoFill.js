import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconWrapper } from '../IconWrapper';
export const InfoFill = (allProps) => {
    const { svgProps: props, ...restProps } = allProps;
    return (_jsx(IconWrapper, { icon: _jsxs("svg", { fill: 'none', height: '100%', viewBox: '0 0 24 24', width: '100%', xmlns: 'http://www.w3.org/2000/svg', ...props, children: [_jsxs("g", { clipPath: 'url(#prefix__clip0_124_23318)', children: [_jsx("path", { d: 'M10 6h4v12h-4z', fill: 'var(--color-bg-icon)' }), _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z', fill: 'currentColor' })] }), _jsx("defs", { children: _jsx("clipPath", { id: 'prefix__clip0_124_23318', children: _jsx("path", { d: 'M0 0h24v24H0z', fill: '#fff' }) }) })] }), ...restProps }));
};
