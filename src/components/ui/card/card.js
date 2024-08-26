import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, } from 'react';
import { clsx } from 'clsx';
import s from './card.module.scss';
const Card = forwardRef((props, ref) => {
    const { as: Component = 'div', children, className, contentClassName, iconComponent, title, variant, ...rest } = props;
    const isInfo = variant === 'info';
    const classNames = {
        box: clsx(s.box, isInfo && s.info, className),
        content: clsx(s.content, contentClassName),
        icon: s.icon,
        title: s.title,
    };
    return (_jsxs(Component, { className: classNames.box, ref: ref, ...rest, children: [title && (_jsxs("h3", { className: classNames.title, children: [iconComponent, title] })), _jsx("div", { className: classNames.content, children: children })] }));
});
export default Card;
