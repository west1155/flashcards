import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  useRef,
} from "react";

import { GlobalSvgSelector } from "@/assets/icons/global/GlobalSvgSelector";
import { Button } from "@/components/ui/button";

type FileUploaderProps<T extends ElementType = "button"> = {
  accept?: string;
  as?: T;
  asProps?: T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : any;
  children?: ReactNode;
  className?: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & Omit<ComponentPropsWithoutRef<T>, "onChange">;

export const FileUploader = <T extends ElementType = "button">(
  props: FileUploaderProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof FileUploaderProps<T>>,
) => {
  const {
    accept = "",
    as: WrapperComponent = Button,
    asProps = { variant: "secondary" },
    children,
    name,
    onChange,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <WrapperComponent
        onClick={() => inputRef?.current?.click()}
        {...asProps}
        {...rest}
      >
        {children ?? <GlobalSvgSelector id={"edit"} />}
      </WrapperComponent>
      <input
        accept={accept}
        name={name}
        onChange={onChange}
        ref={inputRef}
        style={{ display: "none" }}
        type={"file"}
      />
    </>
  );
};
