import { useGetDeckByIdQuery } from "@/pages/decks/decksAPI";

import s from "./Deck.module.scss";

export const Deck = () => {
  const { data } = useGetDeckByIdQuery({ id: "clzsip59x01pgpi014nfqypu5" });

  console.log(data);

  return <section className={s.root}></section>;
};
