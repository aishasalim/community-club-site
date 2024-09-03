import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qazaq Association",
  description: "Qazaq Association is a community of Qazaq people living in Houston, Texas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the SVG favicon link here */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

