import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataD1List = () => {
  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal;

  return (
    <>
      <div className="default-container middle">
        <ul className="flex-container">
          {KJ_SB.menus.map((item) => {
            const depth_01__title = item.app_name;
            // depth_01
            return (
              <li key={uuidv4()} className="btn">
                {depth_01__title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DataD1List;
