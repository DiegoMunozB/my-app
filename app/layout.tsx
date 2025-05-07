import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego Muñoz Portfolio",
  description:
    "Professional portfolio for software engineering student Diego Muñoz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavBar />
          <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
