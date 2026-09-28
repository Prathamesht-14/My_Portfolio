import { useEffect, useRef } from 'react';
import { interests, engineeringApproach } from '../data';
import { Server, Layers, Network, Cpu, Brain, CheckCircle2 } from 'lucide-react';

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

const iconMap = {
  server: Server,
  layers: Layers,
  network: Network,
  cpu: Cpu,
  brain: Brain,
};

function InterestCard({ item, delay }) {
  const Icon = iconMap[item.icon] || Server;

  return (
    <div
      className="card"
      style={{
        padding: '20px 22px',
        transitionDelay: `${delay}ms`,
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
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
        marginBottom: 14,
      }}>
        <Icon size={17} />
      </div>
      <h3 style={{
        fontWeight: 600,
        fontSize: '0.9375rem',
        color: 'var(--color-text-primary)',
        marginBottom: 8,
      }}>
        {item.title}
      </h3>
      <p style={{
        fontSize: '0.8125rem',
        color: 'var(--color-text-muted)',
        lineHeight: 1.6,
      }}>
        {item.body}
      </p>
    </div>
  );
}

export default function EngineeringApproach() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useReveal(ref1);
  useReveal(ref2);

  return (
    <>
      {/* Engineering Interests */}
      <section style={{
        padding: '100px 24px',
        background: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div ref={ref1} className="reveal" style={{ marginBottom: 48 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>// engineering interests</p>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              marginBottom: 12,
            }}>
              Engineering Interests
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}>
            {interests.map((item, i) => (
              <InterestCard key={item.title} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
