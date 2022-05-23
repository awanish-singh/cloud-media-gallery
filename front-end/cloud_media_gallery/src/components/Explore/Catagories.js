import ButtonDark from "../UI/ButtonDark";

import classes from "./Catagories.module.css";

const Catagories = () => {
  return (
    <div className={classes.catagories}>
      <h4>Catagories</h4>
      <ul className={classes.list}>
        <li>
          <ButtonDark>
            <span className={classes.name}>Videos</span>
          </ButtonDark>
        </li>
        <li>
          <ButtonDark>
            <span className={classes.name}>Photos</span>
          </ButtonDark>
        </li>
        <li>
          <ButtonDark>
            <span className={classes.name}>Recently Added</span>
          </ButtonDark>
        </li>
        <li>
          <ButtonDark>
            <span className={classes.name}>Screenshots</span>
          </ButtonDark>
        </li>
        <li>
          <ButtonDark>
            <span className={classes.name}>Screenshots</span>
          </ButtonDark>
        </li>
        <li>
          <ButtonDark>
            <span className={classes.name}>Screenshots</span>
          </ButtonDark>
        </li>
      </ul>
    </div>
  );
};

export default Catagories;
