// components 폴더에는 오직 view만 담당하는 component 들을 구성한다.
import data_personal from "../db/data_personal.json";
import DataD1List from "./DataD1List";

const ViewDataPersonal = () => {
  return <DataD1List />;
};

export default ViewDataPersonal;
