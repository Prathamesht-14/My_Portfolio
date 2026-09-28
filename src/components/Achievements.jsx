import { useEffect, useRef } from 'react';
import { achievements, competitiveProgramming, dsaTopics, personal } from '../data';
import { ExternalLink, Trophy, Code2 } from 'lucide-react';

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

function MetricCard({ item, delay }) {
  const ref = useRef(null);
  useReveal(ref);
  const isAccent = item.color === 'accent';

  return (
    <div
      ref={ref}
      className="metric-card reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div style={{
        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        color: isAccent ? 'var(--color-accent-text)' : 'var(--color-teal)',
        marginBottom: 6,
        fontFamily: 'var(--font-mono)',
      }}>
        {item.value}
      </div>
      <div style={{
        fontSize: '0.875rem',
        fontWeight: 600,
        color: 'var(--color-text-primary)',
        marginBottom: 4,
      }}>
        {item.label}
      </div>
      <div style={{
        fontSize: '0.75rem',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-mono)',
      }}>
        {item.sub}
      </div>
    </div>
  );
}

export default function Achievements() {
  const headerRef = useRef(null);
  useReveal(headerRef);

  return (
    <section id="achievements" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={headerRef} className="reveal" style={{ marginBottom: 48 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>// achievements</p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
            marginBottom: 12,
          }}>
            Achievements & Problem Solving
          </h2>
        </div>

        {/* Metric cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 20,
          marginBottom: 48,
        }}>
          {achievements.map((item, i) => (
            <MetricCard key={item.label + item.sub} item={item} delay={i * 80} />
          ))}
        </div>

        {/* Two column: Competitive programming + DSA Topics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
        }} className="ach-grid">
          {/* Competitive Programming */}
          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <Trophy size={17} color="var(--color-accent-text)" />
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Competitive Programming
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {competitiveProgramming.map((cp, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 12,
                  paddingBottom: i < competitiveProgramming.length - 1 ? 14 : 0,
                  borderBottom: i < competitiveProgramming.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)', marginBottom: 4 }}>
                      {cp.platform}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      {cp.detail}
                    </div>
                  </div>
                  {cp.url && (
                    <a
                      href={cp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        fontSize: '0.75rem',
                        color: 'var(--color-accent-text)',
                        textDecoration: 'none',
                        flexShrink: 0,
                        padding: '4px 10px',
                        border: '1px solid rgba(124, 111, 255, 0.2)',
                        borderRadius: 5,
                        transition: 'all 0.2s',
                      }}
                      aria-label={`Visit ${cp.platform} profile`}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-glow)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      Profile
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DSA Topics */}
          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <Code2 size={17} color="var(--color-teal)" />
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Problem Solving
              </h3>
            </div>
            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: 16,
            }}>
              I have solved 600+ algorithmic problems on LeetCode, primarily using C++, building a strong foundation in data structures, algorithms, and competitive problem solving.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {dsaTopics.map(topic => (
                <span key={topic} style={{
                  padding: '4px 10px',
                  background: 'rgba(0, 201, 167, 0.07)',
                  border: '1px solid rgba(0, 201, 167, 0.18)',
                  borderRadius: 4,
                  fontSize: '0.75rem',
                  color: 'var(--color-teal)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {topic}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: '0.78rem' }}
                aria-label="Visit LeetCode profile"
              >
                LeetCode Profile
                <ExternalLink size={11} />
              </a>
              <a
                href={personal.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: '0.78rem' }}
                aria-label="Visit CodeChef profile"
              >
                CodeChef Profile
                <ExternalLink size={11} />
              </a>
              <a
                href={personal.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: '0.78rem' }}
                aria-label="Visit Codeforces profile"
              >
                Codeforces Profile
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ach-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 760px) {
          .ach-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
