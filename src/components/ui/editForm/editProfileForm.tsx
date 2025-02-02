/*
import { PropsWithChildren } from "react";
import { clsx } from "clsx";
import s from "./editProfileForm.module.scss";
import { EditProfileFormProps, useEditProfile } from "./";
import { Button } from "@/components/ui/button";

type Props = {
  onSubmit: (data: EditProfileFormProps) => void;
  className?: string;
  initialValues?: EditProfileFormProps;
} & PropsWithChildren;

export const EditProfileForm = ({
  onSubmit,
  className,
  initialValues,
}: Props) => {
  const classes = clsx(s.form, className);

  return (
    <form onSubmit={() => {}} className={classes}>
      <Button fullWidth className={s.button}>
        Save Changes
      </Button>
    </form>
  );
};
*/
