import {FC} from "react";
import {FormTextField} from "../../ui/controlled/form-textfield/form-textfield";
import {CreateNewPassFormType, useCreateNewPassword} from "./createpass";
import { Typography } from "../../ui/typography";
import {Button} from "../../ui/button";
import s from './createpass-form.module.scss'
import {clsx} from "clsx";

interface CreatePassFormProps {
    onSubmit: (data: CreateNewPassFormType) => void
    className? : string
}

export const CreatePassForm: FC<CreatePassFormProps> = ({onSubmit, className})  => {

    const classes = clsx(s.form, className)
    const { control, handleSubmit } = useCreateNewPassword()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes}>
            <Typography variant="body2" className={s.information}>
            <FormTextField control={control} name={'password'} label="Password" type={'password'}/>
                Enter new password and then sign in with it.
            </Typography>
            <Button fullWidth>Create New Password</Button>
        </form>

    )
}