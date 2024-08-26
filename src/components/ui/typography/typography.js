import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import s from "./typography.module.scss";
export const Typography = (props) => {
    const { variant = 'body1', className, as: Component = 'p', ...rest } = props;
    const classNames = clsx(s[variant], className);
    return _jsx(Component, { className: classNames, ...rest });
};
