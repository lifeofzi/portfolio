import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaman Ishtiyaq - Portfolio",
  description: "Portfolio website of Zaman Ishtiyaq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

