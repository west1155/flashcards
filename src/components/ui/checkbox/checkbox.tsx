import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
};

export const Checkbox = ({ checked, label, disabled, id, onChange, className }: CheckboxProps) => {
  const classes = {
    root: `Label ${disabled ? 'disabled' : ''} ${className}`,
    checkbox: 'Checkbox',
  };

  return (
    <label className={classes.root}>
      <CheckboxRadix.Root
        id={id}
        className={classes.checkbox}
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
      >
        <CheckboxRadix.Indicator className="Indicator" forceMount>
          <CheckIcon />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label}
    </label>
  );
};
