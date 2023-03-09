import React from "react";
import { Link } from 'react-router-dom';
import "./quizcard.css";
import Pagination from "./Pagination";
// import "./cards.css";



const QuizCard = ({ quizData }) => {
  console.log(quizData);



  return (

    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-0 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1> */}
              {/* <div className="h-1 w-20 bg-indigo-500 rounded"></div> */}
            </div>
            {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
          </div>
          <div className="grid grid-cols-4  max-w-screen-lg mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {quizData.map((curElem, index) => {
              const { image, category, name } = curElem;
              return (
                <div key={index} className="relative">

                  <Link to={`/quizzes/${category}/${name}`}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 rounded-lg">
                      <img className="h-48 w-full object-cover" src={image} alt="content" />
                      <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 title-font mb-2 sm:text-xl md:text-2xl">{name}</h2>
                        <p className="text-gray-600 sm:text-lg">{category}</p>

                      </div>
                    </div>

                  </Link>
                </div>
              )
            })}

          </div>



        </div>
      </section>


    </>
  );
};

export default QuizCard;
