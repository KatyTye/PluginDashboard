import SpecialBox from "../SpecialBox";

export default function ApiDocsComponent({version} : {version: number}) {

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest light:text-gray-600">
			This part of the documentation will tell you how our API for the plugin works.
		</p>

		{ version >= 100 ?
			<SpecialBox>
				The API documentation covers only the publicly available routes and endpoints, and is available exclusively on the API subdomain.
			</SpecialBox>
		:
			<SpecialBox critical>
				This version of the plugin does not interact with the API in any way. However, you can still visit the API subdomain to review the available public routes and learn how they work.
			</SpecialBox>
		}

		<p>
			Browse the publicly available routes and endpoints by visiting the <a href="https://api.sessentials.org/" target="_blank"
				className="font-bold transition-colors duration-500 text-white hover:text-(--special-color)">
				API subdomain</a> to find more information.
		</p>
	</>)
}