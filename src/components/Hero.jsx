import React from "react";
import HeroBanner from "../assets/HeroBanner.gif";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-[91vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={HeroBanner}
          className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Elevate Your Strength</h1>
          <p className="py-6">
            Unlock your full potential with our personalized workout plans and
            expert guidance. Whether you're a beginner or a seasoned athlete,
            our platform offers the tools and support you need to achieve your
            fitness goals.
          </p>
          <button className="btn btn-primary rounded">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
