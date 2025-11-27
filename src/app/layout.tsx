import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar-component/Navbar";

const interFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    preload: true,
});

export const metadata: Metadata = {
    title: "JobScraper",
    description:
        "Uma aplicação web para extração de dados sobre empregos, e open-source",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={interFont.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
