import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { showError } from "../store/error-action";
import { httpStateActions } from "../store/httpState-slice";
import axios from "axios";

const useHttp = (props) => {
  const [data, setdata] = useState(null);
  const [resHeaders, setResHeaders] = useState(null);
  const dispatch = useDispatch();
  const sendRequest = useCallback((url, method, body, headers) => {
    dispatch(httpStateActions.send());

    axios({
      url: url,
      method: method,
      data: body,
    })
      .then((response) => {
        if (!response.ok) {
          // console.log(response.status, response.statusText);
          const error = {
            status: response.status,
            statusText: response.statusText,
          };
          throw new Error(response.status, { cause: response.statusText });
        } else {
          setResHeaders(Array.from(response.headers.entries()));
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
    resHeaders,
    sendRequest,
    cleanUp,
  };
};

export default useHttp;
