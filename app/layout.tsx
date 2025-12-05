import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaman Ishtiyaq - Portfolio",
  description: "Portfolio website of Zaman Ishtiyaq",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

