import { Mail, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from './BrandIcons';
import { personal } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--color-bg-primary)',
      borderTop: '1px solid var(--color-border)',
      padding: '48px 24px 32px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 40,
          marginBottom: 36,
          flexWrap: 'wrap',
        }}>
          {/* Left: Name + tagline */}
          <div>
            <div style={{
              fontWeight: 700,
              fontSize: '1.0625rem',
              color: 'var(--color-text-primary)',
              marginBottom: 4,
            }}>
              Prathamesh Kalyan Talekar
            </div>
            <div style={{
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              marginBottom: 4,
            }}>
              Software Engineer · Full-Stack Developer
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
            }}>
              PICT, Pune
            </div>
          </div>

          {/* Right: Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a
              href={`mailto:${personal.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                padding: '6px 12px',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                transition: 'all 0.2s',
              }}
              aria-label="Email"
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border-subtle)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <Mail size={13} />
              Email
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                padding: '6px 12px',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                transition: 'all 0.2s',
              }}
              aria-label="LinkedIn"
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border-subtle)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <LinkedinIcon size={13} />
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                padding: '6px 12px',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                transition: 'all 0.2s',
              }}
              aria-label="GitHub"
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border-subtle)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <GithubIcon size={13} />
              GitHub
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                padding: '6px 12px',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                transition: 'all 0.2s',
              }}
              aria-label="LeetCode"
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border-subtle)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <Code2 size={13} />
              LeetCode
            </a>
            <a
              href={personal.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                padding: '6px 12px',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                transition: 'all 0.2s',
              }}
              aria-label="Codeforces"
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border-subtle)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <CodeforcesIcon size={13} />
              Codeforces
            </a>
            <a
              href={personal.codechef}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                padding: '6px 12px',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                transition: 'all 0.2s',
              }}
              aria-label="CodeChef"
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border-subtle)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <ExternalLink size={13} />
              CodeChef
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 20,
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-text-muted)',
          }}>
            © {year} Prathamesh Kalyan Talekar
          </p>
        </div>
      </div>
    </footer>
  );
}
