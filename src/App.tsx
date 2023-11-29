import styles from "./App.module.css";
import LikeIcon from "./Component/Icon/LikeIcon";

function App() {
  return (
    <div className={styles.myMultiArticle}>
      <LikeIcon activeColor="orange" onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
