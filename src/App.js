import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AllQuiz from "./component/Home/AllQuiz";
import QuizCard from "./component/Home/QuizCard";
import QuizCategory from "./component/Home/QuizCategory";
import HomePage from "./component/Home/HomePage";
import StartQuiz from "./component/Home/StartQuiz";
import DropDown from "./component/Home/DropDown";
import Navbar from "./component/Home/Navbar";
// import Dropdown from "./component/Home/Dropdown";
// import Navbar from "./component/Home/Navbar";


const App = () => {
  return (<>
    {/* <AllQuiz/> */}
    
    {/* <Dropdown/> */}
    <Navbar/>
  <Routes>
    <Route exact path = '/' element = {<HomePage />} />
  <Route exact path="/quizzes/:category"  element = {<QuizCategory />} />
  <Route exact path="/quizzes/:category/:name"  element = {<StartQuiz />} />
  </Routes>
    
   
    </>
    
  )
};

export default App;


