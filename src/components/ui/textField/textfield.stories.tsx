
import { Meta, StoryObj } from '@storybook/react';
import {TextField as TextFieldComponent} from './textfield'


const meta = {
    title: 'Components/TextField',
    component: TextFieldComponent,
    tags: ['autodocs'],
} as Meta<typeof TextFieldComponent>;

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Placeholder',
    },
}

