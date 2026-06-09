import downloadsData from "../data/Downloads.json"

export async function returnPluginDownloads() {

	if (!import.meta.env.VITE_PROD) {
		return downloadsData
	} else {
		const fetchPath = import.meta.env.VITE_DOWNLOADS_URL
		const authKey = import.meta.env.VITE_DOWNLOADS_KEY

		let returnData = {
			status: 418,
			success: false,
			message: "Could not get any downloads data."
		};

		try {
			const repsone = await fetch(fetchPath, {
				method: "GET",
				headers: {
					Authorizer: `Bearer ${authKey}`
				}
			})

			const data = await repsone.json()

			if (data.success) {
				returnData = data.result
			} else {
				throw new Error("Failed to get downloads: " + data)
			}
		} catch (error) {
			console.error(error)
		}

		return returnData
	}
}