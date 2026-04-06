// src/app/page.tsx
import { CMSManager } from "@/components/cms/CMSManager";
import { CMSPageData } from "@/interfaces/cms.interface";

const mockPageData: CMSPageData = {
  title: "Home Page Nexus",
  components: [
    {
      id: "banner-001",
      resourceType: "hero-banner",
      props: {
        title: "O Futuro do Atendimento Digital",
        description:
          "Integração de CMS de alta performance para operações de larga escala.",
        ctaText: "Começar Agora",
        variant: "primary",
      },
    },
    {
      id: "offers-001",
      resourceType: "offer-grid",
      props: {
        offers: [
          { id: "1", name: "Plano Fibra 500 Mega" },
          { id: "2", name: "Plano Mobile 100GB" },
          { id: "3", name: "Combo Streaming+" },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <CMSManager components={mockPageData.components} />
    </main>
  );
}
