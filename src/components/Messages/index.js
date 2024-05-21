import React from "react";
import { useEffect } from "react";
import Message from "../Message";
import "./style.scss";
import { useSelector } from "react-redux";

export default function Messages() {
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    // quand le callback de useEffect est executé , on est après le commit
    // on a donc accès au DOM
    const messagesElement = document.querySelector(".messages");
    messagesElement.scroll(0, messagesElement.scrollHeight);
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((message) => {
        return <Message key={message.id} {...message} />;
      })}
    </div>
  );
}
