import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {stringSchema} from "../../../schemas/zod_schema";
import {z} from "zod";

const createNewPasswordSchema = z.object({
    password: stringSchema,
})

export type CreateNewPassFormType = z.infer<typeof createNewPasswordSchema>

export const useCreateNewPassword = () => {
    return useForm<CreateNewPassFormType>({
        resolver: zodResolver(createNewPasswordSchema),
        defaultValues: { password: '' },
    })
}
