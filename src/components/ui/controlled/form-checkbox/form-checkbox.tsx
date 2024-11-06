import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import { Checkbox, CheckboxProps } from "../../checkbox";

export type ControlledCheckboxProps<TFieldValues extends FieldValues> = Omit<
  CheckboxProps,
  "id" | "onChange" | "value"
> &
  UseControllerProps<TFieldValues>;

export const FormCheckbox = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  ...rest
}: ControlledCheckboxProps<TFieldValues>) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
    rules,
  });

  return <Checkbox {...rest} checked={field.value} onChange={field.onChange} />;
};
