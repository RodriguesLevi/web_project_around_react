import ImageLike from "../../../../images/image__like.png";
import Trash from "../../../../images/Trash.png";
import ImagePopup from "./ImagePopup/ImagePopup";
export default function Card(props) {
  const { name, link, handleOpenPopup } = props.card;
  // isLiked,ff

  const imagePopup = {
    children: <ImagePopup />,
  };

  return (
    <div className="cards__container">
      <button className="cards__button-remove">
        <img
          src={link}
          alt=""
          className="cards__image"
          onClick={() => handleOpenPopup(imagePopup)}
        />
      </button>
      <img
        id="remove-image"
        src={Trash}
        alt="delete"
        className="cards__delete"
      />
      <div className="cards__container-title">
        <h3 className="cards__container-name">{name}</h3>
        <button className="cards__button" type="button">
          <img
            className="cards__button-like"
            src={ImageLike}
            alt="icone de like"
          />
          <span className="cards__like-counter">0</span>
        </button>
      </div>
    </div>
  );
}
