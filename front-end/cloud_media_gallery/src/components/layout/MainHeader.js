import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header
      className={
        props.pseudo
          ? classes.header + " " + classes["position-relative"]
          : classes.header
      }
    >
      <h1>Cloud Media Gallery</h1>
    </header>
  );
};

export default MainHeader;
