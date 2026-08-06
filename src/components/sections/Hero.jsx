import { ChevronDown } from 'lucide-react';
import { profile } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <Reveal className="max-w-2xl">
        {/* Eyebrow styled like a config/JSON key-value pair — a small nod to
            the REST APIs & Spring config files that make up the day job. */}
        {/*<p className="font-mono text-sm text-muted-light dark:text-muted-dark">*/}
        {/*  role: <span className="text-accent">&quot;{profile.title}&quot;</span>*/}
        {/*</p>*/}

        <h1 id="hero-heading" className="mt-6 text-4xl font-semibold leading-tight text-foreground-light dark:text-foreground-dark sm:text-5xl">
          Hi, I&apos;m <span className="text-accent">{profile.name}</span>. I build backend
          systems that scale.
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-base text-muted-light dark:text-muted-dark sm:text-lg">
          {profile.heroTagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border-light px-6 py-3 text-sm font-medium text-foreground-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-foreground-dark"
          >
            Get in Touch
          </a>
        </div>
      </Reveal>

      {/* Scroll cue — links to #about. Its own bounce animation is a plain
          Tailwind keyframe, independent of the Reveal/Framer Motion system. */}
      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-8 flex h-10 w-10 animate-bounce items-center justify-center text-muted-light dark:text-muted-dark"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
