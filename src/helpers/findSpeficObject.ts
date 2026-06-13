export function findSpeficObject<T extends Record<string, any>, K extends keyof T>
	(array: T[], key: K, where: string, index?: number) {
	const filtered = array.filter(obj => obj[key] === where)
	const foundValue = filtered[index ? index : 0]

	return foundValue || {}
}