import {
    SiExpress,
    SiSocketdotio,
    SiPrisma,
    SiNextdotjs,
    SiFlask,
  } from "react-icons/si";
 

  
  // Icons for Languages
  import HtmlSvg from "@/public/icons/html.svg";
  import CsssSvg from "@/public/icons/css.svg";
  import SassSvg from "@/public/icons/sass.svg";
  import JavascriptSvg from "@/public/icons/javascript.svg";
  import TypescriptSvg from "@/public/icons/typescript.svg";
  import PythonSvg from "@/public/icons/python.svg";
  
  // Icons for Libraries and Frameworks
  import ReactjsSvg from "@/public/icons/reactjs.svg";
  import SolidjsSvg from "@/public/icons/solidjs.svg";
  import ReduxSvg from "@/public/icons/redux.svg";
  import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
  import MuiSvg from "@/public/icons/mui.svg";
  import ViteSvg from "@/public/icons/vite.svg";
  
  // Icons for Backend
  import NodejsSvg from "@/public/icons/nodejs.svg";
  
  // Icons for Databases and ORMs
  import MongoDBSvg from "@/public/icons/mongodb.svg";
  import PostgressSvg from "@/public/icons/postgresql.svg";
  
  // Icons for Tools and Technologies
  import GitSvg from "@/public/icons/git.svg";
  import DockerSvg from "@/public/icons/docker.svg";
  import AwsSvg from "@/public/icons/aws.svg";
  import PostmanSvg from "@/public/icons/postman.svg";
  
  const SKILLS_DATA = [
    {
      sectionName: "Languages",
      skills: [
        {
          name: "HTML",
          icon: HtmlSvg,
        },
        {
          name: "CSS",
          icon: CsssSvg,
        },
        {
          name: "SASS",
          icon: SassSvg,
        },
        {
          name: "Javascript",
          icon: JavascriptSvg,
        },
        {
          name: "Typescript",
          icon: TypescriptSvg,
        },
        {
          name: "Python",
          icon: PythonSvg,
        },
      ],
    },
    {
      sectionName: "Libraries and Frameworks",
      skills: [
        {
          name: "Reactjs",
          icon: ReactjsSvg,
        },
        {
          name: "Nextjs",
          icon: SiNextdotjs,
        },
        {
          name: "Solidjs",
          icon: SolidjsSvg,
        },
        
        {
          name: "Redux",
          icon: ReduxSvg,
        },
        {
          name: "Tailwindcss",
          icon: TailwindcssSvg,
        },
        {
          name: "MUI",
          icon: MuiSvg,
        },
        
        
      ],
    },
    {
      sectionName: "Backend",
      skills: [
        {
          name: "Nodejs",
          icon: NodejsSvg,
        },
        {
          name: "Express",
          icon: SiExpress,
        },
        {
          name: "Socket.io",
          icon: SiSocketdotio,
        },
        {
          name: "Flask",
          icon: SiFlask,
        },
      ],
    },
    {
      sectionName: "Databases and ORMs",
      skills: [
        {
          name: "MongoDB",
          icon: MongoDBSvg,
        },
        {
          name: "Postgress",
          icon: PostgressSvg,
        },
        {
          name: "Prisma",
          icon: SiPrisma,
        },
      ],
    },
    {
      sectionName: "Tools and Technologies",
      skills: [
        {
          name: "Git",
          icon: GitSvg,
        },
        {
          name: "Docker",
          icon: DockerSvg,
        },
        {
          name: "AWS",
          icon: AwsSvg,
        },
        {
          name: "Postman",
          icon: PostmanSvg,
        },
      ],
    },
  ];
  
  export { SKILLS_DATA };
  