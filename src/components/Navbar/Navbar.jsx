import { useState } from "react";
import "./index.css";
import logo from "../../assets/images/logo.png";
import ModalLogin from "../ModalLogin";

const Navbar = () => {
  const [isModalVisibile, setModalVisibility] = useState(false);

  const removeUsername = () => {
    localStorage.removeItem("username");
  };

  return (
    <div className="Navbar">
      <div className="Navbar__socialName">
        <img src={logo} alt="" className="Navbar__logo" />
        <h1 className="App_name"> CB.04 SOCIAL CLUB</h1>
      </div>
      <ul className="Navbar__menu">
        <li
          onClick={() => setModalVisibility(true)}
          className="profileSettings"
        >
          LogIn/Settings
        </li>
        <li className="friends">FRIENDS</li>
        <li className="messages">MESSAGES</li>
        <li className="liveStories">LIVE STORIES</li>
        <li className="account">
          <b>HELLO {localStorage.getItem("username") || "anonymous"} !</b>
        </li>
        <li
          onClick={() => setModalVisibility(true) && removeUsername(true)}
          className="logOut"
        >
          Log Out
        </li>
      </ul>
      {isModalVisibile && (
        <ModalLogin setModalVisibility={setModalVisibility} />
      )}
    </div>
  );
};

export default Navbar;
