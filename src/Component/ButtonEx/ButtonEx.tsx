import styles from "./ButtonEx.module.css";

const ButtonEx = () => {
  return (
    <button className={[styles.btn, styles.btnOrange].join(" ")}>
      ButtonEx
    </button>
  );
};

export default ButtonEx;
