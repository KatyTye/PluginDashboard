export interface typesObject {
	name: string,
	tested: boolean
}

export interface downloadObject {
	version: string,
	released: boolean,
	"minecraft_versions": Array<typesObject>,
	"server_types": Array<typesObject>
}

export interface downloadResult {
	status: number,
	success: boolean,
	message: string,
	result: any
}