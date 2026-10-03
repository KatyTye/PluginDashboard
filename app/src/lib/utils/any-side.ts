export function returnCleanPath(path: string): String {
	const cleanedText = path.split("/").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ")

	if (cleanedText == " ") {
		return ""
	}

	return cleanedText.replace("Dashboard ", "")
}

export const Gamemodes = [
	"Survival", "Creative", "Adventure", "Spectator"
]