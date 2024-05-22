import { useState } from "react";
import React from "react";
import "./style.scss";

export default function Settings() {
  const [isOpen, setisOpen] = useState("false");

  const handleClick = () => {
    setisOpen(!isOpen);
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
          id="field"
          className="settings__input"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          id="field"
          className="settings__input"
          placeholder="Mot de passe"
        />
        <button id="field" className="settings__submit" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
