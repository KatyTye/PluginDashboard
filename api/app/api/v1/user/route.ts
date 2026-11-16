import { NextRequest, NextResponse } from "next/server";
import checkAuthority from "@/src/helpers/auth";
import { createUser, getUser } from "@/src/dal/users";
import { headers } from "next/headers";
import { hash } from "bcrypt";

export async function POST(request: NextRequest) {
	const header = await headers()
	
	if (!checkAuthority(header, true) || !header.has("user_active") || !header.has("user_email")
		|| !header.has("user_password") || !header.has("user_name")) return Response.json(
	{
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 400})

	try {
		if (header.has("user_plan")) {
			await createUser({
				active: header.get("user_active") === "true",
				email: header.get("user_email") || "",
				password: await hash(header.get("user_password") || "", 12),
				name: header.get("user_name") || "",
				activation_key: header.get("user_key") || crypto.randomUUID().split("-")[0],
				plan: header.get("user_plan") || "free"
			})
		} else {
			await createUser({
				active: header.get("user_active") === "true",
				email: header.get("user_email") || "",
				password: await hash(header.get("user_password") || "", 12),
				name: header.get("user_name") || "",
				activation_key: header.get("user_key") || crypto.randomUUID().split("-")[0],
				plan: "free"
			})
		}

		return NextResponse.json({
			"success": true,
			"message": "Created user."
		}, { status: 201 })
	} catch {
		return NextResponse.json({
			"success": false,
			"message": "Could not create user."
		}, { status: 500 })	
	}
}

export async function GET(request: NextRequest) {
	const header = await headers()
	
	if (!checkAuthority(header, true) || !header.has("user_id")) return Response.json({
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 400})

	try {
		const user = await getUser(header.get("user_id") || "")

		return NextResponse.json({
			"success": true,
			"message": "Here is the user.",
			"result": user
		}, { status: 200 })
	} catch {
		return NextResponse.json({
			"success": false,
			"message": "Could not find user."
		}, { status: 500 })	
	}
}