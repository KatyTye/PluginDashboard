export function findLatestValue<T extends Record<string, any>, K extends keyof T, W extends keyof T>
	(array: T[], key: K, where: W) {
	
	const filtered = array.filter(obj => obj[where] === true).reverse()
	return filtered[filtered.length - 1]?.[key]
}