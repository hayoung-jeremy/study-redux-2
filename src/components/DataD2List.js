import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataD2List = () => {
  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal;
  // depth 02
  const depth_02 = KJ_SB.menus.map((item) =>
    item.menus.map((item) => {
      const depth_02__title = item.app_name;
      const depth_02__path = item.app_url;
      return (
        <li key={uuidv4()} className="btn">
          {depth_02__title} {depth_02__path}
        </li>
      );
    })
  );

  return (
    <div>
      <ul>{depth_02}</ul>
    </div>
  );
};

export default DataD2List;
