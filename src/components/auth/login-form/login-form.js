import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import { TextField } from '../../ui/textField';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from "@hookform/devtools";
import { FormCheckbox } from "../../ui/controlled/form-checkbox/form-checkbox";
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    rememberMe: z.boolean().default(false),
});
export const LoginForm = () => {
    const { handleSubmit, register, control, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        },
    });
    const onSubmit = handleSubmit((data) => {
        console.log({ ...data });
    });
    return (_jsxs("form", { onSubmit: onSubmit, children: [_jsx(DevTool, { control: control }), _jsx(TextField, { ...register('email'), label: "Email", error: errors.email?.message, isInvalid: !!errors.email }), _jsx(TextField, { ...register('password'), label: "Password", type: 'password', error: errors.password?.message, isInvalid: !!errors.email }), _jsx(FormCheckbox, { control: control, checked: true, name: 'rememberMe', label: "Remember Me" }), _jsx(Button, { type: "submit", children: "Submit" })] }));
};
