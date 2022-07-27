import "./index.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__socialName">
        <img src={logo} className="Navbar__logo" />
        <h1 className="App_name"> CB.04 SOCIAL CLUB</h1>
      </div>
      <ul className="Navbar__menu">
        <li className="profileSettings">Profile Settings</li>
        <li className="friends">FRIENDS</li>
        <li className="liveStories">LIVE STORIES</li>
        <li className="logOut">Log Out</li>
      </ul>
    </div>
  );
};

export default Navbar;
