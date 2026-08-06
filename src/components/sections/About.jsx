import { GraduationCap } from 'lucide-react';
import { profile } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      {/* Breakpoint moved from sm (640px) to md (768px): at exactly 640-767px
          this grid and the nested Projects/Contact grids were both trying to
          go two-column at once, cramming cards into ~150px widths. Delaying
          to md gives everything room, and matches the Navbar's own
          mobile/desktop breakpoint for consistency across the site. */}
      <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-sm text-accent">// About</p>
          <h2 id="about-heading" className="mt-2 font-display text-2xl font-semibold text-foreground-light dark:text-foreground-dark">
            Backend-focused, full-stack in practice.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <p className="max-w-xl text-base leading-relaxed text-muted-light dark:text-muted-dark sm:text-lg">
            {profile.about}
          </p>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-border-light px-4 py-3 dark:border-border-dark">
            <GraduationCap size={18} className="shrink-0 text-accent" />
            <span className="font-mono text-sm text-foreground-light dark:text-foreground-dark">
              {profile.education}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
