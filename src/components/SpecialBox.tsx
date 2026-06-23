import type React from "react";

export default function SpecialBox({children, critical = false}: Readonly<{children: React.ReactNode, critical?: boolean}>) {

	return (<p className={`mt-10 mb-10 p-10 pt-5 pb-5 border-l-2 ${critical && "bg-[#ff000040] border-l-red-500" || "bg-[#ffc40040] border-l-yellow-500"}`}>
		{children}
	</p>)
}