import { FC, useState } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { ControlledPreviewFileUploader } from "@/components/ui/controlled/form_file_preview_uploader/controlledFilePreview";
import { FormCheckbox } from "@/components/ui/controlled/form-checkbox/form-checkbox";
import { FormTextField } from "@/components/ui/controlled/form-textfield/form-textfield";
import {
  DeckFormType,
  usePackForm,
} from "@/pages/decks/add-deck-form/use-deck-form";

import s from "./deck-form.module.scss";

type PackFormDV = {
  cover: null | string;
} & Pick<DeckFormType, "isPrivate" | "name">;

type Props = {
  defaultValues?: PackFormDV;
  onCancel: () => void;
  onSubmit: (data: FormData) => void;
};

export const DeckForm: FC<Props> = ({ defaultValues, onCancel, onSubmit }) => {
  const [downloaded, setDownloaded] = useState<null | string>(
    defaultValues?.cover || null,
  );
  const [coverError, setCoverError] = useState<null | string>(null);

  const values: DeckFormType = {
    isPrivate: defaultValues?.isPrivate || false,
    name: defaultValues?.name || "",
  };

  const {
    control,
    getFieldState,
    handleSubmit,
    resetField,
    setValue,
    trigger,
    watch,
  } = usePackForm(values);

  const fileIsDirty = getFieldState("cover").isDirty;

  const file = watch("cover");

  const deleteCoverHandler = () => {
    if (coverError) {
      setCoverError(null);
    }
    toast.warning("You deleted cover", { containerId: "modal" });
    setValue("cover", null);
    setDownloaded(null);
  };

  const extraActions = async () => {
    const success = await trigger("cover");
    const { error } = getFieldState("cover");
    const file = watch("cover");

    if (!success && error?.message) {
      toast.error(error.message, { containerId: "modal" });
      setCoverError(error.message);
      resetField("cover");
    }

    if (file) {
      const badCase = defaultValues?.cover ?? null;
      const img = success ? URL.createObjectURL(file) : badCase;

      setDownloaded(img);

      if (coverError && !error?.message) {
        setCoverError(null);
      }
    }
  };

  const sendHandler = (data: DeckFormType) => {
    const form = new FormData();

    form.append("name", data.name);
    form.append("isPrivate", `${data.isPrivate}`);

    if (file === null) {
      form.append("cover", "");
    } else if (fileIsDirty && data.cover) {
      form.append("cover", data.cover);
    }

    onSubmit(form);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(sendHandler)}>
      <ControlledPreviewFileUploader
        control={control}
        deleteCoverHandler={deleteCoverHandler}
        errorMessage={coverError}
        extraActions={extraActions}
        name={"cover"}
        preview={downloaded}
      />
      <FormTextField control={control} label={"Name Pack"} name={"name"} />
      <FormCheckbox
        checked={defaultValues?.isPrivate || false}
        control={control}
        label={"Private Pack"}
        name={"isPrivate"}
      />
      <div className={s.controls}>
        <Button onClick={onCancel} type={"button"} variant={"secondary"}>
          Cancel
        </Button>
        <Button>Send</Button>
      </div>
    </form>
  );
};
