import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const DataD2List = ({ KJ_SB }) => {
  //
  let d2_index = 0;

  const depth_01__arr = KJ_SB.menus; // [ {}, {}, {} ... ]

  const depth_02__arr = depth_01__arr.map((item) => {
    return item.menus;
  });

  const depth_02__title = depth_02__arr.map((item) => {
    const dp_2_title = item.map((item) => {
      return (
        <li className="btn" key={uuidv4()}>
          <Link>{item.app_name}</Link>
        </li>
      );
    });
    return dp_2_title;
  });
  console.log(depth_02__title);

  return (
    <div className="default-container middle">
      <ul className="flex-container">{depth_02__title[d2_index]}</ul>
    </div>
  );
};

export default DataD2List;
