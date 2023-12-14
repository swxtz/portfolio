import type { Metadata } from "next";
import { IBM_Plex_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";

export const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const imbMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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
                    imbMono.className
                )}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
