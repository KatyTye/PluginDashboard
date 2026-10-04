"use client"

import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { getServerData } from "../../provider"
import { FaUser } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

export default function PlayersPage() {
	const data = getServerData();

	if (data)

	return (
		<div className="bg-(--box-background-color) border-(--border-color) p-5 min-w-42 border-2 rounded-2xl">
			<p className="tracking-[1px] font-bold uppercase text-2xl text-center">
				All Players
			</p>

			<table className="w-full mt-5 mb-5 border-separate border-spacing-y-2">
				<thead className="uppercase font-bold text-lg">
					<tr className="grid grid-cols-5 gap-5 text-center p-2">
						<th>Type</th>
						<th>Name</th>
						<th>UUID</th>
						<th>World</th>
						<th>Banned</th>
					</tr>
				</thead>
				<tbody className="grid grid-cols-1 gap-5 mt-2.5 text-(--text-second-color)">
					{ data.online_players.map((player, index) =>
						<tr key={"player-" + index} className="grid grid-cols-5 gap-5 text-center border-(--border-color)
							rounded-2xl p-2 items-center border-2">
							<td className="flex justify-center text-white">
								<div className="w-12 h-12 bg-[#00000035] p-4 rounded-full ">
									{player.player_info.staff ? (
										<FaShieldAlt />
									) : (
										<FaUser />
									)}
								</div>
							</td>
							<td>{player.player_info.name}</td>
							<td>{player.uuid}</td>
							<td className="flex justify-center">
								<p className="bg-[#00000035] p-4 pt-2 pb-2 rounded-full text-[12px]
									tracking-wider uppercase font-bold w-fit text-white">
									{player.server_info.location.world}		
								</p>
							</td>
							<td className="flex justify-center">
									{ player.server_info.ban.status ? (
										<FaCheckCircle className="max-w-6 text-red-600" />
									) : (
										<IoCloseCircle className="max-w-[29.5px] text-green-600" />
									)}
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}