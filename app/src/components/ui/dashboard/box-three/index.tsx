import { ResultType } from "@/src/lib/types/server";
import { FaRegCircleStop } from "react-icons/fa6";
import { GiDeathSkull } from "react-icons/gi";
import { RiSave3Fill } from "react-icons/ri";
import { MdSaveAs } from "react-icons/md";

export default function DashboardBoxThree({ data }: { data: ResultType }) {
	return (
		<div className="w-full justify-between flex gap-5 lg:gap-10">
			<div
				className="bg-(--box-background-color) border-(--border-color) p-5 min-w-42 w-full
				border-2 rounded-2xl text-center flex flex-col items-center cursor-pointer"
			>
				<div className="w-15 h-15 bg-[#00000035] p-4 rounded-full">
					<MdSaveAs />
				</div>

				<p className="tracking-[1px] mt-4 uppercase text-orange-400 font-bold">
					Contiune
				</p>
				<p className="text-(--text-second-color) tracking-wider text-[14px]">
					Save and contiune session.
				</p>
			</div>
			<div
				className="bg-(--box-background-color) border-(--border-color) p-5 min-w-42 w-full
				border-2 rounded-2xl text-center flex flex-col items-center cursor-pointer"
			>
				<div className="w-15 h-15 bg-[#00000035] p-4 rounded-full">
					<GiDeathSkull />
				</div>

				<p className="tracking-[1px] mt-4 uppercase text-red-400 font-bold">
					Kill
				</p>
				<p className="text-(--text-second-color) tracking-wider text-[14px]">
					Remove any changes and kill session.
				</p>
			</div>
			<div
				className="bg-(--box-background-color) border-(--border-color) p-5 min-w-42 w-full
				border-2 rounded-2xl text-center flex flex-col items-center cursor-pointer"
			>
				<div className="w-15 h-15 bg-[#00000035] p-4 rounded-full">
					<RiSave3Fill />
				</div>

				<p className="tracking-[1px] mt-4 uppercase text-green-400 font-bold">
					Close
				</p>
				<p className="text-(--text-second-color) tracking-wider text-[14px]">
					Save and close session.
				</p>
			</div>
		</div>
	);
}
