import { Code2, ExternalLink } from 'lucide-react';
import SkillBadge from './SkillBadge';

export default function ProjectCard({ project, featured = false, titleLevel = 'h3' }) {
  const { title, description, features, tech, githubUrl, status, live } = project;
  const TitleTag = titleLevel;

  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-2xl border border-border-light bg-surface-light p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent dark:border-border-dark dark:bg-surface-dark ${
        featured ? 'sm:p-8' : ''
      }`}
    >
      <div>
        {featured && (
          <>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Featured
              </span>
              <span className="mx-5">•</span>
          </>
        )}

        {status && (
          <>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {status}
            </span>
          </>
        )}
        <TitleTag className="mt-1 font-display text-xl font-semibold text-foreground-light dark:text-foreground-dark">
          {title}
        </TitleTag>
        <p className="mt-2 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
          {description}
        </p>
      </div>

      {features.length > 0 && (
        <ul className="space-y-1.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-light dark:text-muted-dark"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <SkillBadge key={item} label={item} />
          ))}
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground-light transition-colors hover:text-accent dark:text-foreground-dark"
        >
          <Code2 size={16} />
          View Code
        </a>

        {live && (
          <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-foreground-light transition-colors hover:text-accent dark:text-foreground-dark"
          >
              <ExternalLink className="h-4 w-4" />
              Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
