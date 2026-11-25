import jsonDownloads from "@/src/lib/data/downloads.json" with { type: "json" };
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
	const header = await headers()

	if (!header.has("int_key")) return Response.json({
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 400})
	
	const internalKey = process.env.INTERNAL_LOGIN_KEY || "secret"
	const int_key = header.get("int_key")

	if (int_key !== internalKey) return Response.json({
		"success": false,
		"message": "Your request is missing something very important."
	}, {status: 401})
	
	return Response.json({
		"success": true,
		"message": "Here is the list of downloads.",
		"result": jsonDownloads
	}, {status: 200})
}