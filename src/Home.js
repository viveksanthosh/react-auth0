import React from "react";

const Home = ({ auth }) => (
  <React.Fragment>
    <h1>Home</h1>
    <button onClick={auth.login}>Login</button>
 </React.Fragment>
);

export { Home };