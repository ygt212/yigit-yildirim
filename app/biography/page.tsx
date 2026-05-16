import { getSiteData } from "@/lib/api";
import ClientBiography from "./ClientBiography";

export const metadata = {
  title: "Detaylı Biyografi | Yiğit Yıldırım",
  description: "Yiğit Yıldırım'ın detaylı biyografisi ve hikayesi.",
};

export default async function BiographyPage() {
  const data = await getSiteData();
  const fullBio = data.about.fullBio || data.about.description;

  return <ClientBiography fullBio={fullBio} />;
}
