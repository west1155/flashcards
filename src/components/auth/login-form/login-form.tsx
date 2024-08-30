

import { Button } from '../../ui/button';

import {DevTool} from "@hookform/devtools";
import {FormCheckbox} from "../../ui/controlled/form-checkbox/form-checkbox";
import {FormTextField} from "../../ui/controlled/form-textfield/form-textfield";
import {useSignIn} from "./singin";

export const LoginForm = () => {

    const {handleSubmit, control } = useSignIn()

    const onSubmit = handleSubmit((data) => {
        console.log({...data})
    })


    return (
      <form onSubmit={onSubmit}>
        <DevTool control={control} />
        <FormTextField control={control} name={'email'} label={'Email'} />
        <FormTextField control={control} name={'password'} label="Password" type={'password'} />
        <FormCheckbox control={control} checked={true} name={'rememberMe'} label="Remember Me" />
        <Button type="submit">Submit</Button>
      </form>
    );
};
