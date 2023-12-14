import { ActiveLink } from "../ActiveLink/ActiveLink";


export function NavLinks() {
    return (
        <div className="">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/about">About</ActiveLink>
        </div>
    );
}