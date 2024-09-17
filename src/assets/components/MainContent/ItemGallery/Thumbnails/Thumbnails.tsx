import "./thumbnails.sass";
import product1 from "../../../../images/image-product-1-thumbnail.jpg";
import product2 from "../../../../images/image-product-2-thumbnail.jpg";
import product3 from "../../../../images/image-product-3-thumbnail.jpg";
import product4 from "../../../../images/image-product-4-thumbnail.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ThumbnailsProps {
  setPreviewImg: (value: number) => void;
  currentImgIndex: number;
}
const thumbnailsArr = [product1, product2, product3, product4];
const Thumbnails = ({ setPreviewImg, currentImgIndex }: ThumbnailsProps) => {
  const handleThumbnailButton = (indexNum: number) => {
    setPreviewImg(indexNum);
  };
  return (
    <div className='thumbnail-content'>
      {thumbnailsArr.map((thumbnail, index) => {
        return (
          <button
            className={`preview-img__controler${
              currentImgIndex === index ? " active-index" : ""
            }`}
            key={index}
            onClick={() => handleThumbnailButton(index)}
            aria-controls='preview-image'
            aria-label={`Product ${index + 1} thumbnail`}
            aria-disabled={currentImgIndex === index}
            disabled={currentImgIndex === index}>
            <LazyLoadImage
              src={thumbnail}
              alt={`Preview of Product ${index + 1}`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Thumbnails;
