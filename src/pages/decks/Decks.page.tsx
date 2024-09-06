import { useGetDecksQuery } from '../../app/api/flashcards-api';
import {DecksTable} from "./DecksTable";
import {useState} from "react";
import {TextField} from "../../components/ui/textField";

export const DecksPage = () => {
  const [search, setSearch] = useState('')
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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cards</th>
          <th>Last Updated</th>
          <th>Created By</th>
        </tr>
      </thead>
      <TextField onChange={e=> setSearch(e.currentTarget.value)} value={search}/>
      <DecksTable deck={data?.items} />
    </table>
  );
};
