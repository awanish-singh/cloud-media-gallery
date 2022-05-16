import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import {
  MdOutlineCollections,
  MdOutlineSearch,
  MdOutlineFolderShared,
  MdOutlinePhotoAlbum,
  MdOutlinePeopleAlt,
  MdOutlineEventNote,
} from "react-icons/md";
import { IconContext } from "react-icons";

const MainNavigation = () => {
  const checkActive = ({ isActive }) => {
    return isActive ? classes.active : "";
  };
  return (
    <nav className={classes.nav}>
      <IconContext.Provider value={{ size: "20px" }}>
        <ul>
          <li>
            <NavLink className={checkActive} to="/">
              <p>
                <span className={classes.icon}>
                  <MdOutlineCollections />
                </span>
                All Media
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink className={checkActive} to="/explore">
              <p>
                <span className={classes.icon}>
                  <MdOutlineSearch />
                </span>
                Explore
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink className={checkActive} to="/Share">
              <p>
                <span className={classes.icon}>
                  <MdOutlineFolderShared />
                </span>
                Sharing
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink className={checkActive} to="/Albums">
              <p>
                <span className={classes.icon}>
                  <MdOutlinePhotoAlbum />
                </span>
                Albums
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink className={checkActive} to="/Events">
              <p>
                <span className={classes.icon}>
                  <MdOutlineEventNote />
                </span>
                Events
              </p>
            </NavLink>
          </li>
        </ul>
      </IconContext.Provider>
    </nav>
  );
};

export default MainNavigation;
