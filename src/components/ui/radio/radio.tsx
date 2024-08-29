import * as RadioGr from '@radix-ui/react-radio-group';
import { Typography } from '../typography';
import { clsx } from 'clsx';

import s from './radio.module.scss';

export type Option = {
  label: string;
  value: string;
};

export type RadioGroupProps = {
  options: Option[];
  name?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  errorMessage?: string;
  disabled?: boolean;
};

export const RadioGroup = ({ options, errorMessage, ...rest }: RadioGroupProps) => {
  const labelClasses = clsx(s.item, rest.disabled && s.disabled);

  return (
    <RadioGr.Root aria-label={'Aria label'} {...rest} className={s.root}>
      {options.map((el) => (
        <Typography as={'label'} variant={'body2'} key={el.value} className={labelClasses}>
          <RadioGr.Item value={el.value} className={s.radio}>
            <div className={s.frame}></div>
            <RadioGr.Indicator className={s.indicator} />
          </RadioGr.Item>
          {el.label}
        </Typography>
      ))}
      {errorMessage && (
        <Typography variant={'caption'} className={s.error}>
          {errorMessage}
        </Typography>
      )}
    </RadioGr.Root>
  );
};
