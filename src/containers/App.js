import React from "react";
import "../assets/css/style.css";
import ViewDataPersonal from "../components/ViewDataPersonal";

const App = () => {
  return (
    <>
      <header>
        <p className="hayoung">Hayoung</p>
      </header>
      <ViewDataPersonal />
      <footer>Copyright 2021. Ha Young Kim, all rights reserved</footer>
    </>
  );
};

export default App;
