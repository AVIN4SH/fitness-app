import React from "react";
import TargetImage from "../assets/icons/target.png";

function BodyPartCard({ item, setBodyPart, bodyPart }) {
  return (
    <div
      type="button"
      className={
        "hover:cursor-pointer hover:scale-105 transition-transform m-2 p-2  " +
        (bodyPart === item ? "border-y-2  rounded" : "")
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="stats">
        <div className="stat place-items-center">
          <div className="stat-title">{item}</div>

          <button className="bg-[#fff2db] rounded-full p-3">
            <img src={TargetImage} alt={bodyPart} className="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodyPartCard;
