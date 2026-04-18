import CMSManager from "@/components/cms/CMSManager";

async function getPageData() {
  try {
    // Mantemos a busca da estrutura da página (Layout/Componentes)
    const res = await fetch("http://127.0.0.1:3000/api/cms/page", {
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
      {/* O CMSManager vai renderizar os blocos da página. 
          Um desses blocos (ex: OfferShowcase) será o responsável 
          por chamar o nosso novo useCampaigns.
      */}
      <CMSManager components={componentsData || []} />
    </main>
  );
}
