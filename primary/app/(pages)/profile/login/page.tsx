import LoginForm from "@/src/components/forms/login";
import Link from "next/link";

export default function LoginPage() {

	return (<>
		<div className="w-fit self-center bg-(--box-background-color) flex-col items-center flex border-(--border-color) p-5 border-2 rounded-2xl">
			<h1 className="text-3xl font-bold">LOGIN</h1>
			<p className="mt-2 text-(--text-second-color) tracking-widest text-center not-md:hidden">
				<span className="block">Enter your login information below,</span>
				<span>or <Link href={"/profile/register"} className="border-b-2 w-fit m-auto border-transparent transition-all 
					hover:border-(--special-color) duration-500 text-(--special-color) pb-0.5">
					register
				</Link> a new account!</span>
			</p>

			<p className="text-red-700 tracking-widest text-center md:hidden">
				Accounts can't be accessed on this device!
			</p>

			<Link href={"/"} className="rounded-lg mt-5 p-4 pl-10 pr-10 font-bold transition-all
			duration-500 bg-(--special-color) hover:bg-amber-700 md:hidden">
				Return Home
			</Link>

			<LoginForm />
		</div>
	</>)
}