import { Link } from "react-router-dom";

import { BackButton } from "@/components/ui/back-button/BackButton";
import { Button } from "@/components/ui/button";
import { CardsTable } from "@/pages/cards/ui/cards-table/cards-table";
import { useGetCardsQuery } from "@/pages/decks/decksAPI";

import s from "./deck.module.scss";

export const Deck = () => {
  const packId = "clzsip59x01pgpi014nfqypu5";

  const { data } = useGetCardsQuery({
    id: packId,
    params: {},
  });

  return (
    <section className={s.root}>
      <BackButton />
      <div className={s.header}>
        <div className={s.top}>
          <Button as={Link} to={"/"}>
            Learn Cards
          </Button>
        </div>
      </div>
      {data?.items && (
        <CardsTable
          cards={data.items}
          isMyPack={false}
          onSort={() => {}}
          sort={{ direction: "desc", key: "" }}
        />
      )}
    </section>
  );
};
