import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface iconProps {
  onClick: () => void;
  activeColor?: string;
}

const LikeIcon = ({ onClick, activeColor = "red" }: iconProps) => {
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  const [status, setStatus] = useState(false);
  if (status === false) return <FaRegHeart size="2rem" onClick={toggle} />;
  return <FaHeart color={activeColor} size="2rem" onClick={toggle} />;
};

export default LikeIcon;
