import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Quiz from "./quizApi.js";
import './new.css';

// import DropDown from './DropDown';
import DropDown from './DropDown'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import Quiz from "./quizApi.js";
import QuizCard from "./QuizCard";

import "./style.css";
// import Navbar from "./Navbar.js"
// import Dropdown from "./Dropdown.js";
const uniqueList = [
  ...new Set(
    Quiz.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const HomePage = () => {
  const [quizData, setQuizData] = useState(Quiz);
  const [categoryList, setCategoryList] = useState(uniqueList);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {

    setQuizData(Quiz.filter((curElem) => {
      return curElem.views >= 1000;
    }))

  }, [])

  //code to find the element with maximum views 
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
  console.log(idx);
  console.log("I am in home page at dropdown")
  return (

    <>
      {/* <Dropdown/>  */}




      <div className="mx-auto mt-20">


        {/* <Navbar /> */}
        {/* <Dropdown/> */}
        <section className="text-gray-600 body-font  flex justify-center items-center">
          <div className="container mx-auto flex px-5 py-24 md:flex-row-reverse flex-col items-center">
            <div><DropDown /></div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
              <div className="container px-5 py-0  mx-auto mt-24 " >

<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mx-auto ">Popular Quizzes</h1>
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

              {/* <Dropdown/>  */}
            </div>
            
{/* <DropDown/> */}
  
          </div>
        </section>
        <div className="flex justify-center items-center">
          <div className="container px-5 py-6 mx-auto" >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mx-auto  ">Popular Quizzes</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
            <Carousel responsive={responsive} infinite={false}
              focusOnSelect={true}

              itemClass="carousel-item-padding-40-px mx-auto" >
              {quizData.map((curElem, index) => {
                const { image, category, name } = curElem;
                return (
                  <div key={index} >

                    <Link to={`/quizzes/${category}/${name}`}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 rounded-lg">
                        <img className="h-48 w-full object-cover" src={image} alt="content" />
                        <div className="p-6">
                          <h2 className="text-lg font-medium text-gray-900 title-font mb-2">{name}</h2>
                          <p className="text-gray-600">{category}</p>
                        </div>
                      </div>

                    </Link>
                  </div>
                )
              })}

            </Carousel>;
            {/* <Carousel cards={quizData} /> */}
          </div>
        </div>

      </div>
    </>
  )

}

export default HomePage
