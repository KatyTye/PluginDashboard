import z from "zod";

export const usernameField = z.coerce.string().min(3, "Username must be atleast 3 characters long.")
	.max(16, "Username can’t be longer than 16 characters.")
	.refine(s => !s.includes(" "), "Username cannot contain spaces.")
export const passwordField = z.coerce.string().min(8, "Password must be at least 8 characters long.")
	.regex(/[A-Z]/, "Password must include one or more uppercase letters.")
	.regex(/[a-z]/, "Password must contain at least one lowercase letter.")
	.regex(/[0-9]/, "Password must include one or more numbers.")
	.regex(/[^A-Za-z0-9]/, "Password must include at least one symbol.");