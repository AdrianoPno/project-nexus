import React from "react";
import {
  CMSComponentProps,
  CMSComponentType,
} from "@/interfaces/cms.interface";
import { HeroBanner } from "./HeroBanner";
import { OfferGrid } from "./OfferGrid";
import { FAQAccordion } from "./FAQAccordion";

// Registro de componentes mapeados pelo resourceType do AEM/BFF
const COMPONENTS_MAP: Record<CMSComponentType, React.FC<any>> = {
  "hero-banner": HeroBanner,
  "offer-grid": OfferGrid,
  "faq-accordion": FAQAccordion,
};

interface CMSManagerProps {
  components: CMSComponentProps[];
}

const CMSManager = ({ components }: CMSManagerProps) => {
  // Fallback de segurança: se components for undefined ou não for array
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

        // Passamos o id como key e espalhamos as props
        return <Component key={component.id} {...component.props} />;
      })}
    </div>
  );
};

// Exportamos apenas o Default para evitar ambiguidade no Next.js
export default CMSManager;
