import { useEffect, useState } from "react";

import { useGetMeQuery } from "@/app/api/auth/auth";
import { Typography } from "@/components/ui/typography";
import { AddNewDeckButton } from "@/utils/buttons/AddNewDeckButton";

import s from "./Decks.module.scss";

import { useGetDecksQuery } from "../../app/api/flashcards-api";
import { DeckType, DecksTable } from "./DecksTable";

export const DecksPage = () => {
  const [search, setSearch] = useState("");
  const { data: userData } = useGetMeQuery();
  const { data, error, isLoading } = useGetDecksQuery({
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
      <DecksTable authUserId={"1"} deck={data?.items as DeckType[]} />
      {/*<Pagination totalCount={20} pageSize={3} onPageChange={() => {}} onPageSizeChange={() => {}} currentPage={1} />*/}
    </section>
  );
};
