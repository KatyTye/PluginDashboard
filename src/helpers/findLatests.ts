export function findLatestValue<T extends Record<string, any>, K extends keyof T, W extends keyof T>
	(array: T[], key: K, where: W) {

	const gottenKeys = array.map(obj => {
		if (obj[where] === true) {
			return obj[key]
		}
	})

	return gottenKeys[1]
}