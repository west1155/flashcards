import { useState } from "react";

import {CreateDecksArgs, ErrorResponseField} from "@/pages/decks";
import { useCreateDeckMutation } from "@/pages/decks/decksAPI";
import {toast} from "react-toastify";

export const useCreateDeck = () => {
  const [createModalDeck, setCreateModalDeck] = useState<boolean>(false);
  // eslint-disable-next-line no-undef
  const [createDeck, { isLoading: isLoadingCreateDeck }] =
    useCreateDeckMutation();
  const requestCreateDeck = async (args: CreateDecksArgs) => {
    try {
      await createDeck(args).unwrap();
      toast.success("Deck Create");
    } catch (e) {
      const error = e as ErrorResponseField;

      toast.error(error.data.message ?? "Create Deck failed");
    } finally {
      setCreateModalDeck(false);
    }
  };

  return {
    createModalDeck,
    isLoadingCreateDeck,
    requestCreateDeck,
    setCreateModalDeck,
  };
};
