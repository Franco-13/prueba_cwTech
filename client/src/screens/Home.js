import React from "react";
import { Bar } from "../components/Bar.js";
import { ModalError } from "../components/ModalError.js";
import { WordsContainer } from "../components/WordsContainer.js";

export const Home = () => {
  return (
    <div className="container-fluid vh-100">
      <Bar />
      <WordsContainer />
      <ModalError />
    </div>
  );
};
