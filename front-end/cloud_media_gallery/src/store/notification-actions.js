import { notificationActions } from "./notification-slice";

export const removeNotification = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(notificationActions.remove());
    }, 5000);
  };
};
