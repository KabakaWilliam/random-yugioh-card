import { YugiohCard } from "@/types/Yugioh";
import * as trpc from "@trpc/server";
import { z } from "zod";

export const appRouter = trpc
  .router()
  .query("getCard", {
    input: z
      .object({
        resp: z.string().nullish(),
      })
      .nullish(),
    async resolve({ input }) {
      const res = await fetch(
        "https://db.ygoprodeck.com/api/v7/randomcard.php"
      );
      const yugiohCard = (await res.json()) as YugiohCard;

      return {
        greeting: `hello ${yugiohCard.name ?? "world"}`,
        cardImage: yugiohCard.card_images[0],
      };
    },
  })
  .query("sendStuff", {
    input: z
      .object({
        resp: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.resp ?? "world"}`,
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

type yugiohCard = {};
