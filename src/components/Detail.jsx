import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  const scrollToVideos = (event) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    document.getElementById("videos").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero bg-base-200 min-h-[85vh]  py-8">
      <div className="hero-content flex-col lg:gap-20 lg:flex-row">
        <img
          src={gifUrl}
          className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1
            className="text-5xl mt-5 font-semibold"
            style={{ textTransform: "capitalize" }}
          >
            {name}
          </h1>
          <p className="py-3 text-lg">
            Exercises keep you strong and healthy.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> is one
            of the best exercises to target your {target}. It will hep you
            improve your mood & gain energy.
          </p>
          {extraDetail.map((item) => (
            <p
              key={item.name}
              className="flex  md:flex-row gap-5 m-3 lg:m-4 items-center"
            >
              <button className="bg-[#fff2db] rounded-full p-3">
                <img src={item.icon} alt={bodyPart} className="" />
              </button>
              <span className="text-xl" style={{ textTransform: "capitalize" }}>
                {item.name}
              </span>
            </p>
          ))}
          <div className="flex  md:flex-row gap-5 lg:m-4 items-center md:justify-start justify-center ">
            <a
              href="#videos"
              onClick={scrollToVideos}
              className="text-white bg-red-500 rounded hover:scale-105 transition-transform p-3 my-3"
            >
              Videos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
