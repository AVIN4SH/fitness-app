import React from "react";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  return (
    <div className="max-w-xs mx-auto">
      <Link to={`/exercise/${exercise.id}`}>
        <div className="relative">
          <img
            className="object-cover bg-no-repeat rounded-md"
            src={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-center bg-opacity-75 py-2">
            <p className="text-white text-sm font-bold mb-2">
              <span className="bg-[#ffa9a9] text-[#fff] text-xs rounded-full px-4 xs:mx-0 sm:mx-1 md:mx-2 lg:mx-8 py-1 m-1">
                {exercise.bodyPart}
              </span>
              <span className="bg-[#fcc757] text-[#fff] rounded-full text-xs px-4 sm:mx-8 py-1 m-1">
                {exercise.target}
              </span>
            </p>
          </div>
        </div>
        <h3
          className="text-md font-semibold text-center rounded-full text-xs px-4 py-1 mx-1 mb-2"
          style={{ textTransform: "capitalize" }}
        >
          {exercise.name}
        </h3>
      </Link>
    </div>
  );
}

export default ExerciseCard;
