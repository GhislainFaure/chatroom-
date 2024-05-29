import React from "react";
import classnames from "classnames";
import "./style.scss";
import { useSelector } from "react-redux";
import { isMessageMine } from "../../selectors";
import classNames from "classnames";

export default function Message({ author, content }) {
  // on determine si le message est le notre en comparant l'author avec le user
  // connecté à l'application (pseudo)
  const isMine = useSelector(isMessageMine(author));

  // classNames est une librairie utilitaire pour determiner si une classe
  // doit etre presente ou non dans notre JSX
  const classnames = classNames("message", {
    "message--is-mine": isMine,
  });

  return (
    <div className={classnames}>
      <p className={"message__author"}>{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
}
