import { NavLinks } from "../NavLinks/NavLinks";

export function Navbar() {
    return (
        <nav className="bg-[#2B2B2B]">
            <div className="py-10 px-12 shadow-sm">
                <span className="text-3xl tracking-[.14rem]">{"<Gustavo Mendonça />"}</span>
                <NavLinks />
            </div>
        </nav>
    );
}
