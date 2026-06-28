import z from "zod"
import type { zodCheckFormObject } from "../lib/utils"
import { passwordField, usernameField } from "../lib/zod"

export function checkLoginField(input: zodCheckFormObject) {

	let passedFields = false

	const usernameResponse = usernameField.safeParse(input.username)
	const passwordResponse = passwordField.safeParse(input.password)

	if (usernameResponse.error == null && passwordResponse.error == null) {
		passedFields = true
	}

	return {
		passed: passedFields,
		errors: {
			username: usernameResponse.error ? z.flattenError(usernameResponse.error).formErrors || [] : [],
			password: passwordResponse.error ? z.flattenError(passwordResponse.error).formErrors || [] : []
		}
	}
}