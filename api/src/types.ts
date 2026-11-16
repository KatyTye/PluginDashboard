export type UserUpdateableType = {
	active?: boolean,
	RefreshToken?: string,
	activation_key?: string,
	email?: string,
	password?: string,
	name?: string,
	plan?: string
}

export type UserCreateType = {
	active: boolean,
	activation_key: string,
	email: string,
	password: string,
	name: string,
	plan?: string
}