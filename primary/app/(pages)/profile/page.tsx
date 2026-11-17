import LoadingComponent from "@/src/components/ui/Loading"
import { getUserInformation } from "@/src/lib/dal/user"
import { Suspense } from "react"

export default function ProfilePage() {

	return (
		<Suspense fallback={<LoadingComponent />}>
			<ProfileContent />
		</Suspense>
	)
}

async function ProfileContent() {
	const user = await getUserInformation()

	console.log(user)

	return (<>
		<h1>Profile</h1>
	</>)
}