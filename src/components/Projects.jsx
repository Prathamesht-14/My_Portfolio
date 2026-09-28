import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data';
import CaseStudyModal from './CaseStudyModal';

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, [ref]);
}

// Color map for tech badges
const techColors = {
  'Java': '#e76f51',
  'Spring Boot': '#6aad73',
  'React': '#61dafb',
  'Node.js': '#68a063',
  'Express.js': '#68a063',
  'MongoDB': '#4db380',
  'Python': '#ffd166',
  'Flask': '#ffd166',
  'XGBoost': '#ffd166',
  'SMOTE': '#ffd166',
  'JWT': '#7c6fff',
  'RBAC': '#7c6fff',
  'WebRTC': '#a899ff',
  'Socket.IO': '#a899ff',
  'Tailwind CSS': '#61dafb',
  'Cloudinary': '#00c9a7',
};

function TechBadge({ label }) {
  const color = techColors[label] || 'var(--color-accent-text)';
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 9px',
      background: `${color}14`,
      border: `1px solid ${color}30`,
      borderRadius: 4,
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      color: color,
      letterSpacing: '0.01em',
    }}>
      {label}
    </span>
  );
}

function ProjectCard({ project, index, onViewCaseStudy }) {
  const ref = useRef(null);
  useReveal(ref);
  const delay = index * 120;

  return (
    <div
      ref={ref}
      className="card reveal"
      style={{
        padding: 28,
        transitionDelay: `${delay}ms`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 2,
            }}>
              {project.name}
            </h3>
            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--color-accent-text)',
              fontFamily: 'var(--font-mono)',
            }}>
              {project.tagline}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              aria-label={`${project.name} GitHub`}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent-text)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
            >
              <GithubIcon size={15} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  borderRadius: 6,
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                aria-label={`${project.name} live demo`}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Problem */}
      <p style={{
        fontSize: '0.8125rem',
        color: 'var(--color-text-muted)',
        lineHeight: 1.6,
        marginBottom: 14,
        fontStyle: 'italic',
      }}>
        "{project.problem}"
      </p>

      {/* Highlights */}
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        marginBottom: 18,
        flex: 1,
      }}>
        {project.highlights.slice(0, 4).map((h, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: 'var(--color-accent)',
              flexShrink: 0,
              marginTop: 7,
            }} />
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
              {h}
            </span>
          </li>
        ))}
      </ul>

      {/* Tech */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {project.tech.map(t => <TechBadge key={t} label={t} />)}
      </div>

      {/* View case study */}
      <button
        onClick={() => onViewCaseStudy(project)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: 'transparent',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 6,
          padding: '9px 16px',
          cursor: 'pointer',
          color: 'var(--color-accent-text)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          transition: 'all 0.2s',
          width: '100%',
          justifyContent: 'center',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--color-accent-glow)';
          e.currentTarget.style.borderColor = 'var(--color-accent)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
        }}
        id={`case-study-${project.id}`}
        aria-label={`View case study for ${project.name}`}
      >
        View Case Study
        <ArrowRight size={13} />
      </button>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  useReveal(headerRef);
  const [activeProject, setActiveProject] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActiveProject(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={headerRef} className="reveal" style={{ marginBottom: 48 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>// projects</p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
            marginBottom: 12,
          }}>
            Selected Projects
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            maxWidth: 540,
          }}>
            Full-stack and backend projects spanning enterprise Java systems, distributed microservices, real-time communication, and ML-integrated applications.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))',
          gap: 24,
        }} className="project-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onViewCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Case study modal */}
      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <style>{`
        .project-grid {
          grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
        }
        @media (max-width: 760px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
