import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { Checkbox, CheckboxProps } from '../../checkbox';

export type ControlledCheckboxProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<CheckboxProps, 'onChange' | 'value' | 'id'>;

export const FormCheckbox = <TFieldValues extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  });
  return (
    <Checkbox
      {...{
        onChange,
        id: name,
        checked: value,
        label: name
      }}
    />
  );
  // ...
};
