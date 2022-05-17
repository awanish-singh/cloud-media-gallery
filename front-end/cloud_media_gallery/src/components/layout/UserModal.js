import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import ButtonDark from "../UI/ButtonDark";
import classes from "./UserModal.module.css";

const UserModal = (props) => {
  const dispatch = useDispatch();
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
            <div>FL</div>
            <p>Hello, Username</p>
          </div>
          <p>Full Name</p>
          <p>email@address.com</p>
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
