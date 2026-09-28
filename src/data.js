// ─── Personal Info ─────────────────────────────────────────────────────────
export const personal = {
  name: 'Prathamesh Kalyan Talekar',
  nameShort: 'Prathamesh Talekar',
  headline: 'Software Engineer · Full-Stack Developer · Backend Developer',
  tagline: 'Building reliable backend systems and full-stack applications.',
  intro:
    'Software Engineering student at Pune Institute of Computer Technology with hands-on experience building backend services, REST APIs, full-stack applications, database-driven systems, and intelligent software products.',
  email: 'prathameshtalekar18@gmail.com',
  phone: '+91-9322536069',
  linkedin: 'https://www.linkedin.com/in/prathamesh-talekar-919a40308/',
  github: 'https://github.com/Prathamesht-14',
  leetcode: 'https://leetcode.com/u/Talekar-P-K14/',
  codechef: 'https://www.codechef.com/users/prathamesh1425',
  codeforces: 'https://codeforces.com/profile/Prathamesh14',
  resume: '/resume.pdf', // Place resume PDF at public/resume.pdf
};

// ─── Hero Skills ────────────────────────────────────────────────────────────
export const heroSkills = [
  'Java', 'Spring Boot', 'Node.js', 'React', 'MongoDB', 'REST APIs', 'DSA', 'XGBoost',
];

// ─── About ──────────────────────────────────────────────────────────────────
export const about = {
  body: `I'm a Bachelor of Engineering student in Information Technology at Pune Institute of Computer Technology (PICT), Pune, maintaining a CGPA of 9.47.

I have gained practical experience through a Java backend internship and have built full-stack projects spanning Spring Boot, React, Node.js, MongoDB, Python/ML, WebRTC, and Socket.IO.

I enjoy solving engineering problems across the stack — from designing backend APIs and database models to building responsive interfaces and integrating intelligent services. I'm particularly drawn to backend development, scalable system design, and the craft of writing maintainable, well-tested code.`,
  interests: [
    'Backend Engineering',
    'Full-Stack Development',
    'Scalable Systems',
    'API Design',
    'Databases',
    'Software Architecture',
    'Problem Solving',
  ],
};

// ─── Education ──────────────────────────────────────────────────────────────
export const education = {
  institution: 'Pune Institute of Computer Technology (PICT), Pune',
  degree: 'Bachelor of Engineering — Information Technology',
  period: 'September 2023 – May 2027 (Expected)',
  cgpa: '9.52',
};

