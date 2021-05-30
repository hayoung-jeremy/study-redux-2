import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataD2List = () => {
  let d2_index = 0;

  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal; // [ {} ]

  const depth_01__arr = KJ_SB.menus;
  // console.log(depth_01__arr); // [ {}, {}, {} ... ]

  const depth_02__arr = depth_01__arr.map((item) => {
    return item.menus;
  });

  const depth_02__title = depth_02__arr.map((item) => {
    const dp_2_title = item.map((item) => {
      return <li key={uuidv4()}>{item.app_name}</li>;
    });
    return dp_2_title;
  });
  console.log(depth_02__title);

  return (
    <div className="default-container middle">
      <ul>{depth_02__title[d2_index]}</ul>
    </div>
  );
};

export default DataD2List;
