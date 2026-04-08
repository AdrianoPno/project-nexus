// src/app/page.tsx
import CMSManager from "@/components/cms/CMSManager"; // Caminho corrigido

async function getPageData() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/cms/page", {
      // Usamos apenas o revalidate: 0 dentro do objeto next
      next: { revalidate: 0 },
    });

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Erro ao buscar dados do CMS:", error);
    return [];
  }
}

export default async function Home() {
  const componentsData = await getPageData();

  return (
    <main className="min-h-screen pt-20">
      <CMSManager components={componentsData || []} />
    </main>
  );
}
