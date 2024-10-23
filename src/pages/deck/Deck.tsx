import { useGetDeckByIdQuery } from "@/pages/decks/decksAPI";

export const Deck = () => {
  const { data } = useGetDeckByIdQuery({ id: "clzsip59x01pgpi014nfqypu5" });

  console.log(data);

  return <div>Deck</div>;
};
