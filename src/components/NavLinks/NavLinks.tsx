import { ActiveLink } from "../ActiveLink/ActiveLink";


export function NavLinks() {
    return (
        <div className="flex gap-12">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/about">About</ActiveLink>
        </div>
    );
}