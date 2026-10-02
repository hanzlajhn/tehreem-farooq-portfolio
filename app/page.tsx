import { Download, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import {
  education,
  experience,
  services,
  site,
  skillGroups,
} from "@/lib/site";
import { cn } from "@/lib/utils";

function Kicker({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
      {children}
    </p>
  );
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    telephone: "+923287534845",
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    sameAs: [site.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bahauddin Zakariya University",
    },
    worksFor: {
      "@type": "Organization",
      name: "Highapp Solutions",
    },
    description: site.summary,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="top" className="hero-band text-cream">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:items-center lg:py-24">
          <div className="hero-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E4C48A]">
              {site.location}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/90 sm:text-xl">
              {site.role}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-cream/80 sm:text-lg">
              {site.valueStatement}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-cream px-6 text-base text-navy hover:bg-white",
                )}
              >
                Hire Me
              </a>
              <a
                href={site.cvPath}
                download
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-cream/40 bg-transparent px-6 text-base text-cream hover:bg-cream/10 hover:text-cream",
                )}
              >
                <Download aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>

          <aside className="hero-rise rounded-3xl border border-cream/20 bg-white/5 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="grid size-24 place-items-center border border-cream/30 font-display text-4xl font-semibold tracking-tight text-cream sm:size-28 sm:text-5xl"
            >
              {site.initials}
            </div>
            <p className="mt-6 text-sm leading-6 text-cream/75">
              Based in {site.location}. Comfortable working with international
              clients.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-start gap-2 rounded-sm text-cream underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm text-cream underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  <span>WhatsApp {site.phone}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <Reveal>
        <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
            <Kicker>01 — About</Kicker>
            <div>
              <h2
                id="about-heading"
                className="font-display text-4xl tracking-tight text-balance sm:text-5xl"
              >
                About Me
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                {site.summary}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                <MapPin className="size-4 text-navy" aria-hidden="true" />
                {site.location}
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="services"
          aria-labelledby="services-heading"
          className="scroll-mt-24 bg-secondary/70 py-16 sm:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Kicker>02 — Services</Kicker>
            <h2
              id="services-heading"
              className="mt-3 max-w-2xl font-display text-4xl tracking-tight text-balance sm:text-5xl"
            >
              Services
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Work drawn from B2B lead generation at Highapp Solutions and digital
              marketing for Engine, a clothing brand.
            </p>
            <ol className="mt-10 divide-y divide-border border-y border-border">
              {services.map((service, index) => (
                <li
                  key={service.title}
                  className="grid gap-3 py-6 sm:grid-cols-[4.5rem_minmax(0,16rem)_minmax(0,1fr)] sm:items-start sm:gap-6 sm:py-7"
                >
                  <span className="font-display text-2xl text-navy">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="scroll-mt-24 py-16 sm:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Kicker>03 — Experience</Kicker>
            <h2
              id="experience-heading"
              className="mt-3 font-display text-4xl tracking-tight sm:text-5xl"
            >
              Experience
            </h2>
            <ol className="relative mt-12 space-y-12 border-l border-border pl-8 sm:pl-10">
              {experience.map((job) => (
                <li key={job.company} className="relative">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[2.45rem] top-1.5 size-3.5 rounded-full border-2 sm:-left-[2.7rem]",
                      job.current
                        ? "border-gold bg-gold"
                        : "border-navy bg-background",
                    )}
                  />
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                    {job.dates}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-base font-medium text-navy">{job.company}</p>
                  <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="scroll-mt-24 bg-secondary/70 py-16 sm:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Kicker>04 — Skills</Kicker>
            <h2
              id="skills-heading"
              className="mt-3 font-display text-4xl tracking-tight sm:text-5xl"
            >
              Skills and Tools
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <li
                  key={group.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <h3 className="font-display text-2xl tracking-tight">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="education"
          aria-labelledby="education-heading"
          className="scroll-mt-24 py-16 sm:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Kicker>05 — Education</Kicker>
            <h2
              id="education-heading"
              className="mt-3 font-display text-4xl tracking-tight sm:text-5xl"
            >
              Education
            </h2>
            <article className="mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                {education.dates}
              </p>
              <h3 className="mt-3 font-display text-3xl tracking-tight">
                {education.degree}
              </h3>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                {education.school}
              </p>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-24 border-t border-border bg-secondary/40 py-16 sm:py-24"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <Kicker>06 — Contact</Kicker>
              <h2
                id="contact-heading"
                className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl"
              >
                Contact
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                Write by email, WhatsApp, or LinkedIn. The form opens an email
                draft to {site.email}. It does not need an account or an API key.
              </p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-start gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-cream">
                      <Mail className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-muted-foreground">
                        Email
                      </span>
                      <span className="break-all text-base font-medium group-hover:underline">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-cream">
                      <WhatsAppIcon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-muted-foreground">
                        WhatsApp
                      </span>
                      <span className="text-base font-medium group-hover:underline">
                        {site.phone}
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="group inline-flex items-start gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-cream">
                      <Phone className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-muted-foreground">
                        Phone
                      </span>
                      <span className="text-base font-medium group-hover:underline">
                        {site.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-cream">
                      <LinkedInIcon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-muted-foreground">
                        LinkedIn
                      </span>
                      <span className="break-all text-base font-medium group-hover:underline">
                        {site.linkedinLabel}
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm />
              <noscript>
                <p className="mt-4 text-sm leading-6">
                  Email{" "}
                  <a className="underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>{" "}
                  directly. The form needs JavaScript to open your email app.
                </p>
              </noscript>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