// ─── Experience ─────────────────────────────────────────────────────────────
export const experience = [
  {
    role: 'Java Backend Developer Intern',
    company: 'TenancyPassport',
    location: 'Remote',
    period: 'March 2026 – June 2026',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'Spring Scheduler', 'Spring RestClient', 'DTOs', 'MongoDB', 'Unit Testing', 'Integration Testing'],
    summary:
      'Contributed to backend feature development across 4 core modules within a distributed backend architecture, focusing on notification workflows, scheduled jobs, and reliability improvements.',
    contributions: [
      'Developed backend features using Java, Spring Boot, and REST APIs for agency invitation, rent reminder, and certificate expiry email notification workflows.',
      'Designed cron-based scheduled background jobs using Spring Scheduler to automate periodic notification tasks.',
      'Integrated email notification functionality using Spring RestClient, DTOs, and JSON-based REST API communication.',
      'Automated rent reminder and certificate expiry notifications for 100+ active tenancies.',
      'Developed the agency invitation workflow that triggers automated invitation emails after successful agency creation.',
      'Implemented validation, logging, and idempotency checks to improve reliability.',
      'Investigated backend performance and notification delivery issues.',
      'Wrote unit and integration tests to verify feature correctness and improve code confidence.',
      'Integrated MongoDB for scalable data persistence.',
      'Worked on improving scalability, reliability, and maintainability across modules.',
    ],
    flow: ['Java', 'Spring Boot', 'REST APIs', 'Spring Scheduler', 'RestClient', 'DTO', 'MongoDB', 'Notifications', 'Testing'],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'creditwise',
    name: 'CreditWise',
    tagline: 'Intelligent Financial Advisory Platform',
    problem:
      'Users often have difficulty understanding loan eligibility and comparing suitable loan options across multiple banks.',
    solution:
      'A full-stack financial decision-support platform that evaluates borrower information, estimates loan approval probability, performs financial calculations, and provides personalized bank/loan recommendations.',
    tech: ['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'MongoDB', 'Python', 'Flask', 'XGBoost', 'SMOTE'],
    github: 'https://github.com/Prathamesht-14/smart-credit-analyzer',
    demo: null,
    highlights: [
      'Loan approval prediction using XGBoost classification model',
      'Personalized bank recommendations with FOIR and EMI calculations',
      'Multi-bank parallel recommendation requests using Java parallelStream()',
      'Separated ML model into a Python/Flask microservice for clean service boundaries',
      'Spring Boot backend handles business logic and API orchestration',
      'MongoDB for flexible, JSON-like financial and user-analysis data persistence',
    ],
    myRole: [
      'Spring Boot backend development and REST API design',
      'React frontend implementation',
      'MongoDB schema design and database operations',
      'Python Flask ML microservice integration',
      'Feature engineering pipeline: preprocessing, encoding, SMOTE, XGBoost',
      'Multi-bank recommendation orchestration and parallelization',
      'FOIR, EMI, and eligibility calculation logic',
    ],
    decisions: [
      {
        title: 'ML as a Microservice',
        body: 'The Python/XGBoost model is deployed as a separate Flask service. Spring Boot calls it over HTTP, keeping Java and Python concerns cleanly separated.',
      },
      {
        title: 'Parallelizing Multi-Bank Predictions',
        body: 'Multi-bank recommendation requests were initially sequential, causing latency. I used Java parallelStream() to parallelize the prediction calls and reduce response time.',
      },
      {
        title: 'SMOTE for Class Imbalance',
        body: 'Loan approval datasets are typically skewed. SMOTE (Synthetic Minority Oversampling Technique) was applied to balance the training data before XGBoost training.',
      },
      {
        title: 'MongoDB for Financial Data',
        body: 'MongoDB was chosen because the application works with variable borrower profiles and bank-specific parameters that fit naturally into a document model.',
      },
    ],
    arch: {
      layers: [
        { label: 'React Frontend', color: 'react' },
        { label: 'Spring Boot REST API', color: 'spring' },
        { label: 'Business / Recommendation Logic', color: 'accent' },
        { label: 'Python Flask ML Service', color: 'python' },
        { label: 'XGBoost Model', color: 'python' },
        { label: 'Prediction Result', color: 'teal' },
      ],
      db: 'MongoDB',
    },
    features: [
      'Loan approval probability estimation',
      'Personalized bank recommendations',
      'Loan comparison across banks',
      'FOIR and EMI calculations',
      'Borrower eligibility roadmap',
      'Historical prediction analysis',
      'Prediction logs and dashboard',
    ],
  },
  {
    id: 'aarogya',
    name: 'AarogyaAI',
    tagline: 'AI-Powered Telemedicine Platform',
    problem:
      'Traditional telemedicine workflows can involve fragmented appointment booking, communication, medical documents, and consultation systems.',
    solution:
      'A full-stack telemedicine platform connecting patients and doctors through appointment management, secure authentication, video consultation, digital medical documents, multilingual support, and AI assistance.',
    tech: ['Node.js', 'Express.js', 'React', 'MongoDB', 'JWT', 'RBAC', 'WebRTC', 'Socket.IO', 'Cloudinary', 'LLM Integration', 'react-i18next'],
    github: 'https://github.com/Prathamesht-14/ArogyaAi',
    demo: null,
    highlights: [
      'JWT-based authentication with Role-Based Access Control (Patient / Doctor)',
      'Doctor availability and appointment slot management with booking validation',
      'WebRTC peer-to-peer video consultation with Socket.IO signaling',
      'MongoDB schema design for users, appointments, slots, and medical documents',
      'Cloudinary integration for cloud-based medical document storage',
      'AI health assistant powered by LLM integration',
      'Multilingual support using react-i18next',
    ],
    myRole: [
      'Node.js / Express.js backend development',
      'JWT authentication implementation',
      'Role-Based Access Control (RBAC) for Patient and Doctor roles',
      'MongoDB schema design and all database operations',
      'Appointment booking and doctor/patient slot management system',
      'WebRTC video consultation functionality',
      'Socket.IO-based signaling and real-time session coordination',
    ],
    decisions: [
      {
        title: 'WebRTC + Socket.IO for Video',
        body: 'WebRTC handles the peer-to-peer real-time media communication. Socket.IO is used for signaling — exchanging SDP offers/answers and ICE candidates between participants to establish the peer connection.',
      },
      {
        title: 'JWT + RBAC',
        body: 'Stateless JWT tokens carry the user role, enabling middleware to enforce RBAC. Patient and Doctor roles each have distinct access boundaries enforced at the API layer.',
      },
      {
        title: 'Appointment Slot Consistency',
        body: 'The booking flow validates doctor availability before creating appointment records in MongoDB, preventing inappropriate duplicate bookings for the same slot.',
      },
      {
        title: 'Cloudinary for Medical Documents',
        body: 'Cloudinary was used for cloud-based storage and retrieval of prescriptions and medical documents, with metadata references stored in MongoDB.',
      },
    ],
    arch: {
      frontend: 'React',
      backend: 'Node.js / Express API',
      auth: 'JWT + RBAC',
      db: 'MongoDB',
      video: {
        patient: 'Patient Browser',
        doctor: 'Doctor Browser',
        protocol: 'WebRTC',
        signaling: 'Socket.IO Signaling',
      },
    },
    features: [
      'JWT Authentication & RBAC',
      'Doctor availability & slot management',
      'Appointment booking & validation',
      'WebRTC video consultation',
      'Socket.IO real-time signaling',
      'AI health assistant (LLM)',
      'Medical document management',
      'Multilingual support (react-i18next)',
    ],
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Programming Languages',
    items: ['C++', 'Java', 'JavaScript', 'Python'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Spring Security', 'Node.js', 'Express.js', 'REST APIs', 'Microservices', 'SDLC'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'SQL'],
  },
  {
    category: 'Software Engineering',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'REST Architecture',
      'Authentication / Authorization',
      'API Design',
      'Concurrency Fundamentals',
      'System Design Fundamentals',
    ],
  },
  {
    category: 'Testing',
    items: ['Unit Testing', 'Integration Testing'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Maven', 'Postman', 'IntelliJ IDEA', 'Docker', 'Uvicorn'],
  },
];

// ─── Achievements ────────────────────────────────────────────────────────────
export const achievements = [
  {
    value: '600+',
    label: 'DSA Problems',
    sub: 'LeetCode',
    color: 'accent',
  },
  {
    value: '9.52',
    label: 'CGPA',
    sub: 'PICT, Pune',
    color: 'teal',
  },
  {
    value: '1710',
    label: 'Max Rating',
    sub: 'LeetCode',
    color: 'accent',
  },
  {
    value: '2★',
    label: 'CodeChef',
    sub: 'Max Rating: 1490',
    color: 'teal',
  },
];

export const competitiveProgramming = [
  {
    platform: 'LeetCode',
    detail: '600+ problems solved · Max rating: 1710',
    url: personal.leetcode,
  },
  {
    platform: 'CodeChef',
    detail: '2-Star · Max rating: 1490',
    url: personal.codechef,
  },
  {
    platform: 'Codeforces',
    detail: 'Max rating: 1186',
    url: personal.codeforces,
  },
  {
    platform: 'PICT INC',
    detail: 'Runner-up — Pradnya Coding Contest 2026',
    url: null,
  },
];

// ─── DSA Topics ──────────────────────────────────────────────────────────────
export const dsaTopics = [
  'Arrays', 'Strings', 'Hashing', 'Linked Lists', 'Trees', 'Graphs',
  'Dynamic Programming', 'Binary Search', 'Sliding Window', 'Two Pointers', 'STL',
];

// ─── Engineering Approach ────────────────────────────────────────────────────
export const engineeringApproach = [
  'Understand the problem before choosing the technology.',
  'Separate business logic from infrastructure concerns.',
  'Design APIs and data models around actual use cases.',
  'Think about failure cases, validation, and idempotency.',
  'Optimize only after identifying the bottleneck.',
  'Write testable and maintainable code.',
  'Prefer simple, explainable architecture before unnecessary complexity.',
];

// ─── Engineering Interests ───────────────────────────────────────────────────
export const interests = [
  {
    title: 'Backend Engineering',
    body: 'API design, business logic, authentication, database interaction, distributed workflows.',
    icon: 'server',
  },
  {
    title: 'Full-Stack Development',
    body: 'React frontend + backend services + database integration.',
    icon: 'layers',
  },
  {
    title: 'System Design',
    body: 'Scalability, performance, reliability, caching, APIs, and service boundaries.',
    icon: 'network',
  },
  {
    title: 'Problem Solving',
    body: 'DSA, optimization, debugging, and analytical thinking.',
    icon: 'cpu',
  },
  {
    title: 'AI / Intelligent Systems',
    body: 'Integrating machine-learning services into practical full-stack applications.',
    icon: 'brain',
  },
];
