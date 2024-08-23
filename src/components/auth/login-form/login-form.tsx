import {useController, useForm} from 'react-hook-form';

import { Button } from '../../ui/button';
import { TextField } from '../../ui/textField';
import {Checkbox} from "../../ui/checkbox";


type FormValues = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {
    const { handleSubmit, register,
        control,
        formState: { errors } } = useForm<FormValues>({
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

    const emailRegex =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

    return (
        <form onSubmit={onSubmit}>
            <TextField
                {...register('email', {
                    required: 'Email is required',
                    pattern: { value: emailRegex, message: 'Invalid email' }
                })}
                label='Email'
                error={errors.email?.message}
                isInvalid={!!errors.email}
            />
            <TextField
                {...register('password', {
                    required: 'Password required',
                    minLength: { value: 6, message: 'Password must be at least 6 characters'}
                })}
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
