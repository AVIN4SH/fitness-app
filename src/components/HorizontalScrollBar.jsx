import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BodyPartCard from "./BodyPartCard";
import ExerciseCard from "./ExerciseCard";

function HorizontalScrollBar({ data, bodyPart, setBodyPart, isBodyPart }) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center my-8">
      <button onClick={scrollLeft} className="p-2">
        <FaArrowLeft className="mx-1" size={24} />
      </button>
      <div
        className="flex overflow-x-auto scrollbar-hide space-x-4"
        ref={scrollContainerRef}
      >
        {data.map((item) => (
          <div
            key={item}
            id={item}
            title={item}
            className="flex-shrink-0 w-full sm:w-auto"
          >
            {isBodyPart ? (
              <BodyPartCard
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="p-2">
        <FaArrowRight className="mx-1" size={24} />
      </button>
    </div>
  );
}

export default HorizontalScrollBar;
