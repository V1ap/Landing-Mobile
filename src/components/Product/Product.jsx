import { useState } from "react";
import styles from "./styles.module.scss";
import Select from "../Select/Select";

const Product = () => {
  const [currentImg, setCurrentImg] = useState("black");
  const [currentColor, setCurrentColor] = useState("BLACK");
  const [currentSize, setCurrentSize] = useState("2");

  return (
    <section className={styles.product}>
      <div className={styles.product__topPanel}>
        <p className={styles.product__grade}>Excellent 4.8/5</p>
        <span className={styles.product__trustPilot}></span>
        <p className={styles.product__rank}>best selling</p>
      </div>

      <h1 className={styles.product__header}>ORTHOPEDIC SLIPPERS</h1>

      <div className={styles.product__photoContainer}>
        <img
          src="src/assets/black.png"
          alt="black slippers"
          className={`${styles.product__bigImg} ${
            currentImg === "black" ? styles.product__bigImg_isActive : ""
          }`}
        />
        <img
          src="src/assets/orange.png"
          alt="orange slippers"
          className={`${styles.product__bigImg} ${
            currentImg === "orange" ? styles.product__bigImg_isActive : ""
          }`}
        />
        <img
          src="src/assets/pink.png"
          alt="pink slippers"
          className={`${styles.product__bigImg} ${
            currentImg === "pink" ? styles.product__bigImg_isActive : ""
          }`}
        />
        <img
          src="src/assets/yellow.png"
          alt="yellow slippers"
          className={`${styles.product__bigImg} ${
            currentImg === "yellow" ? styles.product__bigImg_isActive : ""
          }`}
        />
      </div>

      <ul className={styles.product__btnsList}>
        <li className={styles.product__btnsItem}>
          <button
            onClick={() => setCurrentImg("black")}
            className={`${styles.product__btn} ${styles.black} ${
              currentImg === "black" ? styles.product__btn_isActive : ""
            }`}
          ></button>
        </li>
        <li className={styles.product__btnsItem}>
          <button
            onClick={() => setCurrentImg("orange")}
            className={`${styles.product__btn} ${styles.orange} ${
              currentImg === "orange" ? styles.product__btn_isActive : ""
            }`}
          ></button>
        </li>
        <li className={styles.product__btnsItem}>
          <button
            onClick={() => setCurrentImg("pink")}
            className={`${styles.product__btn} ${styles.pink} ${
              currentImg === "pink" ? styles.product__btn_isActive : ""
            }`}
          ></button>
        </li>
        <li className={styles.product__btnsItem}>
          <button
            onClick={() => setCurrentImg("yellow")}
            className={`${styles.product__btn} ${styles.yellow} ${
              currentImg === "yellow" ? styles.product__btn_isActive : ""
            }`}
          ></button>
        </li>
      </ul>

      <div className={styles.product__info}>
        <p className={styles.product__fastDelivery}>
          Fast Delivery:
          <span className={styles.product__param}> 2-4 days from SA 🇿🇦</span>
        </p>
        <p className={styles.product__inStock}>
          In Stock:
          <span className={styles.product__param}>
            {" "}
            Shipping from Johannesburg 🇿🇦
          </span>
        </p>
        <div className={styles.product__stars}>
          <span className={styles.product__star}></span>
          <span className={styles.product__star}></span>
          <span className={styles.product__star}></span>
          <span className={styles.product__star}></span>
          <span className={styles.product__star}></span>
          <span className={styles.product__star}></span>
          <span className={styles.product__numberRated}>(10)</span>
        </div>
      </div>

      <ul className={styles.product__selectorsList}>
        <li className={styles.product__selectorsItem}>
          <p className={styles.product__selectorsHeader}>color</p>
          <Select
            items={["BLACK", "ORANGE", "PINK", "YELLOW"]}
            currentItem={currentColor}
            setCurrentItem={(color) => setCurrentColor(color)}
          />
        </li>
        <li className={styles.product__selectorsItem}>
          <p className={styles.product__selectorsHeader}>size</p>
          <Select
            items={["2", "3", "4", "5"]}
            currentItem={currentSize}
            setCurrentItem={(size) => setCurrentSize(size)}
          />
        </li>
      </ul>

      <a href="https://www.youtube.com" className={styles.product__link}>
        BUY NOW
      </a>
    </section>
  );
};

export default Product;
