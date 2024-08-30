
import {LoginForm} from "../../components/auth/login-form/login-form";
import s from './sign-in.module.scss'
import {Typography} from "../../components/ui/typography";
import {Card} from "../../components/ui/card";
import {Button} from "../../components/ui/button";

export const SignIn = () => {
  return (
    <div className={s.root}>
        <Card>
            <section className={s.content}>
                <Typography as="h2" variant="body1">
                Sign In
                </Typography>
                <LoginForm />
                <div className={s.register}>
                <Typography variant="body2">Don&apos;t have an account?</Typography>
                <Button variant="link" className={s.signUp}>
                    Sign Up
                </Button>
                </div>
            </section>
        </Card>
    </div>
  );
};
