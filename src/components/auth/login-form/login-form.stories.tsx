import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './login-form'
import {useForm} from "react-hook-form";


type FormValues = {
    email: string;
    password: string;
    rememberMe: boolean;
};

const meta = {
    title: 'Auth/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

const {
    formState: { errors },
} = useForm<FormValues>()

console.log('errors: ', errors)


export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
