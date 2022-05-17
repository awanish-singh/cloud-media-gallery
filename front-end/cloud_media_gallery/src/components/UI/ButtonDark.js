import classes from "./ButtonDark.module.css";

const ButtonDark = (props) => {
  return (
    <button
      className={classes.btnDark}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonDark;
