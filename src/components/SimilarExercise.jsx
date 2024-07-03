import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

export default function SimilarExercise({
  targetMuscleExercises,
  equipmentExercises,
}) {
  return (
    <div className="hero bg-base-200 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col">
          <h1 className="text-3xl text-center font-semibold tracking-wide">
            Exercises that target the same Muscle group
          </h1>
          <div className="hero-content flex-col m-2 lg:gap-20 lg:flex-row">
            {targetMuscleExercises.length ? (
              <HorizontalScrollBar data={targetMuscleExercises} />
            ) : (
              <Loader />
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl text-center font-semibold tracking-wide">
            Exercises that use the same Equipment
          </h1>
          <div className="hero-content flex-col m-2 lg:gap-20 lg:flex-row">
            {equipmentExercises.length ? (
              <HorizontalScrollBar data={equipmentExercises} />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
