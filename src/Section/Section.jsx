import profile from "../images/image_header.jpg";
import profileEditButton from "../images/profile__botton.png";
import profileAdd from "../images/profile__add.png";

function Section() {
  return (
    <section className="profile">
      <div className="profile-edit-avt">
        <img src={profile} alt=" imagem do perfil" className="profile__image" />
        <button alt="Editar avatar" className="profile__edit-photo"></button>
      </div>
      <div className="profile__card">
        <h2 className="profile__name">Jacques Cousteau</h2>
        <div>
          <button className="profile__button">
            <img src={profileEditButton} alt="botao" id="#login" />
          </button>
        </div>
        <p className="profile__description">Explorador</p>
      </div>

      <button className="profile__add">
        <img src={profileAdd} alt="adicionar" className="profile__add-bt" />
      </button>
    </section>
  );
}
export default Section;
