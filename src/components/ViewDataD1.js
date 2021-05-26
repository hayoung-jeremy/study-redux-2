// components 폴더에는 오직 view만 담당하는 component 들을 구성한다.
import React from "react";
import RenderDataD1 from "./RenderDataD1";

const ViewDataD1 = () => {
  return (
    <section>
      <h2 className="blind">rendering depth 01 data here</h2>
      <div>
        <RenderDataD1 />
      </div>
      <button className="btn">자세히보기</button>
    </section>
  );
};

export default ViewDataD1;
