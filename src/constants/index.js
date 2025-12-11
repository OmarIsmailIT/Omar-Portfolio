import project1 from "../assets/Skillswap.png";
import project2 from "../assets/image_classifier_theme.png";
import project3 from "../assets/spaceship_travel-system.png";
import project4 from "../assets/coral-e-commercs.jpg";
import project5 from "../assets/advisory-system.jpg"; 

export const HERO_CONTENT = `I'm Omar Ismail, a dedicated Backend Engineer with a strong foundation in developing robust and efficient web applications. As a recent Computer Science graduate (2025), I've honed my skills in backend technologies, including Node.js, Express.js, MySQL, and MongoDB, through hands-on projects and internships.

I am passionate about creating seamless integrations between front-end and back-end technologies. My goal is to contribute to impactful projects where I can leverage my technical expertise to build scalable software solutions that solve real-world problems and enhance user experiences.`;

export const ABOUT_TEXT = `I'm a recent Computer Science graduate recognized for proficiency in diverse programming languages and database management technologies. My journey includes valuable experience gained through internships at Paltel and TAP Careers, and intensive bootcamps at Zakey.tech and Google/Udacity.

Adept at analytical thinking and creative problem-solving, I thrive in collaborative team environments and pride myself on being a quick learner. One of my significant achievements is the development of an e-commerce system and a skill-exchange platform, demonstrating my expertise in backend technologies and database management. Eager to contribute these skills and continue my growth, I am seeking a challenging backend developer role.`;

export const EXPERIENCES = [
  {
    year: "08/2025 - 12/2025",
    role: "Full-Stack Development Bootcamp",
    company: "Zakey.tech (Amana Bootcamp)",
    description: `Built secure backend systems using Next.js, MongoDB, and NextAuth.js authentication. Designed RESTful APIs and integrated them with Next.js frontend features. Capstone project: SkillSwap, a complete skill-exchange platform built with a time-credit system.`,
    technologies: ["Next.js", "MongoDB", "NextAuth.js", "RestAPI"],
  },
  {
    year: "08/2025 - 11/2025",
    role: "AI Programming with Python & TensorFlow Nanodegree",
    company: "Google/Udacity/SPARK",
    description: `Trained deep learning models using TensorFlow, NumPy, and Pandas. Capstone: Image Classifier, a CLI-based classifier for the Oxford 102 Flowers dataset. Applied neural networks, preprocessing, and classification techniques to real datasets.`,
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas"],
  },
  {
    year: "09/2023 - 12/2023",
    role: "Backend Development Trainee",
    company: "TAP Careers",
    description: `Developed backend components for a career-matching platform using Node.js, Express.js, TypeScript, and MySQL. Implemented secure authentication and role-based access control. Built an e-commerce backend integrated with frontend technologies.`,
    technologies: ["Node.js", "Express.js", "TypeScript", "MySQL"],
  },
  {
    year: "09/2022 - 12/2022",
    role: "Trainee",
    company: "Paltel",
    description: `Worked with ASP.NET and Spring Boot to develop internal systems. Developed C# and React-based API programs to improve workflow efficiency. Collaborated with senior engineers on debugging and deployment tasks.`,
    technologies: ["ASP.NET", "Spring Boot", "C#", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "SkillSwap",
    image: project1,
    description:
      "A complete skill-exchange platform built with a time-credit system. Designed backend architecture with secure NextAuth.js + JWT authentication. Built dashboards for offers, bookings, balances, and reviews. Deployed on Vercel with CI/CD.",
    technologies: ["Next.js", "MongoDB", "NextAuth.js", "TailwindCSS"],
  },
  {
    title: "Image Classifier (CLI)",
    image: project2, // Will update with generated image
    description:
      "Trained a deep learning model to classify flower species using TensorFlow. Exported the trained model for use in CLI applications. Implemented preprocessing and classification techniques for high accuracy.",
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas"],
  },
  {
    title: "Spaceship Travel System",
    image: project3,
    description:
      "Developed a full-stack web application to manage a fleet of spaceships, crew members, and missions to destinations like the Moon, Mars, and Jupiter. Implemented CRUD operations, secure authentication, and responsive design.",
    technologies: ["Node.js", "Express.js", "React.js", "MySQL", "Bootstrap"],
  },
  {
    title: "COR'AL: PWA E-Commerce",
    image: project4,
    description:
      "Co-developed a Progressive Web Application for a general store. Utilized Node.js, Express.js, TypeScript, and MySQL to build a secure backend. Implemented secure authentication and role-based access control.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MySQL", "PWA"],
  },
  {
    title: "Advisory System for Student Majors",
    image: project5, // Placeholder, will update
    description:
      "Co-developed an advisory system to help students change their academic majors. Utilizes textual filtering algorithms to calculate similarity ratios between courses, facilitating smooth transitions and offering course recommendations.",
    technologies: ["Node.js", "Python", "HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Nablus, Palestine",
  phoneNo: "+970 595 334 880",
  email: "omar.ism65@gmail.com",
};
