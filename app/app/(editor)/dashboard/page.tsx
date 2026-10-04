"use client";

import DashboardBoxOne from "@/src/components/ui/dashboard/box-one";
import DashboardBoxTwo from "@/src/components/ui/dashboard/box-two";
import { getServerData } from "../provider";
import { redirect } from "next/navigation";
import DashboardBoxThree from "@/src/components/ui/dashboard/box-three";
import DashboardBoxFour from "@/src/components/ui/dashboard/box-four";

export default function DashboardPage() {
	const data = getServerData();
	if (!data) redirect("/");

	return (
		<div className="flex gap-5 justify-between flex-wrap">
			<DashboardBoxOne data={data} />
			<DashboardBoxTwo data={data} />
			<DashboardBoxThree data={data} />
			<DashboardBoxFour data={data} />
		</div>
	);
}
