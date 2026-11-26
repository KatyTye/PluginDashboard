"use server"

import { fetchLoginFromApi } from "@/src/lib/dal/auth"
import { userSchema } from "@/src/lib/schemas/user"
import { redirect } from "next/navigation"
import z from "zod"

export type LoginFormState = {
	success?: boolean,
	data: {
		username: string,
		password: string,
		remember: boolean
	},
	error?: {
		username?: { errors: string[] },
		password?: { errors: string[] },
		code?: { errors: string[] }
	},
	message?: string
}

export default async function loginAction(prevState: LoginFormState, formData: FormData) : Promise<LoginFormState> {
	const { username, password, remember, code } = Object.fromEntries(formData)

	const validated = userSchema.safeParse({username, password})

	if (!validated.success) return {
		success: false,
		data: {
			username: username.toString(),
			password: password.toString(),
			remember: Boolean(remember)
		},
		error: z.treeifyError(validated.error).properties
	}

	const loginFetch = await fetchLoginFromApi(username.toString(), password.toString(), `${remember}`, code.toString())

	switch (loginFetch.status) {
		case 200: redirect("/profile")
		case 201: return {
			success: true,
			data: {
				username: username.toString(),
				password: password.toString(),
				remember: Boolean(remember),
			},
			message: loginFetch.message
		}
		default: return {
			success: false,
			data: {
				username: username.toString(),
				password: password.toString(),
				remember: Boolean(remember)
			},
			message: loginFetch.message
		}
	}
}