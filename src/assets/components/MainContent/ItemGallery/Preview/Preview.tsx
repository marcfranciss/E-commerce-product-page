import "./preview.sass";
import product1 from "../../../../images/image-product-1.jpg";
import product2 from "../../../../images/image-product-2.jpg";
import product3 from "../../../../images/image-product-3.jpg";
import product4 from "../../../../images/image-product-4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import PrevButton from "../../../Utils/PrevButton/PrevButton";
import NextButton from "../../../Utils/NextButton/NextButton";
import Thumbnails from "../Thumbnails/Thumbnails";

const previewArr = [product1, product2, product3, product4];

const Preview = () => {
  const [currImgIndex, setCurrImgIndex] = useState<number>(0);

  return (
    <div className='preview-content'>
      <PrevButton
        setCurrImgIndex={setCurrImgIndex}
        prevIndex={currImgIndex}
        arr={previewArr}
        buttonStyle={{
          top: "50%",
          transform: "translateY(-50%)",
          left: "1rem",
        }}
      />
      <div id='preview-image' className='preview-content__img'>
        {/* <LazyLoadImage src={previewArr[currImgIndex]} /> */}
        {previewArr.map((product, index) => {
          return (
            <LazyLoadImage
              src={product}
              key={index}
              alt={`Preview of Product ${index + 1}`}
              className={currImgIndex === index ? "block imageShow" : "hidden"}
            />
          );
        })}
      </div>
      <NextButton
        setCurrImgIndex={setCurrImgIndex}
        prevIndex={currImgIndex}
        arr={previewArr}
        buttonStyle={{
          top: "50%",
          transform: "translateY(-50%)",
          right: "1rem",
        }}
      />
      <Thumbnails
        setPreviewImg={setCurrImgIndex}
        currentImgIndex={currImgIndex}
      />
    </div>
  );
};

export default Preview;
