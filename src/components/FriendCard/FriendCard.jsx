import { DELETE } from "../../utils/api";
import "./index.css";

const FriendCard = ({ friendData, setRenderedList }) => {
  const { photo, name, id } = friendData;

  const deleteFriendBtn = (id) =>
    DELETE("friends", id).then(() => setRenderedList((prev) => !prev));

  return (
    <div className="FriendCard">
      <img className="FriendCard__photo" src={photo} alt={name} />
      <p className="FriendCard__name">{name}</p>
      <button onClick={() => deleteFriendBtn(id)} className="FriendCard__btn">
      </button>
    </div>
  );
};

export default FriendCard;
