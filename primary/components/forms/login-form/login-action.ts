"use server"

import { userSchema } from "@/lib/userSchema"
import z from "zod"

export type LoginFormState = {
	success?: boolean,
	data?: {
		username: string,
		password: string,
		remember: string
	},
	error?: {
		username?: { errors: string[] },
		password?: { errors: string[] }
	},
	message?: string
}

export default async function loginAction(prevState: LoginFormState, formData: FormData) {
	const { username, password, remember } = Object.fromEntries(formData)

	const validated = userSchema.safeParse({username, password})

	if (!validated.success) {
		return {
			success: false,
			error: z.treeifyError(validated.error).properties
		}
	}

	return {
		success: true,
		data: {
			username,
			password,
			remember
		}
	}
}