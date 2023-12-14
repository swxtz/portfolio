"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactNode;
}

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href.toString();

    return (
        <Link
            href={href}
            className={
                isActive
                    ? "text-2xl tracking-[0.12rem] font-bold text-cream-400 hover:brightness-[0.7] hover:transition-all"
                    : "text-2xl tracking-[0.12rem] hover:brightness-[0.7] hover:transition-all"
            }
            {...rest}
        >
            {children}
        </Link>
    );
}
