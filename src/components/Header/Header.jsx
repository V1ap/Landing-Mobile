import styles from "./styles.module.scss";
import logo from "src/assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__offer}>
        <p className={styles.header__text}>
          🇿🇦 SPECIAL OFFER + FREE DELIVERY 2-4 DAYS IN SA 🇿🇦
        </p>
      </div>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" className={styles.header__img} />
      </div>
    </header>
  );
};

export default Header;
