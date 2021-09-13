import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notification = ({ icon, badge }) => {
  return (
    <div className="notification">
      <div className="notification-item">
        <FontAwesomeIcon
          className="clickable icon-notification-btn"
          icon={icon}
        />
        <span class="badge">{badge}</span>
      </div>
    </div>
  );
};

export default Notification;
