import { useEffect, useState } from "react";
import CardTag from "./CardTag";
import ThreeDots from "./ThreeDots";

const Card = (props) => {
  const colors = [
    "#000000", // Black
    "#000080", // Navy Blue
    "#006400", // Dark Green
    "#800000", // Maroon
    "#800080", // Dark Purple
    "#008080", // Dark Cyan
    "#2F4F4F", // Dark Slate Gray
    "#4B0082", // Indigo
    "#B22222", // FireBrick
    "#556B2F", // Dark Olive Green
  ];
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[randomIndex]);
  }, []);

  return (
    <>
      <div className="card-main-box">
        <div className="card-header">
          <h3>{props.id}</h3>
          <div className="profile-image" style={{ background: randomColor }}>
            <span>AS</span>
          </div>
        </div>
        <div className="card-main-heading">
          <h3>{props.title}</h3>
        </div>
        <div className="card-footer">
          <ThreeDots />
          <CardTag />
        </div>
      </div>
    </>
  );
};

export default Card;
