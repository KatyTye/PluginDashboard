import { Dispatch, SetStateAction } from "react"

export type changesObject = {
	"changes": number,
	"type": string,
	"name": string,
	"list": string[]

}

export type typesObject = {
	name: string,
	tested: boolean
}

export type loginResponse = {
	status: number,
	message: string,
	tokens?: {
		auth: string,
		decrypt: string,
		validUntil: number
	}
}

export type downloadObject = {
	notes?: string,
	version: string,
	released: boolean,
	downloadable: boolean,
	changelog?: changesObject[],
	"minecraft_versions": typesObject[],
	"server_types": typesObject[]
}

export type downloadResult = {
	status?: number,
	success: boolean,
	message: string,
	result: downloadObject[]
}

export type zodCheckFormObject = {
	username: string,
	password: string
}

export function findSpeficObject<T extends Record<string, any>, K extends keyof T>
	(array: T[], key: K, where: string, index?: number) {
	const filtered = array.filter(obj => obj[key] === where)
	const foundValue = filtered[index ? index : 0]

	return foundValue || {}
}

export type DownloadsInfoContextType = {
	data: downloadObject[] | undefined
	setData: Dispatch<SetStateAction<downloadObject | undefined>>
}