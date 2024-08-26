import { jsx as _jsx } from "react/jsx-runtime";
export const IconWrapper = ({ backgroundColor = 'var(--color-neutral-light-50)', color: colorProp, icon, size: sizeProp, ...restProps }) => {
    const color = colorProp ? colorProp : 'currentColor';
    const size = sizeProp ? `${sizeProp}px` : '24px';
    return (_jsx("span", { "aria-hidden": 'true', role: 'img', style: {
            '--color-bg-icon': backgroundColor,
            color: color,
            display: 'inline-flex',
            fontSize: 'inherit',
            height: size,
            width: size,
        }, ...restProps, children: icon }));
};
