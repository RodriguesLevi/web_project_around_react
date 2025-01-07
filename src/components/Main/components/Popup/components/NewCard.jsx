import { useState, useContext } from "react";

import { CardsContext } from "../../../../../contexts/CardsContext";

export default function NewCard() {
  const { currentUser, handleAddPlaceSubmit } = useContext(CardsContext);

  const [title, setTitle] = useState(currentUser?.title);
  const [url, setUrl] = useState(currentUser?.url);

  const handleTile = (event) => {
    setTitle(event.target.value);
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddPlaceSubmit({ title, url });
  };

  return (
    <form id="card-form" className="form form-add" onSubmit={handleSubmit}>
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
            value={title}
            onChange={handleTile}
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
            value={title}
            onChange={handleUrl}
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
