import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux";
import "./style.scss";

export default function Form() {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(text));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChangeInput}
        className="form__input"
        placeholder="Saisissez votre message..."
      />
      <button className="form__button" type="submit">
        Envoyer
      </button>
    </form>
  );
}
