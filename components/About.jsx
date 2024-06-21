import { motion } from "framer-motion";
import Image from "next/image";
import indiaFlag from "../public/india.png";
import profileImage from "../public/mypic.jpg";
import Rocket from "../public/Rocket.svg";
import Sparkles from "../public/Sparkles.svg";
import Flash from "../public/Flash.svg";
import Developer from "../public/Developer.svg";
import Whale from "../public/Whale.svg";
import Education from "../pages/education";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white"
    >
      <h1 className="mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        About
      </h1>
      <div className="mb-8">
        <Image
          src={profileImage}
          alt="Profile Image"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <h2 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-200 from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold ">
          Aman Verma
          <span className="inline-flex items-baseline">
            <Image
              src={Whale}
              alt="rocket"
              className="self-center w-8 h-8 mx-1"
            />
          </span>{" "}
        </h2>

        <p className="text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg">
          Developer{" "}
          <span className="inline-flex items-baseline">
            <Image
              src={Developer}
              alt="rocket"
              className="self-center w-6 h-6 mx-1"
            />
          </span>{" "}
          &#47;&#47; Full Stack Web & Mobile App Dev{" "}
          <span className="inline-flex items-baseline">
            <Image
              src={Rocket}
              alt="rocket"
              className="self-center w-6 h-6 mx-1"
            />
          </span>{" "}
        </p>

        <div className="text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900">
          <p className="mt-6 mb-12 leading-10 font-normal">
            A Full Stack Web and Mobile App Developer crafting modern, reactive,
            and user-friendly applications with the latest technologies.{" "}
            <span className="inline-flex items-baseline">
              <Image
                src={Rocket}
                alt="rocket"
                className="self-center w-8 h-8 mx-1"
              />
            </span>{" "}
            I believe in achieving a perfect blend of UI architecture, where
            goals and needs are elegantly, efficiently, and robustly designed.{" "}
            <span className="inline-flex items-baseline">
              <Image
                src={Sparkles}
                alt="rocket"
                className="self-center w-8 h-8 mx-1"
              />
            </span>{" "}
            Experienced in ReactJS, React Native, NextJS, and state management
            like Redux, with proficiency in web technologies such as HTML5,
            CSS3, JavaScript, Node.js, Express.js, MongoDB. Skilled in building
            large-scale web applications, ensuring compatibility across various
            browsers and adhering to design constraints on the web. Also adept
            at creating responsive user interfaces.{" "}
            <span className="inline-flex items-baseline">
              <Image
                src={Flash}
                alt="rocket"
                className="self-center w-8 h-8 mx-1"
              />
            </span>{" "}
          </p>

          <p className="">
            While I may not be a widely recognized figure, I am readily
            available for connection on my social media platforms. <br />
            You can contact me on the{" "}
            <span className="text-red-700 font-bold">GMail</span>{" "}
            <a
              onClick={() =>
                navigator.clipboard.writeText(
                  "amankumarverma251@gmail.com"
                )
              }
              className="underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
              href="mailto:amankumarverma251@gmail.com"
            >
              {" "}
              amankumarverma251@gmail.com
            </a>{" "}
            or <span className="text-blue-700 font-bold">LinkedIn</span>{" "}
            <a
              href="https://www.linkedin.com/in/aman-verma-3014a9226/"
              className="underline underline-offset-4 decoration-2 decoration-purple-400 font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
              rel="noopener noreferrer"
              target="blank"
            >
              {" "}
              Aman Verma{" "}
            </a>{" "}
          </p>

          <div className="flex items-center justify-end mt-2">
            <span className="mr-1">Patna, India</span>
            <Image
              src={indiaFlag}
              alt="Indian Flag"
              width={30}
              height={20}
              className="ml-1"
            />
          </div>
        </div>
      </div>

      <Education/>
    </motion.section>
  );
};

export default AboutMe;
