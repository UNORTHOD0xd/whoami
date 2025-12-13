import { Github, Twitter, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/UNORTHOD0xd",
    icon: Github,
  },
  {
    label: "X",
    href: "https://x.com/un_orthodoxd",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:contact@unorthod0xd.xyz",
    icon: Mail,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-primary transition-colors"
            aria-label={social.label}
          >
            <social.icon size={20} strokeWidth={1.5} />
          </a>
        </li>
      ))}
    </ul>
  );
}
