import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condev Clone",
  description: "Condev style landing page clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}