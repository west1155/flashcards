import { fileSchema, stringSchema } from "@/schemas/zod_schema";
import { z } from "zod";

const deckSchema = z.object({
  cover: fileSchema,
  isPrivate: z.boolean(),
  name: stringSchema,
});
