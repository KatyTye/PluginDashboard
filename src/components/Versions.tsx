import { FaRegPaperPlane } from "react-icons/fa";
import type { typesObject } from "../lib/utils";
import { FaFaucetDrip } from "react-icons/fa6";
import { TbBucket } from "react-icons/tb";

function reutrnIcon(name: string, tested: boolean) {

	if (name.toLowerCase().includes("paper")) {
		return <FaRegPaperPlane className={tested ? "" : "text-red-600"} />
	} else if (name.toLowerCase().includes("bukkit")) {
		return <TbBucket className={tested ? "" : "text-red-600"} />
	} else if (name.toLowerCase().includes("spigot")) {
		return <FaFaucetDrip className={tested ? "" : "text-red-600"} />
	}

	return <></>
}

export default function Versions(data: Array<typesObject>, index: number, useIcons: boolean) {
	return (
		data.map((element, idx: number) =>
			<div key={"item-" + index + "-" + idx} className={`flex justify-center
			items-center gap-2 cursor-context-menu relative ${element.name.toLowerCase()}
			${element.tested ? "" : "text-red-600"}`}>

				{useIcons && reutrnIcon(element.name, element.tested) || <></>}
				<p className={element.tested ? "" : "text-red-600"}>
					{element?.name}
				</p>

				<div className="absolute opacity-0 hover:opacity-100 w-full transition-all duration-500">
					<p className="transform-[translateX(-35%)_translateY(-100%)] rounded-full bg-(--background-color)
						border-2 border-(--border-color) w-fit text-(--text-second-color) p-2 text-nowrap">
						{(
							element.tested ?
								element.name + " is fully testet and works."
								: element.name + " is not tested and may not work."
						)}
					</p>
				</div>
			</div>
		)
	)
}