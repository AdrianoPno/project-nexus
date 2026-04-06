import { Offer } from "@/interfaces/cms.interface";

interface OfferGridProps {
  title?: string;
  offers: Offer[];
}

export const OfferGrid = ({ title, offers }: OfferGridProps) => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      {title && (
        <h2 className="text-3xl font-bold mb-10 text-gray-900 tracking-tight">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers?.map((offer) => (
          <div
            key={offer.id}
            className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Badge de Destaque */}
            {offer.isHighlight && (
              <span className="absolute -top-4 left-8 bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Mais Vendido
              </span>
            )}

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {offer.title}
            </h3>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-purple-700 tracking-tighter">
                R$ {offer.price}
              </span>
              <span className="text-gray-400 font-medium text-sm">
                /{offer.period}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {offer.features?.map(
                (
                  feature,
                  idx, // Adicionamos a '?' antes do ponto
                ) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600 text-sm"
                  >
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ),
              )}
            </ul>

            <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
              Assinar Agora
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
