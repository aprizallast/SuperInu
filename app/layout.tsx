import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'SUPER INU — $SI // Brew 原生超级英雄代币',
  description: 'Solana 有 $SI，Brew 也有 $SI (SUPER INU)。SUPER INU ($SI) 是 Brew Meme 生态的超级英雄代表！身披红斗篷、穿着金色战衣翱翔在 Brew 链上天际的强大护卫。',
  icons: {
    icon: '/assets/brewinu-portrait.png',
  },
  openGraph: {
    title: 'SUPER INU — $SI // Brew 原生超级英雄代币',
    description: 'Solana 有 $SI，Brew 也有 $SI (SUPER INU)。SUPER INU ($SI) 是 Brew Meme 生态的超级英雄代表！身披红斗篷、穿着金色战衣翱翔在 Brew 链上天际的强大护卫。',
    type: 'website',
    images: ['/assets/hero_brewinu_flying_1791019097680.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUPER INU — $SI // Brew 原生超级英雄代币',
    description: 'Solana 有 $SI，Brew 也有 $SI (SUPER INU)。SUPER INU ($SI) 是 Brew Meme 生态的超级英雄代表！身披红斗篷、穿着金色战衣翱翔在 Brew 链上天际的强大护卫。',
    images: ['/assets/hero_brewinu_flying_1791019097680.jpg'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
