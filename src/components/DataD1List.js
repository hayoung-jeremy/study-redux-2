import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const DataD1List = () => {
  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal;

  const ListItems = ({ value }) => (
    <li className="btn">
      <Link>{value}</Link>
    </li>
  );

  const TitleList = () => {
    const depth_01_title = KJ_SB.menus.map((item, index) => {
      return <ListItems key={uuidv4()} value={item.app_name} />;
    });
    return <ul className="flex-container">{depth_01_title}</ul>;
  };

  return (
    <>
      <div className="default-container middle">
        <TitleList />
      </div>
    </>
  );
};

export default DataD1List;
