import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Natália Alcântara | Estética Avançada em Petrolina",
  description:
    "Estética avançada com resultados naturais, atendimento personalizado e acompanhamento profissional em Petrolina-PE.",
  openGraph: {
    title: "Dra. Natália Alcântara | Estética Avançada",
    description:
      "Cuidado individual, segurança e resultados que respeitam a sua beleza.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
