import "./previewDialog.sass";
import Preview from "@components/MainContent/ItemGallery/Preview/Preview";
import { useAppContext } from "@components/context/AppContext";
import CloseButton from "../../Utils/CloseButton/CloseButton";
const PreviewDialog = () => {
  const { isPreviewDialogOpen, setIsPreviewDialogOpen } = useAppContext();
  return (
    <>
      {isPreviewDialogOpen && (
        <dialog
          role='dialog'
          open={isPreviewDialogOpen}
          id='preview-dialog'
          className='preview-dialog'
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsPreviewDialogOpen(false);
            }
          }}
          aria-live={isPreviewDialogOpen ? "assertive" : "off"}
          aria-atomic={isPreviewDialogOpen}
          aria-modal='true'>
          <div className='preview-dialog-container'>
            <CloseButton
              btnClick={() => setIsPreviewDialogOpen(false)}
              ariaControls='preview-dialog'
              iconColor='hsl(0, 0%, 100%)'
              btnStyle={{
                alignSelf: "flex-end",
                marginBottom: "2rem",
                width: "20px",
                height: "20px",
              }}
            />
            <Preview />
          </div>
        </dialog>
      )}
    </>
  );
};

export default PreviewDialog;
