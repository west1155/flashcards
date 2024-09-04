import { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import image from './avatar.jpg'

import { Avatar } from './avatar'

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarStory: Story = {
    args: {
        userName: 'Jon Frieda',
        image: image,
    },
}

export const DelayedAvatarLoading = {
    render: () => {
        const [img, setImg] = useState<string | undefined>(undefined)

        useEffect(() => {
            const id = setTimeout(() => {
                setImg(image)
            }, 3000)

            return () => {
                clearInterval(id)
            }
        }, [])

        return <Avatar userName="Jon Frieda" image={img} />
    },
    args: {},
}

export const AvatarWithInlineStyles = {
    render: () => {
        const [img, setImg] = useState<string | undefined>(undefined)

        useEffect(() => {
            const id = setTimeout(() => {
                setImg(image)
            }, 3000)

            return () => {
                clearInterval(id)
            }
        }, [])

        return (
            <Avatar style={{ border: '2px solid yellow' }} size={50} userName="Jon Frieda" image={img} />
        )
    },
    args: {},
}
