import React, { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

function SearchExcercise({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  const URL = "https://exercisedb.p.rapidapi.com";
  const EXERCISEPATH = "/exercises?limit=1000";
  const BODYPARTPATH = "/exercises/bodyPartList";

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        URL + BODYPARTPATH,
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(URL + EXERCISEPATH, exerciseOptions);
      const searchedExercises = exerciseData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );
      });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="container mx-auto text-center p-8 mt-4">
      <h2 className="text-4xl font-semibold pb-8">
        Awesome Exercises you should know
      </h2>
      <div className="flex items-center justify-center gap-2 max-w-[80%] sm:max-w-[60%] md:max-w-[50%] mx-auto">
        <label className="input input-bordered flex items-center w-full">
          <input
            type="text"
            className="grow flex-1 p-2"
            placeholder="Search for Exercises"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())} // toLowerCase() for api call.
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 ml-2"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button onClick={handleSearch} className="btn btn-outline rounded">
          Search
        </button>
      </div>
      <div>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
}

export default SearchExcercise;
