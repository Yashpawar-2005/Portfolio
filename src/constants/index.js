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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  brainly,
  image1,
  image2,
  image3,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "ML Enthusiast",
    icon: backend,
  },
  {
    title: "DSA",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
//   {
//     title: "React-developer",
//     company_name: "IEEE Hackethon",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
];

const testimonials = [
  {
    testimonial:
      "Great Website.",
    name: "Satyam",
    designation: "Student",
    company: "PICT PUNE",
    image: "",
  },

  {
    testimonial:
      "Nice Portfolio",
    name: "shree",
    designation: "Student",
    company: "PICT PUNE",
    image: "",
  },
];

const projects = [
  {
    name: "Pokedex!Find them all",
    description:
      "A sleek and interactive Pokédex website that allows users to explore, capture, and learn about their favorite Pokémon with stunning visuals and dynamic animations. Perfect for both casual fans and dedicated trainers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Yashpawar-2005/IEEE-hackethon.git",
  },
  {
    name: "Car modifier",
    description:
     "Creating emmercive experience for user for redisining there own car",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Yashpawar-2005/Car3Dwebsite",
  },
  {
    name:"Code-Share",
    description:"A web-based platform that allows users to share and collaborate on code snippets in real-time. It features chat and a user-friendly interface for seamless coding.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: image1,
    source_code_link: "https://github.com/Yashpawar-2005/realtime-code-editor",
  },
  {
    name: "Sheet - Sure",
    description:
      "A web application that allows users to create, edit, and share spreadsheets online. It offers real-time collaboration, data visualization, and seamless integration with other productivity tools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:"https://github.com/Yashpawar-2005/barclays",

  },
  {
    name: "Brainy",
    description:
      "A modern web-based AI assistant integrating Retrieval-Augmented Generation (RAG) for document-based question answering and knowledge retrieval. Built using React, TypeScript, and advanced API integrations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: brainly,
    source_code_link: "https://github.com/Yashpawar-2005/brainy",
  },
  {
    name: "Safey",
    description:
      "A mobile application designed to enhance personal  women safety and security. It features real-time location tracking, emergency alerts, and a user-friendly interface for quick access to safe paths.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ShardulNalegave/inc-techfiesta",
  },
  {
    name: "Campus Connect",
    description:
      "A web application designed to connect students and faculty members, facilitating communication, tNp, and resource sharing within the campus community. It features user profiles, and provides placement stats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: image2,
    source_code_link: "https://github.com/Yashpawar-2005/temp-pbl.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
