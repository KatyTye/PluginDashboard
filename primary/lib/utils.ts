interface changesObject {
	"changes": number,
	"type": string,
	"name": string,
	"list": string[]

}

export interface typesObject {
	name: string,
	tested: boolean
}

export interface downloadObject {
	notes?: string,
	version: string,
	released: boolean,
	downloadable: boolean,
	changelog?: changesObject[],
	"minecraft_versions": typesObject[],
	"server_types": typesObject[]
}

export interface downloadResult {
	status?: number,
	success: boolean,
	message: string,
	result: downloadObject[]
}

export interface zodCheckFormObject {
	username: string,
	password: string
}

export function findSpeficObject<T extends Record<string, any>, K extends keyof T>
	(array: T[], key: K, where: string, index?: number) {
	const filtered = array.filter(obj => obj[key] === where)
	const foundValue = filtered[index ? index : 0]

	return foundValue || {}
}