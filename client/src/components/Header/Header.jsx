import styles from "./Header.module.css";
import linked from "../../assets/logo-linkedin.svg"
import git from "../../assets/logo-github.svg"
import tele from "../../assets/logo-telegram.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>To-Do List</h1>
        <ul className={styles.socialMedia}>
          <li>
            <a className={styles.link} href="https://linkedin.com" target="blank">
              <img src={linked} alt="" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com" target="blank">
              <img src={git} alt="" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://t.me" target="blank" >
              <img src={tele} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
