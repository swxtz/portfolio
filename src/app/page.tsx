import { Hero } from "@/components/Hero/Hero";
import { Socials } from "@/components/Socials/Socials";

export default function Home() {
    return (
        <main>
            <div className="px-24 pt-20">
                <Hero />
                <Socials />
            </div>
        </main>
    );
}
