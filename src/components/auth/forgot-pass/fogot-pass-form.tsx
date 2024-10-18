import { FC } from 'react'

import { clsx } from 'clsx'

import s from './forgot-pass.module.scss'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import {ForgotPasswordFormType, useForgotPassword} from "@/components/auth/forgot-pass/useFogot-pass";
import {FormTextField} from "@/components/ui/controlled/form-textfield/form-textfield";

type PropsType = {
    onSubmit: (data: ForgotPasswordFormType) => void
    className?: string
}

export const ForgotPasswordForm: FC<PropsType> = ({ onSubmit, className }) => {
    const classes = clsx(s.form, className)

    const { control, handleSubmit } = useForgotPassword()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes}>
            <FormTextField control={control} name="email" label="Email" />
            <Typography variant="body2" className={s.information}>
                Enter your email address and we will send you further instructions
            </Typography>
            <Button fullWidth>Send Instructions</Button>
        </form>
    )
}
