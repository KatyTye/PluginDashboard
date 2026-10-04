import jsonDownloads from "@/src/data/downloads.json" with { type: "json" };
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	
	return Response.json({
		"success": true,
		"message": "Here is the list of downloads.",
		"result": jsonDownloads
	}, {
		status: 200
	})
}