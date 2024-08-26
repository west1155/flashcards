import { Button } from './';
const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
        },
    },
};
export default meta;
export const Primary = {
    args: {
        as: 'button',
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
    },
};
export const Secondary = {
    args: {
        as: 'button',
        variant: 'secondary',
        children: 'Secondary Button',
        disabled: false,
    },
};
export const FullWidth = {
    args: {
        as: 'button',
        variant: 'primary',
        children: 'Full Width Primary Button',
        disabled: false,
        fullWidth: true,
    },
};
export const AsLink = {
    args: {
        variant: 'primary',
        children: 'Link that looks like a button',
        as: 'a',
    },
};
