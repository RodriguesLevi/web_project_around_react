import close from "../../../images/close__image.png";
export default function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__button" onClick={onClose}>
          <img src={close} alt="close" className="popup__close" />
        </button>
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
