import {Outlet, useNavigate} from 'react-router-dom';
import { Header } from '../header/Header';
import { useGetMeQuery, useLogoutMutation } from '@/app/api/auth/auth';

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
  const { data } = useGetMeQuery();

  const headerData =
    data && !('success' in data)
      ? {
          name: data.name,
          email: data.email,
          avatar: data.avatar,
        }
      : null;

  console.log(headerData);
  return (
    <>
      <Header data={headerData} logout={logoutHandler} />
      <Outlet />
    </>
  );
};
