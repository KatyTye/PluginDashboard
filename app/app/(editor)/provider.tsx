"use client";

import { returnTestData } from "@/src/lib/dal/testing";
import { ServerResponseType } from "@/src/lib/types/server";
import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";

type DashboardContextType = {
	data: ServerResponseType | undefined;
	setData: Dispatch<SetStateAction<ServerResponseType | undefined>>;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export default function DataProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const JSON_DATA = returnTestData();
	const [data, setData] = useState<ServerResponseType | undefined>(JSON_DATA);

	return (
		<DashboardContext value={{ data, setData }}>
			{children}
		</DashboardContext>
	);
}

export function getServerData() {
	const context = useContext(DashboardContext);

	return context?.data?.result;
}
