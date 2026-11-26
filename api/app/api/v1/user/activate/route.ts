import { getUserByName, updateUser } from "@/src/lib/dal/users";
import checkAuthority from "@/src/lib/helpers/auth";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST() {
	const header = await headers()
	
	if (!checkAuthority(header, true) || !header.has("activation_code")) return Response.json({
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 400})

	const code = header.get("activation_code")?.replaceAll("%3D", "=") || ""
	const decodedCode = atob(code).split("---")

	const username = decodedCode[1]
	const email = decodedCode[0]

	const user = await getUserByName(username)

	if (user == null) return NextResponse.json({"success": false, "message": "User does not exist."}, {status: 404})

	if (user.active) return NextResponse.json({"success": false, "message": "User is already activated."}, {status: 200})

	if (user.email === email) {
		await updateUser(user.id, {active: true})

		return NextResponse.json({
			"success": true,
			"message": "User has been activated."
		}, {status: 200})
	}

	return NextResponse.json({"success": false, "message": "User email does not match email from activation code."}, {status: 400})
}