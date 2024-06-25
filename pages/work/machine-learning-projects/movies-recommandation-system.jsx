/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import ml1 from "../../../public/work/ml projects/ml-1.png"
import ml2 from "../../../public/work/ml projects/ml-2.png"
import ml3 from "../../../public/work/ml projects/ml-3.png"
import ml4 from "../../../public/work/ml projects/ml-4.png"


export default function Aman() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Aman ✦ work</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="max-w-screen">
        <div className="mx-auto pt-16 -pb-10 max-w-7xl">
          <div className="mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              Movies Recommandation System
            </h1>
          </div>
          <div className="mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Movies Recommandation System Machine Learning 
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300">
              <Link
                href="https://movies-recommendation-machine-learning-model.streamlit.app/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className="group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/aman9483/Movies-Recommendation-System"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
              >
                <FaGithub className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                <p>Code</p>
              </Link>
            </div>
          </div>
          <div className="mx-auto flex flex-col ">
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              🚀Movie Recommendation System Description Objective: The goal of a movie recommendation system is to suggest movies to users based on their preferences or similarities to movies they have already liked. This is achieved by analyzing patterns in user be
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              Pandas: Pandas is used for data manipulation and analysis. It helps in loading and manipulating movie data, handling missing values, and filtering data based on criteria.

Requests: Requests library is used to interact with web APIs. In this case, it can be used to fetch movie posters and other relevant metadata from external sources like The Movie Database (TMDB).

Scikit-learn: Scikit-learn provides machine learning algorithms and tools for data mining and data analysis tasks. It can be used for various tasks in recommendation systems, such as computing similarities between movies (using techniques like cosine similarity), clustering movies, or building collaborative filtering models.

Workflow of the Movie Recommendation System: Data Loading and Preparation:

Movie data is loaded from a dataset (e.g., CSV file) into a Pandas DataFrame. This data typically includes movie titles, genres, ratings, and possibly user interactions (ratings or views). Feature Engineering:

Depending on the recommendation approach, features such as movie genres, directors, actors, or user ratings can be extracted or engineered. Similarity Computation:

Using Scikit-learn, similarity metrics like cosine similarity are computed between movies. This helps identify movies that are most similar to a given movie based on chosen features. Web API Interaction:

Requests library is used to fetch additional movie metadata, such as posters, synopsis, or reviews, from external APIs like TMDB. Recommendation Generation:

Based on user input (selected movie), the system retrieves similar movies using precomputed similarities or other algorithms. Recommended movies are then displayed along with their posters and other relevant information using a user interface (e.g., a web application built with Streamlit or Flask). User Interaction:

Users can interact with the system by selecting movies, viewing recommendations, and exploring details about recommended movies. Example Use Case: Imagine a user selects the movie "Inception" from a dropdown menu in a web application. The system:

Fetches the movie's metadata (including its TMDB ID). Computes similarities between "Inception" and other movies using Scikit-learn. Retrieves the top 5 most similar movies. Displays these recommendations with their posters and titles in a user-friendly interface using Streamlit or another frontend framework. Conclusion: A movie recommendation system leverages Python and various libraries to provide personalized movie suggestions based on similarities or other criteria. By combining data handling with Pandas, API interactions with Requests, and machine learning techniques from Scikit-learn, developers can create effective and engaging recommendation systems tailored to user preferences.
            </h4>
          </div>
          <Image
            loading="lazy"
            src={ml1}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={ml2}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={ml3}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />

<Image
            loading="lazy"
            src={ml4}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
        </div>
      </main>
    </div>
  );
}
