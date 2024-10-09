import { Table } from '@/components/ui/table';
import { TableHeader } from '@/components/table-header';
import {PackRow} from "@/components/ui/deck-row/pack-row";

export const packsTableColumns = [
  { key: 'name', title: 'Name' },
  { key: 'cardsCount', title: 'Cards' },
  { key: 'updated', title: 'Last Updated' },
  { key: 'created', title: 'Created By' },
  { key: 'controls', title: '', sortable: false },
];

export type DeckType = {
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string | null;
  rating: number;
  isDeleted?: boolean | null;
  isBlocked?: boolean | null;
  created: string;
  updated: string;
  cardsCount: number;
  author: {
    id: string;
    name: string;
  };
};

export type DecksTableProps = {
  authUserId: string;
  deck: DeckType[];
};


export const DecksTable = ({ deck, authUserId, ...rest }: DecksTableProps) => {
  return (
    <Table.Root>
      <TableHeader columns={packsTableColumns} {...rest} />
      <Table.Body>
        {deck.map((deck) => (
            <PackRow key={deck.id} deck={deck} authUserId={authUserId} />
        ))}
      </Table.Body>
    </Table.Root>
  );
};
