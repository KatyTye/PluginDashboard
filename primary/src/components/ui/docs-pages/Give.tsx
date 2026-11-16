import SpecialBox from "../SpecialBox";

export default function GiveDocsComponent({version} : {version: number}) {

	if (version === 1) return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's give command works.
		</p>
		<SpecialBox critical>
			This version of the plugin does not include the give command. That feature is available only in version 0.1.1 and later,
			so you'll need to update to one of those versions to use it.
		</SpecialBox>
	</>)

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation explains how the plugin's give command works.
		</p>

		<h3 className="text-xl mt-20 font-bold">Command</h3>

		<p className="mt-5">
			<span className="font-bold">Permissions: </span>
			<span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">sessentials.give</span>
			{ version >= 37 && <>, <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">
				sessentials.*
			</span></>}
		</p>

		<h4 className="font-bold mt-5">Description</h4>

		<p>		
			The <span className="bg-[#252729] light:bg-gray-400 pl-2.5 pr-2.5 p-0.4 rounded-md">/give</span> command lets an
			authorized sender place an item directly into the inventory of a player who is currently online. The sender
			supplies the target player's exact name and a material name that Bukkit recognizes; an optional amount can also
			be included. If no amount is provided, the command gives one item. When the command succeeds, it notifies
			both the sender and recipient, unless the sender is giving an item to themself, in which case the recipient
			receives a single confirmation. This command does not check whether the target has enough free inventory space,
			and the code does not validate that the amount is positive before creating the item stack.
		</p>

		<h4 className="font-bold mt-5">Behavior:</h4>

		<p>
			The command checks that the player and material are valid, creates the item stack, and adds it to the target's inventory.
			The sender and recipient receive confirmation messages.
		</p>

		<p className="mt-3">
			If the sender gives an item to themself, they receive a single confirmation message.
		</p>

		<h4 className="font-bold mt-5">Example:</h4>
		<p className="p-5 bg-[#252729] light:bg-gray-400 mt-2 rounded-md">
			<span className="block">{`/give <player> <material> [amount]`}</span>
		</p>
	</>)
}