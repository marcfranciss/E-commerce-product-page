import "./prevButton.sass";
import iconPrev from "@images/icon-previous.svg";
import { CSSProperties, useState } from "react";

type PrevButtonProps = {
  setCurrImgIndex: (value: number) => void;
  prevIndex: number;
  arr: string[];
  buttonStyle?: CSSProperties;
};

function prevItem(prevIndex: number, arr: string[]) {
  const resultIndex = (prevIndex - 1 + arr.length) % arr.length;
  return resultIndex;
}
const PrevButton = ({
  setCurrImgIndex,
  prevIndex,
  arr,
  buttonStyle,
}: PrevButtonProps) => {
  const [buttonAnimation, setButtonAnimation] = useState<boolean>(false);
  const handlePrevButton = () => {
    setCurrImgIndex(prevItem(prevIndex, arr));
    setButtonAnimation(true);
    setTimeout(() => {
      setButtonAnimation(false);
    }, 800);
  };
  return (
    <button
      className={`preview-nav__prev${buttonAnimation ? " slideLeft" : ""}`}
      onClick={handlePrevButton}
      aria-label='Previous preview button'
      aria-disabled={buttonAnimation}
      disabled={buttonAnimation}
      style={buttonStyle}>
      <img src={iconPrev} alt='Previous button' />
    </button>
  );
};

export default PrevButton;
