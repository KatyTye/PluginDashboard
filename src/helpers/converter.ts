export function convertTextToBoolean(text: string, defaultValue: boolean = true): boolean {
	if (text.toLowerCase() === "true") {
		return true
	} else if (text.toLowerCase() === "false") {
		return false
	} else {
		return defaultValue
	}
}