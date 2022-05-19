import classes from "./Notification.module.css";

const Notification = (props) => {
  return (
    <div className={classes.notification}>
      <div>
        <h6 className={classes.title}>{props.title}</h6>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Notification;
