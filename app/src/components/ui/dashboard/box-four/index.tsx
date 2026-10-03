import { ResultType } from "@/src/lib/types/server";
import { FaShieldAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";

export default function DashboardBoxFour({ data }: { data: ResultType }) {
	return (
		<div className="w-full justify-between flex gap-5 lg:gap-10">
			<div
				className="bg-(--box-background-color) border-(--border-color) p-5 min-w-42 w-full
				border-2 rounded-2xl flex flex-col items-center"
			>
				<p className="tracking-[1px] font-bold uppercase text-lg">
					Active Players
				</p>
				<ul className="w-full mt-5">
					{data.online_players.slice(0, 3).map((player, index) => (
						<li
							className="flex flex-wrap not-xl:justify-center gap-5 w-full justify-between not-first:mt-10"
							key={"active-player-" + index}
						>
							<div className="flex not-xl:flex-wrap not-xl:justify-center gap-5">
								<div className="w-12 h-12 bg-[#00000035] p-4 rounded-full ">
									{player.player_info.staff ? (
										<FaShieldAlt />
									) : (
										<FaUser />
									)}
								</div>
								<div>
									<p className="font-bold tracking-[1px]">
										{player.player_info.name}
									</p>
									<p className="text-(--text-second-color) tracking-wider text-[14px]">
										{player.uuid}
									</p>
								</div>
							</div>
							<div className="border-(--border-color) border-2 rounded-2xl p-2 pl-5 pr-5 tracking-wider uppercase font-bold scale-70">
								{player.server_info.location.world}
							</div>
						</li>
					))}
					<li className="flex justify-center w-full mt-10">
						<Link
							className="text-(--text-second-color) tracking-wider text-center border-(--border-color) border-2 rounded-xl p-2
							not-xl:mt-5 xl:pl-25 xl:pr-25 hover:text-white hover:border-gray-500 transition-colors duration-500"
							href={"/dashboard/players"}
						>
							View All Players
						</Link>
					</li>
				</ul>
			</div>
			<div
				className="bg-(--box-background-color) border-(--border-color) p-5 min-w-42 w-full
				border-2 rounded-2xl text-center flex flex-col items-center"
			>
				<p className="tracking-[1px] font-bold uppercase text-lg">
					World Analytics
				</p>
				<p className="mt-5 text-(--text-second-color) tracking-widest">
					Explore global data, including the size, scale, and total
					number of worlds, while comparing the differences between
					each world. Examine how they vary in structure, dimensions,
					population, resources, and other important characteristics.
				</p>
				<Link
					className="text-(--text-second-color)  mt-auto tracking-wider text-center border-(--border-color) border-2 rounded-xl
					p-2 not-xl:mt-5 xl:pl-25 xl:pr-25 hover:text-white hover:border-gray-500 transition-colors duration-500"
					href={"/dashboard/worlds"}
				>
					View All Worlds
				</Link>
			</div>
			<div
				className="bg-(--box-background-color) border-(--border-color) p-5 min-w-42 w-full
				border-2 rounded-2xl text-center flex flex-col items-center"
			>
				<p className="tracking-[1px] font-bold uppercase text-lg">
					Server Analytics
				</p>
				<p className="mt-5 text-(--text-second-color) tracking-widest">
					Analyze your Minecraft server data, including uptime,
					performance, activity, and other important server
					statistics. Compare different time periods and servers to
					identify trends, monitor growth, and understand how players
					interact with each server.
				</p>
				<Link
					className="text-(--text-second-color)  mt-auto tracking-wider text-center border-(--border-color) border-2 rounded-xl
					p-2 not-xl:mt-5 xl:pl-25 xl:pr-25 hover:text-white hover:border-gray-500 transition-colors duration-500"
					href={"/dashboard/analytics"}
				>
					View Analytics
				</Link>
			</div>
		</div>
	);
}
