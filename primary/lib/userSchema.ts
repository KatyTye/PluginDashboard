import z from "zod";

const asciiOnly = (s: string) => /^[\x00-\x7F]*$/.test(s);

export const usernameSchema = z.string().min(3, "Username must be at least 3 characters long.")
	.max(16, "Username must be at most 16 characters long.")
	.regex(/^[A-Za-z0-9_]+$/, "Username can only contain letters, numbers, and underscore.")
	.refine((s) => !s.includes(" "), "Username cannot contain spaces.")

export const passwordSchema = z.string().min(8, "Password must be at least 8 characters long.")
	.max(256, "Password must be at most 256 characters.")
	.refine(asciiOnly, "Password must not contain any Unicode characters.")
	.refine((s) => !/\s/.test(s), "Password cannot contain spaces.")
	.refine((s) => {
		const hasLower = /[a-z]/.test(s)
		const hasUpper = /[A-Z]/.test(s)
		const hasNum = /[0-9]/.test(s)
		const hasSym = /[^A-Za-z0-9]/.test(s)
		const categories = [hasLower, hasUpper, hasNum, hasSym].filter(Boolean).length;
		return categories >= 3;
  	}, "Password must include at least 3 of: lowercase, uppercase, number and symbol.")

export const userSchema = z.object({
	username: usernameSchema,
	password: passwordSchema
})