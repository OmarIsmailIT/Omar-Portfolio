import project1 from "../assets/advisory-system.jpg";
import project2 from "../assets/coral-e-commercs.jpg";
import project3 from "../assets/spaceship.png";


export const HERO_CONTENT = `I'm Omar Ismail, a dedicated Backend Engineer with a strong foundation in developing robust and efficient web applications. As a recent Computer Science graduate, I've honed my skills in backend technologies, including Node.js, Express.js, MySQL, and MongoDB, through hands-on projects and internships.

I am passionate about creating seamless integrations between front-end and back-end technologies, with experience in developing innovative solutions like an Advisory System for students and a dynamic e-commerce platform. My goal is to contribute to impactful projects where I can leverage my technical expertise to build scalable software solutions that solve real-world problems and enhance user experiences.`;

export const ABOUT_TEXT = `I'm a recent Computer Science graduate recognized for proficiency in 
diverse programming languages and database management technologies.
My journey includes valuable experience gained through internships at Paltel and TAP Careers.
Adept at analytical thinking and creative problem-solving, 
I thrive in collaborative team environments and pride myself on being a quick learner.
One of my significant achievements is the development of an e-commerce system, 
demonstrating my expertise in backend technologies,
database management. Eager to contribute these skills and continue my growth,
I am seeking a challenging backend developer role where my analytical mindset and 
collaborative spirit can make a significant impact.`;

export const EXPERIENCES = [
  {
    year: "09/2022 - 12/2022",
    role: "Trainee",
    company: "Paltel",
    description: `Used and reviewed key frameworks like Asp.Net and Spring Boat for internal organization usage.Learned basic skills of C# and React library and API to develop programs.`,
    technologies: ["Asp.Net", "React.js", " C#", "SpringBoot"],
  },
  {
    year: "09/2023 - 12/2023",
    role: "Backend Development Trainee",
    company: "TAP Careers",
    description: `
Honed transferable skills such as communication, teamwork, creativity, and time management.
Learned new hard skills such as SQL, MySQL, ORM, Node.js, Express.js, RESTful API and (HTML, CSS, JavaScript).
Developed an innovative e-commerce website, applying backend development skills to create a seamless and efficient online shopping experience. Ensured
integration with frontend technologies for a cohesive user interface.
`,
    technologies: ["Node.js", "Express.js", "SQL", "MySQL", "ORM", "JS", "TS"],
  },
];

export const PROJECTS = [
  {
    title: "An Advisory system to change student’s major",
     image: project1,
    description:
      "Co-developed and designed an advisory system to change students' majors, which offers an efficient solution for students to change their academic majors.The system utilizes advanced text filtering algorithms to calculate similarity ratios between courses across majors, facilitating smooth transitions and offering course recommendations",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js" , "Python"],
  },
  {
    title: "COR'AL: PWA E-Commerce Web Application",
    image: project2,
    description:
      "Co-developed a Progressive Web Application for a general store offering a wide range of products, including clothing, accessories, and makeup. Utilized Node.js, Express.js, TypeScript, JavaScript, MySQL, and Sequelize to build a secure, responsive backend with RESTful API integration. As part of personal training, re-implemented the backend with MongoDB and ODM Mongoose to explore NoSQL database management.",
    technologies: ["Node.js", "Express.js", "SQL", "MySQL", "MongoDB" , "Typescript" ,"Javascript" ,"ORM" ,"ODM"],
  },

  {
    title: "Spaceship Travel System",
    image: project3,
    description:
      "Developed a full-stack web application to manage a fleet of spaceships, crew members, and missions to destinations like the Moon, Mars, and Jupiter.Implemented CRUD operations, secure authentication, and responsive design. Built the backend with Node.js and Express.js, and the frontend using React.js with Vite. Leveraged MySQL for database management and Bootstrap for styling.",
    technologies: ["Node.js", "Express.js", "React.js", "Bootstrap" , "SQL", "MySQL","Javascript"],
  }
];

export const CONTACT = {
  address: "Nablus , Palestine",
  phoneNo: "+970 595 334 880",
  email: "omar.ism65@gmail.com",
};
