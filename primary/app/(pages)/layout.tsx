"use client"

import DownloadsDataProvider from "@/src/components/contexts/downloads";
import { getAllDownloads } from "@/src/lib/dal/downloads";
import FooterComponent from "@/src/components/ui/Footer";
import HeaderComponent from "@/src/components/ui/Header";
import { downloadObject } from "@/src/lib/types";
import { useEffect, useState } from "react";

export default function Layout({children} : {children: React.ReactNode}) {
	const [data, setData] = useState<downloadObject[] | undefined>()
	const [lightTheme, setLightTheme] = useState(false)

	useEffect(() => {
		async function loadData() {
			setData((await getAllDownloads()))
		}

		loadData()
	}, [])
	
	return (
		<body className={lightTheme ? "scheme-light" : "scheme-dark"}>
			<HeaderComponent setTheme={setLightTheme} />
			<DownloadsDataProvider initialData={data}>
				<main className="page-content flex flex-col p-4 md:p-20 pt-10 pb-10">
					{children}
				</main>
			</DownloadsDataProvider>
			<FooterComponent />
		</body>
	)
}