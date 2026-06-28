import z from "zod";

export const usernameField = z.coerce.string().min(2, "Your username must be atleast 2 characters long.")
export const passwordField = z.coerce.string().min(25, "Your password must be atleast 25 characters long.")