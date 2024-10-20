import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../header/Header';
import {useLogoutMutation} from '@/app/api/auth/auth';


export const Layout = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await logout().unwrap();
      console.log('Logged out successfully:', response);
      navigate('/sign-in');
    } catch (e: any) {
      console.error(e.data.message);
    }
  };
  return (
    <>
      <Header logout={logoutHandler} />
      <Outlet />
    </>
  );
};
