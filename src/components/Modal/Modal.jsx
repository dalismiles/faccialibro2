import Button from "../Button";
import "./index.css";

const Modal = ({
  modalTextContent,
  modalMessageRecall,
  onModalConfirm,
  setModalVisibility,
}) => {
  const onConfirmBtn = () => {
    onModalConfirm();
    setModalVisibility(false);
  };

  const onCancelBtn = () => {
    setModalVisibility(false);
  };

  return (
    <div className="Modal__overlay">
      <div className="Modal">
        <p className="Modal__messageRecall">{modalMessageRecall}</p>
        <p className="Modal__TextContent">{modalTextContent}</p>
        <div className="Modal__btns">
          <Button
            onHandleClick={onConfirmBtn}
            btnTextContent="Yes, I am sure!"
            color="lightseagreen"
            type="button"
          />
          <Button
            onHandleClick={onCancelBtn}
            btnTextContent="No, I'll keep it!"
            color="lightcoral"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
