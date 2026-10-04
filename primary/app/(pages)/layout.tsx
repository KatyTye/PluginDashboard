"use client"

import DownloadsDataProvider from "@/src/components/contexts/downloads";
import { getAllDownloads } from "@/src/lib/dal/downloads";
import { downloadObject } from "@/src/lib/types";
import { useEffect, useState } from "react";

export default function Layout({children} : {children: React.ReactNode}) {
	const [data, setData] = useState<downloadObject[] | undefined>()

	useEffect(() => {
		async function loadData() {
			setData((await getAllDownloads()))
		}

		loadData()
	}, [])
	
	return (
		<DownloadsDataProvider initialData={data}>
			{children}
		</DownloadsDataProvider>
	)
}