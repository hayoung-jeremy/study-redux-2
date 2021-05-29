import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataD2List = () => {
  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal; // [ {} ]

  const depth_01__arr = KJ_SB.menus;
  console.log(depth_01__arr); // [ {}, {}, {} ... ]

  console.log(depth_01__arr[0].menus);

  return <div className="default-container middle"></div>;
};

export default DataD2List;
