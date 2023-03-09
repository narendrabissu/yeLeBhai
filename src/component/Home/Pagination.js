import React from "react";


const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
      <div className='pagination flex justify-center items-center'>
      {pages.map((page, index) => {
          return (
              <button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`mx-2 my-4 py-1 px-4 rounded-md ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                  {page}
              </button>
          );
      })}
  </div>

    );
};

export default Pagination;