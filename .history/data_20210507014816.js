import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services = [
  {
    id: 1,
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I strive to create interesting and attractive front-end assets following a component-based approach.  ",
  },
  {
    id: 2,
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    id: 3,
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using   <b>Node API</b> ",
  },
  {
    id: 4,
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    id: 5,
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    id: 6,
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "I'm passionate about creating interesting web assets with a strong emphasis on clean code.",
  },
];

export const languages = [
  {
    Icon: BsCircleFill,
    name: "Node",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "73",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Next Js",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind css",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Graphql",
    level: "50",
  },
];

export const tools = [
  {
    Icon: BsCircleFill,
    name: "Mongo Db",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Mern Stack",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Jam Stack",
    level: "60",
  },
];

export const projects = [
  {
    id: 1,
    name: "Concerts Creator",
    image_path: "/images/Djevents.JPG",
    deployed_url: "https://concerts-creator-frontend-nextjs.vercel.app/",
    github_url: "https://github.com/ShamroOoz/Concerts-Creator-Frontend-Nextjs",
    category: ["strapi", , "next"],
    description:
      "App for creating hottest party events and share with the people tp join the part... ",
    key_techs: ["React", "Context API", "Next js"],
  },
  {
    id: 2,
    name: "Resort Booking",
    image_path: "/images/resort.JPG",
    deployed_url: "https://beach-resort-react-contenful.netlify.app/",
    github_url:
      "https://github.com/ShamroOoz/Resort-Application-react-contentful",
    category: ["react", "mongo", "node"],
    description:
      "An web app for booking your favourite Resort according to your choice",
    key_techs: ["Contentful CMS", "Context Api", "styled-components"],
  },

  {
    id: 4,
    name: " Social Blogging App",
    image_path: "/images/nxtblog.JPG",
    deployed_url: "https://next-firebase-blog-applicarion.vercel.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["next"],
    description:
      "Social Blogging Platform inspired by sites like 🌈 DEV.to and Medium. Authors can create content under their custom username, then publish publicly with SEO-friendly rendering, while readers can heart or like posts in realtime ",
    key_techs: [
      "React",
      "Firebase",
      "Firebase Auth",
      "React-hot-toast",
      "React-hook-form",
    ],
  },
  {
    id: 6,
    name: "My Mems",
    description:
      "This is for like social app where you can share your memories or recent activities with your love once",
    image_path: "/images/mems.PNG",
    deployed_url: "https://mymemsreactapp.netlify.app/singup",
    github_url:
      "https://github.com/ShamroOoz/Event-Management-Mern-Application",
    category: ["react", "mongo", "node"],
    key_techs: ["React Redux", "Formik", "Tailwind css"],
  },
];
