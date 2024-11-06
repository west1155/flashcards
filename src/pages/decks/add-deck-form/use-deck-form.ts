import { useForm } from "react-hook-form";

import { fileSchema, stringSchema } from "@/schemas/zod_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const packSchema = z.object({
  cover: fileSchema,
  isPrivate: z.boolean(),
  name: stringSchema,
});

export type DeckFormType = z.infer<typeof packSchema>;

export const usePackForm = (props: DeckFormType) => {
  return useForm<DeckFormType>({
    defaultValues: props,
    resolver: zodResolver(packSchema),
  });
};
