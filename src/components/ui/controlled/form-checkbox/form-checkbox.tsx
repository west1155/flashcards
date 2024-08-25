import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { Checkbox, CheckboxProps } from '../../checkbox';

export type ControlledCheckboxProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<CheckboxProps, 'onChange' | 'value' | 'id'>;

export const FormCheckbox = <TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  defaultValue,
  ...rest
}: ControlledCheckboxProps<TFieldValues>) => {
  const { field } = useController({
    control,
    name,
    rules,
    defaultValue,
  });

  return <Checkbox {...rest} checked={field.value} onChange={field.onChange} />;
};
