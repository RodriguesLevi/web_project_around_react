import closeImage from "../../../../../images/close__image.png";

export default function ImagePopup() {
  return (
    <div className="popup__image-container popup__container">
      <button className="popup__button popup__button-image">
        <img className="popup__button-photo" src={closeImage} alt="" />
      </button>
      <img className="popup__image-open" src="" alt="" />
      <p className="popup__image-name"></p>
    </div>
  );
}
