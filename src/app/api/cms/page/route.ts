import { NextResponse } from "next/server";

export async function GET() {
  // Simula latência de rede (1.2s) para testarmos o loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const pageData = [
    {
      id: "hero-1",
      resourceType: "hero-banner",
      props: {
        title: "Conectividade sem Limites",
        subtitle: "A tecnologia que move sua empresa para o próximo nível.",
        buttonText: "Saiba Mais",
        gradient: "from-purple-700 to-indigo-900",
      },
    },
    {
      id: "offers-001",
      resourceType: "offer-grid",
      props: {
        title: "Planos Recomendados",
        offers: [
          {
            title: "Empresarial 500",
            price: "149,90",
            features: ["IP Fixo", "Suporte 24h", "Cloud Backup"],
            isHighlighter: true, // Ajustado para bater com a prop do componente
          },
          {
            title: "Empresarial 300",
            price: "99,90",
            features: ["Wi-fi Business"],
            isHighlighter: false,
          },
        ],
      },
    },
    {
      id: "faq-nx-01",
      resourceType: "faq-accordion",
      props: {
        title: "Dúvidas Frequentes",
        items: [
          {
            question: "Como funciona a instalação?",
            answer:
              "Nossa equipe entra em contato em até 24h para agendamento.",
          },
          {
            question: "Existe fidelidade nos planos?",
            answer:
              "Sim, os planos empresariais possuem fidelidade de 12 meses.",
          },
        ],
      },
    },
  ];

  return NextResponse.json(pageData);
}
