import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1) {
      onPageChange(totalPages);
    } else if (pageNumber > totalPages) {
      onPageChange(1);
    } else {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center gap-2 rounded-full p-2 "
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaArrowLeft className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-2">
        {currentPage > 2 && (
          <>
            <button
              className="rounded-full p-2 "
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            {currentPage > 3 && <span>...</span>}
          </>
        )}
        {currentPage > 1 && (
          <button
            className="rounded-full p-2"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {currentPage - 1}
          </button>
        )}
        <button className="rounded-full p-2 bg-gray-800 text-white">
          {currentPage}
        </button>
        {currentPage < totalPages && (
          <button
            className="rounded-full p-2"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <>
            {currentPage < totalPages - 2 && <span>...</span>}
            <button
              className="rounded-full p-2"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>
      <button
        className="flex items-center gap-2 rounded-full p-2"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Pagination;
