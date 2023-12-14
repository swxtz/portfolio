import { SocialLinks } from "../SocialLinks/SocialLinks";

import githubLogo from "@/assets/svg/github.svg";
import linkedinLogo from "@/assets/svg/linkedin.svg";
import emailLogo from "@/assets/svg/email.svg";

export function Socials() {
    return (
        <div className="">
            <SocialLinks href="https://github.com/swxtz" img={githubLogo} alt="github" />
            <SocialLinks href="" img={linkedinLogo} alt="linkedin" />
            <SocialLinks href="" img={emailLogo} alt="email" /> 
        </div>
    );
}