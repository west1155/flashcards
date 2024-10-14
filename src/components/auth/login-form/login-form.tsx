

import { Button } from '../../ui/button';

import {DevTool} from "@hookform/devtools";
import {FormCheckbox} from "../../ui/controlled/form-checkbox/form-checkbox";
import {FormTextField} from "../../ui/controlled/form-textfield/form-textfield";
import {FormValues, useSignIn} from "./singin";
import {clsx} from "clsx";

import s from './login-form.module.scss'
import {PropsWithChildren} from "react";

type Props = {
    onSubmit: (data: FormValues) => void
    className?: string
} & PropsWithChildren

export const LoginForm = ({onSubmit, className}: Props) => {

    const classes = clsx(s.form, className)

    const {handleSubmit, control } = useSignIn()

    return (
      <form onSubmit={handleSubmit(onSubmit)} className={classes}>
        <DevTool control={control} />
        <FormTextField control={control} name={'email'} label={'Email'} />
        <FormTextField control={control} name={'password'} label="Password" type={'password'} />
        <FormCheckbox control={control} checked={true} name={'rememberMe'} label="Remember Me" />
        <Button type="submit">Submit</Button>
      </form>
    );
};
