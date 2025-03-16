import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./global.css";
import StoreProvider from "@/app/StoreProvider";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Termu Next",
  description: "This is terminal in next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.className}>
      <StoreProvider>
        {children}
      </StoreProvider>
      </body>
    </html>
  );
}
