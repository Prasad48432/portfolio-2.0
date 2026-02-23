import { ClassValue } from "clsx";
import { Linkedin, Phone } from "lucide-react";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";

const socialsIcons = [
  {
    id: 1,
    label: "Github",
    icon: <FiGithub className="size-[1.2rem]" />,
    href: config.social.github,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
  {
    id: 2,
    label: "Linkedin",
    icon: <Linkedin className="size-[1.2rem]" />,
    href: config.social.linkedin,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
  {
    id: 3,
    label: "Instagram",
    icon: <FaInstagram className="size-[1.2rem]" />,
    href: config.social.instagram,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
  {
    id: 5,
    label: "Twitter",
    icon: <FaXTwitter className="size-[1.2rem]" />,
    href: config.social.twitter,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
  {
    id: 6,
    label: "Phone",
    icon: <Phone className="size-[1.2rem]" />,
    href: `tel:${config.social.phone}`,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
];

const Socials = () => {
  return (
    <ul className="flex items-center gap-2">
      {socialsIcons.map((social) => (
        <li key={social.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={social.href}
                className={cn(
                  "shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] flex size-9 items-center justify-center rounded-md border border-border bg-muted ring-offset-background transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  social.className,
                )}
                aria-label={social.label}
                target="_blank"
              >
                {social.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <span>{social.label}</span>
            </TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
