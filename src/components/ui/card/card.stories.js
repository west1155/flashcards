import { jsx as _jsx } from "react/jsx-runtime";
import { InfoFill as InfoIcon } from '../../../assets/icons/InfoFill';
import { Card } from './';
const meta = {
    component: Card,
    tags: ['autodocs'],
    title: 'Components/Card',
};
export default meta;
export const Primary = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        title: 'Some title',
    },
};
export const PrimaryWithIcon = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        iconComponent: (_jsx(InfoIcon, { backgroundColor: 'var(--color-neutral-light-50)', color: 'var(--color-danger-500)', size: 16 })),
        title: 'Some title',
    },
};
export const PrimaryWithoutTitle = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    },
};
export const Info = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        variant: 'info',
    },
};
