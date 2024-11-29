import "./App.jsx";

function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img
            src="<%= require('./images/logo_around.png')%>"
            alt="imagem do logo da page"
          />
        </nav>
      </header>
      <section className="profile">
        <div className="profile-edit-avt">
          <img
            src="<%= require('./images/image_header.jpg')%>"
            alt=" imagem do perfil"
            className="profile__image"
          />
          <button alt="Editar avatar" className="profile__edit-photo"></button>
        </div>
        <div className="profile__card">
          <h2 className="profile__name">Jacques Cousteau</h2>
          <div>
            <button className="profile__button">
              <img
                src="<%= require('./images/profile__botton.png')%>"
                alt="botao"
                id="#login"
              />
            </button>
          </div>
          <p className="profile__description">Explorador</p>
        </div>

        <button className="profile__add">
          <img
            src="<%= require('./images/profile__add.png')%>"
            alt="adicionar"
            className="profile__add-bt"
          />
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
    </>
  );
}

export default App;
