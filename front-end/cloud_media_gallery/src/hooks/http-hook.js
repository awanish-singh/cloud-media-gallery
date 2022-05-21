import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { httpStateActions } from "../store/httpState-slice";
import { API_KEY } from "../util/api-key";

const useHttp = (props) => {
  const [data, setdata] = useState(null);
  const dispatch = useDispatch();
  const sendRequest = useCallback((url, method, body) => {
    dispatch(httpStateActions.send());

    fetch(`${url}`, {
      method: method,
      body: body,
      "Content-Type": "application/json",
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setdata(responseData);
        dispatch(httpStateActions.response());
      })
      .catch((errorMsg) => {
        dispatch(httpStateActions.error({ error: errorMsg }));
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
