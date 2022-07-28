import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getReverseWord } from "../store/actions/index.js";

export const Bar = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  const handleChangeWord = (e) => {
    setWord(e.target.value);
  };

  const sendWord = () => {
    if (word.length === 0) {
    } else {
      dispatch(getReverseWord(word));
      setWord("");
    }
  };

  return (
    <nav className="navbar sticky-top navbar-dark bg-dark d-flex justify-content-center">
      <div className="form-floating d-flex">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Palabra a invertir"
          name="word"
          value={word}
          onChange={handleChangeWord}
        />
        <label htmlFor="floatingInput">Palabra a invertir</label>
        <button className="btn btn-secondary ms-3" onClick={sendWord}>
          Click
        </button>
      </div>
    </nav>
  );
};
