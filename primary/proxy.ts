import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl

	if (pathname=="/changelog") {
		return NextResponse.redirect(new URL("/downloads", request.url))
	} else {
		const cookies = request.cookies;
		const token = cookies.has("token");

		if (!token) {
			return NextResponse.redirect(new URL("/profile/login", request.url))
		}
	}
}

export const config = {
	matcher: ["/profile", "/changelog"],
}