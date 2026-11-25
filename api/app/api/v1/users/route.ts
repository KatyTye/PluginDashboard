import { NextRequest, NextResponse } from "next/server";
import checkAuthority from "@/src/lib/helpers/auth";
import { getUsers } from "@/src/lib/dal/users";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
	const header = await headers()
	
	if (!checkAuthority(header, true)) return Response.json({
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 400})

	try {
		const users = await getUsers()

		return NextResponse.json({
			"success": true,
			"message": "Here is a list of all the users.",
			"result": users.map(user => ({
				id: user.id,
				active: user.active,
				name: user.name,
				plan: user.plan
			}))
		}, { status: 200 })
	} catch {
		return NextResponse.json({
			"success": false,
			"message": "Could not get list of users."
		}, { status: 500 })	
	}
}