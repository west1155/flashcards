import { Outlet } from "react-router-dom";

import s from "./layout.module.scss";

import { Header } from "../header/Header";

export const Layout = () => {
  return (
    <>
      <Header logout={() => {}} />
      <div className={s.container}>
        <div className={s.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
