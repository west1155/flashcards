import {useForm} from 'react-hook-form';

import { Button } from '../../ui/button';
import { TextField } from '../../ui/textField';


type FormValues = {
    email: string
    password: string
}

export const LoginForm = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })



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
            <Button type="submit">Submit</Button>
        </form>
    );
};
