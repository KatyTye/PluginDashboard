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
	status: number,
	success: boolean,
	message: string,
	result: downloadObject[]
}