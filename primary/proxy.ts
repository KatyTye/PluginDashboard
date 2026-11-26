import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl

	if (pathname=="/changelog") {
		return NextResponse.redirect(new URL("/downloads", request.url))
	} else {
		const cookies = request.cookies;
		const token = cookies.has("SE_PROFILE_TOKEN");

		if (!token && pathname !== "/profile/login" && !pathname.includes("verify")) {
			return NextResponse.redirect(new URL("/profile/login", request.url))
		} else if (token && pathname.includes("login")) return NextResponse.redirect(new URL("/profile", request.url))
	}
}

export const config = {
	matcher: ["/profile", "/profile/:path", "/changelog"],
}