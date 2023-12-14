import Image, { StaticImageData } from "next/image";
import Link, { LinkProps } from "next/link";

interface SocialLinksProps extends LinkProps {
    img: StaticImageData;
    alt: string;
}

export function SocialLinks({ img, href, alt, ...rest }: SocialLinksProps) {
    return (
        <div className="">
            <Link href={href} {...rest}>
                <Image src={img} alt={alt} className="hover:brightness-[0.7] hover:transition-all" />
            </Link>
        </div>
    );
}
