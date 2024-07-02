import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import Pagination from "./Pagination";
import { fetchData, exerciseOptions } from "../utils/fetchData";

function Exercise({ exercises, setExercises, bodyPart }) {
  const URL = "https://exercisedb.p.rapidapi.com";
  const EXERCISEPATH = "/exercises?limit=1000";
  const BODYPARTPATH = "/exercises/bodyPartList";
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(URL + EXERCISEPATH, exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `${URL}/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div id="exercises" className="container mx-auto my-8">
      {exercises && exercises.length > 0 ? (
        <>
          <h2 className="text-3xl font-semibold text-center mb-4">
            Showing Results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-4">
            {exercises.length > exercisesPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(exercises.length / exercisesPerPage)}
                onPageChange={paginate}
              />
            )}
          </div>
        </>
      ) : (
        <div className="text-3xl font-semibold text-center mb-4">
          No Exercises Found
        </div>
      )}
    </div>
  );
}

export default Exercise;
