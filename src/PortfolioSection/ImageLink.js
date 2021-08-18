import React from "react";
import "./portfolio.css";
import { SRLWrapper } from "simple-react-lightbox";

function ImageLink({ src }) {
  const options = {
    settings: {
      slideAnimationType: "Slide",
      slideSpringValues: [100, 300],
    },
  };
  return (
    <React.Fragment>
      <div className="col-sm-4 img">
        <SRLWrapper options={options}>
          <img src={src} alt="" className="image" />
        </SRLWrapper>
      </div>
    </React.Fragment>
  );
}

export default ImageLink;
