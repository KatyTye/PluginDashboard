"use client"

import { downloadObject, DownloadsInfoContextType } from "@/src/lib/types";
import { createContext, useContext, useEffect, useState } from "react";

const DownloadsInfoContext = createContext<{
	data: downloadObject[] | undefined;
	setData: React.Dispatch<React.SetStateAction<downloadObject[] | undefined>>;
} | null>(null);

export default function DownloadsDataProvider({ children, initialData }
	: { children: React.ReactNode, initialData?: downloadObject[] }) {
	const [data, setData] = useState<downloadObject[] | undefined>(initialData)

	useEffect(() => {
		if (initialData) {
			setData(initialData)
		}
	}, [initialData])

	return (
		<DownloadsInfoContext.Provider value={{ data, setData }}>
			{children}
		</DownloadsInfoContext.Provider>
	)
}

export function useDownloadInfoData() {
	const context = useContext(DownloadsInfoContext);

	return {
		downloadsList: context?.data,
		setDownloadsList: context?.setData
	}
}