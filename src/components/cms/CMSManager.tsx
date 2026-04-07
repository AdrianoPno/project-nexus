import React from "react";
import {
  CMSComponentProps,
  CMSComponentType,
} from "@/interfaces/cms.interface";
import { HeroBanner } from "./HeroBanner";
import { OfferGrid } from "./OfferGrid";
import { FAQAccordion } from "./FAQAccordion";

// Registro de componentes reais
const COMPONENTS_MAP: Record<CMSComponentType, React.FC<any>> = {
  "hero-banner": HeroBanner,
  "offer-grid": OfferGrid,
  "faq-accordion": FAQAccordion,
};

export const CMSManager = ({
  components,
}: {
  components: CMSComponentProps[];
}) => {
  return (
    <>
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
    </>
  );
};
