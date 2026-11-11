import type { ReactNode } from "react";

type ContactLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export default function ContactLink({
  href,
  label,
  icon,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-2 text-xs font-medium text-stone-600 transition-colors hover:bg-black/10 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
    >
      <span aria-hidden="true">{icon}</span>
      <span>{label}</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}