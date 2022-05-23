import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { showError } from "../store/error-action";
import { httpStateActions } from "../store/httpState-slice";

const useHttp = (props) => {
  const [data, setdata] = useState(null);
  const dispatch = useDispatch();
  const sendRequest = useCallback((url, method, body, headers) => {
    dispatch(httpStateActions.send());

    fetch(`${url}`, {
      method: method,
      body: body,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    })
      .then((response) => {
        if (!response.ok) {
          // console.log(response.status, response.statusText);
          const error = {
            status: response.status,
            statusText: response.statusText,
          };
          throw new Error(response.status, { cause: response.statusText });
        }
        return response.json();
      })
      .then((responseData) => {
        // console.log("am i");
        setdata(responseData);
        dispatch(httpStateActions.response());
      })
      .catch((error) => {
        // console.log(error.message);
        // return error;
        dispatch(
          showError({
            title: error.message,
            description: error.cause,
          })
        );
      });
  }, []);

  const cleanUp = useCallback(() => {
    dispatch(httpStateActions.clean());
  }, []);

  return {
    data,
    sendRequest,
    cleanUp,
  };
};

export default useHttp;
