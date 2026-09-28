import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

// ─── Architecture Diagrams ────────────────────────────────────────────────────

function CreditWiseArch() {
  const layers = [
    { label: 'React Frontend', sub: 'Tailwind CSS', color: '#61dafb' },
    { label: 'Spring Boot REST API', sub: 'Business Logic & Orchestration', color: '#7c6fff' },
    { label: 'Multi-Bank Recommendation', sub: 'Java parallelStream()', color: '#a899ff' },
    { label: 'Python Flask ML Service', sub: 'Uvicorn', color: '#ffd166' },
    { label: 'XGBoost Classifier', sub: 'SMOTE · Feature Encoding', color: '#ffd166' },
    { label: 'Prediction Result', sub: 'Approval Probability · Recommendations', color: '#00c9a7' },
  ];

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {/* Main flow */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        {layers.map((layer, i) => (
          <div key={i} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{
              width: '100%',
              padding: '10px 16px',
              background: `${layer.color}12`,
              border: `1px solid ${layer.color}35`,
              borderRadius: 8,
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: layer.color, fontWeight: 600 }}>
                {layer.label}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', marginTop: 2 }}>
                {layer.sub}
              </div>
            </div>
            {i < layers.length - 1 && (
              <ArrowRight size={12} color="var(--color-text-muted)" style={{ transform: 'rotate(90deg)' }} />
            )}
          </div>
        ))}
      </div>

      {/* MongoDB sidebar */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        paddingTop: 50,
      }}>
        <div style={{
          padding: '12px 14px',
          background: 'rgba(77, 179, 128, 0.1)',
          border: '1px solid rgba(77, 179, 128, 0.3)',
          borderRadius: 8,
          textAlign: 'center',
          minWidth: 100,
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#4db380', fontWeight: 600 }}>
            MongoDB
          </div>
          <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', marginTop: 2 }}>
            Data Persistence
          </div>
        </div>
        <div style={{
          fontSize: '0.65rem',
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-mono)',
          textAlign: 'center',
        }}>
          ↔ Backend
        </div>
      </div>
    </div>
  );
}

function AarogyaArch() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Main layers */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        {[
          { label: 'React Frontend', sub: 'react-i18next · UI Components', color: '#61dafb' },
          { label: 'Node.js / Express API', sub: 'REST Endpoints · Middleware', color: '#68a063' },
          { label: 'JWT Authentication + RBAC', sub: 'Patient · Doctor roles', color: '#7c6fff' },
          { label: 'MongoDB', sub: 'Users · Appointments · Documents', color: '#4db380' },
        ].map((layer, i, arr) => (
          <div key={i} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{
              width: '100%',
              padding: '10px 16px',
              background: `${layer.color}12`,
              border: `1px solid ${layer.color}35`,
              borderRadius: 8,
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: layer.color, fontWeight: 600 }}>
                {layer.label}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', marginTop: 2 }}>
                {layer.sub}
              </div>
            </div>
            {i < arr.length - 1 && (
              <ArrowRight size={12} color="var(--color-text-muted)" style={{ transform: 'rotate(90deg)' }} />
            )}
          </div>
        ))}
      </div>

      {/* Video consultation flow */}
      <div style={{
        padding: '16px',
        background: 'rgba(124, 111, 255, 0.04)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 10,
        }}>
          Video Consultation
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <div style={{
            padding: '8px 14px',
            background: 'rgba(97, 218, 251, 0.1)',
            border: '1px solid rgba(97, 218, 251, 0.25)',
            borderRadius: 6,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#61dafb',
          }}>Patient Browser</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-teal)' }}>WebRTC P2P</span>
            <div style={{ width: '100%', height: 1, background: 'var(--color-border-subtle)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent-text)' }}>Socket.IO Signaling</span>
          </div>
          <div style={{
            padding: '8px 14px',
            background: 'rgba(104, 160, 99, 0.1)',
            border: '1px solid rgba(104, 160, 99, 0.25)',
            borderRadius: 6,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#68a063',
          }}>Doctor Browser</div>
        </div>
      </div>
    </div>
  );
}

// ─── Case Study Modal ────────────────────────────────────────────────────────

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div className="modal-content">
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: 8,
            cursor: 'pointer',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Close case study"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <p className="section-label" style={{ marginBottom: 8 }}>Case Study</p>
          <h2
            id={`modal-title-${project.id}`}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 6,
            }}
          >
            {project.name}
          </h2>
          <p style={{ color: 'var(--color-accent-text)', fontSize: '0.9375rem' }}>
            {project.tagline}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Problem + Solution */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="modal-two-col">
            <div>
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>Problem</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '0.875rem' }}>
                {project.problem}
              </p>
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>Solution</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '0.875rem' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>My Contributions</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 8,
            }}>
              {project.myRole.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  padding: '10px 14px',
                  background: 'rgba(124, 111, 255, 0.05)',
                  border: '1px solid rgba(124, 111, 255, 0.12)',
                  borderRadius: 8,
                }}>
                  <span style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    flexShrink: 0,
                    marginTop: 6,
                  }} />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>Architecture</h3>
            {project.id === 'creditwise' ? <CreditWiseArch /> : <AarogyaArch />}
          </div>

          {/* Technical Decisions */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>Key Technical Decisions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {project.decisions.map((d, i) => (
                <div key={i} style={{
                  padding: '16px 20px',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 8,
                  borderLeft: '3px solid var(--color-accent)',
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text-primary)', marginBottom: 6 }}>
                    {d.title}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    {d.body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>Key Features</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.features.map((f, i) => (
                <span key={i} style={{
                  padding: '5px 12px',
                  background: 'rgba(0, 201, 167, 0.07)',
                  border: '1px solid rgba(0, 201, 167, 0.2)',
                  borderRadius: 5,
                  fontSize: '0.78rem',
                  color: 'var(--color-teal)',
                  fontFamily: 'var(--font-mono)',
                }}>{f}</span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tech.map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 12, paddingTop: 8, borderTop: '1px solid var(--color-border)', flexWrap: 'wrap' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label={`${project.name} GitHub repository`}
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label={`${project.name} live demo`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .modal-two-col {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 600px) {
          .modal-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
