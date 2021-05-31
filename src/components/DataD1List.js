import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const DataD1List = ({ KJ_SB }) => {
  const [clickedItem, setClickedItem] = useState(0);

  const ListItems = ({ index, value }) => {
    const onClickItem = () => {
      console.log(index);
      setClickedItem(index);
    };
    return (
      <li
        className={`btn ${clickedItem === index ? "btn-clicked" : ""}`}
        onClick={onClickItem}
      >
        <Link>{value}</Link>
      </li>
    );
  };

  const TitleList = () => {
    const depth_01_title = KJ_SB.menus.map((item, index) => {
      return <ListItems key={uuidv4()} value={item.app_name} index={index} />;
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
