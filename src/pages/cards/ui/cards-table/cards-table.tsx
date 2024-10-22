import { FC, memo } from 'react'

import { packTableColumns } from '@/common/consts'
import { Table } from '@/components/ui/table'
import { TableHeader, TableHeaderProps } from '@/components/ui/table-header'
import { CardRow } from '@/pages/cards/ui/cards-row/cards-row'

import { Card } from '../../services'

type Props = {
  cards: Card[]
  isMyPack: boolean
} & Pick<TableHeaderProps, 'onSort' | 'sort'>

export const CardsTable: FC<Props> = memo(({ cards, isMyPack, ...rest }) => {
  const columns = packTableColumns.filter((c: { key: string }) =>
    isMyPack ? c : c.key !== 'controls'
  )

  if (!cards.length) {
    return <Table.Empty>No content with these terms...</Table.Empty>
  }

  return (
    <Table.Root>
      <TableHeader columns={columns} {...rest} />
      <Table.Body>
        {cards.map(card => (
          <CardRow card={card} isMyPack={isMyPack} key={card.id} />
        ))}
      </Table.Body>
    </Table.Root>
  )
})
