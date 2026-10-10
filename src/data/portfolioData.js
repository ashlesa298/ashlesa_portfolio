// Single source of truth for all portfolio content.
// Replace MY_IMAGE_URL with the URL of your photo. Put your resume at public/resume.pdf.
export const PHOTO_URL = '/pic1.jpg'
export const RESUME_URL = 'https://drive.google.com/file/d/1QAMAei4cWivGGnE56GYJ6c0DTY_hqHfD/view?usp=sharing'

export const profile = {
  name: 'Ashlesa Behera',
  role: 'Java Full-Stack Developer',
  stack: 'Spring Boot • React.js • REST APIs • GenAI Integration',
  intro: 'Computer Science graduate with hands-on experience developing full-stack applications using Java, Spring Boot and React.js. Skilled in REST APIs, secure authentication, databases, testing and GenAI integration.',
  summary: 'Computer Science graduate with hands-on experience developing full-stack applications using Java, Spring Boot and React.js. Proficient in RESTful API development, JWT/RBAC security, SQL/NoSQL databases, CI/CD pipelines and GenAI integration using Gemini and Groq. Strong foundation in OOP, DSA and end-to-end application development.',
  location: 'Bengaluru, Karnataka, India',
  email: 'ashlesa876@gmail.com',
  phone: '+91 8328937370',
  github: 'https://github.com/ashlesa298',
  linkedin: 'https://linkedin.com/in/ashlesa',
  facts: [
    ['Location', 'Bengaluru, Karnataka, India'],
    ['Role', 'Java Full-Stack Developer'],
    ['Focus', 'Spring Boot + React + GenAI'],
    ['Availability', 'Open to Software Engineering / Full-Stack opportunities'],
  ],
}

export const navLinks = [
  ['Home', '#home'], ['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'],
  ['Skills', '#skills'], ['Resume', '#resume'], ['Contact', '#contact'],
]

export const floatingTech = ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'MongoDB', 'GenAI']

export const about = [
  'I hold a B.Tech in Computer Science & Engineering and enjoy building complete products, from the database and REST APIs to the interface people actually use.',
  'My main stack is Java, Spring Boot and React. I build secured APIs with JWT and role-based access control, work with PostgreSQL, MySQL and MongoDB, and add GenAI features through the Gemini and Groq APIs.',
  'I care about code that is tested and shippable: API and integration testing, CI/CD with GitHub Actions, and clear problem solving grounded in OOP and data structures.',
]

