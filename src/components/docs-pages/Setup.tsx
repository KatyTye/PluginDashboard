export default function Setup() {

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest">
			This section of the documentation introduces the setups of your custom version of the plugin.
		</p>
		<p className="mt-10 mb-10 p-10 pt-5 pb-5 border-l-2 bg-[#ff000040] border-l-red-500">
			Please note that the <span className="font-bold">Configurations</span> section applies only to versions greater than 0.0.1 and less than 1.0.0. It does not apply to 0.0.1 or to 1.0.0 and later.
		</p>
		<h3 className="text-xl mt-10 font-bold">Configurations</h3>
		<p>
			Each plugin version creates a config file in its folder containing major switches and message text. Changing messages or non-toggle settings takes effect immediately and does not require reloading the plugin. Toggling feature-specific switches or changing major enable/disable switches requires a plugin reload to apply.
		</p>
		<h3 className="text-xl mt-10 font-bold">Details</h3>
		<p>
			You do not need to modify any files during setup — defaults are preconfigured for typical usage.
		</p>
		<p className="mt-5">
			<span className="font-bold">What’s preconfigured:</span> Core features and sensible toggles are enabled or set to recommended values. Features such as check-for-updates is disabled by default because it is unnecessary for most setups.
		</p>
		<p className="mt-5">
			<span className="font-bold">How to change config:</span> Each plugin version manages settings via the config file or in-game commands; some versions may also provide an edit page on this website. Which method is available depends on the plugin version.
		</p>
	</>)
}