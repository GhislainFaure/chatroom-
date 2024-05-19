import React from "react";
import "./style.scss";

export default function Form() {
  return (
    <form className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Saisissez votre message..."
      />
      <button className="form__button" type="submit">
        Envoyer
      </button>
    </form>
  );
}
