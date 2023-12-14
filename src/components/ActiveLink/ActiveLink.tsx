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
                    ? "text-[28px] tracking-[0.12rem] font-bold text-cream-400"
                    : "text-[28px] tracking-[0.12rem]"
            }
            {...rest}
        >
            {children}
        </Link>
    );
}
