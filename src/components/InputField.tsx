export default function InputField({ name, id, type, placeholder, errors=0, required=false }:
	{ placeholder: string, name: string, id: string, errors?: number, type: HTMLInputElement["type"], required?: boolean }) {

	return (<div className="relative mt-5 w-full">
		<p className="absolute top-0 left-2 transform -translate-y-1/2 bg-[#191d20] pr-2 pl-2 text-(--text-second-color)">
			{name}:
		</p>
		<input type={type} name={id} id={id} placeholder={placeholder} required={required}
		className={`outline-none border-2 p-2 min-w-75 w-full rounded-lg focus:border-(--special-color) text-white pl-5 pr-5 autofill:text-red-500
		transition-colors duration-500${errors > 0 && " border-red-500" || ""}`} />
	</div>)
}