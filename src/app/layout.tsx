import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuroraFooter from "@/components/AuroraFooter";

export const metadata: Metadata = {
  title: "Sunny - Deep dive into Social problems",
  description: "대학생 사회문제 해결 브랜드 Sunny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full pt-16">
          {children}
        </main>
        <Footer />
        <AuroraFooter />
      </body>
    </html>
  );
}
