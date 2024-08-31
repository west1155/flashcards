

import { Button } from '../../ui/button';

import {DevTool} from "@hookform/devtools";
import {FormTextField} from "../../ui/controlled/form-textfield/form-textfield";
import {useSignUp} from "./signup";

export const RegistrationForm = () => {

    const {handleSubmit, control } = useSignUp()

    const onSubmit = handleSubmit((data) => {
        console.log({...data})
    })


    return (
        <form onSubmit={onSubmit}>
            <DevTool control={control} />
            <FormTextField control={control} name={'email'} label={'Email'} />
            <FormTextField control={control} name={'password'} label="Password" type={'password'} />
            <FormTextField control={control} name={'password'} label={'Repeat Password'} type={'password'} />
            <Button type="submit">Register</Button>
        </form>
    );
};
