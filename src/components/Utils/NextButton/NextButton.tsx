import "./nextButton.sass";
import iconNext from "@images/icon-next.svg";
import { CSSProperties, useState } from "react";

type PrevButtonProps = {
  setCurrImgIndex: (value: number) => void;
  prevIndex: number;
  arr: string[];
  buttonStyle?: CSSProperties;
};

function nextItem(prevIndex: number, arr: string[]) {
  const resultIndex = (prevIndex + 1) % arr.length;
  return resultIndex;
}
const NextButton = ({
  setCurrImgIndex,
  prevIndex,
  arr,
  buttonStyle,
}: PrevButtonProps) => {
  const [buttonAnimation, setButtonAnimation] = useState<boolean>(false);
  const handleNextButton = () => {
    setCurrImgIndex(nextItem(prevIndex, arr));
    setButtonAnimation(true);
    setTimeout(() => {
      setButtonAnimation(false);
    }, 800);
  };
  return (
    <button
      className={`preview-nav__next${buttonAnimation ? " slideRight" : ""}`}
      onClick={handleNextButton}
      aria-label='Next preview button'
      aria-disabled={buttonAnimation}
      disabled={buttonAnimation}
      style={buttonStyle}>
      <img src={iconNext} alt='Next button' />
    </button>
  );
};

export default NextButton;
