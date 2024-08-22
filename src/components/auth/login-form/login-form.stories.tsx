import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './login-form'
import {useForm} from "react-hook-form";

const {
    control,
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormValues>()

console.log('errors: ', errors)

const meta = {
    title: 'Auth/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>


export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
