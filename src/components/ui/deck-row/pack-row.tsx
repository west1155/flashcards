import { FC, memo } from 'react'

import { Link } from 'react-router-dom'

import s from './pack-row.module.scss'

import defaultCover from '@/assets/images/default-image.jpg'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import {DeckType} from "@/pages/decks/DecksTable";
import {GlobalSvgSelector} from "@/assets/icons/global/GlobalSvgSelector";

type Props = {
    deck: DeckType
    authUserId: string
}

export const PackRow: FC<Props> = memo(({ deck, authUserId }) => {
    const isMyPack = authUserId === deck.author.id


    const onLearn = () => {}

    return (
        <Table.Row key={deck.id} className={s.root}>
            <Table.Cell align="left" className={s.name}>
                <Button as={Link} to={deck.id} variant="link" className={s.link}>
                    <img src={deck.cover ?? defaultCover} alt="Pack cover" className={s.cover} />
                    <Typography as="h3" variant="body2">
                        {deck.name}
                    </Typography>
                </Button>
            </Table.Cell>
            <Table.Cell className={s.count}>{deck.cardsCount}</Table.Cell>
            <Table.Cell className={s.date}>{new Date(deck.updated).toLocaleDateString()}</Table.Cell>
            <Table.Cell className={s.createdBy}>{deck.author.name}</Table.Cell>
            <Table.Cell className={s.cell}>
                <div className={s.controls}>
                    {isMyPack ? (
                        <>
                            <IconButton
                                icon={<GlobalSvgSelector id={'play'} />}
                                disabled={!deck.cardsCount}
                                onClick={onLearn}
                            />
                        </>
                    ) : (
                        <IconButton
                            icon={<GlobalSvgSelector id={'play'} />}
                            disabled={!deck.cardsCount}
                            onClick={onLearn}
                        />
                    )}
                </div>
            </Table.Cell>
        </Table.Row>
    )
})
