import {useForm} from 'react-hook-form';

import { Button } from '../../ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import {DevTool} from "@hookform/devtools";
import {FormCheckbox} from "../../ui/controlled/form-checkbox/form-checkbox";
import {FormTextField} from "../../ui/controlled/form-textfield/form-textfield";


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
    const { handleSubmit, register,
        control,
        formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        },
    });
    const onSubmit = handleSubmit((data) => {
        console.log({...data})
    })


    return (
      <form onSubmit={onSubmit}>
        <DevTool control={control} />
        <FormTextField control={control} name={'email'} label={'Email'} />
        <FormTextField control={control} name={'password'} label="Password" type={'password'}
        />
        <FormCheckbox control={control} checked={true} name={'rememberMe'} label="Remember Me" />
        <Button type="submit">Submit</Button>
      </form>
    );
};
