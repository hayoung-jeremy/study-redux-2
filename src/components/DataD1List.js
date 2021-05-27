import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataD1List = () => {
  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal;
  console.log(KJ_SB.menus);
  // depth 01
  const menu_tree = KJ_SB.menus.map((item) => {
    const depth_01__title = item.app_name;
    const depth_01__url = item.app_url;
    return (
      <li key={uuidv4()} className="btn">
        {depth_01__title}
        {depth_01__url}
      </li>
    );
  });
  return (
    <>
      <div className="default-container middle">
        <ul className="flex-container">{menu_tree}</ul>
      </div>
    </>
  );
};

export default DataD1List;
