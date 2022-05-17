import { MdOutlineFileUpload } from "react-icons/md";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

import classes from "./MainHeader.module.css";
import { useRef, useState } from "react";
import UserModal from "./UserModal";

const MainHeader = (props) => {
  const headerRef = useRef();
  const [userModal, setUserModalOpen] = useState({
    isOpen: false,
    headerBottomPos: 0,
    userBottomPos: 0,
  });
  const { userName, isLoggedIn } = useSelector((state) => state.auth);

  const userHoverInHandler = (e) => {
    const headerPos = headerRef.current.getBoundingClientRect();
    const userPos = e.currentTarget.getBoundingClientRect();
    setUserModalOpen({
      isOpen: true,
      headerBottomPos: headerPos.bottom,
      userBottomPos: userPos.bottom,
    });
  };

  const userHoveOutrHandler = (e) => {
    setUserModalOpen({ ...userModal, isOpen: false });
  };

  return (
    <header
      ref={headerRef}
      className={
        props.pseudo
          ? classes.header + " " + classes["position-relative"]
          : classes.header
      }
    >
      <h1>Cloud Media Gallery</h1>
      {isLoggedIn && (
        <div className={classes.actions}>
          <div className={classes.upload}>
            <p>
              <IconContext.Provider value={{ size: "24px" }}>
                <span>
                  <MdOutlineFileUpload />
                </span>
              </IconContext.Provider>
              Upload
            </p>
          </div>
          <div
            className={classes.user}
            onMouseEnter={userHoverInHandler}
            onMouseLeave={userHoveOutrHandler}
          >
            <div>
              <p>{userName[0].toUpperCase()}</p>
            </div>
            {userModal.isOpen && (
              <UserModal
                headerBottom={userModal.headerBottomPos}
                userBottom={userModal.userBottomPos}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
