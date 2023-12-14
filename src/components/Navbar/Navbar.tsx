import Link from "next/link";
import { NavLinks } from "../NavLinks/NavLinks";
import { cn } from "@/lib/utils";
import { robotoMono } from "@/app/layout";

export function Navbar() {
    return (
        <nav className="bg-[#2B2B2B]">
            <div className="py-6 px-8 shadow-sm flex flex-row justify-between">
                <Link href="/"><span className={cn("text-2xl tracking-[.14rem]", robotoMono.className)}>{"<Gustavo Mendonça />"}</span></Link>
                <NavLinks />
            </div>
        </nav>
    );
}
