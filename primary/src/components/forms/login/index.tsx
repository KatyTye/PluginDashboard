"use client"

import { passwordSchema, usernameSchema } from "@/src/lib/schemas/user"
import { useActionState, useEffect, useState } from "react"
import loginAction, { LoginFormState } from "./action"
import z from "zod"

const initialState: LoginFormState = {
	data: {
		username: "",
		password: "",
		remember: false
	}
}

type errorsState = {
	username?: { errors: string[] },
	password?: { errors: string[] }
}

export default function LoginForm() {

	const [formState, formAction, pending] = useActionState<LoginFormState, FormData>(loginAction, initialState)

	const [errors, setErrors] = useState<errorsState>({})
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		const validated = usernameSchema.safeParse(username)
		setErrors({
			...errors,
			username: {errors: validated.error ? z.flattenError(validated.error).formErrors : []}
		})
	}, [username])

	useEffect(() => {
		const validated = passwordSchema.safeParse(password)
		setErrors({
			...errors,
			password: {errors: validated.error ? z.flattenError(validated.error).formErrors : []}
		})
	}, [password])

	useEffect(() => {
		setErrors({
			...formState?.error
		})
	}, [formState])

	return (<form action={formAction} className="mt-15 w-91 not-md:hidden">
		<label htmlFor="username" className="flex flex-col">
			<span className="font-bold text-[1.1rem] w-fit">
				Username:
			</span>
		<input type="text" name="username" id="username" disabled={pending}
		placeholder="Minecraft Username" value={username} className="w-full p-3.25 outline-0 bg-[#2d3134]
			rounded-2xl mt-2" onChange={elm => setUsername(elm.target.value)} />
		</label>
		<ul hidden={!errors?.username} className="mt-5">
			{
				errors?.username?.errors?.map((text, idx) => <li key={"login-username-" + idx}
				className="list-disc ml-5 text-red-700 mt-2.5" role="alert">
					{text}
				</li>)
			}
		</ul>

		<label htmlFor="password" className="flex flex-col mt-10">
			<span className="font-bold text-[1.1rem] w-fit">
				Password:
			</span>
		<input type="password" name="password" id="password" disabled={pending}
		placeholder="Password" value={password} className="w-full p-3.25 outline-0 bg-[#2d3134]
			rounded-2xl mt-2" onChange={elm => setPassword(elm.target.value)} />
		</label>
		<ul hidden={!errors?.password}>
			{
				errors?.password?.errors?.map((text, idx) => <li key={"login-password-" + idx}
				className="list-disc ml-5 text-red-700 mt-2.5" role="alert">
					{text}
				</li>)
			}
		</ul>

		<label htmlFor="remember" className="mt-10 mb-5 block">
			<input type="checkbox" name="remember" id="remember" className="mr-5 cursor-pointer accent-(--special-color)"
			checked={checked} onChange={event => setChecked(event.target.checked)}/>
			<span className="cursor-pointer">
				Remember login for 30 days only.
			</span>
		</label>

		{ (!formState.success && formState.message) &&
			<p className="text-red-700 text-center" role="alert">
				{formState.message}
			</p>
		}

		<button type="submit" className="rounded-lg mt-5 p-3.25 pl-10 pr-10 font-bold transition-all
		duration-500 bg-(--special-color) hover:bg-amber-700 w-full cursor-pointer" disabled={pending}>
			{pending? "LOGGING IN" : "LOG IN"}
		</button>
	</form>)
}