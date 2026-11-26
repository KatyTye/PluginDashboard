"use client"

import { SlCheck, SlClose } from "react-icons/sl"
import { activateUser } from "@/src/lib/dal/user"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function VerifyAccountProfile() {
	const params = useParams()
	const code = params.code?.toString()

	const [accepted, setAccepted] = useState<null | boolean>(null)

	useEffect(() => {
		async function checkCode() {
			if (code !== undefined) setAccepted(
				await activateUser({code})
			)
		}

		checkCode()
	}, [code])

	return (<>
		<div className="w-fit self-center bg-(--box-background-color) flex-col items-center flex border-(--border-color) p-5 border-2
			rounded-2xl light:bg-gray-300 light:border-gray-400 gap-5">
			
			{ accepted === null ?
				<>
					<div className="w-20 h-20 text-(--special-color)">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eclipse</title><path fill="currentColor" d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"><animateTransform attributeName="transform" dur="1s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
					</div>
					
					<p className="mt-2 text-(--text-second-color) tracking-widest text-center light:text-gray-600">
						We're verifying your account activation now.
					</p>
				</> : accepted ? <>
					<div className="w-20 h-20 text-[#109f00]">
						<SlCheck className="w-full h-full" />
					</div>

					<p className="mt-2 text-(--text-second-color) tracking-widest text-center light:text-gray-600">
						<span className="block">Your email address has been</span> verified, and your account is now active.
					</p>
				</> : <>
					<div className="w-20 h-20 text-[#9f0000]">
						<SlClose className="w-full h-full" />
					</div>

					<p className="mt-2 text-(--text-second-color) tracking-widest text-center light:text-gray-600">
						<span className="block">We couldn't verify your activation code.</span> This may be because:
					</p>
					<ul className="list-disc pl-5 text-(--text-second-color)">
						<li>Something went wrong on our side.</li>
						<li>The activation code is invalid or expired.</li>
						<li>The user for the activation code does not exist.</li>
					</ul>
				</>
			}
		</div>
	</>)
}