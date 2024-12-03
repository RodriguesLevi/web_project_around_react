export default function EditProfile() {
  return (
    <form id="user-form" className="form" noValidate>
      <fieldset className="form__fieldset">
        <div className="form__display">
          <input
            type="text"
            className="form__input form__input-name"
            id="name"
            name="name"
            placeholder="Nome"
            minLength="2"
            maxLength="40"
            required
          />
          <p className="error-message"></p>
        </div>
        <div className="form__display">
          <input
            type="text"
            className="form__input form__input-description"
            id="description"
            name="description"
            placeholder="Sobre mim"
            minLength="2"
            maxLength="200"
            required
          />
          <p className="error-message"></p>
        </div>
        <button
          disabled
          id="button-save"
          className="form__button"
          type="submit"
        >
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
