import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers"

export default async function checkAuthority(head: ReadonlyHeaders, admin?: boolean) {
	const internalKey = process.env.INTERNAL_LOGIN_KEY
	const adminKey = process.env.INTERNAL_ADMIN_KEY

	if (!head.has("int_key")) return false

	if (head.get("int_key") !== internalKey) return false

	if (admin) {
		if (!adminKey || !head.has("authorization")) return false

		if (adminKey.replace("Bearer ", "") !== adminKey) return false
	}

	return true
}