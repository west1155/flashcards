import { useGetDecksQuery } from '../../app/api/flashcards-api';
import { DecksTable, DeckType } from './DecksTable';
import { useState } from 'react';
import { Pagination } from '@/components/ui/paginator/paginator';
import s from './Decks.module.scss';
import { Typography } from '@/components/ui/typography';
import { FilterControls } from '@/utils/features/filter-control/filter-control';
import { AddNewDeckButton } from '@/utils/buttons/AddNewDeckButton';


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
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="h2">
            Decks list
          </Typography>
          <AddNewDeckButton />
        </div>
        <FilterControls
          searchName={'Kuku'}
          setSearchName={() => {}}
          sliderValue={[12, 23]}
          sliderMaxValue={200}
          setSliderValue={() => {}}
          tabValue={'2'}
          setTabValue={() => {}}
          authUserId={'2'}
        />
      </div>
      <DecksTable deck={data?.items as DeckType[]} authUserId={'1'} />
      <Pagination totalCount={20} pageSize={3} onPageChange={() => {}} onPageSizeChange={() => {}} currentPage={1} />
    </section>
  );
};
