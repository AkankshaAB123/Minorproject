// src/components/chat/ChatBox.jsx
import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import styles from "../../styles/Chat.module.css";

const ChatBox = ({ messages, onSend }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(input);
    setInput("");
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messageArea}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} time={msg.time} />
        ))}
      </div>

      <form className={styles.inputArea} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
