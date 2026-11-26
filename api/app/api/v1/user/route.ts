import { createUser, deleteUser, getUser } from "@/src/lib/dal/users";
import { SendEmail } from "@/src/lib/helpers/nodemailer";
import { NextRequest, NextResponse } from "next/server";
import checkAuthority from "@/src/lib/helpers/auth";
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
		const mail = header.get("user_email") || ""
		const username = header.get("user_name") || ""
		const isActive = header.get("user_active") === "true"
		const userPassword = await hash(header.get("user_password") || "", 12)

		if (header.has("user_plan")) {
			await createUser({
				active: isActive,
				email: mail,
				password: userPassword,
				name: username,
				plan: header.get("user_plan") || "free"
			})
		} else {
			await createUser({
				active: isActive,
				email: mail,
				password: userPassword,
				name: username,
				plan: "free"
			})
		}

		if (header.get("user_active") === "false") {
			await SendEmail({
				type: "verifyAccount",
				reciver: mail,
				content: btoa(`${mail}---${username}`)
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

export async function DELETE(request: NextRequest) {
	const header = await headers()
	
	if (!checkAuthority(header, true) || !header.has("user_id")) return Response.json({
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 400})

	try {
		const user = await deleteUser(header.get("user_id") || "")

		if (user == null) return NextResponse.json({"success": false, "message": "User does not exist."}, {status: 404})

		return NextResponse.json({
			"success": true,
			"message": "The user has been deleted."
		}, { status: 200 })
	} catch {
		return NextResponse.json({
			"success": false,
			"message": "Could not find user."
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

		if (user == null) return NextResponse.json({"success": false, "message": "User does not exist."}, {status: 404})

		return NextResponse.json({
			"success": true,
			"message": "Here is the user.",
			"result": user
		}, { status: 200 })
	} catch (error) {
		console.error("SOMETHING WENT WRONG:", error)

		return NextResponse.json({
			"success": false,
			"message": "Could not find user."
		}, { status: 500 })	
	}
}