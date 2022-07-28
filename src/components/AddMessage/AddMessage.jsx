import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddMessage = ({ isRenderedList, onAddButton }) => {
  const [messageText, setMessageText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (messageText) {
      POST("messages", {
        text: messageText,
        sender: localStorage.getItem("username") || "Generic",
        date: new Date().toLocaleDateString(),
      }).then(() => {
        setMessageText("");
        onAddButton(!isRenderedList);
      });
    }
  };

  return (
    <form className="AddMessage" onSubmit={onFormSubmit}>
      <input
        className="AddMessage__text"
        type="text"
        placeholder="Type your message..."
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        required
      />
      <Button type="submit" btnTextContent="Post" color="lightseagreen" />
    </form>
  );
};

export default AddMessage;
