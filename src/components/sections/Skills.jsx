import { skillGroups } from '@/data/skills';
import SkillBadge from '@/components/ui/SkillBadge';
import Reveal from '@/components/ui/Reveal';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-sm text-accent">// Skills</p>
          <h2 id="skills-heading" className="mt-2 font-display text-2xl font-semibold text-foreground-light dark:text-foreground-dark">
            Technical breadth, backend-weighted.
          </h2>
        </Reveal>

        <div className="space-y-8">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={0.1 + index * 0.1}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-light dark:text-muted-dark">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
