import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CreatorsTube",
  description: "Built by Andre Ene for content creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Header />
          <main>{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}
