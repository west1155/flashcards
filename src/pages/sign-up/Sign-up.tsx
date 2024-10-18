import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import s from './sign-up.module.scss';
import {RegistrationForm} from "../../components/auth/registration-form";
import {useSignupMutation} from "@/app/api/auth/auth";
import {SignUpFormProps} from "@/components/auth/registration-form/signup";
import { useNavigate } from 'react-router-dom';



export const SignUp = () => {
    const [signUp] = useSignupMutation()
    const navigate = useNavigate();

    const signUpHandler = async ({email, password}: SignUpFormProps) => {
        await signUp({email, password}).unwrap()
        navigate('/sign-in')
    };

    return (
        <div className={s.root}>
            <Card>
                <section className={s.content}>
                    <Typography as="h2" variant="body1">
                        Sign Up
                    </Typography>
                    <RegistrationForm onSubmit={signUpHandler}  />
                    <div className={s.login}>
                        <Typography variant="body2">Already have an account?</Typography>
                        <Button as={'a'} variant="link" className={s.signIn}>
                            Sign In
                        </Button>
                    </div>
                </section>
            </Card>
        </div>
    )
}