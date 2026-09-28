import { useEffect, useRef } from 'react';
import { skills } from '../data';

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

// Category icon/accent
const categoryAccents = {
  'Programming Languages': '#e76f51',
  'Backend': '#7c6fff',
  'Frontend': '#61dafb',
  'Databases': '#4db380',
  'Software Engineering': '#a899ff',
  'Testing': '#00c9a7',
  'Tools': '#ffd166',
};

function SkillGroup({ group, delay }) {
  const ref = useRef(null);
  useReveal(ref);
  const accent = categoryAccents[group.category] || '#7c6fff';

  return (
    <div
      ref={ref}
      className="card reveal"
      style={{
        padding: 24,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
        paddingBottom: 14,
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{
          width: 4,
          height: 18,
          background: accent,
          borderRadius: 2,
          flexShrink: 0,
        }} />
        <h3 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--color-text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          {group.category}
        </h3>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {group.items.map(skill => (
          <span
            key={skill}
            style={{
              padding: '5px 11px',
              background: `${accent}0e`,
              border: `1px solid ${accent}25`,
              borderRadius: 5,
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              transition: 'all 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = accent;
              e.currentTarget.style.background = `${accent}18`;
              e.currentTarget.style.borderColor = `${accent}45`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
              e.currentTarget.style.background = `${accent}0e`;
              e.currentTarget.style.borderColor = `${accent}25`;
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  useReveal(headerRef);

  return (
    <section id="skills" style={{
      padding: '100px 24px',
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={headerRef} className="reveal" style={{ marginBottom: 48 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>// technical skills</p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
            marginBottom: 12,
          }}>
            Skills & Technologies
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            maxWidth: 500,
          }}>
            Technologies and engineering concepts I have applied across internship work and personal projects.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {skills.map((group, i) => (
            <SkillGroup key={group.category} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
