import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { toggleIsOpen, changeInputValue, saveUser } from "../../redux";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ isOpen, email, password });
    dispatch({ type: "LOGIN" });
    dispatch(toggleIsOpen());
  };

  return (
    <div className={isOpen ? "settings settings--open" : "settings"}>
      <button onClick={handleClick} type="button" className="settings__toggler">
        +
      </button>
      <form className="settings__form" onSubmit={handleSubmit}>
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
