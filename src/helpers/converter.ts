export function convertTextToBoolean(text: string, defaultValue: boolean = true): boolean {
	if (text === "true") {
		return true
	} else if (text === "false") {
		return false
	} else {
		return defaultValue
	}
}