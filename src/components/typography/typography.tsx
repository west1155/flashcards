import {ComponentPropsWithoutRef, ElementType} from "react";
import clsx from "clsx";
import s from "./typography.module.scss";

export type TypographyProps<T extends ElementType = 'p'> = {
    as?: T
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'body1'
        | 'body2'
        | 'caption'
        | 'overline'
        | 'button'
        | 'link'
} & ComponentPropsWithoutRef<T>


export const Typography = <T extends ElementType>
    (props: TypographyProps<T> & ComponentPropsWithoutRef<T>) =>
{
    const { variant = 'body1', className, as: Component = 'p', ...rest } = props
    const classNames = clsx(s[variant], className)

    return <Component className={classNames} {...rest} />
}