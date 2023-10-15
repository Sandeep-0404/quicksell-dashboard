import React from "react";
import { AntennaBars5 } from "tabler-icons-react";

const CardTag = () => {
  return (
    <>
      <div className="card-tag-main">
        <div className="card-tag-container">
          <AntennaBars5 size={15} />
          <p>Feature Request</p>
        </div>
      </div>
    </>
  );
};

export default CardTag;
