import { useEffect } from "react";
import "./snackbar.sass";
import CloseButton from "../CloseButton/CloseButton";

interface SnackbarProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

const Snackbar = ({ message, visible, onClose }: SnackbarProps) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);
  return (
    <div
      id='snackbar'
      className={`snackbar ${visible ? "show" : ""}`}
      aria-live={visible ? "assertive" : "off"}
      aria-atomic={visible ? "true" : "false"}>
      {message} <CloseButton ariaControls={"snackbar"} btnClick={onClose} />
    </div>
  );
};

export default Snackbar;
