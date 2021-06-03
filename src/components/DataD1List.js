import React from "react";
import DataD2List from "./DataD2List";
import { v4 as uuidv4 } from "uuid";

const DataD1List = ({ kj_sb }) => {
  // check depth_01_selected

  // depth_01__id
  // depth_01__app_name
  const Depth01Info = ({ key, id, value }) => {
    return <li className="btn">{value}</li>;
  };

  const ShowD1Data = () => {
    const depth_01__data = kj_sb.menus.map((item, index) => {
      return <Depth01Info key={uuidv4()} id={item.id} value={item.app_name} />;
    });
    return <ul className="flex-container middle">{depth_01__data}</ul>;
  };

  return (
    <>
      <p>depth_01 app_name here</p>
      <div className="default-container">
        <ShowD1Data />
      </div>
      <DataD2List />
    </>
  );
};

export default DataD1List;
