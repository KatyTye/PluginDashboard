"use server"

import { cookies } from "next/headers"
import { loginResponse } from "../types"

export async function fetchLoginFromApi(username: string, password: string, remember: string) : Promise<loginResponse> {
	
	let res: loginResponse = {
		status: 500,
		message: "Something went wrong, try again later."
	}

	try {

		const fetchResponse = await fetch(process.env.FETCH_PATH + "/auth/user", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"username": username,
				"password": password,
				"remember": remember
			}
		})
		
		
		switch (fetchResponse.status) {
			case 200: {
				const fetchData: loginResponse = await fetchResponse.json()
				const cookieStore = await cookies()

				res = {
					status: 200,
					message: fetchResponse.statusText,
					tokens: fetchData.tokens
				}

				if (fetchData.tokens) {
					cookieStore.set("SE_PROFILE_TOKEN", fetchData.tokens.auth, {
						secure: process.env.NODE_ENV === "production",
						expires: new Date(fetchData.tokens.validUntil),
						sameSite: "lax",
						httpOnly: true,
						path: "/"
					})

					cookieStore.set("SE_DECRYPT_TOKEN", fetchData.tokens.decrypt, {
						secure: process.env.NODE_ENV === "production",
						expires: new Date(fetchData.tokens.validUntil),
						sameSite: "lax",
						httpOnly: true,
						path: "/"
					})
				}
			}
			default: res = {
				...res,
				status: fetchResponse.status
				//message: `${fetchResponse.status}: ` + fetchResponse.statusText
			}
		}

	} catch (error) {
		console.error("Fetch Failed: ", error)
	}

	return res
}