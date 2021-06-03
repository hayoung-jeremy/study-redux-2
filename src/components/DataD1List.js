import React, { useState } from "react";
import DataD2List from "./DataD2List";
import { v4 as uuidv4 } from "uuid";

const DataD1List = ({ kj_sb }) => {
  // check selected id / 2: depth_1 첫번째 메뉴 (메인)
  const [checkedId, setCheckedId] = useState("2");

  // 클릭한 대상의 id 를 checkedId 에 저장, depth_2 로 보내서, depth_2 의 pid 와 같은 depth_2 를 보여줘야함
  const getCheckedId = (e) => {
    setCheckedId(e.target.id);
  };

  const Depth01Info = ({ id, value, index }) => {
    return (
      <div>
        <a
          href="#void"
          className={`btn ${checkedId === id ? "btn-clicked" : ""}`}
          id={id}
          onClick={getCheckedId}
        >
          {value}
        </a>
      </div>
    );
  };

  const ShowD1Data = () => {
    const depth_01__data = kj_sb.menus.map((item) => {
      // depth_01__id / depth_01__app_name
      return <Depth01Info key={uuidv4()} id={item.id} value={item.app_name} />;
    });

    return (
      <div className="default-container">
        <div className="flex-container">{depth_01__data}</div>
      </div>
    );
  };

  return (
    <>
      <p>depth_01 app_name here</p>
      <ShowD1Data />
      <DataD2List checkedId={checkedId} />
    </>
  );
};

export default DataD1List;
