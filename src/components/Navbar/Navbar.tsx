import Link from "next/link";
import { NavLinks } from "../NavLinks/NavLinks";

export function Navbar() {
    return (
        <nav className="border-b-2 border-[#444444]">
            <div className="py-6 px-8 shadow-sm flex flex-row justify-between">
                <Link href="/"><span className="text-2xl tracking-[.14rem]">{"<Gustavo Mendonça />"}</span></Link>
                <NavLinks />
            </div>
        </nav>
    );
}
