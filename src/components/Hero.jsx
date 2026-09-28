import { useEffect, useRef, useState } from 'react';
import { Download, Mail, ChevronDown, Terminal } from 'lucide-react';
import { personal, heroSkills } from '../data';

const terminalLines = [
  { prompt: '~', cmd: 'whoami', out: 'prathamesh-talekar' },
  { prompt: '~', cmd: 'cat skills.txt', out: 'Java · Spring Boot · Node.js · React · MongoDB' },
  { prompt: '~', cmd: 'git log --oneline -3', out: 'a1b2c3d feat: parallel multi-bank recommendation\nb4c5d6e feat: WebRTC video consultation signaling\nc7d8e9f feat: spring scheduler cron notification jobs' },
  { prompt: '~', cmd: 'echo "Open to engineering opportunities"', out: 'Open to engineering opportunities' },
];

function TerminalDisplay() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | showing-output | next-line

  useEffect(() => {
    if (lineIdx >= terminalLines.length) return;
    const line = terminalLines[lineIdx];

    if (phase === 'typing') {
      if (typed.length < line.cmd.length) {
        const t = setTimeout(() => {
          setTyped(line.cmd.slice(0, typed.length + 1));
        }, 38 + Math.random() * 30);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('showing-output'), 300);
        return () => clearTimeout(t);
      }
    }
    if (phase === 'showing-output') {
      const t = setTimeout(() => setPhase('next-line'), 800);
      return () => clearTimeout(t);
    }
    if (phase === 'next-line') {
      if (lineIdx + 1 < terminalLines.length) {
        setVisibleLines(l => l + 1);
        setLineIdx(l => l + 1);
        setTyped('');
        setPhase('typing');
      } else {
        setVisibleLines(l => l + 1);
      }
    }
  }, [typed, phase, lineIdx]);

  const currentLine = terminalLines[lineIdx];

  return (
    <div style={{
      background: '#0d0e12',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 12,
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.78rem',
      lineHeight: 1.7,
      maxWidth: 520,
      width: '100%',
    }}>
      {/* Title bar */}
      <div style={{
        padding: '10px 16px',
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', marginLeft: 6 }}>
          prathamesh@portfolio — bash
        </span>
      </div>

      {/* Terminal body */}
      <div style={{ padding: '16px 20px', minHeight: 200 }}>
        {/* Past lines */}
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <div>
              <span style={{ color: 'var(--color-teal)' }}>➜ </span>
              <span style={{ color: 'var(--color-text-muted)' }}>{line.prompt} </span>
              <span style={{ color: 'var(--color-text-primary)' }}>{line.cmd}</span>
            </div>
            <div style={{ color: 'var(--color-text-secondary)', paddingLeft: 16 }}>{line.out}</div>
          </div>
        ))}

        {/* Current typing line */}
        {lineIdx < terminalLines.length && (
          <div>
            <div>
              <span style={{ color: 'var(--color-teal)' }}>➜ </span>
              <span style={{ color: 'var(--color-text-muted)' }}>{currentLine.prompt} </span>
              <span style={{ color: 'var(--color-text-primary)' }}>{typed}</span>
              {phase === 'typing' && (
                <span className="cursor-blink" style={{
                  display: 'inline-block',
                  width: 7,
                  height: '0.85em',
                  background: 'var(--color-accent)',
                  verticalAlign: 'middle',
                  marginLeft: 2,
                }} />
              )}
            </div>
            {phase !== 'typing' && (
              <div style={{ color: 'var(--color-text-secondary)', paddingLeft: 16 }}>
                {currentLine.out}
              </div>
            )}
          </div>
        )}

        {/* Final cursor */}
        {lineIdx >= terminalLines.length && (
          <div>
            <span style={{ color: 'var(--color-teal)' }}>➜ </span>
            <span style={{ color: 'var(--color-text-muted)' }}>~ </span>
            <span className="cursor-blink" style={{
              display: 'inline-block',
              width: 7,
              height: '0.85em',
              background: 'var(--color-accent)',
              verticalAlign: 'middle',
            }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="bg-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Gradient blobs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(124, 111, 255, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(0, 201, 167, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '64px 24px',
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 64,
          alignItems: 'center',
        }} className="hero-grid">
          {/* Left content */}
          <div>
            {/* Status */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              background: 'rgba(0, 201, 167, 0.08)',
              border: '1px solid rgba(0, 201, 167, 0.2)',
              borderRadius: 20,
              marginBottom: 28,
            }}>
              <span className="status-dot" />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-teal)',
                letterSpacing: '0.05em',
              }}>
                Available for opportunities
              </span>
            </div>

            {/* Greeting */}
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--color-accent-text)',
              marginBottom: 12,
              letterSpacing: '0.02em',
            }}>
              Hi, I'm
            </p>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 6vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 16,
            }}>
              <span className="text-gradient-subtle">Prathamesh</span>
              <br />
              <span style={{ color: 'var(--color-text-secondary)', fontWeight: 600 }}>Talekar.</span>
            </h1>

            {/* Tagline */}
            <h2 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.5,
              maxWidth: 520,
              marginBottom: 20,
            }}>
              Software Engineer building <span style={{ color: 'var(--color-text-primary)' }}>reliable backend systems</span> and{' '}
              <span style={{ color: 'var(--color-text-primary)' }}>full-stack applications</span>.
            </h2>

            {/* Intro */}
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 32,
            }}>
              {personal.intro}
            </p>

            {/* Skill badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {heroSkills.map(skill => (
                <span key={skill} className="tech-badge">{skill}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button
                className="btn-primary"
                onClick={() => handleScroll('#projects')}
                id="hero-view-projects"
              >
                View Projects
              </button>
              <a
                href={personal.resume}
                download="Prathamesh_Talekar_Resume.pdf"
                className="btn-secondary"
                id="hero-download-resume"
              >
                <Download size={15} />
                Download Resume
              </a>
              <button
                className="btn-ghost"
                onClick={() => handleScroll('#contact')}
                id="hero-contact"
              >
                <Mail size={14} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="hero-terminal">
            <TerminalDisplay />
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            marginTop: 64,
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
          }}
          onClick={() => handleScroll('#about')}
          role="button"
          tabIndex={0}
          aria-label="Scroll to About section"
          onKeyDown={e => e.key === 'Enter' && handleScroll('#about')}
        >
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>SCROLL</span>
          <ChevronDown size={16} style={{ animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr auto;
        }
        .hero-terminal {
          display: block;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-terminal {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
