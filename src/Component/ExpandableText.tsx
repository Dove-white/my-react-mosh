import { ReactNode, useState } from "react";
import Button from "./Button";

interface Props {
  children: String;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpand, setExpand] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpand ? children : children.slice(0, maxChars);

  return (
    <div>
      {text}...
      <Button
        onClick={() => setExpand(!isExpand)}
        color={isExpand ? "secondary" : "primary"}
      >
        {isExpand ? "< Less" : "More >"}
      </Button>
    </div>
  );
};

export default ExpandableText;
