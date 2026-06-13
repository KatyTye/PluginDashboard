export default function Intro() {

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest">
			This section of the documentation introduces the plugins sections and related topics.
		</p>
		<p className="mt-10 mb-10 p-10 pt-5 pb-5 border-l-2 bg-[#ffc40040] border-l-yellow-500">
			This plugin is designed for any Minecraft server that supports plugins. It was created to solve a problem I discovered on many servers: there are too many separate plugins for different tasks. This plugin replaces all the plugins a server needs.
		</p>

		<h3 className="text-xl font-bold">The Sidebar</h3>
		<p>
			The left-side menu is a persistent, hierarchical index of every feature in the plugin, organized to help users find and learn about functionality quickly.
		</p>
		<p className="mt-5">
			<span className="font-bold">Structure:</span> Features are grouped into categories and subcategories by importance and function; high-priority or core features appear near the top of each category.
		</p>
		<p className="mt-5">
			<span className="font-bold">Entries:</span> Each entry shows the feature name and the minimum compatible plugin version.</p>
		<p className="mt-5">
			<span className="font-bold">Navigation:</span> Click an entry to jump (smooth scroll) to that feature’s section in the main content area.
		</p>
		<p className="mt-5">
			<span className="font-bold">Active state:</span> The currently visible section is highlighted in the menu; the highlight updates as the users click.
		</p>
		<h3 className="text-xl mt-10 font-bold">Content Boxes</h3>
		<p>
			These boxes appear throughout the documentation and are used to call attention to important information.
		</p>
		<p className="mt-5">There are two types:</p>
		<ul className="list-disc ml-5">
			<li className="mt-2">
				<span className="font-bold bg-[#ff000040] p-1 rounded-lg">Red (Critical):</span> Contains critical warnings or actions the user must take; treated as high priority and should be read before proceeding.
			</li>
			<li className="mt-2">
				<span className="font-bold bg-[#ffc40040] p-1 rounded-lg">Yellow (Note/Tip):</span> Contains helpful notes, tips, or clarifications that make using the feature easier but are not mandatory to read.
			</li>
		</ul>
	</>)
}