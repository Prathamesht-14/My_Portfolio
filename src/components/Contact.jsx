import { useRef, useEffect } from 'react';
import { Mail, Code2, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from './BrandIcons';
import { personal } from '../data';

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, [ref]);
}

export default function Contact() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="contact" style={{
      padding: '100px 24px',
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div ref={ref} className="reveal">
          <p className="section-label" style={{ marginBottom: 16 }}>// contact</p>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: 16,
            lineHeight: 1.15,
          }}>
            Let's build something useful.
          </h2>

          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            maxWidth: 520,
            margin: '0 auto 40px',
          }}>
            I'm interested in software engineering opportunities where I can contribute to backend, full-stack, and scalable application development while continuing to grow as an engineer.
          </p>

          {/* Primary contact */}
          <div style={{ marginBottom: 32 }}>
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '14px 32px' }}
              id="contact-email-btn"
              aria-label="Send email"
            >
              <Mail size={17} />
              Email Me
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="LeetCode profile"
            >
              <Code2 size={16} />
              LeetCode
            </a>
            <a
              href={personal.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Codeforces profile"
            >
              <CodeforcesIcon size={16} />
              Codeforces
            </a>
            <a
              href={personal.resume}
              download="Prathamesh_Talekar_Resume.pdf"
              className="btn-secondary"
              aria-label="Download Resume"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>

          {/* Email display */}
          <p style={{
            marginTop: 40,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
          }}>
            <a
              href={`mailto:${personal.email}`}
              style={{
                color: 'var(--color-accent-text)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-accent-text)'}
            >
              {personal.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