export const skills = [
  { icon: 'Code2', title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'SQL'], color: 'from-blue-500 to-indigo-500' },
  { icon: 'Server', title: 'Backend', items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Node.js', 'Express.js', 'RESTful APIs', 'API Development & Integration'], color: 'from-violet-500 to-purple-600' },
  { icon: 'Monitor', title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Vite', 'Responsive UI Development'], color: 'from-pink-500 to-rose-500' },
  { icon: 'Database', title: 'Database / ORM', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Hibernate', 'JPA', 'Prisma ORM', 'Database Design'], color: 'from-amber-500 to-orange-500' },
  { icon: 'Brain', title: 'AI / GenAI', items: ['Google Gemini API', 'Groq API', 'Llama 3.3 70B', 'Generative AI', 'LLM Integration', 'Prompt Engineering'], color: 'from-fuchsia-500 to-violet-600' },
  { icon: 'ShieldCheck', title: 'Security', items: ['JWT', 'Role-Based Access Control (RBAC)', 'Spring Security', 'Authentication & Authorization'], color: 'from-rose-500 to-red-500' },
  { icon: 'Cloud', title: 'DevOps / CI/CD', items: ['CI/CD Pipelines', 'GitHub Actions', 'Automated Build & Test Workflows'], color: 'from-sky-500 to-cyan-500' },
  { icon: 'CheckCircle2', title: 'Testing / QA', items: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'API Testing', 'Postman', 'Jest', 'Supertest', 'STLC'], color: 'from-indigo-500 to-blue-600' },
  { icon: 'Wrench', title: 'Tools', items: ['Git', 'GitHub', 'Maven', 'IntelliJ IDEA', 'VS Code', 'Agile/Scrum'], color: 'from-teal-500 to-cyan-600' },
  { icon: 'Cpu', title: 'Core CS', items: ['OOP', 'Data Structures & Algorithms', 'DBMS', 'Software Development Life Cycle'], color: 'from-emerald-500 to-green-600' },
]

export const experience = [
  { org: 'QSpiders', title: 'Java Full-Stack Development Training', date: 'July 2026', note: 'College Incubation Initiative',
    points: ['Core Java', 'Spring Boot', 'Full-stack web development', 'REST APIs', 'Database integration', 'Frontend development'] },
  { org: 'Tata Group', title: 'Data Analytics Job Simulation', date: 'May 2025', note: 'Forage',
    points: ['Interpreted business data', 'Identified actionable insights', 'Exposure to end-to-end data analytics workflow'] },
]

export const projects = [
  { name: 'IncidentFlow AI', subtitle: 'AI-Powered Incident Management Platform',
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'GitHub Actions'],
    description: 'Full-stack incident management platform with a Java/Spring Boot/PostgreSQL backend and React + TypeScript frontend, exposing secured REST APIs with JWT authentication for incident tracking, dashboards, analytics and reporting.',
    features: ['AI Copilot: Google Gemini API, called through the Spring Boot backend, generates incident analysis, root-cause insights and recommended remediation actions.', 'GitHub Actions CI/CD automatically builds and tests the Spring Boot backend and React frontend.'],
    github: 'https://github.com/ashlesa298', demo: null },
  { name: 'AI Mock Interview Platform', subtitle: 'MERN + Groq AI',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Groq API'],
    description: 'Full-stack AI interview and ATS-analyzer application using React, Node.js, Express.js and MongoDB.',
    features: ['AI interview generation', 'Candidate evaluation', 'Performance reporting', 'ATS resume analysis', 'Resume/job description matching with match scores', 'Skill and keyword gap identification', 'Improvement suggestions', 'Downloadable PDF reports'],
    github: 'https://github.com/ashlesa298', demo: null },
  { name: 'Mini Operations ERP', subtitle: 'Multi-Location Inventory & Order Management',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    description: 'Inventory and order management across multiple locations, with role-based workflows for admin, operations and sales teams.',
    features: ['JWT/cookie authentication', 'RBAC: Admin, Operations and Sales roles', 'Inventory management', 'Work orders', 'Inter-warehouse stock transfers', 'Order fulfillment', 'Jest testing and Supertest integration testing'],
    github: 'https://github.com/ashlesa298', demo: null },
]

export const services = [
  { icon: 'Server', title: 'Backend & API Development', text: 'Secured REST APIs with Spring Boot or Node.js, JWT/RBAC and relational or document databases.' },
  { icon: 'Monitor', title: 'Frontend Development', text: 'Responsive React interfaces with clean component structure and accessible markup.' },
  { icon: 'Brain', title: 'GenAI Integration', text: 'LLM features using Gemini and Groq APIs, wired through your backend.' },
  { icon: 'Cloud', title: 'Testing & CI/CD', text: 'API and integration tests, plus automated build and test workflows on GitHub Actions.' },
]

export const education = [
  { degree: 'B.Tech, Computer Science & Engineering', school: 'Institute of Technical Education and Research, SOA University, Bhubaneswar', year: '2022 – 2026'},
  { degree: 'Intermediate (Science), +2', school: 'Jupiter Public School, Bhubaneswar', year: '2022'},
  { degree: 'Matriculation', school: 'DAV Public School, Jharsuguda', year: '2020'},
]

export const certifications = [
  { name: 'Software Testing (Foundations)', issuer: 'Great Learning Academy' },
  { name: 'AI Workshop', issuer: 'NxtWave' },
  { name: 'Claude with the Anthropic API', issuer: 'Anthropic' },
  { name: 'Salesforce Trailhead', issuer: '63+ Badges • 20,000+ Points' },
  { name: 'Java & C++ Programming Course', issuer: 'Udemy' },
]

export const resumeChips = ['Java Full-Stack Developer', 'Spring Boot', 'React.js', 'REST APIs', 'GenAI', 'PostgreSQL', 'MongoDB', 'JWT/RBAC', 'Testing', 'CI/CD']
