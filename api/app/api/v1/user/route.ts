import { NextRequest, NextResponse } from "next/server";
import checkAuthority from "@/src/helpers/auth";
import { createUser } from "@/src/dal/users";
import { headers } from "next/headers";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
	const header = await headers()
	
	if (!checkAuthority(header, true)) return Response.json({
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 400})

	if (!header.has("user_active") || !header.has("user_key") || !header.has("user_email")
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
				password: await bcrypt.hash(header.get("user_password") || "", 12),
				name: header.get("user_name") || "",
				activation_key: header.get("user_key") || "",
				plan: header.get("user_plan") || ""
			})
		} else {
			await createUser({
				active: header.get("user_active") === "true",
				email: header.get("user_email") || "",
				password: await bcrypt.hash(header.get("user_password") || "", 12),
				name: header.get("user_name") || "",
				activation_key: header.get("user_key") || ""
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