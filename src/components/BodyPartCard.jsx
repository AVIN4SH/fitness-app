import React from "react";

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
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>
      </div>
    </div>
  );
}

export default BodyPartCard;
