import { FC, memo } from 'react'

import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { DeleteCardControl } from '@/features/cards/ui'

import s from './card-row.module.scss'

import defaultImage from '../../../../assets/images/default-image.jpg'
import { Card } from '../../api/cardTypes'

type Props = {
  card: Card
  isMyPack: boolean
}

export const CardRow: FC<Props> = memo(({ card, isMyPack }) => {
  return (
    <Table.Row className={s.root} key={card.id}>
      <Table.Cell className={s.question}>
        <img alt={'Question'} className={s.cover} src={card.questionImg ?? defaultImage} />
        <Typography as={'h3'} variant={'body2'}>
          {card.question}
        </Typography>
      </Table.Cell>
      <Table.Cell className={s.answer}>
        <img alt={'Answer'} className={s.cover} src={card.answerImg ?? defaultImage} />
        <Typography as={'h3'} variant={'body2'}>
          {card.answer}
        </Typography>
      </Table.Cell>
      <Table.Cell className={s.date}>{new Date(card.updated).toLocaleDateString()}</Table.Cell>
      <Table.Cell className={s.grade}>
      </Table.Cell>
      {isMyPack && (
        <Table.Cell className={s.controls}>
          <div className={s.buttons}>
            <DeleteCardControl id={card.id} />
          </div>
        </Table.Cell>
      )}
    </Table.Row>
  )
})
