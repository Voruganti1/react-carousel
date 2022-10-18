import React, { createContext, useContext } from "react";
export const images = createContext();
const imageData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTeeExgl-L_gUpqXS3QEexczQsOxlizWSVQ&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-eWM8Si9XLBKzZRdWDc_fxi4SXCvWu4xsg&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_JFQBDVnqi4lc0NcYpbNkwgmz9y_yvqCxg&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4y2a1G2Enm419EUdNHKuGWnn4mGY1n_t22Q&usqp=CAU",
  },
];
function ImageInfo(props) {
  return (
    <>
      <images.Provider value={{ imageData }}>{props.children}</images.Provider>
    </>
  );
}
export function useImages() {
  const context = useContext(images);

  if (!context) {
    throw new Error("There ate no images to show");
  }

  return context;
}

export default ImageInfo;
