import React from "react";
import data_personal from "../db/data_personal.json";
import { v4 as uuidv4 } from "uuid";

const DataD1List = () => {
  // 광주은행 메뉴트리
  const [KJ_SB] = data_personal;
  console.log(KJ_SB.menus);

  const menu_tree = KJ_SB.menus.map((item) => {
    const depth_01__title = item.app_name;
    const depth_01__url = item.app_url;
    return (
      <div>
        <ul>
          <li key={uuidv4()}>
            <form>
              <input
                className="btn"
                type="text"
                placeholder="메뉴를 입력하세요"
                value={depth_01__title}
              />
              <button className="btn">변경</button>
            </form>
            <form>
              <input
                className="btn"
                type="text"
                placeholder="메뉴 경로를 입력하세요"
                value={depth_01__url}
              ></input>
              <button className="btn">변경</button>
            </form>
          </li>
        </ul>
      </div>
    );
  });
  return <>{menu_tree}</>;
};

export default DataD1List;
