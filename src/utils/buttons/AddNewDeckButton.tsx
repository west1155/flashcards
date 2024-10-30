import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ModalWindow } from "@/components/ui/modal-window/ModalWindow";

export const AddNewDeckButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalWindow onOpenChange={setOpen} open={open} title={"Create new pack"}>
        <div>Form</div>
      </ModalWindow>
      <Button onClick={() => setOpen(true)}> Add New Deck </Button>
    </>
  );
};
