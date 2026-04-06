import React from "react";
import {
  CMSComponentProps,
  CMSComponentType,
} from "@/interfaces/cms.interface";
import { HeroBanner } from "./HeroBanner";
import { OfferGrid } from "./OfferGrid";

// Registro de componentes reais
const COMPONENTS_MAP: Record<CMSComponentType, React.FC<any>> = {
  "hero-banner": HeroBanner,
  "offer-grid": OfferGrid,
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

        // Passamos o ID e desestruturamos as props que vêm do CMS
        return <Component key={component.id} {...component.props} />;
      })}
    </>
  );
};
