import { checkLoginField } from "../helpers/profile";
import { useState, type ChangeEvent } from "react";
import InputField from "../components/InputField";

export default function Profile() {
	const [usernameArray, setUsernameArray] = useState<string[]>([])

	const [passwordArray, setPasswordArray] = useState<string[]>([])

	function changeHandler(event: ChangeEvent<HTMLFormElement>) {
		const formElement = event.currentTarget
		const usernameInput = formElement.elements.namedItem("username") as HTMLInputElement | null
		const passwordInput = formElement.elements.namedItem("password") as HTMLInputElement | null

		const checkResults = checkLoginField({
			username: usernameInput?.value || "",
			password: passwordInput?.value || ""
		})

		if (event.target.id === "username") {
			setUsernameArray(checkResults.errors.username)
		} else {
			setPasswordArray(checkResults.errors.password)
		}
	}

	

	return (<>
		<article className="m-auto bg-(--box-background-color) max-w-125 border-(--border-color) p-5 pl-7.5 pr-7.5 border-2 rounded-2xl">
			<h2 className="font-bold text-4xl text-center">Account</h2>

			<p className="text-center text-(--text-second-color) mb-5 mt-2">
				These accounts are only for supporters to unlock special features, become the highest tier to get yours.
			</p>

			<form className="flex flex-col gap-3 items-center" onChange={changeHandler}>
				<InputField id="username" name="Username" type="text" placeholder="Enter your username here" errors={usernameArray.length} />
				<ul className="list-disc ml-3.5 mb-2.5 mr-auto text-red-500">
					{usernameArray.map((err, idx) => <li key={"a-list-" + idx}>{err}</li>)}
				</ul>
				<InputField id="password" name="Password" type="password" placeholder="Enter your password here" errors={passwordArray.length} />
				<ul className="list-disc ml-3.5 mb-2.5 mr-auto text-red-500">
					{passwordArray.map((err, idx) => <li key={"b-list-" + idx}>{err}</li>)}
				</ul>
				<button type="submit" className="bg-(--special-color) w-full p-3 mt-5 rounded-lg cursor-pointer font-bold
				transition-all duration-500 hover:bg-amber-700">
					Login
				</button>
			</form>
		</article>
	</>)
}