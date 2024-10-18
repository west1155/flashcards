import { CSSProperties, forwardRef } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

type AvatarProps = {
    name?: string
    image?: string
    size?: number
    style?: CSSProperties
    className?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    ({ image, size = 36, style, className }, ref) => {
        const classes = clsx(s.avatar, className)

        const styles: CSSProperties = {
            width: size,
            height: size,
            ...(style || {}),
        }

        return (
            <div className={classes} style={styles}>
                <AvatarRadix.Root ref={ref}>
                    <AvatarRadix.Image className={s.image} src={image} alt="User Avatar" />
                </AvatarRadix.Root>
            </div>
        )
    }
)
