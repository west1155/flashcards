// import { useForm } from 'react-hook-form'
//
// import { Button } from '../../ui/button'
// import { TextField } from '../../ui/text-field'
//
// type FormValues = {
//     email: string
//     password: string
// }
//
// export const LoginForm = () => {
//     const { register, handleSubmit } = useForm<FormValues>()
//
//     const onSubmit = handleSubmit((data) => {
//         console.log(data)
//     })
//
//     return (
//         <form onSubmit={onSubmit}>
//             <TextField {...register('email')} label={'Email'} />
//             <TextField {...register('password')} label={'Password'} />
//             <Button type="submit">Submit</Button>
//         </form>
//     )
// }