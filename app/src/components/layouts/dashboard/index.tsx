"use client";

import {
	TbLayoutSidebarLeftCollapse,
	TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import SidebarItemComponent from "@/src/components/ui/sidebar-item";
import {
	LuLayoutList,
	LuMessageCircleMore,
	LuSquareSlash,
	LuUsers,
} from "react-icons/lu";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { FiDatabase } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";

export default function DashboardComponent({
	children,
}: {
	children: ReactNode;
}) {
	const [collapse, setCollapse] = useState(false);
	const path = usePathname();

	return (
		<>
			<main className="flex not-md:hidden">
				<nav
					className="h-full border-r-2 border-(--border-color) bg-(--background-second-color) w-60
					p-5 pl-0 pr-0 transition-all duration-500 min-h-203.75"
					style={collapse ? { width: "68px" } : {}}
				>
					<button
						className="flex w-full justify-end pr-5 pl-5 mb-10 text-gray-400 hover:text-(--special-color)
						transition-colors duration-500"
					>
						<div
							onClick={() => setCollapse(!collapse)}
							className="min-w-6 h-6 cursor-pointer"
						>
							{collapse ? (
								<TbLayoutSidebarLeftExpand />
							) : (
								<TbLayoutSidebarLeftCollapse />
							)}
						</div>
					</button>
					<SidebarItemComponent path="dashboard" currentPath={path}>
						<LuLayoutList className="max-w-6 min-h-6" />
					</SidebarItemComponent>
					<SidebarItemComponent path="analytics" currentPath={path}>
						<MdOutlineAnalytics className="max-w-6 min-h-6" />
					</SidebarItemComponent>
					<SidebarItemComponent path="features" currentPath={path}>
						<IoExtensionPuzzleOutline className="max-w-6 min-h-6" />
					</SidebarItemComponent>
					<SidebarItemComponent path="commands" currentPath={path}>
						<LuSquareSlash />
					</SidebarItemComponent>
					<SidebarItemComponent path="messages" currentPath={path}>
						<LuMessageCircleMore />
					</SidebarItemComponent>
					<SidebarItemComponent path="players" currentPath={path}>
						<LuUsers />
					</SidebarItemComponent>
					<SidebarItemComponent path="worlds" currentPath={path}>
						<IoMdGlobe />
					</SidebarItemComponent>
					<SidebarItemComponent path="backups" currentPath={path}>
						<FiDatabase />
					</SidebarItemComponent>
					<SidebarItemComponent path="coding" currentPath={path}>
						<FaCode />
					</SidebarItemComponent>
				</nav>
				<div className="flex flex-col w-full h-fit overflow-x-hidden p-5">
					{children}
				</div>
			</main>
			<div className="md:hidden w-full h-full flex flex-col items-center justify-center gap-2.5"></div>
		</>
	);
}
