import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import s from './sign-up.module.scss';



export const SignUp = () => {
    return (
        <div className={s.root}>
            <Card>
                <section className={s.content}>
                    <Typography as="h2" variant="body1">
                        Sign Up
                    </Typography>
                    <div>SignUpForm</div>
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