import React from "react";
import { useSelector } from "react-redux";

export const WordsContainer = () => {
  const words = useSelector((state) => state.words);
  return (
    <div className="container-sm mt-3">
      {words.length > 0 &&
        words.map((w, i) => (
          <div
            key={i}
            className="border border-success p-2 mb-2 border-opacity-50 shadow-lg bg-body rounded align-items-cente"
          >
            <div className="d-flex justify-content-between">
              <p className="m-1 fs-5">{w.reverseStr}</p>
              {w.palindrome && (
                <p className="m-1 fs-6 text-success">Palíndromo</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
