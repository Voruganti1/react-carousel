import React, { useState } from "react";
import { useImages } from "./ImageInfo";
import "./DisplayImage.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function DisplayImage() {
  const [currant, setCurrant] = useState(0);
  const { imageData } = useImages();
  const length = imageData.length;
  console.log(imageData);
  const moveForward = () => {
    setCurrant(currant === length - 1 ? 0 : currant + 1);
  };
  const moveBack = () => {
    setCurrant(currant === 0 ? length - 1 : currant - 1);
  };
  return (
    <>
      <AiOutlineArrowLeft className="left" onClick={moveBack} />
      <AiOutlineArrowRight className="right" onClick={moveForward} />
      <div className="display">
        {imageData &&
          imageData.map((each, index) => {
            return (
              <div>
                {index === currant && (
                  <img
                    className="image"
                    src={each.image}
                    alt="Car models"
                    key={index}
                  />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default DisplayImage;
