import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const checkActive = ({ isActive }) => {
    return isActive ? classes.active : "";
  };
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink className={checkActive} to="/">
            <p>All Media</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={checkActive} to="/explore">
            <p>Explore</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={checkActive} to="/Share">
            <p>Sharing</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={checkActive} to="/Albums">
            <p>Albums</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={checkActive} to="/Events">
            <p>Events</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
