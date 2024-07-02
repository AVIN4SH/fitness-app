import React, { useState } from "react";
import Hero from "./Hero";
import SearchExcercise from "./SearchExcercise";
import Exercise from "./Excercise";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <div>
      <Hero />
      <SearchExcercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
}

export default Home;
