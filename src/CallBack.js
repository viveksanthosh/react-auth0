import React, { useState, useEffect } from "react";

const CallBack = ({ auth }) => {
  let [dots, setDots] = useState(1);
  let [error, setError] = useState(false);

  useEffect(() => {
    auth.verify().catch(e => {
      setError(e);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setDots(dots++ % 6);
    }, 200);
  }, []);

  return (
    <>
      {error ? (
        <h1> Error while logging in {error.error}</h1>
      ) : (
        <h1>
          Loading
          {Array.apply(null, Array(dots))
            .map(a => ".")
            .join("")}
        </h1>
      )}
    </>
  );
};

export { CallBack };
