/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import b1 from "../../../public/work/ml projects/b2.png"
import b2 from "../../../public/work/ml projects/b3.png"
import b3 from "../../../public/work/ml projects/b4.png"
import b4 from "../../../public/work/ml projects/b5.png"


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
              Book Recommendation System
            </h1>
          </div>
          <div className="mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Book Recommendation System Machine Learning 
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300">
              <Link
                href="https://book-recommandation-system-cvin.onrender.com/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className="group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/aman9483/Book-Recommandation-System/tree/main"
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
              🚀 Book Recommendation System Description
              <br />
              Objective: The goal of a book recommendation system is to suggest books to users based on their preferences or similarities to books they have already liked. This is achieved by analyzing patterns in user behavior and book attributes.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              **Pandas**: Pandas is used for data manipulation and analysis. It helps in loading and manipulating book data, handling missing values, and filtering data based on criteria.
              <br />
              **Requests**: Requests library is used to interact with web APIs. It can fetch book covers and other relevant metadata from external sources.
              <br />
              **Scikit-learn**: Scikit-learn provides machine learning algorithms and tools for data mining and data analysis tasks. It can be used for various tasks in recommendation systems, such as computing similarities between books, clustering books, or building collaborative filtering models.
              <br />
              **Workflow of the Book Recommendation System**:
              <br />
              **Data Loading and Preparation**:
              <br />
              - Book data is loaded from a dataset (e.g., CSV file) into a Pandas DataFrame.
              <br />
              **Feature Engineering**:
              <br />
              - Features such as book genres, author, and user ratings can be extracted or engineered.
              <br />
              **Similarity Computation**:
              <br />
              - Using Scikit-learn, similarity metrics like cosine similarity are computed between books. This helps identify books that are most similar to a given book based on chosen features.
              <br />
              **Web API Interaction**:
              <br />
              - Based on user input (selected book), the system retrieves similar books using precomputed similarities or other algorithms. Recommended books are then displayed along with their covers and other relevant information using a user interface.
              <br />
              **User Interaction**:
              <br />
              - Users can interact with the system by selecting books, viewing recommendations, and exploring details about recommended books.
              <br />
              **Example Use Case**: Imagine a user selects the book "1984" by George Orwell from a dropdown menu in a web application. The system:
              <br />
              - Retrieves similar books based on the selected book's attributes.
              <br />
              - Displays the recommended books along with their covers, authors, and a brief description.
            </h4>
          </div>
          <Image
            loading="lazy"
            src={b1}
            alt="Book Recommendation Example"
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={b2}
            alt="Book Recommendation Example"
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={b3}
            alt="Book Recommendation Example"
            width="max"
            className="drop-shadow-2xl mt-10"
          />
          <Image
            loading="lazy"
            src={b4}
            alt="Book Recommendation Example"
            width="max"
            className="drop-shadow-2xl mt-10"
          />
        </div>
      </main>
    </div>
  );
}
