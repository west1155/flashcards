import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const editProfileSchema = z.object({
})

export type EditProfileFormProps = z.infer<typeof editProfileSchema>

export const useEditProfile = (initialValues: EditProfileFormProps = { name: '' }) => {
    return useForm<EditProfileFormProps>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: initialValues,
    })
}
