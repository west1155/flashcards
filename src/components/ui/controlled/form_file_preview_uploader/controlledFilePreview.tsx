import { useState } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { GlobalSvgSelector } from "@/assets/icons/global/GlobalSvgSelector";
import { Button } from "@/components/ui/button";
import { ControlledFileUploader } from "@/components/ui/controlled/form-file_uploader/controlledFileUploader";
import { Typography } from "@/components/ui/typography";
import { clsx } from "clsx";

import s from "./controlledFilePreview.module.scss";

// @ts-ignore
import noCover from "./default-image.jpg";

type Props<T extends FieldValues> = {
  control: Control<T>;
  deleteCoverHandler: () => void;
  displayInlineError?: boolean;
  errorMessage: null | string;
  extraActions?: () => void;
  name: FieldPath<T>;
  preview: null | string;
};

export const ControlledPreviewFileUploader = <T extends FieldValues>(
  props: Props<T>,
) => {
  const {
    control,
    deleteCoverHandler,
    displayInlineError = false,
    errorMessage,
    extraActions,
    name,
    preview,
  } = props;

  const [open, setOpen] = useState(false);

  const imgClasses = clsx(s.image, preview && s.hover, open && s.open);

  const onClickHandler = () => {
    if (preview) {
      setOpen((prevState) => !prevState);
    }
  };

  const deleteHandler = () => {
    deleteCoverHandler();
    if (open) {
      setOpen(false);
    }
  };

  return (
    <div className={s.root}>
      <img
        alt={"img"}
        className={imgClasses}
        onClick={onClickHandler}
        src={preview ?? noCover}
      />
      {displayInlineError && errorMessage && (
        <Typography className={s.error} variant={"caption"}>
          {errorMessage}
        </Typography>
      )}
      <div className={s.previewControls}>
        {preview && (
          <Button onClick={deleteHandler} type={"button"} variant={"secondary"}>
            <GlobalSvgSelector id={"trash-bin"} />
            Delete Cover
          </Button>
        )}
        <ControlledFileUploader
          control={control}
          extraActions={extraActions}
          fullWidth={!preview}
          name={name}
          variant={"secondary"}
        >
          <div>Change Cover</div>
        </ControlledFileUploader>
      </div>
    </div>
  );
};
