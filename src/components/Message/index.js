import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { isMessageMine } from "../../selectors";

export default function Message({ author, content }) {
  // on determine si le message est le notre en comparant l'author avec le user
  // connecté à l'application (pseudo)

  return (
    <div
      className={
        useSelector(isMessageMine(author))
          ? "message message--is-mine"
          : "message"
      }
    >
      <p className={"message__author"}>{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
}
