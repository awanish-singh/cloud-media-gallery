import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import ButtonDark from "../UI/ButtonDark";
import classes from "./UserModal.module.css";

const UserModal = (props) => {
  const dispatch = useDispatch();
  const { userName, fullName, email } = useSelector((state) => state.auth);
  return (
    <div
      className={classes.userModal}
      style={{
        top: props.userBottom - 8,
        paddingTop: props.headerBottom - props.userBottom + 16,
      }}
    >
      <div>
        <div className={classes.info}>
          <div>
            <div>{userName[0].toUpperCase()}</div>
            <p className={classes.username}>{`Hello, ${userName}`}</p>
          </div>
          <div className={classes.nameemail}>
            <p className={classes.fullname}>{fullName}</p>
            <p className={classes.email}>{email}</p>
          </div>
        </div>
        <div className={classes.actions}>
          <ButtonDark
            onClick={() => {
              dispatch(authActions.logout());
            }}
          >
            Sign Out
          </ButtonDark>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
