import { ResultType } from "@/src/lib/types/server";
import { BsCpu } from "react-icons/bs";
import { FaMemory } from "react-icons/fa6";

export default function DashboardBoxTwo({ data }: { data: ResultType }) {
	const greenUsage = (data.info.usage.max_ram / 100) * 70;
	const orangeUsage = (data.info.usage.max_ram / 100) * 80;
	const totalUsage = (data.info.usage.ram / data.info.usage.max_ram) * 100;

	return (
		<div className="w-dvw max-w-3/10 2xl:max-w-100 not-lg:flex not-lg:gap-10 not-lg:max-w-none">
			<div
				className="w-full bg-(--box-background-color) border-(--border-color) p-5
					border-2 rounded-2xl relative min-w-60 max-w-100 not-lg:h-42.5"
			>
				<p className="uppercase flex items-center">
					<span className="text-(--text-second-color) text-[14px]">
						CPU usage
					</span>
					<span className="ml-auto w-5 h-5 inline-block">
						<BsCpu />
					</span>
				</p>
				<p className="font-bold text-2xl mt-2.5">
					{data.info.usage.cpu.toFixed(1)}%
				</p>
				<div className="w-full h-3 bg-[#00000035] rounded-full mt-5">
					<div
						className={`w-0 h-full rounded-full transition-all ${
							data.info.usage.cpu <= 70
								? "bg-green-600"
								: data.info.usage.cpu <= 80
									? "bg-(--special-color)"
									: "bg-red-600"
						}`}
						style={{ width: `${data.info.usage.cpu.toFixed(1)}%` }}
					></div>
				</div>
			</div>
			<div
				className="w-full bg-(--box-background-color) border-(--border-color) p-5
					border-2 rounded-2xl relative min-w-60 max-w-100 lg:mt-5 not-lg:h-42.5"
			>
				<p className="uppercase flex items-center">
					<span className="text-(--text-second-color) text-[14px]">
						RAM usage
					</span>
					<span className="ml-auto w-5 h-5 inline-block">
						<FaMemory />
					</span>
				</p>
				<p className="font-bold text-2xl mt-2.5">
					<span>{totalUsage.toFixed(1)}% </span>
					<span className="text-(--text-second-color) text-[14px] tracking-wider">
						({data.info.usage.ram.toFixed(1)} GB)
					</span>
				</p>
				<div className="w-full h-3 bg-[#00000035] rounded-full mt-5">
					<div
						className={`w-0 h-full rounded-full transition-all ${
							data.info.usage.ram <= greenUsage
								? "bg-green-600"
								: data.info.usage.ram <= orangeUsage
									? "bg-(--special-color)"
									: "bg-red-600"
						}`}
						style={{ width: `${totalUsage.toFixed(1)}%` }}
					></div>
				</div>
				<p className="text-right text-(--text-second-color) text-[14px] tracking-wider w-full mt-2.5">
					Max: {data.info.usage.max_ram.toFixed(1)} GB
				</p>
			</div>
		</div>
	);
}
