import { jsx as _jsx } from "react/jsx-runtime";
import s from './button.module.scss';
import clsx from "clsx";
export const Button = (props) => {
    const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props;
    const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className);
    return _jsx(Component, { className: classNames, ...rest });
};
