export type UserUpdateableType = {
	active?: boolean,
	token?: string,
	RefreshToken?: string,
	session_key?: string,
	email?: string,
	password?: string,
	name?: string,
	plan?: string
}

export type UserCreateType = {
	active: boolean,
	email: string,
	password: string,
	name: string,
	plan?: string
}

export type MailTypes = "deletedAccount" | "verifyAccount" | "verifyLogin" | "changedAccount"