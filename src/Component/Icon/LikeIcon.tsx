import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface iconProps {
  onClick: () => void;
  activeColor?: string;
}

const transition = {
  transition: "400ms ease-in-out",
};

const LikeIcon = ({ onClick, activeColor = "red" }: iconProps) => {
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  const [status, setStatus] = useState(false);

  if (status)
    return (
      <div>
        <p>
          Thanks for the Like <FaHeart color="red" />{" "}
        </p>
        <FaHeart
          style={transition}
          color={activeColor}
          size="2rem"
          onClick={toggle}
        />
      </div>
    );
  return (
    <div>
      <p>Please Like</p>
      <FaRegHeart style={transition} size="2rem" onClick={toggle} />
    </div>
  );
};

export default LikeIcon;
