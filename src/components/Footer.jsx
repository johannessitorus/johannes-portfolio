import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { portfolio } from "../data/portfolio";

export default function Footer() {

const socials = [
  {
    label: "GitHub",
    href: portfolio.github,
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: portfolio.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: portfolio.instagram,
    Icon: FaInstagram,
  },
];


  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mt-2 text-xs text-accent">
            © {new Date().getFullYear()} {portfolio.name}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials
            .filter((social) => social.href)
            .map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-surface text-accent transition-colors hover:border-accent/60 hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
