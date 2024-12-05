import buttonAdd from "../images/profile__add.png";
import profileButton from "../images/profile__botton.png";
import profileAdd from "../images/image_header.jpg";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import { useState } from "react";
import Popup from "./components/Popup/Popup.jsx";
import Card from "../components/Main/components/Card/Card.jsx";
import EditProfile from "./components/Popup/components/EditAvatar/EditAvatar.jsx";
import EditAvatar from "./components/Popup/components/EditProfile/EditProfile.jsx";

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Novo cartão", children: <NewCard /> };
  const editAvatarPopup = {
    title: "Alterar a foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  console.log(cards);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile-edit-avt">
          <img
            src={profileAdd}
            alt=" imagem do perfil"
            className="profile__image"
          />
          <button
            alt="Editar avatar"
            className="profile__edit-photo"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>
        <div className="profile__card">
          <h2 className="profile__name">Jacques Cousteau</h2>
          <div>
            <button className="profile__button">
              <img
                src={profileButton}
                alt="botao"
                id="#login"
                onClick={() => handleOpenPopup(editProfilePopup)}
              />
            </button>
          </div>
          <p className="profile__description">Explorador</p>
        </div>

        <button className="profile__add">
          <img
            src={buttonAdd}
            alt="adicionar"
            className="profile__add-bt"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
export default Main;
