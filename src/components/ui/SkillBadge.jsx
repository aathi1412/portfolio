export default function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border-light px-3.5 py-1.5 font-mono text-xs text-foreground-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-foreground-dark">
      {label}
    </span>
  );
}
