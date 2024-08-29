import { TextField, TextFieldProps } from '../../textField';
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';

export type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
} & Omit<TextFieldProps, 'onChange' | 'value'>;

export const FormTextField = <T extends FieldValues>({ name, control, ...rest }: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
  });

  console.log(error)

  return <TextField isInvalid={!!error} error={error?.message} {...field} {...rest} />;
};
