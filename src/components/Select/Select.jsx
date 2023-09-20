import useOnClickOutside from "src/hooks/useOnClickOutside";
import generateRandomString from "src/utils/generateRandomString";
import styles from "./styles.module.scss";
import { useState, useRef } from "react";

const Select = ({ items, setCurrentItem, currentItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);

  const closeSelectHandler = () => {
    setIsOpen(false);
  };

  const toggleSelectHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const selectItemHandler = (item) => {
    setIsOpen(false);
    setCurrentItem(item);
  };

  useOnClickOutside(divRef, closeSelectHandler);

  return (
    <div ref={divRef} className={styles.select__container}>
      <button
        onClick={toggleSelectHandler}
        className={`${styles.select__btn} ${isOpen ? styles.isActive : ""}`}
      >
        {currentItem}
      </button>
      {isOpen && (
        <ul className={`${styles.select__list}`}>
          {items.map((item) => {
            if (item !== currentItem) {
              return (
                <li
                  className={styles.select__item}
                  key={generateRandomString()}
                >
                  <button
                    onClick={() => selectItemHandler(item)}
                    className={styles.select__itemBtn}
                  >
                    {item}
                  </button>
                </li>
              );
            } else return null;
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
