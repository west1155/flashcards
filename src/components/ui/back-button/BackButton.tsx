import { FC, MouseEvent } from 'react'

import { clsx } from 'clsx'
import { Link, useNavigate } from 'react-router-dom'

import s from './back-button.module.scss'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import {GlobalSvgSelector} from "@/assets/icons/global/GlobalSvgSelector";

type Props = {
    text?: string
    className?: string
}

export const BackButton: FC<Props> = ({ text = 'Back to Previous Page', className, ...rest }) => {
    const navigate = useNavigate()

    const backHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        navigate(-1)
    }

    const classes = clsx(s.button, className)

    return (
        <Button
            as={Link}
            to=".."
            relative="path"
            variant="link"
            onClick={backHandler}
            className={classes}
            {...rest}
        >
            <GlobalSvgSelector id={'arrow-back'} />
            <Typography variant="body2" className={s.text}>
                {text}
            </Typography>
        </Button>
    )
}
