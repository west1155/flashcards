import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { stringSchema } from '../../../schemas/zod_schema'

const editProfileSchema = z.object({
    name: stringSchema,
})

export type EditProfileFormProps = z.infer<typeof editProfileSchema>

export const useEditProfile = (initialValues: EditProfileFormProps = { name: '' }) => {
    return useForm<EditProfileFormProps>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: initialValues,
    })
}
