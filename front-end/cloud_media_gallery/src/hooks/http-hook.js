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
        console.log(response);
        // console.log(response.headers.get("userId"));
        if (!response.statusText==="OK") {
          // console.log(response.status, response.statusText);
          const error = {
            status: response.status,
            statusText: response.statusText,
          };
          throw new Error(response.status, { cause: response.statusText });
        } else {
          setResHeaders(response.headers);
          setdata(response.data);
          dispatch(httpStateActions.response());
        }
       
        // return response.json();
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
