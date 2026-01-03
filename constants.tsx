
import { Project, Skill, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Yugal Nyoupane",
  title: "Full Stack Developer & ML Enthusiast",
  location: "Nepal",
  bio: "I am a software developer and machine learning enthusiast based in Nepal. I specialize in building scalable full-stack applications and exploring the frontiers of artificial intelligence.",
  email: "neunyouyugal12@gmail.com",
  github: "https://github.com/yugalnyoupane",
  linkedin: "https://www.linkedin.com/in/yugal-nyoupane-32a62329b/",
  photo: "./images/yugal.jpg" // Placeholder for actual photo
};

export const PROJECTS: Project[] = [
  // {
  //   id: "1",
  //   title: "Neural Vision",
  //   description: "Deep learning based image classification system.",
  //   longDescription: "A full-stack application that leverages PyTorch for backend inference and React for a real-time visualization dashboard.",
  //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  //   tags: ["Python", "PyTorch", "React", "FastAPI"],
  //   github: "https://github.com"
  // },
  {
    id: "1",
    title: "Tensor Official Website",
    description: "Financial dashboard with predictive stock trends.",
    longDescription: "Lead Software Coordinator, Tensor – Developed and launched the official Tensor website, managing the full software development lifecycle including front-end design, functionality implementation, and deployment, while coordinating with the team to showcase projects, events, and technical initiatives effectively.",
    image: "./images/tensor.jpeg",
    tags: ["React", "Node.js", "Next.js"],
    link: "https://tensor.tcioe.edu.np/"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "Frontend", level: 70 },
  { name: "TypeScript", category: "Frontend", level: 50},
  { name: "Node.js", category: "Backend", level: 60 },
  { name: "Python / FastAPI", category: "Backend", level: 50 },
  { name: "PyTorch / TensorFlow", category: "Machine Learning", level: 10 },
  { name: "C++", category: "Backend", level: 90 }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Tensor, IOE Thapathali",
    role: "Full Stack Developer",
    period: "2024 - 2025",
    description: [
      "Worked as Lead Software Coordinator ",
      "Developing high-performance web applications using MERN stack.",
      "Collaborating with cross-functional teams to deliver quality software."
    ]
  },
  {
    company:"IEEE, IOE Thapathali Branch",
    role:"Founding Vice-Chair",
    period:"2025-present",
    description:[
      "Co-founded the IEEE Student Branch and contributed to establishing its organizational and operational framework.",
      "Assisted in planning and executing technical workshops, seminars, and student-focused events.",
      "Supported member engagement, leadership coordination, and the early growth of the branch"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Little Stars Academy",
    degree: "SEE (Secondary Education Examination)",
    period: "2006-2018",
    description:"Passed the Secondary Education Examination (SEE) with 3.95 GPA (High Excellence), secured West Pabsion Topper, and was awarded by the Mayor for outstanding academic performance."
  },
  {
    institution: "College of Central State",
    degree: "Higher Secondary Education (Science)",
    period: "2019 - 2021",
    description: "Passed Higher Secondary Education (+2) in 2021 AD (Grade 11) with 4.0 GPA and 2022 AD (Grade 12) with 3.79 GPA, and was awarded by the Education Minister and NEA CEO Kulman Ghising for outstanding academic performance."
  },
  {
    institution: "IOE, Tribhuvan University",
    degree: "Bachelor in Electronics, Communication and Information Engineering",
    period: "2023 - Present",
    description: "Currently pursuing a B.E. degree with a focus on embedded systems, AI/ML, data science, and full-stack development, gaining hands-on experience in DSA, Python, IoT projects, and technical research."
  }
];

export const NAVIGATION = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
