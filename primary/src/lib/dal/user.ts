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