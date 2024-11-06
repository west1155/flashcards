import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ModalWindow } from "@/components/ui/modal-window/ModalWindow";
import { CreateDecksArgs } from "@/pages/decks";
import { DeckForm } from "@/pages/decks/add-deck-form/deck-form";
import { useCreateDeckMutation } from "@/pages/decks/decksAPI";

export const AddNewDeckButton = () => {
  const [open, setOpen] = useState(false);

  const [createDeck] = useCreateDeckMutation();

  const createDeckHandler = async (formData: FormData) => {
    const data: CreateDecksArgs = {
      cover: formData.get("cover") as string,
      isPrivate: formData.get("isPrivate") === "true",
      name: formData.get("name") as string,
    };

    await createDeck(data).unwrap();
    setOpen(false);
  };

  return (
    <>
      <ModalWindow onOpenChange={setOpen} open={open} title={"Create new pack"}>
        <DeckForm
          onCancel={() => {
            setOpen(false);
          }}
          onSubmit={createDeckHandler}
        />
      </ModalWindow>
      <Button onClick={() => setOpen(true)}> Add New Deck </Button>
    </>
  );
};
