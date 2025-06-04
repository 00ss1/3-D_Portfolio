import { backgroundIntensity, screenSize } from "three/src/nodes/TSL.js";
import privateIcon from "../assets/private.jpg";
import schoolIcon from "../assets/school.jpg";
import fitnessIcon from "../assets/fitness.jpg";
import votingImage from "../assets/voting.jpg";
import rubyImage from "../assets/ruby.jpg";
import salaryImage from "../assets/salary.jpg";
import foodImage from "../assets/food.jpg";
import people1Image from "../assets/people1.jpg";
import people2Image from "../assets/people2.jpg";
import people3Image from "../assets/people3.jpg";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // Ruby,
  Ruby,
  Python,
  Java,
  php,
  AWS,
  Sql,
} from "../assets";
import { color } from "framer-motion";
import { MdSchool } from "react-icons/md";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: creator,
  },
  // {
  //   title: "Machine Learning",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "Python",
    icon: Python,
    backgroundIntensity: 70,
    brightness: 50,
  },
  {
    name: "Ruby",
    icon: Ruby,
    backgroundIntensity: 70,
    brightness: 50,
  },
  {
    name: "Java",
    icon: Java,
  },
  // {
  //   name: "Ruby",
  //   icon: Ruby,
  // },
  {
    name: "php",
    icon: php,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Sql",
    icon: Sql,
  },
  // {
  //   name: "Ruby",
  //   icon: Ruby,
  // },
];

const experiences = [
  {
    title: "Full-Stack Web Developer(Freelance Project)",
    company_name: "Private ",
    icon: privateIcon,
    iconBg: "#383E56",
    date: "March-2025 - June-2025",
    points: [
      "Developed a complete full-stack web application using PHP, mySql, HTML/CSS and JavaScript.",
      "Implemented features like user authenication, CRUD operations, admin panel, and report generation.",
      "Optimized database queries and ensured responsive design for all devices.",
      "Prevented SQL injection by using prepared statements(MySqli/PDO)throughout the application.",
      "Deployed on shared hosting with domain and SSL integration and delivered within deadline with client satisfication",
    ],
  },
  {
    title: "Frontend Developer(Freelance Project)",
    company_name: "Private",
    icon: privateIcon,
    iconBg: "#E6DEDD",
    date: "January-2025 - March-2025 ",
    points: [
      "Created a landing page with modern UI/UX for a health-tech startup using React, Framer Motion and Tailwind CSS for smooth animations.",
      "Implemented responsive design for mobile,tablet and desktop.",
      "Boosted sign-up conversation by 30% with an interactive form flow.",
    ],
  },
  {
    title: "AI-Powered Letter Editor(Full-Stack Application)",
    company_name: "Private School",
    icon: schoolIcon,
    iconBg: "#383E56",
    date: "August 2024 - October 2024",
    points: [
      "Build a full-stack Letter Editor web app using Python Flask, React, and MongoDb.",
      "Integrated Google OAuth and Google Drive API to allow users to create,edit and save letters directly to their Google accounts.",
      "Added real-time version control, role-based access, and a suggestion system.",
      "Deployed the frontend using Netlify and backend via Render, with public access and .env.example for configuration.",
    ],
  },
  {
    title: "FitMind AI(Fitness & Wellness App)",
    company_name: "Personal",
    icon: fitnessIcon,
    iconBg: "#E6DEDD",
    date: "May2025 - Present",
    points: [
      "Building a full-stack AI-powered wellness app with personalized workouts, meal plans, mood tracking, and AI mental health coach.",
      "This application will be available on both Android and IOS.",
      //
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Outstanding developer!Built a robust site with perfect functionality.Efficient and detail oriented.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Lcme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image: people1Image,
    rating: 5,
  },
  {
    testimonial:
      "Professional work!Delivered on time, with a polished design and smooth user experience.",
    name: "Chris Brown",
    designation: "COO",
    company: "DZF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
    image: people2Image,
    rating: 5,
  },
  {
    testimonial:
      "Impressive work! Fast loading times,intuitive design, and flawless backend integration.Highly recommend.",
    name: "Lisa Wang",
    designation: "Cfo",
    company: "756 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    image: people3Image,
    rating: 4,
  },
];

const projects = [
  {
    name: "Online Voting System using php",
    description:
      "Presented a compiling case for the development of an online voting system with image integration facility for voters, integrated various Apis to enable interaction with external services,  implemebte functionality to export voting results to excel format, facilitating transparency in election.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrapp",
        color: "Red-text-gradient",
      },
      {
        name: "Sql",
        color: "pink-text-gradient",
      },
    ],
    // image:
    //   "https://th.bing.com/th/id/OIP.L-x-fhtsfOJaxVC_87N13gHaE6?rs=1&pid=ImgDetMain",
    // source_code_link: "https://google.com/",
    image: votingImage,
  },
  {
    name: "Task_Nexus",
    description:
      "Developed a full-stack task management system enabling users to create, update, and manage tasks efficiently. Integrated a RESTful API with React frontend for seamless task operations and authentication. Ensured an intuitive UI with state management and API handling for optimal performance.",
    tags: [
      {
        name: "Ruby on Rails",
        color: "red-text-gradient",
      },
      {
        name: "React(vite)",
        color: "green-text-gradient",
      },
      {
        name: "Sql",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "Red-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: rubyImage,
    //   "https://www.learnist.org/wp-content/uploads/2020/07/The-Top-10-Interview-Questions-That-Help-You-In-Hiring-A-Ruby-On-Rails-Developer-e1595059293227.jpg",
    // source_code_link: "https://google.com/",
  },
  {
    name: "GoFood",
    description:
      "Developed a full-scale application using MERN Stack, Implemented user authentication and authorization, product catalog, shopping cart functonality, password safety and integrated multiple Apis.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    //
    image: foodImage,
  },
  {
    name: "Salary Prediction System",
    description:
      "Developed a robust AI model to forecast potential salaries for job seekers and tested it with various sample .",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    // image: "https://www.samaa.tv/images/artificial-intelligence-ai.jpg",
    // source_code_link: "https://google.com/",
    // screenSize: "20px",
    image: salaryImage,
  },
];

export { services, technologies, experiences, testimonials, projects };
