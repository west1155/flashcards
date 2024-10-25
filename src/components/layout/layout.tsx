import { Outlet, useNavigate } from "react-router-dom";

import { useLogoutMutation } from "@/app/api/auth/auth";

import s from "./layout.module.scss";

import { Header } from "../header/Header";

export const Layout = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await logout().unwrap();

      navigate("/sign-in");
    } catch (e: any) {
      console.error(e.data.message);
    }
  };

  return (
    <>
      <Header logout={logoutHandler} />
      <div className={s.container}>
        <div className={s.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
