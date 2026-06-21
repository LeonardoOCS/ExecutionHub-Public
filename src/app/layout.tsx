import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ExecutionHub | Base-first DeFi execution",
  description:
    "ExecutionHub is a Base-first DeFi interface focused on simplifying wallet, swaps, bridges and limit orders.",
  icons: {
    icon: "/executionhub-sword-favicon-32.png",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "ExecutionHub",
    description:
      "Base-first DeFi execution interface for wallet, swaps, bridges and limit orders.",
    url: "https://www.executionhubdefi.org",
    siteName: "ExecutionHub",
    images: [
      {
        url: "/og/executionhub-og-v3.png",
        width: 1200,
        height: 630,
        alt: "ExecutionHub"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ExecutionHub",
    description:
      "Base-first DeFi execution interface for wallet, swaps, bridges and limit orders.",
    images: ["/og/executionhub-og-v3.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
