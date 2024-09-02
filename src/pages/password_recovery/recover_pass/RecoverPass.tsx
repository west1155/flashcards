
import s from './RecoverPass.module.scss';
import {Card} from "../../../components/ui/card";
import {Typography} from "../../../components/ui/typography";
import {Button} from "../../../components/ui/button";

export const RecoverPass = () =>
{
    return (
        <div className={s.container}>
            <Card>
                <section className={s.content}>
                    <Typography as="h2" variant="h2">
                        Forgot your password?
                    </Typography>
                    <div>Fogot Form</div>
                    <div className={s.register}>
                        <Typography variant="body2">Did you remember your password?</Typography>
                        <Button variant="link" className={s.signIn}>
                            Try logging in
                        </Button>
                    </div>
                </section>
            </Card>
        </div>
    )
}