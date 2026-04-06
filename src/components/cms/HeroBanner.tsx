interface HeroBannerProps {
  title: string;
  description: string;
  ctaText?: string;
  variant?: "primary" | "secondary";
}

export const HeroBanner = ({
  title,
  description,
  ctaText,
  variant = "primary",
}: HeroBannerProps) => {
  const bgColor = variant === "primary" ? "bg-purple-700" : "bg-gray-900";

  return (
    <section className={`w-full py-20 px-6 text-white ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">{title}</h1>
        <p className="text-xl opacity-90 max-w-2xl mb-8">{description}</p>
        {ctaText && (
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all">
            {ctaText}
          </button>
        )}
      </div>
    </section>
  );
};
