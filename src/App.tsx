import Button from "./Component/Button";
import Alert from "./Component/Alert";
import ListGroup from "./Component/ListGroup";
import { useState } from "react";

function App() {
  let [visible, setVisibility] = useState(false);
  let [changeColor, setColor] = useState("success");

  return (
    <div>
      {visible && (
        <Alert color={changeColor} dismiss="alert-dismissible">
          Hello <span>world</span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setVisibility(false);
              setColor("success");
            }}
          ></button>
        </Alert>
      )}
      <Button color={changeColor} onClick={() => setVisibility(true)}>
        Primary
      </Button>
      <ListGroup
        heading="Click on blue to change button and alert color"
        items={["Blue"]}
        onSelectItem={() => setColor("primary")}
      />
    </div>
  );
}

export default App;
