import React from "react";
import { ShimmerSimpleGallery} from "react-shimmer-effects";
const Shimmer = () => {
  return (
    <div className="mx-[5.5rem] mt-20 items-center">     
        <ShimmerSimpleGallery card imageHeight={200} caption />
    </div>
  );
};

export default Shimmer;
