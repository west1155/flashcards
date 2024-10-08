import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Typography } from '../typography';

export type CheckboxProps = {
  onChange: (checked: boolean) => void;
  checked: boolean;
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
    <Typography as="label" className={classes.root}>
      <CheckboxRadix.Root
        id={id}
        className={classes.checkbox}
        onCheckedChange={(checked) => onChange(checked === true)} // Ensure correct boolean value
        disabled={disabled}
      >
        <CheckboxRadix.Indicator className="Indicator" forceMount>
          {(checked && <CheckIcon />) || <CheckIcon color={'transparent'} />}
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label && <Typography>{label}</Typography>}
    </Typography>
  );
};
