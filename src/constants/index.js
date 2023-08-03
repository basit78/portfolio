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
  threejs,
  getweys,
  nexomos,
  interns,
  cosmswasm,
  techaholix,
  cryptoTracker,
  NFT,
  jb,
  precideTech,
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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Getweys",
    icon: getweys,
    iconBg: "black",
    date: "SEP 2022 - Present",
    points: [
      "Translated UI/UX mockups from designers into performant React | Native components.",
      "Integrated Rest APIs and proficiently managed React's state management.",
      "Debugged critical problems and peer-programmed with cross-functional teams.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Jamal Brothers",
    icon: jb,
    iconBg: "black",
    date: "Apr 2022 - Aug 2022",
    points: [
      "It was my 2nd JOB as a Mobile Application developer",
      "During this tenure I have worked on different projects",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Precise Teach Canada",
    icon: precideTech,
    iconBg: "black",
    date: "Jan 2022 - Mar 2022",
    points: [
      "It was my first Internship at this company",
      "I have worked on different projects",
      "I have learned a lot of things from this company",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CosmWasm",
    description:
      "CosmWasm is a smart contract platform focusing on security, performance, and interoperability. cosmWasm web is Based is Based on NextJs, Chakra UI.",
    image: cosmswasm,
    githubLink: false,
    source_code_link: "https://github.com/",
    liveLink: "https://cosmwasm.com/",
  },
  {
    name: "Techaholix",
    description:
      "Techaholix is a digital Marketing agency. which provides different services based on customer needs which includes Web development, Logo Design and SEO. Based NextJs and Tailwind CSS.",
    image: techaholix,
    githubLink: false,
    source_code_link: "https://github.com/",
    liveLink: "techaholix.netlify.app/",
  },
  {
    name: "Crypto Tracker",
    description:
      "Crypto Tracker is API based web application. which allows you to stay informed on the latest live crypto prices in real-time. Application is Based on React, MaterialUI Along with CoinGecko API.",
    image: cryptoTracker,
    githubLink: true,
    source_code_link: "https://github.com/SyedFaraz-hub/Crypto-Tracker-React",
    liveLink: "crypto-realtime-tracker.netlify.app",
  },
  {
    name: "NFT Minting UI",
    description:
      "NFT Market where user can converting digital data into crypto collections or digital assets recorded on the blockchain. Just a UI Based on ReactJs.",
    image: NFT,
    githubLink: false,
    source_code_link: "https://github.com/SyedFaraz-hub/Crypto-Tracker-React",
    liveLink: "https://nftminting-panabot.netlify.app/#memes",
  },
];

export { services, technologies, experiences, testimonials, projects };
