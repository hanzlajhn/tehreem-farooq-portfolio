import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/lib/site";

const links = [
  {
    href: `mailto:${site.email}`,
    label: "Email",
    external: false,
  },
  {
    href: site.whatsapp,
    label: "WhatsApp",
    external: true,
  },
  {
    href: site.linkedin,
    label: "LinkedIn",
    external: true,
  },
] as const;

function Icon({ label }: { label: string }) {
  if (label === "Email") return <Mail className="size-4" aria-hidden="true" />;
  if (label === "WhatsApp") return <WhatsAppIcon className="size-4" />;
  return <LinkedInIcon className="size-4" />;
}

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-cream/80">
            {site.role}
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-cream/25 px-4 text-sm font-medium text-cream transition-colors hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon label={link.label} />
                {link.label}
                {link.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-sm text-cream/75 sm:px-8">
          © {site.copyrightYear} {site.name}. {site.location}.
        </p>
      </div>
    </footer>
  );
}
