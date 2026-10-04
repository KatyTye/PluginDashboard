import SpecialBox from "../SpecialBox";

export default function Api() {

	return (<>
		<p className="mt-2 text-(--text-second-color) tracking-widest">
			This part of the documentation will tell you how our API for the plugin works.
		</p>
		<SpecialBox critical={true}>
			The API documentation will only be created once version 1.0.0 is released, and anything below 1.0.0 doesn't interact with the API.
		</SpecialBox>
		{/* <SpecialBox critical={true}>
			This documentation will not show or demonstrate the plugins API functionality since it is private, but it will explain its structure below.
		</SpecialBox> */}
	</>)
}