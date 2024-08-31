import type { Meta, StoryObj } from '@storybook/react';
import {RegistrationForm} from './registration-form';

const meta = {
    title: 'Auth/LoginForm',
    component: RegistrationForm,
    tags: ['autodocs'],
} satisfies Meta<typeof RegistrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    render: () => <RegistrationForm />,
}