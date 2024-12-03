import close from "../../../images/close__image.png";
export default function Popup(props) {
  //children é o conteúdo de popup
  const { title, children } = props;
  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__button">
          <img src={close} alt="close" className="popup__close" />
        </button>
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
