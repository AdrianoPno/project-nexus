import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Nexus | CMS Engine",
  description: "Simulação de arquitetura AEM Headless",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
