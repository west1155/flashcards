import { LoginForm } from '../../components/auth/login-form/login-form';
import s from './sign-in.module.scss';
import { Typography } from '../../components/ui/typography';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { useGetMeQuery, useLoginMutation } from '@/app/api/auth/auth';
import { FormValues } from '@/components/auth/login-form/singin';
import {Link, useNavigate} from 'react-router-dom';


export const SignIn = () => {
  const [login] = useLoginMutation();
  const { data: me } = useGetMeQuery();
  const navigate = useNavigate();


  const loginHandler = async (data: FormValues) => {
    try {
      const response = await login({ email: data.email, password: data.password, rememberMe: data.rememberMe }).unwrap();
      console.log('Logged in successfully:', response);
      navigate('/')
    } catch (e: any) {
      console.error(e.data.message);
    }
  };

  me ? console.log('User is logged in:', me) : console.log('User is not logged in');

  return (
    <div className={s.root}>
      <Card>
        <section className={s.content}>
          <Typography as="h2" variant="body1">
            Sign In
          </Typography>
          <LoginForm onSubmit={loginHandler} />
          <div className={s.register}>
            <Typography variant="body2">Don&apos;t have an account?</Typography>
            <Link to="/sign-up">
              <Button variant="link" className={s.signUp}>
                Sign Up
              </Button>
            </Link>
          </div>
        </section>
      </Card>
    </div>
  );
};
