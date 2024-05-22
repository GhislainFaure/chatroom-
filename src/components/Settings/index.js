// import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
// import { useSelector } from "react-redux";
import { toggleIsOpen, changeInputValue } from "../../redux";

export default function Settings() {
  const { isOpen, email, password } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleIsOpen());
  };
  const handleChangeInput = (event) => {
    dispatch(
      changeInputValue({
        inputValue: event.target.value,
        inputType: event.target.name,
      })
    );
  };

  return (
    <div className={isOpen ? "settings settings--open" : "settings"}>
      <button onClick={handleClick} type="button" className="settings__toggler">
        +
      </button>
      <form className="settings__form">
        <input
          value={email}
          onChange={handleChangeInput}
          type="email"
          name="email"
          className="settings__input"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={handleChangeInput}
          type="password"
          name="password"
          className="settings__input"
          placeholder="Mot de passe"
        />
        <button className="settings__submit" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
