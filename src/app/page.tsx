import { Hero } from "@/components/Hero/Hero";
import { Socials } from "@/components/Socials/Socials";

export default function Home() {
    return (
        <main>
            <div className="px-24 pt-[100px]">
                <Hero />
                <Socials />
            </div>
        </main>
    );
}
