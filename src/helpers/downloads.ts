import downloadsData from "../data/Downloads.json";
import type { downloadResult } from "../lib/utils";

const CACHE_KEY = "downloadCache"
const CACHE_TIMESTAMP_KEY = "downloadCacheTimestamp"
const CACHE_DURATION = 3 * 60 * 60 * 1000

export async function returnPluginDownloads(): Promise<downloadResult> {

	let returnData: downloadResult = {
		status: 418,
		success: false,
		message: "Could not get any downloads data.",
		result: []
	}
	
	if (!import.meta.env.VITE_PROD || import.meta.env.VITE_PROD == false) {
		return downloadsData
	} else {
		try {
			const fetchPath = import.meta.env.VITE_DOWNLOADS_URL
			const authKey = import.meta.env.VITE_DOWNLOADS_KEY

			const currentTime = Date.now()

			const useCache = localStorage.getItem("settingsUseCache") === "true" || false

			const cachedData = localStorage.getItem(CACHE_KEY)
			const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY)

			if (useCache && cachedData && cachedTimestamp && (currentTime - Number(cachedTimestamp) < CACHE_DURATION)) {
				return JSON.parse(cachedData)
			} else if (useCache && cachedData) {
				localStorage.removeItem(CACHE_KEY)
				localStorage.removeItem(CACHE_TIMESTAMP_KEY)
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

				if (useCache) {
					localStorage.setItem(CACHE_KEY, JSON.stringify(data))
					localStorage.setItem(CACHE_TIMESTAMP_KEY, currentTime.toString())
				}
			} else {
				throw new Error("Failed to get downloads: " + JSON.stringify(data))
			}
		} catch (error) {
			console.error("Error fetching downloads:", error)
		}

		return returnData
	}
}