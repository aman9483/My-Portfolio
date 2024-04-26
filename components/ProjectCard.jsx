import Image from "next/image";
import aizen from "../public/aizen.jpg";
import aizen2 from "../public/food.jpg";
import aizen3 from "../public/ai.jpg";
import aizen4 from "../public/music.jpg";
import kamui from "../public/kamui.jpg";
import pokedex from "../public/pokedex.jpg";
import portfolio from "../public/portfolio.jpg";
import crypto from "../public/crypto-hunter.jpg";
import cryptohunter from "../public/crypto-hunter.jpg";
import redeye from "../public/red-eye.jpg";
import nike from "../public/nike2.jpg";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: portfolio,
      title: "BookBytes",
      description: "Full Stack Book Store Application With Payment Intregation And Firebase Authantication, Search, Filter & Paggination Features. Admin Panel",
      link: "/work/aizen",
      target: "_self",
    },
    {
      id: 2,
      image: portfolio,
      title: "SnapShare",
      description: "Full Stack Social Media Application With Firebase Authantication, User Login System, Search, Filter & Paggination Features. Here You Can Post The Pictures",
      link: "/work/kamui",
      target: "_self",
    },
    {
      id: 3,
      image: crypto,
      title: "Aora Mobile App",
      description: "Aora Video App is a React Native application for creating, sharing, and discovering videos",
      link: "/work/aora",
      target: "_self",
    },

    {
      id: 4,
      image:  portfolio,
      title: "Flavor Haven",
      description: "Food Explorer is a user-friendly web application designed to help you discover delicious dining options around your current location. The app utilizes cutting-edge technologies like ReactJS, Material-UI, and Geolocation API to provide a seamless and visually appealing experience.",
      link: "/work/aizen",
      target: "_self",
    },

    {
      id: 5,
      image: portfolio,
      title: "SummarEase",
      description: "Simplify Your Reading With Summize, an innovative open-source article summarizer that revolutionizes the way you consume content. Summize is designed to enhance your reading experience by condensing lengthy articles into concise summaries, providing you with key insights at a glance.",
      link: "https://summar-ease-five.vercel.app/",
      target: "_blank",
    },

    {
      id: 6,
      image: portfolio,
      title: "EchoRift",
      description: "Embark on a revolutionary musical odyssey with EchoRift. This cutting-edge app is more than just a music player; it's a portal to sonic realms unexplored. Dive into handcrafted playlists, discover new genres with intelligent recommendations.",
      link: "/work/aizen",
      target: "_self",
    },
    {
      id: 7,
      image: portfolio,
      title: "FitPulse",
      description: "Empower your fitness journey with FitPulse - a professional fitness application seamlessly integrated with an API. Browse a diverse range of exercises, explore detailed exercise information, and watch instructional YouTube videos, all within the app. ",
      link: "https://evogymm.netlify.app/",
      target: "_blank",
    },
    {
      id: 8,
      image: portfolio,
      title: "GlobeInfo",
      description: "Unlock a world of information with our ReactJS-powered app, effortlessly fetching and presenting detailed country data through a seamless API integration used The Paggination For Seemless User Exprience",
      link: "https://country-atlas-syry.vercel.app/",
      target: "_blank",
    },
    {
      id: 10,
      image: portfolio,
      title: "Pokedex",
      description: "🚀Welcome to the Pokédex Web App repository! This web application serves as a digital encyclopedia for Pokémon enthusiasts, providing a user-friendly interface to explore and learn about various Pokémon.",
      link: "https://pokedex-aman9483.vercel.app/pokemon/1",
      target: "_blank",
    },
    {
      id: 11,
      image: portfolio,
      title: "RoamWheels",
      description: "RoamWheels is your go-to web app for effortless car discovery, booking, and rental. Whether you're embarking on a weekend adventure or need a reliable vehicle for daily commuting, RoamWheels simplifies the process.",
      link: "https://pranjalshikhar.github.io/nft-landing-page/",
      target: "_blank",
    },
    {
      id: 12,
      image: portfolio,
      title: "Play Mirror",
      description: "Unleash the power of video exploration with our ReactJS and Material UI-driven web app. Dive into a world of diverse categories, seamlessly updated with the latest trends through Rapid API integration. Discover, play, and redefine your video streaming experience effortlessly.",
      link: "/work/cryptohunter",
      target: "_self",
    },
    {
      id: 13,
      image: portfolio,
      title: "Red Eye",
      description: "Question based website to know your movie genre",
      link: "/work/redeye",
      target: "_self",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  ">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center project-card"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
