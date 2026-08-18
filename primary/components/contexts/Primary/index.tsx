import ClientPrimaryProvider from "./ClientProvider";
import { returnPluginDownloads } from "@/helpers/downloads-fetcher";

export default async function PrimaryContextWrapper({ children } : { children: React.ReactNode; }) {

	const downloadsData = await returnPluginDownloads()

	return (
		<ClientPrimaryProvider downloadsData={downloadsData}>
			{children}
		</ClientPrimaryProvider>
	)
}