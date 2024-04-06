import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { metadata } from '../utilis/metadata';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
