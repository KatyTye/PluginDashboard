import Link from "next/link";

export default function SidebarItemComponent({
	children,
	path,
	currentPath,
}: {
	children: React.ReactNode;
	path: string;
	currentPath: string;
}) {
	return (
		<Link
			href={path !== "dashboard" ? "/dashboard/" + path : "/" + path}
			className="flex items-center pl-5 gap-5 text-gray-400 hover:text-white duration-500
			transition-colors pt-2.5 pb-2.5 border-l-2 border-transparent bg-transparent flex-nowrap overflow-hidden"
			style={
				currentPath.replace("/dashboard/", "").includes(path.replace("/", ""))
					? {
							background: "var(--special-transparent)",
							color: "white",
							borderColor: "var(--special-color)",
						}
					: {}
			}
		>
			<div className="min-w-6 h-6">{children}</div>
			<span className="translate-y-0.5">
				{path.toUpperCase().charAt(0) + path.slice(1, path.length)}
			</span>
		</Link>
	);
}
