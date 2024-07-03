import React from "react";
import Loader from "./Loader";

function ExerciseVideos({ exerciseVideos, name }) {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <div className="hero bg-base-200 py-8 md:pt-12" id="videos">
      <div className="hero-content flex-col lg:gap-10">
        <h2 className="text-4xl font-semibold">
          Watch{" "}
          <span
            style={{ textTransform: "capitalize" }}
            className="text-red-500"
          >
            {name}
          </span>{" "}
          Videos
        </h2>
        <div className="flex flex-col lg:gap-10 lg:flex-row flex-wrap">
          {exerciseVideos?.slice(0, 6).map(
            (
              item,
              index //increase/decrease the 2nd number in() to change number of videos
            ) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="text-center"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  className="w-full sm:w-[60vw] md:w-[60vw] lg:w-[25vw] rounded-xl"
                />
                <h4 className="text-md mb-1  text-center max-w-full sm:max-w-[49vw] md:max-w-[39vw] lg:max-w-[24vw]">
                  {item.video.title}
                </h4>
                <h6 className="text-sm mb-4 lg:mb-0  text-center max-w-full sm:max-w-[49vw] md:max-w-[39vw] lg:max-w-[24vw]">
                  By :{" "}
                  <span className="text-red-500">{item.video.channelName}</span>
                </h6>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ExerciseVideos;
