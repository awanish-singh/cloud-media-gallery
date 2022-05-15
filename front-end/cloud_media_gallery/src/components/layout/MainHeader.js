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
      <div className={classes.actions}>
        <div className={classes.upload}>
          <p>Upload</p>
        </div>
        <div className={classes.user}>
          <div>
            <p>U</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
