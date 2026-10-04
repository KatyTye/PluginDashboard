import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { Gamemodes } from "@/src/lib/utils/any-side";
import { ResultType } from "@/src/lib/types/server";
import { CiServer } from "react-icons/ci";

export default function DashboardBoxOne({ data }: { data: ResultType }) {
	return (
		<div
			className="w-2/3 bg-(--box-background-color) flex flex-col border-(--border-color) p-5
				border-2 rounded-2xl relative min-w-130 h-fit"
		>
			<div className="z-0 w-40 h-40 absolute right-10 top-5 text-[#393939]">
				<CiServer />
			</div>
			<p
				className={`dot relative pl-5 uppercase text-[14px] tracking-[1.4px]
					${
						data.info.status
							? "text-green-600 before:bg-green-600"
							: "text-yellow-600 before:bg-amber-600"
					}`}
			>
				Server {data.info.status ? "Stable" : "Unstable"}
			</p>
			<p className="text-4xl relative font-bold mt-5 z-10">
				<span>
					{data.api.testing ? "Testing Server" : data.plugin.type}
				</span>
				{!data.api.testing && (
					<span> {Gamemodes[data.info.default_gamemode]}</span>
				)}
			</p>
			<ol className="mt-15 flex gap-10 justify-between pr-25 xl:pr-50">
				<li className="w-25">
					<p className="uppercase text-(--text-second-color) text-[14px]">
						Players
					</p>
					<p className="mt-2 text-3xl">
						<span>{data.info.online} </span>
						<span className="text-(--text-second-color) text-xl">
							/ {data.info.max_online}
						</span>
					</p>
				</li>
				<li className="w-25">
					<p className="uppercase text-(--text-second-color) text-[14px]">
						Ping
					</p>
					<p className="mt-2 text-3xl">
						<span>
							{(
								data.info.ping.value / data.info.ping.amount
							).toFixed(0)}{" "}
						</span>
						<span className="text-(--text-second-color) text-xl">
							ms
						</span>
					</p>
				</li>
				<li className="w-25">
					<p className="uppercase text-(--text-second-color) text-[14px]">
						Ranking
					</p>
					<p className="mt-2 text-3xl">
						{data.api.ranking && data.api.old_ranking ? (
							<>
								<span>{data.api.ranking} </span>
								<span className="text-(--text-second-color) text-xl">
									<span className="w-4 h-4 inline-block text-amber-600">
										{data.api.old_ranking >
										data.api.ranking ? (
											<FaAnglesUp className="text-green-600" />
										) : data.api.old_ranking ==
										  data.api.ranking ? (
											"~"
										) : (
											<FaAnglesDown className="text-red-600" />
										)}
									</span>
									{data.api.old_ranking >= data.api.ranking
										? data.api.old_ranking -
											data.api.ranking
										: data.api.ranking -
											data.api.old_ranking}
								</span>
							</>
						) : (
							<span>{data.api.testing ? "~" : "None"}</span>
						)}
					</p>
				</li>
			</ol>
		</div>
	);
}
