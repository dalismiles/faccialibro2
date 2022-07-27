import { DELETE } from "../../utils/api";
import "./index.css";

const FriendCard = ({ friendData, isRenderedList, onDeleteCard }) => {
  const { photo, name, id } = friendData;

  const deleteFriend = () => {
    DELETE("friends", id).then(() => onDeleteCard(!isRenderedList));
  };

  return (
    <div className="FriendCard">
      <img
        onClick={deleteFriend}
        className="FriendCard__photo"
        src={photo}
        alt={name}
      />
      <p className="FriendCard__name">{name}</p>
    </div>
  );
};

export default FriendCard;
