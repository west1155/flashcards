import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {RadioGroup, RadioGroupProps} from "../../radio/radio";


export type ControlledRadioProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
    Omit<RadioGroupProps, 'onChange' | 'value' | 'id'>;



export const FormRadio = <TFieldValues extends FieldValues>({
    control,
    name,
    rules,
    defaultValue,
    ...rest
}: ControlledRadioProps<TFieldValues>) => {
    useController({
        control,
        name,
        rules,
        defaultValue
    })

    return <RadioGroup {...rest} />
}

export default FormRadio;