import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRYPTOIBER | Servicio técnico para máquinas de minería",
  description:
    "Diagnóstico, reparación y mantenimiento de máquinas de minería. Agenda tu revisión técnica por WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
