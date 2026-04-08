import { Offer } from "@/interfaces/cms.interface";

interface OfferGridProps {
  title?: string;
  offers: Offer[];
}

export const OfferGrid = ({ title, offers }: OfferGridProps) => {
  return (
    <section id="offers-001" className="max-w-7xl mx-auto py-16 px-6">
      {title && (
        <h2 className="text-3xl font-bold mb-10 text-gray-900 tracking-tight">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {offers?.map((offer, index) => (
          <div
            key={offer.id || `offer-${index}`}
            className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl flex flex-col h-full hover:scale-[1.02] transition-transform duration-300"
          >
            {offer.isHighlighter && (
              <span className="absolute -top-4 left-8 bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase">
                Mais Vendido
              </span>
            )}

            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {offer.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-purple-700">
                  R$ {offer.price}
                </span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>

              <ul className="space-y-4 mb-8">
                {offer.features?.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600 text-sm"
                  >
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm mt-auto hover:bg-purple-700 transition-all">
              Assinar Agora
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
