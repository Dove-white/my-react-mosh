import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Component/Button";
import ListGroup from "./Component/ListGroup";

function App() {
  const [tag, setTag] = useState(["Happy", "Cheerful"]);

  const handleClick = () => {
    //Add
    // const AddTag = [...tag, "exciting"];

    //Remove
    // const RemoveTag = tag.filter((tag) => tag != "Happy");

    //UpDate
    const upDate = tag.map((tag) =>
      tag.toLocaleLowerCase() === "happy" ? "Happiness" : tag
    );
    setTag(upDate);
  };

  return (
    <div className={styles.myMultiArticle}>
      <div>
        <ListGroup items={tag.map((tag) => tag)} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <Button onClick={() => setTag([...tag, "exciting"])}>
          Add Exciting
        </Button>
        <Button color="dark" onClick={() => setTag([...tag, "Happy"])}>
          Add Happy
        </Button>
        <Button
          color="secondary"
          onClick={() => setTag(tag.filter((tag) => tag != "Happy"))}
        >
          Remove Happy
        </Button>
        <Button color="success" onClick={handleClick}>
          Click me
        </Button>
      </div>
    </div>
  );
}

export default App;
