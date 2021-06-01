import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DataD2List from "./DataD2List";

const DataD1List = ({ KJ_SB }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [clickedItemSelf, setclickedItemSelf] = useState(currentItem);

  const ListItems = ({ index, value }) => {
    const onClickItem = () => {
      console.log(index);
      setclickedItemSelf(index);
      setCurrentItem(index);
    };
    return (
      <li
        className={`btn ${clickedItemSelf === index ? "btn-clicked" : ""}`}
        onClick={onClickItem}
      >
        <>{value.app_name}</>
      </li>
    );
  };

  const TitleList = () => {
    const depth_01_title = KJ_SB.menus.map((item, index) => {
      return <ListItems key={uuidv4()} value={item} index={index} />;
    });
    return <ul className="flex-container">{depth_01_title}</ul>;
  };

  return (
    <>
      <div className="default-container middle">
        <TitleList />
      </div>
      <DataD2List
        KJ_SB={KJ_SB}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </>
  );
};

export default DataD1List;
