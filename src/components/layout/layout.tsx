import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { useGetMeQuery } from '@/app/api/auth/auth';

const logout = () => {};

export const Layout = () => {
  const { data } = useGetMeQuery();

  const headerData =
    data && !('success' in data)
      ? {
          name: data.name,
          email: data.email,
          avatar: data.avatar,
        }
      : null;


  console.log(headerData)
  return (
    <>
      <Header data={headerData} logout={logout} />
      <Outlet />
    </>
  );
};
