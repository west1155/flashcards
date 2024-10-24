import { Table } from "@/components/ui/table";
import {
  useGetDeckByIdQuery,
  useGetDeckCardsQuery,
} from "@/pages/decks/decksAPI";

// @ts-ignore
import s from "./Deck.module.scss";

export const Deck = () => {
  const { data: deck } = useGetDeckByIdQuery({
    id: "clzsip59x01pgpi014nfqypu5",
  });
  const { data: cards } = useGetDeckCardsQuery({
    id: "clzsip59x01pgpi014nfqypu5",
  });

  console.log(deck, cards);

  return (
    <section className={s.root}>
      {deck ? (
        <Table.Root className={s.table}>
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Question</Table.HeadCell>
              <Table.HeadCell>Answer</Table.HeadCell>
              <Table.HeadCell>Last Updated</Table.HeadCell>
              <Table.HeadCell>Grade</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {cards?.items.map((card) => (
              <Table.Row key={card.id}>
                <Table.Cell>{card.question}</Table.Cell>
                <Table.Cell>{card.answer}</Table.Cell>
                <Table.Cell>
                  {new Date(card.updated).toLocaleDateString("ru-RU")}
                </Table.Cell>
                <Table.Cell>{card.grade}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <>Empty Space</>
      )}
    </section>
  );
};
