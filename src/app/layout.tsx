import type { Metadata } from "next";
import "./globals.css";
import BarNavegation from "../components/ui/BarNavegation";


export const metadata: Metadata = {
  title: "Cinetese",
  description: "tcc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
