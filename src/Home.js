import React from "react";

const Home = ({ auth }) => (
  <>
    <h1>Home</h1>
    <button onClick={auth.login}>Login</button>
  </>
);

export { Home };
