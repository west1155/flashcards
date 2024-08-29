import {Meta, StoryObj} from "@storybook/react";
import {Option, RadioGroup} from "./radio";
import {useState} from "react";

const meta = {
    title: 'Components/Radio',
    component: RadioGroup,
    tags: ['autodocs'],
    } satisfies Meta<typeof RadioGroup>

export default meta;
type Story = StoryObj<typeof meta>

const baseData: Option[] = [
    { label: 'First', value: '1' },
    { label: 'Second', value: '2' },
    { label: 'Third', value: '3' },
]


export const DefaultControlledGroup: Story = {
    render: args => {
        const [value, setValue] = useState('1')

        return (
            <>
                <RadioGroup {...args} value={value} onValueChange={setValue} />
                <div style={{ marginTop: '10px' }}>Selected value: {value}</div>
            </>
        )
    },

    args: {
        options: baseData,
    },
}

export const DisabledGroup: Story = {
    args: {
        options: baseData,
        value: '1',
        disabled: true,
    },
}

export const GroupWithError: Story = {
    args: {
        options: baseData,
        value: '1',
        errorMessage: 'Some error occurred',
    },
}
