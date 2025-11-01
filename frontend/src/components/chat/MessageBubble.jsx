// src/components/chat/MessageBubble.jsx
import React from "react";
import styles from "../../styles/Chat.module.css";

const MessageBubble = ({ sender, text, time }) => {
  const isUser = sender === "You";
  return (
    <div className={`${styles.messageBubble} ${isUser ? styles.user : styles.ngo}`}>
      <p>{text}</p>
      <span className={styles.time}>{time}</span>
    </div>
  );
};

export default MessageBubble;
