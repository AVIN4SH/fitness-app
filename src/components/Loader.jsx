import React from "react";
import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="min-h-[80vh] w-full flex justify-center items-center">
      <Circles height={"120"} width={"120"} color="#ff0000" visible={true} />
    </div>
  );
}

export default Loader;
