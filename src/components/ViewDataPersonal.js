// components 폴더에는 오직 view만 담당하는 component 들을 구성한다.
import React from "react";
import DataD1List from "./DataD1List";
import DataD2List from "./DataD2List";

const ViewDataPersonal = () => {
  return (
    <section>
      <h2 className="blind">rendering personal banking data here</h2>
      <DataD1List />
      <DataD2List />
    </section>
  );
};

export default ViewDataPersonal;
