import { ADD_WORD, ERROR_MSG, LOADING, RESET } from "../actionsTypes/index.js";

const initialState = {
  words: [],
  errorMsg: "",
  loading: false,
};

export default function wordsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WORD:
      return { ...state, words: [action.payload, ...state.words] };

    case ERROR_MSG:
      return { ...state, errorMsg: action.payload };

    case RESET:
      return { ...state, errorMsg: "" };

    case LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}
