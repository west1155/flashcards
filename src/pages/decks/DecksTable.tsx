type DeckType = {
  deck: {
    id: string;
    name: string;
    cardsCount: number;
    updated: string;
    author: {
      name: string;
    };
  }[];
};

export const DecksTable = ({ deck }: DeckType) => {
  return (
    <tbody>
      {deck.map((deck: { id: string; name: string; cardsCount: number; updated: string; author: { name: string } }) => {
        const updatedAt = new Date(deck.updated)
          .toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
          .replace(/\//g, '.');
        return (
          <tr key={deck.id}>
            <td>{deck.name}</td>
            <td>{deck.cardsCount}</td>
            <td>{updatedAt}</td>
            <td>{deck.author.name}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
