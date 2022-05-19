import { MdOutlineFileUpload } from "react-icons/md";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

import classes from "./MainHeader.module.css";
import { useRef, useState } from "react";
import UserModal from "./UserModal";
import ButtonDark from "../UI/ButtonDark";

const MainHeader = (props) => {
  const headerRef = useRef();
  const fileInputRef = useRef();
  const formRef = useRef();
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

  const fileUploadHandler = (e) => {
    // const file = fileInputRef.current.value;
    const files = Array.from(new FormData(formRef.current).entries());
    console.log(files);
  };

  const triggerUpload = (e) => {
    const fileElement = fileInputRef.current;
    fileElement.click();
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
            <ButtonDark onClick={triggerUpload}>
              <form ref={formRef} style={{ display: "none" }}>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="media"
                  multiple
                  accept="image/*, video/*"
                  style={{
                    display: "none",
                  }}
                  onChange={fileUploadHandler}
                />
              </form>
              <p>
                <IconContext.Provider value={{ size: "24px" }}>
                  <span>
                    <MdOutlineFileUpload />
                  </span>
                </IconContext.Provider>
                Upload
              </p>
            </ButtonDark>
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
