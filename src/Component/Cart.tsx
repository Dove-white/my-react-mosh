import { useState } from "react";
import Button from "./Button";
import ListGroup from "./ListGroup";

interface Props {
  cartItems: string[];
  onClick: () => void;
  onClickToAdd: () => void;
}

const Cart = ({ cartItems, onClick, onClickToAdd }: Props) => {
  const [isVisible, setIsVisibility] = useState({
    clearBtn: true,
    returnBtn: false,
  });

  const clickHandler = () => {
    setIsVisibility({ ...isVisible, clearBtn: false, returnBtn: true });
    onClick();
  };
  const clickHandlerForReturn = () => {
    setIsVisibility({ ...isVisible, clearBtn: true, returnBtn: false });
    onClickToAdd();
  };

  return (
    <div>
      <ListGroup items={cartItems.map((item) => item)}></ListGroup>
      {isVisible.clearBtn && (
        <Button color="danger" onClick={clickHandler}>
          Clear
        </Button>
      )}
      {isVisible.returnBtn && (
        <Button onClick={clickHandlerForReturn}>Return</Button>
      )}
    </div>
  );
};

export default Cart;
