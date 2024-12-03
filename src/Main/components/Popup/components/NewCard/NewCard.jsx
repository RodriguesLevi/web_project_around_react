export default function NewCard() {
  return (
    <form id="card-form" className="form form-add" noValidate>
      <fieldset className="form__fieldset form__fieldset-add">
        <div className="form__display">
          <input
            type="text"
            className="form__input form__input-name form__input-name-add"
            id="title"
            name="title"
            placeholder="Titulo"
            minLength="2"
            maxLength="30"
            required
          />
          <p className="error-message"></p>
        </div>
        <div className="form__display">
          <input
            type="url"
            className="form__input form__input-description form__input-description-add"
            id="url"
            name="url"
            placeholder="Link de imagem"
            required
          />
          <p className="form__input-error-message"></p>
        </div>
        <button
          disabled
          id="create-button"
          className="form__button form__button-add"
          type="submit"
        >
          Criar
        </button>
      </fieldset>
    </form>
  );
}
