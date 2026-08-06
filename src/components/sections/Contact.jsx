import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    value: '@aathi1412',
    href: profile.github,
    icon: FaGithub,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Aathithyan',
    href: profile.linkedin,
    icon: FaLinkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-sm text-accent">// Contact</p>
          <h2 id="contact-heading" className="mt-2 font-display text-2xl font-semibold text-foreground-light dark:text-foreground-dark">
            Let&apos;s build something great.
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-muted-light dark:text-muted-dark sm:text-lg">
              I&apos;m open to backend-focused and full-stack roles — reach out directly,
              whichever works best for you.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {CONTACT_LINKS.map(({ label, value, href, icon: Icon, external }, index) => (
              <Reveal key={label} delay={0.2 + index * 0.1}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex flex-col gap-3 rounded-2xl border border-border-light p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent dark:border-border-dark"
                >
                  <Icon size={20} className="text-accent" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-light dark:text-muted-dark">
                      {label}
                    </p>
                    <p className="mt-1 break-all text-sm font-medium text-foreground-light transition-colors group-hover:text-accent dark:text-foreground-dark">
                      {value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
