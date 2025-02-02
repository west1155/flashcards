import { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import { Pagination } from "@/components/ui/paginator/paginator";
import { Typography } from "@/components/ui/typography";
import { AddNewDeckButton } from "@/utils/buttons/AddNewDeckButton";
import { FilterControls } from "@/utils/features/filter-control/filter-control";

import s from "./Decks.module.scss";

import { useGetDecksQuery } from "../../app/api/flashcards-api";
import { DeckType, DecksTable } from "./DecksTable";

export const DecksPage = () => {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    searchParams.get("page") !== null ? Number(searchParams.get("page")) : 1,
  );
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    searchParams.get("items") !== null ? Number(searchParams.get("items")) : 10,
  );

  const [cardsRange, setCardsRange] = useState<number[]>([
    searchParams.get("min") !== null ? Number(searchParams.get("min")) : 3,
    searchParams.get("max") !== null ? Number(searchParams.get("max")) : 10,
  ]);

  const setMinMaxParam = (value: number[]) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      max: String(value[1]),
      min: String(value[0]),
    });
    setCardsRange(value);
  };

  const setPage = (page: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: String(page),
    });
    setCurrentPage(page);
  };
  const setItems = (items: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      items: String(items),
    });
    setItemsPerPage(items);
  };

  const { data, error, isLoading } = useGetDecksQuery({
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    minCardsCount: cardsRange[0],
    maxCardsCount: cardsRange[1],
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
          <Typography as={"h1"} variant={"h2"}>
            Decks list
          </Typography>
          <AddNewDeckButton />
        </div>
      </div>
      <FilterControls
        authUserId={"1"}
        searchName={search}
        setSearchName={setSearch}
        setSliderValue={setMinMaxParam}
        setTabValue={() => {}}
        sliderValue={cardsRange}
        tabValue={"1"}
      />
      <DecksTable authUserId={"1"} deck={data?.items as unknown as DeckType[]} />
      <Pagination
        currentPage={currentPage}
        onPageChange={setPage}
        onPageSizeChange={setItems}
        pageSize={itemsPerPage}
        totalCount={data?.pagination.totalItems ?? 0}
      />
    </section>
  );
};