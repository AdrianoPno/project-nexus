"use client";

import React, { ComponentType } from "react";
import dynamic from "next/dynamic";
import {
  CMSComponentProps,
  CMSComponentType,
} from "@/interfaces/cms.interface";

// 1. Re-declarando a interface (ou importe se estiver no arquivo de interfaces)
interface CMSManagerProps {
  components: CMSComponentProps[];
}

// 2. Importação Dinâmica do OfferGrid
const OfferGrid = dynamic(() => import("./OfferGrid"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-3xl" />,
});

// Importações estáticas dos outros
import { HeroBanner } from "./HeroBanner";
import { FAQAccordion } from "./FAQAccordion";

// 3. Ajuste no Mapa: Usamos ComponentType<any> para aceitar componentes dinâmicos e estáticos
const COMPONENTS_MAP: Record<CMSComponentType, ComponentType<any>> = {
  "hero-banner": HeroBanner,
  "offer-grid": OfferGrid,
  "faq-accordion": FAQAccordion,
};

const CMSManager = ({ components }: CMSManagerProps) => {
  if (!Array.isArray(components)) {
    console.error("[CMSManager] A prop 'components' deve ser um array.");
    return null;
  }

  return (
    <div className="cms-container">
      {components.map((component) => {
        const Component = COMPONENTS_MAP[component.resourceType];

        if (!Component) {
          console.warn(
            `[CMSManager] Componente não encontrado: ${component.resourceType}`,
          );
          return null;
        }

        return <Component key={component.id} {...component.props} />;
      })}
    </div>
  );
};

export default CMSManager;
