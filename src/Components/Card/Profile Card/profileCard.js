import "./profileCard.scss";
import Data from "./Content/data";

function ProfileCard() {
  return (
    <div className="card">
      <img src="images/avatar.jpg" alt="Avatar. Img" className="avatar"></img>
      <Data />
    </div>
  );
}

export default ProfileCard;
