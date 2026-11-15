import { z } from "zod";

export const formSchema = z.object({
  rate: z
    .string()
    .min(1, "Rate is required")
    .refine((value) => Number(value) > 0, {
      message: "rate must be greater than 0",
    }),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((value) => Number(value) > 0, {
      message: "amount must be greater than 0",
    }),
});

export type formInput = z.infer<typeof formSchema>;
