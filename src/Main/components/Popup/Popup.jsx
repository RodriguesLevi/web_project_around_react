import close from "../../../images/close__image.png";
export default function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <div className="popup">
      <div
        className={`popup__container ${!title ? "popup__container_image" : ""}`}
      >
        <button className="popup__button" onClick={onClose}>
          <img src={close} alt="close" className="popup__close" />
        </button>
        <div className="popup__form-container">
          {title && <h3 className="popup__title">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}
