import "./App.jsx";
import logo_around from "./images/logo_around.png";
import profile from "./images/image_header.jpg";
import profileEditButton from "./images/profile__botton.png";
import profileAdd from "./images/profile__add.png";

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <nav className="nav">
            <img src={logo_around} alt="imagem do logo da page" />
          </nav>
        </header>
        <section className="profile">
          <div className="profile-edit-avt">
            <img
              src={profile}
              alt=" imagem do perfil"
              className="profile__image"
            />
            <button
              alt="Editar avatar"
              className="profile__edit-photo"
            ></button>
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
        <main className="cards">
          <template id="card-template">
            <div className="cards__container">
              <button className="cards__button-remove">
                <img src="" alt="" className="cards__image" />
              </button>
              <img
                id="remove-image"
                src="<%= require('./images/Trash.png')%>"
                alt="delete"
                className="cards__delete"
              />
              <div className="cards__container-title">
                <h3 className="cards__container-name"></h3>
                <button className="cards__button" type="button">
                  <img
                    className="cards__button-like"
                    src="<%= require('./images/image__like.png')%>"
                    alt="icone de like"
                  />
                  <span className="cards__like-counter">0</span>
                </button>
              </div>
            </div>
          </template>
        </main>
        <footer className="footer">
          <p>© 2024 Around The U.S.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
