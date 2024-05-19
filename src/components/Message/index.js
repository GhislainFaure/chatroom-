import React from "react";
import "./style.scss";

export default function Message({ author, content }) {
  return (
    <div className="message">
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
}
