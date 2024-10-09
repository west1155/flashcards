import { useGetDecksQuery } from '../../app/api/flashcards-api';
import { DecksTable, DeckType } from './DecksTable';
import { useState } from 'react';
import { TextField } from '../../components/ui/textField';
import { Pagination } from '@/components/ui/paginator/paginator';
import s from './Decks.module.scss';
import { Typography } from '@/components/ui/typography';

export const DecksPage = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading, error } = useGetDecksQuery({
    name: search,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <div>Error: +{JSON.stringify(error)}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <section className={s.root}>
      <div className={s.top}>
        <Typography as="h1" variant="h2">
          Decks list
        </Typography>
        <TextField onChange={(e) => setSearch(e.currentTarget.value)} value={search} />
        <DecksTable deck={data?.items as DeckType[]} authUserId={'1'} />
        <Pagination totalCount={20} pageSize={3} onPageChange={() => {}} onPageSizeChange={() => {}} currentPage={1} />
      </div>
    </section>
  );
};
