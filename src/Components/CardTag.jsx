import React from "react";
import { AntennaBars5 } from "tabler-icons-react";

const CardTag = ({ tag }) => {
  return (
    <>
      <div className="card-tag-main">
        <div className="card-tag-container">
          <AntennaBars5 size={15} />
          <p>{tag}</p>
        </div>
      </div>
    </>
  );
};

export default CardTag;
