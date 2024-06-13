import Logo from "../assets/rocket.svg";
import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" width="100" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
