import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { personal } from '../data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`navbar ${(scrolled || menuOpen) ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            aria-label="Go to top"
          >
            <div style={{
              width: 34,
              height: 34,
              background: 'var(--color-accent)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#fff',
            }}>P</div>
            <span style={{
              fontWeight: 600,
              fontSize: '0.9375rem',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.01em',
            }}>
              Prathamesh Talekar
            </span>
          </a>

          {/* Desktop nav */}
          <div style={{ gap: 4 }} className="hidden-mobile">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  padding: '6px 12px',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: 6,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div style={{ gap: 8 }} className="hidden-mobile">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="GitHub profile"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            <a
              href={personal.resume}
              download="Prathamesh_Talekar_Resume.pdf"
              className="btn-primary"
              aria-label="Download Resume"
              style={{ padding: '8px 18px', fontSize: '0.8125rem' }}
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
              padding: 8,
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            borderTop: '1px solid var(--color-border)',
            paddingBottom: 16,
            paddingTop: 8,
          }}>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  display: 'block',
                  padding: '12px 8px',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: 'flex', gap: 8, paddingTop: 16 }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href={personal.resume}
                download="Prathamesh_Talekar_Resume.pdf"
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .hidden-mobile { display: flex; align-items: center; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: flex !important; align-items: center; }
        }
      `}</style>
    </nav>
  );
}
