import { useState } from "react";
import "./ListGroup.css";

interface props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: props) {
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <p className="pt-4">{heading}</p>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group ul-list">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
