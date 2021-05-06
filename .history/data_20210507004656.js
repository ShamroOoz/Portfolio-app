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
    name: "My Mems",
    description:
      "This is for like social app where you can share your memories or recent activities with your love once",
    image_path: "/images/mems.PNG",
    deployed_url: "https://mymemsreactapp.netlify.app/singup",
    github_url:
      "https://github.com/ShamroOoz/Event-Management-Mern-Application",
    category: ["react"],
    key_techs: ["React Redux", "Formik", "Tailwind css"],
  },
  {
    id: 2,
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id: 3,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    id: 4,
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 5,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id: 6,
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 7,
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 9,
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
