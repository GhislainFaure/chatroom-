// import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
// import { useSelector } from "react-redux";
import { toggleIsOpen } from "../../redux";

export default function Settings() {
  const { isOpen } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleIsOpen());
  };
  return (
    <div className={isOpen ? "settings" : "settings settings--open"}>
      <button onClick={handleClick} type="button" className="settings__toggler">
        +
      </button>
      <form className="settings__form">
        <input
          type="email"
          name="email"
          className="settings__input"
          placeholder="Email"
        />
        <input
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
