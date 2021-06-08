// components 폴더에는 오직 view만 담당하는 component 들을 구성한다.
import DataD1List from "./DataD1List";
import data_personal from "../db/data_personal.json";

const ViewDataPersonal = () => {
  const kj_sb = data_personal;
  // console.log(kj_sb);
  return <DataD1List kj_sb={kj_sb} />;
};

export default ViewDataPersonal;
