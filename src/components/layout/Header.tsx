"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Ofertas", href: "#offers-001" },
    { label: "FAQ", href: "#faq-nx-01" },
  ];

  const headerStyles = isScrolled
    ? "bg-white/90 backdrop-blur-md shadow-md py-4"
    : "bg-transparent py-6";

  const textStyles = isScrolled ? "text-gray-800" : "text-white";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerStyles}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className={`text-2xl font-black tracking-tighter transition-colors ${textStyles}`}
        >
          NEXUS
          <span className={isScrolled ? "text-purple-600" : "text-purple-300"}>
            .
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-bold transition-colors hover:opacity-70 ${textStyles}`}
            >
              {link.label}
            </a>
          ))}
          <button
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              isScrolled
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-white text-purple-700 hover:bg-gray-100"
            }`}
          >
            Área do Cliente
          </button>
        </nav>
      </div>
    </header>
  );
};
