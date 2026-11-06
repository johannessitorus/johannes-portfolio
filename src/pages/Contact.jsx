import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import { Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Contact() {

const contacts = [
  {
    label: "GitHub",
    username: "@johannessitorus",
    href: portfolio.github,
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    username: "Johannes Christian Pratama Sitorus",
    href: portfolio.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: "Instagram",
    username: "@xhcrstj",
    href: portfolio.instagram,
    Icon: FaInstagram,
  },
  {
    label: "Email",
    username: portfolio.email,
    href: portfolio.email
      ? `mailto:${portfolio.email}`
      : "",
    Icon: Mail,
  },
];


  const availableContacts = contacts.filter(
    (contact) => contact.href
  );

  return (
    <div className="page-reveal space-y-12">
      <section className="pt-8">
        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
          04 / Contact
        </p>

        <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
          Get In Touch
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-sm leading-8 text-accent">
          Feel free to connect with me through my social
          platforms and explore my work.
        </p>

        <div className="mt-10 h-px bg-white/10" />
      </section>

      <section className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Let's Connect
          </p>

          <h2 className="text-3xl font-semibold text-primary">
            Connect with me
            <span className="text-accent">.</span>
          </h2>

          <p className="max-w-md text-sm leading-8 text-accent">
            Explore my projects, follow my learning journey,
            or connect with me through the platforms below.
          </p>

          <div className="border-t border-white/10 pt-6">
            <p className="mb-2 font-mono text-xs text-accent">
              Name
            </p>
            <p className="text-sm text-primary">
              {portfolio.name}
            </p>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="mb-2 font-mono text-xs text-accent">
              Education
            </p>
            <p className="text-sm text-primary">
              {portfolio.headline}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {availableContacts.map(
            ({ label, username, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-5 rounded-xl border border-white/10 bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-background">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    className="text-primary"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 font-mono text-xs text-accent">
                    {label}
                  </p>

                  <p className="break-words text-sm font-medium text-primary">
                    {username}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-lg text-accent transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            )
          )}
        </div>
      </section>
    </div>
  );
}
