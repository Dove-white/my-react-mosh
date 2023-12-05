import { useState } from "react";
import Button from "./Button";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

interface Props {
  children: String;
  maxChars?: number;
  bgColor?: string;
}

const ExpandableText = ({
  children,
  maxChars = 100,
  bgColor = "black",
}: Props) => {
  const [isExpand, setExpand] = useState({
    itSelf: false,
    change: false,
  });

  const [color, setColor] = useState("bg-white");

  const handleChange = () => {
    setColor(isExpand.change ? "bg-white" : "bg-black");
    setExpand({ ...isExpand, change: !isExpand.change });
  };

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpand.itSelf ? children : children.slice(0, maxChars);

  return (
    <div
      className={
        color === "bg-black"
          ? "bg-" + bgColor + " " + "text-white vh-100 p-4"
          : "bg-white p-4"
      }
    >
      <div style={{ position: "absolute", top: "0", right: "10px" }}>
        {isExpand.change ? (
          <IoIosSunny
            color={color === "bg-black" ? "white" : "black"}
            onClick={handleChange}
          />
        ) : (
          <IoIosMoon
            color={color === "bg-black" ? "white" : "black"}
            onClick={handleChange}
          />
        )}
      </div>
      {text}...
      <Button
        onClick={() => setExpand({ ...isExpand, itSelf: !isExpand.itSelf })}
        color={isExpand.itSelf ? "secondary" : "primary"}
      >
        {isExpand.itSelf ? "< Less" : "More >"}
      </Button>
    </div>
  );
};

export default ExpandableText;
