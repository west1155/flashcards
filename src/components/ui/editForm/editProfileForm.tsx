import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './editProfileForm.module.scss'

import { EditProfileFormProps, useEditProfile } from './'

import { Button } from '@/components/ui/button'
import {FormTextField} from "../controlled/form-textfield/form-textfield";

type Props = {
    onSubmit: (data: EditProfileFormProps) => void
    className?: string
    initialValues?: EditProfileFormProps
} & PropsWithChildren

export const EditProfileForm = ({ onSubmit, className, initialValues }: Props) => {
    const classes = clsx(s.form, className)

    const { control, handleSubmit } = useEditProfile(initialValues)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes}>
            <FormTextField
                control={control}
                name={'name'}
                label={'Nickname'}
                className={s.nickName}
            />
            <Button fullWidth className={s.button}>
                Save Changes
            </Button>
        </form>
    )
}
