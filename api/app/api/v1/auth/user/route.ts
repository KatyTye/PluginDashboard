import { getUserByName, updateUser } from "@/src/lib/dal/users";
import { SendEmail } from "@/src/lib/helpers/nodemailer";
import { NextRequest, NextResponse } from "next/server";
import checkAuthority from "@/src/lib/helpers/auth";
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

		if (!user || !(await compare(password, user.password))) return NextResponse.json({
			"success": false,
			"status": 401,
			"message": "You have entered the wrong username or password."
		}, { status: 401, statusText: "You have entered the wrong username or password." })

		if (!user.active) return NextResponse.json({
			"success": false,
			"status": 302,
			"message": "Your account's email address is not verified."
		}, { status: 302, statusText: "Your account's email address is not verified." })

		if (header.has("session_key") && user.session_key !== "") {
			if (header.get("session_key")?.toString() !== user.session_key) return NextResponse.json({
				"status": 201,
				"success": false,
				"message": "Stopped for email verification.",
			}, { status: 201, statusText: "You have entered the wrong code." })

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
	
			await updateUser(user.id, { token: token, session_key: "" })
	
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
		} else {
			if (user.session_key === "") {
				const verifyCode = crypto.randomUUID().split("-")[0]
				
				await updateUser(user.id, { session_key: verifyCode })
				
				await SendEmail({
					"type": "verifyLogin",
					"reciver": user.email,
					"content": verifyCode
				})
			}

			return NextResponse.json({
				"status": 201,
				"success": false,
				"message": "Stopped for email verification.",
			}, { status: 201 })
		}
	} catch (error) {
		console.error("SOMETHING WENT WRONG:", error)

		return NextResponse.json({
			"success": false,
			"message": "Could not login to user."
		}, { status: 500 })	
	}
}