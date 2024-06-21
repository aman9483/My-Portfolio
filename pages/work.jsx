import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInfoCircle, FaLink } from "react-icons/fa";
import portfolio from "../public/portfolio.jpg";
import crypto from "../public/crypto-hunter.jpg";
import book from "../public/work/book.png"
import aora from "../public/work/pro1.png"
import room from "../public/work/room.png"
import share from "../public/work/snapshare1.png"
import pokedex2 from "../public/work/pokedex2.png"
import Screenshot1 from "../public/work/Screenshot1.png"
import glob1 from "../public/work/glob1.png"
export default function Work() {
  const [selectedSection, setSelectedSection] = useState("web");

  const webProjects = [
    {
      id: 1,
      image: book,
      title: "BookBytes",
      description:
        "Full Stack Book Store Application With Payment Integration And Firebase Authentication, Search, Filter & Pagination Features. Admin Panel",
      link: "/work/aizen",
      target: "_self",
      techStack: ["MERN", "Firebase", "Stripe"],
    },
    {
      id: 2,
      image: share,
      title: "SnapShare",
      description:
        "Full Stack Social Media Application With Firebase Authentication, User Login System, Search, Filter & Pagination Features. Here You Can Post The Pictures",
      link: "/work/kamui",
      target: "_self",
      techStack: ["MERN", "Firebase"],
    },

    {
      id: 5,
      image: room,
      title: "StayEase",
      description:
        "Full Stack Hotel Room Booking Application. Search, Filter Features. User Can Login and Explore Diverse Hotels Using Location.Admin Panel",
      link: "/work/goku",
      target: "_self",
      techStack: ["MERN", "Google Maps API"],
    },
    {
      id: 6,
      image: pokedex2,
      title: "Pokedex",
      description:
        "Pokédex Web App repository! This web application serves as a digital encyclopedia for Pokémon enthusiasts,  e-learn about various Pokémon.",
      link: "/work/killua",
      target: "_self",
      techStack: ["React", "API"],
    },
    {
      id: 7,
      image: Screenshot1,
      title: "Play Mirror",
      description:
        "seamlessly updated with the latest trends through Rapid API integration. Discover, play, and redefine your video streaming experience effortlessly.",
      link: "/work/cryptohunter",
      target: "_self",
      techStack: ["MERN", "RapidAPI"],
    },
    {
      id: 11,
      image: glob1,
      title: "GlobeInfo",
      description:
        "effortlessly fetching and presenting detailed country data through a seamless API integration used The Paggination For Seemless User Exprience",
      link: "/work/itachi",
      target: "_self",
      techStack: ["React", "API"],
    },
  ];

  const mobileProjects = [
    {
      id: 1,
      image: aora,
      title: "Aora Mobile App",
      description:
        "Aora Video App is a React Native application for creating, sharing, and discovering videos",
      link: "/work/aora",
      target: "_self",
      techStack: ["React Native", "Firebase"],
    },
  ];

  const mlProjects = [
    {
      id: 1,
      image: portfolio,
      title: "ML Project 1",
      description: "Description for ML Project 1",
      link: "http://live-ml-project1.com",
      target: "_blank",
      techStack: ["Python", "TensorFlow"],
    },
    {
      id: 2,
      image: portfolio,
      title: "ML Project 2",
      description: "Description for ML Project 2",
      link: "http://live-ml-project2.com",
      target: "_blank",
      techStack: ["Python", "PyTorch"],
    },
  ];

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-2"
          />
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-white mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <a
              href={project.link}
              target={project.target}
              className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            >
              <FaInfoCircle className="mr-1" /> Details
            </a>
            <a
              href={project.link}
              target={project.target}
              className="inline-flex items-center px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
            >
              <FaLink className="mr-1" /> Live
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="pt-24 flex flex-col items-center mx-auto">
        <h2 className="selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Projects
        </h2>
        <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2">
          It has been an absolute pleasure to put my heart and soul into these
          projects. While you re here, browse these projects. 💖
        </p>
      </div>
      <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="124"
          height="14"
          fill="currentColor"
          className="fill-gray-300 rotate-180"
        >
          <path d="M0.466181 9.35938C1.28178 11.6167 3.44138 14 6.28256 14L6.40126 13.9497C7.46574 13.917 8.6719 13.5571 9.63683 12.8442C10.3414 12.3223 10.9196 11.6108 11.2144 10.6987C11.3982 10.0728 11.4556 9.4126 11.3791 8.76221C11.3025 8.11182 11.0919 7.48584 10.7664 6.92579C10.3184 6.20362 9.69044 5.62452 8.9476 5.25293C8.20475 4.88135 7.37767 4.73145 6.55825 4.81934C6.47401 4.82325 6.38977 4.84473 6.31319 4.88331C6.23661 4.92188 6.16768 4.97657 6.11025 5.04346C6.05664 5.11036 6.01069 5.18848 5.98389 5.27295C5.96091 5.35791 5.94943 5.44727 5.95708 5.53614C5.95708 5.62696 5.9724 5.71729 6.01069 5.80079C6.04515 5.88379 6.09876 5.95801 6.16385 6.01758C6.22895 6.07764 6.30553 6.12159 6.38977 6.14698C6.47401 6.17237 6.56208 6.17872 6.65015 6.16504C7.15941 6.08985 7.684 6.15137 8.16646 6.34375C8.64893 6.53614 9.07778 6.85303 9.41474 7.26465C9.7517 7.67676 9.98145 8.1709 10.0848 8.70069C10.1882 9.23047 10.1614 9.7793 10.0121 10.2964C9.49133 11.9565 7.56913 12.6104 6.40126 12.648C4.22634 12.7236 2.35392 10.8057 1.65703 8.875C1.45791 8.34717 1.33538 7.79346 1.28943 7.23243C1.25497 6.78614 1.27029 6.33497 1.33538 5.88868C1.48472 4.88086 1.88294 3.93262 2.49942 3.14014C3.64815 1.75049 5.49376 1.12159 7.68783 1.3667C10.2495 1.65625 12.0147 3.49854 12.8609 4.37891C13.0141 4.54737 13.1787 4.73926 13.351 4.94581L13.7263 5.41016C15.2503 7.30323 17.5401 10.1704 21.6065 8.32178C22.1771 8.01563 22.6557 7.55323 22.9927 6.98389C23.2645 6.53174 23.4368 6.0254 23.4981 5.5H123.51C123.659 5.5 123.789 5.4336 123.877 5.32862C123.954 5.24073 124 5.12598 124 5C124 4.72364 123.782 4.5 123.51 4.5H23.4598C23.4652 4.32959 23.4652 4.15918 23.4598 4.00488C23.4598 3.63721 23.4186 3.28076 23.351 2.9292C23.2073 2.16211 22.8888 1.4292 22.4292 0.787598C21.7974 -0.0341797 21.0243 -0.692871 20.1699 -1.13867C19.3155 -1.58496 18.3977 -1.82373 17.4653 -1.82373C15.3094 -1.82373 13.3066 -0.822266 11.7732 0.556641C10.5992 1.61865 9.59207 2.8418 8.77893 4.18213C8.65811 4.37793 8.51626 4.57715 8.36586 4.77002C7.75494 5.51904 7.09505 6.20996 6.40126 6.83838C4.65588 5.0918 2.22369 3.90918 0.468506 9.36523L0.466181 9.35938Z" />
        </svg>
        <div className="space-x-1 text-sm md:text-base lg:text-lg">
          <button
            onClick={() => setSelectedSection("web")}
            className={`p-2 ${
              selectedSection === "web" ? "text-blue-500 font-semibold" : ""
            } hover:text-blue-400`}
          >
            Web Apps
          </button>
          <button
            onClick={() => setSelectedSection("mobile")}
            className={`p-2 ${
              selectedSection === "mobile" ? "text-blue-500 font-semibold" : ""
            } hover:text-blue-400`}
          >
            Mobile Apps
          </button>
          <button
            onClick={() => setSelectedSection("ml")}
            className={`p-2 ${
              selectedSection === "ml" ? "text-blue-500 font-semibold" : ""
            } hover:text-blue-400`}
          >
            Machine Learning
          </button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="124"
          height="14"
          fill="currentColor"
          className="fill-gray-300"
        >
          <path d="M0.466181 9.35938C1.28178 11.6167 3.44138 14 6.28256 14L6.40126 13.9497C7.46574 13.917 8.6719 13.5571 9.63683 12.8442C10.3414 12.3223 10.9196 11.6108 11.2144 10.6987C11.3982 10.0728 11.4556 9.4126 11.3791 8.76221C11.3025 8.11182 11.0919 7.48584 10.7664 6.92579C10.3184 6.20362 9.69044 5.62452 8.9476 5.25293C8.20475 4.88135 7.37767 4.73145 6.55825 4.81934C6.47401 4.82325 6.38977 4.84473 6.31319 4.88331C6.23661 4.92188 6.16768 4.97657 6.11025 5.04346C6.05664 5.11036 6.01069 5.18848 5.98389 5.27295C5.96091 5.35791 5.94943 5.44727 5.95708 5.53614C5.95708 5.62696 5.9724 5.71729 6.01069 5.80079C6.04515 5.88379 6.09876 5.95801 6.16385 6.01758C6.22895 6.07764 6.30553 6.12159 6.38977 6.14698C6.47401 6.17237 6.56208 6.17872 6.65015 6.16504C7.15941 6.08985 7.684 6.15137 8.16646 6.34375C8.64893 6.53614 9.07778 6.85303 9.41474 7.26465C9.7517 7.67676 9.98145 8.1709 10.0848 8.70069C10.1882 9.23047 10.1614 9.7793 10.0121 10.2964C9.49133 11.9565 7.56913 12.6104 6.40126 12.648C4.22634 12.7236 2.35392 10.8057 1.65703 8.875C1.45791 8.34717 1.33538 7.79346 1.28943 7.23243C1.25497 6.78614 1.27029 6.33497 1.33538 5.88868C1.48472 4.88086 1.88294 3.93262 2.49942 3.14014C3.64815 1.75049 5.49376 1.12159 7.68783 1.3667C10.2495 1.65625 12.0147 3.49854 12.8609 4.37891C13.0141 4.54737 13.1787 4.73926 13.351 4.94581L13.7263 5.41016C15.2503 7.30323 17.5401 10.1704 21.6065 8.32178C22.1771 8.01563 22.6557 7.55323 22.9927 6.98389C23.2645 6.53174 23.4368 6.0254 23.4981 5.5H123.51C123.659 5.5 123.789 5.4336 123.877 5.32862C123.954 5.24073 124 5.12598 124 5C124 4.72364 123.782 4.5 123.51 4.5H23.4598C23.4652 4.32959 23.4652 4.15918 23.4598 4.00488C23.4598 3.63721 23.4186 3.28076 23.351 2.9292C23.2073 2.16211 22.8888 1.4292 22.4292 0.787598C21.7974 -0.0341797 21.0243 -0.692871 20.1699 -1.13867C19.3155 -1.58496 18.3977 -1.82373 17.4653 -1.82373C15.3094 -1.82373 13.3066 -0.822266 11.7732 0.556641C10.5992 1.61865 9.59207 2.8418 8.77893 4.18213C8.65811 4.37793 8.51626 4.57715 8.36586 4.77002C7.75494 5.51904 7.09505 6.20996 6.40126 6.83838C4.65588 5.0918 2.22369 3.90918 0.468506 9.36523L0.466181 9.35938Z" />
        </svg>
      </div>
      {selectedSection === "web" && renderProjects(webProjects)}
      {selectedSection === "mobile" && renderProjects(mobileProjects)}
      {selectedSection === "ml" && renderProjects(mlProjects)}
    </div>
  );
}
