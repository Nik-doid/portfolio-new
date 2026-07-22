export const personalInfo = {
  name: 'Nikesh Shrestha',
  title: 'Backend Developer',
  tagline: 'I build robust backends and dabble in AI.',
  description:
    'Passionate about AI with hands-on experience in CodeIgniter (CI3/CI4), Django, and FastAPI. I love tackling performance, reliability, and clean API design.',
  email: 'nikesh55567@gmail.com',
  phone: '+977-9843855567',
  location: 'Nepal',
  avatar: '/avatar.jpg',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/Nik-doid',
    linkedin: 'https://www.linkedin.com/in/nikesh-shrestha-519852289/',
    email: 'mailto:nikesh55567@gmail.com',
    instagram: 'https://www.instagram.com/miuni.n/',
  },
}

export const stats = [
  { label: 'Projects Completed', value: 4, suffix: '+' },
  { label: 'Years Experience', value: 1, suffix: '+' },
]

export const skillCategories = [
  {
    title: 'Backend Development',
    icon: 'code',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'Python', level: 70 },
      { name: 'JavaScript', level: 80 },
      { name: 'Django', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'CodeIgniter', level: 85 },
      { name: 'REST API Design', level: 90 },
      { name: 'Node.js', level: 70 },
    ],
  },
  {
    title: 'Database Management',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Database Design', level: 85 },
      { name: 'Query Optimization', level: 80 },
      { name: 'Redis', level: 70 },
      { name: 'Milvus', level: 65 },
    ],
  },
  {
    title: 'AI & ML Technologies',
    icon: 'robot',
    skills: [
      { name: 'LangChain', level: 70 },
      { name: 'Gemini API', level: 80 },
      { name: 'RAG Systems', level: 60 },
      { name: 'Vector Databases', level: 60 },
      { name: 'Embeddings', level: 60 },
      { name: 'Hugging Face', level: 65 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: 'tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Linux', level: 60 },
      { name: 'Postman', level: 85 },
      { name: 'Webhooks', level: 80 },
      { name: 'jQuery / AJAX', level: 85 },
    ],
  },
]

export const projects = [
  {
    title: 'WhatsApp Chat Integration',
    description:
      'Implemented a two-way WhatsApp conversation system for customer support, enabling businesses to communicate directly with customers through the WhatsApp Business API.',
    image: '/project1.jpg',
    tags: ['WhatsApp Business API', 'PHP', 'Webhooks', 'CI3'],
    category: 'backend',
    github: null,
    demo: null,
    private: true,
  },
  {
    title: 'Viber OTP Template Integration',
    description:
      'Developed a secure OTP delivery system using Viber\'s template messaging API, providing reliable authentication for user verification processes.',
    image: '/project2.jpg',
    tags: ['Viber API', 'OTP Service', 'Authentication', 'PHP', 'Message Templates'],
    category: 'backend',
    github: null,
    demo: null,
    private: true,
  },
  {
    title: 'RAG Chatbot with LangChain & Gemini',
    description:
      'Built a Retrieval-Augmented Generation chatbot using LangChain, Gemini API, and MixedBread embeddings for enhanced conversational AI with contextual knowledge retrieval.',
    image: '/project3.jpg',
    tags: ['LangChain', 'Gemini API', 'RAG', 'Milvus', 'Python', 'Redis'],
    category: 'ai',
    github: null,
    demo: 'https://classicbot-59j2.onrender.com',
    private: false,
  },
]

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'AI/ML' },
]

export const experiences = [
  {
    company: 'Classic Tech',
    position: 'Developer',
    duration: '2025 - Present',
    description:
      'Working as a backend developer on legacy CI3 projects, maintaining and improving existing systems.',
    technologies: ['CodeIgniter 3', 'PHP', 'MySQL', 'jQuery'],
  },
  {
    company: 'Classic Tech',
    position: 'Trainee',
    duration: '2025 - 3 Months',
    description:
      'Learned internal workflow and projects. Worked on maintaining legacy systems.',
    technologies: ['CodeIgniter 3', 'PHP', 'MySQL', 'jQuery'],
  },
  {
    company: 'Panacea Solutions',
    position: 'Remote Intern',
    duration: '2024 - 3 Months',
    description:
      '3-month Node.js internship focused on backend fundamentals, APIs, and team collaboration in a remote setup.',
    technologies: ['Node.js', 'REST APIs', 'Team Workflow', 'Remote Collaboration'],
  },
]

export const education = [
  {
    degree: 'Bachelor in Computer Science',
    institution: 'Tribhuvan University',
    year: '2022 - 2025',
    achievements: ['Pursuing degree with focus on software engineering'],
  },
]

export const contactInfo = {
  email: 'nikesh55567@gmail.com',
  phone: '+977-9843855567',
  location: 'Nepal',
}
