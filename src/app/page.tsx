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
        title: "Nossas Melhores Ofertas",
        offers: [
          {
            id: "1",
            title: "Plano Fibra 500 Mega",
            price: "99,90",
            period: "mês",
            isHighlight: true,
            features: [
              "Wi-fi 6 incluso",
              "Instalação grátis",
              "Apps Vivo Música",
            ],
          },
          {
            id: "2",
            title: "Plano Mobile 100GB",
            price: "129,90",
            period: "mês",
            isHighlight: false,
            features: [
              "Roaming Internacional",
              "WhatsApp Ilimitado",
              "5G liberado",
            ],
          },
          {
            id: "3",
            title: "Combo Streaming+",
            price: "159,90",
            period: "mês",
            isHighlight: false,
            features: ["Disney+ e Star+", "Fibra 300 Mega", "Suporte 24h"],
          },
        ],
      },
    },
    {
      id: "faq-001",
      resourceType: "faq-accordion",
      props: {
        title: "Dúvidas Frequentes",
        items: [
          {
            question: "Como funciona a instalação?",
            answer:
              "Nossa equipe entra em contato em até 24h após a compra para agendar a visita técnica.",
          },
          {
            question: "Tenho fidelidade no plano?",
            answer:
              "Os planos de fibra possuem fidelidade de 12 meses com benefícios exclusivos.",
          },
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
