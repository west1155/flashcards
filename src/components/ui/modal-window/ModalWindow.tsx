import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";

import { GlobalSvgSelector } from "@/assets/icons/global/GlobalSvgSelector";
import { Typography } from "@/components/ui/typography";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import s from "./modal-window.module.scss";

export type ModalProps = {
  children: ReactNode;
  classTypography?: string;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title?: string;
} & Omit<
  ComponentPropsWithoutRef<typeof DialogPrimitive.Root>,
  "onOpenChange" | "open"
>;
export const ModalWindow = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ModalProps
>(({ children, classTypography, title, ...props }, ref) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={s.overlay} />
        <DialogPrimitive.Content className={s.content} ref={ref}>
          <div className={s.header}>
            <DialogPrimitive.Title asChild>
              <Typography as={"h2"} className={classTypography} variant={"h2"}>
                {title}
              </Typography>
            </DialogPrimitive.Title>
            <DialogPrimitive.Close className={s.closeButton}>
              <GlobalSvgSelector id={"close_logo"} />
            </DialogPrimitive.Close>
          </div>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
});

ModalWindow.displayName = "ModalWindow";
