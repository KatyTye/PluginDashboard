import SpecialBox from "../SpecialBox";

export default function SEssentialsDocsComponent({version} : {version: number}) {

	if (version === 1) return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's control system works.
		</p>
		<SpecialBox critical>
			This version of the plugin does not include this control system. That feature is available only in version 0.1.1 and later,
			so you'll need to update to one of those versions to use it.
		</SpecialBox>
	</>)

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's control system works.
		</p>

		<SpecialBox>
			Please note that the SEssentials command can't be turned off or disabled. It controls
			the plugin and can reload it; starting with version 1.0.0, it can also migrate the plugin to newer versions.
		</SpecialBox>

		<h3 className="text-xl mt-10 font-bold">Description</h3>

		<p className="tracking-wide">
			This is a modular utility feature for the plugin to provide core server management and player administration features.
			It utilizes a database-backed system to track player states—such as vanish, mute, and AFK status—and
			employs a manager-based architecture to handle events, community features, and custom commands.
		</p>

		<p className="mt-3">
			The plugin is highly configurable, allowing administrators to toggle the entire system or specific modules
			(like Community or Events) on and off via a config file. It also includes built-in tools for maintenance,
			such as a dynamic reload system and an automatic update checker to ensure the server is running the latest version.
		</p>

		<section>
			<h3 className="text-xl mt-20 font-bold">SEssentials Management Command</h3>

			<p className="mt-5">
				<span className="font-bold">Permissions: </span>
				{ version >= 47 ? 
					<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.settings</span>
					:
					<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.help</span>
				}
				{ version >= 37 && <>, <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
					sessentials.*
				</span></>}
			</p>

			<h4 className="font-bold mt-5">Description</h4>

			<p>
				This command provides help, plugin status, build-time information, and plugin reload functionality. Subcommands are case-insensitive.
			</p>

			<h4 className="font-bold mt-5">Tab completions:</h4>

			<p>
				For the first argument, suggests <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">help</span>
				, { version >= 47 && <><span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">toggle</span>, </>}
				<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">reload</span>, <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
				build</span>, and <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">status</span>, filtered
				by the text entered so far. Suggestions are not permission-filtered. No suggestions are provided for later arguments.
			</p>

			<h4 className="font-bold mt-5">Subcommands:</h4>

			<ul className="list-disc pl-5 mt-3">
				<li className="mt-3">
					<p>
						<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							/sessentials help
						</span> — Displays the available subcommands.
					</p>
				</li>
				<li className="mt-3">
					<p>
						<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							/sessentials build
						</span> — Displays the plugin build timestamp.
					</p>
				</li>
				<li className="mt-3">
					<p>
						<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							/sessentials status
						</span> — Displays the plugin's enabled state and configuration settings. It also runs an update check before showing the status.
					</p>
				</li>
				<li className="mt-3">
					<p>
						<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
							/sessentials reload
						</span> — Reloads the plugin configuration and re-registers its features. This subcommand
						can only be run by a player; console senders receive a message saying so.
					</p>
				</li>
				{ version >= 47 &&
					<li className="mt-3">
						<p>
							<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
								/sessentials toggle
							</span> — It toggles the entire plugin, so the plugin is either on or off—all features are enabled or disabled together.
						</p>
					</li>
				}
			</ul>
		</section>
	</>)
}