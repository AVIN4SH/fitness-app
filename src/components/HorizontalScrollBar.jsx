import React from "react";

function HorizontalScrollBar({ bodyParts }) {
  return (
    // ! from 1:00:00

    <div>
      <div className="my-4 p-4">
        <div className="stats ">
          <div className="stat place-items-center">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScrollBar;
