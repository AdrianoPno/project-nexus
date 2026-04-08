"use client"; // Sempre na primeira linha

import { useState } from "react";
import { FAQProps } from "@/interfaces/cms.interface";

export const FAQAccordion = ({ title, items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-gray-900">{title}</h2>
      )}

      <div className="space-y-4">
        {items?.map((item, index) => (
          <div
            key={`faq-${index}-${item.question.substring(0, 10)}`}
            className="border-b border-gray-200"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full py-6 flex justify-between items-center text-left hover:text-purple-600 transition-colors group"
            >
              <span className="text-lg font-medium text-gray-800 group-hover:text-purple-600">
                {item.question}
              </span>
              <span
                className={`text-2xl transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 text-purple-600"
                    : "text-gray-400"
                }`}
              >
                ↓
              </span>
            </button>

            {openIndex === index && (
              <div className="pb-6 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
