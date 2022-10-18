import React from "react";
import { useImages } from "./ImageInfo";

function DisplayImage() {
  const { image } = useImages();
  return;
  <>
    {image &&
      image.map((each, index) => {
        return <img src={each.image} alt="Car models" />;
      })}
    ;
  </>;
}

export default DisplayImage;
