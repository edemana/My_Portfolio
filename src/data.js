// Import necessary icons
import { DiReact, DiPython, DiGitBranch } from "react-icons/di";
import { FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { 
    SiExpress, SiMongodb, SiHtml5, SiCss3, SiJavascript, 
    SiFlask, SiMysql, SiAdobexd, SiFiverr
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { project1 } from "./images";
import { project2 } from "./images";

export const menu = [
    {name: "About"},
    {name: "Skill"},
    {name: "Projects"},
    {name: "Contact"},
];

export const projects = [
  { 
      id: 1,
      title: 'Ashesi Study Spot Finder App',
      image: project1,
      category: "Web",
      data: {
          description: `Led a team of three students in developing a web app enabling Ashesi students to locate available study spaces, addressing a common campus need.
                        Applied design thinking principles throughout the development process to ensure user-centric solutions.`,
          demoLink: "https://apps.ashesi.edu.gh/study-spot-finder/",
      },
      stack: [
        {
          name: "HTML",
          icon: <SiHtml5 />, 
          iconColor: "orange", 
        },
        {
          name: "CSS",
          icon: <SiCss3 />,
          iconColor: "blue",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          iconColor: "yellow",
        },
      ]
  },
  { 
      id: 2,
      title: 'AI Soccer Player Rating Prediction Model',
      image: project2,
      category: "AI/ML", 
      data: {
          description: `Developed an AI model to predict the overall rating of soccer players using regression techniques.
                        Implemented and deployed the model using Flask, showcasing proficiency in machine learning and web deployment.`,
          demoLink: "https://your-model-demo-link.com",
      },
      stack: [
        {
          name: "Python",
          icon: <FaPython />,
          iconColor: "blue",
        },
        {
          name: "Flask",
          icon: <SiFlask />, 
          iconColor: "green",
        },
      ]
  },
  { 
      id: 3,
      title: 'Fake Image Generation with Variational Autoencoders (VAE)',
      image: 'https://your-image-link-here.jpg',
      category: "AI/ML",
      data: {
          description: `Working on generating fake images using VAE, enhancing skills in deep learning and image processing.
                        Experimenting with various architectures and tuning hyperparameters to improve image quality.`,
          demoLink: "https://your-vae-demo-link.com",
      },
      stack: [
        {
          name: "Python",
          icon: <FaPython />,
          iconColor: "blue",
        },
      ]
  },
];

export const experience = [
  {
    title: "UI/UX",
    data: [
      { skill: "Figma", level: "Intermediate", icon: <CgFigma /> },
      { skill: "Adobe XD", level: "Beginner", icon: <SiAdobexd /> },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      { skill: "HTML", level: "Experienced", icon: <SiHtml5 /> },
      { skill: "CSS", level: "Experienced", icon: <SiCss3 /> },
      { skill: "JavaScript", level: "Experienced", icon: <SiJavascript /> },
      { skill: "React", level: "Experienced", icon: <DiReact /> },
      { skill: "React Native", level: "Beginner", icon: <TbBrandReactNative /> },
    ],
  },
  {
    title: "Backend Development",
    data: [
      { skill: "Python", level: "Intermediate", icon: <FaPython /> },
      { skill: "Node JS", level: "Intermediate", icon: <FaNodeJs /> },
      { skill: "Express JS", level: "Intermediate", icon: <SiExpress /> },
      { skill: "MongoDB", level: "Intermediate", icon: <SiMongodb /> },
      { skill: "MySQL", level: "Intermediate", icon: <SiMysql /> },
      { skill: "Java", level: "Beginner", icon: <FaJava /> },
    ],
  },
  {
    title: "Machine Learning",
    data: [
      { skill: "Supervised & Unsupervised Learning", level: "Intermediate", icon: <DiGitBranch /> },
      { skill: "Deep Learning", level: "Intermediate", icon: <DiGitBranch /> },
    ],
  },
];

export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/edemana/",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/edem-anagbah/",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "http://www.youtube.com/@wildlife----wonders",
  },
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
];