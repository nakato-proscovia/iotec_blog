import {
  FaGithub as Github,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

import portrait from "../assets/prossy-portrait.jpg";
import ContactLink from "./ContactLink";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nakato-proscovia/",
    icon: <Linkedin size={14} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nakatoprosc0via",
    icon: <Instagram size={14} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/nakato-proscovia",
    icon: <Github size={14} />,
  },
  {
    label: "X",
    href: "https://x.com/nakatoprosc0via",
    icon: <span className="text-sm leading-none">𝕏</span>,
  },
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[#faf9fb] text-stone-900"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.2fr] lg:gap-14 lg:px-10 lg:py-20">
        <figure className="m-0 w-full max-w-md lg:max-w-none">
          <div className="relative isolate overflow-hidden rounded-md">
            <img
              src={portrait}
              alt="Nakato Proscovia wearing glasses and a red blazer"
              width={1365}
              height={2048}
              fetchPriority="high"
              className="aspect-4/5 w-full object-cover object-[center_35%]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#faf9fb] to-transparent"
            />
          </div>

          <figcaption className="mt-4">
            <p className="text-sm font-medium">Nakato Proscovia</p>

            <p className="mt-1 text-xs leading-relaxed text-stone-500">
              Software Developer & PR Strategist
            </p>

            <p className="mt-1 text-xs text-stone-500">
              Kampala, Uganda
            </p>
          </figcaption>
        </figure>

        <div className="lg:pt-1">
          <div className="mb-5 flex items-center gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a64736]">
              Communication, technology & growth
            </p>

            <span
              aria-hidden="true"
              className="h-px w-12 shrink-0 bg-stone-200"
            />
          </div>

          <h1
            id="hero-heading"
            className="max-w-xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            I craft the story.
            <br />
            <span className="italic text-[#354337]">
              I build the platform.
            </span>
          </h1>

          <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-stone-600 sm:text-[15px]">
            <p>
              I’m Prossy, a Software Developer and PR Strategist based in
              Uganda. My journey from communications into software
              development has shaped how I approach my work:
              understanding people, finding the right words, and
              building digital experiences that connect the two.
            </p>

            <p>
              This is my personal corner of the internet, where I share
              short reflections on communication, technology,
              leadership, and the things I’m discovering along the
              way. Some come from building software, others from
              leading teams or simply paying closer attention to
              everyday experiences.
            </p>
          </div>

          <nav aria-label="Social links" className="mt-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Let’s connect
            </p>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <ContactLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
