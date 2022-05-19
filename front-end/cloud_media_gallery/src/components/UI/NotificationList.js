import Notification from "./Notification";

import classes from "./NotificationList.module.css";

const NotificationList = (props) => {
  return (
    <div className={classes.notificationList}>
      <div>
        {props.notifications.map((noti) => {
          return (
            <Notification title={noti.title} description={noti.description} />
          );
        })}
      </div>
    </div>
  );
};

export default NotificationList;
