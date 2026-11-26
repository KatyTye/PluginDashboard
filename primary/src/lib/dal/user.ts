"use server"

import { cookies } from "next/headers"
import jwt from "jsonwebtoken";

export async function getUserInformation(): Promise<{success: boolean, message: string, result?: object}> {
	const cookieStore = await cookies()

	if (cookieStore.has("SE_PROFILE_TOKEN")) {
		const decodedToken = jwt.decode(cookieStore.get("SE_PROFILE_TOKEN")?.value || "")
		const profile = typeof decodedToken === "string" ? JSON.parse(decodedToken) : decodedToken

		return {
			"success": true,
			"message": "Here is your profile information.",
			"result": profile ?? {}
		}
	}

	return {
		"success": false,
		"message": "Could not get any profile information."
	}
}

export async function activateUser({code} : {code: string}) : Promise<boolean> {
	if (code === "" || code === null || code === undefined) return false

	const apiURL = process.env.FETCH_PATH
	const internalKey = process.env.INTERNAL_LOGIN_KEY

	if (!apiURL || !internalKey) return false

	try {
		const response = await fetch(apiURL + "/user/activate", {
			method: "POST",
			headers: {
				"int_key": internalKey,
				"activation_code": code
			}
		})

		const data = await response.json()

		console.log(data)

		return data.success
	} catch {
		return false
	}
}