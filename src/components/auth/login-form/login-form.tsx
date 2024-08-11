import {Controller, useForm} from 'react-hook-form'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/textField'
import {Checkbox} from "../../ui/checkbox";
import {useState} from "react";

type FormValues = {
    email: string
    password: string
    checkbox: boolean
}

export const LoginForm = () => {
    const { register, handleSubmit, control } = useForm<FormValues>();
    const [isChecked, setIsChecked] = useState(false);

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <form onSubmit={onSubmit}>
            <TextField {...register('email')} label={'Email'} />
            <TextField {...register('password')} label={'Password'} />
            <Controller
                name="checkbox"
                control={control}
                render={({ field }) => (
                    <Checkbox
                        checked={isChecked}
                        onChange={(checked) => {
                            setIsChecked(checked);
                            field.onChange(checked); // Update react-hook-form state
                        }}
                        label={'Remember me'}
                    />
                )}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}