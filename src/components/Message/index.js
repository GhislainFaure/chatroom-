import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

export default function Message({ author, content }) {
  const { pseudo } = useSelector((state) => state.messages);

  return (
    <div className={author === pseudo ? "message--is-mine" : "message"}>
      <p className={"message__author"}>{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
}
