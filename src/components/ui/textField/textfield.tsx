import React from 'react';
import * as Label from '@radix-ui/react-label';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isInvalid?: boolean;
    isRequired?: boolean;
    error?: string;
    variant?: 'search' | 'primary';
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ label, isInvalid, isRequired, variant, error, ...props }, ref) => {
        return (
            <div className="textfield-container">
                <Label.Root className="textfield-label">{label}</Label.Root>
                <input
                    ref={ref}
                    className={`textfield-input ${variant} ${isInvalid ? 'invalid' : ''}`}
                    required={isRequired}
                    {...props}
                />
                {isInvalid && error && <span className="textfield-error">{error}</span>}
            </div>
        );
    }
);

TextField.displayName = 'TextField'; // Add this line to avoid naming issues in development
