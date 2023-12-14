import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "<Gustavo Mendonça />",
    description: "Developer, Software Engineer, and Student",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="" className="h-full">
            <body
                className={cn(
                    "bg-[#212121] text-cream-500",
                    robotoMono.className
                )}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
