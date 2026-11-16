"use server"

import { downloadObject, downloadResult } from "../types"

export async function getAllDownloads() : Promise<downloadObject[]> {
	const apiURL = process.env.FETCH_PATH
	const internalKey = process.env.INTERNAL_LOGIN_KEY

	if (!apiURL || !internalKey) return []

	try {
		const response = await fetch(apiURL + "/downloads", {
			method: "GET",
			headers: {
				"int_key": internalKey
			}
		})

		if (!response.ok) return []

		const data: downloadResult = await response.json()
		return Array.isArray(data.result) ? data.result : []
	} catch {
		return []
	}
}