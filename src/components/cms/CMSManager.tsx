import React from "react";
import {
  CMSComponentProps,
  CMSComponentType,
} from "@/interfaces/cms.interface";

// Aqui registraremos os componentes reais conforme formos criando
const COMPONENTS_MAP: Record<CMSComponentType, React.FC<any>> = {
  "hero-banner": ({ title, description }: any) => (
    <section className="p-10 bg-blue-600 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>{description}</p>
    </section>
  ),
  "offer-grid": ({ offers }: any) => (
    <section className="p-10 grid grid-cols-3 gap-4">
      {offers?.map((o: any) => (
        <div key={o.id} className="border p-4">
          Oferta: {o.name}
        </div>
      ))}
    </section>
  ),
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
          console.warn(`Componente não mapeado: ${component.resourceType}`);
          return null;
        }
        return <Component key={component.id} {...component.props} />;
      })}
    </>
  );
};
