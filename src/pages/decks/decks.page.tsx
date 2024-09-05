import { useGetDecksQuery } from '../../app/api/flashcards-api';


export const DecksPage = () => {
  const result = useGetDecksQuery();
  console.log(result);
  return (
    <div>
      <h1>DecksPage</h1>
    </div>
  );
};
