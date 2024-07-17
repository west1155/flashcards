import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>


export const H1: Story = {
    args: {
        variant: 'h1',
        children: 'Some text',
    },
}
export const H2: Story = {
    args: {
        variant: 'h2',
        children: 'Some text',
    },
}
export const H3: Story = {
    args: {
        variant: 'h3',
        children: 'Some text',
    },
}

export const H4: Story = {
    args: {
        variant: 'h4',
        children: 'Some text',
    },
}

export const H5: Story = {
    args: {
        variant: 'h5',
        children: 'Some text',
    },
}

export const H6: Story = {
    args: {
        variant: 'h6',
        children: 'Some text',
    },
}

export const Body1: Story = {
    args: {
        variant: 'body1',
        children: 'Some text',
    },
}
export const Body2: Story = {
    args: {
        variant: 'body2',
        children: 'Some text',
    },
}

export const Caption: Story = {
    args: {
        variant: 'caption',
        children: 'Some text' }
}

export const Overline: Story = {
    args: {
        as: 'p',
        variant: 'overline',
        children: 'Some text',
    }
}

export const Button: Story = {
    args: {
        as: 'button',
        variant: 'button',
        children: 'Some text',
    }

}

export const Link: Story = {
    args: {
        as: 'a',
        variant: 'link',
        children: 'Some text',
    }
}



