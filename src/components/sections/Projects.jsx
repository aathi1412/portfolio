import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import Reveal from '@/components/ui/Reveal';

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-sm text-accent">// Projects</p>
          <h2 id="projects-heading" className="mt-2 font-display text-2xl font-semibold text-foreground-light dark:text-foreground-dark">
            Proof, not promises.
          </h2>
        </Reveal>

        <div className="space-y-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal key={project.title} delay={0.1 + index * 0.1} className="h-full">
                <ProjectCard project={project} featured />
              </Reveal>
            ))}
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-light dark:text-muted-dark">
              More Projects
            </h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {others.map((project, index) => (
                <Reveal
                  key={project.title}
                  delay={0.1 + (featured.length + index) * 0.1}
                  className="h-full"
                >
                  {/* h4, not h3 — these cards nest under the "More Projects"
                      h3 label above, so they're one level deeper than the
                      featured cards, which sit directly under the h2. */}
                  <ProjectCard project={project} titleLevel="h4" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
