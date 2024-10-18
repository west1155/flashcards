import { Card } from '../../../components/ui/card';
import { Typography } from '../../../components/ui/typography';
import { Button } from '../../../components/ui/button';
import s from './FogotPass.module.scss';
import {ForgotPasswordForm} from "@/components/auth/forgot-pass/fogot-pass-form";
import {ForgotPasswordFormType} from "@/components/auth/forgot-pass/useFogot-pass";
import {useRecoverPasswordMutation} from "@/app/api/auth/auth";
import {useState} from "react";
import {CheckEmail} from "@/pages/password_recovery/check_email/CheckEmail";

export const ForgotPass = () => {


  const [recoverPassword] = useRecoverPasswordMutation()
  const [success, setSuccess] = useState(false)

  const onSubmit = async ({ email }: ForgotPasswordFormType) => {
      await recoverPassword({email}).unwrap()
        setSuccess(true)
  }

  if (success) return <CheckEmail />

  return (
    <div className={s.container}>
      <Card>
        <section className={s.content}>
          <Typography as="h2" variant="h2">
            Forgot your password?
          </Typography>
          <ForgotPasswordForm onSubmit={onSubmit} className={s.form} />
          <div className={s.register}>
            <Typography variant="body2">Did you remember your password?</Typography>
            <Button className={s.signIn}>Try logging in</Button>
          </div>
        </section>
      </Card>
    </div>
  );
};
