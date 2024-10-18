
import s from './CreatePass.module.scss';
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {CreateNewPassFormType, CreatePassForm} from "@/components/auth/createpass-form";
import {useNavigate, useParams} from "react-router-dom";
import {useResetPasswordMutation} from "@/app/api/auth/auth";


export const CreatePass = () => {


  const { token } = useParams<{token: string}>();
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()


  const onSubmit = async ({ password }: CreateNewPassFormType) => {
    if (!token) {
      alert('Token is not provided')
    return
  }
    await resetPassword({token, password}).unwrap()
    alert('The password has been changed')
    navigate('/sign-in')
  }


  return (
    <div className={s.container}>
      <Card>
        <section className={s.content}>
          <Typography as="h1" variant="h1" className={s.title}>
            Create New Password
          </Typography>
          <CreatePassForm onSubmit={onSubmit} />
        </section>
      </Card>
    </div>
  );
};
