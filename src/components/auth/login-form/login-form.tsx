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

    return (
        <form onSubmit={onSubmit}>
            <TextField
                {...register('email', { required: 'Email is required' })}
                label='Email'
                error={errors.email?.message}
            />
            <TextField
                {...register('password', { required: 'Password is required' })}
                label='Password'
                type={'password'}
                error={errors.password?.message}
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
