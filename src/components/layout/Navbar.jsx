import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-foreground-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-foreground-dark ${className}`}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Toggle a solid/blurred background once the page has scrolled past the hero fold.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on resize back to desktop, or on Escape (keyboard users).
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('resize', closeOnResize);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  // Scroll-spy: highlight whichever nav link matches the section currently
  // crossing the vertical center of the viewport. Deferred from Milestone 2
  // until real section ids existed — they all do now.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      Boolean
    );

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Active-link styling: color change alone fails WCAG 1.4.1 (color can't be
  // the only means of conveying information) — weight changes alongside it,
  // and aria-current tells assistive tech directly, not just visually.
  const linkClass = (href) =>
    `font-body text-sm transition-colors hover:text-accent ${
      activeSection === href
        ? 'font-semibold text-accent'
        : 'font-medium text-muted-light dark:text-muted-dark'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border-light bg-background-light/80 backdrop-blur-md dark:border-border-dark dark:bg-background-dark/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo mark — mono brackets nod to the dev identity, kept quiet/minimal */}
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-foreground-light dark:text-foreground-dark"
        >
          <span className="font-mono font-normal text-accent">&lt;</span>
          Aathi
          <span className="font-mono font-normal text-accent">/&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href ? 'true' : undefined}
              className={linkClass(link.href)}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-foreground-light dark:border-border-dark dark:text-foreground-dark"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        } border-t border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={activeSection === link.href ? 'true' : undefined}
              className={`rounded-lg px-2 py-2.5 transition-colors hover:bg-surface-light hover:text-accent dark:hover:bg-surface-dark ${linkClass(
                link.href
              )}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
