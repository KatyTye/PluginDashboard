import { Metadata } from "next"

export async function generateMetadata({ params } : { params: Promise<{ version: string }> }): Promise<Metadata> {
	const { version } = await params;

	return {
		title: `Changelog ${version}`,
	};
}

export default async function Layout({children} : {children: React.ReactNode}) {return (<>{children}</>)}