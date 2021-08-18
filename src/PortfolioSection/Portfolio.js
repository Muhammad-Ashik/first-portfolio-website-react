import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";

import ImageLink from "./ImageLink";
import { SRLWrapper } from 'simple-react-lightbox';

function Portfolio() {
  return (
    <SimpleReactLightbox>
      <div className="portfolio" id="portfolio">
        <SRLWrapper>
          <div className="container">
            <div className="row">
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225159/media/f02d1524d716b67b69eb20fba007328b.png" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225150/media/285db96a56c6644f62360dd081ca75ec.png" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225179/media/9a9ca9395d6524a20688a73aa0377a07.png" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225124/media/80e6ca1e87a46c0080178dc8dea0fd75.png" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14224941/media/43d0e8c97e160b0865445426d383da0c.png" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225100/media/ebd4d17abff2ac8f5537fc312903b565.png" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225162/media/3c837dd3bb38d21a50355b225911dbc9.png" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225262/media/5c7a0fcc898e54899d5ca0463f24c3ef.jpg" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225134/media/47c0a12acd2cbbbd405c8fef7388d9be.jpg" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14250360/media/b7f241ff95bfb152e4c1c4abca44cf39.gif" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225136/media/a3bcaeed9b0533bc946232fa5a7dfd1b.png" />
              <ImageLink src="https://cdn.dribbble.com/users/2633337/screenshots/14225130/media/4f1d6f067cce11b1184acd8b6f0fb10c.png" />
            </div>
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
}

export default Portfolio;
