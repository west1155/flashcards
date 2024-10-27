import { Link } from "react-router-dom";

import { ProfileInfoProps } from "@/components/header/profile-info/profile-info";

import s from "./Header.module.scss";

import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import flashscoreLogo from "../../assets/images/flashcards.webp";
import { Button } from "../ui/button";

type Props = {
  data?: ProfileInfoProps | null;
  logout: () => void;
};

export const Header = ({ data, logout }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.link}>
          <div className={s.logo}>
            <img
              alt={"flashscore logo"}
              height={"50"}
              src={flashscoreLogo}
              width={"147"}
            />
          </div>
        </div>
        {data ? (
          <div className={s.user}>
            <div className={s.name}>{data.name || data.email}</div>
            <div className={s.avatar}>
              <GlobalSvgSelector id={"avatar"} />
            </div>
            <Button onClick={logout}>Log Out</Button>
          </div>
        ) : (
          <div className={s.user}>
            <Link to={"sign-in"}>
              <Button as={"a"}>Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
