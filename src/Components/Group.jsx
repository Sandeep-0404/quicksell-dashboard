import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  AntennaBars1,
  AntennaBars3,
  AntennaBars4,
  AntennaBars5,
  Dots,
  Plus,
} from "tabler-icons-react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { BiSolidAdjust } from "react-icons/bi";
import { BsFillXCircleFill } from "react-icons/bs";
import { BsFillStopCircleFill } from "react-icons/bs";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import nick from "./nick.jpeg";
import ramesh from "./ramesh.jpg";
import shankar from "./shankar.jpeg";
import anoop from "./anoop.webp";
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
            {props.name === "Done" && <BiSolidCheckCircle color="blue" />}
            {props.name === "In Progress" && <BiSolidAdjust color="orange" />}
            {props.name === "Cancelled" && <BsFillXCircleFill color="red" />}
            {props.name === "Todo" && <BsFillStopCircleFill color="gray" />}
            {props.name === "Backlog" && (
              <BsFillExclamationCircleFill color="#F99417" />
            )}
            {props.name === "Urgent" && (
              <BsFillExclamationSquareFill color="#CD5C08" />
            )}
            {props.name === "High" && <AntennaBars5 color="gray" />}
            {props.name === "Medium" && <AntennaBars4 color="gray" />}
            {props.name === "Low" && <AntennaBars3 color="gray" />}
            {props.name === "No priority" && <AntennaBars1 color="gray" />}
            {props.name === "Anoop sharma" && (
              <img src={anoop} className="image" />
            )}
            {props.name === "Suresh" && <img src={ramesh} className="image" />}
            {props.name === "Yogesh" && <img src={anoop} className="image" />}
            {props.name === "Shankar Kumar" && (
              <img src={shankar} className="image" />
            )}
            {props.name === "Ramesh" && <img src={ramesh} className="image" />}
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
            <Card
              id={item.id}
              title={item.title}
              tag={item.tag[0]}
              name={props.name}
              status={props.status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Group;
