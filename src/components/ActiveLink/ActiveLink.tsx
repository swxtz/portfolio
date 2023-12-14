"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactNode;
}


export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href.toString();
    
    if (isActive) {
        return (
            <Link
                href={href}
                className="text-[28px] tracking-[0.12rem] font-bold text-cream-400"
                {...rest}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <Link
                href={href}
                className="text-[28px] tracking-[0.12rem]"
                {...rest}
            >
                {children}
            </Link>
        );
    }
}
