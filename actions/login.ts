"use server"; // makes sure server code is never bundles with client code"

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }
  return { success: "Email sent!" };
};
