import { OverlayTrigger, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownNotification = ({ icon, badge, children }) => {
  return (
    <OverlayTrigger
      trigger="click"
      key={"bottom"}
      placement={"bottom"}
      rootClose={true}
      overlay={
        <Popover
          id={"popover-positioned-bottom"}
          className="popover-notification"
        >
          <Popover.Title as="h3">
            <div>Alerts</div>
            <div className="badge-popover-header">{badge}</div>
          </Popover.Title>
          <Popover.Content>{children}</Popover.Content>
          <hr />
          <div className="d-flex justify-content-end">View all</div>
        </Popover>
      }
    >
      <div className="notification-item clickable">
        <FontAwesomeIcon
          className="clickable icon-notification-btn"
          icon={icon}
        />
        <span className="badge">{badge}</span>
      </div>
    </OverlayTrigger>
  );
};

export default DropdownNotification;
