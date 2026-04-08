interface HeroBannerProps {
  title: string;
  subtitle: string; // Alinhado com a API
  buttonText?: string; // Alinhado com a API
  gradient?: string; // Adicionado para suportar o gradiente da API
  variant?: "primary" | "secondary";
}

export const HeroBanner = ({
  title,
  subtitle,
  buttonText,
  gradient = "from-purple-700 to-indigo-800", // Default caso não venha da API
  variant = "primary",
}: HeroBannerProps) => {
  // Se vier gradiente da API, usamos ele, senão usamos a cor da variante
  const bgStyle =
    variant === "primary" ? `bg-gradient-to-r ${gradient}` : "bg-gray-900";

  return (
    <section
      className={`w-full pt-40 pb-24 px-6 text-white bg-gradient-to-r ${gradient || "from-purple-700 to-indigo-900"}`}
    >
      {/* O pt-40 é o segredo: ele empurra o texto para baixo do Header transparente */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mb-10 font-medium">
          {subtitle}
        </p>
        {buttonText && (
          <button className="bg-white text-purple-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};
