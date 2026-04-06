import { CMSManager } from "@/components/cms/CMSManager";
import { CMSPageData } from "@/interfaces/cms.interface";

// Mock de dados que viriam de uma API
const mockPageData: CMSPageData = {
  title: "Home Page Nexus",
  components: [
    {
      id: "1",
      resourceType: "hero-banner",
      props: {
        title: "Bem-vindo ao Project Nexus",
        description: "Simulando AEM Headless Architecture",
      },
    },
    {
      id: "2",
      resourceType: "offer-grid",
      props: {
        offers: [
          { id: "a", name: "Plano 100GB" },
          { id: "b", name: "Plano Unlimited" },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <CMSManager components={mockPageData.components} />
    </main>
  );
}
