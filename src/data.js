import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";

export const menu = [
    {name:"About"},
    {name:"Skill"},
    {name:"Projects"},
    {name:"Contact"},
]



export const projects = [
  { 
      id: 1,
      title: 'Ashesi Study Spot Finder App',
      image: 'https://your-image-link-here.jpg', // Replace with an actual image link
      category: "Web",
      data: {
          description: `Led a team of three students in developing a web app enabling Ashesi students to locate available study spaces, addressing a common campus need.
                        Applied design thinking principles throughout the development process to ensure user-centric solutions.`,
          demoLink: "https://your-app-demo-link.com", // Replace if you have a demo link
      },
      stack: [
          {
              name: "HTML",
              icon: <YourHtmlIcon />, // Replace with the appropriate HTML icon component
              iconColor: "orange", // Customize icon color
          },
          {
              name: "CSS",
              icon: <YourCssIcon />, 
              iconColor: "blue",
          },
          {
              name: "JavaScript",
              icon: <YourJavaScriptIcon />,
              iconColor: "yellow",
          },
          // Add other relevant tech stack icons here (e.g., React, Node.js, etc.)
      ]
  },

  { 
      id: 2,
      title: 'AI Soccer Player Rating Prediction Model',
      image: 'https://your-image-link-here.jpg', // Replace with an actual image link
      category: "AI/ML", 
      data: {
          description: `Developed an AI model to predict the overall rating of soccer players using regression techniques.
                        Implemented and deployed the model using Flask, showcasing proficiency in machine learning and web deployment.`,
          demoLink: "https://your-model-demo-link.com", // Replace if you have a demo link
      },
      stack: [
          {
              name: "Python",
              icon: <YourPythonIcon />, 
              iconColor: "blue",
          },
          {
              name: "Flask",
              icon: <YourFlaskIcon />, 
              iconColor: "green",
          },
          {
              name: "Scikit-learn", // Or your ML library of choice
              icon: <YourScikitLearnIcon />, 
              iconColor: "orange",
          }, 
          // Add other relevant tech stack icons here
      ]
  },

  { 
      id: 3,
      title: 'Fake Image Generation with Variational Autoencoders (VAE)',
      image: 'https://your-image-link-here.jpg', // Replace with an actual image link
      category: "AI/ML",
      data: {
          description: `Working on generating fake images using VAE, enhancing skills in deep learning and image processing.
                        Experimenting with various architectures and tuning hyperparameters to improve image quality.`,
          demoLink: "https://your-vae-demo-link.com", // Replace if you have a demo link
      },
      stack: [
          {
              name: "Python",
              icon: <YourPythonIcon />,
              iconColor: "blue",
          },
          {
              name: "TensorFlow/Keras", // Or your deep learning framework of choice
              icon: <YourTensorFlowIcon />,
              iconColor: "orange",
          },
          // Add other relevant tech stack icons here
      ]
  },
  // Add more projects as needed following the same structure
];

  


export const experience = [
    {
        title:"UI/UX",
        data:[
            {
                skill:"Figma",
                level:"Intermidiate",
            },
            {
                skill:"XD",
                level:"Beginner",
            },
        ]
    },
    {
        title:"Frontend Development",
        data:[
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"JavaScript",
                level:"Experienced",
            },
            {
                skill:"React",
                level:"Experienced",
            },
            {
                skill:"React Native",
                level:"Beginner",
            },
        ]
    },
    {
        title:"Backend Development",
        data:[
            
                        {
                skill:"Python",
                level:"Intermediate",
            },
            {
                skill:"MySQL",
                level:"Intermediate",
            },
            {
              skill: "Java",
              level:"Beginner",
            },
            {
              skill:"Node JS",
              level:"Intermediate",
          },
          {
              skill:"MongoDB",
              level:"Intermediate",
          },


        ]

        
    },

    {title:"Machine Learning",
        data:[
          {skill:"Supervised & Unsupervised Learning",
              level:"Intermediate"},
          {skill:"Deep Learning",
              level:"Intermediate"},
        ]
      
      }
]


export const socialHandles = [
  
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/edemana/",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://www.linkedin.com/in/edem-anagbah/",
  },
  {
    name:"Youtube",
    icon:<AiFillYoutube/>,
    link:"http://www.youtube.com/@wildlife----wonders",
  },
  {
    name:"Fiverr",
    icon:<SiFiverr/>,
    link:"",
  },
];