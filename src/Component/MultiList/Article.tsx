import { useState } from "react";
import styles from "./article.module.css";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";

interface props {
  heading: string;
  detail: string;
}

const Article = ({ heading = "No Article Found", detail }: props) => {
  const [closeBtn, setCloseBtn] = useState(false);
  const [dropdownBtn, setDropdownBtn] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [styleArticle, setStyleArticle] = useState(styles.myArticle);

  return (
    <div>
      <div className={styleArticle}>
        {heading}
        {dropdownBtn && (
          <IoIosArrowDropdown
            onClick={() => {
              setCloseBtn(true);
              setDropdownBtn(false);
              setShowDetail(true);
              setStyleArticle(styles.myArticleClick);
            }}
          />
        )}
        {closeBtn && (
          <IoClose
            onClick={() => {
              setCloseBtn(false);
              setDropdownBtn(true);
              setShowDetail(false);
              setStyleArticle(styles.myArticle);
            }}
          />
        )}
      </div>
      {showDetail && <div className={styles.myArticleDetail}>{detail}</div>}
    </div>
  );
};

export default Article;
