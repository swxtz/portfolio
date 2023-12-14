import { SocialLinks } from "../SocialLinks/SocialLinks";

import githubLogo from "@/assets/svg/github.svg";
import linkedinLogo from "@/assets/svg/linkedin.svg";
import emailLogo from "@/assets/svg/email.svg";

export function Socials() {
    return (
        <div className="flex gap-4 mt-10">
            <SocialLinks href="https://github.com/swxtz" img={githubLogo} alt="github" />
            <SocialLinks href="https://www.linkedin.com/in/gustavo-mendon%C3%A7a-7456001b0/" img={linkedinLogo} alt="linkedin" />
            <SocialLinks href="#" img={emailLogo} alt="email" /> 
        </div>
    );
}