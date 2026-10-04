import { ResultType } from "./server"

export type ServerInfoResponseType = {
	status: number,
	message: string,
	claim_token?: string,
	result?: ResultType
}