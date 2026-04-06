import React from "react";
import {
  CMSComponentProps,
  CMSComponentType,
} from "@/interfaces/cms.interface";
import { HeroBanner } from "./HeroBanner"; // Importando o componente real

// Registro de componentes reais
const COMPONENTS_MAP: Record<CMSComponentType, React.FC<any>> = {
  "hero-banner": HeroBanner, // Agora ele aponta para o componente estilizado
  "offer-grid": (
    { offers }: any, // Mantemos o mock até criarmos o OfferGrid real
  ) => (
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {offers?.map((o: any) => (
        <div
          key={o.id}
          className="border-2 border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="text-purple-600 font-bold text-sm uppercase">
            Oferta
          </span>
          <h3 className="text-xl font-bold mt-2">{o.name}</h3>
          <button className="mt-4 w-full py-2 bg-gray-900 text-white rounded-lg">
            Ver Detalhes
          </button>
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
