import SpecialBox from "../SpecialBox";

export default function RankDocsComponent({version} : {version: number}) {

	if (version === 1) return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's rank system works.
		</p>
		<SpecialBox critical>
			This version is a pre-release intended for testing, not for use in production. As a result, documentation for its
			rank-management feature will not be provided.
		</SpecialBox>
	</>)

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's rank system works.
		</p>

		{ version < 37 && <SpecialBox critical>
			This version and all earlier versions have a permissions issue that prevents permissions assigned through the ranks
			system from being applied. As a result, ranks will not grant access to any commands or features; only players with
			operator (OP) status will have full access. If you use the ranks system, please update to version 0.3.7 or later for
			permissions to work correctly.
		</SpecialBox>}

		<h3 className="text-xl mt-10 font-bold">Description</h3>

		<p className="tracking-wide flex flex-col gap-5">
			<span>
				The rank system assigns players a rank that can have a name, color, prefix, suffix, priority, member count, and
				permissions. Rank settings are stored in `ranks.yml`, while each player's rank is stored in the player database.
			</span>

			<span>
				When a player joins, the plugin registers them if they are new, loads their rank permissions, and sets their nametag
				using that rank's color, prefix, and suffix.
			</span>
		</p>

		<section>

			<h3 className="text-xl mt-20 font-bold">Rank Management Command</h3>

			<p className="mt-5">
				<span className="font-bold">Aliased commands: </span>
				<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/rank</span>
				, <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/rm</span>
			</p>

			<p className="mt-5">
				<span className="font-bold">Permissions: </span>
				<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.manage.ranks</span>
				{ version >= 37 && <>, <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
					sessentials.*
				</span></>}
			</p>

			<h4 className="font-bold mt-5">Description</h4>

			<p>
				The <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/rankmanager</span> command
				allows authorized users to view and manage server ranks, including assigning ranks to players and editing rank
				names, prefixes, suffixes, colors, priorities, and permissions.
			</p>

			<h4 className="font-bold mt-5">Rank Assignment Behavior:</h4>

			<ul className="list-disc ml-5">
				<li className="mt-2">Rank IDs must be configured in the `ranks` list in `ranks.yml`.</li>
				<li className="mt-2">The rank's color is combined with its prefix for the nametag, and its suffix is also applied.</li>
				<li className="mt-2">Offline players can also be assigned a rank. Their new rank permissions and nametag
					are applied when they next join.</li>
				<li className="mt-2">A rank change for an online player updates their stored rank, refreshes their rank
					permissions, and updates their nametag.</li>
				<li className="mt-2">The plugin registers a new player with rank ID `0` and a starting balance of `0`.
					Existing player records are not registered again.</li>
				<li className="mt-2">Rank permissions are applied when a player joins. Editing a rank's permissions updates
					`ranks.yml`; the change is applied to players when their rank permissions are next loaded.</li>
			</ul>

			<h4 className="font-bold mt-5">Examples:</h4>

			<p className="p-5 bg-[#252729] light:bg-gray-400 mt-2 rounded-md">
				<span className="block">/rankmanager list</span>
				<span className="block">/rankmanager help</span>
				<span className="block">/rankmanager info 2</span>
				<span className="block">/rankmanager suffix 2 ★</span>
				<span className="block">/rankmanager color 2 &b</span>
				<span className="block">/rankmanager priority 2 10</span>
				<span className="block">/rankmanager permissions 2</span>
				<span className="block">/rankmanager prefix 2 [Mod]</span>
				<span className="block">/rankmanager change 2 Squirrel</span>
				<span className="block">/rankmanager rename 2 Moderator</span>
				<span className="block">/rankmanager permission 2 add essentials.fly</span>
				<span className="block">/rankmanager {`permission <rank id> <add/remove> <permission>`}</span>
				<span className="block">/rankmanager {`<help/list/change/rename/prefix/change/suffix/permissions/color/priority/info/details> <rank id> <text>`}</span>
			</p>

		</section>
	</>)
}