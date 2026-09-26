import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "休肝日 × 水分補給トラッカー（仮称）",
  description:
    "休肝日と水分摂取を毎日ワンタップで記録。Apple Healthの心拍数・睡眠・活動量と自動で紐付け、ClaudeなどのAIにそのまま渡せる形に整えます。分析はあなたのAIで。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
