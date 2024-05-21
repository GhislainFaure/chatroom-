import React from "react";
import Message from "../Message";
import "./style.scss";
import { useSelector } from "react-redux";

export default function Messages() {
  const messages = useSelector((state) => state.messages);
  console.log(messages);

  return (
    <div className="messages">
      {messages.map((message) => {
        return <Message key={message.id} {...message} />;
      })}
    </div>
  );
}
