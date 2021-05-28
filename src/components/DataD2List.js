import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataD2List = () => {
  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal;
  console.log(KJ_SB.menus);

  const depth_01__arr = KJ_SB.menus;
  const depth_01__id = depth_01__arr.map((item) => item.id);
  const depth_02__pid = depth_01__arr.map((item) =>
    item.menus.map((item) => item.pid)
  );
  console.log(depth_02__pid);
  console.log(depth_01__id);
  const depth_02__arr = depth_01__arr.map(function (item, index) {
    const depth_02__menus = item.menus.map((item) => item.menus);

    const filtered_02_menus = depth_02__menus.filter(function (item) {
      const depth_02__pid = item.map((item) => item.pid);
      return depth_02__pid === depth_01__id;
    });
    console.log(filtered_02_menus);
    return <li>{filtered_02_menus}</li>;
  });

  return <div className="default-container middle">{depth_02__arr}</div>;
};

export default DataD2List;
