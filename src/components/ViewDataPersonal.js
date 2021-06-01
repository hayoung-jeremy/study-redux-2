// components 폴더에는 오직 view만 담당하는 component 들을 구성한다.
import data_personal from "../db/data_personal.json";
import DataD1List from "./DataD1List";

const ViewDataPersonal = () => {
  const [KJ_SB] = data_personal;

  return (
    <section>
      <h2 className="blind">rendering personal banking data here</h2>
      <DataD1List KJ_SB={KJ_SB} />
    </section>
  );
};

export default ViewDataPersonal;
