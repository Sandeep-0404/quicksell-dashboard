import React from "react";
import Card from "./Card";
import { Dots, Plus } from "tabler-icons-react";

const Group = (props) => {
  return (
    <>
      <div className="main-container">
        <div className="main-header">
          <div className="left-header">
            <h3>{props.name}</h3>
            <h3 style={{ color: "gray" }}>{props.list.length}</h3>
          </div>
          <div className="right-header">
            <Plus color="gray" fontWeight={700} size={15} />
            <Dots color="gray" size={15} />
          </div>
        </div>
        <div className="main-body">
          {props.list.map((item) => (
            <Card id={item.id} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Group;
