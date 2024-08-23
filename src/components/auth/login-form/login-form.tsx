import {useController, useForm} from 'react-hook-form';

import { Button } from '../../ui/button';
import { TextField } from '../../ui/textField';
import {Checkbox} from "../../ui/checkbox";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'


type FormValues = {
    email: string
    password: string
    rememberMe: boolean
}


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

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

    const { field: { value, onChange } } = useController({
        name: 'rememberMe',
        control,
        defaultValue: false,
    });

    return (
        <form onSubmit={onSubmit}>
            <TextField
                {...register('email')}
                label='Email'
                error={errors.email?.message}
                isInvalid={!!errors.email}
            />
            <TextField
                {...register('password')}
                label='Password'
                type={'password'}
                error={errors.password?.message}
                isInvalid={!!errors.email}
            />
            <Checkbox
                checked={value}
                onChange={onChange}
                label='Remember Me'
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};
