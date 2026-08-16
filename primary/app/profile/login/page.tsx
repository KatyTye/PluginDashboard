import LoginForm from "@/components/forms/login-form";
import Link from "next/link";

export default function LoginPage() {

	return (<>
		<div className="w-fit self-center bg-(--box-background-color) flex-col items-center flex border-(--border-color) p-5 border-2 rounded-2xl">
			<h1 className="text-3xl font-bold">LOGIN</h1>
			<p className="mt-2 text-(--text-second-color) tracking-widest text-center">
				<span className="block">Enter your login information below,</span>
				<span>or <Link href={"/profile/register"} className="border-b-2 w-fit m-auto border-transparent transition-all 
					hover:border-(--special-color) duration-500 text-(--special-color) pb-0.5">
					register
				</Link> a new account!</span>
			</p>

			<LoginForm />
		</div>
	</>)
}