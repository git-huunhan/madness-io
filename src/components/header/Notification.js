import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const Notification = ({ icon, badge }) => {
  return (
    <Button className="notification-item">
      <FontAwesomeIcon
        className="clickable icon-notification-btn"
        icon={icon}
      />
      <span className="badge">{badge}</span>
    </Button>
  );
};

export default Notification;
