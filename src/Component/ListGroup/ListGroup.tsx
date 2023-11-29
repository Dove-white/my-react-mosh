import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

interface ListItemProps {
  active: boolean;
}

const ListItems = styled.li<ListItemProps>`
  padding: 1rem;
  margin: 0 2rem 0 0;
  border-radius: 1rem;
  background: ${(props) => (props.active ? "blue" : "none")};
  color: ${(props) => (props.active ? "white" : "none")};
  text-align: ${(props) => (props.active ? "center" : "none")};
`;

interface props {
  heading: string;
  items: string[];
}

function ListGroup({ heading, items }: props) {
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1 className="pt-4">{heading}</h1>
      {items.length == 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItems
            key={item}
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </ListItems>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
