import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddFriend = ({ isRenderedList, onAddButton }) => {
  // Controlled component!!! - Forms e input
  const [friendPhoto, setFriendPhoto] = useState("");
  const [friendName, setFriendName] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (friendPhoto && friendName) {
      POST("friends", {
        photo: friendPhoto,
        name: friendName,
      }).then(() => {
        setFriendPhoto("");
        setFriendName("");
        onAddButton(!isRenderedList);
      });
    }
  };

  return (
    <form className="AddFriend" action="submit" onSubmit={onFormSubmit}>
      <input
        className="AddFriend__photo"
        type="text"
        placeholder="add friend photo url..."
        value={friendPhoto}
        onChange={(e) => setFriendPhoto(e.target.value)}
        required
      />
      <input
        className="AddFriend__name"
        type="text"
        placeholder="add friend name..."
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        required
      />
      <Button type="submit" btnTextContent="Aggiungi" color="lightseagreen" />
    </form>
  );
};

export default AddFriend;
