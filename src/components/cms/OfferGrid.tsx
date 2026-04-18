"use client"; // 1. OBRIGATÓRIO: Permite usar hooks (useState, useEffect)

import React, { useState } from "react";
import { Offer } from "@/interfaces/cms.interface";
import { useCampaigns } from "@/hooks/useCampaigns"; // 2. Importa o hook de integração

interface OfferGridProps {
  title?: string;
  offers: Offer[]; // Mantemos para não quebrar o contrato do CMSManager
}

const OfferGrid = ({ title, offers: initialOffers }: OfferGridProps) => {
  // 3. Estado para controlar a região selecionada (Simulando Geolocalização)
  const [region, setRegion] = useState("SP");

  // 4. Hook que busca as campanhas do NestJS baseadas na região
  const { campaigns, loading } = useCampaigns(region);

  return (
    <section id="offers-001" className="max-w-7xl mx-auto py-16 px-6">
      <div className="flex justify-between items-center mb-10">
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
        )}

        {/* 5. Seletor de Região (Temporário para teste da PN-0008) */}
        <select
          className="p-2 border border-gray-200 rounded-xl bg-white text-sm font-semibold shadow-sm focus:ring-2 focus:ring-purple-600 outline-none"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="MG">Minas Gerais</option>
        </select>
      </div>

      {/* 6. Feedback de Loading (Skeleton simples) */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-64 bg-gray-100 animate-pulse rounded-3xl"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* 7. Mapeamos 'campaigns' (da API) em vez de 'offers' (do CMS) */}
          {campaigns?.map((offer: any, index: number) => (
            <div
              key={offer.id || `offer-${index}`}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl flex flex-col h-full hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Ajustamos as propriedades para baterem com o retorno do NestJS (offer.name) */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.name}
                </h3>

                {/* Exemplo de Badge de Região vindo do Banco */}
                <div className="flex gap-2 mb-4">
                  {offer.availableRegions?.map((r: string) => (
                    <span
                      key={r}
                      className="text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded font-bold uppercase"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-purple-700">
                    R$ {offer.price || "99,90"}
                  </span>
                  <span className="text-gray-400 text-sm">/mês</span>
                </div>

                {/* Lista de features (pode vir do banco ou ser fixa por enquanto) */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    Velocidade Fibra em {region}
                  </li>
                </ul>
              </div>

              <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm mt-auto hover:bg-purple-700 transition-all">
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 8. Caso o banco esteja vazio para aquela região */}
      {!loading && campaigns.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          Nenhuma oferta disponível para {region} no momento.
        </p>
      )}
    </section>
  );
};

export default OfferGrid;
