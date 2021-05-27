import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataD2List = () => {
  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal;
  // depth 02
  const menu_tree = KJ_SB.menus.map((item) =>
    item.menus.map((item) => <li key={uuidv4()}>{item.app_name}</li>)
  );

  return (
    <div>
      <ul>{menu_tree}</ul>
    </div>
  );
};

export default DataD2List;
