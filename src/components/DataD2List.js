import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const DataD2List = ({ KJ_SB, currentItem, setCurrentItem }) => {
  const [clickedItem, setClickedItem] = useState(0);
  const [clickedItemSelf, setClickedItemSelf] = useState(0);

  const ListItems = ({ index, value }) => {
    const onClickItem = () => {
      setClickedItemSelf(index);
    };
    return (
      <li
        className={`btn ${clickedItemSelf === index ? "btn-clicked" : ""}`}
        onClick={onClickItem}
      >
        <Link>{value}</Link>
      </li>
    );
  };
  const TitleList = () => {
    const depth_02__arr = KJ_SB.menus.map((item) => {
      return item.menus;
    });
    const depth_02__title = depth_02__arr.map((item) => {
      const titleNames = item.map((item, index) => {
        return <ListItems key={uuidv4()} value={item.app_name} index={index} />;
      });
      return titleNames;
    });
    return (
      <ul className="flex-container">
        {depth_02__title.filter((data, index) => {
          return index === currentItem;
        })}
      </ul>
    );
  };

  return (
    <div className="default-container middle">
      <TitleList />
    </div>
  );
};

export default DataD2List;
