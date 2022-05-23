import { httpStateActions } from "./httpState-slice";
import { showNotifications } from "./notification-actions";

export const showError = (errObj) => {
  return async (dispatch) => {
    dispatch(httpStateActions.error(errObj));

    dispatch(
      showNotifications({
        ...errObj,
        type: "ALERT",
      })
    );
  };
};
