export const profile = {
  name: "Nasim Khan Milon",
  role: "Software Engineering Student",
  typingStrings: [
    "Software Engineering Student",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Competitive Programmer",
  ],
  tagline:
    "Software Engineering student passionate about full-stack development, backend systems, and competitive programming — building role-based platforms that solve real problems.",
  location: "Sylhet, Bangladesh",
  email: "nasimkhanmilon@gmail.com",
  phone: "+880-1721971721",
  github: "https://github.com/Nasim-Khan-Milon",
  linkedin: "https://linkedin.com/in/nasim-khan-6788b2345",
  codeforces: "https://codeforces.com/profile/NasimKhan",
  cvUrl: "/cv.pdf",
};

export const summary =
  "Software Engineering student with hands-on experience across the MERN stack, backend systems, and REST API development. Solved 300+ problems on Codeforces (Pupil rank) with strong foundations in data structures, algorithms, and competitive programming. Experienced in building full-stack, role-based platforms and collaborating in team-driven project environments.";

export const skillGroups = [
  {
    label: "Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Web Technologies",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
    ],
  },
  {
    label: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker"],
  },
];

// image: leave null for projects without a screenshot asset (rendered with a code-pattern cover)
export const projects = [
  {
    title: "Online Doctor Appointment System",
    description:
      "Full-stack healthcare platform with Patient, Doctor and Admin roles — doctor search, scheduling, prescriptions, reviews and payments, plus admin reporting.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "MySQL", "JWT", "Redis", "Cloudinary"],
    image: "doctor.png",
    github: "https://github.com/Nasim-Khan-Milon/Online-Doctor-Appointment-System",
    demo: null,
    featured: true,
  },
  {
    title: "EduAI — AI-Powered Classroom Platform",
    description:
      "Group project: an AI-powered classroom platform for students and instructors, with REST APIs for auth, classrooms, assignments, quizzes and discussions.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    image: null,
    github: "https://github.com/maruf6890/EduAI",
    demo: null,
    featured: true,
    group: true,
  },
  {
    title: "Smart Department Management System",
    description:
      "Group project: a role-based department management platform for Admin, Teacher and Student — courses, attendance, assignments, notices and results.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "MySQL", "JWT", "Zod"],
    image: null,
    github: "https://github.com/msiyem/Smart-Department-Management-System",
    demo: null,
    featured: true,
    group: true,
  },
  {
    title: "E-commerce Website",
    description:
      "Complete shopping platform with authentication, product management, a shopping cart and payment integration.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    image: "ecommerce.png",
    github: "https://github.com/Nasim-Khan-Milon/Shoping-System",
    demo: null,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Java socket-based client-server chat system with a GUI for instant real-time messaging.",
    tech: ["Java", "Socket Programming"],
    image: "chat.png",
    github: "https://github.com/Nasim-Khan-Milon/Chat-App",
    demo: null,
  },
  {
    title: "Snack Game (SDL2)",
    description:
      "SDLC-based academic project covering requirement analysis, system design and full documentation.",
    tech: ["C++", "SDL2"],
    image: "snack.png",
    github: "https://github.com/Nasim-Khan-Milon/SDL-Project",
    demo: null,
  },
];

export const achievements = [
  {
    title: "Pupil on Codeforces",
    description:
      "Achieved Pupil rank on Codeforces with a max rating of 1247, having solved 300+ problems.",
    stat: "300+",
    statLabel: "Problems solved",
  },
  {
    title: "ICPC Regional Preliminary",
    description: "Participated in the ICPC Regional Preliminary Contest.",
  },
  {
    title: "SciBlitz 2.0 — Finalist",
    description:
      "Reached the finals of a Science & Technology competition focused on innovation, problem solving and technical creativity (2025).",
  },
  {
    title: "NEUB CSE Fest — Participant",
    description:
      "Took part in a hackathon & technology festival featuring programming contests and project-based competitions (2025).",
  },
];

export const education = {
  degree: "BSc in Software Engineering",
  institute: "Shahjalal University of Science and Technology (SUST)",
  duration: "2023 – Present",
  cgpa: "3.70 / 4.00",
  cgpaValue: 3.7,
  cgpaMax: 4.0,
};

export const additionalInfo = {
  languages: ["English", "Bangla", "Hindi"],
  interests: ["Open Source", "Competitive Programming", "Web Development", "Machine Learning"],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
