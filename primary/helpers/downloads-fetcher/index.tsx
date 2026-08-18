import { cacheLife } from "next/dist/server/use-cache/cache-life";
import type { downloadResult } from "@/lib/utils";

export async function returnPluginDownloads() {
	"use cache"
	cacheLife("hours")

	let returnData: downloadResult = {
		status: 418,
		success: false,
		message: "Could not get any downloads data.",
		result: []
	}
	
	try {
		const fetchPath = process.env.FETCH_PATH
		const authKey = process.env.TEMP_FETCH_KEY

		if (!fetchPath || !authKey) {
			return returnData
		}
			
		const response = await fetch(fetchPath, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${authKey}`
			}
		})

		if (!response.ok) {
			throw new Error(`HTTP error ${response.status}`)
		}

		const data = await response.json()

		if (data.success) {
			returnData = data
		} else {
			throw new Error("Failed to get downloads: " + JSON.stringify(data))
		}
	} catch (error) {
		console.error("Error fetching downloads:", error)
	}

	return returnData
}