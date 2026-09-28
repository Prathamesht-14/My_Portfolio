import { useEffect, useRef, useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, ExternalLink, ArrowRight } from 'lucide-react';
import { experience } from '../data';

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

function TechFlow({ items }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 6,
      padding: '14px 16px',
      background: 'rgba(124, 111, 255, 0.04)',
      border: '1px solid var(--color-border)',
      borderRadius: 8,
      marginTop: 20,
    }}>
      {items.map((item, i) => (
        <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-accent-text)',
            background: 'rgba(124, 111, 255, 0.1)',
            border: '1px solid rgba(124, 111, 255, 0.2)',
            borderRadius: 4,
            padding: '2px 8px',
          }}>{item}</span>
          {i < items.length - 1 && (
            <ArrowRight size={11} color="var(--color-text-muted)" />
          )}
        </span>
      ))}
    </div>
  );
}

function ExperienceCard({ exp }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card" style={{ padding: 32, marginBottom: 0 }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 16,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--color-accent)',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-accent-text)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Internship
            </span>
          </div>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: 4,
          }}>
            {exp.role}
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-accent-text)', fontWeight: 500 }}>
            {exp.company}
          </p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--color-text-secondary)',
            marginBottom: 4,
          }}>
            {exp.period}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            {exp.location}
          </div>
        </div>
      </div>

      {/* Summary */}
      <p style={{
        color: 'var(--color-text-secondary)',
        lineHeight: 1.7,
        fontSize: '0.9rem',
        marginBottom: 16,
      }}>
        {exp.summary}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {exp.tech.map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* Expand/collapse */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--color-accent-text)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          padding: 0,
        }}
        aria-expanded={expanded}
        aria-controls={`exp-details-${exp.company}`}
      >
        {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        {expanded ? 'Show less' : 'View contributions'}
      </button>

      {/* Expanded: contributions */}
      {expanded && (
        <div id={`exp-details-${exp.company}`} style={{ marginTop: 20 }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            Engineering Contributions
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {exp.contributions.map((c, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{
                  marginTop: 6,
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  flexShrink: 0,
                }} />
                <span style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                }}>
                  {c}
                </span>
              </li>
            ))}
          </ul>

          {/* Tech flow */}
          <TechFlow items={exp.flow} />
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="experience" style={{
      padding: '100px 24px',
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={ref} className="reveal" style={{ marginBottom: 48 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>// experience</p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
            marginBottom: 12,
          }}>
            Work Experience
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            maxWidth: 520,
          }}>
            Practical engineering experience from a backend internship in a production environment.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'relative' }}>
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: -24,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, var(--color-accent) 0%, transparent 100%)',
          }} className="timeline-rail" />

          {experience.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-rail { display: none; }
        }
      `}</style>
    </section>
  );
}
