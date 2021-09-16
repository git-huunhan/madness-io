import { Figure } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserInfoHeader = ({ icon }) => {
  return (
    <div className="user-box-container">
      <Figure.Image
        width={35}
        height={35}
        alt="50x50"
        roundedCircle
        className="avatar"
        src="https://media.tarkett-image.com/large/TH_25094225_25187225_001.jpg"
      />

      <div className="username">
        <div className="name">Stephen Dang Intern</div>
        <div className="role">administator</div>
      </div>

      <FontAwesomeIcon className="clickable" icon={icon} />
    </div>
  );
};

export default UserInfoHeader;
