import {Typography} from "../../../components/ui/typography";
import s from './CheckEmail.module.scss'
import Card from "../../../components/ui/card/card";
import {Button} from "../../../components/ui/button";



export const CheckEmail = () => {
    return (
        <div className={s.container}>
            <Card>
                <div className={s.content}>
                    <Typography as="h1" variant="h1" className={s.title}>
                        Check Email
                    </Typography>
                    <div className={s.imageContainer}>
                        <div className={s.image}></div>
                    </div>
                    <Typography variant="body2" className={s.notification}>
                        We’ve sent an Email with instructions to email
                    </Typography>
                    <Button fullWidth>
                        Back to Sign in
                    </Button>
                </div>
            </Card>
        </div>
    )
}