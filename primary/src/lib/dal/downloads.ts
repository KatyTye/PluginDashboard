"use server"

import { downloadObject, downloadResult } from "../types"

export async function getAllDownloads() : Promise<downloadObject[]> {
	const apiURL = process.env.FETCH_PATH

	if (!apiURL) return []

	try {
		const response = await fetch(apiURL + "/downloads", {
			method: "GET"
		})

		if (!response.ok) return []

		const data: downloadResult = await response.json()
		return Array.isArray(data.result) ? data.result : []
	} catch {
		return []
	}
}