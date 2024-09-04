import {ElementType, forwardRef} from "react";
import {Button, ButtonProps} from "../button";
import {clsx} from "clsx";
import s from "./icon-button.module.scss";


type IconButtonProps<T extends ElementType = 'button'> = ButtonProps<T> & {
    icon: React.ReactNode;
    label: string;
};


export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, label, className, variant = 'primary', fullWidth, ...rest }) => {
        const classNames = clsx(s.iconButton, className);

        return (
            <Button
                variant={variant}
                fullWidth={fullWidth}
                className={classNames}
                {...rest}
            >
                <span className={s.icon}>{icon}</span>
                <span className={s.label}>{label}</span>
            </Button>
        );
    }
);