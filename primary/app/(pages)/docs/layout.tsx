import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
	title: "Documentation"
}

export default async function Layout({children} : {children: React.ReactNode}) {
	return (
		<Suspense fallback={<div className="text-center">Loading documentation...</div>}>
			{children}
		</Suspense>
	)
}