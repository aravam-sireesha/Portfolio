export const PERSON = {
  name: 'ARAVAM SIREESHA',
  first: 'ARAVAM',
  last: 'SIREESHA',
  tagline: 'B.Tech CSE | Software Developer | AI/ML Enthusiast',
  email: 'sireeshaaravam@gmail.com',
  phone: '9390853740',
  linkedin: 'https://linkedin.com/in/aravam-sireesha-683092354',
  github: 'https://github.com/aravam-sireesha',
  portrait: '/images/aravam-sireesha.jpg'
}

export const HERO_VIDEO = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'
export const ROLES = ['Software Developer', 'AI/ML Enthusiast', 'Full-Stack Developer', 'Problem Solver']

export const NAV = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }, { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' }
]

export const DETAILS = [
  ['Degree', 'B.Tech – Computer Science & Engineering'],
  ['Institution', 'Siddartha Institute of Science and Technology'],
  ['Location', 'Andhra Pradesh, India'],
  ['Duration', '2024 – 2027'],
  ['CGPA', '8.87'],
  ['Focus', 'Software Development · AI/ML · Full-Stack Development'],
  ['Programming', 'Java · Python · C · SQL · JavaScript']
]

export const SKILLS = [
  { icon: 'code', category: 'Programming', items: ['Java', 'Python', 'C', 'SQL', 'JavaScript'] },
  { icon: 'globe', category: 'Web Development', items: ['HTML', 'CSS', 'React.js', 'Node.js', 'FastAPI', 'REST APIs'] },
  { icon: 'brain', category: 'AI / ML', items: ['Machine Learning', 'TensorFlow', 'Keras', 'Generative AI', 'Prompt Engineering'] },
  { icon: 'db', category: 'Backend & Database', items: ['Spring Boot', 'MySQL', 'MongoDB', 'JWT'] },
  { icon: 'cpu', category: 'CS Fundamentals', items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Computer Networks'] },
  { icon: 'tool', category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Postman', 'Docker'] }
]

export interface Project {
  title: string; description: string; highlights: string[]; tech: string[]; image?: string; alt: string; href: string; mark: string
}
export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Scam & Phishing Detection Platform',
    description: 'Built a phishing detection platform using Python, FastAPI, React.js, and Machine Learning.',
    highlights: ['92% prediction accuracy', 'URL classification', 'FastAPI REST API', 'Responsive dashboard'],
    tech: ['Python', 'FastAPI', 'React', 'Machine Learning'],
    image: '/images/projects/phishing-detection.jpg', alt: 'ScamShield scam and phishing detection landing page', href: PERSON.github, mark: 'S'
  },
  {
    title: 'Brain Tumor Detection using Deep Learning',
    description: 'Developed an end-to-end MRI image classification system using TensorFlow and Keras.',
    highlights: ['CNN-based classification', 'MRI image analysis', 'TensorFlow / Keras', 'Interactive prediction interface'],
    tech: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'React'],
    image: '/images/projects/brain-tumor.jpg', alt: 'Brain tumor detection MRI analysis interface', href: PERSON.github, mark: 'B'
  },
  {
    title: 'CareBridge AI',
    description: 'An AI-driven platform that connects child-care organizations, donors and volunteers — matching needs with resources through role-based dashboards.',
    highlights: ['Needs & resource matching', 'Role-based dashboards', 'AI assistant', 'Allocation tracking & analytics'],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'FastAPI'],
    image: '/images/projects/carebridge.jpg', alt: 'CareBridge AI platform dashboard', href: PERSON.github, mark: 'C'
  },
  {
    title: 'GenAI Personalized Networking Assistant',
    description: 'Developed an AI assistant using LLMs and prompt engineering to generate personalized networking conversations.',
    highlights: ['Context-aware responses', 'Personalized conversations', 'LLM integration', 'Prompt Engineering'],
    tech: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Python'],
    alt: 'Abstract visual for the GenAI networking assistant', href: PERSON.github, mark: 'G'
  }
]

export const CERTIFICATIONS = [
  { title: 'Generative AI & ChatGPT', issuer: 'GeeksforGeeks' },
  { title: 'Python', issuer: 'GeeksforGeeks' },
  { title: 'Full Stack Development (MERN)', issuer: 'SmartInternz & APSCHE' },
  { title: 'Machine Learning Project', issuer: 'SmartInternz & APSCHE' }
]

export const EDUCATION = [
  { period: '2024 – 2027', title: 'Bachelor of Technology', field: 'Computer Science and Engineering', school: 'Siddartha Institute of Science and Technology', place: 'Puttur, Andhra Pradesh', score: 'CGPA: 8.87' },
  { period: '2021 – 2024', title: 'Diploma', field: 'Electronics and Communication Engineering', school: 'Sri Venkateswara Government Polytechnic', place: 'Tirupati, Andhra Pradesh', score: 'Percentage: 82.11%' },
  { period: 'SSC', title: 'Secondary School Certificate', field: '', school: 'ZP Girls High School', place: 'Vadamalapeta, Andhra Pradesh', score: '88.17% | 529/600' }
]

export const JOURNAL = [
  { title: 'Learning DSA by understanding, not memorizing', desc: 'Why tracing a problem by hand beats collecting solutions.', date: 'Sep 2026', read: '4 min read' },
  { title: 'Building my first production-ready AI application', desc: 'Lessons from taking a model out of a notebook and behind an API.', date: 'Aug 2026', read: '6 min read' },
  { title: 'From Python fundamentals to full-stack development', desc: 'How Python, React and FastAPI fit together in my projects.', date: 'Jul 2026', read: '5 min read' },
  { title: 'Preparing for software engineering opportunities', desc: 'Fundamentals, projects and the habits I am building.', date: 'Jun 2026', read: '3 min read' }
]

export const EXPLORATIONS = [
  { kind: 'code', title: 'Clean code', sub: 'Readable, typed, maintainable' },
  { kind: 'ai', title: 'Applied AI', sub: 'LLMs and prompt engineering' },
  { kind: 'ml', title: 'Machine learning', sub: 'Training, evaluating, iterating' },
  { kind: 'arch', title: 'Software architecture', sub: 'Client, API and model services' },
  { kind: 'algo', title: 'Algorithms', sub: 'Complexity and problem solving' },
  { kind: 'workspace', title: 'Developer workspace', sub: 'Git, Docker, Postman, Jupyter' }
]
