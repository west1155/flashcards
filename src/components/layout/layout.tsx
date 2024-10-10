import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import s from './layout.module.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
    </>
  );
};
