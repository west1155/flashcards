import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import { Checkbox } from '../../checkbox';
export const FormCheckbox = ({ control, name, rules, defaultValue, ...rest }) => {
    const { field } = useController({
        control,
        name,
        rules,
        defaultValue,
    });
    return _jsx(Checkbox, { ...rest, checked: field.value, onChange: field.onChange });
};
