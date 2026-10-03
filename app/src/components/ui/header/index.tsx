"use client";

import { returnCleanPath } from "@/src/lib/utils/any-side";
import { MdOutlineSettings } from "react-icons/md";
import { usePathname } from "next/navigation";
import { LuHouse } from "react-icons/lu";
import Link from "next/link";

export default function HeaderComponent({ loggedIn }: { loggedIn: boolean }) {
	const pathname = usePathname();
	const locationName = returnCleanPath(pathname);

	return (
		<header
			className="flex flex-col gap-5 justify-center sm:grid md:grid-cols-2 items-center p-4 pl-20 pr-20 
			border-b-2 border-(--border-color) bg-(--background-second-color) md:h-25"
		>
			<div className="flex items-center">
				<Link
					href={loggedIn ? "/" : "/login"}
					className="text-2xl font-bold block
					hover:text-(--special-color) w-37 duration-500"
				>
					<span>SEssentials</span>
					<span className="text-gray-600 block text-[14px] -translate-y-1">
						Plugin Management
					</span>
				</Link>

				<p className="ml-5 border-l-2 not-sm:hidden h-8 border-white pl-5 font-bold text-lg flex">
					<span className="self-center">
						{locationName === "" ? "Welcome" : locationName}
					</span>
				</p>
			</div>

			<nav className="flex items-center justify-center md:justify-end gap-10">
				<a
					href="https://sessentials.org/"
					className="w-6 h-6 hover:text-(--special-color) duration-500
					text-(--text-second-color)"
					target="_self"
				>
					<LuHouse />
				</a>
				<Link
					href="/settings"
					className="not-md:hidden w-6 h-6 hover:text-(--special-color) duration-500
					text-(--text-second-color)"
				>
					<MdOutlineSettings />
				</Link>
			</nav>
		</header>
	);
}
