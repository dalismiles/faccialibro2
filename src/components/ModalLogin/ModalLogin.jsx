import { useState } from "react";
import Button from "../Button";
import "./index.css";

const ModalLogin = ({ onHandleClick }) => {
  const [usernameInput, setUsernameInput] = useState("");

  const onGetUsername = () => {
    localStorage.setItem("username", usernameInput);
    onHandleClick(false);
  };

  return (
    <div className="ModalLogin">
      <form className="ModalLogin__form" onSubmit={onGetUsername}>
        <h2>Type your name</h2>
        <input
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          className="ModalLogin__form--input"
          type="text"
          placeholder="Name ..."
          required
        />
        <Button
          type="submit"
          color="lightseagreen"
          btnTextContent="Continue"
          className="ModalLogin__button"
        />
      </form>
    </div>
  );
};

export default ModalLogin;
