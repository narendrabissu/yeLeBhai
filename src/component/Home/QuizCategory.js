import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Quiz from "./quizApi.js";
import QuizCard from "./QuizCard";
import Pagination from "./Pagination";
import AllQuiz from "./AllQuiz"
import "./style.css";
import DropDown from "./DropDown.js";



const QuizCategory = () => {
  const [quizData, setQuizData] = useState(Quiz);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  let { category } = useParams();

  useEffect(() => {
    if (category === "All") {
      setQuizData(Quiz);
    } else {
      setQuizData(Quiz.filter((curElem) => {
        return curElem.category === category;
      }))
    }
  }, [category])

  function getMaxViewsId(quizData, prop) {
    var max;
    for (var i = 0; i < quizData.length; i++) {
      if (max == null || parseInt(quizData[i][prop]) > parseInt(quizData[max][prop]))
        max = i;
    }
    return max;
  }

  var idx;
  idx = getMaxViewsId(quizData, "views");

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentCards = quizData.slice(firstPostIndex, lastPostIndex);

  return (
    <>

      <div className="flex justify-center items-center">
        <section className="flex text-gray-600 body-font">



          <div className="container mx-auto my-0 flex px-5 py-0 md:flex-row flex-col items-center">

            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <div className="container px-5 py-0  mx-auto mt-24 " >

                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mx-auto   ">{category} Quizzes</h1>
              </div>
              <Link to={`/quizzes/${quizData[idx].category}/${quizData[idx].name}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 rounded-lg">
                  <img className="h-48 w-full object-cover" src={quizData[idx].image} alt="content" />
                  <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 title-font mb-2">{quizData[idx].name}</h2>
                    <p className="text-gray-600">{quizData[idx].category}</p>
                  </div>
                </div>

              </Link>
            </div>
            <DropDown />
          </div>

        </section>
      </div>
      <div className="container px-5 py-6 mx-auto " >
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mx-auto ">  {category} Quizzes</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        {
          console.log("I am in QuizCategory", { category })
        }
        <QuizCard quizData={currentCards} />
        <Pagination
          totalPosts={quizData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <h2>there is something to show <br></br></h2>

      </div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">Copyright © 2022 Your Company</p>
          <div className="flex items-center">
            <a href="/#" className="text-white mr-4">Terms</a>
            <a href="/#" className="text-white">Privacy</a>
          </div>
        </div>
      </footer>



    </>
  )
}

export default QuizCategory;




