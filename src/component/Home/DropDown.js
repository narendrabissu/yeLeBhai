import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Quiz from './quizApi';

const uniqueList = [
    ...new Set(
        Quiz.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

const DropDown = () => {
    const [quizData, setQuizData] = useState(Quiz);
    const [categoryList, setCategoryList] = useState(uniqueList);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);


    return (
        <div className="w-72 font-medium h-80 mx-40 ">
            <div
                onClick={() => setOpen(!open)}
                className={`bg-white border-2  w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"
                    }`}
            >
                {selected
                    ? selected?.length > 25
                        ? selected?.substring(0, 25) + "..."
                        : selected
                    : "Select Category"}
                <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
            </div>
            <ul
                className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"
                    } `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-white">
                    <AiOutlineSearch size={18} className="text-gray-700" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                        placeholder="Enter category name"
                        className="placeholder:text-gray-700 p-2 outline-none"
                    />
                </div>
                {categoryList?.map((category) => (
                    <Link to={`/quizzes/${category}`}><li
                        key={category}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${category.toLowerCase() === selected?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
            ${category.toLowerCase().startsWith(inputValue)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            if (category.toLowerCase() !== selected.toLowerCase()) {
                                setSelected(category);
                                setOpen(false);
                                setInputValue("");
                            }
                        }}
                    >
                        {category}
                    </li> </Link>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;