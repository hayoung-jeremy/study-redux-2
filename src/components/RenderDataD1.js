// components 폴더에는 오직 view만 담당하는 component 들을 구성한다.
import React from "react";

const RenderDataD1 = ({
  titleD1,
  onSubmitTitleD1,
  onChangeTitleD1,
  pathD1,
  onSubmitPathD1,
  onChangePathD1,
}) => {
  return (
    <section>
      <h2 className="blind">rendering depth 01 data here</h2>
      <div>
        <form onSubmit={onSubmitTitleD1}>
          <input
            type="text"
            placeholder="메뉴를 입력하세요"
            onChange={onChangeTitleD1}
            value={titleD1}
          />
          <button>변경</button>
        </form>
      </div>
      <div>
        <form onSubmit={onSubmitPathD1}>
          <input
            type="text"
            placeholder="메뉴 경로를 입력하세요"
            onChange={onChangePathD1}
            value={pathD1}
          ></input>
          <button>변경</button>
        </form>
      </div>
    </section>
  );
};

export default RenderDataD1;
