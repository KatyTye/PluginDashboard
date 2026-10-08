import SpecialBox from "../SpecialBox";

export default function Economy({version} : {version: number}) {

	if (version === 1) return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's economy system works.
		</p>
		<SpecialBox critical>
			This version of the plugin does not include an economy system. That feature is available only in version 0.1.1 and later,
			so you'll need to update to one of those versions to use it.
		</SpecialBox>
	</>)

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's economy system works.
		</p>

		<SpecialBox>
			Please note that <strong>UUID</strong> stands for "Universally Unique Identifier." It is a 36-bit of numbers and letters
			linked to your Minecraft account; it is unique to your specific account and cannot be changed or hidden when you
			connect to a server.
		</SpecialBox>

		<h3 className="text-xl mt-10 font-bold">Description</h3>

		<p className="tracking-wide">
			The economy system stores each player's balance in {version >= 100 ? "a csv file" : "the database"}, associated with
			their <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">UUID</span>. Balances are
			displayed with a <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">$</span> symbol.
			The commands covered here are <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
				balance</span> and <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
					economy</span> commands.
		</p>

		<section>
			<h3 className="text-xl mt-20 font-bold">Economy Management Command</h3>

			<p className="mt-5">
				<span className="font-bold">Aliased command: </span>
				<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/eco</span>
			</p>

			<p className="mt-5">
				<span className="font-bold">Permissions: </span>
				<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.economy</span>
				{ version >= 37 && <>, <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
					sessentials.*
				</span></>}
			</p>

			<h4 className="font-bold mt-5">Description</h4>

			<p>
				This feature allows users with the appropriate permissions to manage a player's balance. They can set it to a specific amount, add funds, or subtract funds as needed.
			</p>

			<h4 className="font-bold mt-5">Details:</h4>

			<p>
				Players can be online or offline, provided the server can find them by name. When the target is online, they
				receive a message about their changed balance. For an offline target, only the command sender receives the result message.
			</p>

			<h4 className="font-bold mt-5">Amount behavior:</h4>

			<p>
				The command rejects values that cannot be parsed as numbers. `set` rejects negative amounts, and `remove`
				rejects an amount that would make the balance negative. As implemented, `give` does not prevent the resulting
				balance from going below zero if a negative amount is supplied; a negative amount for `remove` effectively
				increases the balance.
			</p>

			<h4 className="font-bold mt-5">Tab completions:</h4>

			<p>
				The first argument suggests `give`, `remove`, and `set`, filtered by the text entered so far.
				Player-name suggestions for the second argument; the third argument has no suggestions.
			</p>

			<h4 className="font-bold mt-5">Examples:</h4>

			<p className="p-5 bg-[#252729] light:bg-gray-400 mt-2 rounded-md">
				<span className="block">/economy set Squirrel 250</span>
				<span className="block">/economy give Squirrel 25.50</span>
				<span className="block">/economy remove Squirrel 10</span>
				<span className="block">/economy {`<set/give/remove> <player> <amount>`}</span>
			</p>
		</section>

		<section>	
			<h3 className="text-xl mt-20 font-bold">Balance Command</h3>

			<p className="mt-5">
				<span className="font-bold">Aliased commands: </span>
				{version >= 37 && <><span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/money</span>, </>}
				<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/bal</span>
			</p>

			<h4 className="font-bold mt-5">Description</h4>

			<p>
				This feature lets you check your own balance or view the balance of another specified player. You can look up
				players who are currently online, as well as offline players whose information is known to the server.
			</p>

			<h4 className="font-bold mt-5">Short Info:</h4>

			<ul className="list-disc pl-5">
				<li className="mt-2">The balance is displayed to two decimal places.</li>
				<li className="mt-2">A player using `/balance` sees their own balance.</li>
				<li className="mt-2">No permission check is present in the balance command.</li>
				<li className="mt-2">A player or console using `/balance {`<player>`}` sees that player's balance.</li>
				<li className="mt-2">Console must specify a player; `/balance` by itself displays a usage message.</li>
				<li className="mt-2">The tab completions delegates suggestions for the first argument by returning `players`.</li>
			</ul>

			<p className="font-bold mt-5">Examples:</p>

			<p className="p-5 bg-[#252729] light:bg-gray-400 mt-2 rounded-md">
				<span className="block">/balance</span>
				<span>/balance {`<player>`}</span>
			</p>
		</section>
	</>)
}