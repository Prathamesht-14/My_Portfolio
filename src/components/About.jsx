import { useEffect, useRef } from 'react';
import { GraduationCap, Code2, Server, Brain } from 'lucide-react';
import { about, education, personal } from '../data';

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

function StatCard({ icon, value, label }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 20px',
      background: 'var(--color-bg-card)',
      border: '1px solid var(--color-border)',
      borderRadius: 10,
    }}>
      <div style={{
        width: 36,
        height: 36,
        background: 'var(--color-accent-glow)',
        border: '1px solid rgba(124, 111, 255, 0.2)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-accent-text)',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-primary)' }}>{value}</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{label}</div>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="about" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={ref} className="reveal">
          <p className="section-label" style={{ marginBottom: 12 }}>// about me</p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 48,
            color: 'var(--color-text-primary)',
          }}>
            Profile
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 360px',
          gap: 56,
          alignItems: 'start',
        }} className="about-grid">
          {/* Left: body text */}
          <div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              marginBottom: 32,
            }}>
              {about.body.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.8,
                  fontSize: '0.9375rem',
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Interests */}
            <div>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                Areas of Interest
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {about.interests.map(interest => (
                  <span key={interest} className="skill-pill">{interest}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education + Quick Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Education card */}
            <div className="card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <GraduationCap size={18} color="var(--color-accent-text)" />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>Education</span>
              </div>
              <p style={{
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: 'var(--color-text-primary)',
                marginBottom: 4,
                lineHeight: 1.4,
              }}>
                {education.institution}
              </p>
              <p style={{
                fontSize: '0.8125rem',
                color: 'var(--color-accent-text)',
                marginBottom: 8,
              }}>
                {education.degree}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: 12 }}>
                {education.period}
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 12px',
                background: 'rgba(0, 201, 167, 0.08)',
                border: '1px solid rgba(0, 201, 167, 0.2)',
                borderRadius: 20,
              }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-teal)' }}>
                  {education.cgpa}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>CGPA</span>
              </div>
            </div>

            {/* Quick stats */}
            <StatCard icon={<Code2 size={17} />} value="600+" label="LeetCode Problems" />
            <StatCard icon={<Server size={17} />} value="3+" label="Backend/Full-Stack Projects" />
            <StatCard icon={<Brain size={17} />} value="1710" label="LeetCode Max Rating" />
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr 360px;
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
