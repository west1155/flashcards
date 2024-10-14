

import { Button } from '../../ui/button';
import {FormTextField} from "../../ui/controlled/form-textfield/form-textfield";
import {useSignUp} from "./signup";
import {PropsWithChildren} from "react";
import {clsx} from "clsx";
import s from "@/components/auth/login-form/login-form.module.scss";
import {useSignIn} from "@/components/auth/login-form/singin";


type FormValues = {
    email: string;
    password: string;
    confirmPassword: string;
};

type Props = {
    onSubmit: (data: any) => void
    className?: string
} & PropsWithChildren

export const RegistrationForm = ({onSubmit, className}: Props) => {

    const {control, handleSubmit} = useSignUp()
    const classes = clsx(s.form, className)



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormTextField control={control} name={'email'} label={'Email'} />
            <FormTextField control={control} name={'password'} label="Password" type={'password'} />
            <FormTextField control={control} name={'confirmPassword'} label={'Repeat Password'} type={'password'} />
            <Button type="submit">Register</Button>
        </form>
    );
};
