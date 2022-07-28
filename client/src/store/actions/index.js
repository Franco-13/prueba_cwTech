import { ADD_WORD, ERROR_MSG, LOADING, RESET } from "../actionsTypes/index.js";

export function getReverseWord(text) {
  return function (dispatch) {
    dispatch({ type: LOADING, payload: true });

    return fetch(`${process.env.API}/iecho?text=${text}`)
      .then((res) => res.json())
      .then((reverseStr) => {
        dispatch({ type: LOADING, payload: false });
        if (reverseStr.message) {
          throw new Error(reverseStr.message);
        }
        dispatch({
          type: ADD_WORD,
          payload: reverseStr,
        });
      })
      .catch((error) => {
        dispatch({ type: LOADING, payload: false });
        dispatch({ type: ERROR_MSG, payload: error.message });
      });
  };
}

export function resetErrorMsg() {
  return {
    type: RESET,
  };
}
