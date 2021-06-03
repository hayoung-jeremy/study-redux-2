import React from "react";
import { v4 as uuidv4 } from "uuid";

const DataD2List = ({ kj_sb, checkedId }) => {
  // depth_02__id
  // depth_02__pid
  // depth_02__app_name
  // depth_02__app_url
  const depth_01 = kj_sb.menus.map((item) => item.menus);
  const Depth02Info = ({ id, pid, app_name, app_url }) => {
    return (
      <li>
        <p>
          <a href="#void" className={`btn`} id={id} pid={pid}>
            {app_name} : <span>{app_url}</span>
          </a>
        </p>
      </li>
    );
  };

  const ShowD2Data = () => {
    const depth_02__data = depth_01.map((item) =>
      item.map((item) => {
        return (
          <Depth02Info
            key={uuidv4()}
            id={item.id}
            pid={item.pid}
            app_name={item.app_name}
            app_url={item.app_url}
          />
        );
      })
    );
    return <>{depth_02__data}</>;
  };

  return (
    <div>
      <p>depth_02 here</p>
      <ul>
        <ShowD2Data />
      </ul>
    </div>
  );
};

export default DataD2List;
