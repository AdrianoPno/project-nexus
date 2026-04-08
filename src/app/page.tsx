import { CMSManager } from "@/components/cms/CMSManager";

async function getPageData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/cms/page`, { cache: "no-store" });
  if (!res.ok) throw new Error("Falha ao carregar CMS");
  return res.json();
}

export default async function Home() {
  const data = await getPageData();

  return (
    <main className="relative">
      <CMSManager components={data} />
    </main>
  );
}
