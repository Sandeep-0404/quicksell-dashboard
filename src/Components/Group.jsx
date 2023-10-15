import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Dots, Plus } from "tabler-icons-react";

const Group = (props) => {
  const [list, setList] = useState(props.list);

  useEffect(() => {
    console.log(props.sort);
    const sortedArray = [...props.list];
    if (props.sort === "title") {
      sortedArray.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      sortedArray.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    setList(sortedArray);
  }, [props.sort]);

  return (
    <>
      <div
        className="main-container"
        style={{ display: props.list.length == 0 ? "none" : "" }}
      >
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
          {list.map((item) => (
            <Card id={item.id} title={item.title} tag={item.tag[0]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Group;
