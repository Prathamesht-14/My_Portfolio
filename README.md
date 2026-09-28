# Prathamesh Talekar — Portfolio Website

A premium, recruiter-focused software engineering portfolio built with React + Vite + Tailwind CSS.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server runs at: **http://localhost:5173**

---

## 📄 Adding Your Resume

**Important:** Place your resume PDF at:
```
public/resume.pdf
```

Rename your file to `resume.pdf` and put it in the `public/` folder. The "Download Resume" and "Resume" buttons throughout the site will link to it automatically. The download will be named `Prathamesh_Talekar_Resume.pdf` for the recruiter.

---

## 🔗 Updating Links

All personal information is centralized in **`src/data.js`**. You can update:

- Contact info (email, phone, LinkedIn, GitHub, LeetCode, CodeChef URLs)
- Education details
- Internship details
- Project descriptions and GitHub links
- Skills
- Achievements

---

## 📁 Project Structure

```
src/
├── App.jsx                    # Root component
├── data.js                    # All content (single source of truth)
├── index.css                  # Design system & global styles
├── main.jsx
└── components/
    ├── BrandIcons.jsx          # SVG icons (GitHub, LinkedIn)
    ├── Navbar.jsx
    ├── Hero.jsx               # Terminal animation + CTAs
    ├── About.jsx              # Profile + education card
    ├── Experience.jsx         # Internship timeline
    ├── Projects.jsx           # Project cards grid
    ├── CaseStudyModal.jsx     # Full case study + architecture diagrams
    ├── Skills.jsx             # Color-coded skill categories
    ├── Achievements.jsx       # Metrics + DSA section
    ├── EngineeringApproach.jsx # Interests + mindset principles
    ├── Contact.jsx            # Final CTA
    └── Footer.jsx

public/
├── resume.pdf                 # ← Place your resume here
└── favicon.svg
```

---

## 🎨 Design

- **Dark theme** — charcoal/near-black base with subtle purple accent
- **Typography** — Inter (UI) + JetBrains Mono (code/labels)
- **Accent color** — `#7c6fff` (muted purple)
- **Secondary accent** — `#00c9a7` (teal)

---

## 🌐 Deploying

To deploy to Vercel / Netlify / GitHub Pages:

```bash
npm run build
```

The `dist/` folder contains the production build. Deploy the contents of `dist/` to any static hosting provider.

For **Vercel** (recommended):
```bash
npx vercel --prod
```

---

## ✅ Checklist Before Sharing

- [ ] Replace `public/resume.pdf` with your actual resume
- [ ] Verify all social/GitHub links in `src/data.js`
- [ ] Add your actual GitHub repository links to projects in `src/data.js`
- [ ] If you have live demos, add `demo: 'https://...'` in the project data
- [ ] Run `npm run build` and verify the build succeeds
