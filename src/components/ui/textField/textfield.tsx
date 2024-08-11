// src/components/TextField.tsx

import React from 'react';
import * as Label from '@radix-ui/react-label';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isInvalid?: boolean;
    isRequired?: boolean;
    variant?: 'search' | 'primary';
}

export const TextField: React.FC<TextFieldProps> = ({
                                                 label,
                                                 isInvalid,
                                                 isRequired,
                                                 variant,
                                                 ...props
                                             }) => {
    return (
        <div className="textfield-container">
            <Label.Root className="textfield-label">{label}</Label.Root>
            <input
                className={`textfield-input ${variant} ${isInvalid ? 'invalid' : ''}`}
                required={isRequired}
                {...props}
            />
            {isInvalid && <span className="textfield-error">This field is invalid.</span>}
        </div>
    );
};

