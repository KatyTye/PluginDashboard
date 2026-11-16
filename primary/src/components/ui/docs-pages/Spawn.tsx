import SpecialBox from "../SpecialBox";

export default function SpawnDocsComponent({version} : {version: number}) {

	if (version === 1) return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's spawn system works.
		</p>
		<SpecialBox critical>
			This version of the plugin does not include the spawn command. That feature is available only in version 0.1.1 and later,
			so you'll need to update to one of those versions to use it.
		</SpecialBox>
	</>)

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's spawn system works.
		</p>

		<section>
			<h3 className="text-xl mt-20 font-bold">Spawn Command</h3>

			<p className="mt-5">
				<span className="font-bold">Permissions: </span>
				If <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">settings.spawn-permission</span> is enabled,
				the sender needs <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.spawn</span> or <span
				className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.*</span>. Teleporting another player
				also requires <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.spawn.others</span> or <span
				className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.*</span>.				
			</p>

			<h4 className="font-bold mt-5">Description</h4>

			<p>
				The <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/spawn</span> command teleports the sender to the
					default spawn, or teleports a specified online player to the default or a named spawn. {
					version <= 99 && <>Spawn locations are loaded from <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
						locations.yml
						</span>.
					</>
				}
			</p>

			<p className="mt-3">
				A player can use <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/spawn</span> to teleport themself to
				the default spawn. To teleport another player, provide their exact online name; an optional spawn name can follow it. The console
				must provide a player name.
			</p>

			<h4 className="font-bold mt-5">Behavior:</h4>

			<ul className="list-disc pl-5 mt-3">
				<li className="mt-3">
					<p>
						<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							/spawn
						</span> — teleports a player to the default spawn.
					</p>
				</li>
				<li className="mt-3">
					<p>
						<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							{`/spawn <player> [spawn]`}
						</span> — teleports the named online player. If no spawn is given, the default is used.
					</p>
				</li>
				{ version <= 99 &&
					<li className="mt-3">
						<p>
							A supplied spawn name must be listed under <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
								spawns</span> in <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">locations.yml</span>.
						</p>
					</li>
				}
				<li className="mt-3">
					<p>
						If the configured spawn world cannot be found, the command logs a warning and returns without teleporting.
					</p>
				</li>
				<li className="mt-3">
					<p>
						The command's general permission check is controlled by <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							settings.spawn-permission</span>.
					</p>
				</li>
			</ul>

			<h4 className="font-bold mt-5">Examples:</h4>

			<p className="p-5 bg-[#252729] light:bg-gray-400 mt-2 rounded-md">
				<span className="block">/spawn</span>
				<span className="block">/spawn squirrel</span>
				<span className="block">/spawn squirrel event</span>
			</p>
		</section>

		<section>	
			<h3 className="text-xl mt-20 font-bold">Set Spawn Command</h3>

			<p className="mt-5">
				<span className="font-bold">Permissions: </span>
				<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.spawn.set</span>
				{ version >= 37 && <>, <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
					sessentials.*
				</span></>}		
			</p>

			<h4 className="font-bold mt-5">Description</h4>

			<p>
				The /setspawn command saves the player's current location to locations.yml as a spawn point. Spawn names are stored in lowercase.
				If a name is provided, the command also stores the price and cooldown values; both default to 0.
			</p>

			<h4 className="font-bold mt-5">Behavior:</h4>

			<ul className="list-disc pl-5 mt-3">
				<li className="mt-3">
					<p>
						<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							{`/setspawn <name> [price] [cooldown]`}
						</span> — creates or updates the named spawn at the player's current location.
					</p>
				</li>
				{ version <= 99 &&
					<li className="mt-3">
						<p>
							<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/setspawn</span> without a name updates
							the location of the first spawn listed under <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							spawns</span> in <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">locations.yml</span>.
						</p>
					</li>
				}
				<li className="mt-3">
					<p>
						The command requires a player and the appropriate permission.
					</p>
				</li>
			</ul>

			<p className="font-bold mt-5">Examples:</p>

			<p className="p-5 bg-[#252729] light:bg-gray-400 mt-2 rounded-md">
				<span className="block">/setspawn</span>
				<span className="block">/setspawn event</span>
				<span>/setspawn 100 30</span>
			</p>
		</section>
	</>)
}