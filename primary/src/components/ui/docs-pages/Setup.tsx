import SpecialBox from "../SpecialBox";

export default function Setup({version} : {version: number}) {

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This section of the documentation introduces the setups of your custom version of the plugin.
		</p>

		{ (version !== 1 && version < 100) && <>
			<h3 className="text-xl mt-10 font-bold">Configurations</h3>
			<p>
				Each plugin version creates a config file in its folder containing major switches and message text. Changing messages or non-toggle settings takes effect immediately and does not require reloading the plugin. Toggling feature-specific switches or changing major enable/disable switches requires a plugin reload to apply.
			</p>
		</>}

		{ version !== 1 ? <>		
			<h3 className="text-xl mt-10 font-bold">Details</h3>
			<p>
				You do not need to modify any files during setup — defaults are preconfigured for typical usage.
			</p>
			<p className="mt-5">
				<span className="font-bold">Whats preconfigured:</span> Core features and sensible toggles are enabled or set to recommended values. Features such as check-for-updates is disabled by default because it is unnecessary for most setups.
			</p>
			<p className="mt-5">
				<span className="font-bold">How to change config:</span> Each plugin version manages settings via the config file or in-game commands; some versions may also provide an edit page on this website. Which method is available depends on the plugin version.
			</p>
		</> :
			<SpecialBox critical>
				This version requires no setup process, and it is recommended to leave all files as they are.
			</SpecialBox>
		}

	</>)
}