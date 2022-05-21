import { MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";

import classes from "./SearchBar.module.css";
import ButtonDark from "./ButtonDark";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { notificationActions } from "../../store/notification-slice";
import { removeNotification } from "../../store/notification-actions";

const SearchBar = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const searchInputHandler = (e) => {
    const inputValue = inputRef.current.value;
    if (inputValue.length === 0) {
      dispatch(
        notificationActions.add({
          title: "OOPS",
          description: "You forgot to type...",
          type: "NORMAL",
        })
      );

      dispatch(removeNotification());
    } else {
      console.log(inputValue);
    }
  };
  return (
    <div className={classes.search}>
      <div>
        <input
          ref={inputRef}
          className={classes.input}
          type="text"
          placeholder="Type here..."
        />
        <span className={classes.icon}>
          <ButtonDark onClick={searchInputHandler}>
            <IconContext.Provider value={{ size: "25px" }}>
              <MdSearch />
            </IconContext.Provider>
          </ButtonDark>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
