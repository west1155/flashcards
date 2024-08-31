import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

type FormValues = z.infer<typeof loginSchema>

export const useSignUp = () => {
    return useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

}