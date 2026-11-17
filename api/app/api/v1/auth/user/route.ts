import { NextRequest, NextResponse } from "next/server";
import checkAuthority from "@/src/helpers/auth";
import { getUserByName, updateUser } from "@/src/dal/users";
import { headers } from "next/headers";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
	const header = await headers()
	const secretKey = process.env.TOKEN_SECRET || ""
	
	if (!checkAuthority(header) || !header.has("user_password") || !header.has("user_name")) return Response.json({
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 400})

	try {
		const user = await getUserByName((header.get("user_name") || ""))
		const password = header.get("user_password") || ""

		if (!user) return NextResponse.json({
			"success": false,
			"message": "Could not find any user with that username."
		}, { status: 500, statusText: "Could not find any user with that username." })

		if (!user || !user.active || !(await compare(password, user.password))) return NextResponse.json({
			"success": false,
			"status": 401,
			"message": "You have entered the wrong email or password."
		}, { status: 401, statusText: "You have entered the wrong email or password." })

		const token = jwt.sign({
			"name": user.name,
			"email": user.email.split("@")[1],
			"plan": user.plan,
			"createdAt": user.createdAt
		}, secretKey, {
			algorithm: "HS256",
			subject: user.id,
			issuer: "sessentials-page",
			audience: "sessentials-api",
			expiresIn: "15m",
		})

		await updateUser(user.id, { token: token })

		return NextResponse.json({
			"status": 200,
			"success": false,
			"message": "Login successful and token created.",
			"tokens": {
				"auth": token,
				"decrypt": token,
				"validUntil": Date.now() + 60 * 60 * 1000
			}
		}, { status: 200 })
	} catch {
		return NextResponse.json({
			"success": false,
			"message": "Could not login to user."
		}, { status: 500 })	
	}
}