// components 폴더에는 오직 view만 담당하는 component 들을 구성한다.
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import data_personal from "../db/data_personal.json";
import DataD1List from "./DataD1List";
import DataD2List from "./DataD2List";

const ViewDataPersonal = () => {
  const [KJ_SB] = data_personal;

  return (
    <HashRouter>
      <section>
        <h2 className="blind">rendering personal banking data here</h2>
        <DataD1List KJ_SB={KJ_SB} />
        <DataD2List KJ_SB={KJ_SB} />
      </section>
    </HashRouter>
  );
};

export default ViewDataPersonal;
