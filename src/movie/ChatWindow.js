import React from 'react';
import CommentInput from './CommentInput';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <strong>{msg.sender}</strong>
          <span className="time"> {msg.time}</span>
          <p>{msg.text}</p>
        </div>
      ))}
      <CommentInput />
    </div>
  );
};

export default ChatWindow;