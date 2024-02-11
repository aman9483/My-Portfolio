/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Screenshot1 from "../../public/work/Screenshot1.png";
import Screenshot2 from "../../public/work/Screenshot2.png";
import Screenshot3 from "../../public/work/Screenshot3.png";
import Screenshot4 from "../../public/work/Screenshot4.png";

export default function PlayMirror() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Play Mirror - Your Personal Video Oasis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen">
        <div className="mx-auto pt-16 -pb-10 max-w-7xl">
          <div className="mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              Play Mirror - Your Personal Video Oasis
            </h1>
          </div>
          <div className="mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Immerse yourself in a world of limitless entertainment with Play Mirror, a revolutionary video streaming platform crafted with ReactJS and adorned with the sleek aesthetics of Material UI.
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300">
              <Link
                href="https://play-mirror.vercel.app/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className="group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/yourusername/play-mirror"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FaGithub className="dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white" />
                <p>Explore on GitHub</p>
              </Link>
            </div>
          </div>
          <div className="mx-auto flex flex-col">
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg`}
            >
              Play Mirror introduces a seamless and responsive video streaming experience, allowing you to effortlessly explore and play videos across various categories. The sleek design, powered by ReactJS, ensures optimal performance on different devices, providing you with an immersive viewing experience.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg`}
            >
              Key Features:
            </h4>
            <ul className="list-disc list-inside mt-4 mb-8 mx-auto text-sm md:text-lg lg:text-lg xl:text-lg">
              <li>**Explore Diverse Categories:** Dive into an extensive collection of videos spanning technology, entertainment, education, and more.</li>
              <li>**Responsive Interface:** Enjoy a seamless viewing experience with a responsive interface designed with ReactJS.</li>
              <li>**Sleek Design:** Immerse yourself in a visually appealing and intuitive design crafted with Material UI.</li>
              <li>**Trending Content:** Stay updated with the latest trends through dynamic content updates powered by Rapid API integration.</li>
              <li>**User-Friendly Navigation:** Effortlessly find and play your favorite videos with an intuitive and hassle-free interface.</li>
            </ul>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg`}
            >
              Play Mirror, enriched with a dynamic content library, continuously updates with the latest trends and popular videos, ensuring that you are always entertained with fresh and engaging content. The integration of Rapid API guarantees real-time updates, keeping you at the forefront of the digital video streaming landscape.
            </h4>
          </div>
          <Image
            loading="lazy"
            src={Screenshot1}
            alt="Play Mirror Screenshot 1"
            width="max"
            className="drop-shadow-2xl mt-10"
          />
         

<Image
            loading="lazy"
            src={Screenshot3}
            alt="Play Mirror Screenshot 2"
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={Screenshot4}
            alt="Play Mirror Screenshot 2"
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <div className="mx-auto flex flex-col">
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg`}
            >
              Technology Stack:
            </h4>
            <ul className="list-disc list-inside mt-4 mb-8 mx-auto text-sm md:text-lg lg:text-lg xl:text-lg">
              <li>**ReactJS:** The robust JavaScript library for building user interfaces, ensuring a seamless and responsive experience.</li>
              <li>**Material UI:** A modern React UI framework that enhances the visual appeal and user interaction with elegant design components.</li>
              <li>**Rapid API Integration:** Real-time data updates and dynamic content delivery, keeping the platform enriched with the latest trends and videos.</li>
            </ul>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg`}
            >
              Explore the future of video streaming with Play Mirror, where cutting-edge technology meets a user-friendly design. Elevate your digital entertainment experience and dive into a personalized oasis of videos tailored to your interests.
            </h4>
          </div>
        </div>
      </main>
    </div>
  );
}
